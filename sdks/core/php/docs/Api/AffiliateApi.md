# Com\Keap\Sdk\Core\AffiliateApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addAffiliateToProgramUsingPOST_0()**](AffiliateApi.md#addAffiliateToProgramUsingPOST_0) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateUsingPOST()**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate |
| [**addCommissionProgramUsingPOST_0()**](AffiliateApi.md#addCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgramUsingPOST_0()**](AffiliateApi.md#assignProductCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOST_0()**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**createAffiliateCustomFieldUsingPOST_0()**](AffiliateApi.md#createAffiliateCustomFieldUsingPOST_0) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createDefaultCommissionProgramUsingPOST_0()**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createRedirectLinkUsingPOST_0()**](AffiliateApi.md#createRedirectLinkUsingPOST_0) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**deleteAffiliateCommissionProgramUsingDELETE_0()**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE_0) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateUsingDELETE_0()**](AffiliateApi.md#deleteAffiliateUsingDELETE_0) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteRedirectLinkUsingDELETE_0()**](AffiliateApi.md#deleteRedirectLinkUsingDELETE_0) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**getAffiliateCommissionTotalUsingGET_0()**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET_0) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionsUsingGET_0()**](AffiliateApi.md#getAffiliateCommissionsUsingGET_0) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCustomFieldsUsingGET_0()**](AffiliateApi.md#getAffiliateCustomFieldsUsingGET_0) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**getAffiliateUsingGET1()**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getCommissionProgramUsingGET_0()**](AffiliateApi.md#getCommissionProgramUsingGET_0) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getRedirectLinkUsingGET_0()**](AffiliateApi.md#getRedirectLinkUsingGET_0) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**listAffiliateCommissionProgramsUsingGET_0()**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET_0) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinksUsingGET_0()**](AffiliateApi.md#listAffiliateLinksUsingGET_0) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listSummariesUsingGET1_0()**](AffiliateApi.md#listSummariesUsingGET1_0) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**patchCommissionProgramUsingPATCH()**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**patchDefaultCommissionProgramUsingPATCH_0()**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**patchProductCommissionProgramUsingPATCH_0()**](AffiliateApi.md#patchProductCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**patchSubscriptionCommissionProgramUsingPATCH_0()**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**removeAffiliateFromProgramUsingPOST_0()**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST_0) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0()**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**updateAffiliateCustomFieldUsingPATCH_0()**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCH_0) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateAffiliateUsingPATCH()**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateRedirectLinkUsingPATCH_0()**](AffiliateApi.md#updateRedirectLinkUsingPATCH_0) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |


## `addAffiliateToProgramUsingPOST_0()`

```php
addAffiliateToProgramUsingPOST_0($id, $affiliate_add_to_program_request)
```

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

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
$affiliate_add_to_program_request = new \Com\Keap\Sdk\Core\Model\AffiliateAddToProgramRequest(); // \Com\Keap\Sdk\Core\Model\AffiliateAddToProgramRequest | affiliateAddToProgramRequest

try {
    $apiInstance->addAffiliateToProgramUsingPOST_0($id, $affiliate_add_to_program_request);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->addAffiliateToProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |
| **affiliate_add_to_program_request** | [**\Com\Keap\Sdk\Core\Model\AffiliateAddToProgramRequest**](../Model/AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | |

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

## `addAffiliateUsingPOST()`

```php
addAffiliateUsingPOST($insert_affiliate): \Com\Keap\Sdk\Core\Model\RestAffiliate
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
$insert_affiliate = new \Com\Keap\Sdk\Core\Model\CreateAffiliateRequest(); // \Com\Keap\Sdk\Core\Model\CreateAffiliateRequest | Affiliate request to insert

try {
    $result = $apiInstance->addAffiliateUsingPOST($insert_affiliate);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->addAffiliateUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **insert_affiliate** | [**\Com\Keap\Sdk\Core\Model\CreateAffiliateRequest**](../Model/CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

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

## `addCommissionProgramUsingPOST_0()`

```php
addCommissionProgramUsingPOST_0($insert_commission_program): \Com\Keap\Sdk\Core\Model\AffiliateCommissionProgramResponse
```

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$insert_commission_program = new \Com\Keap\Sdk\Core\Model\CreateCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateCommissionProgramRequest | Commission Program to insert

try {
    $result = $apiInstance->addCommissionProgramUsingPOST_0($insert_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->addCommissionProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **insert_commission_program** | [**\Com\Keap\Sdk\Core\Model\CreateCommissionProgramRequest**](../Model/CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] |

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

## `assignProductCommissionProgramUsingPOST_0()`

```php
assignProductCommissionProgramUsingPOST_0($commission_program_id, $product_commission_program): \Com\Keap\Sdk\Core\Model\ProductCommissionProgram
```

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

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
$product_commission_program = new \Com\Keap\Sdk\Core\Model\CreateProductCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateProductCommissionProgramRequest | Product Commission Program

try {
    $result = $apiInstance->assignProductCommissionProgramUsingPOST_0($commission_program_id, $product_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->assignProductCommissionProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **product_commission_program** | [**\Com\Keap\Sdk\Core\Model\CreateProductCommissionProgramRequest**](../Model/CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ProductCommissionProgram**](../Model/ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `assignSubscriptionCommissionProgramUsingPOST_0()`

```php
assignSubscriptionCommissionProgramUsingPOST_0($commission_program_id, $subscription_commission_program): \Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram
```

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

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
$subscription_commission_program = new \Com\Keap\Sdk\Core\Model\CreateSubscriptionCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateSubscriptionCommissionProgramRequest | Subscription Commission Program

try {
    $result = $apiInstance->assignSubscriptionCommissionProgramUsingPOST_0($commission_program_id, $subscription_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->assignSubscriptionCommissionProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **subscription_commission_program** | [**\Com\Keap\Sdk\Core\Model\CreateSubscriptionCommissionProgramRequest**](../Model/CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram**](../Model/SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createAffiliateCustomFieldUsingPOST_0()`

```php
createAffiliateCustomFieldUsingPOST_0($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createAffiliateCustomFieldUsingPOST_0($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->createAffiliateCustomFieldUsingPOST_0: ', $e->getMessage(), PHP_EOL;
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

## `createDefaultCommissionProgramUsingPOST_0()`

```php
createDefaultCommissionProgramUsingPOST_0($commission_program_id, $create_default_commission_program_request): \Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse
```

Create a Default Commission Program

Creates a Default Commission Program

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
$create_default_commission_program_request = new \Com\Keap\Sdk\Core\Model\CreateDefaultCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateDefaultCommissionProgramRequest | Values of the Default Commission Program

try {
    $result = $apiInstance->createDefaultCommissionProgramUsingPOST_0($commission_program_id, $create_default_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->createDefaultCommissionProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **create_default_commission_program_request** | [**\Com\Keap\Sdk\Core\Model\CreateDefaultCommissionProgramRequest**](../Model/CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse**](../Model/SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createRedirectLinkUsingPOST_0()`

```php
createRedirectLinkUsingPOST_0($request): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request = new \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest(); // \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest | request

try {
    $result = $apiInstance->createRedirectLinkUsingPOST_0($request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->createRedirectLinkUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request** | [**\Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest**](../Model/CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateLink**](../Model/AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteAffiliateCommissionProgramUsingDELETE_0()`

```php
deleteAffiliateCommissionProgramUsingDELETE_0($commission_program_id)
```

Delete a Commission Program

Deletes a Commission Program

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

try {
    $apiInstance->deleteAffiliateCommissionProgramUsingDELETE_0($commission_program_id);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->deleteAffiliateCommissionProgramUsingDELETE_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |

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

## `deleteAffiliateUsingDELETE_0()`

```php
deleteAffiliateUsingDELETE_0($id)
```

Delete Affiliate

Deletes the specified Affiliate

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
    $apiInstance->deleteAffiliateUsingDELETE_0($id);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->deleteAffiliateUsingDELETE_0: ', $e->getMessage(), PHP_EOL;
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

## `deleteRedirectLinkUsingDELETE_0()`

```php
deleteRedirectLinkUsingDELETE_0($redirect_id)
```

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id

try {
    $apiInstance->deleteRedirectLinkUsingDELETE_0($redirect_id);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->deleteRedirectLinkUsingDELETE_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **redirect_id** | **string**| redirect_id | |

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

## `getAffiliateCommissionTotalUsingGET_0()`

```php
getAffiliateCommissionTotalUsingGET_0($affiliate_id): \Com\Keap\Sdk\Core\Model\AffiliateCommissionEarned
```

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$affiliate_id = 'affiliate_id_example'; // string | affiliate_id

try {
    $result = $apiInstance->getAffiliateCommissionTotalUsingGET_0($affiliate_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getAffiliateCommissionTotalUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **affiliate_id** | **string**| affiliate_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateCommissionEarned**](../Model/AffiliateCommissionEarned.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAffiliateCommissionsUsingGET_0()`

```php
getAffiliateCommissionsUsingGET_0($affiliate_id, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateCommissionResponse
```

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$affiliate_id = 'affiliate_id_example'; // string | affiliate_id
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->getAffiliateCommissionsUsingGET_0($affiliate_id, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getAffiliateCommissionsUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **affiliate_id** | **string**| affiliate_id | |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListAffiliateCommissionResponse**](../Model/ListAffiliateCommissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAffiliateCustomFieldsUsingGET_0()`

```php
getAffiliateCustomFieldsUsingGET_0(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getAffiliateCustomFieldsUsingGET_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getAffiliateCustomFieldsUsingGET_0: ', $e->getMessage(), PHP_EOL;
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

## `getCommissionProgramUsingGET_0()`

```php
getCommissionProgramUsingGET_0($commission_program_id): \Com\Keap\Sdk\Core\Model\AffiliateProgramV2
```

Retrieve a Commission Program

Retrieves a single Commission Program

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

try {
    $result = $apiInstance->getCommissionProgramUsingGET_0($commission_program_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getCommissionProgramUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateProgramV2**](../Model/AffiliateProgramV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRedirectLinkUsingGET_0()`

```php
getRedirectLinkUsingGET_0($redirect_id): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id

try {
    $result = $apiInstance->getRedirectLinkUsingGET_0($redirect_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->getRedirectLinkUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **redirect_id** | **string**| redirect_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateLink**](../Model/AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAffiliateCommissionProgramsUsingGET_0()`

```php
listAffiliateCommissionProgramsUsingGET_0($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateCommissionProgramsResponse
```

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listAffiliateCommissionProgramsUsingGET_0($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->listAffiliateCommissionProgramsUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListAffiliateCommissionProgramsResponse**](../Model/ListAffiliateCommissionProgramsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAffiliateLinksUsingGET_0()`

```php
listAffiliateLinksUsingGET_0($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateLinksResponse
```

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listAffiliateLinksUsingGET_0($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->listAffiliateLinksUsingGET_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListAffiliateLinksResponse**](../Model/ListAffiliateLinksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSummariesUsingGET1_0()`

```php
listSummariesUsingGET1_0($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateSummariesResponse
```

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listSummariesUsingGET1_0($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->listSummariesUsingGET1_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListAffiliateSummariesResponse**](../Model/ListAffiliateSummariesResponse.md)

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

## `patchDefaultCommissionProgramUsingPATCH_0()`

```php
patchDefaultCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_default_commission_program_request): \Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse
```

Update a Default Commission Program

Updates a Default Commission Program

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
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_default_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchDefaultCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchDefaultCommissionProgramRequest | Values of the default Commission Program

try {
    $result = $apiInstance->patchDefaultCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_default_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->patchDefaultCommissionProgramUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **update_mask** | [**string[]**](../Model/string.md)| update_mask | [optional] |
| **patch_default_commission_program_request** | [**\Com\Keap\Sdk\Core\Model\PatchDefaultCommissionProgramRequest**](../Model/PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse**](../Model/SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchProductCommissionProgramUsingPATCH_0()`

```php
patchProductCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_product_commission_program_request): \Com\Keap\Sdk\Core\Model\ProductCommissionProgram
```

Update a Product Commission Program

Updates a Product Commission Program

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
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_product_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchProductCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchProductCommissionProgramRequest | Values of the product Commission Program

try {
    $result = $apiInstance->patchProductCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_product_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->patchProductCommissionProgramUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **update_mask** | [**string[]**](../Model/string.md)| update_mask | [optional] |
| **patch_product_commission_program_request** | [**\Com\Keap\Sdk\Core\Model\PatchProductCommissionProgramRequest**](../Model/PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ProductCommissionProgram**](../Model/ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchSubscriptionCommissionProgramUsingPATCH_0()`

```php
patchSubscriptionCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_subscription_commission_program_request): \Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram
```

Update a Subscription Commission Program

Updates a Subscription Commission Program

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
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_subscription_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchSubscriptionCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program

try {
    $result = $apiInstance->patchSubscriptionCommissionProgramUsingPATCH_0($commission_program_id, $update_mask, $patch_subscription_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->patchSubscriptionCommissionProgramUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_program_id** | **string**| commission_program_id | |
| **update_mask** | [**string[]**](../Model/string.md)| update_mask | [optional] |
| **patch_subscription_commission_program_request** | [**\Com\Keap\Sdk\Core\Model\PatchSubscriptionCommissionProgramRequest**](../Model/PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram**](../Model/SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeAffiliateFromProgramUsingPOST_0()`

```php
removeAffiliateFromProgramUsingPOST_0($id, $remove_from_program_request)
```

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

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
$remove_from_program_request = new \Com\Keap\Sdk\Core\Model\AffiliateRemoveFromProgramRequest(); // \Com\Keap\Sdk\Core\Model\AffiliateRemoveFromProgramRequest | removeFromProgramRequest

try {
    $apiInstance->removeAffiliateFromProgramUsingPOST_0($id, $remove_from_program_request);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->removeAffiliateFromProgramUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |
| **remove_from_program_request** | [**\Com\Keap\Sdk\Core\Model\AffiliateRemoveFromProgramRequest**](../Model/AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | |

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

## `removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0()`

```php
removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0($commission_id, $delete_subscription_plan_commission_request)
```

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_id = 'commission_id_example'; // string | commission_id
$delete_subscription_plan_commission_request = new \Com\Keap\Sdk\Core\Model\DeleteSubscriptionPlanCommissionRequest(); // \Com\Keap\Sdk\Core\Model\DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

try {
    $apiInstance->removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0($commission_id, $delete_subscription_plan_commission_request);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **commission_id** | **string**| commission_id | |
| **delete_subscription_plan_commission_request** | [**\Com\Keap\Sdk\Core\Model\DeleteSubscriptionPlanCommissionRequest**](../Model/DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | |

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

## `updateAffiliateCustomFieldUsingPATCH_0()`

```php
updateAffiliateCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateAffiliateCustomFieldUsingPATCH_0($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->updateAffiliateCustomFieldUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
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

## `updateAffiliateUsingPATCH()`

```php
updateAffiliateUsingPATCH($id, $patch_affiliate): \Com\Keap\Sdk\Core\Model\RestAffiliate
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
$patch_affiliate = new \Com\Keap\Sdk\Core\Model\PatchAffiliateRequest(); // \Com\Keap\Sdk\Core\Model\PatchAffiliateRequest | Affiliate request to patch

try {
    $result = $apiInstance->updateAffiliateUsingPATCH($id, $patch_affiliate);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->updateAffiliateUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| id | |
| **patch_affiliate** | [**\Com\Keap\Sdk\Core\Model\PatchAffiliateRequest**](../Model/PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

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

## `updateRedirectLinkUsingPATCH_0()`

```php
updateRedirectLinkUsingPATCH_0($redirect_id, $request): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Update an Affiliate Link

Updates an Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id
$request = new \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest(); // \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest | request

try {
    $result = $apiInstance->updateRedirectLinkUsingPATCH_0($redirect_id, $request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->updateRedirectLinkUsingPATCH_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **redirect_id** | **string**| redirect_id | |
| **request** | [**\Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest**](../Model/CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

[**\Com\Keap\Sdk\Core\Model\AffiliateLink**](../Model/AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
