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

{#each swatches as swatchData, id (id)}
    <Swatch {swatchData} />
{/each}
