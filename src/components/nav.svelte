<script lang="ts">
    interface MenuItem {
        label: string;
        slug: string;
    }
    export let menus: MenuItem[] = [];
    export let pathName: string = '';

    const getActiveClass = (slug: string) => {
        return pathName === slug ? 'text-indigo-500' : '';
    }
</script>

<nav class="w-full max-w bg-white py-4 px-8 shadow-md">
    <div class="container">
        {#each menus as m, i}
            <a href="/{m.slug}" class="inline-block hover:text-indigo-500 px-4 py-2 {getActiveClass(m.slug)}">{m.label}</a>
            {#if (i < menus.length - 1) }
                <span> | </span>
            {/if}
        {/each}
    </div>
</nav>