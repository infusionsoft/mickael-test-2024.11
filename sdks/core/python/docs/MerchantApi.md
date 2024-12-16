# keap_sdk_core_client.MerchantApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_merchants_using_get**](MerchantApi.md#list_merchants_using_get) | **GET** /v2/merchants | List Merchant accounts


# **list_merchants_using_get**
> ListRestMerchantResponse list_merchants_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_rest_merchant_response import ListRestMerchantResponse
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
    api_instance = keap_sdk_core_client.MerchantApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Merchant accounts
        api_response = api_instance.list_merchants_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of MerchantApi->list_merchants_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantApi->list_merchants_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)

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

