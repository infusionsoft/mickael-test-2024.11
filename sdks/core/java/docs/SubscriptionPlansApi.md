# SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listSubscriptionPlansUsingGET**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET) | **GET** /v2/subscriptionPlans | List Subscription Plans |
| [**listSubscriptionPlansUsingGETWithHttpInfo**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGETWithHttpInfo) | **GET** /v2/subscriptionPlans | List Subscription Plans |



## listSubscriptionPlansUsingGET

> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListSubscriptionPlansResponse result = apiInstance.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlansUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)


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

## listSubscriptionPlansUsingGETWithHttpInfo

> ApiResponse<ListSubscriptionPlansResponse> listSubscriptionPlansUsingGET listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionPlansApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionPlansApi apiInstance = new SubscriptionPlansApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlansUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)>


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

