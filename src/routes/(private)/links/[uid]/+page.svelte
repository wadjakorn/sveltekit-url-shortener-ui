<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>From link ID</h1>
<h2>{data.title}</h2>
<div>{@html data.content}</div>
