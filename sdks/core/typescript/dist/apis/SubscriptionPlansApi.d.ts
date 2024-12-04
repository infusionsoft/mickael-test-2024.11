import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
export declare class SubscriptionPlansApiRequestFactory extends BaseAPIRequestFactory {
    listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionPlansApiResponseProcessor {
    listSubscriptionPlansUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListSubscriptionPlansResponse>>;
}
