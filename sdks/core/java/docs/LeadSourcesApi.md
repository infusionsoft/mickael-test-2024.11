# LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceUsingPOST**](LeadSourcesApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadsources | Create a Lead Source |
| [**createLeadSourceUsingPOSTWithHttpInfo**](LeadSourcesApi.md#createLeadSourceUsingPOSTWithHttpInfo) | **POST** /v2/leadsources | Create a Lead Source |
| [**listLeadSourcesUsingGET**](LeadSourcesApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadsources | List Lead Sources |
| [**listLeadSourcesUsingGETWithHttpInfo**](LeadSourcesApi.md#listLeadSourcesUsingGETWithHttpInfo) | **GET** /v2/leadsources | List Lead Sources |



## createLeadSourceUsingPOST

> LeadSource createLeadSourceUsingPOST(createLeadSourceRequest)

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
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | leadsource
        try {
            LeadSource result = apiInstance.createLeadSourceUsingPOST(createLeadSourceRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSourceUsingPOST");
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
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] |

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

## createLeadSourceUsingPOSTWithHttpInfo

> ApiResponse<LeadSource> createLeadSourceUsingPOST createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest)

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
        CreateLeadSourceRequest createLeadSourceRequest = new CreateLeadSourceRequest(); // CreateLeadSourceRequest | leadsource
        try {
            ApiResponse<LeadSource> response = apiInstance.createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#createLeadSourceUsingPOST");
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
| **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] |

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


## listLeadSourcesUsingGET

> ListLeadSourcesResponse listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken)

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
            ListLeadSourcesResponse result = apiInstance.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSourcesUsingGET");
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

## listLeadSourcesUsingGETWithHttpInfo

> ApiResponse<ListLeadSourcesResponse> listLeadSourcesUsingGET listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

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
            ApiResponse<ListLeadSourcesResponse> response = apiInstance.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourcesApi#listLeadSourcesUsingGET");
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

