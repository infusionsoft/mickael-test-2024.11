# KeapCoreServiceCoreSdk.ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listProductsUsingGET1**](ProductApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products



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

