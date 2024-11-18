# KeapRestApi.TaskApi

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
[**updateTaskCustomFieldUsingPATCH_0**](TaskApi.md#updateTaskCustomFieldUsingPATCH_0) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field



## createTaskCustomFieldUsingPOST1_0

> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1_0(customField)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let customField = new KeapRestApi.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createTaskCustomFieldUsingPOST1_0(customField).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTaskUsingPOST1_0

> Task createTaskUsingPOST1_0(opts)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let opts = {
  'task': new KeapRestApi.CreateTaskRequest() // CreateTaskRequest | task
};
apiInstance.createTaskUsingPOST1_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTaskCustomFieldUsingDELETE_0

> deleteTaskCustomFieldUsingDELETE_0(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteTaskCustomFieldUsingDELETE_0(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTaskUsingDELETE1_0

> deleteTaskUsingDELETE1_0(taskId)

Delete a Task

Deletes a single task

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.deleteTaskUsingDELETE1_0(taskId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskUsingGET1_0

> Task getTaskUsingGET1_0(taskId)

Retrieve a Task

Retrieves a single task

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.getTaskUsingGET1_0(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTasksUsingGET1_0

> ListTasksResponse listTasksUsingGET1_0(opts)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let opts = {
  'endDueTime': "endDueTime_example", // String | 
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'startDueTime': "startDueTime_example" // String | 
};
apiInstance.listTasksUsingGET1_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | **String**|  | [optional] 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **startDueTime** | **String**|  | [optional] 

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchTaskUsingPATCH_0

> UpdateTaskResponse patchTaskUsingPATCH_0(taskId, opts)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let taskId = "taskId_example"; // String | task_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'task': new KeapRestApi.CreatePatchTaskRequest() // CreatePatchTaskRequest | task
};
apiInstance.patchTaskUsingPATCH_0(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **task** | [**CreatePatchTaskRequest**](CreatePatchTaskRequest.md)| task | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveTaskModelUsingGET1_0

> ObjectModel retrieveTaskModelUsingGET1_0()

Retrieve Task Model

Get the custom fields for the Task object

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
apiInstance.retrieveTaskModelUsingGET1_0().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTaskCustomFieldUsingPATCH_0

> CustomFieldMetaData updateTaskCustomFieldUsingPATCH_0(customFieldId, request, opts)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.TaskApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapRestApi.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateTaskCustomFieldUsingPATCH_0(customFieldId, request, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

