# KeapRestApi.MerchantApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMerchantsUsingGET_0**](MerchantApi.md#listMerchantsUsingGET_0) | **GET** /v2/merchants | List Merchant accounts



## listMerchantsUsingGET_0

> ListRestMerchantResponse listMerchantsUsingGET_0(opts)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.MerchantApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123;account_name=abc`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listMerchantsUsingGET_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

