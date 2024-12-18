# .FilesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileUsingPOST1**](FilesApi.md#createFileUsingPOST1) | **POST** /v2/files | Create a file
[**deleteFileUsingDELETE1**](FilesApi.md#deleteFileUsingDELETE1) | **DELETE** /v2/files/{file_id} | Delete a file
[**getFileDataUsingGET**](FilesApi.md#getFileDataUsingGET) | **GET** /v2/files/{file_id}:data | Retrieve a file\&#39;s data
[**getFileUsingGET1**](FilesApi.md#getFileUsingGET1) | **GET** /v2/files/{file_id} | Retrieve a file
[**listFilesUsingGET1**](FilesApi.md#listFilesUsingGET1) | **GET** /v2/files | List all files
[**updateFileUsingPATCH**](FilesApi.md#updateFileUsingPATCH) | **PATCH** /v2/files/{file_id} | Update a file


# **createFileUsingPOST1**
> FileMetadata createFileUsingPOST1(createFileRequest)

Creates a file and uploads it

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiCreateFileUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiCreateFileUsingPOST1Request = {
    // request
  createFileRequest: {
    contactId: "contactId_example",
    fileAssociation: "CONTACT",
    fileName: "fileName_example",
    isPublic: true,
  },
};

const data = await apiInstance.createFileUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFileRequest** | **CreateFileRequest**| request |


### Return type

**FileMetadata**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFileUsingDELETE1**
> void deleteFileUsingDELETE1()

Deletes a specified file

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiDeleteFileUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiDeleteFileUsingDELETE1Request = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.deleteFileUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


### Return type

**void**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFileDataUsingGET**
> string getFileDataUsingGET()

Retrieves a file\'s data

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiGetFileDataUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiGetFileDataUsingGETRequest = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.getFileDataUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


### Return type

**string**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFileUsingGET1**
> FileMetadata getFileUsingGET1()

Retrieves a file

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiGetFileUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiGetFileUsingGET1Request = {
    // file_id
  fileId: "file_id_example",
};

const data = await apiInstance.getFileUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | file_id | defaults to undefined


### Return type

**FileMetadata**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFilesUsingGET1**
> ListFilesResponse listFilesUsingGET1()

Retrieves all files

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiListFilesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiListFilesUsingGET1Request = {
    // Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listFilesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListFilesResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFileUsingPATCH**
> FileMetadata updateFileUsingPATCH(updateFileRequest)

Updates a file

### Example


```typescript
import { createConfiguration, FilesApi } from '';
import type { FilesApiUpdateFileUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FilesApi(configuration);

const request: FilesApiUpdateFileUsingPATCHRequest = {
    // file_id
  fileId: "file_id_example",
    // request
  updateFileRequest: {
    fileName: "fileName_example",
    isPublic: true,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "file",
  ],
};

const data = await apiInstance.updateFileUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFileRequest** | **UpdateFileRequest**| request |
 **fileId** | [**string**] | file_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**FileMetadata**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


