# Com\Keap\Sdk\Core\NoteApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createNoteCustomFieldUsingPOST1_0()**](NoteApi.md#createNoteCustomFieldUsingPOST1_0) | **POST** /v2/notes/model/customFields | Create a Custom Field |
| [**createNoteUsingPOST1()**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note |
| [**deleteNoteUsingDELETE1()**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note |
| [**getNoteUsingGET1()**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note |
| [**listNotesUsingGET1()**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes |
| [**retrieveNoteModelUsingGET1_0()**](NoteApi.md#retrieveNoteModelUsingGET1_0) | **GET** /v2/notes/model | Retrieve Note Model |
| [**updateNoteUsingPATCH()**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note |
| [**updateNotesCustomFieldUsingPATCH_0()**](NoteApi.md#updateNotesCustomFieldUsingPATCH_0) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |


## `createNoteCustomFieldUsingPOST1_0()`

```php
createNoteCustomFieldUsingPOST1_0($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createNoteCustomFieldUsingPOST1_0($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->createNoteCustomFieldUsingPOST1_0: ', $e->getMessage(), PHP_EOL;
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

## `createNoteUsingPOST1()`

```php
createNoteUsingPOST1($contact_id, $request): \Com\Keap\Sdk\Core\Model\Note
```

Create a Note

Creates a new Note.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id
$request = new \Com\Keap\Sdk\Core\Model\CreateNoteRequest(); // \Com\Keap\Sdk\Core\Model\CreateNoteRequest | request

try {
    $result = $apiInstance->createNoteUsingPOST1($contact_id, $request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->createNoteUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\CreateNoteRequest**](../Model/CreateNoteRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Note**](../Model/Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteNoteUsingDELETE1()`

```php
deleteNoteUsingDELETE1($contact_id, $note_id)
```

Delete a Note

Deletes the specified Note

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id
$note_id = 'note_id_example'; // string | note_id

try {
    $apiInstance->deleteNoteUsingDELETE1($contact_id, $note_id);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->deleteNoteUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |
| **note_id** | **string**| note_id | |

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

## `getNoteUsingGET1()`

```php
getNoteUsingGET1($contact_id, $note_id): \Com\Keap\Sdk\Core\Model\GetNoteResponse
```

Retrieve a Note

Retrieves the specified Note

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id
$note_id = 'note_id_example'; // string | note_id

try {
    $result = $apiInstance->getNoteUsingGET1($contact_id, $note_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->getNoteUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |
| **note_id** | **string**| note_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\GetNoteResponse**](../Model/GetNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listNotesUsingGET1()`

```php
listNotesUsingGET1($contact_id, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListNotesResponse
```

List Notes

Retrieves a list of Notes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listNotesUsingGET1($contact_id, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->listNotesUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListNotesResponse**](../Model/ListNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveNoteModelUsingGET1_0()`

```php
retrieveNoteModelUsingGET1_0(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Note Model

Gets the custom fields for the Note object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveNoteModelUsingGET1_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->retrieveNoteModelUsingGET1_0: ', $e->getMessage(), PHP_EOL;
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

## `updateNoteUsingPATCH()`

```php
updateNoteUsingPATCH($contact_id, $note_id, $update_note_request, $update_mask): \Com\Keap\Sdk\Core\Model\UpdateNoteResponse
```

Update a Note

Updates a Note for a Contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id
$note_id = 'note_id_example'; // string | note_id
$update_note_request = new \Com\Keap\Sdk\Core\Model\UpdateNoteRequest(); // \Com\Keap\Sdk\Core\Model\UpdateNoteRequest | updateNoteRequest
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateNoteUsingPATCH($contact_id, $note_id, $update_note_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->updateNoteUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |
| **note_id** | **string**| note_id | |
| **update_note_request** | [**\Com\Keap\Sdk\Core\Model\UpdateNoteRequest**](../Model/UpdateNoteRequest.md)| updateNoteRequest | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\UpdateNoteResponse**](../Model/UpdateNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateNotesCustomFieldUsingPATCH_0()`

```php
updateNotesCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\NoteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateNotesCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling NoteApi->updateNotesCustomFieldUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest**](../Model/UpdateCustomFieldMetaDataRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

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
