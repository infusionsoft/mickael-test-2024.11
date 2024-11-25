# KeapCoreServiceCoreSdk.LocaleApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCountriesUsingGET2**](LocaleApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries
[**listProvincesForCountryUsingGET**](LocaleApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces



## listCountriesUsingGET2

> ListCountriesResponse listCountriesUsingGET2()

List Countries

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LocaleApi();
apiInstance.listCountriesUsingGET2().then((data) => {
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


## listProvincesForCountryUsingGET

> ListProvincesResponse listProvincesForCountryUsingGET(countryCode)

List a Country&#39;s Provinces

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LocaleApi();
let countryCode = "countryCode_example"; // String | country_code
apiInstance.listProvincesForCountryUsingGET(countryCode).then((data) => {
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

