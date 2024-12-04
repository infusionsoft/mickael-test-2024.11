import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateSubscriptionV2 } from '../models/CreateSubscriptionV2';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { ObjectModel } from '../models/ObjectModel';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
export declare class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {
    cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<RequestContext>;
    createSubscriptionCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Promise<RequestContext>;
    retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Promise<RequestContext>;
    updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionsApiResponseProcessor {
    cancelSubscriptionUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createSubscriptionV2UsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestSubscriptionV2>>;
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
}
