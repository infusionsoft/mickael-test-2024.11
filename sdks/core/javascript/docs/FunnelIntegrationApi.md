# KeapRestApi.FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST_0) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**createIntegrationTriggerEventUsingPOST_0**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST_0) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**deleteFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST_0) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.



## createFunnelIntegrationUsingPOST_0

> createFunnelIntegrationUsingPOST_0(createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.FunnelIntegrationApi();
let createFunnelIntegrationRequest = new KeapRestApi.CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest
apiInstance.createFunnelIntegrationUsingPOST_0(createFunnelIntegrationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIntegrationTriggerEventUsingPOST_0

> [FunnelIntegrationTriggerResultDTO] createIntegrationTriggerEventUsingPOST_0(createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.FunnelIntegrationApi();
let createFunnelIntegrationTriggerEvents = new KeapRestApi.CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents
apiInstance.createIntegrationTriggerEventUsingPOST_0(createFunnelIntegrationTriggerEvents).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | 

### Return type

[**[FunnelIntegrationTriggerResultDTO]**](FunnelIntegrationTriggerResultDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFunnelIntegrationUsingPOST_0

> deleteFunnelIntegrationUsingPOST_0(deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.FunnelIntegrationApi();
let deleteFunnelIntegrationRequest = new KeapRestApi.DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest
apiInstance.deleteFunnelIntegrationUsingPOST_0(deleteFunnelIntegrationRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

