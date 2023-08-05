<script lang="ts">
    import "../../app.css";
    import Nav from "../../components/nav.svelte";
    import type { PrivateLayoutData } from "../../types/layout-data";
    import { navigating } from "$app/stores";
    import { loading } from "$lib/loading";
	import Loading from "$lib/loading.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data: PrivateLayoutData;

    $: loading.setNavigate(!!$navigating);
</script>

<Nav data={data}></Nav>

<Loading />

<div class="container mx-auto mt-4">
    {#if $loading.status == "IDLE"}
        <slot></slot>
    {/if}
</div>