import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetApplicationEnabledStatusResponse } from '../models/GetApplicationEnabledStatusResponse';
import { GetContactOptionTypesResponse } from '../models/GetContactOptionTypesResponse';
import { GetSettingsResponse } from '../models/GetSettingsResponse';
export declare class SettingsApiRequestFactory extends BaseAPIRequestFactory {
    getApplicationConfigurationsUsingGET(fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>, _options?: Configuration): Promise<RequestContext>;
    getContactOptionTypesUsingGET1(_options?: Configuration): Promise<RequestContext>;
    isApplicationEnabledUsingGET(_options?: Configuration): Promise<RequestContext>;
}
export declare class SettingsApiResponseProcessor {
    getApplicationConfigurationsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetSettingsResponse>>;
    getContactOptionTypesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetContactOptionTypesResponse>>;
    isApplicationEnabledUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetApplicationEnabledStatusResponse>>;
}
