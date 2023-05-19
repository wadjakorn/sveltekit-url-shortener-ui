<script lang="ts">

    const copy =  (text: string) => {
        navigator.clipboard.writeText(text)
        const originalLabel = buttonLabel
        buttonLabel = 'copied'
        setTimeout(() => buttonLabel = originalLabel, 1000)
    }

    export let buttonLabel = 'copy'

    export let content: string = 'text'

</script>

<button class="hover:text-indigo-500 border px-2 py-1" on:click={() => copy(content)}>{ buttonLabel }</button>