# ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReferralUsingPOST_0**](ReferralApi.md#createReferralUsingPOST_0) | **POST** /v2/referrals | Create a Referral |
| [**createReferralUsingPOST_0WithHttpInfo**](ReferralApi.md#createReferralUsingPOST_0WithHttpInfo) | **POST** /v2/referrals | Create a Referral |



## createReferralUsingPOST_0

> Referral createReferralUsingPOST_0(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest request = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            Referral result = apiInstance.createReferralUsingPOST_0(request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferralUsingPOST_0");
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
| **request** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | |

### Return type

[**Referral**](Referral.md)


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

## createReferralUsingPOST_0WithHttpInfo

> ApiResponse<Referral> createReferralUsingPOST_0 createReferralUsingPOST_0WithHttpInfo(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest request = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            ApiResponse<Referral> response = apiInstance.createReferralUsingPOST_0WithHttpInfo(request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferralUsingPOST_0");
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
| **request** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | |

### Return type

ApiResponse<[**Referral**](Referral.md)>


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

