import Service from '@ember/service';
// @ts-ignore
import fetch from 'fetch';

export type RequestTypes = 'GET' | 'POST' | 'DELETE' | 'PATCH';
export type ResponseType = 'JSON' | 'TEXT' | 'BLOB' | 'RAW';

export default class Fetch extends Service {
  async request(
    url: string,
    method: RequestTypes = 'GET',
    responseType: ResponseType = 'JSON',
    data: any = undefined,
    options: Record<string, any> = {},
  ) {
    return fetch(url, {
      method,
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    }).then((res: any) => {
      switch (responseType) {
        case 'RAW':
          return res;
        case 'BLOB':
          return res.blob();
        case 'JSON':
          return res.json();
        case 'TEXT':
          return res.text();
      }
    });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  // eslint-disable-next-line no-unused-vars
  interface Registry {
    fetch: Fetch;
  }
}