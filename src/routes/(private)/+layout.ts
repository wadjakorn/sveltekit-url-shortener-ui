import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export function load() {
    if (!(localStorage?.getItem('token'))) {
        alert('Please login first')
        throw redirect(307, '/login');
    }
    return {
        menus: [
            {
                label: 'links',
                slug: 'links',
            },
            {
                label: 'logout',
                slug: 'logout',
            },
        ]
    };
}