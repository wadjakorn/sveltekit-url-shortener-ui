<script>
    import "../../app.css";
    import Nav from "../../components/nav.svelte";
    
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<Nav menus={data.menus} ></Nav>

<div class="container mx-auto mt-4">
    <slot></slot>
</div>