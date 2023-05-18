import type { ComputedLinkResp, ComputedUrlInfo, GetLinkResp, UrlInfo } from "../../../types/url-info";
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, route, url, data, parent, setHeaders, depends }): Promise<ComputedLinkResp> {
    console.log({ params, route, url })
    let page = 1;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    const rawRes = await fetch(`${PUBLIC_SERVER_HOST}/api/links?page=${page}&limit=20`, options);
    console.log({ status: rawRes.status })
    const res: GetLinkResp = await rawRes.json();
    console.log({ res })

   

    return { list: res.data.map((link: UrlInfo): ComputedUrlInfo => {
        return {
            ...link,
            humanVisits: link.visits.reduce((acc, cur) => {
                if (cur.from !== 'unknown') {
                    return acc + cur.count;
                }
                return acc;
            }, 0),
        }
    }) };
}
