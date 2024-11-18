# KeapRestApi.LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCountriesUsingGET2_0**](LocaleApi.md#listCountriesUsingGET2_0) | **GET** /v2/locales/countries | List Countries
[**listProvincesForCountryUsingGET_0**](LocaleApi.md#listProvincesForCountryUsingGET_0) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces



## listCountriesUsingGET2_0

> ListCountriesResponse listCountriesUsingGET2_0()

List Countries

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.LocaleApi();
apiInstance.listCountriesUsingGET2_0().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## listProvincesForCountryUsingGET_0

> ListProvincesResponse listProvincesForCountryUsingGET_0(countryCode)

List a Country&#39;s Provinces

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.LocaleApi();
let countryCode = "countryCode_example"; // String | country_code
apiInstance.listProvincesForCountryUsingGET_0(countryCode).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| country_code | 

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

