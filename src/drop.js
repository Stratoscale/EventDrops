import uniqBy from 'lodash.uniqby';

const filterOverlappingDrop = (xScale, dropDate) => d =>
    uniqBy(d.data, data => Math.round(xScale(dropDate(data))));

export default (config, xScale) => selection => {
    const {
        drop: {
            color: dropColor,
            radius: dropRadius,
            date: dropDate,
            onClick,
            onMouseOver,
            onMouseOut,
            key,
        },
    } = config;

    const drops = selection
        .selectAll('.drop', key)
        .data(filterOverlappingDrop(xScale, dropDate));

    const dropsEnter = drops
        .enter()
        .append('circle')
        .classed('drop', true)
        .on('click', onClick)
        .on('mouseover', onMouseOver)
        .on('mouseout', onMouseOut);

    dropsEnter
        .merge(drops)
        .attr('cx', d => xScale(dropDate(d)))
        .attr('r', dropRadius)
        .attr('fill', dropColor);

    drops
        .exit()
        .on('click', null)
        .on('mouseover', null)
        .on('mouseout', null)
        .remove();
};
