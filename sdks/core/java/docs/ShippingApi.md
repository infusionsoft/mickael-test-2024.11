# ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listShippingMethodsUsingGET**](ShippingApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods |
| [**listShippingMethodsUsingGETWithHttpInfo**](ShippingApi.md#listShippingMethodsUsingGETWithHttpInfo) | **GET** /v2/shipping | List Shipping methods |



## listShippingMethodsUsingGET

> ListRestShippingMethodsResponse listShippingMethodsUsingGET()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ListRestShippingMethodsResponse result = apiInstance.listShippingMethodsUsingGET();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethodsUsingGET");
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

## listShippingMethodsUsingGETWithHttpInfo

> ApiResponse<ListRestShippingMethodsResponse> listShippingMethodsUsingGET listShippingMethodsUsingGETWithHttpInfo()

List Shipping methods

Retrieves a list of Shipping methods

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingApi apiInstance = new ShippingApi(defaultClient);
        try {
            ApiResponse<ListRestShippingMethodsResponse> response = apiInstance.listShippingMethodsUsingGETWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingApi#listShippingMethodsUsingGET");
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

