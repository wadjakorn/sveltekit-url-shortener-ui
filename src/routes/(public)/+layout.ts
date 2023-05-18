import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        menus: [
            {
                label: 'home',
                slug: '',
            },
            {
                label: 'login',
                slug: 'login',
            },
        ]
    };
}

export const ssr = false;