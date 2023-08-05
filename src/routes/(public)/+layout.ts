import type { PublicLayoutData } from "../../types/layout-data";

/** @type {import('./$types').LayoutLoad} */
export function load({ url }): PublicLayoutData {
    return {
        private: false,
        pathName: url.pathname.split('/').filter(Boolean).pop(),
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