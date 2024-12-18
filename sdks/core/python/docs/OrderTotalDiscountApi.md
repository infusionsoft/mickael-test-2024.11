# keap_sdk_core_client.OrderTotalDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_total_discount_using_post**](OrderTotalDiscountApi.md#create_order_total_discount_using_post) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount
[**delete_order_total_discount_using_delete**](OrderTotalDiscountApi.md#delete_order_total_discount_using_delete) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount
[**get_order_total_discount_using_get**](OrderTotalDiscountApi.md#get_order_total_discount_using_get) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount
[**list_order_total_discounts_using_get**](OrderTotalDiscountApi.md#list_order_total_discounts_using_get) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts
[**update_order_total_discount_using_patch**](OrderTotalDiscountApi.md#update_order_total_discount_using_patch) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount


# **create_order_total_discount_using_post**
> OrderTotalDiscount create_order_total_discount_using_post(create_order_total_discount_request)

Create an Order Total Discount

Creates an Order Total Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_order_total_discount_request import CreateOrderTotalDiscountRequest
from keap_sdk_core_client.models.order_total_discount import OrderTotalDiscount
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
    api_instance = keap_sdk_core_client.OrderTotalDiscountApi(api_client)
    create_order_total_discount_request = keap_sdk_core_client.CreateOrderTotalDiscountRequest() # CreateOrderTotalDiscountRequest | request

    try:
        # Create an Order Total Discount
        api_response = api_instance.create_order_total_discount_using_post(create_order_total_discount_request)
        print("The response of OrderTotalDiscountApi->create_order_total_discount_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountApi->create_order_total_discount_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_total_discount_request** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md)| request | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

# **delete_order_total_discount_using_delete**
> delete_order_total_discount_using_delete(discount_id)

Delete an Order Total Discount

Deletes a specified Order Total Discount

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
    api_instance = keap_sdk_core_client.OrderTotalDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete an Order Total Discount
        api_instance.delete_order_total_discount_using_delete(discount_id)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountApi->delete_order_total_discount_using_delete: %s\n" % e)
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

# **get_order_total_discount_using_get**
> OrderTotalDiscount get_order_total_discount_using_get(discount_id)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.order_total_discount import OrderTotalDiscount
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
    api_instance = keap_sdk_core_client.OrderTotalDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve an Order Total Discount
        api_response = api_instance.get_order_total_discount_using_get(discount_id)
        print("The response of OrderTotalDiscountApi->get_order_total_discount_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountApi->get_order_total_discount_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

# **list_order_total_discounts_using_get**
> ListOrderTotalDiscountsResponse list_order_total_discounts_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_order_total_discounts_response import ListOrderTotalDiscountsResponse
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
    api_instance = keap_sdk_core_client.OrderTotalDiscountApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Order Total Discounts
        api_response = api_instance.list_order_total_discounts_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrderTotalDiscountApi->list_order_total_discounts_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountApi->list_order_total_discounts_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

# **update_order_total_discount_using_patch**
> OrderTotalDiscount update_order_total_discount_using_patch(discount_id, update_order_total_discount_request, update_mask=update_mask)

Update an Order Total Discount

Updates an Order Total Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.order_total_discount import OrderTotalDiscount
from keap_sdk_core_client.models.update_order_total_discount_request import UpdateOrderTotalDiscountRequest
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
    api_instance = keap_sdk_core_client.OrderTotalDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id
    update_order_total_discount_request = keap_sdk_core_client.UpdateOrderTotalDiscountRequest() # UpdateOrderTotalDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order Total Discount
        api_response = api_instance.update_order_total_discount_using_patch(discount_id, update_order_total_discount_request, update_mask=update_mask)
        print("The response of OrderTotalDiscountApi->update_order_total_discount_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrderTotalDiscountApi->update_order_total_discount_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **update_order_total_discount_request** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

