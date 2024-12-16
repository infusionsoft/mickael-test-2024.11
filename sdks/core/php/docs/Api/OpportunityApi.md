# Com\Keap\Sdk\Core\OpportunityApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createOpportunityCustomFieldsUsingPOST()**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityStageUsingPOST()**](OpportunityApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityUsingPOST1()**](OpportunityApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity |
| [**deleteOpportunityStageUsingDELETE()**](OpportunityApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityUsingDELETE()**](OpportunityApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**getOpportunityStageUsingGET()**](OpportunityApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityUsingGET1()**](OpportunityApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**listOpportunitiesUsingGET1()**](OpportunityApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunityStagesUsingGET()**](OpportunityApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**updateOpportunityCustomFieldUsingPATCH()**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityStageUsingPATCH()**](OpportunityApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**updateOpportunityUsingPATCH()**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |


## `createOpportunityCustomFieldsUsingPOST()`

```php
createOpportunityCustomFieldsUsingPOST($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createOpportunityCustomFieldsUsingPOST($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->createOpportunityCustomFieldsUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createOpportunityStageUsingPOST()`

```php
createOpportunityStageUsingPOST($opportunity_stage): \Com\Keap\Sdk\Core\Model\RestOpportunityStage
```

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_stage = new \Com\Keap\Sdk\Core\Model\CreateOpportunityStageRequest(); // \Com\Keap\Sdk\Core\Model\CreateOpportunityStageRequest | opportunity

try {
    $result = $apiInstance->createOpportunityStageUsingPOST($opportunity_stage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->createOpportunityStageUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **opportunity_stage** | [**\Com\Keap\Sdk\Core\Model\CreateOpportunityStageRequest**](../Model/CreateOpportunityStageRequest.md)| opportunity | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestOpportunityStage**](../Model/RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createOpportunityUsingPOST1()`

```php
createOpportunityUsingPOST1($opportunity): \Com\Keap\Sdk\Core\Model\RestV2Opportunity
```

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity = new \Com\Keap\Sdk\Core\Model\CreateOpportunityRequest(); // \Com\Keap\Sdk\Core\Model\CreateOpportunityRequest | opportunity

try {
    $result = $apiInstance->createOpportunityUsingPOST1($opportunity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->createOpportunityUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **opportunity** | [**\Com\Keap\Sdk\Core\Model\CreateOpportunityRequest**](../Model/CreateOpportunityRequest.md)| opportunity | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Opportunity**](../Model/RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteOpportunityStageUsingDELETE()`

```php
deleteOpportunityStageUsingDELETE($stage_id)
```

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$stage_id = 'stage_id_example'; // string | stage_id

try {
    $apiInstance->deleteOpportunityStageUsingDELETE($stage_id);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->deleteOpportunityStageUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stage_id** | **string**| stage_id | |

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

## `deleteOpportunityUsingDELETE()`

```php
deleteOpportunityUsingDELETE($opportunity_id)
```

Delete an Opportunity

Deletes the specified Opportunity

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_id = 'opportunity_id_example'; // string | opportunity_id

try {
    $apiInstance->deleteOpportunityUsingDELETE($opportunity_id);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->deleteOpportunityUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **opportunity_id** | **string**| opportunity_id | |

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

## `getOpportunityStageUsingGET()`

```php
getOpportunityStageUsingGET($stage_id): \Com\Keap\Sdk\Core\Model\RestOpportunityStage
```

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$stage_id = 'stage_id_example'; // string | stage_id

try {
    $result = $apiInstance->getOpportunityStageUsingGET($stage_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->getOpportunityStageUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stage_id** | **string**| stage_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestOpportunityStage**](../Model/RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getOpportunityUsingGET1()`

```php
getOpportunityUsingGET1($opportunity_id): \Com\Keap\Sdk\Core\Model\RestV2Opportunity
```

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_id = 'opportunity_id_example'; // string | opportunity_id

try {
    $result = $apiInstance->getOpportunityUsingGET1($opportunity_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->getOpportunityUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **opportunity_id** | **string**| opportunity_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Opportunity**](../Model/RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOpportunitiesUsingGET1()`

```php
listOpportunitiesUsingGET1($fields, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOpportunitiesResponse
```

List Opportunities

Retrieves a list of all Opportunities.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$fields = array('fields_example'); // string[] | fields
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id
$order_by = 'order_by_example'; // string | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOpportunitiesUsingGET1($fields, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->listOpportunitiesUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fields** | [**string[]**](../Model/string.md)| fields | [optional] |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id | [optional] |
| **order_by** | **string**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOpportunitiesResponse**](../Model/ListOpportunitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listOpportunityStagesUsingGET()`

```php
listOpportunityStagesUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOpportunityStagesResponse
```

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOpportunityStagesUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->listOpportunityStagesUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOpportunityStagesResponse**](../Model/ListOpportunityStagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateOpportunityCustomFieldUsingPATCH()`

```php
updateOpportunityCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOpportunityCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->updateOpportunityCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateOpportunityStageUsingPATCH()`

```php
updateOpportunityStageUsingPATCH($stage_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\RestOpportunityStage
```

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$stage_id = 'stage_id_example'; // string | stage_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateOpportunityStageRequest(); // \Com\Keap\Sdk\Core\Model\UpdateOpportunityStageRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOpportunityStageUsingPATCH($stage_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->updateOpportunityStageUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stage_id** | **string**| stage_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\UpdateOpportunityStageRequest**](../Model/UpdateOpportunityStageRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestOpportunityStage**](../Model/RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateOpportunityUsingPATCH()`

```php
updateOpportunityUsingPATCH($opportunity_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\RestV2Opportunity
```

Update an opportunity

Updates specified values of a given opportunity

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\OpportunityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_id = 'opportunity_id_example'; // string | opportunity_id
$request = new \Com\Keap\Sdk\Core\Model\PatchOpportunityRequest(); // \Com\Keap\Sdk\Core\Model\PatchOpportunityRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOpportunityUsingPATCH($opportunity_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpportunityApi->updateOpportunityUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **opportunity_id** | **string**| opportunity_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\PatchOpportunityRequest**](../Model/PatchOpportunityRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Opportunity**](../Model/RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
