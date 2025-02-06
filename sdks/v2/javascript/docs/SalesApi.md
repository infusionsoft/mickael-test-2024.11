# KeapCoreServiceV2Sdk.SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**setMerchantGatewayAsDefaultUsingPOST**](SalesApi.md#setMerchantGatewayAsDefaultUsingPOST) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account



## setMerchantGatewayAsDefaultUsingPOST

> setMerchantGatewayAsDefaultUsingPOST(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```javascript
import KeapCoreServiceV2Sdk from 'keap-core-service-v2-sdk';

let apiInstance = new KeapCoreServiceV2Sdk.SalesApi();
let id = 789; // Number | id
apiInstance.setMerchantGatewayAsDefaultUsingPOST(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

