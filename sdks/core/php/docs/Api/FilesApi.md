# Com\Keap\Sdk\Core\FilesApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createFileUsingPOST1()**](FilesApi.md#createFileUsingPOST1) | **POST** /v2/files | Create a file |
| [**deleteFileUsingDELETE1()**](FilesApi.md#deleteFileUsingDELETE1) | **DELETE** /v2/files/{file_id} | Delete a file |
| [**getFileDataUsingGET()**](FilesApi.md#getFileDataUsingGET) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data |
| [**getFileUsingGET1()**](FilesApi.md#getFileUsingGET1) | **GET** /v2/files/{file_id} | Retrieve a file |
| [**listFilesUsingGET1()**](FilesApi.md#listFilesUsingGET1) | **GET** /v2/files | List all files |
| [**updateFileUsingPATCH()**](FilesApi.md#updateFileUsingPATCH) | **PATCH** /v2/files/{file_id} | Update a file |


## `createFileUsingPOST1()`

```php
createFileUsingPOST1($create_file_request): \Com\Keap\Sdk\Core\Model\FileMetadata
```

Create a file

Creates a file and uploads it

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_file_request = new \Com\Keap\Sdk\Core\Model\CreateFileRequest(); // \Com\Keap\Sdk\Core\Model\CreateFileRequest | request

try {
    $result = $apiInstance->createFileUsingPOST1($create_file_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->createFileUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_file_request** | [**\Com\Keap\Sdk\Core\Model\CreateFileRequest**](../Model/CreateFileRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\FileMetadata**](../Model/FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteFileUsingDELETE1()`

```php
deleteFileUsingDELETE1($file_id)
```

Delete a file

Deletes a specified file

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$file_id = 'file_id_example'; // string | file_id

try {
    $apiInstance->deleteFileUsingDELETE1($file_id);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->deleteFileUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **file_id** | **string**| file_id | |

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

## `getFileDataUsingGET()`

```php
getFileDataUsingGET($file_id): string
```

Retrieve a file's data

Retrieves a file's data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$file_id = 'file_id_example'; // string | file_id

try {
    $result = $apiInstance->getFileDataUsingGET($file_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->getFileDataUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **file_id** | **string**| file_id | |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFileUsingGET1()`

```php
getFileUsingGET1($file_id): \Com\Keap\Sdk\Core\Model\FileMetadata
```

Retrieve a file

Retrieves a file

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$file_id = 'file_id_example'; // string | file_id

try {
    $result = $apiInstance->getFileUsingGET1($file_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->getFileUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **file_id** | **string**| file_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\FileMetadata**](../Model/FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listFilesUsingGET1()`

```php
listFilesUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListFilesResponse
```

List all files

Retrieves all files

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listFilesUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->listFilesUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListFilesResponse**](../Model/ListFilesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateFileUsingPATCH()`

```php
updateFileUsingPATCH($file_id, $update_file_request, $update_mask): \Com\Keap\Sdk\Core\Model\FileMetadata
```

Update a file

Updates a file

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FilesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$file_id = 'file_id_example'; // string | file_id
$update_file_request = new \Com\Keap\Sdk\Core\Model\UpdateFileRequest(); // \Com\Keap\Sdk\Core\Model\UpdateFileRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateFileUsingPATCH($file_id, $update_file_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FilesApi->updateFileUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **file_id** | **string**| file_id | |
| **update_file_request** | [**\Com\Keap\Sdk\Core\Model\UpdateFileRequest**](../Model/UpdateFileRequest.md)| request | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\FileMetadata**](../Model/FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
