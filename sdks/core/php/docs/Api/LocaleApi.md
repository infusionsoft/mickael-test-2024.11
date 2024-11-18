# Com\Keap\Sdk\Core\LocaleApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listCountriesUsingGET2_0()**](LocaleApi.md#listCountriesUsingGET2_0) | **GET** /v2/locales/countries | List Countries |
| [**listProvincesForCountryUsingGET_0()**](LocaleApi.md#listProvincesForCountryUsingGET_0) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |


## `listCountriesUsingGET2_0()`

```php
listCountriesUsingGET2_0(): \Com\Keap\Sdk\Core\Model\ListCountriesResponse
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
    $result = $apiInstance->listCountriesUsingGET2_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocaleApi->listCountriesUsingGET2_0: ', $e->getMessage(), PHP_EOL;
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

## `listProvincesForCountryUsingGET_0()`

```php
listProvincesForCountryUsingGET_0($country_code): \Com\Keap\Sdk\Core\Model\ListProvincesResponse
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
    $result = $apiInstance->listProvincesForCountryUsingGET_0($country_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LocaleApi->listProvincesForCountryUsingGET_0: ', $e->getMessage(), PHP_EOL;
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
