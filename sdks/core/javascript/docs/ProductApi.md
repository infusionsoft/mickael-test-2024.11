# KeapCoreServiceCoreSdk.ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustInventoryUsingPOST**](ProductApi.md#adjustInventoryUsingPOST) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**createProductUsingPOST1**](ProductApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product
[**deleteProductUsingDELETE1**](ProductApi.md#deleteProductUsingDELETE1) | **DELETE** /v2/products/{product_id} | Delete a Product
[**getProductUsingGET**](ProductApi.md#getProductUsingGET) | **GET** /v2/products/{product_id} | Get a Product
[**listProductsUsingGET1**](ProductApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products



## adjustInventoryUsingPOST

> RestV2Product adjustInventoryUsingPOST(productId, updateProductInventoryRequest)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ProductApi();
let productId = "productId_example"; // String | product_id
let updateProductInventoryRequest = new KeapCoreServiceCoreSdk.UpdateProductInventoryRequest(); // UpdateProductInventoryRequest | updateProductInventoryRequest
apiInstance.adjustInventoryUsingPOST(productId, updateProductInventoryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| product_id | 
 **updateProductInventoryRequest** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

let apiInstance = new KeapCoreServiceCoreSdk.ProductApi();
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


## deleteProductUsingDELETE1

> deleteProductUsingDELETE1(productId)

Delete a Product

Deletes a single product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ProductApi();
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


## getProductUsingGET

> RestV2Product getProductUsingGET(productId)

Get a Product

Gets a single Product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ProductApi();
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


## listProductsUsingGET1

> ListProductsResponse listProductsUsingGET1(opts)

List Products

Retrieves a list of Products

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ProductApi();
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

