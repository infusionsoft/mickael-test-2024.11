# keap_sdk_core_client.CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_discount_using_post**](CategoryDiscountApi.md#create_discount_using_post) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**delete_discount_using_delete**](CategoryDiscountApi.md#delete_discount_using_delete) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**get_discount_using_get**](CategoryDiscountApi.md#get_discount_using_get) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**list_category_discounts_using_get**](CategoryDiscountApi.md#list_category_discounts_using_get) | **GET** /v2/discounts/productCategories | List Category Discounts
[**update_discount_using_patch**](CategoryDiscountApi.md#update_discount_using_patch) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount


# **create_discount_using_post**
> CategoryDiscount create_discount_using_post(create_update_discount_request)

Create a Category Discount

Create a Category Discount.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.category_discount import CategoryDiscount
from keap_sdk_core_client.models.create_update_discount_request import CreateUpdateDiscountRequest
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
    create_update_discount_request = keap_sdk_core_client.CreateUpdateDiscountRequest() # CreateUpdateDiscountRequest | request

    try:
        # Create a Category Discount
        api_response = api_instance.create_discount_using_post(create_update_discount_request)
        print("The response of CategoryDiscountApi->create_discount_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountApi->create_discount_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_discount_request** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

# **list_category_discounts_using_get**
> ListCategoryDiscountsResponse list_category_discounts_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Category Discounts

Retrieve a list of Category Discounts.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_category_discounts_response import ListCategoryDiscountsResponse
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
    filter = 'filter_example' # str | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Category Discounts
        api_response = api_instance.list_category_discounts_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of CategoryDiscountApi->list_category_discounts_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountApi->list_category_discounts_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)

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

# **update_discount_using_patch**
> CategoryDiscount update_discount_using_patch(discount_id, create_update_discount_request, update_mask=update_mask)

Update a Category Discount

Update a Category Discount.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.category_discount import CategoryDiscount
from keap_sdk_core_client.models.create_update_discount_request import CreateUpdateDiscountRequest
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
    create_update_discount_request = keap_sdk_core_client.CreateUpdateDiscountRequest() # CreateUpdateDiscountRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Category Discount
        api_response = api_instance.update_discount_using_patch(discount_id, create_update_discount_request, update_mask=update_mask)
        print("The response of CategoryDiscountApi->update_discount_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryDiscountApi->update_discount_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 
 **create_update_discount_request** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

