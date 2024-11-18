# Com\Keap\Sdk\Core\TaskApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createTaskCustomFieldUsingPOST1_0()**](TaskApi.md#createTaskCustomFieldUsingPOST1_0) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskUsingPOST1_0()**](TaskApi.md#createTaskUsingPOST1_0) | **POST** /v2/tasks | Create a Task |
| [**deleteTaskCustomFieldUsingDELETE_0()**](TaskApi.md#deleteTaskCustomFieldUsingDELETE_0) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskUsingDELETE1_0()**](TaskApi.md#deleteTaskUsingDELETE1_0) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**getTaskUsingGET1_0()**](TaskApi.md#getTaskUsingGET1_0) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**listTasksUsingGET1_0()**](TaskApi.md#listTasksUsingGET1_0) | **GET** /v2/tasks | List Tasks |
| [**patchTaskUsingPATCH_0()**](TaskApi.md#patchTaskUsingPATCH_0) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**retrieveTaskModelUsingGET1_0()**](TaskApi.md#retrieveTaskModelUsingGET1_0) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**updateTaskCustomFieldUsingPATCH_0()**](TaskApi.md#updateTaskCustomFieldUsingPATCH_0) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |


## `createTaskCustomFieldUsingPOST1_0()`

```php
createTaskCustomFieldUsingPOST1_0($custom_field): \Com\Keap\Sdk\Core\Model\CreateCustomFieldResponse
```

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createTaskCustomFieldUsingPOST1_0($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->createTaskCustomFieldUsingPOST1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field** | [**\Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest**](../Model/CreateCustomFieldRequest.md)| customField | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CreateCustomFieldResponse**](../Model/CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTaskUsingPOST1_0()`

```php
createTaskUsingPOST1_0($task): \Com\Keap\Sdk\Core\Model\Task
```

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task = new \Com\Keap\Sdk\Core\Model\CreateTaskRequest(); // \Com\Keap\Sdk\Core\Model\CreateTaskRequest | task

try {
    $result = $apiInstance->createTaskUsingPOST1_0($task);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->createTaskUsingPOST1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task** | [**\Com\Keap\Sdk\Core\Model\CreateTaskRequest**](../Model/CreateTaskRequest.md)| task | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTaskCustomFieldUsingDELETE_0()`

```php
deleteTaskCustomFieldUsingDELETE_0($custom_field_id)
```

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id

try {
    $apiInstance->deleteTaskCustomFieldUsingDELETE_0($custom_field_id);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->deleteTaskCustomFieldUsingDELETE_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTaskUsingDELETE1_0()`

```php
deleteTaskUsingDELETE1_0($task_id)
```

Delete a Task

Deletes a single task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id

try {
    $apiInstance->deleteTaskUsingDELETE1_0($task_id);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->deleteTaskUsingDELETE1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTaskUsingGET1_0()`

```php
getTaskUsingGET1_0($task_id): \Com\Keap\Sdk\Core\Model\Task
```

Retrieve a Task

Retrieves a single task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id

try {
    $result = $apiInstance->getTaskUsingGET1_0($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->getTaskUsingGET1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTasksUsingGET1_0()`

```php
listTasksUsingGET1_0($end_due_time, $filter, $order_by, $page_size, $page_token, $start_due_time): \Com\Keap\Sdk\Core\Model\ListTasksResponse
```

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$end_due_time = 'end_due_time_example'; // string
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token
$start_due_time = 'start_due_time_example'; // string

try {
    $result = $apiInstance->listTasksUsingGET1_0($end_due_time, $filter, $order_by, $page_size, $page_token, $start_due_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->listTasksUsingGET1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **end_due_time** | **string**|  | [optional] |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |
| **start_due_time** | **string**|  | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListTasksResponse**](../Model/ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchTaskUsingPATCH_0()`

```php
patchTaskUsingPATCH_0($task_id, $update_mask, $task): \Com\Keap\Sdk\Core\Model\UpdateTaskResponse
```

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
$task = new \Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest(); // \Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest | task

try {
    $result = $apiInstance->patchTaskUsingPATCH_0($task_id, $update_mask, $task);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->patchTaskUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **task** | [**\Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest**](../Model/CreatePatchTaskRequest.md)| task | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\UpdateTaskResponse**](../Model/UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveTaskModelUsingGET1_0()`

```php
retrieveTaskModelUsingGET1_0(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Task Model

Get the custom fields for the Task object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveTaskModelUsingGET1_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->retrieveTaskModelUsingGET1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ObjectModel**](../Model/ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTaskCustomFieldUsingPATCH_0()`

```php
updateTaskCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\TaskApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateTaskCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TaskApi->updateTaskCustomFieldUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest**](../Model/UpdateCustomFieldMetaDataRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\CustomFieldMetaData**](../Model/CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
