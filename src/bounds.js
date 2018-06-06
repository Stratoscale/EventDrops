export default (config, xScale) => selection => {
    const {
        bound: {
            format: dateFormat,
            location: boundsLocation,
            height: boundsHeight,
        },
        line: { height: lineHeight },
    } = config;

    const bounds = selection.selectAll('.bound').data(['start', 'end']);
    const numberRows = selection.data()[0].length;
    const boundsY =
        boundsLocation === 'end'
            ? lineHeight * numberRows + boundsHeight
            : -boundsHeight;

    bounds.exit().remove();

    const boundsEnter = bounds
        .enter()
        .append('g')
        .classed('bound', true)
        .classed('start', d => d === 'start')
        .classed('end', d => d === 'end');

    boundsEnter.append('text');

    boundsEnter
        .merge(bounds)
        .attr('transform', `translate(0, ${boundsY})`)
        .select('text')
        .attr('x', d => xScale.range()[d === 'start' ? 0 : 1])
        .attr('text-anchor', d => d)
        .text(d => dateFormat(xScale.domain()[d === 'start' ? 0 : 1]));
};
