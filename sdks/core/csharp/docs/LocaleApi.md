# Keap.Sdk.Core.Api.LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ListCountriesUsingGET2_0**](LocaleApi.md#listcountriesusingget2_0) | **GET** /v2/locales/countries | List Countries |
| [**ListProvincesForCountryUsingGET_0**](LocaleApi.md#listprovincesforcountryusingget_0) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |

<a id="listcountriesusingget2_0"></a>
# **ListCountriesUsingGET2_0**
> ListCountriesResponse ListCountriesUsingGET2_0 ()

List Countries

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListCountriesUsingGET2_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new LocaleApi(config);

            try
            {
                // List Countries
                ListCountriesResponse result = apiInstance.ListCountriesUsingGET2_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LocaleApi.ListCountriesUsingGET2_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCountriesUsingGET2_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Countries
    ApiResponse<ListCountriesResponse> response = apiInstance.ListCountriesUsingGET2_0WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LocaleApi.ListCountriesUsingGET2_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listprovincesforcountryusingget_0"></a>
# **ListProvincesForCountryUsingGET_0**
> ListProvincesResponse ListProvincesForCountryUsingGET_0 (string countryCode)

List a Country's Provinces

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListProvincesForCountryUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new LocaleApi(config);
            var countryCode = "countryCode_example";  // string | country_code

            try
            {
                // List a Country's Provinces
                ListProvincesResponse result = apiInstance.ListProvincesForCountryUsingGET_0(countryCode);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LocaleApi.ListProvincesForCountryUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProvincesForCountryUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List a Country's Provinces
    ApiResponse<ListProvincesResponse> response = apiInstance.ListProvincesForCountryUsingGET_0WithHttpInfo(countryCode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LocaleApi.ListProvincesForCountryUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **countryCode** | **string** | country_code |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

