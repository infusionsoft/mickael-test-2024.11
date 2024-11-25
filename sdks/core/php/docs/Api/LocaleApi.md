# Com\Keap\Sdk\Core\LocaleApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listCountriesUsingGET2()**](LocaleApi.md#listCountriesUsingGET2) | **GET** /v2/locales/countries | List Countries |
| [**listProvincesForCountryUsingGET()**](LocaleApi.md#listProvincesForCountryUsingGET) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |


## `listCountriesUsingGET2()`

```php
listCountriesUsingGET2(): \Com\Keap\Sdk\Core\Model\ListCountriesResponse
```

List Countries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LocaleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listCountriesUsingGET2();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocaleApi->listCountriesUsingGET2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\ListCountriesResponse**](../Model/ListCountriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listProvincesForCountryUsingGET()`

```php
listProvincesForCountryUsingGET($country_code): \Com\Keap\Sdk\Core\Model\ListProvincesResponse
```

List a Country's Provinces

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\LocaleApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$country_code = 'country_code_example'; // string | country_code

try {
    $result = $apiInstance->listProvincesForCountryUsingGET($country_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocaleApi->listProvincesForCountryUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **country_code** | **string**| country_code | |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListProvincesResponse**](../Model/ListProvincesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
