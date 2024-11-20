import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { LeadSource } from '../models/LeadSource';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
export declare class LeadSourcesApiRequestFactory extends BaseAPIRequestFactory {
    createLeadSourceUsingPOST(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<RequestContext>;
    listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LeadSourcesApiResponseProcessor {
    createLeadSourceUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSource>>;
    listLeadSourcesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLeadSourcesResponse>>;
}
