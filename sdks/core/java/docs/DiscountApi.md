# DiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCategoryDiscountUsingGET_0**](DiscountApi.md#getCategoryDiscountUsingGET_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount |
| [**getCategoryDiscountUsingGET_0WithHttpInfo**](DiscountApi.md#getCategoryDiscountUsingGET_0WithHttpInfo) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount |



## getCategoryDiscountUsingGET_0

> CategoryDiscount getCategoryDiscountUsingGET_0(discountId)

Retrieve Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.DiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        DiscountApi apiInstance = new DiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            CategoryDiscount result = apiInstance.getCategoryDiscountUsingGET_0(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DiscountApi#getCategoryDiscountUsingGET_0");
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
| **discountId** | **String**| discount_id | |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)


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

## getCategoryDiscountUsingGET_0WithHttpInfo

> ApiResponse<CategoryDiscount> getCategoryDiscountUsingGET_0 getCategoryDiscountUsingGET_0WithHttpInfo(discountId)

Retrieve Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.DiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        DiscountApi apiInstance = new DiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.getCategoryDiscountUsingGET_0WithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DiscountApi#getCategoryDiscountUsingGET_0");
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
| **discountId** | **String**| discount_id | |

### Return type

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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

