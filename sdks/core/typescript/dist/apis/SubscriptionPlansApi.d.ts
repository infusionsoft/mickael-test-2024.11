import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateSubscriptionV2 } from '../models/CreateSubscriptionV2';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
export declare class SubscriptionPlansApiRequestFactory extends BaseAPIRequestFactory {
    createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Promise<RequestContext>;
    listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionPlansApiResponseProcessor {
    createSubscriptionV2UsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestSubscriptionV2>>;
    listSubscriptionPlansUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListSubscriptionPlansResponse>>;
}
