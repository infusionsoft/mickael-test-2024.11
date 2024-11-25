# keap_sdk_core_client.LandingPagesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_landing_pages_using_get**](LandingPagesApi.md#list_landing_pages_using_get) | **GET** /v2/landingpages | List Landing Pages


# **list_landing_pages_using_get**
> ListLandingPagesResponse list_landing_pages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Landing Pages

Retrieves a list of all landing pages

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_landing_pages_response import ListLandingPagesResponse
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
    api_instance = keap_sdk_core_client.LandingPagesApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Landing Pages
        api_response = api_instance.list_landing_pages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of LandingPagesApi->list_landing_pages_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LandingPagesApi->list_landing_pages_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLandingPagesResponse**](ListLandingPagesResponse.md)

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

