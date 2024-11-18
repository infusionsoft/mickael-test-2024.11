# .LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCountriesUsingGET2_0**](LocaleApi.md#listCountriesUsingGET2_0) | **GET** /v2/locales/countries | List Countries
[**listProvincesForCountryUsingGET_0**](LocaleApi.md#listProvincesForCountryUsingGET_0) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country\&#39;s Provinces


# **listCountriesUsingGET2_0**
> ListCountriesResponse listCountriesUsingGET2_0()


### Example


```typescript
import { createConfiguration, LocaleApi } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request = {};

const data = await apiInstance.listCountriesUsingGET2_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListCountriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProvincesForCountryUsingGET_0**
> ListProvincesResponse listProvincesForCountryUsingGET_0()


### Example


```typescript
import { createConfiguration, LocaleApi } from '';
import type { LocaleApiListProvincesForCountryUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request: LocaleApiListProvincesForCountryUsingGET0Request = {
    // country_code
  countryCode: "country_code_example",
};

const data = await apiInstance.listProvincesForCountryUsingGET_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | [**string**] | country_code | defaults to undefined


### Return type

**ListProvincesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


