# keap_sdk_core_client.CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_discount_using_delete**](CategoryDiscountApi.md#delete_discount_using_delete) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**get_discount_using_get**](CategoryDiscountApi.md#get_discount_using_get) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount


# **delete_discount_using_delete**
> delete_discount_using_delete(discount_id)

Delete a Category Discount

Deletes a specified Category Discount

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
    api_instance = keap_sdk_core_client.CategoryDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Category Discount
        api_instance.delete_discount_using_delete(discount_id)
    except Exception as e:
        print("Exception when calling CategoryDiscountApi->delete_discount_using_delete: %s\n" % e)
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

# **get_discount_using_get**
> CategoryDiscount get_discount_using_get(discount_id)

Retrieve a Category Discount

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
    api_instance = keap_sdk_core_client.CategoryDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Category Discount
        api_response = api_instance.get_discount_using_get(discount_id)
        print("The response of CategoryDiscountApi->get_discount_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountApi->get_discount_using_get: %s\n" % e)
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

