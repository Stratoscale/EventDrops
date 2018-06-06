import defaultsDeep from 'lodash.defaultsdeep';
import axis from './axis';
import bounds from './bounds';
import defaultConfiguration from './config';
import dropLine from './dropLine';
import zoom from './zoom';
import { addMetaballsDefs } from './metaballs';
import './style.css';
import { withinRange } from './withinRange';
import { getShiftedTransform } from './utils';

// do not export anything else here to keep window.eventDrops as a function
export default ({ d3 = window.d3, ...customConfiguration }) => {
    const chart = selection => {
        const config = defaultsDeep(
            customConfiguration || {},
            defaultConfiguration(d3)
        );

        const {
            zoom: zoomConfig,
            metaballs,
            label: { width: labelWidth, padding: labelsPadding },
            line: { height: lineHeight },
            range: { start: rangeStart, end: rangeEnd },
            margin,
        } = config;

        const getEvent = () => d3.event; // keep d3.event mutable see https://github.com/d3/d3/issues/2733

        // Follow margins conventions (https://bl.ocks.org/mbostock/3019563)
        const width = selection.node().clientWidth; // - margin.left - margin.right;

        const xScale = d3
            .scaleTime()
            .domain([rangeStart, rangeEnd])
            .range([
                labelWidth + labelsPadding,
                width - margin.left - margin.right,
            ]);

        chart._scale = xScale;

        const root = selection.selectAll('svg').data(selection.data());

        root.exit().remove();

        const svgEnter = root
            .enter()
            .append('svg')
            .classed('event-drop-chart', true);

        svgEnter.append('g').classed('viewport', true);

        const svgUpdate = svgEnter.merge(root);

        if (metaballs) {
            svgEnter.call(addMetaballsDefs(config));
        }

        if (zoomConfig) {
            svgUpdate.call(zoom(d3, svgUpdate, config, xScale, draw, getEvent));
        }

        const currentTransfom = getShiftedTransform(
            d3.zoomTransform(svgUpdate.node()),
            labelWidth,
            labelsPadding,
            d3
        );
        const newScale = currentTransfom.rescaleX(xScale);

        svgUpdate
            .attr('width', width)
            .attr(
                'height',
                d => (d.length + 1) * lineHeight + margin.top + margin.bottom
            )
            .select('.viewport')
            .attr('transform', `translate(${margin.left},${margin.top})`)
            .call(draw(config, newScale));
    };

    chart.scale = () => chart._scale;
    chart.filteredData = () => chart._filteredData;

    const draw = (customConfiguration, scale = chart.scale()) => selection => {
        const config = defaultsDeep(
            customConfiguration || {},
            defaultConfiguration(d3)
        );

        const { drop: { date: dropDate } } = config;

        const dateBounds = scale.domain().map(d => new Date(d));
        const filteredData = selection.data().map(dataSet => {
            if (!Array.isArray(dataSet)) {
                throw new Error(
                    'Selection data is not an array. Are you sure you provided an array of arrays to `data` function?'
                );
            }

            return dataSet.map(row => {
                if (!row.fullData) {
                    row.fullData = config.drops(row);
                    if (!row.fullData) {
                        throw new Error(
                            'No drops data has been found. It looks by default in the `data` property. You can use the `drops` configuration parameter to tune it.'
                        );
                    }
                }

                row.data = row.fullData.filter(d =>
                    withinRange(dropDate(d), dateBounds)
                );

                return row;
            });
        });

        chart._scale = scale;
        chart._filteredData = filteredData[0];

        selection
            .data(filteredData)
            .call(dropLine(config, scale))
            .call(bounds(config, scale))
            .call(axis(d3, config, scale));
    };

    chart.draw = draw;

    return chart;
};
