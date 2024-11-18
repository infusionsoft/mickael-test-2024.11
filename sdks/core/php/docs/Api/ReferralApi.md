# Com\Keap\Sdk\Core\ReferralApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createReferralUsingPOST_0()**](ReferralApi.md#createReferralUsingPOST_0) | **POST** /v2/referrals | Create a Referral |


## `createReferralUsingPOST_0()`

```php
createReferralUsingPOST_0($request): \Com\Keap\Sdk\Core\Model\Referral
```

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\ReferralApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request = new \Com\Keap\Sdk\Core\Model\CreateReferralRequest(); // \Com\Keap\Sdk\Core\Model\CreateReferralRequest | request

try {
    $result = $apiInstance->createReferralUsingPOST_0($request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReferralApi->createReferralUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request** | [**\Com\Keap\Sdk\Core\Model\CreateReferralRequest**](../Model/CreateReferralRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Referral**](../Model/Referral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
