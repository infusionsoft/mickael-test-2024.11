# KeapCoreServiceCoreSdk.PreReleaseApi

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
[**createOrderCustomFieldUsingPOST**](PreReleaseApi.md#createOrderCustomFieldUsingPOST) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**createOrderItemsOnOrderUsingPOST1**](PreReleaseApi.md#createOrderItemsOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createOrderTotalDiscountUsingPOST**](PreReleaseApi.md#createOrderTotalDiscountUsingPOST) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount
[**createOrderUsingPOST1**](PreReleaseApi.md#createOrderUsingPOST1) | **POST** /v2/orders | Create an Order
[**createProductUsingPOST1**](PreReleaseApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product
[**createRedirectLinkUsingPOST**](PreReleaseApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**createReferralUsingPOST**](PreReleaseApi.md#createReferralUsingPOST) | **POST** /v2/referrals | Create a Referral
[**createSubscriptionCustomFieldUsingPOST**](PreReleaseApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field
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
[**deleteOrderCustomFieldUsingDELETE**](PreReleaseApi.md#deleteOrderCustomFieldUsingDELETE) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order&#39;s Custom Field
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
[**listProvincesForCountryUsingGET**](PreReleaseApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces
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
[**retrieveOrderCustomFieldModelUsingGET**](PreReleaseApi.md#retrieveOrderCustomFieldModelUsingGET) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**retrieveSubscriptionCustomFieldModelUsingGET**](PreReleaseApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model
[**retrieveTaskModelUsingGET1**](PreReleaseApi.md#retrieveTaskModelUsingGET1) | **GET** /v2/tasks/model | Retrieve Task Model
[**updateAffiliateCustomFieldUsingPATCH**](PreReleaseApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateDiscountUsingPATCH**](PreReleaseApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount
[**updateDiscountUsingPATCH1**](PreReleaseApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount
[**updateNotesCustomFieldUsingPATCH**](PreReleaseApi.md#updateNotesCustomFieldUsingPATCH) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field
[**updateOpportunityCustomFieldUsingPATCH**](PreReleaseApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**updateOpportunityStageUsingPATCH**](PreReleaseApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage
[**updateOpportunityUsingPATCH**](PreReleaseApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**updateOrderCustomFieldUsingPATCH**](PreReleaseApi.md#updateOrderCustomFieldUsingPATCH) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field
[**updateOrderTotalDiscountUsingPATCH**](PreReleaseApi.md#updateOrderTotalDiscountUsingPATCH) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount
[**updateRedirectLinkUsingPATCH**](PreReleaseApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**updateSubscriptionCustomFieldUsingPATCH**](PreReleaseApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field
[**updateTaskCustomFieldUsingPATCH**](PreReleaseApi.md#updateTaskCustomFieldUsingPATCH) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field



## addAffiliateToProgramUsingPOST

> addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let id = "id_example"; // String | id
let affiliateAddToProgramRequest = new KeapCoreServiceCoreSdk.AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
apiInstance.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCommissionProgramUsingPOST

> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST(opts)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateCommissionProgramRequest() // CreateCommissionProgramRequest | Commission Program to insert
};
apiInstance.addCommissionProgramUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignProductCommissionProgramUsingPOST

> ProductCommissionProgram assignProductCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createProductCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateProductCommissionProgramRequest() // CreateProductCommissionProgramRequest | Product Commission Program
};
apiInstance.assignProductCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignSubscriptionCommissionProgramUsingPOST

> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createSubscriptionCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateSubscriptionCommissionProgramRequest() // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
};
apiInstance.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelSubscriptionUsingPOST

> cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let subscriptionId = "subscriptionId_example"; // String | subscription_id
let cancelSubscriptionsRequest = new KeapCoreServiceCoreSdk.CancelSubscriptionsRequest(); // CancelSubscriptionsRequest | cancelSubscriptionsRequest
apiInstance.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription_id | 
 **cancelSubscriptionsRequest** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAffiliateCustomFieldUsingPOST

> CustomFieldMetaData createAffiliateCustomFieldUsingPOST(createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createAffiliateCustomFieldUsingPOST(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDefaultCommissionProgramUsingPOST

> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST(commissionProgramId, opts)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createDefaultCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateDefaultCommissionProgramRequest() // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
};
apiInstance.createDefaultCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDiscountUsingPOST

> CategoryDiscount createDiscountUsingPOST(createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createUpdateDiscountRequest = new KeapCoreServiceCoreSdk.CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
apiInstance.createDiscountUsingPOST(createUpdateDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDiscountUsingPOST1

> ShippingDiscount createDiscountUsingPOST1(createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createShippingDiscountRequest = new KeapCoreServiceCoreSdk.CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request
apiInstance.createDiscountUsingPOST1(createShippingDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShippingDiscountRequest** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFunnelIntegrationUsingPOST

> createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createFunnelIntegrationRequest = new KeapCoreServiceCoreSdk.CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest
apiInstance.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIntegrationTriggerEventUsingPOST

> [FunnelIntegrationTriggerResultDTO] createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createFunnelIntegrationTriggerEvents = new KeapCoreServiceCoreSdk.CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents
apiInstance.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | 

### Return type

[**[FunnelIntegrationTriggerResultDTO]**](FunnelIntegrationTriggerResultDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createLeadSourceUsingPOST

> LeadSource createLeadSourceUsingPOST(opts)

Create a Lead Source

Creates a new Lead Source

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createLeadSourceRequest': new KeapCoreServiceCoreSdk.CreateLeadSourceRequest() // CreateLeadSourceRequest | leadsource
};
apiInstance.createLeadSourceUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNoteCustomFieldUsingPOST1

> CustomFieldMetaData createNoteCustomFieldUsingPOST1(createCustomFieldRequest)

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createNoteCustomFieldUsingPOST1(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityCustomFieldsUsingPOST

> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityStageUsingPOST

> RestOpportunityStage createOpportunityStageUsingPOST(opts)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createOpportunityStageRequest': new KeapCoreServiceCoreSdk.CreateOpportunityStageRequest() // CreateOpportunityStageRequest | opportunity
};
apiInstance.createOpportunityStageUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityUsingPOST1

> RestV2Opportunity createOpportunityUsingPOST1(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createOpportunityRequest': new KeapCoreServiceCoreSdk.CreateOpportunityRequest() // CreateOpportunityRequest | opportunity
};
apiInstance.createOpportunityUsingPOST1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderCustomFieldUsingPOST

> CustomFieldMetaData createOrderCustomFieldUsingPOST(createCustomFieldRequest)

Create an Order&#39;s Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOrderCustomFieldUsingPOST(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderItemsOnOrderUsingPOST1

> RestV2OrderItem createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest)

Create an Order Item

Creates an order item on an existing order.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let orderId = "orderId_example"; // String | order_id
let createRestOrderItemRequest = new KeapCoreServiceCoreSdk.CreateRestOrderItemRequest(); // CreateRestOrderItemRequest | createRestOrderItemRequest
apiInstance.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **createRestOrderItemRequest** | [**CreateRestOrderItemRequest**](CreateRestOrderItemRequest.md)| createRestOrderItemRequest | 

### Return type

[**RestV2OrderItem**](RestV2OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderTotalDiscountUsingPOST

> OrderTotalDiscount createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest)

Create an Order Total Discount

Creates an Order Total Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createOrderTotalDiscountRequest = new KeapCoreServiceCoreSdk.CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request
apiInstance.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md)| request | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderUsingPOST1

> RestV2Order createOrderUsingPOST1(restCreateOrderRequest)

Create an Order

Create a one time Order with Order items.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let restCreateOrderRequest = new KeapCoreServiceCoreSdk.RestCreateOrderRequest(); // RestCreateOrderRequest | createOrderRequest
apiInstance.createOrderUsingPOST1(restCreateOrderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **restCreateOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| createOrderRequest | 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductUsingPOST1

> RestV2Product createProductUsingPOST1(createProductRequest)

Create a Product

Creates a new product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createProductRequest = new KeapCoreServiceCoreSdk.CreateProductRequest(); // CreateProductRequest | createProductRequest
apiInstance.createProductUsingPOST1(createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRedirectLinkUsingPOST

> AffiliateLink createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createOrPatchAffiliateLinkRequest = new KeapCoreServiceCoreSdk.CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
apiInstance.createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createReferralUsingPOST

> Referral createReferralUsingPOST(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createReferralRequest = new KeapCoreServiceCoreSdk.CreateReferralRequest(); // CreateReferralRequest | request
apiInstance.createReferralUsingPOST(createReferralRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSubscriptionCustomFieldUsingPOST

> CustomFieldMetaData createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest)

Create a Subscription&#39;s Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTaskCustomFieldUsingPOST1

> CreateCustomFieldResponse createTaskCustomFieldUsingPOST1(createCustomFieldRequest)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createTaskCustomFieldUsingPOST1(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTaskUsingPOST1

> Task createTaskUsingPOST1(opts)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createTaskRequest': new KeapCoreServiceCoreSdk.CreateTaskRequest() // CreateTaskRequest | task
};
apiInstance.createTaskUsingPOST1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserUsingPOST1

> User createUserUsingPOST1(opts)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \&quot;Invited\&quot; status until the user accepts the invite. \&quot;Inactive\&quot; users will not take up a user license.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'createUserRequestV2': new KeapCoreServiceCoreSdk.CreateUserRequestV2() // CreateUserRequestV2 | user
};
apiInstance.createUserUsingPOST1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequestV2** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAffiliateCommissionProgramUsingDELETE

> deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAffiliateUsingDELETE

> deleteAffiliateUsingDELETE(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let id = "id_example"; // String | id
apiInstance.deleteAffiliateUsingDELETE(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDiscountUsingDELETE

> deleteDiscountUsingDELETE(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteDiscountUsingDELETE(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDiscountUsingDELETE1

> deleteDiscountUsingDELETE1(discountId)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteDiscountUsingDELETE1(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDiscountUsingDELETE2

> deleteDiscountUsingDELETE2(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteDiscountUsingDELETE2(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFunnelIntegrationUsingPOST

> deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let deleteFunnelIntegrationRequest = new KeapCoreServiceCoreSdk.DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest
apiInstance.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOpportunityStageUsingDELETE

> deleteOpportunityStageUsingDELETE(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.deleteOpportunityStageUsingDELETE(stageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityUsingDELETE

> deleteOpportunityUsingDELETE(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.deleteOpportunityUsingDELETE(opportunityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderCustomFieldUsingDELETE

> deleteOrderCustomFieldUsingDELETE(customFieldId)

Delete an Order&#39;s Custom Field

Deletes a Custom Field from Order.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteOrderCustomFieldUsingDELETE(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderTotalDiscountUsingDELETE

> deleteOrderTotalDiscountUsingDELETE(discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteOrderTotalDiscountUsingDELETE(discountId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderUsingDELETE1

> deleteOrderUsingDELETE1(orderId)

Delete an Order

  Deletes an Order&lt;br/&gt;   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.deleteOrderUsingDELETE1(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProductUsingDELETE1

> deleteProductUsingDELETE1(productId)

Delete a Product

Deletes a single product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let productId = "productId_example"; // String | product_id
apiInstance.deleteProductUsingDELETE1(productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRedirectLinkUsingDELETE

> deleteRedirectLinkUsingDELETE(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.deleteRedirectLinkUsingDELETE(redirectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTaskCustomFieldUsingDELETE

> deleteTaskCustomFieldUsingDELETE(customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteTaskCustomFieldUsingDELETE(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTaskUsingDELETE1

> deleteTaskUsingDELETE1(taskId)

Delete a Task

Deletes a single task

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.deleteTaskUsingDELETE1(taskId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionTotalUsingGET

> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
apiInstance.getAffiliateCommissionTotalUsingGET(affiliateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionsUsingGET

> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET(affiliateId, opts)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.getAffiliateCommissionsUsingGET(affiliateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCustomFieldsUsingGET

> ObjectModel getAffiliateCustomFieldsUsingGET()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.getAffiliateCustomFieldsUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCommissionProgramUsingGET

> AffiliateProgramV2 getCommissionProgramUsingGET(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.getCommissionProgramUsingGET(commissionProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactsBySearchTermUsingGET

> ListBasicContactResponse getContactsBySearchTermUsingGET(searchParam)

Search for Contacts

Get a list of Contacts based search parameters.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let searchParam = "searchParam_example"; // String | searchParam
apiInstance.getContactsBySearchTermUsingGET(searchParam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchParam** | **String**| searchParam | 

### Return type

[**ListBasicContactResponse**](ListBasicContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDiscountUsingGET

> CategoryDiscount getDiscountUsingGET(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getDiscountUsingGET(discountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDiscountUsingGET1

> ShippingDiscount getDiscountUsingGET1(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getDiscountUsingGET1(discountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityStageUsingGET

> RestOpportunityStage getOpportunityStageUsingGET(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.getOpportunityStageUsingGET(stageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityUsingGET1

> RestV2Opportunity getOpportunityUsingGET1(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.getOpportunityUsingGET1(opportunityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderTotalDiscountUsingGET

> OrderTotalDiscount getOrderTotalDiscountUsingGET(discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getOrderTotalDiscountUsingGET(discountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderUsingGET1

> RestV2Order getOrderUsingGET1(orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.getOrderUsingGET1(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductUsingGET

> RestV2Product getProductUsingGET(productId)

Get a Product

Gets a single Product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let productId = "productId_example"; // String | product_id
apiInstance.getProductUsingGET(productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 

### Return type

[**RestV2Product**](RestV2Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedirectLinkUsingGET

> AffiliateLink getRedirectLinkUsingGET(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.getRedirectLinkUsingGET(redirectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskUsingGET1

> Task getTaskUsingGET1(taskId)

Retrieve a Task

Retrieves a single task

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let taskId = "taskId_example"; // String | task_id
apiInstance.getTaskUsingGET1(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserByIdUsingGET

> User getUserByIdUsingGET(userId)

Get User

Retrieves a specific User

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserByIdUsingGET(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserInfoUsingGET1

> GetUserInfoResponse getUserInfoUsingGET1()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.getUserInfoUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserInfoResponse**](GetUserInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserSignatureUsingGET1

> String getUserSignatureUsingGET1(userId)

Get User email signature

Retrieves a HTML snippet that contains the user&#39;s email signature.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserSignatureUsingGET1(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateCommissionProgramsUsingGET

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET(opts)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateCommissionProgramsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateLinksUsingGET

> ListAffiliateLinksResponse listAffiliateLinksUsingGET(opts)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateLinksUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCountriesUsingGET2

> ListCountriesResponse listCountriesUsingGET2()

List Countries

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.listCountriesUsingGET2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCountriesResponse**](ListCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDiscountsUsingGET

> ListShippingDiscountsResponse listDiscountsUsingGET(opts)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'fields': ["null"], // [String] | TODO: PAPI-1449
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listDiscountsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| TODO: PAPI-1449 | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLandingPagesUsingGET

> ListLandingPagesResponse listLandingPagesUsingGET(opts)

List Landing Pages

Retrieves a list of all landing pages

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLandingPagesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLandingPagesResponse**](ListLandingPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLeadSourcesUsingGET

> ListLeadSourcesResponse listLeadSourcesUsingGET(opts)

List Lead Sources

Retrieves a list of lead sources

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourcesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchantsUsingGET

> ListRestMerchantResponse listMerchantsUsingGET(opts)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listMerchantsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNoteTemplatesUsingGET

> ListNoteTemplateResponse listNoteTemplatesUsingGET(opts)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listNoteTemplatesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunitiesUsingGET1

> ListOpportunitiesResponse listOpportunitiesUsingGET1(opts)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'fields': ["null"], // [String] | fields
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
  'orderBy': "orderBy_example", // String | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunitiesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| fields | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional] 
 **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityStagesUsingGET

> ListOpportunityStagesResponse listOpportunityStagesUsingGET(opts)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunityStagesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrderPaymentsUsingGET1

> ListOrderPaymentsResponse listOrderPaymentsUsingGET1(orderId, opts)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrderPaymentsUsingGET1(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrderTotalDiscountsUsingGET

> ListOrderTotalDiscountsResponse listOrderTotalDiscountsUsingGET(opts)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrderTotalDiscountsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrdersUsingGET1

> ListOrders listOrdersUsingGET1(opts)

List orders

Retrieves a list of orders

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrdersUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductsUsingGET1

> ListProductsResponse listProductsUsingGET1(opts)

List Products

Retrieves a list of Products

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listProductsUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProvincesForCountryUsingGET

> ListProvincesResponse listProvincesForCountryUsingGET(countryCode)

List a Country&#39;s Provinces

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let countryCode = "countryCode_example"; // String | country_code
apiInstance.listProvincesForCountryUsingGET(countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| country_code | 

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listShippingMethodsUsingGET

> ListRestShippingMethodsResponse listShippingMethodsUsingGET()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.listShippingMethodsUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptionPlansUsingGET

> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET(opts)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptionPlansUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSubscriptionsUsingGET1

> ListSubscriptionsResponse listSubscriptionsUsingGET1(opts)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptionsUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSummariesUsingGET1

> ListAffiliateSummariesResponse listSummariesUsingGET1(opts)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSummariesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTasksUsingGET1

> ListTasksResponse listTasksUsingGET1(opts)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id&#x3D;&#x3D;UNASSIGNED.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'endDueTime': "endDueTime_example", // String | 
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example", // String | Page token
  'startDueTime': "startDueTime_example" // String | 
};
apiInstance.listTasksUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endDueTime** | **String**|  | [optional] 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 
 **startDueTime** | **String**|  | [optional] 

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsersUsingGET1

> ListUserResponse listUsersUsingGET1(opts)

List Users

Retrieves a list of users

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example" // String | Attribute and direction to order items by. E.g. 'given_name desc'
};
apiInstance.listUsersUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] 

### Return type

[**ListUserResponse**](ListUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchDefaultCommissionProgramUsingPATCH

> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchDefaultCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchDefaultCommissionProgramRequest() // PatchDefaultCommissionProgramRequest | Values of the default Commission Program
};
apiInstance.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest**](PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchOrderUsingPATCH

> RestV2Order patchOrderUsingPATCH(orderId, opts)

Update an Order

Updates an Order

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'restV2PatchOrderRequest': new KeapCoreServiceCoreSdk.RestV2PatchOrderRequest() // RestV2PatchOrderRequest | order
};
apiInstance.patchOrderUsingPATCH(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **restV2PatchOrderRequest** | [**RestV2PatchOrderRequest**](RestV2PatchOrderRequest.md)| order | [optional] 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchProductCommissionProgramUsingPATCH

> ProductCommissionProgram patchProductCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchProductCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchProductCommissionProgramRequest() // PatchProductCommissionProgramRequest | Values of the product Commission Program
};
apiInstance.patchProductCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest**](PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSubscriptionCommissionProgramUsingPATCH

> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchSubscriptionCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchSubscriptionCommissionProgramRequest() // PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
};
apiInstance.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest**](PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchTaskUsingPATCH

> UpdateTaskResponse patchTaskUsingPATCH(taskId, opts)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let taskId = "taskId_example"; // String | task_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'createPatchTaskRequest': new KeapCoreServiceCoreSdk.CreatePatchTaskRequest() // CreatePatchTaskRequest | task
};
apiInstance.patchTaskUsingPATCH(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **createPatchTaskRequest** | [**CreatePatchTaskRequest**](CreatePatchTaskRequest.md)| task | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchUserUsingPATCH

> User patchUserUsingPATCH(userId, opts)

Update User

Updates information on a specific User

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let userId = "userId_example"; // String | user_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'patchUserRequestV2': new KeapCoreServiceCoreSdk.PatchUserRequestV2() // PatchUserRequestV2 | user
};
apiInstance.patchUserUsingPATCH(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **patchUserRequestV2** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeAffiliateFromProgramUsingPOST

> removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let id = "id_example"; // String | id
let affiliateRemoveFromProgramRequest = new KeapCoreServiceCoreSdk.AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
apiInstance.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeSubscriptionPlanCommissionFromCommissionsUsingPOST

> removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let commissionId = "commissionId_example"; // String | commission_id
let deleteSubscriptionPlanCommissionRequest = new KeapCoreServiceCoreSdk.DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**| commission_id | 
 **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveNoteModelUsingGET1

> ObjectModel retrieveNoteModelUsingGET1()

Retrieve Note Model

Gets the custom fields for the Note object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.retrieveNoteModelUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveOrderCustomFieldModelUsingGET

> ObjectModel retrieveOrderCustomFieldModelUsingGET()

Retrieve an Order&#39;s Custom Field Model

Gets the custom field&#39;s model for the Order object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.retrieveOrderCustomFieldModelUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveSubscriptionCustomFieldModelUsingGET

> ObjectModel retrieveSubscriptionCustomFieldModelUsingGET()

Retrieve Subscription&#39;s Custom Field Model

Gets the custom field&#39;s model for the Subscription object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.retrieveSubscriptionCustomFieldModelUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveTaskModelUsingGET1

> ObjectModel retrieveTaskModelUsingGET1()

Retrieve Task Model

Get the custom fields for the Task object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
apiInstance.retrieveTaskModelUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAffiliateCustomFieldUsingPATCH

> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDiscountUsingPATCH

> CategoryDiscount updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, opts)

Update a Category Discount

Update a Category Discount.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
let createUpdateDiscountRequest = new KeapCoreServiceCoreSdk.CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 
 **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDiscountUsingPATCH1

> ShippingDiscount updateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, opts)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
let updateShippingDiscountRequest = new KeapCoreServiceCoreSdk.UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 
 **updateShippingDiscountRequest** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNotesCustomFieldUsingPATCH

> CustomFieldMetaData updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityCustomFieldUsingPATCH

> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityStageUsingPATCH

> RestOpportunityStage updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, opts)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let stageId = "stageId_example"; // String | stage_id
let updateOpportunityStageRequest = new KeapCoreServiceCoreSdk.UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 
 **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityUsingPATCH

> RestV2Opportunity updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, opts)

Update an opportunity

Updates specified values of a given opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
let patchOpportunityRequest = new KeapCoreServiceCoreSdk.PatchOpportunityRequest(); // PatchOpportunityRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 
 **patchOpportunityRequest** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrderCustomFieldUsingPATCH

> CustomFieldMetaData updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update an Order&#39;s Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrderTotalDiscountUsingPATCH

> OrderTotalDiscount updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, opts)

Update an Order Total Discount

Updates an Order Total Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let discountId = "discountId_example"; // String | discount_id
let updateOrderTotalDiscountRequest = new KeapCoreServiceCoreSdk.UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | **String**| discount_id | 
 **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRedirectLinkUsingPATCH

> AffiliateLink updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let redirectId = "redirectId_example"; // String | redirect_id
let createOrPatchAffiliateLinkRequest = new KeapCoreServiceCoreSdk.CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
apiInstance.updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 
 **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSubscriptionCustomFieldUsingPATCH

> CustomFieldMetaData updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Subscription&#39;s Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaskCustomFieldUsingPATCH

> CustomFieldMetaData updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Task&#39;s Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PreReleaseApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

