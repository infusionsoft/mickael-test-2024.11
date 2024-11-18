# Com\Keap\Sdk\Core\SubscriptionPlansApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSubscriptionV2UsingPOST()**](SubscriptionPlansApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |
| [**listSubscriptionPlansUsingGET_0()**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET_0) | **GET** /v2/subscriptionPlans | List Subscription Plans |


## `createSubscriptionV2UsingPOST()`

```php
createSubscriptionV2UsingPOST($create_subscription_v2): \Com\Keap\Sdk\Core\Model\RestSubscriptionV2
```

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionPlansApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_subscription_v2 = new \Com\Keap\Sdk\Core\Model\CreateSubscriptionV2(); // \Com\Keap\Sdk\Core\Model\CreateSubscriptionV2 | createSubscriptionV2

try {
    $result = $apiInstance->createSubscriptionV2UsingPOST($create_subscription_v2);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionPlansApi->createSubscriptionV2UsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_subscription_v2** | [**\Com\Keap\Sdk\Core\Model\CreateSubscriptionV2**](../Model/CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestSubscriptionV2**](../Model/RestSubscriptionV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSubscriptionPlansUsingGET_0()`

```php
listSubscriptionPlansUsingGET_0($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse
```

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionPlansApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listSubscriptionPlansUsingGET_0($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionPlansApi->listSubscriptionPlansUsingGET_0: ', $e->getMessage(), PHP_EOL;
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

[**\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse**](../Model/ListSubscriptionPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
