import { camelCase } from "lodash";

export interface Response {
  ok: boolean,
  json: () => any,
  text: () => any,
  status: number,
  headers: {
    get: (key: string) => any
  },
}

export class ErrorResponse {
  constructor(response: Response, json = null) {
    const defaultJson = { nonFieldErrors: ['Unknown error occurred'] };
    this.response = response;
    this.json = json || defaultJson;
  }
  json: any;
  response: Response;
}

export function CekResponse(response: Response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }
  return response.text();
}

export const CekNetworkResponse = (response: Response) => {
  const onJsonError = new ErrorResponse(response);
  if (!response.ok) {
    let isBathAuth = false;
    if (response.status === 401) {
      isBathAuth = true;
    }
    if ("json" in response) {
      return response
        .json()
        .catch(() => {
          throw onJsonError;
        })
        .then((errorJson: any) => {
          const errors: any = Object.keys(errorJson).reduce(
            (err, k) => ({ ...err, [camelCase(k)]: errorJson[k] }),
            {},
          );
          const yeet = () => {
            throw new ErrorResponse(response, errors);
          };
          if (isBathAuth) {
            const delayedYeet = () => new Promise(() => setTimeout(yeet, 4000));
            return delayedYeet();
          }
          return yeet();
        });
    }
    return onJsonError;
  }
  return response;
};