# OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPaymentOnOrderUsingPOST1**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment |
| [**createPaymentOnOrderUsingPOST1WithHttpInfo**](OrdersApi.md#createPaymentOnOrderUsingPOST1WithHttpInfo) | **POST** /v2/orders/{order_id}/payments | Create a Payment |



## createPaymentOnOrderUsingPOST1

> PaymentResult createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrdersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrdersApi apiInstance = new OrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | order_id
        CreatePaymentRequest createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | createPaymentRequest
        try {
            PaymentResult result = apiInstance.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrdersApi#createPaymentOnOrderUsingPOST1");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | **String**| order_id | |
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| createPaymentRequest | |

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

## createPaymentOnOrderUsingPOST1WithHttpInfo

> ApiResponse<PaymentResult> createPaymentOnOrderUsingPOST1 createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrdersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrdersApi apiInstance = new OrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | order_id
        CreatePaymentRequest createPaymentRequest = new CreatePaymentRequest(); // CreatePaymentRequest | createPaymentRequest
        try {
            ApiResponse<PaymentResult> response = apiInstance.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrdersApi#createPaymentOnOrderUsingPOST1");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | **String**| order_id | |
| **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| createPaymentRequest | |

### Return type

ApiResponse<[**PaymentResult**](PaymentResult.md)>


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

