# KeapRestApi.NoteApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteCustomFieldUsingPOST1_0**](NoteApi.md#createNoteCustomFieldUsingPOST1_0) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**createNoteUsingPOST1**](NoteApi.md#createNoteUsingPOST1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
[**deleteNoteUsingDELETE1**](NoteApi.md#deleteNoteUsingDELETE1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
[**getNoteUsingGET1**](NoteApi.md#getNoteUsingGET1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
[**listNotesUsingGET1**](NoteApi.md#listNotesUsingGET1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
[**retrieveNoteModelUsingGET1_0**](NoteApi.md#retrieveNoteModelUsingGET1_0) | **GET** /v2/notes/model | Retrieve Note Model
[**updateNoteUsingPATCH**](NoteApi.md#updateNoteUsingPATCH) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
[**updateNotesCustomFieldUsingPATCH_0**](NoteApi.md#updateNotesCustomFieldUsingPATCH_0) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field



## createNoteCustomFieldUsingPOST1_0

> CustomFieldMetaData createNoteCustomFieldUsingPOST1_0(customField)

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let customField = new KeapRestApi.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createNoteCustomFieldUsingPOST1_0(customField).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNoteUsingPOST1

> Note createNoteUsingPOST1(contactId, request)

Create a Note

Creates a new Note.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let request = new KeapRestApi.CreateNoteRequest(); // CreateNoteRequest | request
apiInstance.createNoteUsingPOST1(contactId, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **request** | [**CreateNoteRequest**](CreateNoteRequest.md)| request | 

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNoteUsingDELETE1

> deleteNoteUsingDELETE1(contactId, noteId)

Delete a Note

Deletes the specified Note

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.deleteNoteUsingDELETE1(contactId, noteId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteUsingGET1

> GetNoteResponse getNoteUsingGET1(contactId, noteId)

Retrieve a Note

Retrieves the specified Note

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
apiInstance.getNoteUsingGET1(contactId, noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 

### Return type

[**GetNoteResponse**](GetNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotesUsingGET1

> ListNotesResponse listNotesUsingGET1(contactId, opts)

List Notes

Retrieves a list of Notes

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listNotesUsingGET1(contactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListNotesResponse**](ListNotesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveNoteModelUsingGET1_0

> ObjectModel retrieveNoteModelUsingGET1_0()

Retrieve Note Model

Gets the custom fields for the Note object

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
apiInstance.retrieveNoteModelUsingGET1_0().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## updateNoteUsingPATCH

> UpdateNoteResponse updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts)

Update a Note

Updates a Note for a Contact

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let contactId = "contactId_example"; // String | contact_id
let noteId = "noteId_example"; // String | note_id
let updateNoteRequest = new KeapRestApi.UpdateNoteRequest(); // UpdateNoteRequest | updateNoteRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 
 **noteId** | **String**| note_id | 
 **updateNoteRequest** | [**UpdateNoteRequest**](UpdateNoteRequest.md)| updateNoteRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**UpdateNoteResponse**](UpdateNoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNotesCustomFieldUsingPATCH_0

> CustomFieldMetaData updateNotesCustomFieldUsingPATCH_0(customFieldId, request, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.NoteApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapRestApi.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateNotesCustomFieldUsingPATCH_0(customFieldId, request, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

