import { redirect } from '@sveltejs/kit';
import type { PrivateLayoutData } from '../../types/layout-data.js';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }): PrivateLayoutData {
    if (!(localStorage?.getItem('token'))) {
        alert('Please login first')
        throw redirect(307, '/login');
    }
    return {
        private: true,
        pathName: url.pathname.split('/').filter(Boolean).pop(),
        menus: [
            {
                label: 'links',
                slug: 'links',
            },
        ]
    };
}