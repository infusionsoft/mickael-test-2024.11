# .OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentOnOrderUsingPOST1**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment


# **createPaymentOnOrderUsingPOST1**
> PaymentResult createPaymentOnOrderUsingPOST1(createPaymentRequest)

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreatePaymentOnOrderUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreatePaymentOnOrderUsingPOST1Request = {
    // order_id
  orderId: "order_id_example",
    // createPaymentRequest
  createPaymentRequest: {
    applyToCommissions: true,
    date: new Date('1970-01-01T00:00:00.00Z'),
    notes: "notes_example",
    paymentAmount: "paymentAmount_example",
    paymentMethodId: 1,
  },
};

const data = await apiInstance.createPaymentOnOrderUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | **CreatePaymentRequest**| createPaymentRequest |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**PaymentResult**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


