# Com\Keap\Sdk\Core\PreReleaseApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addAffiliateToProgramUsingPOST()**](PreReleaseApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addCommissionProgramUsingPOST()**](PreReleaseApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgramUsingPOST()**](PreReleaseApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOST()**](PreReleaseApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**cancelSubscriptionUsingPOST()**](PreReleaseApi.md#cancelSubscriptionUsingPOST) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**createAffiliateCustomFieldUsingPOST()**](PreReleaseApi.md#createAffiliateCustomFieldUsingPOST) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createDefaultCommissionProgramUsingPOST()**](PreReleaseApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createFunnelIntegrationUsingPOST()**](PreReleaseApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**createIntegrationTriggerEventUsingPOST()**](PreReleaseApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**createLeadSourceUsingPOST()**](PreReleaseApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadsources | Create a Lead Source |
| [**createNoteCustomFieldUsingPOST1()**](PreReleaseApi.md#createNoteCustomFieldUsingPOST1) | **POST** /v2/notes/model/customFields | Create a Custom Field |
| [**createOpportunityCustomFieldsUsingPOST()**](PreReleaseApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityStageUsingPOST()**](PreReleaseApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityUsingPOST1()**](PreReleaseApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity |
| [**createOrderCustomFieldUsingPOST()**](PreReleaseApi.md#createOrderCustomFieldUsingPOST) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field |
| [**createOrderItemsOnOrderUsingPOST1()**](PreReleaseApi.md#createOrderItemsOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/items | Create an Order Item |
| [**createOrderUsingPOST1()**](PreReleaseApi.md#createOrderUsingPOST1) | **POST** /v2/orders | Create an Order |
| [**createRedirectLinkUsingPOST()**](PreReleaseApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**createReferralUsingPOST()**](PreReleaseApi.md#createReferralUsingPOST) | **POST** /v2/referrals | Create a Referral |
| [**createSubscriptionCustomFieldUsingPOST()**](PreReleaseApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**createTaskCustomFieldUsingPOST1()**](PreReleaseApi.md#createTaskCustomFieldUsingPOST1) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**createTaskUsingPOST1()**](PreReleaseApi.md#createTaskUsingPOST1) | **POST** /v2/tasks | Create a Task |
| [**createUserUsingPOST1()**](PreReleaseApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User |
| [**deleteAffiliateCommissionProgramUsingDELETE()**](PreReleaseApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateUsingDELETE()**](PreReleaseApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteFunnelIntegrationUsingPOST()**](PreReleaseApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |
| [**deleteOpportunityStageUsingDELETE()**](PreReleaseApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityUsingDELETE()**](PreReleaseApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOrderUsingDELETE1()**](PreReleaseApi.md#deleteOrderUsingDELETE1) | **DELETE** /v2/orders/{order_id} | Delete an Order |
| [**deleteRedirectLinkUsingDELETE()**](PreReleaseApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**deleteTaskCustomFieldUsingDELETE()**](PreReleaseApi.md#deleteTaskCustomFieldUsingDELETE) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**deleteTaskUsingDELETE1()**](PreReleaseApi.md#deleteTaskUsingDELETE1) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**getAffiliateCommissionTotalUsingGET()**](PreReleaseApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionsUsingGET()**](PreReleaseApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCustomFieldsUsingGET()**](PreReleaseApi.md#getAffiliateCustomFieldsUsingGET) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**getCategoryDiscountUsingGET()**](PreReleaseApi.md#getCategoryDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount |
| [**getCommissionProgramUsingGET()**](PreReleaseApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getContactsBySearchTermUsingGET()**](PreReleaseApi.md#getContactsBySearchTermUsingGET) | **GET** /v2/contacts:search | Search for Contacts |
| [**getOpportunityStageUsingGET()**](PreReleaseApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityUsingGET1()**](PreReleaseApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOrderUsingGET1()**](PreReleaseApi.md#getOrderUsingGET1) | **GET** /v2/orders/{order_id} | Retrieve an Order |
| [**getRedirectLinkUsingGET()**](PreReleaseApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getTaskUsingGET1()**](PreReleaseApi.md#getTaskUsingGET1) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**getUserByIdUsingGET()**](PreReleaseApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User |
| [**getUserInfoUsingGET1()**](PreReleaseApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserSignatureUsingGET1()**](PreReleaseApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**listAffiliateCommissionProgramsUsingGET()**](PreReleaseApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinksUsingGET()**](PreReleaseApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listCountriesUsingGET2()**](PreReleaseApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries |
| [**listLandingPagesUsingGET()**](PreReleaseApi.md#listLandingPagesUsingGET) | **GET** /v2/landingpages | List Landing Pages |
| [**listLeadSourcesUsingGET()**](PreReleaseApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadsources | List Lead Sources |
| [**listMerchantsUsingGET()**](PreReleaseApi.md#listMerchantsUsingGET) | **GET** /v2/merchants | List Merchant accounts |
| [**listOpportunitiesUsingGET1()**](PreReleaseApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunityStagesUsingGET()**](PreReleaseApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**listOrdersUsingGET1()**](PreReleaseApi.md#listOrdersUsingGET1) | **GET** /v2/orders | List orders |
| [**listProductsUsingGET1()**](PreReleaseApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products |
| [**listProvincesForCountryUsingGET()**](PreReleaseApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |
| [**listShippingMethodsUsingGET()**](PreReleaseApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods |
| [**listSubscriptionPlansUsingGET()**](PreReleaseApi.md#listSubscriptionPlansUsingGET) | **GET** /v2/subscriptionPlans | List Subscription Plans |
| [**listSummariesUsingGET1()**](PreReleaseApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**listTasksUsingGET1()**](PreReleaseApi.md#listTasksUsingGET1) | **GET** /v2/tasks | List Tasks |
| [**listUsersUsingGET1()**](PreReleaseApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users |
| [**patchDefaultCommissionProgramUsingPATCH()**](PreReleaseApi.md#patchDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**patchProductCommissionProgramUsingPATCH()**](PreReleaseApi.md#patchProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**patchSubscriptionCommissionProgramUsingPATCH()**](PreReleaseApi.md#patchSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**patchTaskUsingPATCH()**](PreReleaseApi.md#patchTaskUsingPATCH) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**patchUserUsingPATCH()**](PreReleaseApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User |
| [**removeAffiliateFromProgramUsingPOST()**](PreReleaseApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOST()**](PreReleaseApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**retrieveNoteModelUsingGET1()**](PreReleaseApi.md#retrieveNoteModelUsingGET1) | **GET** /v2/notes/model | Retrieve Note Model |
| [**retrieveOrderCustomFieldModelUsingGET()**](PreReleaseApi.md#retrieveOrderCustomFieldModelUsingGET) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model |
| [**retrieveSubscriptionCustomFieldModelUsingGET()**](PreReleaseApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**retrieveTaskModelUsingGET1()**](PreReleaseApi.md#retrieveTaskModelUsingGET1) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**updateAffiliateCustomFieldUsingPATCH()**](PreReleaseApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateNotesCustomFieldUsingPATCH()**](PreReleaseApi.md#updateNotesCustomFieldUsingPATCH) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateOpportunityCustomFieldUsingPATCH()**](PreReleaseApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityUsingPATCH()**](PreReleaseApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOrderCustomFieldUsingPATCH()**](PreReleaseApi.md#updateOrderCustomFieldUsingPATCH) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field |
| [**updateRedirectLinkUsingPATCH()**](PreReleaseApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateSubscriptionCustomFieldUsingPATCH()**](PreReleaseApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |
| [**updateTaskCustomFieldUsingPATCH()**](PreReleaseApi.md#updateTaskCustomFieldUsingPATCH) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |


## `addAffiliateToProgramUsingPOST()`

```php
addAffiliateToProgramUsingPOST($id, $affiliate_add_to_program_request)
```

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id
$affiliate_add_to_program_request = new \Com\Keap\Sdk\Core\Model\AffiliateAddToProgramRequest(); // \Com\Keap\Sdk\Core\Model\AffiliateAddToProgramRequest | affiliateAddToProgramRequest

try {
    $apiInstance->addAffiliateToProgramUsingPOST($id, $affiliate_add_to_program_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->addAffiliateToProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `addCommissionProgramUsingPOST()`

```php
addCommissionProgramUsingPOST($insert_commission_program): \Com\Keap\Sdk\Core\Model\AffiliateCommissionProgramResponse
```

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$insert_commission_program = new \Com\Keap\Sdk\Core\Model\CreateCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateCommissionProgramRequest | Commission Program to insert

try {
    $result = $apiInstance->addCommissionProgramUsingPOST($insert_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->addCommissionProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `assignProductCommissionProgramUsingPOST()`

```php
assignProductCommissionProgramUsingPOST($commission_program_id, $product_commission_program): \Com\Keap\Sdk\Core\Model\ProductCommissionProgram
```

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$product_commission_program = new \Com\Keap\Sdk\Core\Model\CreateProductCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateProductCommissionProgramRequest | Product Commission Program

try {
    $result = $apiInstance->assignProductCommissionProgramUsingPOST($commission_program_id, $product_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->assignProductCommissionProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `assignSubscriptionCommissionProgramUsingPOST()`

```php
assignSubscriptionCommissionProgramUsingPOST($commission_program_id, $subscription_commission_program): \Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram
```

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$subscription_commission_program = new \Com\Keap\Sdk\Core\Model\CreateSubscriptionCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateSubscriptionCommissionProgramRequest | Subscription Commission Program

try {
    $result = $apiInstance->assignSubscriptionCommissionProgramUsingPOST($commission_program_id, $subscription_commission_program);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->assignSubscriptionCommissionProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `cancelSubscriptionUsingPOST()`

```php
cancelSubscriptionUsingPOST($subscription_id, $cancel_subscriptions_request)
```

Cancel Subscription

Cancels the specified subscription

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$subscription_id = 'subscription_id_example'; // string | subscription_id
$cancel_subscriptions_request = new \Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest(); // \Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest | cancelSubscriptionsRequest

try {
    $apiInstance->cancelSubscriptionUsingPOST($subscription_id, $cancel_subscriptions_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->cancelSubscriptionUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **subscription_id** | **string**| subscription_id | |
| **cancel_subscriptions_request** | [**\Com\Keap\Sdk\Core\Model\CancelSubscriptionsRequest**](../Model/CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | |

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

## `createAffiliateCustomFieldUsingPOST()`

```php
createAffiliateCustomFieldUsingPOST($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createAffiliateCustomFieldUsingPOST($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createAffiliateCustomFieldUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createDefaultCommissionProgramUsingPOST()`

```php
createDefaultCommissionProgramUsingPOST($commission_program_id, $create_default_commission_program_request): \Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse
```

Create a Default Commission Program

Creates a Default Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$create_default_commission_program_request = new \Com\Keap\Sdk\Core\Model\CreateDefaultCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\CreateDefaultCommissionProgramRequest | Values of the Default Commission Program

try {
    $result = $apiInstance->createDefaultCommissionProgramUsingPOST($commission_program_id, $create_default_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createDefaultCommissionProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createFunnelIntegrationUsingPOST()`

```php
createFunnelIntegrationUsingPOST($create_funnel_integration_request)
```

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_funnel_integration_request = new \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest(); // \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

try {
    $apiInstance->createFunnelIntegrationUsingPOST($create_funnel_integration_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createFunnelIntegrationUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_funnel_integration_request** | [**\Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest**](../Model/CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | |

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

## `createIntegrationTriggerEventUsingPOST()`

```php
createIntegrationTriggerEventUsingPOST($create_funnel_integration_trigger_events): \Com\Keap\Sdk\Core\Model\FunnelIntegrationTriggerResultDTO[]
```

Achieve Funnel Integration Trigger Goal

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_funnel_integration_trigger_events = new \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents(); // \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

try {
    $result = $apiInstance->createIntegrationTriggerEventUsingPOST($create_funnel_integration_trigger_events);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createIntegrationTriggerEventUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_funnel_integration_trigger_events** | [**\Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents**](../Model/CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | |

### Return type

[**\Com\Keap\Sdk\Core\Model\FunnelIntegrationTriggerResultDTO[]**](../Model/FunnelIntegrationTriggerResultDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createLeadSourceUsingPOST()`

```php
createLeadSourceUsingPOST($leadsource): \Com\Keap\Sdk\Core\Model\LeadSource
```

Create a Lead Source

Creates a new Lead Source

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$leadsource = new \Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest(); // \Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest | leadsource

try {
    $result = $apiInstance->createLeadSourceUsingPOST($leadsource);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createLeadSourceUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **leadsource** | [**\Com\Keap\Sdk\Core\Model\CreateLeadSourceRequest**](../Model/CreateLeadSourceRequest.md)| leadsource | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\LeadSource**](../Model/LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createNoteCustomFieldUsingPOST1()`

```php
createNoteCustomFieldUsingPOST1($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createNoteCustomFieldUsingPOST1($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createNoteCustomFieldUsingPOST1: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createOpportunityCustomFieldsUsingPOST($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOpportunityCustomFieldsUsingPOST: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_stage = new \Com\Keap\Sdk\Core\Model\CreateOpportunityStageRequest(); // \Com\Keap\Sdk\Core\Model\CreateOpportunityStageRequest | opportunity

try {
    $result = $apiInstance->createOpportunityStageUsingPOST($opportunity_stage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOpportunityStageUsingPOST: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity = new \Com\Keap\Sdk\Core\Model\CreateOpportunityRequest(); // \Com\Keap\Sdk\Core\Model\CreateOpportunityRequest | opportunity

try {
    $result = $apiInstance->createOpportunityUsingPOST1($opportunity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOpportunityUsingPOST1: ', $e->getMessage(), PHP_EOL;
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

## `createOrderCustomFieldUsingPOST()`

```php
createOrderCustomFieldUsingPOST($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create an Order's Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createOrderCustomFieldUsingPOST($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOrderCustomFieldUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createOrderItemsOnOrderUsingPOST1()`

```php
createOrderItemsOnOrderUsingPOST1($order_id, $create_rest_order_item_request): \Com\Keap\Sdk\Core\Model\RestV2OrderItem
```

Create an Order Item

Creates an order item on an existing order.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$order_id = 'order_id_example'; // string | order_id
$create_rest_order_item_request = new \Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest(); // \Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest | createRestOrderItemRequest

try {
    $result = $apiInstance->createOrderItemsOnOrderUsingPOST1($order_id, $create_rest_order_item_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOrderItemsOnOrderUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |
| **create_rest_order_item_request** | [**\Com\Keap\Sdk\Core\Model\CreateRestOrderItemRequest**](../Model/CreateRestOrderItemRequest.md)| createRestOrderItemRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2OrderItem**](../Model/RestV2OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createOrderUsingPOST1()`

```php
createOrderUsingPOST1($create_order_request): \Com\Keap\Sdk\Core\Model\RestV2Order
```

Create an Order

Create a one time Order with Order items.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_order_request = new \Com\Keap\Sdk\Core\Model\RestCreateOrderRequest(); // \Com\Keap\Sdk\Core\Model\RestCreateOrderRequest | createOrderRequest

try {
    $result = $apiInstance->createOrderUsingPOST1($create_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createOrderUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_order_request** | [**\Com\Keap\Sdk\Core\Model\RestCreateOrderRequest**](../Model/RestCreateOrderRequest.md)| createOrderRequest | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Order**](../Model/RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createRedirectLinkUsingPOST()`

```php
createRedirectLinkUsingPOST($request): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request = new \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest(); // \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest | request

try {
    $result = $apiInstance->createRedirectLinkUsingPOST($request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createRedirectLinkUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createReferralUsingPOST()`

```php
createReferralUsingPOST($request): \Com\Keap\Sdk\Core\Model\Referral
```

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$request = new \Com\Keap\Sdk\Core\Model\CreateReferralRequest(); // \Com\Keap\Sdk\Core\Model\CreateReferralRequest | request

try {
    $result = $apiInstance->createReferralUsingPOST($request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createReferralUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createSubscriptionCustomFieldUsingPOST()`

```php
createSubscriptionCustomFieldUsingPOST($custom_field): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Create a Subscription's Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createSubscriptionCustomFieldUsingPOST($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createSubscriptionCustomFieldUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `createTaskCustomFieldUsingPOST1()`

```php
createTaskCustomFieldUsingPOST1($custom_field): \Com\Keap\Sdk\Core\Model\CreateCustomFieldResponse
```

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field = new \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest(); // \Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest | customField

try {
    $result = $apiInstance->createTaskCustomFieldUsingPOST1($custom_field);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createTaskCustomFieldUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field** | [**\Com\Keap\Sdk\Core\Model\CreateCustomFieldRequest**](../Model/CreateCustomFieldRequest.md)| customField | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CreateCustomFieldResponse**](../Model/CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTaskUsingPOST1()`

```php
createTaskUsingPOST1($task): \Com\Keap\Sdk\Core\Model\Task
```

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task = new \Com\Keap\Sdk\Core\Model\CreateTaskRequest(); // \Com\Keap\Sdk\Core\Model\CreateTaskRequest | task

try {
    $result = $apiInstance->createTaskUsingPOST1($task);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createTaskUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task** | [**\Com\Keap\Sdk\Core\Model\CreateTaskRequest**](../Model/CreateTaskRequest.md)| task | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createUserUsingPOST1()`

```php
createUserUsingPOST1($user): \Com\Keap\Sdk\Core\Model\User
```

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user = new \Com\Keap\Sdk\Core\Model\CreateUserRequestV2(); // \Com\Keap\Sdk\Core\Model\CreateUserRequestV2 | user

try {
    $result = $apiInstance->createUserUsingPOST1($user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->createUserUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user** | [**\Com\Keap\Sdk\Core\Model\CreateUserRequestV2**](../Model/CreateUserRequestV2.md)| user | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteAffiliateCommissionProgramUsingDELETE()`

```php
deleteAffiliateCommissionProgramUsingDELETE($commission_program_id)
```

Delete a Commission Program

Deletes a Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id

try {
    $apiInstance->deleteAffiliateCommissionProgramUsingDELETE($commission_program_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteAffiliateCommissionProgramUsingDELETE: ', $e->getMessage(), PHP_EOL;
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

## `deleteAffiliateUsingDELETE()`

```php
deleteAffiliateUsingDELETE($id)
```

Delete Affiliate

Deletes the specified Affiliate

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id

try {
    $apiInstance->deleteAffiliateUsingDELETE($id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteAffiliateUsingDELETE: ', $e->getMessage(), PHP_EOL;
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

## `deleteFunnelIntegrationUsingPOST()`

```php
deleteFunnelIntegrationUsingPOST($delete_funnel_integration_request)
```

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$delete_funnel_integration_request = new \Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest(); // \Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

try {
    $apiInstance->deleteFunnelIntegrationUsingPOST($delete_funnel_integration_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteFunnelIntegrationUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_funnel_integration_request** | [**\Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest**](../Model/DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | |

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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$stage_id = 'stage_id_example'; // string | stage_id

try {
    $apiInstance->deleteOpportunityStageUsingDELETE($stage_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteOpportunityStageUsingDELETE: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_id = 'opportunity_id_example'; // string | opportunity_id

try {
    $apiInstance->deleteOpportunityUsingDELETE($opportunity_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteOpportunityUsingDELETE: ', $e->getMessage(), PHP_EOL;
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

## `deleteOrderUsingDELETE1()`

```php
deleteOrderUsingDELETE1($order_id)
```

Delete an Order

Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$order_id = 'order_id_example'; // string | order_id

try {
    $apiInstance->deleteOrderUsingDELETE1($order_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteOrderUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |

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

## `deleteRedirectLinkUsingDELETE()`

```php
deleteRedirectLinkUsingDELETE($redirect_id)
```

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id

try {
    $apiInstance->deleteRedirectLinkUsingDELETE($redirect_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteRedirectLinkUsingDELETE: ', $e->getMessage(), PHP_EOL;
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

## `deleteTaskCustomFieldUsingDELETE()`

```php
deleteTaskCustomFieldUsingDELETE($custom_field_id)
```

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id

try {
    $apiInstance->deleteTaskCustomFieldUsingDELETE($custom_field_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteTaskCustomFieldUsingDELETE: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **custom_field_id** | **string**| custom_field_id | |

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

## `deleteTaskUsingDELETE1()`

```php
deleteTaskUsingDELETE1($task_id)
```

Delete a Task

Deletes a single task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id

try {
    $apiInstance->deleteTaskUsingDELETE1($task_id);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->deleteTaskUsingDELETE1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |

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

## `getAffiliateCommissionTotalUsingGET()`

```php
getAffiliateCommissionTotalUsingGET($affiliate_id): \Com\Keap\Sdk\Core\Model\AffiliateCommissionEarned
```

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$affiliate_id = 'affiliate_id_example'; // string | affiliate_id

try {
    $result = $apiInstance->getAffiliateCommissionTotalUsingGET($affiliate_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getAffiliateCommissionTotalUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `getAffiliateCommissionsUsingGET()`

```php
getAffiliateCommissionsUsingGET($affiliate_id, $filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateCommissionResponse
```

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
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
    $result = $apiInstance->getAffiliateCommissionsUsingGET($affiliate_id, $filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getAffiliateCommissionsUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `getAffiliateCustomFieldsUsingGET()`

```php
getAffiliateCustomFieldsUsingGET(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getAffiliateCustomFieldsUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getAffiliateCustomFieldsUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `getCategoryDiscountUsingGET()`

```php
getCategoryDiscountUsingGET($discount_id): \Com\Keap\Sdk\Core\Model\CategoryDiscount
```

Retrieve Category Discount

Retrieves a single Category Discount

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$discount_id = 'discount_id_example'; // string | discount_id

try {
    $result = $apiInstance->getCategoryDiscountUsingGET($discount_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getCategoryDiscountUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_id** | **string**| discount_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\CategoryDiscount**](../Model/CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCommissionProgramUsingGET()`

```php
getCommissionProgramUsingGET($commission_program_id): \Com\Keap\Sdk\Core\Model\AffiliateProgramV2
```

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id

try {
    $result = $apiInstance->getCommissionProgramUsingGET($commission_program_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getCommissionProgramUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `getContactsBySearchTermUsingGET()`

```php
getContactsBySearchTermUsingGET($search_param): \Com\Keap\Sdk\Core\Model\ListBasicContactResponse
```

Search for Contacts

Get a list of Contacts based search parameters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$search_param = 'search_param_example'; // string | searchParam

try {
    $result = $apiInstance->getContactsBySearchTermUsingGET($search_param);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getContactsBySearchTermUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **search_param** | **string**| searchParam | |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListBasicContactResponse**](../Model/ListBasicContactResponse.md)

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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$stage_id = 'stage_id_example'; // string | stage_id

try {
    $result = $apiInstance->getOpportunityStageUsingGET($stage_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getOpportunityStageUsingGET: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$opportunity_id = 'opportunity_id_example'; // string | opportunity_id

try {
    $result = $apiInstance->getOpportunityUsingGET1($opportunity_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getOpportunityUsingGET1: ', $e->getMessage(), PHP_EOL;
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

## `getOrderUsingGET1()`

```php
getOrderUsingGET1($order_id): \Com\Keap\Sdk\Core\Model\RestV2Order
```

Retrieve an Order

Retrieves a single Order for a given order id

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$order_id = 'order_id_example'; // string | order_id

try {
    $result = $apiInstance->getOrderUsingGET1($order_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getOrderUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**| order_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\RestV2Order**](../Model/RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRedirectLinkUsingGET()`

```php
getRedirectLinkUsingGET($redirect_id): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id

try {
    $result = $apiInstance->getRedirectLinkUsingGET($redirect_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getRedirectLinkUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `getTaskUsingGET1()`

```php
getTaskUsingGET1($task_id): \Com\Keap\Sdk\Core\Model\Task
```

Retrieve a Task

Retrieves a single task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id

try {
    $result = $apiInstance->getTaskUsingGET1($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getTaskUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserByIdUsingGET()`

```php
getUserByIdUsingGET($user_id): \Com\Keap\Sdk\Core\Model\User
```

Get User

Retrieves a specific User

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id

try {
    $result = $apiInstance->getUserByIdUsingGET($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getUserByIdUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserInfoUsingGET1()`

```php
getUserInfoUsingGET1(): \Com\Keap\Sdk\Core\Model\GetUserInfoResponse
```

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getUserInfoUsingGET1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getUserInfoUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\GetUserInfoResponse**](../Model/GetUserInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserSignatureUsingGET1()`

```php
getUserSignatureUsingGET1($user_id): string
```

Get User email signature

Retrieves a HTML snippet that contains the user's email signature.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id

try {
    $result = $apiInstance->getUserSignatureUsingGET1($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->getUserSignatureUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |

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

## `listAffiliateCommissionProgramsUsingGET()`

```php
listAffiliateCommissionProgramsUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateCommissionProgramsResponse
```

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listAffiliateCommissionProgramsUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listAffiliateCommissionProgramsUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `listAffiliateLinksUsingGET()`

```php
listAffiliateLinksUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateLinksResponse
```

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listAffiliateLinksUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listAffiliateLinksUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `listCountriesUsingGET2()`

```php
listCountriesUsingGET2(): \Com\Keap\Sdk\Core\Model\ListCountriesResponse
```

List Countries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listCountriesUsingGET2();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listCountriesUsingGET2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ListCountriesResponse**](../Model/ListCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listLandingPagesUsingGET()`

```php
listLandingPagesUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListLandingPagesResponse
```

List Landing Pages

Retrieves a list of all landing pages

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listLandingPagesUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listLandingPagesUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListLandingPagesResponse**](../Model/ListLandingPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listLeadSourcesUsingGET()`

```php
listLeadSourcesUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListLeadSourcesResponse
```

List Lead Sources

Retrieves a list of lead sources

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listLeadSourcesUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listLeadSourcesUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListLeadSourcesResponse**](../Model/ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listMerchantsUsingGET()`

```php
listMerchantsUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListRestMerchantResponse
```

List Merchant accounts

Retrieves a list of Merchant accounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123;account_name=abc`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listMerchantsUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listMerchantsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListRestMerchantResponse**](../Model/ListRestMerchantResponse.md)

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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
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
    echo 'Exception when calling PreReleaseApi->listOpportunitiesUsingGET1: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
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
    echo 'Exception when calling PreReleaseApi->listOpportunityStagesUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `listOrdersUsingGET1()`

```php
listOrdersUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListOrders
```

List orders

Retrieves a list of orders

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listOrdersUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listOrdersUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60; | [optional] |
| **order_by** | **string**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListOrders**](../Model/ListOrders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listProductsUsingGET1()`

```php
listProductsUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListProductsResponse
```

List Products

Retrieves a list of Products

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listProductsUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listProductsUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListProductsResponse**](../Model/ListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listProvincesForCountryUsingGET()`

```php
listProvincesForCountryUsingGET($country_code): \Com\Keap\Sdk\Core\Model\ListProvincesResponse
```

List a Country's Provinces

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$country_code = 'country_code_example'; // string | country_code

try {
    $result = $apiInstance->listProvincesForCountryUsingGET($country_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listProvincesForCountryUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **country_code** | **string**| country_code | |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListProvincesResponse**](../Model/ListProvincesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listShippingMethodsUsingGET()`

```php
listShippingMethodsUsingGET(): \Com\Keap\Sdk\Core\Model\ListRestShippingMethodsResponse
```

List Shipping methods

Retrieves a list of Shipping methods

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listShippingMethodsUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listShippingMethodsUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ListRestShippingMethodsResponse**](../Model/ListRestShippingMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSubscriptionPlansUsingGET()`

```php
listSubscriptionPlansUsingGET($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse
```

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are:   - (String) name
$order_by = 'order_by_example'; // string | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listSubscriptionPlansUsingGET($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listSubscriptionPlansUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Filter to apply, allowed fields are:   - (String) name | [optional] |
| **order_by** | **string**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListSubscriptionPlansResponse**](../Model/ListSubscriptionPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSummariesUsingGET1()`

```php
listSummariesUsingGET1($filter, $order_by, $page_size, $page_token): \Com\Keap\Sdk\Core\Model\ListAffiliateSummariesResponse
```

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`
$order_by = 'order_by_example'; // string | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token

try {
    $result = $apiInstance->listSummariesUsingGET1($filter, $order_by, $page_size, $page_token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listSummariesUsingGET1: ', $e->getMessage(), PHP_EOL;
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

## `listTasksUsingGET1()`

```php
listTasksUsingGET1($end_due_time, $filter, $order_by, $page_size, $page_token, $start_due_time): \Com\Keap\Sdk\Core\Model\ListTasksResponse
```

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$end_due_time = 'end_due_time_example'; // string
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. `given_name desc`
$page_size = 0; // int | Total number of items to return per page
$page_token = 'page_token_example'; // string | Page token
$start_due_time = 'start_due_time_example'; // string

try {
    $result = $apiInstance->listTasksUsingGET1($end_due_time, $filter, $order_by, $page_size, $page_token, $start_due_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listTasksUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **end_due_time** | **string**|  | [optional] |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **page_size** | **int**| Total number of items to return per page | [optional] |
| **page_token** | **string**| Page token | [optional] |
| **start_due_time** | **string**|  | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListTasksResponse**](../Model/ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listUsersUsingGET1()`

```php
listUsersUsingGET1($filter, $order_by): \Com\Keap\Sdk\Core\Model\ListUserResponse
```

List Users

Retrieves a list of users

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. 'given_name desc'

try {
    $result = $apiInstance->listUsersUsingGET1($filter, $order_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->listUsersUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListUserResponse**](../Model/ListUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchDefaultCommissionProgramUsingPATCH()`

```php
patchDefaultCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_default_commission_program_request): \Com\Keap\Sdk\Core\Model\SetDefaultCommissionProgramResponse
```

Update a Default Commission Program

Updates a Default Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_default_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchDefaultCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchDefaultCommissionProgramRequest | Values of the default Commission Program

try {
    $result = $apiInstance->patchDefaultCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_default_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->patchDefaultCommissionProgramUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `patchProductCommissionProgramUsingPATCH()`

```php
patchProductCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_product_commission_program_request): \Com\Keap\Sdk\Core\Model\ProductCommissionProgram
```

Update a Product Commission Program

Updates a Product Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_product_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchProductCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchProductCommissionProgramRequest | Values of the product Commission Program

try {
    $result = $apiInstance->patchProductCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_product_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->patchProductCommissionProgramUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `patchSubscriptionCommissionProgramUsingPATCH()`

```php
patchSubscriptionCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_subscription_commission_program_request): \Com\Keap\Sdk\Core\Model\SubscriptionCommissionProgram
```

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_program_id = 'commission_program_id_example'; // string | commission_program_id
$update_mask = array('update_mask_example'); // string[] | update_mask
$patch_subscription_commission_program_request = new \Com\Keap\Sdk\Core\Model\PatchSubscriptionCommissionProgramRequest(); // \Com\Keap\Sdk\Core\Model\PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program

try {
    $result = $apiInstance->patchSubscriptionCommissionProgramUsingPATCH($commission_program_id, $update_mask, $patch_subscription_commission_program_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->patchSubscriptionCommissionProgramUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `patchTaskUsingPATCH()`

```php
patchTaskUsingPATCH($task_id, $update_mask, $task): \Com\Keap\Sdk\Core\Model\UpdateTaskResponse
```

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$task_id = 'task_id_example'; // string | task_id
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
$task = new \Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest(); // \Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest | task

try {
    $result = $apiInstance->patchTaskUsingPATCH($task_id, $update_mask, $task);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->patchTaskUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**| task_id | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] |
| **task** | [**\Com\Keap\Sdk\Core\Model\CreatePatchTaskRequest**](../Model/CreatePatchTaskRequest.md)| task | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\UpdateTaskResponse**](../Model/UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchUserUsingPATCH()`

```php
patchUserUsingPATCH($user_id, $update_mask, $user): \Com\Keap\Sdk\Core\Model\User
```

Update User

Updates information on a specific User

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
$user = new \Com\Keap\Sdk\Core\Model\PatchUserRequestV2(); // \Com\Keap\Sdk\Core\Model\PatchUserRequestV2 | user

try {
    $result = $apiInstance->patchUserUsingPATCH($user_id, $update_mask, $user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->patchUserUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] |
| **user** | [**\Com\Keap\Sdk\Core\Model\PatchUserRequestV2**](../Model/PatchUserRequestV2.md)| user | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeAffiliateFromProgramUsingPOST()`

```php
removeAffiliateFromProgramUsingPOST($id, $remove_from_program_request)
```

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string | id
$remove_from_program_request = new \Com\Keap\Sdk\Core\Model\AffiliateRemoveFromProgramRequest(); // \Com\Keap\Sdk\Core\Model\AffiliateRemoveFromProgramRequest | removeFromProgramRequest

try {
    $apiInstance->removeAffiliateFromProgramUsingPOST($id, $remove_from_program_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->removeAffiliateFromProgramUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `removeSubscriptionPlanCommissionFromCommissionsUsingPOST()`

```php
removeSubscriptionPlanCommissionFromCommissionsUsingPOST($commission_id, $delete_subscription_plan_commission_request)
```

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$commission_id = 'commission_id_example'; // string | commission_id
$delete_subscription_plan_commission_request = new \Com\Keap\Sdk\Core\Model\DeleteSubscriptionPlanCommissionRequest(); // \Com\Keap\Sdk\Core\Model\DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

try {
    $apiInstance->removeSubscriptionPlanCommissionFromCommissionsUsingPOST($commission_id, $delete_subscription_plan_commission_request);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->removeSubscriptionPlanCommissionFromCommissionsUsingPOST: ', $e->getMessage(), PHP_EOL;
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

## `retrieveNoteModelUsingGET1()`

```php
retrieveNoteModelUsingGET1(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Note Model

Gets the custom fields for the Note object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveNoteModelUsingGET1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->retrieveNoteModelUsingGET1: ', $e->getMessage(), PHP_EOL;
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

## `retrieveOrderCustomFieldModelUsingGET()`

```php
retrieveOrderCustomFieldModelUsingGET(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve an Order's Custom Field Model

Gets the custom field's model for the Order object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveOrderCustomFieldModelUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->retrieveOrderCustomFieldModelUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `retrieveSubscriptionCustomFieldModelUsingGET()`

```php
retrieveSubscriptionCustomFieldModelUsingGET(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Subscription's Custom Field Model

Gets the custom field's model for the Subscription object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveSubscriptionCustomFieldModelUsingGET();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->retrieveSubscriptionCustomFieldModelUsingGET: ', $e->getMessage(), PHP_EOL;
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

## `retrieveTaskModelUsingGET1()`

```php
retrieveTaskModelUsingGET1(): \Com\Keap\Sdk\Core\Model\ObjectModel
```

Retrieve Task Model

Get the custom fields for the Task object

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->retrieveTaskModelUsingGET1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->retrieveTaskModelUsingGET1: ', $e->getMessage(), PHP_EOL;
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

## `updateAffiliateCustomFieldUsingPATCH()`

```php
updateAffiliateCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateAffiliateCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateAffiliateCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateNotesCustomFieldUsingPATCH()`

```php
updateNotesCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateNotesCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateNotesCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
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
    echo 'Exception when calling PreReleaseApi->updateOpportunityCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
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
    echo 'Exception when calling PreReleaseApi->updateOpportunityUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateOrderCustomFieldUsingPATCH()`

```php
updateOrderCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update an Order's Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateOrderCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateOrderCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateRedirectLinkUsingPATCH()`

```php
updateRedirectLinkUsingPATCH($redirect_id, $request): \Com\Keap\Sdk\Core\Model\AffiliateLink
```

Update an Affiliate Link

Updates an Affiliate Link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$redirect_id = 'redirect_id_example'; // string | redirect_id
$request = new \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest(); // \Com\Keap\Sdk\Core\Model\CreateOrPatchAffiliateLinkRequest | request

try {
    $result = $apiInstance->updateRedirectLinkUsingPATCH($redirect_id, $request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateRedirectLinkUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateSubscriptionCustomFieldUsingPATCH()`

```php
updateSubscriptionCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Subscription's Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateSubscriptionCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateSubscriptionCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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

## `updateTaskCustomFieldUsingPATCH()`

```php
updateTaskCustomFieldUsingPATCH($custom_field_id, $request, $update_mask): \Com\Keap\Sdk\Core\Model\CustomFieldMetaData
```

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\PreReleaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$custom_field_id = 'custom_field_id_example'; // string | custom_field_id
$request = new \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest(); // \Com\Keap\Sdk\Core\Model\UpdateCustomFieldMetaDataRequest | request
$update_mask = array('update_mask_example'); // string[] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.

try {
    $result = $apiInstance->updateTaskCustomFieldUsingPATCH($custom_field_id, $request, $update_mask);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreReleaseApi->updateTaskCustomFieldUsingPATCH: ', $e->getMessage(), PHP_EOL;
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
