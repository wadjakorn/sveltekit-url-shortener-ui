/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
    return {
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