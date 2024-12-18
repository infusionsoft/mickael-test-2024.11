# LeadScoreApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLeadScoreDetailsUsingGET**](LeadScoreApi.md#getLeadScoreDetailsUsingGET) | **GET** /v2/contact/{contact_id}/leadScore | Retrieve Lead Score of a Contact |
| [**getLeadScoreDetailsUsingGETWithHttpInfo**](LeadScoreApi.md#getLeadScoreDetailsUsingGETWithHttpInfo) | **GET** /v2/contact/{contact_id}/leadScore | Retrieve Lead Score of a Contact |



## getLeadScoreDetailsUsingGET

> LeadScore getLeadScoreDetailsUsingGET(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadScoreApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadScoreApi apiInstance = new LeadScoreApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            LeadScore result = apiInstance.getLeadScoreDetailsUsingGET(contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadScoreApi#getLeadScoreDetailsUsingGET");
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
| **contactId** | **String**| contact_id | |

### Return type

[**LeadScore**](LeadScore.md)


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

## getLeadScoreDetailsUsingGETWithHttpInfo

> ApiResponse<LeadScore> getLeadScoreDetailsUsingGET getLeadScoreDetailsUsingGETWithHttpInfo(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadScoreApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadScoreApi apiInstance = new LeadScoreApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            ApiResponse<LeadScore> response = apiInstance.getLeadScoreDetailsUsingGETWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadScoreApi#getLeadScoreDetailsUsingGET");
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
| **contactId** | **String**| contact_id | |

### Return type

ApiResponse<[**LeadScore**](LeadScore.md)>


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

