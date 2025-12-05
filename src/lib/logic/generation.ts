import { getRandomBaseColor } from "./color"
import { generateBlendScalarPalette, generateClusteredPalette, generatePoligonicPalette } from "./palettes"
import { getRandomIndex } from "./utilities"

export const getRandomPalette = (colorAmount: number) => {
    const methods = [
        () => {
            // Blend scalar
            return generateBlendScalarPalette(colorAmount, getRandomBaseColor(), getRandomBaseColor())
        },
        () => {
            // Analog++
            const points = Math.floor(Math.random() * 3) + 1
            return generateClusteredPalette(colorAmount, getRandomBaseColor(), points)
        },
        () => {
            // N-adic
            const points = Math.floor(Math.random() * 5) + 1
            return generatePoligonicPalette(colorAmount, getRandomBaseColor(), points)
        }
    ]

    const method = methods[getRandomIndex(methods)]
    return method()
}