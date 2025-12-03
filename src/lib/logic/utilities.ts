import chroma from 'chroma-js'
import ky from 'ky'

export const chooseBestContrastingForColor = (
    color: chroma.Color,
    optionA: chroma.Color,
    optionB: chroma.Color,
) => {
    const contrastA = chroma.contrast(color, optionA)
    const contrastB = chroma.contrast(color, optionB)

    return contrastA > contrastB ? optionA : optionB
}

export const getNamesForColors = async (
    colors: chroma.Color[],
): Promise<Array<string>> => {
    const url = new URL('https://api.color.pizza/v1/')

    const colorHEXCodes: Array<string> = []
    for (const color of colors) {
        colorHEXCodes.push(color.hex())
    }
    const colorsSearchString = colors.join(',').replaceAll('#', '')

    let result
    try {
        result = (await ky
            .get(url, {
                searchParams: {
                    values: colorsSearchString,
                },
            })
            .json()) as any
    } catch {
        return colors.map(() => 'Unknown')
    }

    return colors.map((_color, i) => {
        return result.colors[i]['name']
    })
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
