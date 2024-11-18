# .OpportunityApi

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
[**updateOpportunityCustomFieldUsingPATCH_0**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH_0) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity\&#39;s Custom Field
[**updateOpportunityUsingPATCH_0**](OpportunityApi.md#updateOpportunityUsingPATCH_0) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity


# **createOpportunityCustomFieldsUsingPOST_0**
> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST_0(customField)

Adds a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityCustomFieldsUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityCustomFieldsUsingPOST0Request = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOpportunityCustomFieldsUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityStageUsingPOST_0**
> RestOpportunityStage createOpportunityStageUsingPOST_0()

Creates a new Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityStageUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityStageUsingPOST0Request = {
    // opportunity (optional)
  opportunityStage: {
    checkListItems: [
      {
        description: "description_example",
        order: 1,
        required: false,
      },
    ],
    name: "Won",
    order: 1,
    probability: 1,
    targetNumberDays: 1,
  },
};

const data = await apiInstance.createOpportunityStageUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityStage** | **CreateOpportunityStageRequest**| opportunity |


### Return type

**RestOpportunityStage**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpportunityUsingPOST1_0**
> RestV2Opportunity createOpportunityUsingPOST1_0()

Creates a new opportunity as the authenticated user.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiCreateOpportunityUsingPOST10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiCreateOpportunityUsingPOST10Request = {
    // opportunity (optional)
  opportunity: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.createOpportunityUsingPOST1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | **CreateOpportunityRequest**| opportunity |


### Return type

**RestV2Opportunity**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOpportunityStageUsingDELETE_0**
> void deleteOpportunityStageUsingDELETE_0()

Deletes the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityStageUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityStageUsingDELETE0Request = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.deleteOpportunityStageUsingDELETE_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


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

# **deleteOpportunityUsingDELETE_0**
> void deleteOpportunityUsingDELETE_0()

Deletes the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiDeleteOpportunityUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiDeleteOpportunityUsingDELETE0Request = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.deleteOpportunityUsingDELETE_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


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

# **getOpportunityStageUsingGET_0**
> RestOpportunityStage getOpportunityStageUsingGET_0()

Retrieves the specified Opportunity Stage

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityStageUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityStageUsingGET0Request = {
    // stage_id
  stageId: "stage_id_example",
};

const data = await apiInstance.getOpportunityStageUsingGET_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | stage_id | defaults to undefined


### Return type

**RestOpportunityStage**

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

# **getOpportunityUsingGET1_0**
> RestV2Opportunity getOpportunityUsingGET1_0()

Retrieves the specified Opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiGetOpportunityUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiGetOpportunityUsingGET10Request = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
};

const data = await apiInstance.getOpportunityUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined


### Return type

**RestV2Opportunity**

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

# **listOpportunitiesUsingGET1_0**
> ListOpportunitiesResponse listOpportunitiesUsingGET1_0()

Retrieves a list of all Opportunities.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunitiesUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunitiesUsingGET10Request = {
    // fields (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  (optional)
  filter: "filter_example",
    // Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunitiesUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | fields | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunitiesResponse**

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

# **listOpportunityStagesUsingGET_0**
> ListOpportunityStagesResponse listOpportunityStagesUsingGET_0()

Retrieves a list of Opportunity Stages.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiListOpportunityStagesUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiListOpportunityStagesUsingGET0Request = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOpportunityStagesUsingGET_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOpportunityStagesResponse**

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

# **updateOpportunityCustomFieldUsingPATCH_0**
> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH_0(request)

Updates a custom field of the specified type and options to the Opportunity object.

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityCustomFieldUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityCustomFieldUsingPATCH0Request = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOpportunityCustomFieldUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOpportunityUsingPATCH_0**
> RestV2Opportunity updateOpportunityUsingPATCH_0(request)

Updates specified values of a given opportunity

### Example


```typescript
import { createConfiguration, OpportunityApi } from '';
import type { OpportunityApiUpdateOpportunityUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OpportunityApi(configuration);

const request: OpportunityApiUpdateOpportunityUsingPATCH0Request = {
    // opportunity_id
  opportunityId: "opportunity_id_example",
    // request
  request: {
    affiliateId: "affiliateId_example",
    contactId: "contactId_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    estimatedCloseTime: "estimatedCloseTime_example",
    includeInForecast: true,
    nextActionNotes: "nextActionNotes_example",
    nextActionTime: "nextActionTime_example",
    opportunityNotes: "opportunityNotes_example",
    opportunityTitle: "opportunityTitle_example",
    projectedRevenueHigh: 3.14,
    projectedRevenueLow: 3.14,
    stageId: "stageId_example",
    userId: "userId_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "opportunity_title",
  ],
};

const data = await apiInstance.updateOpportunityUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **PatchOpportunityRequest**| request |
 **opportunityId** | [**string**] | opportunity_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**RestV2Opportunity**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


