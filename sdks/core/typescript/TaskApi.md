# .TaskApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskCustomFieldUsingPOST1_0**](TaskApi.md#createTaskCustomFieldUsingPOST1_0) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**createTaskUsingPOST1_0**](TaskApi.md#createTaskUsingPOST1_0) | **POST** /v2/tasks | Create a Task
[**deleteTaskCustomFieldUsingDELETE_0**](TaskApi.md#deleteTaskCustomFieldUsingDELETE_0) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteTaskUsingDELETE1_0**](TaskApi.md#deleteTaskUsingDELETE1_0) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**getTaskUsingGET1_0**](TaskApi.md#getTaskUsingGET1_0) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**listTasksUsingGET1_0**](TaskApi.md#listTasksUsingGET1_0) | **GET** /v2/tasks | List Tasks
[**patchTaskUsingPATCH_0**](TaskApi.md#patchTaskUsingPATCH_0) | **PATCH** /v2/tasks/{task_id} | Update a Task
[**retrieveTaskModelUsingGET1_0**](TaskApi.md#retrieveTaskModelUsingGET1_0) | **GET** /v2/tasks/model | Retrieve Task Model
[**updateTaskCustomFieldUsingPATCH_0**](TaskApi.md#updateTaskCustomFieldUsingPATCH_0) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field


# **createTaskCustomFieldUsingPOST1_0**
> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1_0(customField)

Adds a custom field of the specified type and options to the Task object.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskCustomFieldUsingPOST10Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskCustomFieldUsingPOST10Request = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createTaskCustomFieldUsingPOST1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CreateCustomFieldResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskUsingPOST1_0**
> Task createTaskUsingPOST1_0()

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiCreateTaskUsingPOST10Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiCreateTaskUsingPOST10Request = {
    // task (optional)
  task: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.createTaskUsingPOST1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | **CreateTaskRequest**| task |


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskCustomFieldUsingDELETE_0**
> void deleteTaskCustomFieldUsingDELETE_0()

Deletes a Custom Field from Task.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskCustomFieldUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskCustomFieldUsingDELETE0Request = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteTaskCustomFieldUsingDELETE_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskUsingDELETE1_0**
> void deleteTaskUsingDELETE1_0()

Deletes a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiDeleteTaskUsingDELETE10Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiDeleteTaskUsingDELETE10Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.deleteTaskUsingDELETE1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskUsingGET1_0**
> Task getTaskUsingGET1_0()

Retrieves a single task

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiGetTaskUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiGetTaskUsingGET10Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.getTaskUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTasksUsingGET1_0**
> ListTasksResponse listTasksUsingGET1_0()

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiListTasksUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiListTasksUsingGET10Request = {
  
  endDueTime: "end_due_time_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
  
  startDueTime: "start_due_time_example",
};

const data = await apiInstance.listTasksUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **startDueTime** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListTasksResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchTaskUsingPATCH_0**
> UpdateTaskResponse patchTaskUsingPATCH_0()

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiPatchTaskUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiPatchTaskUsingPATCH0Request = {
    // task_id
  taskId: "task_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "id",
  ],
    // task (optional)
  task: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.patchTaskUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | **CreatePatchTaskRequest**| task |
 **taskId** | [**string**] | task_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTaskResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveTaskModelUsingGET1_0**
> ObjectModel retrieveTaskModelUsingGET1_0()

Get the custom fields for the Task object

### Example


```typescript
import { createConfiguration, TaskApi } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request = {};

const data = await apiInstance.retrieveTaskModelUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTaskCustomFieldUsingPATCH_0**
> CustomFieldMetaData updateTaskCustomFieldUsingPATCH_0(request)

Updates a custom field of the specified type and options to the Task object.

### Example


```typescript
import { createConfiguration, TaskApi } from '';
import type { TaskApiUpdateTaskCustomFieldUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new TaskApi(configuration);

const request: TaskApiUpdateTaskCustomFieldUsingPATCH0Request = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateTaskCustomFieldUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


