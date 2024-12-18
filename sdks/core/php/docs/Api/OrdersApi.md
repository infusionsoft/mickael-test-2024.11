# Com\Keap\Sdk\Core\OrdersApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createOrderCustomFieldUsingPOST()**](OrdersApi.md#createOrderCustomFieldUsingPOST) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field |
| [**createOrderItemsOnOrderUsingPOST1()**](OrdersApi.md#createOrderItemsOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/items | Create an Order Item |
| [**createOrderUsingPOST1()**](OrdersApi.md#createOrderUsingPOST1) | **POST** /v2/orders | Create an Order |
| [**createPaymentOnOrderUsingPOST1()**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment |
| [**deleteOrderCustomFieldUsingDELETE()**](OrdersApi.md#deleteOrderCustomFieldUsingDELETE) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order&#39;s Custom Field |
| [**deleteOrderUsingDELETE1()**](OrdersApi.md#deleteOrderUsingDELETE1) | **DELETE** /v2/orders/{order_id} | Delete an Order |
| [**getOrderUsingGET1()**](OrdersApi.md#getOrderUsingGET1) | **GET** /v2/orders/{order_id} | Retrieve an Order |
| [**listOrderPaymentsUsingGET1()**](OrdersApi.md#listOrderPaymentsUsingGET1) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments |
| [**listOrdersUsingGET1()**](OrdersApi.md#listOrdersUsingGET1) | **GET** /v2/orders | List orders |
| [**patchOrderUsingPATCH()**](OrdersApi.md#patchOrderUsingPATCH) | **PATCH** /v2/orders/{order_id} | Update an Order |
| [**retrieveOrderCustomFieldModelUsingGET()**](OrdersApi.md#retrieveOrderCustomFieldModelUsingGET) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model |
| [**updateOrderCustomFieldUsingPATCH()**](OrdersApi.md#updateOrderCustomFieldUsingPATCH) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field |


## `createOrderCustomFieldUsingPOST()`

```php
createOrderCustomFieldUsingPOST($create_custom_field_request): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create an Order's Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_custom_field_request = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createOrderCustomFieldUsingPOST($create_custom_field_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->createOrderCustomFieldUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createOrderItemsOnOrderUsingPOST1()`

```php
createOrderItemsOnOrderUsingPOST1($order_id, $create_rest_order_item_request): \Com\Keap\Sdk\Core\Model\RestV2OrderItem
```

Create an Order Item

Creates an order item on an existing order.

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
$create_rest_order_item_request = new \Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest(); // \Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest | createRestOrderItemRequest

try {
    $result = $apiInstance->createOrderItemsOnOrderUsingPOST1($order_id, $create_rest_order_item_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->createOrderItemsOnOrderUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |
| **create_rest_order_item_request** | [**\Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest**](../Model/CreateRestOrderItemRequest.md)| createRestOrderItemRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2OrderItem**](../Model/RestV2OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createOrderUsingPOST1()`

```php
createOrderUsingPOST1($rest_create_order_request): \Com\Keap\Sdk\Core\Model\RestV2Order
```

Create an Order

Create a one time Order with Order items.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$rest_create_order_request = new \Com\Keap\Sdk\Core\Model\RestCreateOrderRequest(); // \Com\Keap\Sdk\Core\Model\RestCreateOrderRequest | createOrderRequest

try {
    $result = $apiInstance->createOrderUsingPOST1($rest_create_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->createOrderUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **rest_create_order_request** | [**\Com\Keap\Sdk\Core\Model\RestCreateOrderRequest**](../Model/RestCreateOrderRequest.md)| createOrderRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Order**](../Model/RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

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

## `deleteOrderCustomFieldUsingDELETE()`

```php
deleteOrderCustomFieldUsingDELETE($custom_field_id)
```

Delete an Order's Custom Field

Deletes a Custom Field from Order.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id

try {
    $apiInstance->deleteOrderCustomFieldUsingDELETE($custom_field_id);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->deleteOrderCustomFieldUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |

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

## `deleteOrderUsingDELETE1()`

```php
deleteOrderUsingDELETE1($order_id)
```

Delete an Order

Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion.

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

try {
    $apiInstance->deleteOrderUsingDELETE1($order_id);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->deleteOrderUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |

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

## `getOrderUsingGET1()`

```php
getOrderUsingGET1($order_id): \Com\Keap\Sdk\Core\Model\RestV2Order
```

Retrieve an Order

Retrieves a single Order for a given order id

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

try {
    $result = $apiInstance->getOrderUsingGET1($order_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->getOrderUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Order**](../Model/RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOrderPaymentsUsingGET1()`

```php
listOrderPaymentsUsingGET1($order_id, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOrderPaymentsResponse
```

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

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
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOrderPaymentsUsingGET1($order_id, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->listOrderPaymentsUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOrderPaymentsResponse**](../Model/ListOrderPaymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOrdersUsingGET1()`

```php
listOrdersUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOrders
```

List orders

Retrieves a list of orders

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOrdersUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->listOrdersUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOrders**](../Model/ListOrders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchOrderUsingPATCH()`

```php
patchOrderUsingPATCH($order_id, $update_mask, $rest_v2_patch_order_request): \Com\Keap\Sdk\Core\Model\RestV2Order
```

Update an Order

Updates an Order

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
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
$rest_v2_patch_order_request = new \Com\Keap\Sdk\Core\Model\RestV2PatchOrderRequest(); // \Com\Keap\Sdk\Core\Model\RestV2PatchOrderRequest | order

try {
    $result = $apiInstance->patchOrderUsingPATCH($order_id, $update_mask, $rest_v2_patch_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->patchOrderUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **rest_v2_patch_order_request** | [**\Com\Keap\Sdk\Core\Model\RestV2PatchOrderRequest**](../Model/RestV2PatchOrderRequest.md)| order | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Order**](../Model/RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveOrderCustomFieldModelUsingGET()`

```php
retrieveOrderCustomFieldModelUsingGET(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve an Order's Custom Field Model

Gets the custom field's model for the Order object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveOrderCustomFieldModelUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->retrieveOrderCustomFieldModelUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `updateOrderCustomFieldUsingPATCH()`

```php
updateOrderCustomFieldUsingPATCH($custom_field_id, $update_custom_field_meta_data_request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update an Order's Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$update_custom_field_meta_data_request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOrderCustomFieldUsingPATCH($custom_field_id, $update_custom_field_meta_data_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->updateOrderCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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
