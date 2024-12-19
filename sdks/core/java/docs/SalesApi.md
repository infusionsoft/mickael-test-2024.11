# SalesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**setMerchantGatewayAsDefaultUsingPOST**](SalesApi.md#setMerchantGatewayAsDefaultUsingPOST) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |
| [**setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo**](SalesApi.md#setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account |



## setMerchantGatewayAsDefaultUsingPOST

> void setMerchantGatewayAsDefaultUsingPOST(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SalesApi apiInstance = new SalesApi(defaultClient);
        Long id = 56L; // Long | id
        try {
            apiInstance.setMerchantGatewayAsDefaultUsingPOST(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#setMerchantGatewayAsDefaultUsingPOST");
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
| **id** | **Long**| id | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo

> ApiResponse<Void> setMerchantGatewayAsDefaultUsingPOST setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id)

Set default Merchant Account

Sets the specified Merchant Account as the default Merchant Account.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SalesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        SalesApi apiInstance = new SalesApi(defaultClient);
        Long id = 56L; // Long | id
        try {
            ApiResponse<Void> response = apiInstance.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SalesApi#setMerchantGatewayAsDefaultUsingPOST");
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
| **id** | **Long**| id | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

