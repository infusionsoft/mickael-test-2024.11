# Com\Keap\Sdk\Core\OrderTotalDiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createOrderTotalDiscountUsingPOST()**](OrderTotalDiscountApi.md#createOrderTotalDiscountUsingPOST) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**deleteOrderTotalDiscountUsingDELETE()**](OrderTotalDiscountApi.md#deleteOrderTotalDiscountUsingDELETE) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**getOrderTotalDiscountUsingGET()**](OrderTotalDiscountApi.md#getOrderTotalDiscountUsingGET) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**listOrderTotalDiscountsUsingGET()**](OrderTotalDiscountApi.md#listOrderTotalDiscountsUsingGET) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**updateOrderTotalDiscountUsingPATCH()**](OrderTotalDiscountApi.md#updateOrderTotalDiscountUsingPATCH) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |


## `createOrderTotalDiscountUsingPOST()`

```php
createOrderTotalDiscountUsingPOST($request): \Com\Keap\Sdk\Core\Model\OrderTotalDiscount
```

Create an Order Total Discount

Creates an Order Total Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrderTotalDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request = new \Com\Keap\Sdk\Core\Model\CreateOrderTotalDiscountRequest(); // \Com\Keap\Sdk\Core\Model\CreateOrderTotalDiscountRequest | request

try {
    $result = $apiInstance->createOrderTotalDiscountUsingPOST($request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderTotalDiscountApi->createOrderTotalDiscountUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request** | [**\Com\Keap\Sdk\Core\Model\CreateOrderTotalDiscountRequest**](../Model/CreateOrderTotalDiscountRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\OrderTotalDiscount**](../Model/OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteOrderTotalDiscountUsingDELETE()`

```php
deleteOrderTotalDiscountUsingDELETE($discount_id)
```

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrderTotalDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $apiInstance->deleteOrderTotalDiscountUsingDELETE($discount_id);
} catch (Exception $e) {
    echo 'Exception when calling OrderTotalDiscountApi->deleteOrderTotalDiscountUsingDELETE: ', $e->getMessage(), PHP_EOL;
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

## `getOrderTotalDiscountUsingGET()`

```php
getOrderTotalDiscountUsingGET($discount_id): \Com\Keap\Sdk\Core\Model\OrderTotalDiscount
```

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrderTotalDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $result = $apiInstance->getOrderTotalDiscountUsingGET($discount_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderTotalDiscountApi->getOrderTotalDiscountUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\OrderTotalDiscount**](../Model/OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOrderTotalDiscountsUsingGET()`

```php
listOrderTotalDiscountsUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOrderTotalDiscountsResponse
```

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrderTotalDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOrderTotalDiscountsUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderTotalDiscountApi->listOrderTotalDiscountsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOrderTotalDiscountsResponse**](../Model/ListOrderTotalDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateOrderTotalDiscountUsingPATCH()`

```php
updateOrderTotalDiscountUsingPATCH($discount_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\OrderTotalDiscount
```

Update an Order Total Discount

Updates an Order Total Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrderTotalDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateOrderTotalDiscountRequest(); // \Com\Keap\Sdk\Core\Model\UpdateOrderTotalDiscountRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOrderTotalDiscountUsingPATCH($discount_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderTotalDiscountApi->updateOrderTotalDiscountUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\UpdateOrderTotalDiscountRequest**](../Model/UpdateOrderTotalDiscountRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\OrderTotalDiscount**](../Model/OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
