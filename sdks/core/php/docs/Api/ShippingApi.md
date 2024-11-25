# Com\Keap\Sdk\Core\ShippingApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listShippingMethodsUsingGET()**](ShippingApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods |


## `listShippingMethodsUsingGET()`

```php
listShippingMethodsUsingGET(): \Com\Keap\Sdk\Core\Model\ListRestShippingMethodsResponse
```

List Shipping methods

Retrieves a list of Shipping methods

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ShippingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listShippingMethodsUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ShippingApi->listShippingMethodsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ListRestShippingMethodsResponse**](../Model/ListRestShippingMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
