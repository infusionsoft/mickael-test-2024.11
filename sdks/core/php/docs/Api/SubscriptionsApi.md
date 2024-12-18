# Com\Keap\Sdk\Core\SubscriptionsApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelSubscriptionUsingPOST()**](SubscriptionsApi.md#cancelSubscriptionUsingPOST) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**createSubscriptionCustomFieldUsingPOST()**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**createSubscriptionV2UsingPOST()**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |
| [**listSubscriptionsUsingGET1()**](SubscriptionsApi.md#listSubscriptionsUsingGET1) | **GET** /v2/subscriptions | List Subscriptions |
| [**retrieveSubscriptionCustomFieldModelUsingGET()**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**updateSubscriptionCustomFieldUsingPATCH()**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |


## `cancelSubscriptionUsingPOST()`

```php
cancelSubscriptionUsingPOST($subscription_id, $cancel_subscriptions_request)
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
    $apiInstance->cancelSubscriptionUsingPOST($subscription_id, $cancel_subscriptions_request);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->cancelSubscriptionUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createSubscriptionCustomFieldUsingPOST()`

```php
createSubscriptionCustomFieldUsingPOST($create_custom_field_request): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
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
$create_custom_field_request = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createSubscriptionCustomFieldUsingPOST($create_custom_field_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->createSubscriptionCustomFieldUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_custom_field_request** | [**\Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest**](../Model/CreateCustomFieldRequest.md)| customField | |

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

## `listSubscriptionsUsingGET1()`

```php
listSubscriptionsUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListSubscriptionsResponse
```

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\SubscriptionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listSubscriptionsUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->listSubscriptionsUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListSubscriptionsResponse**](../Model/ListSubscriptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveSubscriptionCustomFieldModelUsingGET()`

```php
retrieveSubscriptionCustomFieldModelUsingGET(): \Com\Keap\Sdk\Core\Model\ObjectModel
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
    $result = $apiInstance->retrieveSubscriptionCustomFieldModelUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->retrieveSubscriptionCustomFieldModelUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `updateSubscriptionCustomFieldUsingPATCH()`

```php
updateSubscriptionCustomFieldUsingPATCH($custom_field_id, $update_custom_field_meta_data_request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
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
$update_custom_field_meta_data_request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateSubscriptionCustomFieldUsingPATCH($custom_field_id, $update_custom_field_meta_data_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscriptionsApi->updateSubscriptionCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |
| **update_custom_field_meta_data_request** | [**\Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest**](../Model/UpdateCustomFieldMetaDataRequest.md)| request | |
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
