# Keap.Sdk.Core.Api.FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#createfunnelintegrationusingpost_0) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**CreateIntegrationTriggerEventUsingPOST_0**](FunnelIntegrationApi.md#createintegrationtriggereventusingpost_0) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**DeleteFunnelIntegrationUsingPOST_0**](FunnelIntegrationApi.md#deletefunnelintegrationusingpost_0) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |

<a id="createfunnelintegrationusingpost_0"></a>
# **CreateFunnelIntegrationUsingPOST_0**
> void CreateFunnelIntegrationUsingPOST_0 (CreateFunnelIntegrationRequest createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateFunnelIntegrationUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new FunnelIntegrationApi(config);
            var createFunnelIntegrationRequest = new CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

            try
            {
                // Create Funnel Integrations into the app.
                apiInstance.CreateFunnelIntegrationUsingPOST_0(createFunnelIntegrationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FunnelIntegrationApi.CreateFunnelIntegrationUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFunnelIntegrationUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Funnel Integrations into the app.
    apiInstance.CreateFunnelIntegrationUsingPOST_0WithHttpInfo(createFunnelIntegrationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FunnelIntegrationApi.CreateFunnelIntegrationUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md) | createFunnelIntegrationRequest |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createintegrationtriggereventusingpost_0"></a>
# **CreateIntegrationTriggerEventUsingPOST_0**
> List&lt;FunnelIntegrationTriggerResultDTO&gt; CreateIntegrationTriggerEventUsingPOST_0 (CreateFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateIntegrationTriggerEventUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new FunnelIntegrationApi(config);
            var createFunnelIntegrationTriggerEvents = new CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

            try
            {
                // Achieve Funnel Integration Trigger Goal
                List<FunnelIntegrationTriggerResultDTO> result = apiInstance.CreateIntegrationTriggerEventUsingPOST_0(createFunnelIntegrationTriggerEvents);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FunnelIntegrationApi.CreateIntegrationTriggerEventUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateIntegrationTriggerEventUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Achieve Funnel Integration Trigger Goal
    ApiResponse<List<FunnelIntegrationTriggerResultDTO>> response = apiInstance.CreateIntegrationTriggerEventUsingPOST_0WithHttpInfo(createFunnelIntegrationTriggerEvents);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FunnelIntegrationApi.CreateIntegrationTriggerEventUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md) | createFunnelIntegrationTriggerEvents |  |

### Return type

[**List&lt;FunnelIntegrationTriggerResultDTO&gt;**](FunnelIntegrationTriggerResultDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletefunnelintegrationusingpost_0"></a>
# **DeleteFunnelIntegrationUsingPOST_0**
> void DeleteFunnelIntegrationUsingPOST_0 (DeleteFunnelIntegrationRequest deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteFunnelIntegrationUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new FunnelIntegrationApi(config);
            var deleteFunnelIntegrationRequest = new DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

            try
            {
                // Deletes Funnel Integrations from the app.
                apiInstance.DeleteFunnelIntegrationUsingPOST_0(deleteFunnelIntegrationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FunnelIntegrationApi.DeleteFunnelIntegrationUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteFunnelIntegrationUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes Funnel Integrations from the app.
    apiInstance.DeleteFunnelIntegrationUsingPOST_0WithHttpInfo(deleteFunnelIntegrationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FunnelIntegrationApi.DeleteFunnelIntegrationUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md) | deleteFunnelIntegrationRequest |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

