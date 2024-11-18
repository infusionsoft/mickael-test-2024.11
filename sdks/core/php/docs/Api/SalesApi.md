# Com\Keap\Sdk\Core\SalesApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**setMerchantGatewayAsDefaultUsingPOST()**](SalesApi.md#setMerchantGatewayAsDefaultUsingPOST) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |


## `setMerchantGatewayAsDefaultUsingPOST()`

```php
setMerchantGatewayAsDefaultUsingPOST($id)
```

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SalesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int | id

try {
    $apiInstance->setMerchantGatewayAsDefaultUsingPOST($id);
} catch (Exception $e) {
    echo 'Exception when calling SalesApi->setMerchantGatewayAsDefaultUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| id | |

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
