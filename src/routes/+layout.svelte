<script lang="ts">
    import favicon from '$lib/assets/favicon.svg'
    import '$lib/style.css'

    let { children } = $props()
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{@render children()}
