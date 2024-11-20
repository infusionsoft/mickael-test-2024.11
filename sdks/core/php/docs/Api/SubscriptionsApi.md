# Com\Keap\Sdk\Core\SubscriptionsApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelSubscriptionUsingPOST_0()**](SubscriptionsApi.md#cancelSubscriptionUsingPOST_0) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**createSubscriptionCustomFieldUsingPOST_0()**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOST_0) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**createSubscriptionV2UsingPOST()**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |
| [**retrieveSubscriptionCustomFieldModelUsingGET_0()**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGET_0) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**updateSubscriptionCustomFieldUsingPATCH_0()**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCH_0) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |


## `cancelSubscriptionUsingPOST_0()`

```php
cancelSubscriptionUsingPOST_0($subscription_id, $cancel_subscriptions_request)
```

Cancel Subscription

Cancels the specified subscription

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$subscription_id = 'subscription_id_example'; // string | subscription_id
$cancel_subscriptions_request = new \Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest(); // \Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest | cancelSubscriptionsRequest

try {
    $apiInstance->cancelSubscriptionUsingPOST_0($subscription_id, $cancel_subscriptions_request);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->cancelSubscriptionUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **subscription_id** | **string**| subscription_id | |
| **cancel_subscriptions_request** | [**\Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest**](../Model/CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSubscriptionCustomFieldUsingPOST_0()`

```php
createSubscriptionCustomFieldUsingPOST_0($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create a Subscription's Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createSubscriptionCustomFieldUsingPOST_0($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->createSubscriptionCustomFieldUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field** | [**\Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest**](../Model/CreateCustomFieldRequest.md)| customField | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CustomFieldMetaData**](../Model/CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

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


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_subscription_v2 = new \Com\Keap\Sdk\Core\Model\CreateSubscriptionV2(); // \Com\Keap\Sdk\Core\Model\CreateSubscriptionV2 | createSubscriptionV2

try {
    $result = $apiInstance->createSubscriptionV2UsingPOST($create_subscription_v2);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->createSubscriptionV2UsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `retrieveSubscriptionCustomFieldModelUsingGET_0()`

```php
retrieveSubscriptionCustomFieldModelUsingGET_0(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Subscription's Custom Field Model

Gets the custom field's model for the Subscription object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveSubscriptionCustomFieldModelUsingGET_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->retrieveSubscriptionCustomFieldModelUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ObjectModel**](../Model/ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSubscriptionCustomFieldUsingPATCH_0()`

```php
updateSubscriptionCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Subscription's Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateSubscriptionCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->updateSubscriptionCustomFieldUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest**](../Model/UpdateCustomFieldMetaDataRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\CustomFieldMetaData**](../Model/CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
