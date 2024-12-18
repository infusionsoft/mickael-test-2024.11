# keap_sdk_core_client.LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_using_post**](LeadSourcesApi.md#create_lead_source_using_post) | **POST** /v2/leadsources | Create a Lead Source
[**list_lead_sources_using_get**](LeadSourcesApi.md#list_lead_sources_using_get) | **GET** /v2/leadsources | List Lead Sources


# **create_lead_source_using_post**
> LeadSource create_lead_source_using_post(create_lead_source_request=create_lead_source_request)

Create a Lead Source

Creates a new Lead Source

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_lead_source_request import CreateLeadSourceRequest
from keap_sdk_core_client.models.lead_source import LeadSource
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
    api_instance = keap_sdk_core_client.LeadSourcesApi(api_client)
    create_lead_source_request = keap_sdk_core_client.CreateLeadSourceRequest() # CreateLeadSourceRequest | leadsource (optional)

    try:
        # Create a Lead Source
        api_response = api_instance.create_lead_source_using_post(create_lead_source_request=create_lead_source_request)
        print("The response of LeadSourcesApi->create_lead_source_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->create_lead_source_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_lead_source_request** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_lead_sources_using_get**
> ListLeadSourcesResponse list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Lead Sources

Retrieves a list of lead sources

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_lead_sources_response import ListLeadSourcesResponse
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
    api_instance = keap_sdk_core_client.LeadSourcesApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Lead Sources
        api_response = api_instance.list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LeadSourcesApi->list_lead_sources_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourcesApi->list_lead_sources_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

