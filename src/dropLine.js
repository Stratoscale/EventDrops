import drop from './drop';

export default (config, xScale) => selection => {
    const {
        metaballs,
        label: { text: labelText, padding: labelPadding },
        line: { color: lineColor, height: lineHeight },
    } = config;

    const lines = selection.selectAll('.drop-line').data(d => d);

    const gEnter = lines
        .enter()
        .append('g')
        .classed('drop-line', true);

    gEnter
        .append('line')
        .classed('line-separator', true)
        .attr('x1', xScale(xScale.domain()[0]))
        .attr('x2', xScale(xScale.domain()[1]))
        .attr('y1', lineHeight)
        .attr('y2', lineHeight);

    const g = gEnter
        .merge(lines)
        .attr('fill', lineColor)
        .attr('transform', (_, index) => `translate(0, ${index * lineHeight})`);

    gEnter
        .append('g')
        .classed('drops', true)
        .append('rect'); // The rect allow us to size the drops g element

    gEnter.append('text');

    const drops = g
        .select('.drops')
        .attr('transform', () => `translate(${0}, ${lineHeight / 2})`)
        .call(drop(config, xScale));

    drops
        .select('rect') // The rect allow us to size the drops g element
        .attr('x', 0)
        .attr('y', -config.line.height / 2)
        .attr('width', 1) // For the rect to impact its parent size it must have a non zero width
        .attr('height', config.line.height)
        .attr('fill', 'transparent');

    if (metaballs) {
        drops.style('filter', 'url(#metaballs)');
    }

    g
        .select('text')
        .attr('x', xScale(xScale.domain()[0]) - labelPadding)
        .attr('y', lineHeight / 2)
        .attr('dy', '0.25em')
        .attr('text-anchor', 'end')
        .text(labelText);

    lines.selectAll('text').text(labelText);
    lines.selectAll('.drops').call(drop(config, xScale));

    lines.exit().remove();
};
