# KeapCoreServiceCoreSdk.SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionV2UsingPOST**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription



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

