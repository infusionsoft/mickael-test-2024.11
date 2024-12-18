# KeapCoreServiceCoreSdk.FilesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileUsingPOST1**](FilesApi.md#createFileUsingPOST1) | **POST** /v2/files | Create a file
[**deleteFileUsingDELETE1**](FilesApi.md#deleteFileUsingDELETE1) | **DELETE** /v2/files/{file_id} | Delete a file
[**getFileDataUsingGET**](FilesApi.md#getFileDataUsingGET) | **GET** /v2/files/{file_id}:data | Retrieve a file&#39;s data
[**getFileUsingGET1**](FilesApi.md#getFileUsingGET1) | **GET** /v2/files/{file_id} | Retrieve a file
[**listFilesUsingGET1**](FilesApi.md#listFilesUsingGET1) | **GET** /v2/files | List all files
[**updateFileUsingPATCH**](FilesApi.md#updateFileUsingPATCH) | **PATCH** /v2/files/{file_id} | Update a file



## createFileUsingPOST1

> FileMetadata createFileUsingPOST1(createFileRequest)

Create a file

Creates a file and uploads it

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let createFileRequest = new KeapCoreServiceCoreSdk.CreateFileRequest(); // CreateFileRequest | request
apiInstance.createFileUsingPOST1(createFileRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFileRequest** | [**CreateFileRequest**](CreateFileRequest.md)| request | 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## deleteFileUsingDELETE1

> deleteFileUsingDELETE1(fileId)

Delete a file

Deletes a specified file

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.deleteFileUsingDELETE1(fileId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileDataUsingGET

> Blob getFileDataUsingGET(fileId)

Retrieve a file&#39;s data

Retrieves a file&#39;s data

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.getFileDataUsingGET(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileUsingGET1

> FileMetadata getFileUsingGET1(fileId)

Retrieve a file

Retrieves a file

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
apiInstance.getFileUsingGET1(fileId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFilesUsingGET1

> ListFilesResponse listFilesUsingGET1(opts)

List all files

Retrieves all files

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listFilesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListFilesResponse**](ListFilesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFileUsingPATCH

> FileMetadata updateFileUsingPATCH(fileId, updateFileRequest, opts)

Update a file

Updates a file

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.FilesApi();
let fileId = "fileId_example"; // String | file_id
let updateFileRequest = new KeapCoreServiceCoreSdk.UpdateFileRequest(); // UpdateFileRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateFileUsingPATCH(fileId, updateFileRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| file_id | 
 **updateFileRequest** | [**UpdateFileRequest**](UpdateFileRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**FileMetadata**](FileMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

