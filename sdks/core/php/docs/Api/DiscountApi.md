# Com\Keap\Sdk\Core\DiscountApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getCategoryDiscountUsingGET_0()**](DiscountApi.md#getCategoryDiscountUsingGET_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount |


## `getCategoryDiscountUsingGET_0()`

```php
getCategoryDiscountUsingGET_0($discount_id): \Com\Keap\Sdk\Core\Model\CategoryDiscount
```

Retrieve Category Discount

Retrieves a single Category Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\DiscountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $result = $apiInstance->getCategoryDiscountUsingGET_0($discount_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountApi->getCategoryDiscountUsingGET_0: ', $e->getMessage(), PHP_EOL;
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
