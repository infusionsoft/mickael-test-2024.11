import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateCustomFieldResponse } from '../models/CreateCustomFieldResponse';
import { CreatePatchTaskRequest } from '../models/CreatePatchTaskRequest';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ObjectModel } from '../models/ObjectModel';
import { Task } from '../models/Task';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
export declare class TaskApiRequestFactory extends BaseAPIRequestFactory {
    createTaskCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createTaskUsingPOST1(task?: CreateTaskRequest, _options?: Configuration): Promise<RequestContext>;
    deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Promise<RequestContext>;
    getTaskUsingGET1(taskId: string, _options?: Configuration): Promise<RequestContext>;
    listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<RequestContext>;
    patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<RequestContext>;
    retrieveTaskModelUsingGET1(_options?: Configuration): Promise<RequestContext>;
    updateTaskCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class TaskApiResponseProcessor {
    createTaskCustomFieldUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateCustomFieldResponse>>;
    createTaskUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Task>>;
    deleteTaskCustomFieldUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteTaskUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getTaskUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Task>>;
    listTasksUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTasksResponse>>;
    patchTaskUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateTaskResponse>>;
    retrieveTaskModelUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    updateTaskCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
}
