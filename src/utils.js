export const getShiftedTransform = (
    originalTransform,
    labelsWidth,
    labelsPadding,
    d3
) => {
    const { x, y, k } = originalTransform;

    return d3.zoomIdentity
        .translate(x, y) // apply zoom transformation panning
        .scale(k); // apply zoom transformation scaling
};
