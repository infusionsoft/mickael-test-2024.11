# keap_sdk_core_client.FreeTrialDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_discount_using_delete1_0**](FreeTrialDiscountApi.md#delete_discount_using_delete1_0) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount


# **delete_discount_using_delete1_0**
> delete_discount_using_delete1_0(discount_id)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example


```python
import keap_sdk_core_client
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
    api_instance = keap_sdk_core_client.FreeTrialDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Free Trial Discount
        api_instance.delete_discount_using_delete1_0(discount_id)
    except Exception as e:
        print("Exception when calling FreeTrialDiscountApi->delete_discount_using_delete1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

