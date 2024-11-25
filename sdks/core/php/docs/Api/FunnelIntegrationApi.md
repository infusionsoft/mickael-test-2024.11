# Com\Keap\Sdk\Core\FunnelIntegrationApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createFunnelIntegrationUsingPOST()**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**createIntegrationTriggerEventUsingPOST()**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**deleteFunnelIntegrationUsingPOST()**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |


## `createFunnelIntegrationUsingPOST()`

```php
createFunnelIntegrationUsingPOST($create_funnel_integration_request)
```

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FunnelIntegrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_funnel_integration_request = new \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest(); // \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

try {
    $apiInstance->createFunnelIntegrationUsingPOST($create_funnel_integration_request);
} catch (Exception $e) {
    echo 'Exception when calling FunnelIntegrationApi->createFunnelIntegrationUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_funnel_integration_request** | [**\Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationRequest**](../Model/CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createIntegrationTriggerEventUsingPOST()`

```php
createIntegrationTriggerEventUsingPOST($create_funnel_integration_trigger_events): \Com\Keap\Sdk\Core\Model\FunnelIntegrationTriggerResultDTO[]
```

Achieve Funnel Integration Trigger Goal

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FunnelIntegrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_funnel_integration_trigger_events = new \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents(); // \Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

try {
    $result = $apiInstance->createIntegrationTriggerEventUsingPOST($create_funnel_integration_trigger_events);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FunnelIntegrationApi->createIntegrationTriggerEventUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_funnel_integration_trigger_events** | [**\Com\Keap\Sdk\Core\Model\CreateFunnelIntegrationTriggerEvents**](../Model/CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | |

### Return type

[**\Com\Keap\Sdk\Core\Model\FunnelIntegrationTriggerResultDTO[]**](../Model/FunnelIntegrationTriggerResultDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteFunnelIntegrationUsingPOST()`

```php
deleteFunnelIntegrationUsingPOST($delete_funnel_integration_request)
```

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\FunnelIntegrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$delete_funnel_integration_request = new \Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest(); // \Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

try {
    $apiInstance->deleteFunnelIntegrationUsingPOST($delete_funnel_integration_request);
} catch (Exception $e) {
    echo 'Exception when calling FunnelIntegrationApi->deleteFunnelIntegrationUsingPOST: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_funnel_integration_request** | [**\Com\Keap\Sdk\Core\Model\DeleteFunnelIntegrationRequest**](../Model/DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
