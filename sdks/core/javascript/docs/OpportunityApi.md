# KeapCoreServiceCoreSdk.OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunityCustomFieldsUsingPOST**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStageUsingPOST**](OpportunityApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**createOpportunityUsingPOST1**](OpportunityApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity
[**deleteOpportunityStageUsingDELETE**](OpportunityApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**deleteOpportunityUsingDELETE**](OpportunityApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**getOpportunityStageUsingGET**](OpportunityApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityUsingGET1**](OpportunityApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**listOpportunitiesUsingGET1**](OpportunityApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStagesUsingGET**](OpportunityApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunityCustomFieldUsingPATCH**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**updateOpportunityStageUsingPATCH**](OpportunityApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage
[**updateOpportunityUsingPATCH**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity



## createOpportunityCustomFieldsUsingPOST

> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST(customField)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let customField = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOpportunityCustomFieldsUsingPOST(customField).then((data) => {
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


## createOpportunityStageUsingPOST

> RestOpportunityStage createOpportunityStageUsingPOST(opts)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opts = {
  'opportunityStage': new KeapCoreServiceCoreSdk.CreateOpportunityStageRequest() // CreateOpportunityStageRequest | opportunity
};
apiInstance.createOpportunityStageUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityStage** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunityUsingPOST1

> RestV2Opportunity createOpportunityUsingPOST1(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opts = {
  'opportunity': new KeapCoreServiceCoreSdk.CreateOpportunityRequest() // CreateOpportunityRequest | opportunity
};
apiInstance.createOpportunityUsingPOST1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOpportunityStageUsingDELETE

> deleteOpportunityStageUsingDELETE(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.deleteOpportunityStageUsingDELETE(stageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOpportunityUsingDELETE

> deleteOpportunityUsingDELETE(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.deleteOpportunityUsingDELETE(opportunityId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityStageUsingGET

> RestOpportunityStage getOpportunityStageUsingGET(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.getOpportunityStageUsingGET(stageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityUsingGET1

> RestV2Opportunity getOpportunityUsingGET1(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.getOpportunityUsingGET1(opportunityId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunitiesUsingGET1

> ListOpportunitiesResponse listOpportunitiesUsingGET1(opts)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opts = {
  'fields': ["null"], // [String] | fields
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
  'orderBy': "orderBy_example", // String | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunitiesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| fields | [optional] 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional] 
 **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOpportunityStagesUsingGET

> ListOpportunityStagesResponse listOpportunityStagesUsingGET(opts)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunityStagesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOpportunityCustomFieldUsingPATCH

> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH(customFieldId, request, opts)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, opts).then((data) => {
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
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityStageUsingPATCH

> RestOpportunityStage updateOpportunityStageUsingPATCH(stageId, request, opts)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
let request = new KeapCoreServiceCoreSdk.UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityStageUsingPATCH(stageId, request, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | **String**| stage_id | 
 **request** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityUsingPATCH

> RestV2Opportunity updateOpportunityUsingPATCH(opportunityId, request, opts)

Update an opportunity

Updates specified values of a given opportunity

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
let request = new KeapCoreServiceCoreSdk.PatchOpportunityRequest(); // PatchOpportunityRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityUsingPATCH(opportunityId, request, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | **String**| opportunity_id | 
 **request** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

