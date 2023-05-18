import type { GetLinkDetailsResp } from "../../../../../types/url-info";
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, route, url, data, parent, setHeaders, depends }): Promise<GetLinkDetailsResp> {
    console.log({ params, route, url })
    const uid = params.uid;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    const rawRes = await fetch(`${PUBLIC_SERVER_HOST}/api/links/${uid}`, options);
    console.log({ status: rawRes.status })
    const res: GetLinkDetailsResp = await rawRes.json();
    console.log({ res })

    return res
}
