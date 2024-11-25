# KeapCoreServiceCoreSdk.FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**createIntegrationTriggerEventUsingPOST**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**deleteFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.



## createFunnelIntegrationUsingPOST

> createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FunnelIntegrationApi();
let createFunnelIntegrationRequest = new KeapCoreServiceCoreSdk.CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest
apiInstance.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest).then(() => {
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


## createIntegrationTriggerEventUsingPOST

> [FunnelIntegrationTriggerResultDTO] createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FunnelIntegrationApi();
let createFunnelIntegrationTriggerEvents = new KeapCoreServiceCoreSdk.CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents
apiInstance.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents).then((data) => {
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


## deleteFunnelIntegrationUsingPOST

> deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FunnelIntegrationApi();
let deleteFunnelIntegrationRequest = new KeapCoreServiceCoreSdk.DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest
apiInstance.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest).then(() => {
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

