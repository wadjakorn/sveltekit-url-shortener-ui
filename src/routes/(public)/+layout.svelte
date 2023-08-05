<script>
    import "../../app.css";
    import Nav from "../../components/nav.svelte";
    import { loading } from "$lib/loading";
    import { navigating } from "$app/stores";
    import Loading from "$lib/loading.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;

    $: loading.setNavigate(!!$navigating);
</script>


<Nav data={data} ></Nav>

<Loading />

<div class="container mx-auto mt-8">
  {#if $loading.status == "IDLE"}
    <slot></slot>
  {:else}
    <Loading />
  {/if}
</div>

<!-- 
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style> -->