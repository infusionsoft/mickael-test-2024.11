# Com\Keap\Sdk\Core\PaymentMethodConfigApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPaymentMethodConfigUsingPOST()**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration |


## `createPaymentMethodConfigUsingPOST()`

```php
createPaymentMethodConfigUsingPOST($create_payment_method_config_request): \Com\Keap\Sdk\Core\Model\PaymentMethodConfig
```

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PaymentMethodConfigApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_payment_method_config_request = new \Com\Keap\Sdk\Core\Model\CreatePaymentMethodConfigRequest(); // \Com\Keap\Sdk\Core\Model\CreatePaymentMethodConfigRequest | request

try {
    $result = $apiInstance->createPaymentMethodConfigUsingPOST($create_payment_method_config_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentMethodConfigApi->createPaymentMethodConfigUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_payment_method_config_request** | [**\Com\Keap\Sdk\Core\Model\CreatePaymentMethodConfigRequest**](../Model/CreatePaymentMethodConfigRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\PaymentMethodConfig**](../Model/PaymentMethodConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
