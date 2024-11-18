# Keap.Sdk.Core.Api.TaskApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateTaskCustomFieldUsingPOST1_0**](TaskApi.md#createtaskcustomfieldusingpost1_0) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**CreateTaskUsingPOST1_0**](TaskApi.md#createtaskusingpost1_0) | **POST** /v2/tasks | Create a Task |
| [**DeleteTaskCustomFieldUsingDELETE_0**](TaskApi.md#deletetaskcustomfieldusingdelete_0) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**DeleteTaskUsingDELETE1_0**](TaskApi.md#deletetaskusingdelete1_0) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**GetTaskUsingGET1_0**](TaskApi.md#gettaskusingget1_0) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**ListTasksUsingGET1_0**](TaskApi.md#listtasksusingget1_0) | **GET** /v2/tasks | List Tasks |
| [**PatchTaskUsingPATCH_0**](TaskApi.md#patchtaskusingpatch_0) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**RetrieveTaskModelUsingGET1_0**](TaskApi.md#retrievetaskmodelusingget1_0) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**UpdateTaskCustomFieldUsingPATCH_0**](TaskApi.md#updatetaskcustomfieldusingpatch_0) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |

<a id="createtaskcustomfieldusingpost1_0"></a>
# **CreateTaskCustomFieldUsingPOST1_0**
> CreateCustomFieldResponse CreateTaskCustomFieldUsingPOST1_0 (CreateCustomFieldRequest customField)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateTaskCustomFieldUsingPOST1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Custom Field
                CreateCustomFieldResponse result = apiInstance.CreateTaskCustomFieldUsingPOST1_0(customField);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.CreateTaskCustomFieldUsingPOST1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTaskCustomFieldUsingPOST1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Custom Field
    ApiResponse<CreateCustomFieldResponse> response = apiInstance.CreateTaskCustomFieldUsingPOST1_0WithHttpInfo(customField);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.CreateTaskCustomFieldUsingPOST1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createtaskusingpost1_0"></a>
# **CreateTaskUsingPOST1_0**
> Task CreateTaskUsingPOST1_0 (CreateTaskRequest? task = null)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateTaskUsingPOST1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var task = new CreateTaskRequest?(); // CreateTaskRequest? | task (optional) 

            try
            {
                // Create a Task
                Task result = apiInstance.CreateTaskUsingPOST1_0(task);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.CreateTaskUsingPOST1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTaskUsingPOST1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Task
    ApiResponse<Task> response = apiInstance.CreateTaskUsingPOST1_0WithHttpInfo(task);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.CreateTaskUsingPOST1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **task** | [**CreateTaskRequest?**](CreateTaskRequest?.md) | task | [optional]  |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetaskcustomfieldusingdelete_0"></a>
# **DeleteTaskCustomFieldUsingDELETE_0**
> void DeleteTaskCustomFieldUsingDELETE_0 (string customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteTaskCustomFieldUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id

            try
            {
                // Delete a Custom Field
                apiInstance.DeleteTaskCustomFieldUsingDELETE_0(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.DeleteTaskCustomFieldUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTaskCustomFieldUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Custom Field
    apiInstance.DeleteTaskCustomFieldUsingDELETE_0WithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.DeleteTaskCustomFieldUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetaskusingdelete1_0"></a>
# **DeleteTaskUsingDELETE1_0**
> void DeleteTaskUsingDELETE1_0 (string taskId)

Delete a Task

Deletes a single task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteTaskUsingDELETE1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var taskId = "taskId_example";  // string | task_id

            try
            {
                // Delete a Task
                apiInstance.DeleteTaskUsingDELETE1_0(taskId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.DeleteTaskUsingDELETE1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTaskUsingDELETE1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Task
    apiInstance.DeleteTaskUsingDELETE1_0WithHttpInfo(taskId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.DeleteTaskUsingDELETE1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="gettaskusingget1_0"></a>
# **GetTaskUsingGET1_0**
> Task GetTaskUsingGET1_0 (string taskId)

Retrieve a Task

Retrieves a single task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetTaskUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var taskId = "taskId_example";  // string | task_id

            try
            {
                // Retrieve a Task
                Task result = apiInstance.GetTaskUsingGET1_0(taskId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.GetTaskUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTaskUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Task
    ApiResponse<Task> response = apiInstance.GetTaskUsingGET1_0WithHttpInfo(taskId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.GetTaskUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtasksusingget1_0"></a>
# **ListTasksUsingGET1_0**
> ListTasksResponse ListTasksUsingGET1_0 (string? endDueTime = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null, string? startDueTime = null)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListTasksUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var endDueTime = "endDueTime_example";  // string? |  (optional) 
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var startDueTime = "startDueTime_example";  // string? |  (optional) 

            try
            {
                // List Tasks
                ListTasksResponse result = apiInstance.ListTasksUsingGET1_0(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.ListTasksUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTasksUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tasks
    ApiResponse<ListTasksResponse> response = apiInstance.ListTasksUsingGET1_0WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.ListTasksUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **endDueTime** | **string?** |  | [optional]  |
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **startDueTime** | **string?** |  | [optional]  |

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchtaskusingpatch_0"></a>
# **PatchTaskUsingPATCH_0**
> UpdateTaskResponse PatchTaskUsingPATCH_0 (string taskId, List<string>? updateMask = null, CreatePatchTaskRequest? task = null)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchTaskUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var taskId = "taskId_example";  // string | task_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var task = new CreatePatchTaskRequest?(); // CreatePatchTaskRequest? | task (optional) 

            try
            {
                // Update a Task
                UpdateTaskResponse result = apiInstance.PatchTaskUsingPATCH_0(taskId, updateMask, task);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.PatchTaskUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchTaskUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Task
    ApiResponse<UpdateTaskResponse> response = apiInstance.PatchTaskUsingPATCH_0WithHttpInfo(taskId, updateMask, task);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.PatchTaskUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **task** | [**CreatePatchTaskRequest?**](CreatePatchTaskRequest?.md) | task | [optional]  |

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievetaskmodelusingget1_0"></a>
# **RetrieveTaskModelUsingGET1_0**
> ObjectModel RetrieveTaskModelUsingGET1_0 ()

Retrieve Task Model

Get the custom fields for the Task object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveTaskModelUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);

            try
            {
                // Retrieve Task Model
                ObjectModel result = apiInstance.RetrieveTaskModelUsingGET1_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.RetrieveTaskModelUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveTaskModelUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Task Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveTaskModelUsingGET1_0WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.RetrieveTaskModelUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatetaskcustomfieldusingpatch_0"></a>
# **UpdateTaskCustomFieldUsingPATCH_0**
> CustomFieldMetaData UpdateTaskCustomFieldUsingPATCH_0 (string customFieldId, UpdateCustomFieldMetaDataRequest request, List<string>? updateMask = null)

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateTaskCustomFieldUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new TaskApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Task's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateTaskCustomFieldUsingPATCH_0(customFieldId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TaskApi.UpdateTaskCustomFieldUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTaskCustomFieldUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Task's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateTaskCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TaskApi.UpdateTaskCustomFieldUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

