import { CekNetworkResponse, CekResponse } from './response'
import queryString from "qs";

export function buildUrl(endpoint: any, queryParams: {}) {
    const strQueryParams = queryString.stringify(queryParams);
    const queryStr: any = strQueryParams ? `?${strQueryParams}` : "";
    const builtEndpoint = `${endpoint}${queryStr}`;
    return `https://jsonplaceholder.typicode.com/${builtEndpoint}`;
}

export type InitOption = {
    method?: string,
    body?: {},
    queryParams?: any,
    headers?: {
        "Content-Type"?: string,
    },
};

export async function Fetch(
    endpoint: any,
    init: InitOption = <any>{},
    rawResponse = false,
): Promise<any> {
    const {
        queryParams,
        headers: givenHeaders = <any>{},
        body: givenBody,
        ...restArgs
    } = init;
    const contentType = givenHeaders["Content-Type"];
    let body:any = null;
    if (
        givenBody && !(givenBody instanceof FormData) && (!contentType || contentType === "application/json")
    ) {
        givenHeaders["Content-Type"] = "application/json";
        body = JSON.stringify(givenBody);
    } else {
        body = givenBody;
    }

    const fetchInit = {
        method: "GET",
        ...restArgs,
        body,
        headers: {
            ...givenHeaders,
        },
    };

    const url:any = buildUrl(endpoint, queryParams);
    if (rawResponse) {
        return  fetch(url, fetchInit);
    }
    return fetch(url, fetchInit).then(CekNetworkResponse).then(CekResponse);
}