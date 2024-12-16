# keap_sdk_core_client.ShippingDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_discount_using_post1**](ShippingDiscountApi.md#create_discount_using_post1) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**delete_discount_using_delete2**](ShippingDiscountApi.md#delete_discount_using_delete2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**get_discount_using_get1**](ShippingDiscountApi.md#get_discount_using_get1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**list_discounts_using_get**](ShippingDiscountApi.md#list_discounts_using_get) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**update_discount_using_patch1**](ShippingDiscountApi.md#update_discount_using_patch1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount


# **create_discount_using_post1**
> ShippingDiscount create_discount_using_post1(request)

Create a Shipping Discount

Creates a Shipping Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_shipping_discount_request import CreateShippingDiscountRequest
from keap_sdk_core_client.models.shipping_discount import ShippingDiscount
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
    api_instance = keap_sdk_core_client.ShippingDiscountApi(api_client)
    request = keap_sdk_core_client.CreateShippingDiscountRequest() # CreateShippingDiscountRequest | request

    try:
        # Create a Shipping Discount
        api_response = api_instance.create_discount_using_post1(request)
        print("The response of ShippingDiscountApi->create_discount_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountApi->create_discount_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

# **delete_discount_using_delete2**
> delete_discount_using_delete2(discount_id)

Delete a Shipping Discount

Deletes a specified Shipping Discount

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
    api_instance = keap_sdk_core_client.ShippingDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Shipping Discount
        api_instance.delete_discount_using_delete2(discount_id)
    except Exception as e:
        print("Exception when calling ShippingDiscountApi->delete_discount_using_delete2: %s\n" % e)
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

# **get_discount_using_get1**
> ShippingDiscount get_discount_using_get1(discount_id)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.shipping_discount import ShippingDiscount
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
    api_instance = keap_sdk_core_client.ShippingDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Shipping Discount
        api_response = api_instance.get_discount_using_get1(discount_id)
        print("The response of ShippingDiscountApi->get_discount_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountApi->get_discount_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

# **list_discounts_using_get**
> ListShippingDiscountsResponse list_discounts_using_get(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_shipping_discounts_response import ListShippingDiscountsResponse
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
    api_instance = keap_sdk_core_client.ShippingDiscountApi(api_client)
    fields = ['fields_example'] # List[str] | TODO: PAPI-1449 (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all Shipping Discounts
        api_response = api_instance.list_discounts_using_get(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ShippingDiscountApi->list_discounts_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountApi->list_discounts_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| TODO: PAPI-1449 | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)

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

# **update_discount_using_patch1**
> ShippingDiscount update_discount_using_patch1(discount_id, request, update_mask=update_mask)

Update a Shipping Discount

Updates a Shipping Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.shipping_discount import ShippingDiscount
from keap_sdk_core_client.models.update_shipping_discount_request import UpdateShippingDiscountRequest
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
    api_instance = keap_sdk_core_client.ShippingDiscountApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id
    request = keap_sdk_core_client.UpdateShippingDiscountRequest() # UpdateShippingDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Shipping Discount
        api_response = api_instance.update_discount_using_patch1(discount_id, request, update_mask=update_mask)
        print("The response of ShippingDiscountApi->update_discount_using_patch1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingDiscountApi->update_discount_using_patch1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **request** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

