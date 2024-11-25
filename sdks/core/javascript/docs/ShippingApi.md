# KeapCoreServiceCoreSdk.ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShippingMethodsUsingGET**](ShippingApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods



## listShippingMethodsUsingGET

> ListRestShippingMethodsResponse listShippingMethodsUsingGET()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ShippingApi();
apiInstance.listShippingMethodsUsingGET().then((data) => {
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

