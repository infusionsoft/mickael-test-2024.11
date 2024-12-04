import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AddToAutomationSequenceRequest } from '../models/AddToAutomationSequenceRequest';
import { AddToAutomationSequenceResponse } from '../models/AddToAutomationSequenceResponse';
import { Automation } from '../models/Automation';
import { ListAutomationIdsResponse } from '../models/ListAutomationIdsResponse';
import { ListAutomationResponse } from '../models/ListAutomationResponse';
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
export declare class AutomationApiRequestFactory extends BaseAPIRequestFactory {
    addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: Configuration): Promise<RequestContext>;
    getAutomationUsingGET(automationId: string, _options?: Configuration): Promise<RequestContext>;
    listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<RequestContext>;
    listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<RequestContext>;
    updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AutomationApiResponseProcessor {
    addContactsToAutomationSequenceUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddToAutomationSequenceResponse>>;
    deleteAutomationUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getAutomationUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Automation>>;
    listAllAutomationIdsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAutomationIdsResponse>>;
    listAutomationsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAutomationResponse>>;
    updateAutomationCategoryUsingPUTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
}
