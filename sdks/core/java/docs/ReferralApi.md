# ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReferralUsingPOST**](ReferralApi.md#createReferralUsingPOST) | **POST** /v2/referrals | Create a Referral |
| [**createReferralUsingPOSTWithHttpInfo**](ReferralApi.md#createReferralUsingPOSTWithHttpInfo) | **POST** /v2/referrals | Create a Referral |



## createReferralUsingPOST

> Referral createReferralUsingPOST(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest request = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            Referral result = apiInstance.createReferralUsingPOST(request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferralUsingPOST");
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

## createReferralUsingPOSTWithHttpInfo

> ApiResponse<Referral> createReferralUsingPOST createReferralUsingPOSTWithHttpInfo(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ReferralApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ReferralApi apiInstance = new ReferralApi(defaultClient);
        CreateReferralRequest request = new CreateReferralRequest(); // CreateReferralRequest | request
        try {
            ApiResponse<Referral> response = apiInstance.createReferralUsingPOSTWithHttpInfo(request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReferralApi#createReferralUsingPOST");
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

