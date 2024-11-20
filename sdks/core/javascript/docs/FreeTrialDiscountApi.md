# KeapRestApi.FreeTrialDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiscountUsingDELETE1_0**](FreeTrialDiscountApi.md#deleteDiscountUsingDELETE1_0) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount



## deleteDiscountUsingDELETE1_0

> deleteDiscountUsingDELETE1_0(discountId)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.FreeTrialDiscountApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.deleteDiscountUsingDELETE1_0(discountId).then(() => {
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

