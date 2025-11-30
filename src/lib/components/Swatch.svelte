<script module lang="ts">
    export type SwatchData = {
        name: string
        colour: chroma.Color
    }
</script>

<script lang="ts">
    import PinButton from './buttons/PinButton.svelte'

    let { swatchData }: { swatchData: SwatchData } = $props()
</script>

<div class="swatch" style:background-color={swatchData.colour.hex()}>
    <div class="info">
        <span class="text name">
            {swatchData.name}
        </span>
        <span class="text reference">
            {swatchData.colour.hex()}
        </span>
    </div>
    <PinButton />
</div>
