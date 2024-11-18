# keap_sdk_core_client.DiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_category_discount_using_get_0**](DiscountApi.md#get_category_discount_using_get_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount


# **get_category_discount_using_get_0**
> CategoryDiscount get_category_discount_using_get_0(discount_id)

Retrieve Category Discount

Retrieves a single Category Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.category_discount import CategoryDiscount
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
    api_instance = keap_sdk_core_client.DiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve Category Discount
        api_response = api_instance.get_category_discount_using_get_0(discount_id)
        print("The response of DiscountApi->get_category_discount_using_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountApi->get_category_discount_using_get_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

