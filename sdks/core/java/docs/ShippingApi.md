# ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listShippingMethodsUsingGET_0**](ShippingApi.md#listShippingMethodsUsingGET_0) | **GET** /v2/shipping | List Shipping methods |
| [**listShippingMethodsUsingGET_0WithHttpInfo**](ShippingApi.md#listShippingMethodsUsingGET_0WithHttpInfo) | **GET** /v2/shipping | List Shipping methods |



## listShippingMethodsUsingGET_0

> ListRestShippingMethodsResponse listShippingMethodsUsingGET_0()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ListRestShippingMethodsResponse result = apiInstance.listShippingMethodsUsingGET_0();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethodsUsingGET_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## listShippingMethodsUsingGET_0WithHttpInfo

> ApiResponse<ListRestShippingMethodsResponse> listShippingMethodsUsingGET_0 listShippingMethodsUsingGET_0WithHttpInfo()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ApiResponse<ListRestShippingMethodsResponse> response = apiInstance.listShippingMethodsUsingGET_0WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethodsUsingGET_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)>


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
| **404** | Not Found |  -  |

