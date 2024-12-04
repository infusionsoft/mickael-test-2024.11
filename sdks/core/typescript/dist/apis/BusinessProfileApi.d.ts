import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetBusinessProfileResponse } from '../models/GetBusinessProfileResponse';
import { PatchBusinessProfileRequest } from '../models/PatchBusinessProfileRequest';
export declare class BusinessProfileApiRequestFactory extends BaseAPIRequestFactory {
    getBusinessProfileUsingGET(_options?: Configuration): Promise<RequestContext>;
    patchBusinessProfileUsingPATCH(updateMask?: Array<string>, businessProfile?: PatchBusinessProfileRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class BusinessProfileApiResponseProcessor {
    getBusinessProfileUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBusinessProfileResponse>>;
    patchBusinessProfileUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBusinessProfileResponse>>;
}
