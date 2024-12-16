# Com\Keap\Sdk\Core\ProductApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createProductUsingPOST1()**](ProductApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product |
| [**deleteProductUsingDELETE1()**](ProductApi.md#deleteProductUsingDELETE1) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**getProductUsingGET()**](ProductApi.md#getProductUsingGET) | **GET** /v2/products/{product_id} | Get a Product |
| [**listProductsUsingGET1()**](ProductApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products |


## `createProductUsingPOST1()`

```php
createProductUsingPOST1($create_product_request): \Com\Keap\Sdk\Core\Model\RestV2Product
```

Create a Product

Creates a new product

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ProductApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_product_request = new \Com\Keap\Sdk\Core\Model\CreateProductRequest(); // \Com\Keap\Sdk\Core\Model\CreateProductRequest | createProductRequest

try {
    $result = $apiInstance->createProductUsingPOST1($create_product_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductApi->createProductUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_product_request** | [**\Com\Keap\Sdk\Core\Model\CreateProductRequest**](../Model/CreateProductRequest.md)| createProductRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Product**](../Model/RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteProductUsingDELETE1()`

```php
deleteProductUsingDELETE1($product_id)
```

Delete a Product

Deletes a single product

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ProductApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$product_id = 'product_id_example'; // string | product_id

try {
    $apiInstance->deleteProductUsingDELETE1($product_id);
} catch (Exception $e) {
    echo 'Exception when calling ProductApi->deleteProductUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **product_id** | **string**| product_id | |

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

## `getProductUsingGET()`

```php
getProductUsingGET($product_id): \Com\Keap\Sdk\Core\Model\RestV2Product
```

Get a Product

Gets a single Product

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ProductApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$product_id = 'product_id_example'; // string | product_id

try {
    $result = $apiInstance->getProductUsingGET($product_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductApi->getProductUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **product_id** | **string**| product_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Product**](../Model/RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listProductsUsingGET1()`

```php
listProductsUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListProductsResponse
```

List Products

Retrieves a list of Products

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ProductApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listProductsUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProductApi->listProductsUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListProductsResponse**](../Model/ListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
