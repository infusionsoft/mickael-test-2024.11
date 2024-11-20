import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
export declare class EmailAddressApiRequestFactory extends BaseAPIRequestFactory {
    getEmailAddressStatusUsingGET(email: string, _options?: Configuration): Promise<RequestContext>;
    updateEmailAddressOptStatusUsingPUT(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Promise<RequestContext>;
}
export declare class EmailAddressApiResponseProcessor {
    getEmailAddressStatusUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestEmailAddress>>;
    updateEmailAddressOptStatusUsingPUTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestEmailAddress>>;
}
