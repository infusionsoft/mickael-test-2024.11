# KeapRestApi.SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionV2UsingPOST**](SubscriptionPlansApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription
[**listSubscriptionPlansUsingGET_0**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET_0) | **GET** /v2/subscriptionPlans | List Subscription Plans



## createSubscriptionV2UsingPOST

> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.SubscriptionPlansApi();
let createSubscriptionV2 = new KeapRestApi.CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
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


## listSubscriptionPlansUsingGET_0

> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET_0(opts)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.SubscriptionPlansApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSubscriptionPlansUsingGET_0(opts).then((data) => {
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

