<script lang="ts">
    import { loading } from '$lib/loading';

    let username = '';
    let password = '';

    /** @type {import('./$types').PageData} */
    export let data: { loginUrl: string };

    async function login(event: SubmitEvent) {
        event.preventDefault();
        loading.setLoading(true);
        const response = await fetch(data.loginUrl, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json'
            } 
        });

        let resp = await response.json();
        console.log({ resp })

        if (resp.code === 200) {
            localStorage.setItem('token', resp.token);
            window.location.href = '/links';
        } else {
            alert(resp.message)
            loading.setLoading(false);
        }
    }
</script>

<h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

<form on:submit={login} class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Username</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" name="username" placeholder="username" bind:value={username}>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Username</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" name="password" placeholder="password" bind:value={password}>
    </div>
    <button
        class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">GO!</button>
</form>