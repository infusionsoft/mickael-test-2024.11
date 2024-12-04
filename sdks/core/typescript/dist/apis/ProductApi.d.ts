import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListProductsResponse } from '../models/ListProductsResponse';
export declare class ProductApiRequestFactory extends BaseAPIRequestFactory {
    listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductApiResponseProcessor {
    listProductsUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListProductsResponse>>;
}
