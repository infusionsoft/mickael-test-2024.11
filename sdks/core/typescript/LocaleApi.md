# .LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCountriesUsingGET2**](LocaleApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries
[**listProvincesForCountryUsingGET**](LocaleApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country\&#39;s Provinces


# **listCountriesUsingGET2**
> ListCountriesResponse listCountriesUsingGET2()


### Example


```typescript
import { createConfiguration, LocaleApi } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request = {};

const data = await apiInstance.listCountriesUsingGET2(request);
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

# **listProvincesForCountryUsingGET**
> ListProvincesResponse listProvincesForCountryUsingGET()


### Example


```typescript
import { createConfiguration, LocaleApi } from '';
import type { LocaleApiListProvincesForCountryUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LocaleApi(configuration);

const request: LocaleApiListProvincesForCountryUsingGETRequest = {
    // country_code
  countryCode: "country_code_example",
};

const data = await apiInstance.listProvincesForCountryUsingGET(request);
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


