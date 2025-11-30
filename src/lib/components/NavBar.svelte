<nav>
    <div class="section primary">
        <p>Tinge</p>
    </div>
    <button class="section"> Options </button>
</nav>

<style>
    button {
        all: unset;
    }

    .section {
        display: flex;
        flex-shrink: 2;
        padding: 0.8ch;

        font-weight: 600;
        border-radius: 100;
    }
    .section.primary {
        flex-grow: 1;
        flex-shrink: 0;
    }
</style>
