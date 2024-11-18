import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
export declare class MerchantApiRequestFactory extends BaseAPIRequestFactory {
    listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class MerchantApiResponseProcessor {
    listMerchantsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRestMerchantResponse>>;
}
