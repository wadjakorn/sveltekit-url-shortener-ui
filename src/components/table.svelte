<script lang="ts">
	import type { ComputedUrlInfo } from "../types/url-info";
    import Tag from './tag.svelte';

    export let list: ComputedUrlInfo[] = [];
</script>
<table class="min-w-max w-full table-auto">
    <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Visits</th>
            <th class="py-3 px-6 text-left">UID</th>
            <th class="py-3 px-6 text-left">Title</th>
            <th class="py-3 px-6 text-center">ShortLink</th>
            <th class="py-3 px-6 text-center">Tags</th>
            <th class="py-3 px-6 text-center">Actions</th>
        </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
        {#each list as item, i}
        <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">
                { item.humanVisits }
            </td>
            <td class="py-3 px-6 text-left whitespace-nowrap">
                { item.uid }
            </td>
            <td class="py-3 px-6 text-left max-w-xs">
                { item.title }
            </td>
            <td class="py-3 px-6 text-center">
                { item.shortUrl }
                <!-- <div class="flex items-center justify-center">
                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                </div> -->
            </td>
            <td class="py-3 px-6 text-center">
                {#each item.tags as tag, i}
                    <Tag>{tag}</Tag>
                {/each}
            </td>
            <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center">
                    <a href="/links/view/{item.uid}" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </a>
                    <a href="/links/edit/{item.uid}" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </a>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </div>
            </td>
        </tr>
        {/each}
    </tbody>
</table>