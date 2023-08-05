<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: ComputedLinkResp;

    import Table from '../../../components/table.svelte';
	import type { ComputedLinkResp } from '../../../types/url-info';
</script>

<h1>Links</h1>

<Table list={data.list} />