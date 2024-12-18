# Com\Keap\Sdk\Core\LeadScoreApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getLeadScoreDetailsUsingGET()**](LeadScoreApi.md#getLeadScoreDetailsUsingGET) | **GET** /v2/contact/{contact_id}/leadScore | Retrieve Lead Score of a Contact |


## `getLeadScoreDetailsUsingGET()`

```php
getLeadScoreDetailsUsingGET($contact_id): \Com\Keap\Sdk\Core\Model\LeadScore
```

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LeadScoreApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string | contact_id

try {
    $result = $apiInstance->getLeadScoreDetailsUsingGET($contact_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LeadScoreApi->getLeadScoreDetailsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**| contact_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\LeadScore**](../Model/LeadScore.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
