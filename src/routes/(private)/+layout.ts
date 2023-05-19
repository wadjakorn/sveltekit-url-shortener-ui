import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
    if (!(localStorage?.getItem('token'))) {
        alert('Please login first')
        throw redirect(307, '/login');
    }
    return {
        pathName: url.pathname.split('/').filter(Boolean).pop(),
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