# KeapRestApi.PaymentMethodConfigApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfigUsingPOST**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration



## createPaymentMethodConfigUsingPOST

> PaymentMethodConfig createPaymentMethodConfigUsingPOST(request)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.PaymentMethodConfigApi();
let request = new KeapRestApi.CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request
apiInstance.createPaymentMethodConfigUsingPOST(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

