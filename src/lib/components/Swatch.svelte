<script lang="ts">
    import type { SwatchData } from '$lib/shared.svelte'

    import chroma from 'chroma-js'
    import {
        chooseBestContrastingForColor,
        getCSSPropertyValue,
    } from '$lib/logic/utilities'

    import PinButton from './buttons/PinButton.svelte'

    let { swatchData }: { swatchData: SwatchData } = $props()

    let element: HTMLElement | undefined = undefined

    let contrastingColor = $state('#000000')

    $effect(() => {
        if (!element) return

        const constrastFallBack = '#000000'
        contrastingColor = chooseBestContrastingForColor(
            swatchData.color,
            chroma(
                getCSSPropertyValue(
                    '--t-color-contrast-A',
                    element,
                    constrastFallBack,
                ),
            ),
            chroma(
                getCSSPropertyValue(
                    '--t-color-contrast-B',
                    element,
                    constrastFallBack,
                ),
            ),
        ).css('rgb')
    })
</script>

<div
    class="swatch"
    bind:this={element}
    style:--swatch-color={swatchData.color.hex()}
    style:--color-best-contrasting={contrastingColor}
>
    <div class="info">
        <span class="text name">
            {swatchData.name}
        </span>
        <button
            class="reference"
            aria-label="Copy color {swatchData.color.hex()}"
            title="Copy color"
            onclick={() => {
                navigator.clipboard.writeText(swatchData.color.hex())
            }}
        >
            {swatchData.color.hex()}
        </button>
    </div>
    <PinButton
        action={() => {
            swatchData.locked = !swatchData.locked
        }}
    />
</div>

<style>
    .swatch {
        border-radius: var(--t-border-radius-A);
        padding: 4%;

        color: var(--color-best-contrasting);
        background-color: var(--swatch-color);

        display: flex;
        flex-direction: row;
        flex: 1;

        justify-content: space-between;
        align-items: center;
    }

    .swatch .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .swatch .info .text.name {
        font-weight: 500;
    }

    .swatch .info button.reference {
        padding: 0.3ch;
        margin: -0.3ch;
        font-size: var(--t-font-size-B);
        cursor: pointer;

        border-radius: var(--t-border-radius-A);
        background-color: transparent;
        opacity: var(--t-opacity-B);
        color: var(--color-best-contrasting);

        transition: all 80ms;
    }

    .swatch .info button.reference:hover {
        opacity: 1;

        background-color: var(--color-best-contrasting);
        color: var(--swatch-color);
    }

    .swatch .info button.reference:active {
        background-color: var(--t-color-contrast-A);
        color: var(--t-color-contrast-B);
        transform: scale(1.2) rotate(-3deg);
    }
</style>
