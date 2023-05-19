<script lang="ts">
	import type { ComputedLinkDetailsResp } from "../../../../../types/url-info";
    import Tag from '../../../../../components/tag.svelte';
	import VisitsTable from "../../../../../components/visits-table.svelte";
	import CopyButton from "../../../../../components/copy-button.svelte";

    /** @type {import('./$types').PageData} */
    export let data: ComputedLinkDetailsResp;

    const title = data.urlInfo?.title;
    const tags = data.urlInfo?.tags;
    const shortUrl = data.urlInfo?.shortUrl;
    const originalLink = data.urlInfo?.link;
    const visits = data.urlInfo?.visits;

</script>

<div class="container">
    <div class="w-full max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 class="text-2xl font-bold mb-6 text-center">{ title }</h1>
        <div class="my-2">
            <h2 class="text-l mb-4 text-left font-bold">Tags</h2>
            {#each tags as tag}
                <Tag>{tag}</Tag>
            {/each}
        </div>
        <div class="my-4">
            <h2 class="text-l mb-4 text-left font-bold">Short URL</h2>
            <CopyButton content={shortUrl} />
            <a target="_blank" href="{shortUrl}" class="hover:text-indigo-500 underline underline-offset-4">{shortUrl}</a>
        </div>
        <div class="my-4">
            <h2 class="text-l mb-4 text-left font-bold">Original Link</h2>
            <CopyButton content={originalLink} />
            <a target="_blank" href="{originalLink}" class="hover:text-indigo-500 underline underline-offset-4">{originalLink}</a>
        </div>
        <div class="my-4">
            <h2 class="text-l mb-4 text-left font-bold">Social Links</h2>
            <CopyButton content="{shortUrl}?from=fb" buttonLabel="Facebook"/>
            <CopyButton content="{shortUrl}?from=tw" buttonLabel="Twitter"/>
            <CopyButton content="{shortUrl}?from=ig" buttonLabel="Instagram"/>
            <CopyButton content="{shortUrl}?from=yt" buttonLabel="Youtube"/>
            <CopyButton content="{shortUrl}?from=tt" buttonLabel="Tiktok"/>
        </div>
        <div class="my-4">
            <h2 class="text-l mb-4 text-left font-bold">Visits</h2>
            <VisitsTable visits={visits} />
        </div>
    </div>
</div>
