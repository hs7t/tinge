<script lang="ts">
    import chroma from 'chroma-js'

    import type { SwatchData } from './Swatch.svelte'
    import Swatch from './Swatch.svelte'

    let swatches: Array<SwatchData> = [
        {
            name: 'Green',
            colour: chroma('green'),
        },
    ]
</script>

<div class="swatch-view">
    {#each swatches as swatchData, id (id)}
        <Swatch {swatchData} />
    {/each}
</div>

<style>
    .swatch-view {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
    }
</style>
