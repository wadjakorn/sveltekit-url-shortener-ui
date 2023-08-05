<script lang="ts">
	import type { LayoutData } from "../types/layout-data";

    export let data: LayoutData = {
        private: false,
        menus: [],
        pathName: ''
    };

    const isCurrentPath = (slug: string) => data.pathName === slug

    function logout() {
        if (confirm('Are you sure?')) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        
    }
</script>

<nav class="w-full max-w bg-white py-4 px-8 shadow-md">
    <div class="container">
        {#each data.menus as m, i}
         
            {#if isCurrentPath(m.slug)}
                <span class="inline-block text-indigo-500 px-4 py-2">{m.label}</span>
            {:else}
                <a href="/{m.slug}" class="inline-block hover:text-indigo-500 px-4 py-2">{m.label}</a>
            {/if}

            {#if (i < data.menus.length - 1) }
                <span> | </span>
            {/if}

        {/each}

        {#if data.private}
            <span> | </span>
            <button class="inline-block hover:text-teal-500 px-4 py-2" on:click={() => logout()}>logout</button>
        {/if}
    </div>
</nav>