# PaymentMethodConfigApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPaymentMethodConfigUsingPOST**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOST) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration |
| [**createPaymentMethodConfigUsingPOSTWithHttpInfo**](PaymentMethodConfigApi.md#createPaymentMethodConfigUsingPOSTWithHttpInfo) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration |



## createPaymentMethodConfigUsingPOST

> PaymentMethodConfig createPaymentMethodConfigUsingPOST(request)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.PaymentMethodConfigApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        PaymentMethodConfigApi apiInstance = new PaymentMethodConfigApi(defaultClient);
        CreatePaymentMethodConfigRequest request = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request
        try {
            PaymentMethodConfig result = apiInstance.createPaymentMethodConfigUsingPOST(request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodConfigApi#createPaymentMethodConfigUsingPOST");
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
| **request** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | |

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## createPaymentMethodConfigUsingPOSTWithHttpInfo

> ApiResponse<PaymentMethodConfig> createPaymentMethodConfigUsingPOST createPaymentMethodConfigUsingPOSTWithHttpInfo(request)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.PaymentMethodConfigApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        PaymentMethodConfigApi apiInstance = new PaymentMethodConfigApi(defaultClient);
        CreatePaymentMethodConfigRequest request = new CreatePaymentMethodConfigRequest(); // CreatePaymentMethodConfigRequest | request
        try {
            ApiResponse<PaymentMethodConfig> response = apiInstance.createPaymentMethodConfigUsingPOSTWithHttpInfo(request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodConfigApi#createPaymentMethodConfigUsingPOST");
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
| **request** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | |

### Return type

ApiResponse<[**PaymentMethodConfig**](PaymentMethodConfig.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

