# SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubscriptionV2UsingPOST**](SubscriptionPlansApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |
| [**createSubscriptionV2UsingPOSTWithHttpInfo**](SubscriptionPlansApi.md#createSubscriptionV2UsingPOSTWithHttpInfo) | **POST** /v2/subscriptions | Create Subscription |
| [**listSubscriptionPlansUsingGET_0**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET_0) | **GET** /v2/subscriptionPlans | List Subscription Plans |
| [**listSubscriptionPlansUsingGET_0WithHttpInfo**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET_0WithHttpInfo) | **GET** /v2/subscriptionPlans | List Subscription Plans |



## createSubscriptionV2UsingPOST

> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

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
        CreateSubscriptionV2 createSubscriptionV2 = new CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
        try {
            RestSubscriptionV2 result = apiInstance.createSubscriptionV2UsingPOST(createSubscriptionV2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#createSubscriptionV2UsingPOST");
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
| **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)


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

## createSubscriptionV2UsingPOSTWithHttpInfo

> ApiResponse<RestSubscriptionV2> createSubscriptionV2UsingPOST createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

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
        CreateSubscriptionV2 createSubscriptionV2 = new CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
        try {
            ApiResponse<RestSubscriptionV2> response = apiInstance.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#createSubscriptionV2UsingPOST");
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
| **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

ApiResponse<[**RestSubscriptionV2**](RestSubscriptionV2.md)>


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


## listSubscriptionPlansUsingGET_0

> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET_0(filter, orderBy, pageSize, pageToken)

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
            ListSubscriptionPlansResponse result = apiInstance.listSubscriptionPlansUsingGET_0(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlansUsingGET_0");
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

## listSubscriptionPlansUsingGET_0WithHttpInfo

> ApiResponse<ListSubscriptionPlansResponse> listSubscriptionPlansUsingGET_0 listSubscriptionPlansUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.listSubscriptionPlansUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionPlansApi#listSubscriptionPlansUsingGET_0");
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

