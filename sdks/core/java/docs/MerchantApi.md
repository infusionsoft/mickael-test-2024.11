# MerchantApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listMerchantsUsingGET**](MerchantApi.md#listMerchantsUsingGET) | **GET** /v2/merchants | List Merchant accounts |
| [**listMerchantsUsingGETWithHttpInfo**](MerchantApi.md#listMerchantsUsingGETWithHttpInfo) | **GET** /v2/merchants | List Merchant accounts |



## listMerchantsUsingGET

> ListRestMerchantResponse listMerchantsUsingGET(filter, orderBy, pageSize, pageToken)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.MerchantApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        MerchantApi apiInstance = new MerchantApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListRestMerchantResponse result = apiInstance.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MerchantApi#listMerchantsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)


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

## listMerchantsUsingGETWithHttpInfo

> ApiResponse<ListRestMerchantResponse> listMerchantsUsingGET listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.MerchantApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        MerchantApi apiInstance = new MerchantApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListRestMerchantResponse> response = apiInstance.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling MerchantApi#listMerchantsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListRestMerchantResponse**](ListRestMerchantResponse.md)>


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

