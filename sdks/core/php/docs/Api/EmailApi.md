# Com\Keap\Sdk\Core\EmailApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createEmailUsingPOST1()**](EmailApi.md#createEmailUsingPOST1) | **POST** /v2/emails | Create an Email Record |
| [**createEmailsUsingPOST1()**](EmailApi.md#createEmailsUsingPOST1) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**deleteEmailUsingDELETE1()**](EmailApi.md#deleteEmailUsingDELETE1) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**deleteEmailsUsingPOST1()**](EmailApi.md#deleteEmailsUsingPOST1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**getEmailUsingGET1()**](EmailApi.md#getEmailUsingGET1) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**sendEmailUsingPOST1()**](EmailApi.md#sendEmailUsingPOST1) | **POST** /v2/emails:send | Send an Email |


## `createEmailUsingPOST1()`

```php
createEmailUsingPOST1($create_email_sent_request): \Com\Keap\Sdk\Core\Model\EmailSentWithContent
```

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_email_sent_request = new \Com\Keap\Sdk\Core\Model\CreateEmailSentRequest(); // \Com\Keap\Sdk\Core\Model\CreateEmailSentRequest | emailWithContent

try {
    $result = $apiInstance->createEmailUsingPOST1($create_email_sent_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->createEmailUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_email_sent_request** | [**\Com\Keap\Sdk\Core\Model\CreateEmailSentRequest**](../Model/CreateEmailSentRequest.md)| emailWithContent | |

### Return type

[**\Com\Keap\Sdk\Core\Model\EmailSentWithContent**](../Model/EmailSentWithContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createEmailsUsingPOST1()`

```php
createEmailsUsingPOST1($create_emails_sent_request): \Com\Keap\Sdk\Core\Model\EmailsSentList
```

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_emails_sent_request = new \Com\Keap\Sdk\Core\Model\CreateEmailsSentRequest(); // \Com\Keap\Sdk\Core\Model\CreateEmailsSentRequest | Email records to persist, with content.

try {
    $result = $apiInstance->createEmailsUsingPOST1($create_emails_sent_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->createEmailsUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_emails_sent_request** | [**\Com\Keap\Sdk\Core\Model\CreateEmailsSentRequest**](../Model/CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\EmailsSentList**](../Model/EmailsSentList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteEmailUsingDELETE1()`

```php
deleteEmailUsingDELETE1($id)
```

Delete an Email Record

Deletes a specific Email Record

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id

try {
    $apiInstance->deleteEmailUsingDELETE1($id);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->deleteEmailUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |

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

## `deleteEmailsUsingPOST1()`

```php
deleteEmailsUsingPOST1($delete_emails_request): \Com\Keap\Sdk\Core\Model\DeleteEmailsResponse
```

Remove a set of Email Records

Removes a set of Email Records

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$delete_emails_request = new \Com\Keap\Sdk\Core\Model\DeleteEmailsRequest(); // \Com\Keap\Sdk\Core\Model\DeleteEmailsRequest | deleteEmailsRequest

try {
    $result = $apiInstance->deleteEmailsUsingPOST1($delete_emails_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->deleteEmailsUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_emails_request** | [**\Com\Keap\Sdk\Core\Model\DeleteEmailsRequest**](../Model/DeleteEmailsRequest.md)| deleteEmailsRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\DeleteEmailsResponse**](../Model/DeleteEmailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getEmailUsingGET1()`

```php
getEmailUsingGET1($id): \Com\Keap\Sdk\Core\Model\EmailSentWithContent
```

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id

try {
    $result = $apiInstance->getEmailUsingGET1($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->getEmailUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\EmailSentWithContent**](../Model/EmailSentWithContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendEmailUsingPOST1()`

```php
sendEmailUsingPOST1($email_send_request)
```

Send an Email

Sends an Email to a list of Contacts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\EmailApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$email_send_request = new \Com\Keap\Sdk\Core\Model\EmailSendRequest(); // \Com\Keap\Sdk\Core\Model\EmailSendRequest | emailSendRequest

try {
    $apiInstance->sendEmailUsingPOST1($email_send_request);
} catch (Exception $e) {
    echo 'Exception when calling EmailApi->sendEmailUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email_send_request** | [**\Com\Keap\Sdk\Core\Model\EmailSendRequest**](../Model/EmailSendRequest.md)| emailSendRequest | [optional] |

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
