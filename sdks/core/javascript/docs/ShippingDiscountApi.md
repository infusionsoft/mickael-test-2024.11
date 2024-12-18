# KeapCoreServiceCoreSdk.ShippingDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST1**](ShippingDiscountApi.md#createDiscountUsingPOST1) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**deleteDiscountUsingDELETE2**](ShippingDiscountApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**getDiscountUsingGET1**](ShippingDiscountApi.md#getDiscountUsingGET1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**listDiscountsUsingGET**](ShippingDiscountApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**updateDiscountUsingPATCH1**](ShippingDiscountApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount



## createDiscountUsingPOST1

> ShippingDiscount createDiscountUsingPOST1(createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingDiscountApi();
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


## deleteDiscountUsingDELETE2

> deleteDiscountUsingDELETE2(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingDiscountApi();
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


## getDiscountUsingGET1

> ShippingDiscount getDiscountUsingGET1(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingDiscountApi();
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


## listDiscountsUsingGET

> ListShippingDiscountsResponse listDiscountsUsingGET(opts)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingDiscountApi();
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


## updateDiscountUsingPATCH1

> ShippingDiscount updateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, opts)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingDiscountApi();
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

