# .FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST_0) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**createIntegrationTriggerEventUsingPOST_0**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST_0) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**deleteFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST_0) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.


# **createFunnelIntegrationUsingPOST_0**
> void createFunnelIntegrationUsingPOST_0(createFunnelIntegrationRequest)

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiCreateFunnelIntegrationUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiCreateFunnelIntegrationUsingPOST0Request = {
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

const data = await apiInstance.createFunnelIntegrationUsingPOST_0(request);
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

# **createIntegrationTriggerEventUsingPOST_0**
> Array<FunnelIntegrationTriggerResultDTO> createIntegrationTriggerEventUsingPOST_0(createFunnelIntegrationTriggerEvents)


### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOST0Request = {
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

const data = await apiInstance.createIntegrationTriggerEventUsingPOST_0(request);
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

# **deleteFunnelIntegrationUsingPOST_0**
> void deleteFunnelIntegrationUsingPOST_0(deleteFunnelIntegrationRequest)

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example


```typescript
import { createConfiguration, FunnelIntegrationApi } from '';
import type { FunnelIntegrationApiDeleteFunnelIntegrationUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new FunnelIntegrationApi(configuration);

const request: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOST0Request = {
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

const data = await apiInstance.deleteFunnelIntegrationUsingPOST_0(request);
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


