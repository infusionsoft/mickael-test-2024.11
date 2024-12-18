# keap_sdk_core_client.LeadSourceCategoriesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_lead_source_category_using_post**](LeadSourceCategoriesApi.md#create_lead_source_category_using_post) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**delete_lead_source_category_using_delete**](LeadSourceCategoriesApi.md#delete_lead_source_category_using_delete) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category
[**get_lead_source_category_using_get**](LeadSourceCategoriesApi.md#get_lead_source_category_using_get) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category


# **create_lead_source_category_using_post**
> LeadSourceCategory create_lead_source_category_using_post(create_update_lead_source_category_request=create_update_lead_source_category_request)

Create a Lead Source Category

Create a Lead Source Category.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_update_lead_source_category_request import CreateUpdateLeadSourceCategoryRequest
from keap_sdk_core_client.models.lead_source_category import LeadSourceCategory
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
    api_instance = keap_sdk_core_client.LeadSourceCategoriesApi(api_client)
    create_update_lead_source_category_request = keap_sdk_core_client.CreateUpdateLeadSourceCategoryRequest() # CreateUpdateLeadSourceCategoryRequest | leadSourceCategory (optional)

    try:
        # Create a Lead Source Category
        api_response = api_instance.create_lead_source_category_using_post(create_update_lead_source_category_request=create_update_lead_source_category_request)
        print("The response of LeadSourceCategoriesApi->create_lead_source_category_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->create_lead_source_category_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_update_lead_source_category_request** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| leadSourceCategory | [optional] 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

# **delete_lead_source_category_using_delete**
> delete_lead_source_category_using_delete(category_id)

Delete a Lead Source Category

Deletes the specified Lead Source Category.

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
    api_instance = keap_sdk_core_client.LeadSourceCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id

    try:
        # Delete a Lead Source Category
        api_instance.delete_lead_source_category_using_delete(category_id)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->delete_lead_source_category_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 

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

# **get_lead_source_category_using_get**
> LeadSourceCategory get_lead_source_category_using_get(category_id)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.lead_source_category import LeadSourceCategory
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
    api_instance = keap_sdk_core_client.LeadSourceCategoriesApi(api_client)
    category_id = 'category_id_example' # str | category_id

    try:
        # Retrieve a Lead Source Category
        api_response = api_instance.get_lead_source_category_using_get(category_id)
        print("The response of LeadSourceCategoriesApi->get_lead_source_category_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LeadSourceCategoriesApi->get_lead_source_category_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| category_id | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

