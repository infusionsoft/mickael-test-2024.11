# KeapRestApi.OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOpportunityCustomFieldsUsingPOST_0**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOST_0) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**createOpportunityStageUsingPOST_0**](OpportunityApi.md#createOpportunityStageUsingPOST_0) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**createOpportunityUsingPOST1_0**](OpportunityApi.md#createOpportunityUsingPOST1_0) | **POST** /v2/opportunities | Create an Opportunity
[**deleteOpportunityStageUsingDELETE_0**](OpportunityApi.md#deleteOpportunityStageUsingDELETE_0) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**deleteOpportunityUsingDELETE_0**](OpportunityApi.md#deleteOpportunityUsingDELETE_0) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**getOpportunityStageUsingGET_0**](OpportunityApi.md#getOpportunityStageUsingGET_0) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**getOpportunityUsingGET1_0**](OpportunityApi.md#getOpportunityUsingGET1_0) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**listOpportunitiesUsingGET1_0**](OpportunityApi.md#listOpportunitiesUsingGET1_0) | **GET** /v2/opportunities | List Opportunities
[**listOpportunityStagesUsingGET_0**](OpportunityApi.md#listOpportunityStagesUsingGET_0) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**updateOpportunityCustomFieldUsingPATCH_0**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH_0) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**updateOpportunityUsingPATCH_0**](OpportunityApi.md#updateOpportunityUsingPATCH_0) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity



## createOpportunityCustomFieldsUsingPOST_0

> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST_0(customField)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let customField = new KeapRestApi.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOpportunityCustomFieldsUsingPOST_0(customField).then((data) => {
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


## createOpportunityStageUsingPOST_0

> RestOpportunityStage createOpportunityStageUsingPOST_0(opts)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opts = {
  'opportunityStage': new KeapRestApi.CreateOpportunityStageRequest() // CreateOpportunityStageRequest | opportunity
};
apiInstance.createOpportunityStageUsingPOST_0(opts).then((data) => {
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


## createOpportunityUsingPOST1_0

> RestV2Opportunity createOpportunityUsingPOST1_0(opts)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opts = {
  'opportunity': new KeapRestApi.CreateOpportunityRequest() // CreateOpportunityRequest | opportunity
};
apiInstance.createOpportunityUsingPOST1_0(opts).then((data) => {
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


## deleteOpportunityStageUsingDELETE_0

> deleteOpportunityStageUsingDELETE_0(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.deleteOpportunityStageUsingDELETE_0(stageId).then(() => {
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


## deleteOpportunityUsingDELETE_0

> deleteOpportunityUsingDELETE_0(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.deleteOpportunityUsingDELETE_0(opportunityId).then(() => {
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


## getOpportunityStageUsingGET_0

> RestOpportunityStage getOpportunityStageUsingGET_0(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let stageId = "stageId_example"; // String | stage_id
apiInstance.getOpportunityStageUsingGET_0(stageId).then((data) => {
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


## getOpportunityUsingGET1_0

> RestV2Opportunity getOpportunityUsingGET1_0(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
apiInstance.getOpportunityUsingGET1_0(opportunityId).then((data) => {
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


## listOpportunitiesUsingGET1_0

> ListOpportunitiesResponse listOpportunitiesUsingGET1_0(opts)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opts = {
  'fields': ["null"], // [String] | fields
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
  'orderBy': "orderBy_example", // String | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunitiesUsingGET1_0(opts).then((data) => {
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


## listOpportunityStagesUsingGET_0

> ListOpportunityStagesResponse listOpportunityStagesUsingGET_0(opts)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOpportunityStagesUsingGET_0(opts).then((data) => {
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


## updateOpportunityCustomFieldUsingPATCH_0

> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH_0(customFieldId, request, opts)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapRestApi.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityCustomFieldUsingPATCH_0(customFieldId, request, opts).then((data) => {
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


## updateOpportunityUsingPATCH_0

> RestV2Opportunity updateOpportunityUsingPATCH_0(opportunityId, request, opts)

Update an opportunity

Updates specified values of a given opportunity

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OpportunityApi();
let opportunityId = "opportunityId_example"; // String | opportunity_id
let request = new KeapRestApi.PatchOpportunityRequest(); // PatchOpportunityRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOpportunityUsingPATCH_0(opportunityId, request, opts).then((data) => {
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

