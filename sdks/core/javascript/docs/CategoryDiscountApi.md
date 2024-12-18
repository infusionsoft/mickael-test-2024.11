# KeapCoreServiceCoreSdk.CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**deleteDiscountUsingDELETE**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getDiscountUsingGET**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**listCategoryDiscountsUsingGET**](CategoryDiscountApi.md#listCategoryDiscountsUsingGET) | **GET** /v2/discounts/productCategories | List Category Discounts
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


## listCategoryDiscountsUsingGET

> ListCategoryDiscountsResponse listCategoryDiscountsUsingGET(opts)

List Category Discounts

Retrieve a list of Category Discounts.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.CategoryDiscountApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listCategoryDiscountsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)

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

