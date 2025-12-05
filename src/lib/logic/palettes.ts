import chroma from "chroma-js"
import { blendColors, Color, getPaletteFromCJSScale, type Palette } from "./color"
import { getRandomIndex } from "./utilities"

export const generateBlendScalarPalette = (colorAmount: number, baseColorA: Color, baseColorB: Color): Palette => {
    const blendedColor = blendColors(baseColorA, baseColorB)
    const blendedColorLightnesses = blendedColor.getPropertyStopsToMax('lightness', 4)
    const midColor = blendedColorLightnesses[getRandomIndex(blendedColorLightnesses)]

    const scale = chroma.scale([baseColorA.asChromaJS(), midColor.asChromaJS(), baseColorB.asChromaJS()])
    const colors = getPaletteFromCJSScale(scale, colorAmount)

    return colors
}