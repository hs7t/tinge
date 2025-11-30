import chroma from 'chroma-js'

export const chooseBestContrastingForColour = (
    colour: chroma.Color,
    optionA: chroma.Color,
    optionB: chroma.Color,
) => {
    const contrastA = chroma.contrast(colour, optionA)
    const contrastB = chroma.contrast(colour, optionB)

    return contrastA >= contrastB ? optionA : optionB
}
