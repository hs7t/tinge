<nav>
    <div class="section primary">
        <p>Tinge</p>
    </div>
    <button class="section"> Options </button>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .section {
        --color-best-contrasting: var(--t-color-theme-A-contrast);

        display: flex;
        padding: 0.8ch;

        font-weight: 600;
        border-radius: 100pt;

        background-color: var(--t-color-theme-A);
        color: var(--color-best-contrasting);

        text-transform: uppercase;
    }

    .primary.section {
        flex: 1;
    }

    button.section {
        --color-best-contrasting: var(--t-color-theme-B-contrast);

        background-color: var(--t-color-theme-B);
        color: var(--color-best-contrasting);

        outline-offset: 0;
    }
</style>
