export interface UrlInfo {
    uid: string;
    title: string;
    shortUrl: string;
    link: string;
    latestClick: string;
    createdAt: string;
    tags: string[];
    visits: Visits[];
}

export interface Visits {
    from: string;
    count: number;
}

export interface GetLinkResp {
    data: UrlInfo[];
}

export interface GetLinkDetailsResp {
    data: UrlInfo;
}

export interface ComputedLinkResp {
    list: ComputedUrlInfo[];
}

export interface ComputedLinkDetailsResp {
    urlInfo: ComputedUrlInfo;
}

export interface ComputedUrlInfo extends UrlInfo {
    humanVisits: number;
}