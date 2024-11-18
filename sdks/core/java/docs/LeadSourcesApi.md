# LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceUsingPOST_0**](LeadSourcesApi.md#createLeadSourceUsingPOST_0) | **POST** /v2/leadsources | Create a Lead Source |
| [**createLeadSourceUsingPOST_0WithHttpInfo**](LeadSourcesApi.md#createLeadSourceUsingPOST_0WithHttpInfo) | **POST** /v2/leadsources | Create a Lead Source |
| [**listLeadSourcesUsingGET_0**](LeadSourcesApi.md#listLeadSourcesUsingGET_0) | **GET** /v2/leadsources | List Lead Sources |
| [**listLeadSourcesUsingGET_0WithHttpInfo**](LeadSourcesApi.md#listLeadSourcesUsingGET_0WithHttpInfo) | **GET** /v2/leadsources | List Lead Sources |



## createLeadSourceUsingPOST_0

> LeadSource createLeadSourceUsingPOST_0(leadsource)

Create a Lead Source

Creates a new Lead Source

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        CreateLeadSourceRequest leadsource = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | leadsource
        try {
            LeadSource result = apiInstance.createLeadSourceUsingPOST_0(leadsource);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSourceUsingPOST_0");
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
| **leadsource** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] |

### Return type

[**LeadSource**](LeadSource.md)


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

## createLeadSourceUsingPOST_0WithHttpInfo

> ApiResponse<LeadSource> createLeadSourceUsingPOST_0 createLeadSourceUsingPOST_0WithHttpInfo(leadsource)

Create a Lead Source

Creates a new Lead Source

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        CreateLeadSourceRequest leadsource = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | leadsource
        try {
            ApiResponse<LeadSource> response = apiInstance.createLeadSourceUsingPOST_0WithHttpInfo(leadsource);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSourceUsingPOST_0");
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
| **leadsource** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] |

### Return type

ApiResponse<[**LeadSource**](LeadSource.md)>


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


## listLeadSourcesUsingGET_0

> ListLeadSourcesResponse listLeadSourcesUsingGET_0(filter, orderBy, pageSize, pageToken)

List Lead Sources

Retrieves a list of lead sources

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListLeadSourcesResponse result = apiInstance.listLeadSourcesUsingGET_0(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSourcesUsingGET_0");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)


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

## listLeadSourcesUsingGET_0WithHttpInfo

> ApiResponse<ListLeadSourcesResponse> listLeadSourcesUsingGET_0 listLeadSourcesUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken)

List Lead Sources

Retrieves a list of lead sources

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourcesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourcesApi apiInstance = new LeadSourcesApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListLeadSourcesResponse> response = apiInstance.listLeadSourcesUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSourcesUsingGET_0");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)>


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

