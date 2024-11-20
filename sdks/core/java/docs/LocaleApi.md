# LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listCountriesUsingGET2_0**](LocaleApi.md#listCountriesUsingGET2_0) | **GET** /v2/locales/countries | List Countries |
| [**listCountriesUsingGET2_0WithHttpInfo**](LocaleApi.md#listCountriesUsingGET2_0WithHttpInfo) | **GET** /v2/locales/countries | List Countries |
| [**listProvincesForCountryUsingGET_0**](LocaleApi.md#listProvincesForCountryUsingGET_0) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |
| [**listProvincesForCountryUsingGET_0WithHttpInfo**](LocaleApi.md#listProvincesForCountryUsingGET_0WithHttpInfo) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |



## listCountriesUsingGET2_0

> ListCountriesResponse listCountriesUsingGET2_0()

List Countries

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ListCountriesResponse result = apiInstance.listCountriesUsingGET2_0();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountriesUsingGET2_0");
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

[**ListCountriesResponse**](ListCountriesResponse.md)


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

## listCountriesUsingGET2_0WithHttpInfo

> ApiResponse<ListCountriesResponse> listCountriesUsingGET2_0 listCountriesUsingGET2_0WithHttpInfo()

List Countries

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ApiResponse<ListCountriesResponse> response = apiInstance.listCountriesUsingGET2_0WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountriesUsingGET2_0");
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

ApiResponse<[**ListCountriesResponse**](ListCountriesResponse.md)>


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


## listProvincesForCountryUsingGET_0

> ListProvincesResponse listProvincesForCountryUsingGET_0(countryCode)

List a Country&#39;s Provinces

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
        try {
            ListProvincesResponse result = apiInstance.listProvincesForCountryUsingGET_0(countryCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountryUsingGET_0");
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
| **countryCode** | **String**| country_code | |

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)


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

## listProvincesForCountryUsingGET_0WithHttpInfo

> ApiResponse<ListProvincesResponse> listProvincesForCountryUsingGET_0 listProvincesForCountryUsingGET_0WithHttpInfo(countryCode)

List a Country&#39;s Provinces

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
        try {
            ApiResponse<ListProvincesResponse> response = apiInstance.listProvincesForCountryUsingGET_0WithHttpInfo(countryCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountryUsingGET_0");
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
| **countryCode** | **String**| country_code | |

### Return type

ApiResponse<[**ListProvincesResponse**](ListProvincesResponse.md)>


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

