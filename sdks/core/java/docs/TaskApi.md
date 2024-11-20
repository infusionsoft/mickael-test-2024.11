# TaskApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTaskCustomFieldUsingPOST1_0**](TaskApi.md#createTaskCustomFieldUsingPOST1_0) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskCustomFieldUsingPOST1_0WithHttpInfo**](TaskApi.md#createTaskCustomFieldUsingPOST1_0WithHttpInfo) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskUsingPOST1_0**](TaskApi.md#createTaskUsingPOST1_0) | **POST** /v2/tasks | Create a Task |
| [**createTaskUsingPOST1_0WithHttpInfo**](TaskApi.md#createTaskUsingPOST1_0WithHttpInfo) | **POST** /v2/tasks | Create a Task |
| [**deleteTaskCustomFieldUsingDELETE_0**](TaskApi.md#deleteTaskCustomFieldUsingDELETE_0) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskCustomFieldUsingDELETE_0WithHttpInfo**](TaskApi.md#deleteTaskCustomFieldUsingDELETE_0WithHttpInfo) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskUsingDELETE1_0**](TaskApi.md#deleteTaskUsingDELETE1_0) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**deleteTaskUsingDELETE1_0WithHttpInfo**](TaskApi.md#deleteTaskUsingDELETE1_0WithHttpInfo) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**getTaskUsingGET1_0**](TaskApi.md#getTaskUsingGET1_0) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**getTaskUsingGET1_0WithHttpInfo**](TaskApi.md#getTaskUsingGET1_0WithHttpInfo) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**listTasksUsingGET1_0**](TaskApi.md#listTasksUsingGET1_0) | **GET** /v2/tasks | List Tasks |
| [**listTasksUsingGET1_0WithHttpInfo**](TaskApi.md#listTasksUsingGET1_0WithHttpInfo) | **GET** /v2/tasks | List Tasks |
| [**patchTaskUsingPATCH_0**](TaskApi.md#patchTaskUsingPATCH_0) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**patchTaskUsingPATCH_0WithHttpInfo**](TaskApi.md#patchTaskUsingPATCH_0WithHttpInfo) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**retrieveTaskModelUsingGET1_0**](TaskApi.md#retrieveTaskModelUsingGET1_0) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**retrieveTaskModelUsingGET1_0WithHttpInfo**](TaskApi.md#retrieveTaskModelUsingGET1_0WithHttpInfo) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**updateTaskCustomFieldUsingPATCH_0**](TaskApi.md#updateTaskCustomFieldUsingPATCH_0) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |
| [**updateTaskCustomFieldUsingPATCH_0WithHttpInfo**](TaskApi.md#updateTaskCustomFieldUsingPATCH_0WithHttpInfo) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |



## createTaskCustomFieldUsingPOST1_0

> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1_0(customField)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CreateCustomFieldResponse result = apiInstance.createTaskCustomFieldUsingPOST1_0(customField);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

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

## createTaskCustomFieldUsingPOST1_0WithHttpInfo

> ApiResponse<CreateCustomFieldResponse> createTaskCustomFieldUsingPOST1_0 createTaskCustomFieldUsingPOST1_0WithHttpInfo(customField)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CreateCustomFieldResponse> response = apiInstance.createTaskCustomFieldUsingPOST1_0WithHttpInfo(customField);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskCustomFieldUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

ApiResponse<[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)>


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


## createTaskUsingPOST1_0

> Task createTaskUsingPOST1_0(task)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateTaskRequest task = new CreateTaskRequest(); // CreateTaskRequest | task
        try {
            Task result = apiInstance.createTaskUsingPOST1_0(task);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **task** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] |

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

## createTaskUsingPOST1_0WithHttpInfo

> ApiResponse<Task> createTaskUsingPOST1_0 createTaskUsingPOST1_0WithHttpInfo(task)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        CreateTaskRequest task = new CreateTaskRequest(); // CreateTaskRequest | task
        try {
            ApiResponse<Task> response = apiInstance.createTaskUsingPOST1_0WithHttpInfo(task);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#createTaskUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **task** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] |

### Return type

ApiResponse<[**Task**](Task.md)>


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


## deleteTaskCustomFieldUsingDELETE_0

> void deleteTaskCustomFieldUsingDELETE_0(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        try {
            apiInstance.deleteTaskCustomFieldUsingDELETE_0(customFieldId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldUsingDELETE_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |

### Return type


null (empty response body)

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

## deleteTaskCustomFieldUsingDELETE_0WithHttpInfo

> ApiResponse<Void> deleteTaskCustomFieldUsingDELETE_0 deleteTaskCustomFieldUsingDELETE_0WithHttpInfo(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskCustomFieldUsingDELETE_0WithHttpInfo(customFieldId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskCustomFieldUsingDELETE_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |

### Return type


ApiResponse<Void>

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


## deleteTaskUsingDELETE1_0

> void deleteTaskUsingDELETE1_0(taskId)

Delete a Task

Deletes a single task

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        try {
            apiInstance.deleteTaskUsingDELETE1_0(taskId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskUsingDELETE1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |

### Return type


null (empty response body)

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

## deleteTaskUsingDELETE1_0WithHttpInfo

> ApiResponse<Void> deleteTaskUsingDELETE1_0 deleteTaskUsingDELETE1_0WithHttpInfo(taskId)

Delete a Task

Deletes a single task

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        try {
            ApiResponse<Void> response = apiInstance.deleteTaskUsingDELETE1_0WithHttpInfo(taskId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#deleteTaskUsingDELETE1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |

### Return type


ApiResponse<Void>

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


## getTaskUsingGET1_0

> Task getTaskUsingGET1_0(taskId)

Retrieve a Task

Retrieves a single task

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        try {
            Task result = apiInstance.getTaskUsingGET1_0(taskId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |

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

## getTaskUsingGET1_0WithHttpInfo

> ApiResponse<Task> getTaskUsingGET1_0 getTaskUsingGET1_0WithHttpInfo(taskId)

Retrieve a Task

Retrieves a single task

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        try {
            ApiResponse<Task> response = apiInstance.getTaskUsingGET1_0WithHttpInfo(taskId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#getTaskUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |

### Return type

ApiResponse<[**Task**](Task.md)>


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


## listTasksUsingGET1_0

> ListTasksResponse listTasksUsingGET1_0(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String endDueTime = "endDueTime_example"; // String | 
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        String startDueTime = "startDueTime_example"; // String | 
        try {
            ListTasksResponse result = apiInstance.listTasksUsingGET1_0(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTasksUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **endDueTime** | **String**|  | [optional] |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **startDueTime** | **String**|  | [optional] |

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

## listTasksUsingGET1_0WithHttpInfo

> ApiResponse<ListTasksResponse> listTasksUsingGET1_0 listTasksUsingGET1_0WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String endDueTime = "endDueTime_example"; // String | 
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        String startDueTime = "startDueTime_example"; // String | 
        try {
            ApiResponse<ListTasksResponse> response = apiInstance.listTasksUsingGET1_0WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#listTasksUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **endDueTime** | **String**|  | [optional] |
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |
| **startDueTime** | **String**|  | [optional] |

### Return type

ApiResponse<[**ListTasksResponse**](ListTasksResponse.md)>


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


## patchTaskUsingPATCH_0

> UpdateTaskResponse patchTaskUsingPATCH_0(taskId, updateMask, task)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreatePatchTaskRequest task = new CreatePatchTaskRequest(); // CreatePatchTaskRequest | task
        try {
            UpdateTaskResponse result = apiInstance.patchTaskUsingPATCH_0(taskId, updateMask, task);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#patchTaskUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, title, description, type, priority, completion_time, due_time, remind_time_mins, assigned_to_user_id, contact_id, completed] |
| **task** | [**CreatePatchTaskRequest**](CreatePatchTaskRequest.md)| task | [optional] |

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

## patchTaskUsingPATCH_0WithHttpInfo

> ApiResponse<UpdateTaskResponse> patchTaskUsingPATCH_0 patchTaskUsingPATCH_0WithHttpInfo(taskId, updateMask, task)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String taskId = "taskId_example"; // String | task_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreatePatchTaskRequest task = new CreatePatchTaskRequest(); // CreatePatchTaskRequest | task
        try {
            ApiResponse<UpdateTaskResponse> response = apiInstance.patchTaskUsingPATCH_0WithHttpInfo(taskId, updateMask, task);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#patchTaskUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **taskId** | **String**| task_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: id, title, description, type, priority, completion_time, due_time, remind_time_mins, assigned_to_user_id, contact_id, completed] |
| **task** | [**CreatePatchTaskRequest**](CreatePatchTaskRequest.md)| task | [optional] |

### Return type

ApiResponse<[**UpdateTaskResponse**](UpdateTaskResponse.md)>


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


## retrieveTaskModelUsingGET1_0

> ObjectModel retrieveTaskModelUsingGET1_0()

Retrieve Task Model

Get the custom fields for the Task object

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveTaskModelUsingGET1_0();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#retrieveTaskModelUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
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

## retrieveTaskModelUsingGET1_0WithHttpInfo

> ApiResponse<ObjectModel> retrieveTaskModelUsingGET1_0 retrieveTaskModelUsingGET1_0WithHttpInfo()

Retrieve Task Model

Get the custom fields for the Task object

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveTaskModelUsingGET1_0WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#retrieveTaskModelUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ObjectModel**](ObjectModel.md)>


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


## updateTaskCustomFieldUsingPATCH_0

> CustomFieldMetaData updateTaskCustomFieldUsingPATCH_0(customFieldId, request, updateMask)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateTaskCustomFieldUsingPATCH_0(customFieldId, request, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

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

## updateTaskCustomFieldUsingPATCH_0WithHttpInfo

> ApiResponse<CustomFieldMetaData> updateTaskCustomFieldUsingPATCH_0 updateTaskCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.TaskApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        TaskApi apiInstance = new TaskApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateTaskCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TaskApi#updateTaskCustomFieldUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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

