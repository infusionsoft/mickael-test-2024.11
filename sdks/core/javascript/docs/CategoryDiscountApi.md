# KeapCoreServiceCoreSdk.CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**deleteDiscountUsingDELETE**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getDiscountUsingGET**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**updateDiscountUsingPATCH**](CategoryDiscountApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount



## createDiscountUsingPOST

> CategoryDiscount createDiscountUsingPOST(createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.CategoryDiscountApi();
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


## deleteDiscountUsingDELETE

> deleteDiscountUsingDELETE(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.CategoryDiscountApi();
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


## getDiscountUsingGET

> CategoryDiscount getDiscountUsingGET(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.CategoryDiscountApi();
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


## updateDiscountUsingPATCH

> CategoryDiscount updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, opts)

Update a Category Discount

Update a Category Discount.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.CategoryDiscountApi();
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

