<script lang="ts">
	import type { GetLinkDetailsResp } from "../../../../../types/url-info";

    /** @type {import('./$types').PageData} */
    export let data: GetLinkDetailsResp;
</script>

<h1>Edit Link</h1>
<p>{ data.data?.title }</p>