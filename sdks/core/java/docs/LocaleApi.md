# LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listCountriesUsingGET2**](LocaleApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries |
| [**listCountriesUsingGET2WithHttpInfo**](LocaleApi.md#listCountriesUsingGET2WithHttpInfo) | **GET** /v2/locales/countries | List Countries |
| [**listProvincesForCountryUsingGET**](LocaleApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |
| [**listProvincesForCountryUsingGETWithHttpInfo**](LocaleApi.md#listProvincesForCountryUsingGETWithHttpInfo) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |



## listCountriesUsingGET2

> ListCountriesResponse listCountriesUsingGET2()

List Countries

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ListCountriesResponse result = apiInstance.listCountriesUsingGET2();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountriesUsingGET2");
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

## listCountriesUsingGET2WithHttpInfo

> ApiResponse<ListCountriesResponse> listCountriesUsingGET2 listCountriesUsingGET2WithHttpInfo()

List Countries

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        try {
            ApiResponse<ListCountriesResponse> response = apiInstance.listCountriesUsingGET2WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listCountriesUsingGET2");
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


## listProvincesForCountryUsingGET

> ListProvincesResponse listProvincesForCountryUsingGET(countryCode)

List a Country&#39;s Provinces

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
        try {
            ListProvincesResponse result = apiInstance.listProvincesForCountryUsingGET(countryCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountryUsingGET");
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

## listProvincesForCountryUsingGETWithHttpInfo

> ApiResponse<ListProvincesResponse> listProvincesForCountryUsingGET listProvincesForCountryUsingGETWithHttpInfo(countryCode)

List a Country&#39;s Provinces

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LocaleApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LocaleApi apiInstance = new LocaleApi(defaultClient);
        String countryCode = "countryCode_example"; // String | country_code
        try {
            ApiResponse<ListProvincesResponse> response = apiInstance.listProvincesForCountryUsingGETWithHttpInfo(countryCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LocaleApi#listProvincesForCountryUsingGET");
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

