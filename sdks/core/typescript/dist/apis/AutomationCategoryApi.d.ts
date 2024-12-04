import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AutomationCategory } from '../models/AutomationCategory';
import { CreateAutomationCategoryRequest } from '../models/CreateAutomationCategoryRequest';
import { ListAutomationCategoryResponse } from '../models/ListAutomationCategoryResponse';
import { SaveAutomationCategoryRequest } from '../models/SaveAutomationCategoryRequest';
export declare class AutomationCategoryApiRequestFactory extends BaseAPIRequestFactory {
    createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Promise<RequestContext>;
    deleteCategoriesUsingDELETE(ids: Array<number>, _options?: Configuration): Promise<RequestContext>;
    listCategoriesUsingGET(_options?: Configuration): Promise<RequestContext>;
    saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class AutomationCategoryApiResponseProcessor {
    createCategoryUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutomationCategory>>;
    deleteCategoriesUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    listCategoriesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAutomationCategoryResponse>>;
    saveCategoryUsingPUTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AutomationCategory>>;
}
