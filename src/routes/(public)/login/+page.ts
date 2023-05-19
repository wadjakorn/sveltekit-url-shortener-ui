import { PUBLIC_SERVER_HOST } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        loginUrl: `${PUBLIC_SERVER_HOST}/api/login`,
    };
}
