<script lang="ts">
	import type { Visits } from "../types/url-info";

    export let visits: Visits[] = [];
</script>
<table class="min-w-max w-full table-auto">
    <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">From</th>
            <th class="py-3 px-6 text-left">Count</th>
        </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
        {#each visits as item, i}
        <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">
                { item.from }
            </td>
            <td class="py-3 px-6 text-left whitespace-nowrap">
                { item.count }
            </td>
        </tr>
        {/each}
    </tbody>
</table>