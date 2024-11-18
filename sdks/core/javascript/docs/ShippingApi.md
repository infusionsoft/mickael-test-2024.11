# KeapRestApi.ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShippingMethodsUsingGET_0**](ShippingApi.md#listShippingMethodsUsingGET_0) | **GET** /v2/shipping | List Shipping methods



## listShippingMethodsUsingGET_0

> ListRestShippingMethodsResponse listShippingMethodsUsingGET_0()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.ShippingApi();
apiInstance.listShippingMethodsUsingGET_0().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

