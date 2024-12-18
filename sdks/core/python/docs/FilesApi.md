# keap_sdk_core_client.FilesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_file_using_post1**](FilesApi.md#create_file_using_post1) | **POST** /v2/files | Create a file
[**delete_file_using_delete1**](FilesApi.md#delete_file_using_delete1) | **DELETE** /v2/files/{file_id} | Delete a file
[**get_file_data_using_get**](FilesApi.md#get_file_data_using_get) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data
[**get_file_using_get1**](FilesApi.md#get_file_using_get1) | **GET** /v2/files/{file_id} | Retrieve a file
[**list_files_using_get1**](FilesApi.md#list_files_using_get1) | **GET** /v2/files | List all files
[**update_file_using_patch**](FilesApi.md#update_file_using_patch) | **PATCH** /v2/files/{file_id} | Update a file


# **create_file_using_post1**
> FileMetadata create_file_using_post1(create_file_request)

Create a file

Creates a file and uploads it

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_file_request import CreateFileRequest
from keap_sdk_core_client.models.file_metadata import FileMetadata
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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    create_file_request = keap_sdk_core_client.CreateFileRequest() # CreateFileRequest | request

    try:
        # Create a file
        api_response = api_instance.create_file_using_post1(create_file_request)
        print("The response of FilesApi->create_file_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->create_file_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_file_request** | [**CreateFileRequest**](CreateFileRequest.md)| request | 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_file_using_delete1**
> delete_file_using_delete1(file_id)

Delete a file

Deletes a specified file

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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | file_id

    try:
        # Delete a file
        api_instance.delete_file_using_delete1(file_id)
    except Exception as e:
        print("Exception when calling FilesApi->delete_file_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| file_id | 

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

# **get_file_data_using_get**
> bytearray get_file_data_using_get(file_id)

Retrieve a file's data

Retrieves a file's data

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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | file_id

    try:
        # Retrieve a file's data
        api_response = api_instance.get_file_data_using_get(file_id)
        print("The response of FilesApi->get_file_data_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->get_file_data_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| file_id | 

### Return type

**bytearray**

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

# **get_file_using_get1**
> FileMetadata get_file_using_get1(file_id)

Retrieve a file

Retrieves a file

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.file_metadata import FileMetadata
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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | file_id

    try:
        # Retrieve a file
        api_response = api_instance.get_file_using_get1(file_id)
        print("The response of FilesApi->get_file_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->get_file_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| file_id | 

### Return type

[**FileMetadata**](FileMetadata.md)

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

# **list_files_using_get1**
> ListFilesResponse list_files_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List all files

Retrieves all files

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_files_response import ListFilesResponse
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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List all files
        api_response = api_instance.list_files_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of FilesApi->list_files_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->list_files_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

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

# **update_file_using_patch**
> FileMetadata update_file_using_patch(file_id, update_file_request, update_mask=update_mask)

Update a file

Updates a file

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.file_metadata import FileMetadata
from keap_sdk_core_client.models.update_file_request import UpdateFileRequest
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
    api_instance = keap_sdk_core_client.FilesApi(api_client)
    file_id = 'file_id_example' # str | file_id
    update_file_request = keap_sdk_core_client.UpdateFileRequest() # UpdateFileRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a file
        api_response = api_instance.update_file_using_patch(file_id, update_file_request, update_mask=update_mask)
        print("The response of FilesApi->update_file_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->update_file_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| file_id | 
 **update_file_request** | [**UpdateFileRequest**](UpdateFileRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

