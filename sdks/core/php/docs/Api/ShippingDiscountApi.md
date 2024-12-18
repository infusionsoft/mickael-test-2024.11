# Com\Keap\Sdk\Core\ShippingDiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createDiscountUsingPOST1()**](ShippingDiscountApi.md#createDiscountUsingPOST1) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**deleteDiscountUsingDELETE2()**](ShippingDiscountApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**getDiscountUsingGET1()**](ShippingDiscountApi.md#getDiscountUsingGET1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**listDiscountsUsingGET()**](ShippingDiscountApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**updateDiscountUsingPATCH1()**](ShippingDiscountApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |


## `createDiscountUsingPOST1()`

```php
createDiscountUsingPOST1($create_shipping_discount_request): \Com\Keap\Sdk\Core\Model\ShippingDiscount
```

Create a Shipping Discount

Creates a Shipping Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_shipping_discount_request = new \Com\Keap\Sdk\Core\Model\CreateShippingDiscountRequest(); // \Com\Keap\Sdk\Core\Model\CreateShippingDiscountRequest | request

try {
    $result = $apiInstance->createDiscountUsingPOST1($create_shipping_discount_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingDiscountApi->createDiscountUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_shipping_discount_request** | [**\Com\Keap\Sdk\Core\Model\CreateShippingDiscountRequest**](../Model/CreateShippingDiscountRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\ShippingDiscount**](../Model/ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteDiscountUsingDELETE2()`

```php
deleteDiscountUsingDELETE2($discount_id)
```

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $apiInstance->deleteDiscountUsingDELETE2($discount_id);
} catch (Exception $e) {
    echo 'Exception when calling ShippingDiscountApi->deleteDiscountUsingDELETE2: ', $e->getMessage(), PHP_EOL;
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

## `getDiscountUsingGET1()`

```php
getDiscountUsingGET1($discount_id): \Com\Keap\Sdk\Core\Model\ShippingDiscount
```

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $result = $apiInstance->getDiscountUsingGET1($discount_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingDiscountApi->getDiscountUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\ShippingDiscount**](../Model/ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listDiscountsUsingGET()`

```php
listDiscountsUsingGET($fields, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListShippingDiscountsResponse
```

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields = array('fields_example'); // string[] | TODO: PAPI-1449
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld`
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listDiscountsUsingGET($fields, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingDiscountApi->listDiscountsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields** | [**string[]**](../Model/string.md)| TODO: PAPI-1449 | [optional] |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListShippingDiscountsResponse**](../Model/ListShippingDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateDiscountUsingPATCH1()`

```php
updateDiscountUsingPATCH1($discount_id, $update_shipping_discount_request, $update_mask): \Com\Keap\Sdk\Core\Model\ShippingDiscount
```

Update a Shipping Discount

Updates a Shipping Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id
$update_shipping_discount_request = new \Com\Keap\Sdk\Core\Model\UpdateShippingDiscountRequest(); // \Com\Keap\Sdk\Core\Model\UpdateShippingDiscountRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateDiscountUsingPATCH1($discount_id, $update_shipping_discount_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingDiscountApi->updateDiscountUsingPATCH1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |
| **update_shipping_discount_request** | [**\Com\Keap\Sdk\Core\Model\UpdateShippingDiscountRequest**](../Model/UpdateShippingDiscountRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ShippingDiscount**](../Model/ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
