# keap_sdk_core_client.OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_custom_field_using_post_0**](OrdersApi.md#create_order_custom_field_using_post_0) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**create_order_items_on_order_using_post1_0**](OrdersApi.md#create_order_items_on_order_using_post1_0) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**create_order_using_post1_0**](OrdersApi.md#create_order_using_post1_0) | **POST** /v2/orders | Create an Order
[**create_payment_on_order_using_post1**](OrdersApi.md#create_payment_on_order_using_post1) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**delete_order_using_delete1_0**](OrdersApi.md#delete_order_using_delete1_0) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**get_order_using_get1_0**](OrdersApi.md#get_order_using_get1_0) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**list_orders_using_get1_0**](OrdersApi.md#list_orders_using_get1_0) | **GET** /v2/orders | List orders
[**retrieve_order_custom_field_model_using_get_0**](OrdersApi.md#retrieve_order_custom_field_model_using_get_0) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**update_order_custom_field_using_patch_0**](OrdersApi.md#update_order_custom_field_using_patch_0) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field


# **create_order_custom_field_using_post_0**
> CustomFieldMetaData create_order_custom_field_using_post_0(custom_field)

Create an Order's Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_sdk_core_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Order's Custom Field
        api_response = api_instance.create_order_custom_field_using_post_0(custom_field)
        print("The response of OrdersApi->create_order_custom_field_using_post_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_custom_field_using_post_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

# **create_order_items_on_order_using_post1_0**
> RestV2OrderItem create_order_items_on_order_using_post1_0(order_id, create_rest_order_item_request)

Create an Order Item

Creates an order item on an existing order.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_rest_order_item_request import CreateRestOrderItemRequest
from keap_sdk_core_client.models.rest_v2_order_item import RestV2OrderItem
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_rest_order_item_request = keap_sdk_core_client.CreateRestOrderItemRequest() # CreateRestOrderItemRequest | createRestOrderItemRequest

    try:
        # Create an Order Item
        api_response = api_instance.create_order_items_on_order_using_post1_0(order_id, create_rest_order_item_request)
        print("The response of OrdersApi->create_order_items_on_order_using_post1_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_items_on_order_using_post1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **create_rest_order_item_request** | [**CreateRestOrderItemRequest**](CreateRestOrderItemRequest.md)| createRestOrderItemRequest | 

### Return type

[**RestV2OrderItem**](RestV2OrderItem.md)

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

# **create_order_using_post1_0**
> RestV2Order create_order_using_post1_0(create_order_request)

Create an Order

Create a one time Order with Order items.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_create_order_request import RestCreateOrderRequest
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    create_order_request = keap_sdk_core_client.RestCreateOrderRequest() # RestCreateOrderRequest | createOrderRequest

    try:
        # Create an Order
        api_response = api_instance.create_order_using_post1_0(create_order_request)
        print("The response of OrdersApi->create_order_using_post1_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_using_post1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_request** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| createOrderRequest | 

### Return type

[**RestV2Order**](RestV2Order.md)

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

# **create_payment_on_order_using_post1**
> PaymentResult create_payment_on_order_using_post1(order_id, create_payment_request)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_payment_request import CreatePaymentRequest
from keap_sdk_core_client.models.payment_result import PaymentResult
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_payment_request = keap_sdk_core_client.CreatePaymentRequest() # CreatePaymentRequest | createPaymentRequest

    try:
        # Create a Payment
        api_response = api_instance.create_payment_on_order_using_post1(order_id, create_payment_request)
        print("The response of OrdersApi->create_payment_on_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_payment_on_order_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| createPaymentRequest | 

### Return type

[**PaymentResult**](PaymentResult.md)

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

# **delete_order_using_delete1_0**
> delete_order_using_delete1_0(order_id)

Delete an Order

  Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 

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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id

    try:
        # Delete an Order
        api_instance.delete_order_using_delete1_0(order_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_using_delete1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 

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

# **get_order_using_get1_0**
> RestV2Order get_order_using_get1_0(order_id)

Retrieve an Order

Retrieves a single Order for a given order id

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id

    try:
        # Retrieve an Order
        api_response = api_instance.get_order_using_get1_0(order_id)
        print("The response of OrdersApi->get_order_using_get1_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->get_order_using_get1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 

### Return type

[**RestV2Order**](RestV2Order.md)

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

# **list_orders_using_get1_0**
> ListOrders list_orders_using_get1_0(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List orders

Retrieves a list of orders

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_orders import ListOrders
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List orders
        api_response = api_instance.list_orders_using_get1_0(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrdersApi->list_orders_using_get1_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_orders_using_get1_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

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

# **retrieve_order_custom_field_model_using_get_0**
> ObjectModel retrieve_order_custom_field_model_using_get_0()

Retrieve an Order's Custom Field Model

Gets the custom field's model for the Order object

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.object_model import ObjectModel
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)

    try:
        # Retrieve an Order's Custom Field Model
        api_response = api_instance.retrieve_order_custom_field_model_using_get_0()
        print("The response of OrdersApi->retrieve_order_custom_field_model_using_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->retrieve_order_custom_field_model_using_get_0: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

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

# **update_order_custom_field_using_patch_0**
> CustomFieldMetaData update_order_custom_field_using_patch_0(custom_field_id, request, update_mask=update_mask)

Update an Order's Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_sdk_core_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order's Custom Field
        api_response = api_instance.update_order_custom_field_using_patch_0(custom_field_id, request, update_mask=update_mask)
        print("The response of OrdersApi->update_order_custom_field_using_patch_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order_custom_field_using_patch_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

