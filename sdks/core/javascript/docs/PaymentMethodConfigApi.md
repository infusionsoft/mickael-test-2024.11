# KeapCoreServiceCoreSdk.PaymentMethodConfigApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentMethodConfigUsingPOST**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration



## createPaymentMethodConfigUsingPOST

> PaymentMethodConfig createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.PaymentMethodConfigApi();
let createPaymentMethodConfigRequest = new KeapCoreServiceCoreSdk.CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request
apiInstance.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentMethodConfigRequest** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

