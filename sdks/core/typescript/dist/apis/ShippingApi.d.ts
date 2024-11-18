import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
export declare class ShippingApiRequestFactory extends BaseAPIRequestFactory {
    listShippingMethodsUsingGET(_options?: Configuration): Promise<RequestContext>;
}
export declare class ShippingApiResponseProcessor {
    listShippingMethodsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRestShippingMethodsResponse>>;
}
