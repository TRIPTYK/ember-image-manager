import Service from '@ember/service';
export declare type RequestTypes = 'GET' | 'POST' | 'DELETE' | 'PATCH';
export declare type ResponseType = 'JSON' | 'TEXT' | 'BLOB' | 'RAW';
export default class Fetch extends Service {
    request(url: string, method?: RequestTypes, responseType?: ResponseType, data?: any, options?: Record<string, any>): Promise<any>;
}
declare module '@ember/service' {
    interface Registry {
        fetch: Fetch;
    }
}
