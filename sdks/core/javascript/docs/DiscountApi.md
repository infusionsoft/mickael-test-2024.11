# KeapRestApi.DiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryDiscountUsingGET_0**](DiscountApi.md#getCategoryDiscountUsingGET_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount



## getCategoryDiscountUsingGET_0

> CategoryDiscount getCategoryDiscountUsingGET_0(discountId)

Retrieve Category Discount

Retrieves a single Category Discount

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.DiscountApi();
let discountId = "discountId_example"; // String | discount_id
apiInstance.getCategoryDiscountUsingGET_0(discountId).then((data) => {
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

