# keap_sdk_core_client.ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjust_inventory_using_post**](ProductApi.md#adjust_inventory_using_post) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**create_product_using_post1**](ProductApi.md#create_product_using_post1) | **POST** /v2/products | Create a Product
[**delete_product_using_delete1**](ProductApi.md#delete_product_using_delete1) | **DELETE** /v2/products/{product_id} | Delete a Product
[**get_product_using_get**](ProductApi.md#get_product_using_get) | **GET** /v2/products/{product_id} | Get a Product
[**list_products_using_get1**](ProductApi.md#list_products_using_get1) | **GET** /v2/products | List Products


# **adjust_inventory_using_post**
> RestV2Product adjust_inventory_using_post(product_id, update_product_inventory_request)

Adjust Inventory of a Product

Increase or decrease the quantity of the Product

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_product import RestV2Product
from keap_sdk_core_client.models.update_product_inventory_request import UpdateProductInventoryRequest
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
    api_instance = keap_sdk_core_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | product_id
    update_product_inventory_request = keap_sdk_core_client.UpdateProductInventoryRequest() # UpdateProductInventoryRequest | updateProductInventoryRequest

    try:
        # Adjust Inventory of a Product
        api_response = api_instance.adjust_inventory_using_post(product_id, update_product_inventory_request)
        print("The response of ProductApi->adjust_inventory_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->adjust_inventory_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 
 **update_product_inventory_request** | [**UpdateProductInventoryRequest**](UpdateProductInventoryRequest.md)| updateProductInventoryRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **create_product_using_post1**
> RestV2Product create_product_using_post1(create_product_request)

Create a Product

Creates a new product

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_product_request import CreateProductRequest
from keap_sdk_core_client.models.rest_v2_product import RestV2Product
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
    api_instance = keap_sdk_core_client.ProductApi(api_client)
    create_product_request = keap_sdk_core_client.CreateProductRequest() # CreateProductRequest | createProductRequest

    try:
        # Create a Product
        api_response = api_instance.create_product_using_post1(create_product_request)
        print("The response of ProductApi->create_product_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->create_product_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_product_request** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **delete_product_using_delete1**
> delete_product_using_delete1(product_id)

Delete a Product

Deletes a single product

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
    api_instance = keap_sdk_core_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Delete a Product
        api_instance.delete_product_using_delete1(product_id)
    except Exception as e:
        print("Exception when calling ProductApi->delete_product_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

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

# **get_product_using_get**
> RestV2Product get_product_using_get(product_id)

Get a Product

Gets a single Product

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_product import RestV2Product
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
    api_instance = keap_sdk_core_client.ProductApi(api_client)
    product_id = 'product_id_example' # str | product_id

    try:
        # Get a Product
        api_response = api_instance.get_product_using_get(product_id)
        print("The response of ProductApi->get_product_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->get_product_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| product_id | 

### Return type

[**RestV2Product**](RestV2Product.md)

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

# **list_products_using_get1**
> ListProductsResponse list_products_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Products

Retrieves a list of Products

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_products_response import ListProductsResponse
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
    api_instance = keap_sdk_core_client.ProductApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name    (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Products
        api_response = api_instance.list_products_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ProductApi->list_products_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->list_products_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) name    | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

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

