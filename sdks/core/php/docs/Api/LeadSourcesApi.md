# Com\Keap\Sdk\Core\LeadSourcesApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createLeadSourceUsingPOST_0()**](LeadSourcesApi.md#createLeadSourceUsingPOST_0) | **POST** /v2/leadsources | Create a Lead Source |
| [**listLeadSourcesUsingGET_0()**](LeadSourcesApi.md#listLeadSourcesUsingGET_0) | **GET** /v2/leadsources | List Lead Sources |


## `createLeadSourceUsingPOST_0()`

```php
createLeadSourceUsingPOST_0($leadsource): \Com\Keap\Sdk\Core\Model\LeadSource
```

Create a Lead Source

Creates a new Lead Source

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadSourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$leadsource = new \Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest(); // \Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest | leadsource

try {
    $result = $apiInstance->createLeadSourceUsingPOST_0($leadsource);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LeadSourcesApi->createLeadSourceUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **leadsource** | [**\Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest**](../Model/CreateLeadSourceRequest.md)| leadsource | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\LeadSource**](../Model/LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listLeadSourcesUsingGET_0()`

```php
listLeadSourcesUsingGET_0($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListLeadSourcesResponse
```

List Lead Sources

Retrieves a list of lead sources

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadSourcesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listLeadSourcesUsingGET_0($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LeadSourcesApi->listLeadSourcesUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListLeadSourcesResponse**](../Model/ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
