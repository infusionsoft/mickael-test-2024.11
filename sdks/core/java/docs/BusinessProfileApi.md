# BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBusinessProfileUsingGET**](BusinessProfileApi.md#getBusinessProfileUsingGET) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**getBusinessProfileUsingGETWithHttpInfo**](BusinessProfileApi.md#getBusinessProfileUsingGETWithHttpInfo) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**updateBusinessProfileUsingPATCH**](BusinessProfileApi.md#updateBusinessProfileUsingPATCH) | **PATCH** /v2/businessProfile | Update Business Profile |
| [**updateBusinessProfileUsingPATCHWithHttpInfo**](BusinessProfileApi.md#updateBusinessProfileUsingPATCHWithHttpInfo) | **PATCH** /v2/businessProfile | Update Business Profile |



## getBusinessProfileUsingGET

> GetBusinessProfileResponse getBusinessProfileUsingGET()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        try {
            GetBusinessProfileResponse result = apiInstance.getBusinessProfileUsingGET();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#getBusinessProfileUsingGET");
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

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)


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

## getBusinessProfileUsingGETWithHttpInfo

> ApiResponse<GetBusinessProfileResponse> getBusinessProfileUsingGET getBusinessProfileUsingGETWithHttpInfo()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        try {
            ApiResponse<GetBusinessProfileResponse> response = apiInstance.getBusinessProfileUsingGETWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#getBusinessProfileUsingGET");
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

ApiResponse<[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)>


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


## updateBusinessProfileUsingPATCH

> GetBusinessProfileResponse updateBusinessProfileUsingPATCH(updateMask, updateBusinessProfileRequest)

Update Business Profile

Updates Business Profile information.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateBusinessProfileRequest updateBusinessProfileRequest = new UpdateBusinessProfileRequest(); // UpdateBusinessProfileRequest | businessProfile
        try {
            GetBusinessProfileResponse result = apiInstance.updateBusinessProfileUsingPATCH(updateMask, updateBusinessProfileRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#updateBusinessProfileUsingPATCH");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, email, website, phone, address, currency_code, business_goals, business_primary_color, business_secondary_color] |
| **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] |

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)


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
| **404** | Not Found |  -  |

## updateBusinessProfileUsingPATCHWithHttpInfo

> ApiResponse<GetBusinessProfileResponse> updateBusinessProfileUsingPATCH updateBusinessProfileUsingPATCHWithHttpInfo(updateMask, updateBusinessProfileRequest)

Update Business Profile

Updates Business Profile information.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.BusinessProfileApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        BusinessProfileApi apiInstance = new BusinessProfileApi(defaultClient);
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        UpdateBusinessProfileRequest updateBusinessProfileRequest = new UpdateBusinessProfileRequest(); // UpdateBusinessProfileRequest | businessProfile
        try {
            ApiResponse<GetBusinessProfileResponse> response = apiInstance.updateBusinessProfileUsingPATCHWithHttpInfo(updateMask, updateBusinessProfileRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling BusinessProfileApi#updateBusinessProfileUsingPATCH");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, email, website, phone, address, currency_code, business_goals, business_primary_color, business_secondary_color] |
| **updateBusinessProfileRequest** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] |

### Return type

ApiResponse<[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)>


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
| **404** | Not Found |  -  |

