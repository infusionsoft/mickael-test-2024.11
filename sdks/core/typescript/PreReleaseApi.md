# .PreReleaseApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateToProgramUsingPOST**](PreReleaseApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addCommissionProgramUsingPOST**](PreReleaseApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgramUsingPOST**](PreReleaseApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgramUsingPOST**](PreReleaseApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**cancelSubscriptionUsingPOST**](PreReleaseApi.md#cancelSubscriptionUsingPOST) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createAffiliateCustomFieldUsingPOST**](PreReleaseApi.md#createAffiliateCustomFieldUsingPOST) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgramUsingPOST**](PreReleaseApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**createDiscountUsingPOST**](PreReleaseApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**createDiscountUsingPOST1**](PreReleaseApi.md#createDiscountUsingPOST1) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**createFunnelIntegrationUsingPOST**](PreReleaseApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**createIntegrationTriggerEventUsingPOST**](PreReleaseApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**createLeadSourceUsingPOST**](PreReleaseApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadsources | Create a Lead Source
[**createNoteCustomFieldUsingPOST1**](PreReleaseApi.md#createNoteCustomFieldUsingPOST1) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**createOpportunityCustomFieldsUsingPOST**](PreReleaseApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStageUsingPOST**](PreReleaseApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**createOpportunityUsingPOST1**](PreReleaseApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity
[**createOrderCustomFieldUsingPOST**](PreReleaseApi.md#createOrderCustomFieldUsingPOST) | **POST** /v2/orders/model/customFields | Create an Order\&#39;s Custom Field
[**createOrderItemsOnOrderUsingPOST1**](PreReleaseApi.md#createOrderItemsOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createOrderTotalDiscountUsingPOST**](PreReleaseApi.md#createOrderTotalDiscountUsingPOST) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount
[**createOrderUsingPOST1**](PreReleaseApi.md#createOrderUsingPOST1) | **POST** /v2/orders | Create an Order
[**createProductUsingPOST1**](PreReleaseApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product
[**createRedirectLinkUsingPOST**](PreReleaseApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**createReferralUsingPOST**](PreReleaseApi.md#createReferralUsingPOST) | **POST** /v2/referrals | Create a Referral
[**createSubscriptionCustomFieldUsingPOST**](PreReleaseApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription\&#39;s Custom Field
[**createTaskCustomFieldUsingPOST1**](PreReleaseApi.md#createTaskCustomFieldUsingPOST1) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**createTaskUsingPOST1**](PreReleaseApi.md#createTaskUsingPOST1) | **POST** /v2/tasks | Create a Task
[**createUserUsingPOST1**](PreReleaseApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User
[**deleteAffiliateCommissionProgramUsingDELETE**](PreReleaseApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateUsingDELETE**](PreReleaseApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteDiscountUsingDELETE**](PreReleaseApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**deleteDiscountUsingDELETE1**](PreReleaseApi.md#deleteDiscountUsingDELETE1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount
[**deleteDiscountUsingDELETE2**](PreReleaseApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**deleteFunnelIntegrationUsingPOST**](PreReleaseApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.
[**deleteOpportunityStageUsingDELETE**](PreReleaseApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**deleteOpportunityUsingDELETE**](PreReleaseApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**deleteOrderCustomFieldUsingDELETE**](PreReleaseApi.md#deleteOrderCustomFieldUsingDELETE) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order\&#39;s Custom Field
[**deleteOrderTotalDiscountUsingDELETE**](PreReleaseApi.md#deleteOrderTotalDiscountUsingDELETE) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount
[**deleteOrderUsingDELETE1**](PreReleaseApi.md#deleteOrderUsingDELETE1) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**deleteProductUsingDELETE1**](PreReleaseApi.md#deleteProductUsingDELETE1) | **DELETE** /v2/products/{product_id} | Delete a Product
[**deleteRedirectLinkUsingDELETE**](PreReleaseApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**deleteTaskCustomFieldUsingDELETE**](PreReleaseApi.md#deleteTaskCustomFieldUsingDELETE) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**deleteTaskUsingDELETE1**](PreReleaseApi.md#deleteTaskUsingDELETE1) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**getAffiliateCommissionTotalUsingGET**](PreReleaseApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissionsUsingGET**](PreReleaseApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateCustomFieldsUsingGET**](PreReleaseApi.md#getAffiliateCustomFieldsUsingGET) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**getCommissionProgramUsingGET**](PreReleaseApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getContactsBySearchTermUsingGET**](PreReleaseApi.md#getContactsBySearchTermUsingGET) | **GET** /v2/contacts:search | Search for Contacts
[**getDiscountUsingGET**](PreReleaseApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**getDiscountUsingGET1**](PreReleaseApi.md#getDiscountUsingGET1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**getOpportunityStageUsingGET**](PreReleaseApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityUsingGET1**](PreReleaseApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**getOrderTotalDiscountUsingGET**](PreReleaseApi.md#getOrderTotalDiscountUsingGET) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount
[**getOrderUsingGET1**](PreReleaseApi.md#getOrderUsingGET1) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**getProductUsingGET**](PreReleaseApi.md#getProductUsingGET) | **GET** /v2/products/{product_id} | Get a Product
[**getRedirectLinkUsingGET**](PreReleaseApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**getTaskUsingGET1**](PreReleaseApi.md#getTaskUsingGET1) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**getUserByIdUsingGET**](PreReleaseApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User
[**getUserInfoUsingGET1**](PreReleaseApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**getUserSignatureUsingGET1**](PreReleaseApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**listAffiliateCommissionProgramsUsingGET**](PreReleaseApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinksUsingGET**](PreReleaseApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listCountriesUsingGET2**](PreReleaseApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries
[**listDiscountsUsingGET**](PreReleaseApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**listLandingPagesUsingGET**](PreReleaseApi.md#listLandingPagesUsingGET) | **GET** /v2/landingpages | List Landing Pages
[**listLeadSourcesUsingGET**](PreReleaseApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadsources | List Lead Sources
[**listMerchantsUsingGET**](PreReleaseApi.md#listMerchantsUsingGET) | **GET** /v2/merchants | List Merchant accounts
[**listNoteTemplatesUsingGET**](PreReleaseApi.md#listNoteTemplatesUsingGET) | **GET** /v2/notes/templates | Retrieve Note Templates
[**listOpportunitiesUsingGET1**](PreReleaseApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStagesUsingGET**](PreReleaseApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**listOrderPaymentsUsingGET1**](PreReleaseApi.md#listOrderPaymentsUsingGET1) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments
[**listOrderTotalDiscountsUsingGET**](PreReleaseApi.md#listOrderTotalDiscountsUsingGET) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts
[**listOrdersUsingGET1**](PreReleaseApi.md#listOrdersUsingGET1) | **GET** /v2/orders | List orders
[**listProductsUsingGET1**](PreReleaseApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products
[**listProvincesForCountryUsingGET**](PreReleaseApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country\&#39;s Provinces
[**listShippingMethodsUsingGET**](PreReleaseApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods
[**listSubscriptionPlansUsingGET**](PreReleaseApi.md#listSubscriptionPlansUsingGET) | **GET** /v2/subscriptionPlans | List Subscription Plans
[**listSubscriptionsUsingGET1**](PreReleaseApi.md#listSubscriptionsUsingGET1) | **GET** /v2/subscriptions | List Subscriptions
[**listSummariesUsingGET1**](PreReleaseApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**listTasksUsingGET1**](PreReleaseApi.md#listTasksUsingGET1) | **GET** /v2/tasks | List Tasks
[**listUsersUsingGET1**](PreReleaseApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users
[**patchDefaultCommissionProgramUsingPATCH**](PreReleaseApi.md#patchDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patchOrderUsingPATCH**](PreReleaseApi.md#patchOrderUsingPATCH) | **PATCH** /v2/orders/{order_id} | Update an Order
[**patchProductCommissionProgramUsingPATCH**](PreReleaseApi.md#patchProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patchSubscriptionCommissionProgramUsingPATCH**](PreReleaseApi.md#patchSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**patchTaskUsingPATCH**](PreReleaseApi.md#patchTaskUsingPATCH) | **PATCH** /v2/tasks/{task_id} | Update a Task
[**patchUserUsingPATCH**](PreReleaseApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User
[**removeAffiliateFromProgramUsingPOST**](PreReleaseApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](PreReleaseApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**retrieveNoteModelUsingGET1**](PreReleaseApi.md#retrieveNoteModelUsingGET1) | **GET** /v2/notes/model | Retrieve Note Model
[**retrieveOrderCustomFieldModelUsingGET**](PreReleaseApi.md#retrieveOrderCustomFieldModelUsingGET) | **GET** /v2/orders/model | Retrieve an Order\&#39;s Custom Field Model
[**retrieveSubscriptionCustomFieldModelUsingGET**](PreReleaseApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription\&#39;s Custom Field Model
[**retrieveTaskModelUsingGET1**](PreReleaseApi.md#retrieveTaskModelUsingGET1) | **GET** /v2/tasks/model | Retrieve Task Model
[**updateAffiliateCustomFieldUsingPATCH**](PreReleaseApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateDiscountUsingPATCH**](PreReleaseApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount
[**updateDiscountUsingPATCH1**](PreReleaseApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount
[**updateNotesCustomFieldUsingPATCH**](PreReleaseApi.md#updateNotesCustomFieldUsingPATCH) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field
[**updateOpportunityCustomFieldUsingPATCH**](PreReleaseApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityStageUsingPATCH**](PreReleaseApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage
[**updateOpportunityUsingPATCH**](PreReleaseApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOrderCustomFieldUsingPATCH**](PreReleaseApi.md#updateOrderCustomFieldUsingPATCH) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order\&#39;s Custom Field
[**updateOrderTotalDiscountUsingPATCH**](PreReleaseApi.md#updateOrderTotalDiscountUsingPATCH) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount
[**updateRedirectLinkUsingPATCH**](PreReleaseApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**updateSubscriptionCustomFieldUsingPATCH**](PreReleaseApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription\&#39;s Custom Field
[**updateTaskCustomFieldUsingPATCH**](PreReleaseApi.md#updateTaskCustomFieldUsingPATCH) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task\&#39;s Custom Field


# **addAffiliateToProgramUsingPOST**
> void addAffiliateToProgramUsingPOST(affiliateAddToProgramRequest)

Assigns an Affiliate to Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiAddAffiliateToProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiAddAffiliateToProgramUsingPOSTRequest = {
    // id
  id: "id_example",
    // affiliateAddToProgramRequest
  affiliateAddToProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.addAffiliateToProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateAddToProgramRequest** | **AffiliateAddToProgramRequest**| affiliateAddToProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCommissionProgramUsingPOST**
> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST()

Creates an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiAddCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiAddCommissionProgramUsingPOSTRequest = {
    // Commission Program to insert (optional)
  insertCommissionProgram: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
};

const data = await apiInstance.addCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insertCommissionProgram** | **CreateCommissionProgramRequest**| Commission Program to insert |


### Return type

**AffiliateCommissionProgramResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignProductCommissionProgramUsingPOST**
> ProductCommissionProgram assignProductCommissionProgramUsingPOST()

Assigns a Product Commission Program to a Product

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Product Commission Program (optional)
  productCommissionProgram: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.assignProductCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCommissionProgram** | **CreateProductCommissionProgramRequest**| Product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**ProductCommissionProgram**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignSubscriptionCommissionProgramUsingPOST**
> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST()

Assigns a Subscription Commission Program to a Subscription

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Subscription Commission Program (optional)
  subscriptionCommissionProgram: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.assignSubscriptionCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionCommissionProgram** | **CreateSubscriptionCommissionProgramRequest**| Subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SubscriptionCommissionProgram**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelSubscriptionUsingPOST**
> void cancelSubscriptionUsingPOST(cancelSubscriptionsRequest)

Cancels the specified subscription

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCancelSubscriptionUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCancelSubscriptionUsingPOSTRequest = {
    // subscription_id
  subscriptionId: "subscription_id_example",
    // cancelSubscriptionsRequest
  cancelSubscriptionsRequest: {
    reason: "reason_example",
  },
};

const data = await apiInstance.cancelSubscriptionUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelSubscriptionsRequest** | **CancelSubscriptionsRequest**| cancelSubscriptionsRequest |
 **subscriptionId** | [**string**] | subscription_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAffiliateCustomFieldUsingPOST**
> CustomFieldMetaData createAffiliateCustomFieldUsingPOST(customField)

Creates a single Affiliate Custom Field

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createAffiliateCustomFieldUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDefaultCommissionProgramUsingPOST**
> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST()

Creates a Default Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Values of the Default Commission Program (optional)
  createDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.createDefaultCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaultCommissionProgramRequest** | **CreateDefaultCommissionProgramRequest**| Values of the Default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDiscountUsingPOST**
> CategoryDiscount createDiscountUsingPOST(request)

Create a Category Discount.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateDiscountUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateDiscountUsingPOSTRequest = {
    // request
  request: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
};

const data = await apiInstance.createDiscountUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateUpdateDiscountRequest**| request |


### Return type

**CategoryDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDiscountUsingPOST1**
> ShippingDiscount createDiscountUsingPOST1(request)

Creates a Shipping Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateDiscountUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateDiscountUsingPOST1Request = {
    // request
  request: {
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createDiscountUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateShippingDiscountRequest**| request |


### Return type

**ShippingDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFunnelIntegrationUsingPOST**
> void createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest)

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest = {
    // createFunnelIntegrationRequest
  createFunnelIntegrationRequest: {
    baseUrl: "baseUrl_example",
    context: "context_example",
    enabled: true,
    funnelIntegrationActions: [
      {
        baseUrl: "baseUrl_example",
        context: "context_example",
        enabled: true,
        iconUrl: "iconUrl_example",
        name: "My Trigger, MyTrigger, My 1 New Very Exciting Trigger",
        schemaFields: [
          {
            label: "My Integration Field",
            name: "my_integration_field",
            type: "String",
          },
        ],
      },
    ],
    funnelIntegrationTriggers: [
      {
        baseUrl: "baseUrl_example",
        context: "context_example",
        enabled: true,
        iconUrl: "iconUrl_example",
        name: "My Trigger, MyTrigger, My 1 New Very Exciting Trigger",
        schemaFields: [
          {
            label: "My Integration Field",
            name: "my_integration_field",
            type: "String",
          },
        ],
      },
    ],
    name: "My Integration, MyIntegration, My 1 New Very Exciting Integration",
  },
};

const data = await apiInstance.createFunnelIntegrationUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationRequest** | **CreateFunnelIntegrationRequest**| createFunnelIntegrationRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createIntegrationTriggerEventUsingPOST**
> Array<FunnelIntegrationTriggerResultDTO> createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents)


### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest = {
    // createFunnelIntegrationTriggerEvents
  createFunnelIntegrationTriggerEvents: {
    funnelIntegrationTriggerEvents: [
      {
        contactId: 1,
        oracleId: "oracleId_example",
        schemaData: "schemaData_example",
      },
    ],
  },
};

const data = await apiInstance.createIntegrationTriggerEventUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationTriggerEvents** | **CreateFunnelIntegrationTriggerEvents**| createFunnelIntegrationTriggerEvents |


### Return type

**Array<FunnelIntegrationTriggerResultDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLeadSourceUsingPOST**
> LeadSource createLeadSourceUsingPOST()

Creates a new Lead Source

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateLeadSourceUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateLeadSourceUsingPOSTRequest = {
    // leadsource (optional)
  leadsource: {
    category: {
      id: "id_example",
      name: "name_example",
    },
    description: "description_example",
    endTime: "endTime_example",
    medium: "medium_example",
    message: "message_example",
    name: "name_example",
    startTime: "startTime_example",
    statusIsActive: true,
    vendor: "vendor_example",
  },
};

const data = await apiInstance.createLeadSourceUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadsource** | **CreateLeadSourceRequest**| leadsource |


### Return type

**LeadSource**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNoteCustomFieldUsingPOST1**
> CustomFieldMetaData createNoteCustomFieldUsingPOST1(customField)

Adds a custom field of the specified type and options to the Note object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateNoteCustomFieldUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateNoteCustomFieldUsingPOST1Request = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createNoteCustomFieldUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityCustomFieldsUsingPOST**
> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST(customField)

Adds a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOpportunityCustomFieldsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityStageUsingPOST**
> RestOpportunityStage createOpportunityStageUsingPOST()

Creates a new Opportunity Stage

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOpportunityStageUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOpportunityStageUsingPOSTRequest = {
    // opportunity (optional)
  opportunityStage: {
    checklistItems: [
      {
        description: "description_example",
        order: 1,
        required: false,
      },
    ],
    name: "Won",
    order: 1,
    probability: 1,
    targetNumberDays: 1,
  },
};

const data = await apiInstance.createOpportunityStageUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityStage** | **CreateOpportunityStageRequest**| opportunity |


### Return type

**RestOpportunityStage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityUsingPOST1**
> RestV2Opportunity createOpportunityUsingPOST1()

Creates a new opportunity as the authenticated user.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOpportunityUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOpportunityUsingPOST1Request = {
    // opportunity (optional)
  opportunity: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.createOpportunityUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | **CreateOpportunityRequest**| opportunity |


### Return type

**RestV2Opportunity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderCustomFieldUsingPOST**
> CustomFieldMetaData createOrderCustomFieldUsingPOST(customField)

Adds a custom field of the specified type and options to the Order object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOrderCustomFieldUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderItemsOnOrderUsingPOST1**
> RestV2OrderItem createOrderItemsOnOrderUsingPOST1(createRestOrderItemRequest)

Creates an order item on an existing order.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request = {
    // order_id
  orderId: "order_id_example",
    // createRestOrderItemRequest
  createRestOrderItemRequest: {
    description: "description_example",
    price: 3.14,
    productId: "productId_example",
    productType: "PRODUCT",
    quantity: 1,
  },
};

const data = await apiInstance.createOrderItemsOnOrderUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRestOrderItemRequest** | **CreateRestOrderItemRequest**| createRestOrderItemRequest |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**RestV2OrderItem**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderTotalDiscountUsingPOST**
> OrderTotalDiscount createOrderTotalDiscountUsingPOST(request)

Creates an Order Total Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOrderTotalDiscountUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOrderTotalDiscountUsingPOSTRequest = {
    // request
  request: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createOrderTotalDiscountUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateOrderTotalDiscountRequest**| request |


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderUsingPOST1**
> RestV2Order createOrderUsingPOST1(createOrderRequest)

Create a one time Order with Order items.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateOrderUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateOrderUsingPOST1Request = {
    // createOrderRequest
  createOrderRequest: {
    contactId: "contactId_example",
    leadAffiliateId: "leadAffiliateId_example",
    orderItems: [
      {
        description: "description_example",
        price: 3.14,
        productId: "productId_example",
        productType: "PRODUCT",
        quantity: 1,
      },
    ],
    orderTime: "orderTime_example",
    orderTitle: "orderTitle_example",
    orderType: "OFFLINE",
    promoCodes: [
      "promoCodes_example",
    ],
    salesAffiliateId: "salesAffiliateId_example",
    shippingAddress: {
      company: "company_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      isInvoiceToCompany: true,
      lastName: "lastName_example",
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      middleName: "middleName_example",
      phone: "phone_example",
      region: "region_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
  },
};

const data = await apiInstance.createOrderUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | **RestCreateOrderRequest**| createOrderRequest |


### Return type

**RestV2Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductUsingPOST1**
> RestV2Product createProductUsingPOST1(createProductRequest)

Creates a new product

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateProductUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateProductUsingPOST1Request = {
    // createProductRequest
  createProductRequest: {
    active: true,
    cityTaxable: true,
    countryTaxable: true,
    description: "description_example",
    name: "name_example",
    price: 1,
    shortDescription: "shortDescription_example",
    sku: "sku_example",
    stateTaxable: true,
    storefrontHidden: true,
    subscriptionOnly: true,
    taxable: true,
    weight: 3.14,
  },
};

const data = await apiInstance.createProductUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequest** | **CreateProductRequest**| createProductRequest |


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRedirectLinkUsingPOST**
> AffiliateLink createRedirectLinkUsingPOST(request)

Creates a single Affiliate Link

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateRedirectLinkUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateRedirectLinkUsingPOSTRequest = {
    // request
  request: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.createRedirectLinkUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateOrPatchAffiliateLinkRequest**| request |


### Return type

**AffiliateLink**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createReferralUsingPOST**
> Referral createReferralUsingPOST(request)

Creates a new referral partner referral on the provided contact

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateReferralUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateReferralUsingPOSTRequest = {
    // request
  request: {
    contactId: "contactId_example",
    description: "description_example",
    expirationTime: "expirationTime_example",
    ipAddress: "ipAddress_example",
    referralPartnerId: "referralPartnerId_example",
    referralTime: "referralTime_example",
    referralType: "COOKIE",
    source: "source_example",
  },
};

const data = await apiInstance.createReferralUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateReferralRequest**| request |


### Return type

**Referral**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubscriptionCustomFieldUsingPOST**
> CustomFieldMetaData createSubscriptionCustomFieldUsingPOST(customField)

Adds a custom field of the specified type and options to the Subscription object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createSubscriptionCustomFieldUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskCustomFieldUsingPOST1**
> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1(customField)

Adds a custom field of the specified type and options to the Task object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateTaskCustomFieldUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateTaskCustomFieldUsingPOST1Request = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createTaskCustomFieldUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CreateCustomFieldResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTaskUsingPOST1**
> Task createTaskUsingPOST1()

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateTaskUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateTaskUsingPOST1Request = {
    // task (optional)
  task: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.createTaskUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | **CreateTaskRequest**| task |


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUserUsingPOST1**
> User createUserUsingPOST1()

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiCreateUserUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiCreateUserUsingPOST1Request = {
    // user (optional)
  user: {
    admin: true,
    emailAddress: {
      email: "email_example",
      field: "EMAIL_FIELD_UNSPECIFIED",
      optInReason: "optInReason_example",
    },
    givenName: "givenName_example",
    partner: true,
  },
};

const data = await apiInstance.createUserUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **CreateUserRequestV2**| user |


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAffiliateCommissionProgramUsingDELETE**
> void deleteAffiliateCommissionProgramUsingDELETE()

Deletes a Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.deleteAffiliateCommissionProgramUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAffiliateUsingDELETE**
> void deleteAffiliateUsingDELETE()

Deletes the specified Affiliate

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteAffiliateUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteAffiliateUsingDELETERequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteAffiliateUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDiscountUsingDELETE**
> void deleteDiscountUsingDELETE()

Deletes a specified Category Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteDiscountUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteDiscountUsingDELETERequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDiscountUsingDELETE1**
> void deleteDiscountUsingDELETE1()

Deletes a specified Free Trial Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteDiscountUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteDiscountUsingDELETE1Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDiscountUsingDELETE2**
> void deleteDiscountUsingDELETE2()

Deletes a specified Shipping Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteDiscountUsingDELETE2Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteDiscountUsingDELETE2Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFunnelIntegrationUsingPOST**
> void deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest)

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest = {
    // deleteFunnelIntegrationRequest
  deleteFunnelIntegrationRequest: {
    actionNames: [
      "actionNames_example",
    ],
    integrationNames: [
      "integrationNames_example",
    ],
    triggerNames: [
      "triggerNames_example",
    ],
  },
};

const data = await apiInstance.deleteFunnelIntegrationUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFunnelIntegrationRequest** | **DeleteFunnelIntegrationRequest**| deleteFunnelIntegrationRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOpportunityStageUsingDELETE**
> void deleteOpportunityStageUsingDELETE()

Deletes the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteOpportunityStageUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteOpportunityStageUsingDELETERequest = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.deleteOpportunityStageUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOpportunityUsingDELETE**
> void deleteOpportunityUsingDELETE()

Deletes the specified Opportunity

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteOpportunityUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteOpportunityUsingDELETERequest = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.deleteOpportunityUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrderCustomFieldUsingDELETE**
> void deleteOrderCustomFieldUsingDELETE()

Deletes a Custom Field from Order.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteOrderCustomFieldUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteOrderCustomFieldUsingDELETERequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteOrderCustomFieldUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrderTotalDiscountUsingDELETE**
> void deleteOrderTotalDiscountUsingDELETE()

Deletes a specified Order Total Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteOrderTotalDiscountUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteOrderTotalDiscountUsingDELETERequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteOrderTotalDiscountUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrderUsingDELETE1**
> void deleteOrderUsingDELETE1()

  Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteOrderUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteOrderUsingDELETE1Request = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.deleteOrderUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductUsingDELETE1**
> void deleteProductUsingDELETE1()

Deletes a single product

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteProductUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteProductUsingDELETE1Request = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.deleteProductUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRedirectLinkUsingDELETE**
> void deleteRedirectLinkUsingDELETE()

Deletes an Affiliate Link

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteRedirectLinkUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteRedirectLinkUsingDELETERequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.deleteRedirectLinkUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskCustomFieldUsingDELETE**
> void deleteTaskCustomFieldUsingDELETE()

Deletes a Custom Field from Task.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
};

const data = await apiInstance.deleteTaskCustomFieldUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTaskUsingDELETE1**
> void deleteTaskUsingDELETE1()

Deletes a single task

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiDeleteTaskUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiDeleteTaskUsingDELETE1Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.deleteTaskUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAffiliateCommissionTotalUsingGET**
> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET()

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getAffiliateCommissionTotalUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined


### Return type

**AffiliateCommissionEarned**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAffiliateCommissionsUsingGET**
> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET()

Retrieve a list of Affiliate\'s Commissions and Clawbacks

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetAffiliateCommissionsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetAffiliateCommissionsUsingGETRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.getAffiliateCommissionsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAffiliateCustomFieldsUsingGET**
> ObjectModel getAffiliateCustomFieldsUsingGET()

Get the custom fields and optional properties for the Affiliate object

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.getAffiliateCustomFieldsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCommissionProgramUsingGET**
> AffiliateProgramV2 getCommissionProgramUsingGET()

Retrieves a single Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetCommissionProgramUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetCommissionProgramUsingGETRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.getCommissionProgramUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**AffiliateProgramV2**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContactsBySearchTermUsingGET**
> ListBasicContactResponse getContactsBySearchTermUsingGET()

Get a list of Contacts based search parameters.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetContactsBySearchTermUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetContactsBySearchTermUsingGETRequest = {
    // searchParam
  searchParam: "searchParam_example",
};

const data = await apiInstance.getContactsBySearchTermUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchParam** | [**string**] | searchParam | defaults to undefined


### Return type

**ListBasicContactResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDiscountUsingGET**
> CategoryDiscount getDiscountUsingGET()

Retrieves a single Category Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetDiscountUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetDiscountUsingGETRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getDiscountUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**CategoryDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDiscountUsingGET1**
> ShippingDiscount getDiscountUsingGET1()

Retrieves a Shipping Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetDiscountUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetDiscountUsingGET1Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getDiscountUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**ShippingDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOpportunityStageUsingGET**
> RestOpportunityStage getOpportunityStageUsingGET()

Retrieves the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetOpportunityStageUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetOpportunityStageUsingGETRequest = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.getOpportunityStageUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


### Return type

**RestOpportunityStage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOpportunityUsingGET1**
> RestV2Opportunity getOpportunityUsingGET1()

Retrieves the specified Opportunity

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetOpportunityUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetOpportunityUsingGET1Request = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.getOpportunityUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


### Return type

**RestV2Opportunity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderTotalDiscountUsingGET**
> OrderTotalDiscount getOrderTotalDiscountUsingGET()

Retrieves an Order Total Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetOrderTotalDiscountUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetOrderTotalDiscountUsingGETRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getOrderTotalDiscountUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderUsingGET1**
> RestV2Order getOrderUsingGET1()

Retrieves a single Order for a given order id

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetOrderUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetOrderUsingGET1Request = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.getOrderUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**RestV2Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductUsingGET**
> RestV2Product getProductUsingGET()

Gets a single Product

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetProductUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetProductUsingGETRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.getProductUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2Product**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRedirectLinkUsingGET**
> AffiliateLink getRedirectLinkUsingGET()

Retrieves information about a single Affiliate Link

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetRedirectLinkUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetRedirectLinkUsingGETRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.getRedirectLinkUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskUsingGET1**
> Task getTaskUsingGET1()

Retrieves a single task

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetTaskUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetTaskUsingGET1Request = {
    // task_id
  taskId: "task_id_example",
};

const data = await apiInstance.getTaskUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | task_id | defaults to undefined


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserByIdUsingGET**
> User getUserByIdUsingGET()

Retrieves a specific User

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetUserByIdUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetUserByIdUsingGETRequest = {
    // user_id
  userId: "user_id_example",
};

const data = await apiInstance.getUserByIdUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | user_id | defaults to undefined


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserInfoUsingGET1**
> GetUserInfoResponse getUserInfoUsingGET1()

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.getUserInfoUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetUserInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserSignatureUsingGET1**
> string getUserSignatureUsingGET1()

Retrieves a HTML snippet that contains the user\'s email signature.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiGetUserSignatureUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiGetUserSignatureUsingGET1Request = {
    // user_id
  userId: "user_id_example",
};

const data = await apiInstance.getUserSignatureUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | user_id | defaults to undefined


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAffiliateCommissionProgramsUsingGET**
> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET()

Retrieves a list of Affiliate Commission Programs

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateCommissionProgramsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionProgramsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAffiliateLinksUsingGET**
> ListAffiliateLinksResponse listAffiliateLinksUsingGET()

Retrieves a list of Affiliate Links

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListAffiliateLinksUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListAffiliateLinksUsingGETRequest = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateLinksUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateLinksResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCountriesUsingGET2**
> ListCountriesResponse listCountriesUsingGET2()


### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.listCountriesUsingGET2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCountriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDiscountsUsingGET**
> ListShippingDiscountsResponse listDiscountsUsingGET()

Retrieves all Shipping Discounts

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListDiscountsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListDiscountsUsingGETRequest = {
    // TODO: PAPI-1449 (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listDiscountsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | TODO: PAPI-1449 | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListShippingDiscountsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLandingPagesUsingGET**
> ListLandingPagesResponse listLandingPagesUsingGET()

Retrieves a list of all landing pages

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListLandingPagesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListLandingPagesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLandingPagesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLandingPagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLeadSourcesUsingGET**
> ListLeadSourcesResponse listLeadSourcesUsingGET()

Retrieves a list of lead sources

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListLeadSourcesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListLeadSourcesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSourcesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourcesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMerchantsUsingGET**
> ListRestMerchantResponse listMerchantsUsingGET()

Retrieves a list of Merchant accounts

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListMerchantsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListMerchantsUsingGETRequest = {
    // Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listMerchantsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListRestMerchantResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNoteTemplatesUsingGET**
> ListNoteTemplateResponse listNoteTemplatesUsingGET()

Retrieves a list of Note Templates

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListNoteTemplatesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListNoteTemplatesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listNoteTemplatesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListNoteTemplateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOpportunitiesUsingGET1**
> ListOpportunitiesResponse listOpportunitiesUsingGET1()

Retrieves a list of all Opportunities.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListOpportunitiesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListOpportunitiesUsingGET1Request = {
    // fields (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  (optional)
  filter: "filter_example",
    // Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunitiesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | fields | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunitiesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOpportunityStagesUsingGET**
> ListOpportunityStagesResponse listOpportunityStagesUsingGET()

Retrieves a list of Opportunity Stages.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListOpportunityStagesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListOpportunityStagesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunityStagesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunityStagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrderPaymentsUsingGET1**
> ListOrderPaymentsResponse listOrderPaymentsUsingGET1()

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListOrderPaymentsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListOrderPaymentsUsingGET1Request = {
    // order_id
  orderId: "order_id_example",
    // Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrderPaymentsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderPaymentsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrderTotalDiscountsUsingGET**
> ListOrderTotalDiscountsResponse listOrderTotalDiscountsUsingGET()

Retrieves all Order Total Discounts

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListOrderTotalDiscountsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListOrderTotalDiscountsUsingGETRequest = {
    // Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrderTotalDiscountsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderTotalDiscountsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrdersUsingGET1**
> ListOrders listOrdersUsingGET1()

Retrieves a list of orders

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListOrdersUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListOrdersUsingGET1Request = {
    // Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrdersUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrders**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductsUsingGET1**
> ListProductsResponse listProductsUsingGET1()

Retrieves a list of Products

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListProductsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListProductsUsingGET1Request = {
    // Filter to apply, allowed fields are:   - (String) name    (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name    | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProvincesForCountryUsingGET**
> ListProvincesResponse listProvincesForCountryUsingGET()


### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListProvincesForCountryUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListProvincesForCountryUsingGETRequest = {
    // country_code
  countryCode: "country_code_example",
};

const data = await apiInstance.listProvincesForCountryUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | [**string**] | country_code | defaults to undefined


### Return type

**ListProvincesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listShippingMethodsUsingGET**
> ListRestShippingMethodsResponse listShippingMethodsUsingGET()

Retrieves a list of Shipping methods

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.listShippingMethodsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListRestShippingMethodsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSubscriptionPlansUsingGET**
> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET()

Retrieves a list of Subscription Plans

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListSubscriptionPlansUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListSubscriptionPlansUsingGETRequest = {
    // Filter to apply, allowed fields are:   - (String) name    (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSubscriptionPlansUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name    | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListSubscriptionPlansResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSubscriptionsUsingGET1**
> ListSubscriptionsResponse listSubscriptionsUsingGET1()

Retrieves a list of subscriptions using the specified search criteria.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListSubscriptionsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListSubscriptionsUsingGET1Request = {
    // Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSubscriptionsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListSubscriptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSummariesUsingGET1**
> ListAffiliateSummariesResponse listSummariesUsingGET1()

Retrieve a list of Affiliate Summaries

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListSummariesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListSummariesUsingGET1Request = {
    // Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSummariesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateSummariesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTasksUsingGET1**
> ListTasksResponse listTasksUsingGET1()

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListTasksUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListTasksUsingGET1Request = {
  
  endDueTime: "end_due_time_example",
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
  
  startDueTime: "start_due_time_example",
};

const data = await apiInstance.listTasksUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | [**string**] |  | (optional) defaults to undefined
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **startDueTime** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListTasksResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUsersUsingGET1**
> ListUserResponse listUsersUsingGET1()

Retrieves a list of users

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiListUsersUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiListUsersUsingGET1Request = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. \'given_name desc\' (optional)
  orderBy: "order_by_example",
};

const data = await apiInstance.listUsersUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39; | (optional) defaults to undefined


### Return type

**ListUserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchDefaultCommissionProgramUsingPATCH**
> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH()

Updates a Default Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the default Commission Program (optional)
  patchDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.patchDefaultCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchDefaultCommissionProgramRequest** | **PatchDefaultCommissionProgramRequest**| Values of the default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchOrderUsingPATCH**
> RestV2Order patchOrderUsingPATCH()

Updates an Order

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchOrderUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchOrderUsingPATCHRequest = {
    // order_id
  orderId: "order_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
    // order (optional)
  order: {
    contactId: "contactId_example",
    leadAffiliateId: "leadAffiliateId_example",
    orderTime: "orderTime_example",
    orderTitle: "orderTitle_example",
    orderType: "OFFLINE",
    promoCodes: [
      "promoCodes_example",
    ],
    salesAffiliateId: "salesAffiliateId_example",
    shippingAddress: {
      company: "company_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      isInvoiceToCompany: true,
      lastName: "lastName_example",
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      middleName: "middleName_example",
      phone: "phone_example",
      region: "region_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
  },
};

const data = await apiInstance.patchOrderUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **RestV2PatchOrderRequest**| order |
 **orderId** | [**string**] | order_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Order**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchProductCommissionProgramUsingPATCH**
> ProductCommissionProgram patchProductCommissionProgramUsingPATCH()

Updates a Product Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the product Commission Program (optional)
  patchProductCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.patchProductCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchProductCommissionProgramRequest** | **PatchProductCommissionProgramRequest**| Values of the product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**ProductCommissionProgram**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchSubscriptionCommissionProgramUsingPATCH**
> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH()

Updates a Subscription Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the subscription Commission Program (optional)
  patchSubscriptionCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.patchSubscriptionCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchSubscriptionCommissionProgramRequest** | **PatchSubscriptionCommissionProgramRequest**| Values of the subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SubscriptionCommissionProgram**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchTaskUsingPATCH**
> UpdateTaskResponse patchTaskUsingPATCH()

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchTaskUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchTaskUsingPATCHRequest = {
    // task_id
  taskId: "task_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "id",
  ],
    // task (optional)
  task: {
    assignedToUserId: "assignedToUserId_example",
    completed: true,
    completionTime: "completionTime_example",
    contactId: "contactId_example",
    description: "description_example",
    dueTime: "dueTime_example",
    priority: "CRITICAL",
    remindTimeMins: 1,
    title: "title_example",
    type: "EMAIL",
  },
};

const data = await apiInstance.patchTaskUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | **CreatePatchTaskRequest**| task |
 **taskId** | [**string**] | task_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**UpdateTaskResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchUserUsingPATCH**
> User patchUserUsingPATCH()

Updates information on a specific User

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiPatchUserUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiPatchUserUsingPATCHRequest = {
    // user_id
  userId: "user_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "address",
  ],
    // user (optional)
  user: {
    address: {
      country: "United States of America",
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
      regionCode: "US-AZ",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    companyName: "companyName_example",
    emailAddress: {
      email: "email_example",
      field: "EMAIL_FIELD_UNSPECIFIED",
      optInReason: "optInReason_example",
    },
    familyName: "familyName_example",
    faxNumbers: [
      {
        field: "FAX_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    givenName: "givenName_example",
    phoneNumbers: [
      {
        extension: "extension_example",
        field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    timeZone: "timeZone_example",
    title: "title_example",
    website: "website_example",
  },
};

const data = await apiInstance.patchUserUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **PatchUserRequestV2**| user |
 **userId** | [**string**] | user_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeAffiliateFromProgramUsingPOST**
> void removeAffiliateFromProgramUsingPOST(removeFromProgramRequest)

Removes an Affiliate from a Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest = {
    // id
  id: "id_example",
    // removeFromProgramRequest
  removeFromProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.removeAffiliateFromProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeFromProgramRequest** | **AffiliateRemoveFromProgramRequest**| removeFromProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeSubscriptionPlanCommissionFromCommissionsUsingPOST**
> void removeSubscriptionPlanCommissionFromCommissionsUsingPOST(deleteSubscriptionPlanCommissionRequest)

Removes a Subscription from a Commission Program

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest = {
    // commission_id
  commissionId: "commission_id_example",
    // deleteSubscriptionPlanCommissionRequest
  deleteSubscriptionPlanCommissionRequest: {
    productId: "productId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSubscriptionPlanCommissionRequest** | **DeleteSubscriptionPlanCommissionRequest**| deleteSubscriptionPlanCommissionRequest |
 **commissionId** | [**string**] | commission_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNoteModelUsingGET1**
> ObjectModel retrieveNoteModelUsingGET1()

Gets the custom fields for the Note object

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.retrieveNoteModelUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveOrderCustomFieldModelUsingGET**
> ObjectModel retrieveOrderCustomFieldModelUsingGET()

Gets the custom field\'s model for the Order object

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.retrieveOrderCustomFieldModelUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveSubscriptionCustomFieldModelUsingGET**
> ObjectModel retrieveSubscriptionCustomFieldModelUsingGET()

Gets the custom field\'s model for the Subscription object

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.retrieveSubscriptionCustomFieldModelUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveTaskModelUsingGET1**
> ObjectModel retrieveTaskModelUsingGET1()

Get the custom fields for the Task object

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request = {};

const data = await apiInstance.retrieveTaskModelUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAffiliateCustomFieldUsingPATCH**
> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Affiliate object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateAffiliateCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDiscountUsingPATCH**
> CategoryDiscount updateDiscountUsingPATCH(request)

Update a Category Discount.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateDiscountUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateDiscountUsingPATCHRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  request: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
};

const data = await apiInstance.updateDiscountUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateUpdateDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CategoryDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDiscountUsingPATCH1**
> ShippingDiscount updateDiscountUsingPATCH1(request)

Updates a Shipping Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateDiscountUsingPATCH1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateDiscountUsingPATCH1Request = {
    // discount_id
  discountId: "discount_id_example",
    // request
  request: {
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "TODO: PAPI-1452",
  ],
};

const data = await apiInstance.updateDiscountUsingPATCH1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateShippingDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ShippingDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNotesCustomFieldUsingPATCH**
> CustomFieldMetaData updateNotesCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Note object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateNotesCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOpportunityCustomFieldUsingPATCH**
> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOpportunityCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOpportunityStageUsingPATCH**
> RestOpportunityStage updateOpportunityStageUsingPATCH(request)

Updates specified values of a given Opportunity Stage

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateOpportunityStageUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateOpportunityStageUsingPATCHRequest = {
    // stage_id
  stageId: "stage_id_example",
    // request
  request: {
    checklistItems: [
      {
        description: "description_example",
        id: "id_example",
        order: 1,
        required: true,
      },
    ],
    name: "Qualified",
    order: 1,
    probability: 2,
    targetNumberDays: 1,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateOpportunityStageUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateOpportunityStageRequest**| request |
 **stageId** | [**string**] | stage_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestOpportunityStage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOpportunityUsingPATCH**
> RestV2Opportunity updateOpportunityUsingPATCH(request)

Updates specified values of a given opportunity

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateOpportunityUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateOpportunityUsingPATCHRequest = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
    // request
  request: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "opportunity_title",
  ],
};

const data = await apiInstance.updateOpportunityUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **PatchOpportunityRequest**| request |
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Opportunity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrderCustomFieldUsingPATCH**
> CustomFieldMetaData updateOrderCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Order object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOrderCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrderTotalDiscountUsingPATCH**
> OrderTotalDiscount updateOrderTotalDiscountUsingPATCH(request)

Updates an Order Total Discount

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateOrderTotalDiscountUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateOrderTotalDiscountUsingPATCHRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  request: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateOrderTotalDiscountUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateOrderTotalDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRedirectLinkUsingPATCH**
> AffiliateLink updateRedirectLinkUsingPATCH(request)

Updates an Affiliate Link

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateRedirectLinkUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateRedirectLinkUsingPATCHRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
    // request
  request: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.updateRedirectLinkUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateOrPatchAffiliateLinkRequest**| request |
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSubscriptionCustomFieldUsingPATCH**
> CustomFieldMetaData updateSubscriptionCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Subscription object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateSubscriptionCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTaskCustomFieldUsingPATCH**
> CustomFieldMetaData updateTaskCustomFieldUsingPATCH(request)

Updates a custom field of the specified type and options to the Task object.

### Example


```typescript
import { createConfiguration, PreReleaseApi } from '';
import type { PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PreReleaseApi(configuration);

const request: PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateTaskCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


