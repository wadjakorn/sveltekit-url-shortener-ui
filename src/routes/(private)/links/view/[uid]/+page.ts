import type { ComputedLinkDetailsResp, GetLinkDetailsResp } from "../../../../../types/url-info";
import { PUBLIC_SERVER_HOST } from '$env/static/public';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, route, url, data, parent, setHeaders, depends }): Promise<ComputedLinkDetailsResp> {
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


    return { urlInfo: {
            ...res.data,
            humanVisits: res.data.visits.reduce((acc, cur) => {
                if (cur.from !== 'unknown') {
                    return acc + cur.count;
                }
                return acc;
            }, 0)
        }
    };
}
