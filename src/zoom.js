import { getShiftedTransform } from './utils';

export default (d3, svg, config, xScale, draw, getEvent) => {
    const {
        label: { width: labelsWidth, padding: labelsPadding },
        zoom: { onZoomStart, onZoom, onZoomEnd, minimumScale, maximumScale },
    } = config;

    const zoom = d3.zoom().scaleExtent([minimumScale, maximumScale]);

    zoom.on('zoom.start', onZoomStart).on('zoom.end', onZoomEnd);

    zoom.on('zoom', args => {
        const transform = getShiftedTransform(
            getEvent().transform,
            labelsWidth,
            labelsPadding,
            d3
        );

        const newScale = transform.rescaleX(xScale);

        svg.call(draw(config, newScale));

        if (onZoom) {
            onZoom(args);
        }
    });

    return zoom;
};
