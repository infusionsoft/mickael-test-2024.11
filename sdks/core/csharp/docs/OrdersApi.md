# Keap.Sdk.Core.Api.OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreatePaymentOnOrderUsingPOST1**](OrdersApi.md#createpaymentonorderusingpost1) | **POST** /v2/orders/{order_id}/payments | Create a Payment |

<a id="createpaymentonorderusingpost1"></a>
# **CreatePaymentOnOrderUsingPOST1**
> PaymentResult CreatePaymentOnOrderUsingPOST1 (string orderId, CreatePaymentRequest createPaymentRequest)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreatePaymentOnOrderUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.keap.com/crm/rest";
            var apiInstance = new OrdersApi(config);
            var orderId = "orderId_example";  // string | order_id
            var createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | createPaymentRequest

            try
            {
                // Create a Payment
                PaymentResult result = apiInstance.CreatePaymentOnOrderUsingPOST1(orderId, createPaymentRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrdersApi.CreatePaymentOnOrderUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreatePaymentOnOrderUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Payment
    ApiResponse<PaymentResult> response = apiInstance.CreatePaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrdersApi.CreatePaymentOnOrderUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md) | createPaymentRequest |  |

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

