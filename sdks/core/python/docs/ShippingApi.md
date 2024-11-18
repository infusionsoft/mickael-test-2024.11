# keap_sdk_core_client.ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_shipping_methods_using_get_0**](ShippingApi.md#list_shipping_methods_using_get_0) | **GET** /v2/shipping | List Shipping methods


# **list_shipping_methods_using_get_0**
> ListRestShippingMethodsResponse list_shipping_methods_using_get_0()

List Shipping methods

Retrieves a list of Shipping methods

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_rest_shipping_methods_response import ListRestShippingMethodsResponse
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
    api_instance = keap_sdk_core_client.ShippingApi(api_client)

    try:
        # List Shipping methods
        api_response = api_instance.list_shipping_methods_using_get_0()
        print("The response of ShippingApi->list_shipping_methods_using_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingApi->list_shipping_methods_using_get_0: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

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

