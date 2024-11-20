# Com\Keap\Sdk\Core\FreeTrialDiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteDiscountUsingDELETE1_0()**](FreeTrialDiscountApi.md#deleteDiscountUsingDELETE1_0) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount |


## `deleteDiscountUsingDELETE1_0()`

```php
deleteDiscountUsingDELETE1_0($discount_id)
```

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FreeTrialDiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $apiInstance->deleteDiscountUsingDELETE1_0($discount_id);
} catch (Exception $e) {
    echo 'Exception when calling FreeTrialDiscountApi->deleteDiscountUsingDELETE1_0: ', $e->getMessage(), PHP_EOL;
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
