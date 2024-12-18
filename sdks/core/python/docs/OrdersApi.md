# keap_sdk_core_client.OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_order_custom_field_using_post**](OrdersApi.md#create_order_custom_field_using_post) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**create_order_items_on_order_using_post1**](OrdersApi.md#create_order_items_on_order_using_post1) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**create_order_using_post1**](OrdersApi.md#create_order_using_post1) | **POST** /v2/orders | Create an Order
[**create_payment_on_order_using_post1**](OrdersApi.md#create_payment_on_order_using_post1) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**delete_order_custom_field_using_delete**](OrdersApi.md#delete_order_custom_field_using_delete) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order&#39;s Custom Field
[**delete_order_using_delete1**](OrdersApi.md#delete_order_using_delete1) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**get_order_using_get1**](OrdersApi.md#get_order_using_get1) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**list_order_payments_using_get1**](OrdersApi.md#list_order_payments_using_get1) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments
[**list_orders_using_get1**](OrdersApi.md#list_orders_using_get1) | **GET** /v2/orders | List orders
[**patch_order_using_patch**](OrdersApi.md#patch_order_using_patch) | **PATCH** /v2/orders/{order_id} | Update an Order
[**retrieve_order_custom_field_model_using_get**](OrdersApi.md#retrieve_order_custom_field_model_using_get) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**update_order_custom_field_using_patch**](OrdersApi.md#update_order_custom_field_using_patch) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field


# **create_order_custom_field_using_post**
> CustomFieldMetaData create_order_custom_field_using_post(create_custom_field_request)

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
    create_custom_field_request = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Order's Custom Field
        api_response = api_instance.create_order_custom_field_using_post(create_custom_field_request)
        print("The response of OrdersApi->create_order_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_custom_field_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

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

# **create_order_items_on_order_using_post1**
> RestV2OrderItem create_order_items_on_order_using_post1(order_id, create_rest_order_item_request)

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
        api_response = api_instance.create_order_items_on_order_using_post1(order_id, create_rest_order_item_request)
        print("The response of OrdersApi->create_order_items_on_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_items_on_order_using_post1: %s\n" % e)
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

# **create_order_using_post1**
> RestV2Order create_order_using_post1(rest_create_order_request)

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
    rest_create_order_request = keap_sdk_core_client.RestCreateOrderRequest() # RestCreateOrderRequest | createOrderRequest

    try:
        # Create an Order
        api_response = api_instance.create_order_using_post1(rest_create_order_request)
        print("The response of OrdersApi->create_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_order_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rest_create_order_request** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| createOrderRequest | 

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

# **delete_order_custom_field_using_delete**
> delete_order_custom_field_using_delete(custom_field_id)

Delete an Order's Custom Field

Deletes a Custom Field from Order.

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
    custom_field_id = 'custom_field_id_example' # str | custom_field_id

    try:
        # Delete an Order's Custom Field
        api_instance.delete_order_custom_field_using_delete(custom_field_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_custom_field_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 

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

# **delete_order_using_delete1**
> delete_order_using_delete1(order_id)

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
        api_instance.delete_order_using_delete1(order_id)
    except Exception as e:
        print("Exception when calling OrdersApi->delete_order_using_delete1: %s\n" % e)
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

# **get_order_using_get1**
> RestV2Order get_order_using_get1(order_id)

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
        api_response = api_instance.get_order_using_get1(order_id)
        print("The response of OrdersApi->get_order_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->get_order_using_get1: %s\n" % e)
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

# **list_order_payments_using_get1**
> ListOrderPaymentsResponse list_order_payments_using_get1(order_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_order_payments_response import ListOrderPaymentsResponse
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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Order Payments
        api_response = api_instance.list_order_payments_using_get1(order_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrdersApi->list_order_payments_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_order_payments_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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

# **list_orders_using_get1**
> ListOrders list_orders_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List orders
        api_response = api_instance.list_orders_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrdersApi->list_orders_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->list_orders_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
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

# **patch_order_using_patch**
> RestV2Order patch_order_using_patch(order_id, update_mask=update_mask, rest_v2_patch_order_request=rest_v2_patch_order_request)

Update an Order

Updates an Order

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
from keap_sdk_core_client.models.rest_v2_patch_order_request import RestV2PatchOrderRequest
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
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    rest_v2_patch_order_request = keap_sdk_core_client.RestV2PatchOrderRequest() # RestV2PatchOrderRequest | order (optional)

    try:
        # Update an Order
        api_response = api_instance.patch_order_using_patch(order_id, update_mask=update_mask, rest_v2_patch_order_request=rest_v2_patch_order_request)
        print("The response of OrdersApi->patch_order_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->patch_order_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **rest_v2_patch_order_request** | [**RestV2PatchOrderRequest**](RestV2PatchOrderRequest.md)| order | [optional] 

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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_order_custom_field_model_using_get**
> ObjectModel retrieve_order_custom_field_model_using_get()

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
        api_response = api_instance.retrieve_order_custom_field_model_using_get()
        print("The response of OrdersApi->retrieve_order_custom_field_model_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->retrieve_order_custom_field_model_using_get: %s\n" % e)
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

# **update_order_custom_field_using_patch**
> CustomFieldMetaData update_order_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

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
    update_custom_field_meta_data_request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order's Custom Field
        api_response = api_instance.update_order_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of OrdersApi->update_order_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->update_order_custom_field_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
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

