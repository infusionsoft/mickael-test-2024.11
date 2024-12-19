# KeapCoreServiceCoreSdk.StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity.
[**delete2**](StagesApi.md#delete2) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant.
[**get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier.
[**list1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand.
[**listStages1**](StagesApi.md#listStages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage.
[**update2**](StagesApi.md#update2) | **PATCH** /v2/stages/{id} | Updates an existing entity.



## create1

> Stage create1(createStageRequest)

Creates a new entity.

Creates a new entity.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let createStageRequest = new KeapCoreServiceCoreSdk.CreateStageRequest(); // CreateStageRequest | the create request
apiInstance.create1(createStageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | 

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete2

> delete2(id, opts)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let id = "id_example"; // String | the stage identifier
let opts = {
  'newStageId': "newStageId_example" // String | the new stage identifier, can be null
};
apiInstance.delete2(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the stage identifier | 
 **newStageId** | **String**| the new stage identifier, can be null | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get1

> Stage get1(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let id = "id_example"; // String | the entity identifier
apiInstance.get1(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the entity identifier | 

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list1

> StageListResponse list1(opts)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.list1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**StageListResponse**](StageListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStages1

> StageDealListResponse listStages1(id, opts)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let id = "id_example"; // String | the stage identifier
let opts = {
  'filter': "filter_example", // String | 
  'pageToken': "pageToken_example", // String | 
  'orderBy': "orderBy_example", // String | 
  'pageSize': 100 // Number | 
};
apiInstance.listStages1(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the stage identifier | 
 **filter** | **String**|  | [optional] 
 **pageToken** | **String**|  | [optional] 
 **orderBy** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] [default to 1000]

### Return type

[**StageDealListResponse**](StageDealListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update2

> Stage update2(id, updateMask, updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.StagesApi();
let id = "id_example"; // String | the entity identifier
let updateMask = ["null"]; // [String] | the fields to update
let updateStageRequest = new KeapCoreServiceCoreSdk.UpdateStageRequest(); // UpdateStageRequest | the update request
apiInstance.update2(id, updateMask, updateStageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the entity identifier | 
 **updateMask** | [**[String]**](String.md)| the fields to update | 
 **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | 

### Return type

[**Stage**](Stage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

