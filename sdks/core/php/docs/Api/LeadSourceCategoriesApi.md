# Com\Keap\Sdk\Core\LeadSourceCategoriesApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createLeadSourceCategoryUsingPOST()**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**deleteLeadSourceCategoryUsingDELETE()**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category |
| [**getLeadSourceCategoryUsingGET()**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category |


## `createLeadSourceCategoryUsingPOST()`

```php
createLeadSourceCategoryUsingPOST($create_update_lead_source_category_request): \Com\Keap\Sdk\Core\Model\LeadSourceCategory
```

Create a Lead Source Category

Create a Lead Source Category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadSourceCategoriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_update_lead_source_category_request = new \Com\Keap\Sdk\Core\Model\CreateUpdateLeadSourceCategoryRequest(); // \Com\Keap\Sdk\Core\Model\CreateUpdateLeadSourceCategoryRequest | leadSourceCategory

try {
    $result = $apiInstance->createLeadSourceCategoryUsingPOST($create_update_lead_source_category_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LeadSourceCategoriesApi->createLeadSourceCategoryUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_update_lead_source_category_request** | [**\Com\Keap\Sdk\Core\Model\CreateUpdateLeadSourceCategoryRequest**](../Model/CreateUpdateLeadSourceCategoryRequest.md)| leadSourceCategory | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\LeadSourceCategory**](../Model/LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteLeadSourceCategoryUsingDELETE()`

```php
deleteLeadSourceCategoryUsingDELETE($category_id)
```

Delete a Lead Source Category

Deletes the specified Lead Source Category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadSourceCategoriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$category_id = 'category_id_example'; // string | category_id

try {
    $apiInstance->deleteLeadSourceCategoryUsingDELETE($category_id);
} catch (Exception $e) {
    echo 'Exception when calling LeadSourceCategoriesApi->deleteLeadSourceCategoryUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **category_id** | **string**| category_id | |

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

## `getLeadSourceCategoryUsingGET()`

```php
getLeadSourceCategoryUsingGET($category_id): \Com\Keap\Sdk\Core\Model\LeadSourceCategory
```

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadSourceCategoriesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$category_id = 'category_id_example'; // string | category_id

try {
    $result = $apiInstance->getLeadSourceCategoryUsingGET($category_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LeadSourceCategoriesApi->getLeadSourceCategoryUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **category_id** | **string**| category_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\LeadSourceCategory**](../Model/LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
