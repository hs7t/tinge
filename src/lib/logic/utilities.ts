import chroma from 'chroma-js'
import ky from 'ky'

export const chooseBestContrastingForColour = (
    colour: chroma.Color,
    optionA: chroma.Color,
    optionB: chroma.Color,
) => {
    const contrastA = chroma.contrast(colour, optionA)
    const contrastB = chroma.contrast(colour, optionB)

    return contrastA > contrastB ? optionA : optionB
}

export const getNameForColour = async (
    colour: chroma.Color,
): Promise<string> => {
    const url = new URL('https://api.color.pizza/v1/')

    let result
    try {
        result = (await ky
            .get(url, {
                searchParams: {
                    values: colour.hex().replace('#', ''),
                },
            })
            .json()) as string

        result = JSON.parse(result)
    } catch {
        return ''
    }

    return result.paletteTitle
}

export const getCSSPropertyValue = (
    value: string,
    targetElement: HTMLElement,
    fallback = '',
): string => {
    if (!targetElement) return fallback

    const found = window.getComputedStyle(targetElement).getPropertyValue(value)
    const result = found ? found : fallback

    return result
}
