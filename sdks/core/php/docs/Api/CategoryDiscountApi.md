# Com\Keap\Sdk\Core\CategoryDiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createDiscountUsingPOST()**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**deleteDiscountUsingDELETE()**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**getDiscountUsingGET()**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**updateDiscountUsingPATCH()**](CategoryDiscountApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |


## `createDiscountUsingPOST()`

```php
createDiscountUsingPOST($create_update_discount_request): \Com\Keap\Sdk\Core\Model\CategoryDiscount
```

Create a Category Discount

Create a Category Discount.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\CategoryDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_update_discount_request = new \Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest(); // \Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest | request

try {
    $result = $apiInstance->createDiscountUsingPOST($create_update_discount_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryDiscountApi->createDiscountUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_update_discount_request** | [**\Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest**](../Model/CreateUpdateDiscountRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CategoryDiscount**](../Model/CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteDiscountUsingDELETE()`

```php
deleteDiscountUsingDELETE($discount_id)
```

Delete a Category Discount

Deletes a specified Category Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\CategoryDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $apiInstance->deleteDiscountUsingDELETE($discount_id);
} catch (Exception $e) {
    echo 'Exception when calling CategoryDiscountApi->deleteDiscountUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |

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

## `getDiscountUsingGET()`

```php
getDiscountUsingGET($discount_id): \Com\Keap\Sdk\Core\Model\CategoryDiscount
```

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\CategoryDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $result = $apiInstance->getDiscountUsingGET($discount_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryDiscountApi->getDiscountUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CategoryDiscount**](../Model/CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateDiscountUsingPATCH()`

```php
updateDiscountUsingPATCH($discount_id, $create_update_discount_request, $update_mask): \Com\Keap\Sdk\Core\Model\CategoryDiscount
```

Update a Category Discount

Update a Category Discount.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\CategoryDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id
$create_update_discount_request = new \Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest(); // \Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateDiscountUsingPATCH($discount_id, $create_update_discount_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryDiscountApi->updateDiscountUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |
| **create_update_discount_request** | [**\Com\Keap\Sdk\Core\Model\CreateUpdateDiscountRequest**](../Model/CreateUpdateDiscountRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\CategoryDiscount**](../Model/CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
