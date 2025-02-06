# Keap\Core\V2\AutomationApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addContactsToAutomationSequenceUsingPOST()**](AutomationApi.md#addContactsToAutomationSequenceUsingPOST) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence |
| [**deleteAutomationUsingDELETE()**](AutomationApi.md#deleteAutomationUsingDELETE) | **DELETE** /v2/automations | Delete an Automation |
| [**getAutomationUsingGET()**](AutomationApi.md#getAutomationUsingGET) | **GET** /v2/automations/{automation_id} | Retrieve an Automation |
| [**listAllAutomationIdsUsingGET()**](AutomationApi.md#listAllAutomationIdsUsingGET) | **GET** /v2/automations/ids | List Automations Ids |
| [**listAutomationsUsingGET()**](AutomationApi.md#listAutomationsUsingGET) | **GET** /v2/automations | List Automations |
| [**updateAutomationCategoryUsingPUT()**](AutomationApi.md#updateAutomationCategoryUsingPUT) | **PUT** /v2/automations/category | Update an Automation&#39;s Category |


## `addContactsToAutomationSequenceUsingPOST()`

```php
addContactsToAutomationSequenceUsingPOST($automation_id, $sequence_id, $add_to_automation_sequence_request): \Keap\Core\V2\Model\AddToAutomationSequenceResponse
```

Add Contacts to an Automation Sequence

Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$automation_id = 'automation_id_example'; // string | automation_id
$sequence_id = 'sequence_id_example'; // string | sequence_id
$add_to_automation_sequence_request = new \Keap\Core\V2\Model\AddToAutomationSequenceRequest(); // \Keap\Core\V2\Model\AddToAutomationSequenceRequest | addToAutomationSequenceRequest

try {
    $result = $apiInstance->addContactsToAutomationSequenceUsingPOST($automation_id, $sequence_id, $add_to_automation_sequence_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->addContactsToAutomationSequenceUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **automation_id** | **string**| automation_id | |
| **sequence_id** | **string**| sequence_id | |
| **add_to_automation_sequence_request** | [**\Keap\Core\V2\Model\AddToAutomationSequenceRequest**](../Model/AddToAutomationSequenceRequest.md)| addToAutomationSequenceRequest | |

### Return type

[**\Keap\Core\V2\Model\AddToAutomationSequenceResponse**](../Model/AddToAutomationSequenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteAutomationUsingDELETE()`

```php
deleteAutomationUsingDELETE($automation_ids)
```

Delete an Automation

Deletes a single automation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$automation_ids = array(56); // int[] | automation_ids

try {
    $apiInstance->deleteAutomationUsingDELETE($automation_ids);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->deleteAutomationUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **automation_ids** | [**int[]**](../Model/int.md)| automation_ids | |

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

## `getAutomationUsingGET()`

```php
getAutomationUsingGET($automation_id): \Keap\Core\V2\Model\Automation
```

Retrieve an Automation

Retrieves a single automation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$automation_id = 'automation_id_example'; // string | automation_id

try {
    $result = $apiInstance->getAutomationUsingGET($automation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->getAutomationUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **automation_id** | **string**| automation_id | |

### Return type

[**\Keap\Core\V2\Model\Automation**](../Model/Automation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllAutomationIdsUsingGET()`

```php
listAllAutomationIdsUsingGET($filter, $order_by, $page_size, $page_token, $stats): \Keap\Core\V2\Model\ListAutomationIdsResponse
```

List Automations Ids

Retrieves a list of automations IDs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token
$stats = True; // bool

try {
    $result = $apiInstance->listAllAutomationIdsUsingGET($filter, $order_by, $page_size, $page_token, $stats);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->listAllAutomationIdsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |
| **stats** | **bool**|  | [optional] |

### Return type

[**\Keap\Core\V2\Model\ListAutomationIdsResponse**](../Model/ListAutomationIdsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAutomationsUsingGET()`

```php
listAutomationsUsingGET($filter, $order_by, $page_size, $page_token, $stats): \Keap\Core\V2\Model\ListAutomationResponse
```

List Automations

Retrieves a list of automations

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token
$stats = True; // bool

try {
    $result = $apiInstance->listAutomationsUsingGET($filter, $order_by, $page_size, $page_token, $stats);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->listAutomationsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |
| **stats** | **bool**|  | [optional] |

### Return type

[**\Keap\Core\V2\Model\ListAutomationResponse**](../Model/ListAutomationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateAutomationCategoryUsingPUT()`

```php
updateAutomationCategoryUsingPUT($update_automation_category_request)
```

Update an Automation's Category

Updates the category of one or more automations

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Keap\Core\V2\Api\AutomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$update_automation_category_request = new \Keap\Core\V2\Model\UpdateAutomationCategoryRequest(); // \Keap\Core\V2\Model\UpdateAutomationCategoryRequest | updateAutomationCategoryRequest

try {
    $apiInstance->updateAutomationCategoryUsingPUT($update_automation_category_request);
} catch (Exception $e) {
    echo 'Exception when calling AutomationApi->updateAutomationCategoryUsingPUT: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_automation_category_request** | [**\Keap\Core\V2\Model\UpdateAutomationCategoryRequest**](../Model/UpdateAutomationCategoryRequest.md)| updateAutomationCategoryRequest | |

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
