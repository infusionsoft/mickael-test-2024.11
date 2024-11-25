# keap_sdk_core_client.LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_countries_using_get2**](LocaleApi.md#list_countries_using_get2) | **GET** /v2/locales/countries | List Countries
[**list_provinces_for_country_using_get**](LocaleApi.md#list_provinces_for_country_using_get) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces


# **list_countries_using_get2**
> ListCountriesResponse list_countries_using_get2()

List Countries

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_countries_response import ListCountriesResponse
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.LocaleApi(api_client)

    try:
        # List Countries
        api_response = api_instance.list_countries_using_get2()
        print("The response of LocaleApi->list_countries_using_get2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->list_countries_using_get2: %s\n" % e)
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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_provinces_for_country_using_get**
> ListProvincesResponse list_provinces_for_country_using_get(country_code)

List a Country's Provinces

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_provinces_response import ListProvincesResponse
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.LocaleApi(api_client)
    country_code = 'country_code_example' # str | country_code

    try:
        # List a Country's Provinces
        api_response = api_instance.list_provinces_for_country_using_get(country_code)
        print("The response of LocaleApi->list_provinces_for_country_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->list_provinces_for_country_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| country_code | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

