<script lang="ts">

    const getRandomColor = () => {
        const colors = [
            'bg-red-500',
            'bg-yellow-500',
            'bg-green-500',
            'bg-blue-500',
            'bg-indigo-500',
            'bg-purple-500',
            'bg-pink-500',
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    }

</script>

<span class="inline-flex items-center mx-1 rounded-full py-1 px-3 {getRandomColor()} text-white group transition-all duration-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none" role="alert">
    <slot></slot>
    <!-- <span class="whitespace-nowrap inline-block group-hover:max-w-screen-2xl group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">your content here</span> -->
</span>