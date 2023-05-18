<script>
    import "../../app.css";
    import Nav from "../../components/nav.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>


<Nav menus={data.menus} ></Nav>

<div class="container mx-auto mt-8">
    <slot></slot>
</div>

<!-- 
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style> -->