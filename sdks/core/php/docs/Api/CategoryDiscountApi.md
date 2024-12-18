# Com\Keap\Sdk\Core\CategoryDiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createDiscountUsingPOST()**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**deleteDiscountUsingDELETE()**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**getDiscountUsingGET()**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**listCategoryDiscountsUsingGET()**](CategoryDiscountApi.md#listCategoryDiscountsUsingGET) | **GET** /v2/discounts/productCategories | List Category Discounts |
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

## `listCategoryDiscountsUsingGET()`

```php
listCategoryDiscountsUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListCategoryDiscountsResponse
```

List Category Discounts

Retrieve a list of Category Discounts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\CategoryDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listCategoryDiscountsUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryDiscountApi->listCategoryDiscountsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListCategoryDiscountsResponse**](../Model/ListCategoryDiscountsResponse.md)

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
