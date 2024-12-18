# KeapCoreServiceCoreSdk.SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscriptionUsingPOST**](SubscriptionsApi.md#cancelSubscriptionUsingPOST) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**createSubscriptionCustomFieldUsingPOST**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field
[**createSubscriptionV2UsingPOST**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription
[**listSubscriptionsUsingGET1**](SubscriptionsApi.md#listSubscriptionsUsingGET1) | **GET** /v2/subscriptions | List Subscriptions
[**retrieveSubscriptionCustomFieldModelUsingGET**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model
[**updateSubscriptionCustomFieldUsingPATCH**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field



## cancelSubscriptionUsingPOST

> cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
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


## createSubscriptionCustomFieldUsingPOST

> CustomFieldMetaData createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest)

Create a Subscription&#39;s Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
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


## createSubscriptionV2UsingPOST

> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
let createSubscriptionV2 = new KeapCoreServiceCoreSdk.CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
apiInstance.createSubscriptionV2UsingPOST(createSubscriptionV2).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | 

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listSubscriptionsUsingGET1

> ListSubscriptionsResponse listSubscriptionsUsingGET1(opts)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
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


## retrieveSubscriptionCustomFieldModelUsingGET

> ObjectModel retrieveSubscriptionCustomFieldModelUsingGET()

Retrieve Subscription&#39;s Custom Field Model

Gets the custom field&#39;s model for the Subscription object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
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


## updateSubscriptionCustomFieldUsingPATCH

> CustomFieldMetaData updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Subscription&#39;s Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.SubscriptionsApi();
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

