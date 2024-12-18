# Com\Keap\Sdk\Core\OrdersApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPaymentOnOrderUsingPOST1()**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment |


## `createPaymentOnOrderUsingPOST1()`

```php
createPaymentOnOrderUsingPOST1($order_id, $create_payment_request): \Com\Keap\Sdk\Core\Model\PaymentResult
```

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$order_id = 'order_id_example'; // string | order_id
$create_payment_request = new \Com\Keap\Sdk\Core\Model\CreatePaymentRequest(); // \Com\Keap\Sdk\Core\Model\CreatePaymentRequest | createPaymentRequest

try {
    $result = $apiInstance->createPaymentOnOrderUsingPOST1($order_id, $create_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->createPaymentOnOrderUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |
| **create_payment_request** | [**\Com\Keap\Sdk\Core\Model\CreatePaymentRequest**](../Model/CreatePaymentRequest.md)| createPaymentRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\PaymentResult**](../Model/PaymentResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
