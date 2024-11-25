# .FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**createIntegrationTriggerEventUsingPOST**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**deleteFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.


# **createFunnelIntegrationUsingPOST**
> void createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest)

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiCreateFunnelIntegrationUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiCreateFunnelIntegrationUsingPOSTRequest = {
    // createFunnelIntegrationRequest
  createFunnelIntegrationRequest: {
    baseUrl: "baseUrl_example",
    context: "context_example",
    enabled: true,
    funnelIntegrationActions: [
      {
        baseUrl: "baseUrl_example",
        context: "context_example",
        enabled: true,
        iconUrl: "iconUrl_example",
        name: "My Trigger, MyTrigger, My 1 New Very Exciting Trigger",
        schemaFields: [
          {
            label: "My Integration Field",
            name: "my_integration_field",
            type: "String",
          },
        ],
      },
    ],
    funnelIntegrationTriggers: [
      {
        baseUrl: "baseUrl_example",
        context: "context_example",
        enabled: true,
        iconUrl: "iconUrl_example",
        name: "My Trigger, MyTrigger, My 1 New Very Exciting Trigger",
        schemaFields: [
          {
            label: "My Integration Field",
            name: "my_integration_field",
            type: "String",
          },
        ],
      },
    ],
    name: "My Integration, MyIntegration, My 1 New Very Exciting Integration",
  },
};

const data = await apiInstance.createFunnelIntegrationUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationRequest** | **CreateFunnelIntegrationRequest**| createFunnelIntegrationRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createIntegrationTriggerEventUsingPOST**
> Array<FunnelIntegrationTriggerResultDTO> createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents)


### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOSTRequest = {
    // createFunnelIntegrationTriggerEvents
  createFunnelIntegrationTriggerEvents: {
    funnelIntegrationTriggerEvents: [
      {
        contactId: 1,
        oracleId: "oracleId_example",
        schemaData: "schemaData_example",
      },
    ],
  },
};

const data = await apiInstance.createIntegrationTriggerEventUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFunnelIntegrationTriggerEvents** | **CreateFunnelIntegrationTriggerEvents**| createFunnelIntegrationTriggerEvents |


### Return type

**Array<FunnelIntegrationTriggerResultDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFunnelIntegrationUsingPOST**
> void deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest)

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiDeleteFunnelIntegrationUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOSTRequest = {
    // deleteFunnelIntegrationRequest
  deleteFunnelIntegrationRequest: {
    actionNames: [
      "actionNames_example",
    ],
    integrationNames: [
      "integrationNames_example",
    ],
    triggerNames: [
      "triggerNames_example",
    ],
  },
};

const data = await apiInstance.deleteFunnelIntegrationUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFunnelIntegrationRequest** | **DeleteFunnelIntegrationRequest**| deleteFunnelIntegrationRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


