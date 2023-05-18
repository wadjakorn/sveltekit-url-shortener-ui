<script lang="ts">
	import type { ComputedLinkDetailsResp } from "../../../../../types/url-info";

    /** @type {import('./$types').PageData} */
    export let data: ComputedLinkDetailsResp;
</script>

<h1>View Link</h1>
<p>{ data.urlInfo?.title }</p>