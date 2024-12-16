# keap_sdk_core_client.NoteApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_note_custom_field_using_post1**](NoteApi.md#create_note_custom_field_using_post1) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**create_note_using_post1**](NoteApi.md#create_note_using_post1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**delete_note_using_delete1**](NoteApi.md#delete_note_using_delete1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**get_note_using_get1**](NoteApi.md#get_note_using_get1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**list_note_templates_using_get**](NoteApi.md#list_note_templates_using_get) | **GET** /v2/notes/templates | Retrieve Note Templates
[**list_notes_using_get1**](NoteApi.md#list_notes_using_get1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**retrieve_note_model_using_get1**](NoteApi.md#retrieve_note_model_using_get1) | **GET** /v2/notes/model | Retrieve Note Model
[**update_note_using_patch**](NoteApi.md#update_note_using_patch) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**update_notes_custom_field_using_patch**](NoteApi.md#update_notes_custom_field_using_patch) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field


# **create_note_custom_field_using_post1**
> CustomFieldMetaData create_note_custom_field_using_post1(custom_field)

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Custom Field
        api_response = api_instance.create_note_custom_field_using_post1(custom_field)
        print("The response of NoteApi->create_note_custom_field_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->create_note_custom_field_using_post1: %s\n" % e)
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

# **create_note_using_post1**
> Note create_note_using_post1(contact_id, request)

Create a Note

Creates a new Note.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_note_request import CreateNoteRequest
from keap_sdk_core_client.models.note import Note
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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    request = keap_sdk_core_client.CreateNoteRequest() # CreateNoteRequest | request

    try:
        # Create a Note
        api_response = api_instance.create_note_using_post1(contact_id, request)
        print("The response of NoteApi->create_note_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->create_note_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **request** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | 

### Return type

[**Note**](Note.md)

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

# **delete_note_using_delete1**
> delete_note_using_delete1(contact_id, note_id)

Delete a Note

Deletes the specified Note

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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id

    try:
        # Delete a Note
        api_instance.delete_note_using_delete1(contact_id, note_id)
    except Exception as e:
        print("Exception when calling NoteApi->delete_note_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 

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

# **get_note_using_get1**
> GetNoteResponse get_note_using_get1(contact_id, note_id)

Retrieve a Note

Retrieves the specified Note

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.get_note_response import GetNoteResponse
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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id

    try:
        # Retrieve a Note
        api_response = api_instance.get_note_using_get1(contact_id, note_id)
        print("The response of NoteApi->get_note_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->get_note_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

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

# **list_note_templates_using_get**
> ListNoteTemplateResponse list_note_templates_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_note_template_response import ListNoteTemplateResponse
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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Note Templates
        api_response = api_instance.list_note_templates_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of NoteApi->list_note_templates_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_note_templates_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

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

# **list_notes_using_get1**
> ListNotesResponse list_notes_using_get1(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Notes

Retrieves a list of Notes

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_notes_response import ListNotesResponse
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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Notes
        api_response = api_instance.list_notes_using_get1(contact_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of NoteApi->list_notes_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->list_notes_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

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

# **retrieve_note_model_using_get1**
> ObjectModel retrieve_note_model_using_get1()

Retrieve Note Model

Gets the custom fields for the Note object

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
    api_instance = keap_sdk_core_client.NoteApi(api_client)

    try:
        # Retrieve Note Model
        api_response = api_instance.retrieve_note_model_using_get1()
        print("The response of NoteApi->retrieve_note_model_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->retrieve_note_model_using_get1: %s\n" % e)
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

# **update_note_using_patch**
> UpdateNoteResponse update_note_using_patch(contact_id, note_id, update_note_request, update_mask=update_mask)

Update a Note

Updates a Note for a Contact

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.update_note_request import UpdateNoteRequest
from keap_sdk_core_client.models.update_note_response import UpdateNoteResponse
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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    note_id = 'note_id_example' # str | note_id
    update_note_request = keap_sdk_core_client.UpdateNoteRequest() # UpdateNoteRequest | updateNoteRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Note
        api_response = api_instance.update_note_using_patch(contact_id, note_id, update_note_request, update_mask=update_mask)
        print("The response of NoteApi->update_note_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->update_note_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **note_id** | **str**| note_id | 
 **update_note_request** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

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

# **update_notes_custom_field_using_patch**
> CustomFieldMetaData update_notes_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

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
    api_instance = keap_sdk_core_client.NoteApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_notes_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of NoteApi->update_notes_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NoteApi->update_notes_custom_field_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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

