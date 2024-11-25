# keap_sdk_core_client.FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_funnel_integration_using_post**](FunnelIntegrationApi.md#create_funnel_integration_using_post) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**create_integration_trigger_event_using_post**](FunnelIntegrationApi.md#create_integration_trigger_event_using_post) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**delete_funnel_integration_using_post**](FunnelIntegrationApi.md#delete_funnel_integration_using_post) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.


# **create_funnel_integration_using_post**
> create_funnel_integration_using_post(create_funnel_integration_request)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_funnel_integration_request import CreateFunnelIntegrationRequest
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.FunnelIntegrationApi(api_client)
    create_funnel_integration_request = keap_sdk_core_client.CreateFunnelIntegrationRequest() # CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

    try:
        # Create Funnel Integrations into the app.
        api_instance.create_funnel_integration_using_post(create_funnel_integration_request)
    except Exception as e:
        print("Exception when calling FunnelIntegrationApi->create_funnel_integration_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_funnel_integration_request** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_integration_trigger_event_using_post**
> List[FunnelIntegrationTriggerResultDTO] create_integration_trigger_event_using_post(create_funnel_integration_trigger_events)

Achieve Funnel Integration Trigger Goal

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_funnel_integration_trigger_events import CreateFunnelIntegrationTriggerEvents
from keap_sdk_core_client.models.funnel_integration_trigger_result_dto import FunnelIntegrationTriggerResultDTO
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.FunnelIntegrationApi(api_client)
    create_funnel_integration_trigger_events = keap_sdk_core_client.CreateFunnelIntegrationTriggerEvents() # CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

    try:
        # Achieve Funnel Integration Trigger Goal
        api_response = api_instance.create_integration_trigger_event_using_post(create_funnel_integration_trigger_events)
        print("The response of FunnelIntegrationApi->create_integration_trigger_event_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FunnelIntegrationApi->create_integration_trigger_event_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_funnel_integration_trigger_events** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | 

### Return type

[**List[FunnelIntegrationTriggerResultDTO]**](FunnelIntegrationTriggerResultDTO.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_funnel_integration_using_post**
> delete_funnel_integration_using_post(delete_funnel_integration_request)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.delete_funnel_integration_request import DeleteFunnelIntegrationRequest
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.FunnelIntegrationApi(api_client)
    delete_funnel_integration_request = keap_sdk_core_client.DeleteFunnelIntegrationRequest() # DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

    try:
        # Deletes Funnel Integrations from the app.
        api_instance.delete_funnel_integration_using_post(delete_funnel_integration_request)
    except Exception as e:
        print("Exception when calling FunnelIntegrationApi->delete_funnel_integration_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_funnel_integration_request** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

