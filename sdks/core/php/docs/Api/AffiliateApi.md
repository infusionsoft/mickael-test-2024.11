# Com\Keap\Sdk\Core\AffiliateApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addAffiliateUsingPOST()**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate |
| [**getAffiliateUsingGET1()**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**patchCommissionProgramUsingPATCH()**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**updateAffiliateUsingPATCH()**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |


## `addAffiliateUsingPOST()`

```php
addAffiliateUsingPOST($create_affiliate_request): \Com\Keap\Sdk\Core\Model\RestAffiliate
```

Create an Affiliate

Creates a single Affiliate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_affiliate_request = new \Com\Keap\Sdk\Core\Model\CreateAffiliateRequest(); // \Com\Keap\Sdk\Core\Model\CreateAffiliateRequest | Affiliate request to insert

try {
    $result = $apiInstance->addAffiliateUsingPOST($create_affiliate_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->addAffiliateUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_affiliate_request** | [**\Com\Keap\Sdk\Core\Model\CreateAffiliateRequest**](../Model/CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestAffiliate**](../Model/RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAffiliateUsingGET1()`

```php
getAffiliateUsingGET1($id): \Com\Keap\Sdk\Core\Model\RestAffiliate
```

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id

try {
    $result = $apiInstance->getAffiliateUsingGET1($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getAffiliateUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestAffiliate**](../Model/RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchCommissionProgramUsingPATCH()`

```php
patchCommissionProgramUsingPATCH($commission_program_id, $patch_commission_program_request, $update_mask): \Com\Keap\Sdk\Core\Model\AffiliateCommissionProgramResponse
```

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$patch_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchCommissionProgramRequest | patchCommissionProgramRequest
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->patchCommissionProgramUsingPATCH($commission_program_id, $patch_commission_program_request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->patchCommissionProgramUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **patch_commission_program_request** | [**\Com\Keap\Sdk\Core\Model\PatchCommissionProgramRequest**](../Model/PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateCommissionProgramResponse**](../Model/AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateAffiliateUsingPATCH()`

```php
updateAffiliateUsingPATCH($id, $patch_affiliate_request): \Com\Keap\Sdk\Core\Model\RestAffiliate
```

Update an Affiliate

Updates a single Affiliate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id
$patch_affiliate_request = new \Com\Keap\Sdk\Core\Model\PatchAffiliateRequest(); // \Com\Keap\Sdk\Core\Model\PatchAffiliateRequest | Affiliate request to patch

try {
    $result = $apiInstance->updateAffiliateUsingPATCH($id, $patch_affiliate_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->updateAffiliateUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |
| **patch_affiliate_request** | [**\Com\Keap\Sdk\Core\Model\PatchAffiliateRequest**](../Model/PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestAffiliate**](../Model/RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
