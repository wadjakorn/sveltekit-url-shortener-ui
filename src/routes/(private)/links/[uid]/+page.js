import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.uid === 'hello-world') {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    } else {
        return {
            title: 'TEST',
            content: 'test...'
        };
    }

    throw error(404, 'Not found');
}