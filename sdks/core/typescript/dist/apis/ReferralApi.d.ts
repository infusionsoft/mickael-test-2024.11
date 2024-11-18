import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { Referral } from '../models/Referral';
export declare class ReferralApiRequestFactory extends BaseAPIRequestFactory {
    createReferralUsingPOST(request: CreateReferralRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ReferralApiResponseProcessor {
    createReferralUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Referral>>;
}
