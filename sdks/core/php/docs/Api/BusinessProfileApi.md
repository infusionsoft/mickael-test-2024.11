# Com\Keap\Sdk\Core\BusinessProfileApi

All URIs are relative to https://api.keap.com/crm/rest, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getBusinessProfileUsingGET()**](BusinessProfileApi.md#getBusinessProfileUsingGET) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**updateBusinessProfileUsingPATCH()**](BusinessProfileApi.md#updateBusinessProfileUsingPATCH) | **PATCH** /v2/businessProfile | Update Business Profile |


## `getBusinessProfileUsingGET()`

```php
getBusinessProfileUsingGET(): \Com\Keap\Sdk\Core\Model\GetBusinessProfileResponse
```

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\BusinessProfileApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getBusinessProfileUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BusinessProfileApi->getBusinessProfileUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\GetBusinessProfileResponse**](../Model/GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateBusinessProfileUsingPATCH()`

```php
updateBusinessProfileUsingPATCH($update_mask, $update_business_profile_request): \Com\Keap\Sdk\Core\Model\GetBusinessProfileResponse
```

Update Business Profile

Updates Business Profile information.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\BusinessProfileApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
$update_business_profile_request = new \Com\Keap\Sdk\Core\Model\UpdateBusinessProfileRequest(); // \Com\Keap\Sdk\Core\Model\UpdateBusinessProfileRequest | businessProfile

try {
    $result = $apiInstance->updateBusinessProfileUsingPATCH($update_mask, $update_business_profile_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BusinessProfileApi->updateBusinessProfileUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **update_business_profile_request** | [**\Com\Keap\Sdk\Core\Model\UpdateBusinessProfileRequest**](../Model/UpdateBusinessProfileRequest.md)| businessProfile | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\GetBusinessProfileResponse**](../Model/GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
