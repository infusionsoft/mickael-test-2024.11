# Com\Keap\Sdk\Core\StagesApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**create1()**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity. |
| [**delete2()**](StagesApi.md#delete2) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**get1()**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**list1()**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**listStages1()**](StagesApi.md#listStages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**update2()**](StagesApi.md#update2) | **PATCH** /v2/stages/{id} | Updates an existing entity. |


## `create1()`

```php
create1($create_stage_request): \Com\Keap\Sdk\Core\Model\Stage
```

Creates a new entity.

Creates a new entity.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_stage_request = new \Com\Keap\Sdk\Core\Model\CreateStageRequest(); // \Com\Keap\Sdk\Core\Model\CreateStageRequest | the create request

try {
    $result = $apiInstance->create1($create_stage_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->create1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_stage_request** | [**\Com\Keap\Sdk\Core\Model\CreateStageRequest**](../Model/CreateStageRequest.md)| the create request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Stage**](../Model/Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `delete2()`

```php
delete2($id, $new_stage_id)
```

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the stage identifier
$new_stage_id = 'new_stage_id_example'; // string | the new stage identifier, can be null

try {
    $apiInstance->delete2($id, $new_stage_id);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->delete2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the stage identifier | |
| **new_stage_id** | **string**| the new stage identifier, can be null | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `get1()`

```php
get1($id): \Com\Keap\Sdk\Core\Model\Stage
```

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the entity identifier

try {
    $result = $apiInstance->get1($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->get1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the entity identifier | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Stage**](../Model/Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `list1()`

```php
list1($filter, $page_token, $order_by, $page_size): \Com\Keap\Sdk\Core\Model\StageListResponse
```

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string
$page_token = 'page_token_example'; // string
$order_by = 'order_by_example'; // string
$page_size = 100; // int

try {
    $result = $apiInstance->list1($filter, $page_token, $order_by, $page_size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->list1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**|  | [optional] |
| **page_token** | **string**|  | [optional] |
| **order_by** | **string**|  | [optional] |
| **page_size** | **int**|  | [optional] [default to 1000] |

### Return type

[**\Com\Keap\Sdk\Core\Model\StageListResponse**](../Model/StageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listStages1()`

```php
listStages1($id, $filter, $page_token, $order_by, $page_size): \Com\Keap\Sdk\Core\Model\StageDealListResponse
```

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the stage identifier
$filter = 'filter_example'; // string
$page_token = 'page_token_example'; // string
$order_by = 'order_by_example'; // string
$page_size = 100; // int

try {
    $result = $apiInstance->listStages1($id, $filter, $page_token, $order_by, $page_size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->listStages1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the stage identifier | |
| **filter** | **string**|  | [optional] |
| **page_token** | **string**|  | [optional] |
| **order_by** | **string**|  | [optional] |
| **page_size** | **int**|  | [optional] [default to 1000] |

### Return type

[**\Com\Keap\Sdk\Core\Model\StageDealListResponse**](../Model/StageDealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `update2()`

```php
update2($id, $update_mask, $update_stage_request): \Com\Keap\Sdk\Core\Model\Stage
```

Updates an existing entity.

Updates an existing entity.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\StagesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | the entity identifier
$update_mask = array('update_mask_example'); // string[] | the fields to update
$update_stage_request = new \Com\Keap\Sdk\Core\Model\UpdateStageRequest(); // \Com\Keap\Sdk\Core\Model\UpdateStageRequest | the update request

try {
    $result = $apiInstance->update2($id, $update_mask, $update_stage_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StagesApi->update2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| the entity identifier | |
| **update_mask** | [**string[]**](../Model/string.md)| the fields to update | |
| **update_stage_request** | [**\Com\Keap\Sdk\Core\Model\UpdateStageRequest**](../Model/UpdateStageRequest.md)| the update request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Stage**](../Model/Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
