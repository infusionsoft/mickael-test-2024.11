# Com\Keap\Sdk\Core\BusinessProfileApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getBusinessProfileUsingGET()**](BusinessProfileApi.md#getBusinessProfileUsingGET) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**patchBusinessProfileUsingPATCH()**](BusinessProfileApi.md#patchBusinessProfileUsingPATCH) | **PATCH** /v2/businessProfile | Update Business Profile |


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

## `patchBusinessProfileUsingPATCH()`

```php
patchBusinessProfileUsingPATCH($update_mask, $patch_business_profile_request): \Com\Keap\Sdk\Core\Model\GetBusinessProfileResponse
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
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
$patch_business_profile_request = new \Com\Keap\Sdk\Core\Model\PatchBusinessProfileRequest(); // \Com\Keap\Sdk\Core\Model\PatchBusinessProfileRequest | businessProfile

try {
    $result = $apiInstance->patchBusinessProfileUsingPATCH($update_mask, $patch_business_profile_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BusinessProfileApi->patchBusinessProfileUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. | [optional] |
| **patch_business_profile_request** | [**\Com\Keap\Sdk\Core\Model\PatchBusinessProfileRequest**](../Model/PatchBusinessProfileRequest.md)| businessProfile | [optional] |

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
