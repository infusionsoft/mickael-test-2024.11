# .AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateToProgramUsingPOST**](AffiliateApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**addCommissionProgramUsingPOST**](AffiliateApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**createAffiliateCustomFieldUsingPOST**](AffiliateApi.md#createAffiliateCustomFieldUsingPOST) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**createRedirectLinkUsingPOST**](AffiliateApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateUsingDELETE**](AffiliateApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissionsUsingGET**](AffiliateApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateCustomFieldsUsingGET**](AffiliateApi.md#getAffiliateCustomFieldsUsingGET) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**getCommissionProgramUsingGET**](AffiliateApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLinkUsingGET**](AffiliateApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**listAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinksUsingGET**](AffiliateApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listSummariesUsingGET1**](AffiliateApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**patchDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patchProductCommissionProgramUsingPATCH**](AffiliateApi.md#patchProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patchSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**removeAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliateCustomFieldUsingPATCH**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**updateRedirectLinkUsingPATCH**](AffiliateApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link


# **addAffiliateToProgramUsingPOST**
> void addAffiliateToProgramUsingPOST(affiliateAddToProgramRequest)

Assigns an Affiliate to Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateToProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateToProgramUsingPOSTRequest = {
    // id
  id: "id_example",
    // affiliateAddToProgramRequest
  affiliateAddToProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.addAffiliateToProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateAddToProgramRequest** | **AffiliateAddToProgramRequest**| affiliateAddToProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addAffiliateUsingPOST**
> RestAffiliate addAffiliateUsingPOST()

Creates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateUsingPOSTRequest = {
    // Affiliate request to insert (optional)
  createAffiliateRequest: {
    code: "M123",
    contactId: "1",
    name: "Affiliate Name",
    status: "active",
  },
};

const data = await apiInstance.addAffiliateUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | **CreateAffiliateRequest**| Affiliate request to insert |


### Return type

**RestAffiliate**

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

# **addCommissionProgramUsingPOST**
> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST()

Creates an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddCommissionProgramUsingPOSTRequest = {
    // Commission Program to insert (optional)
  createCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
};

const data = await apiInstance.addCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | **CreateCommissionProgramRequest**| Commission Program to insert |


### Return type

**AffiliateCommissionProgramResponse**

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

# **assignProductCommissionProgramUsingPOST**
> ProductCommissionProgram assignProductCommissionProgramUsingPOST()

Assigns a Product Commission Program to a Product

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignProductCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignProductCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Product Commission Program (optional)
  createProductCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.assignProductCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductCommissionProgramRequest** | **CreateProductCommissionProgramRequest**| Product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**ProductCommissionProgram**

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

# **assignSubscriptionCommissionProgramUsingPOST**
> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST()

Assigns a Subscription Commission Program to a Subscription

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Subscription Commission Program (optional)
  createSubscriptionCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.assignSubscriptionCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionCommissionProgramRequest** | **CreateSubscriptionCommissionProgramRequest**| Subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SubscriptionCommissionProgram**

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

# **createAffiliateCustomFieldUsingPOST**
> CustomFieldMetaData createAffiliateCustomFieldUsingPOST(createCustomFieldRequest)

Creates a single Affiliate Custom Field

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateAffiliateCustomFieldUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateAffiliateCustomFieldUsingPOSTRequest = {
    // customField
  createCustomFieldRequest: {
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

const data = await apiInstance.createAffiliateCustomFieldUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | **CreateCustomFieldRequest**| customField |


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

# **createDefaultCommissionProgramUsingPOST**
> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST()

Creates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Values of the Default Commission Program (optional)
  createDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.createDefaultCommissionProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDefaultCommissionProgramRequest** | **CreateDefaultCommissionProgramRequest**| Values of the Default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

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

# **createRedirectLinkUsingPOST**
> AffiliateLink createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest)

Creates a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateRedirectLinkUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateRedirectLinkUsingPOSTRequest = {
    // request
  createOrPatchAffiliateLinkRequest: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.createRedirectLinkUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrPatchAffiliateLinkRequest** | **CreateOrPatchAffiliateLinkRequest**| request |


### Return type

**AffiliateLink**

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

# **deleteAffiliateCommissionProgramUsingDELETE**
> void deleteAffiliateCommissionProgramUsingDELETE()

Deletes a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.deleteAffiliateCommissionProgramUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


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

# **deleteAffiliateUsingDELETE**
> void deleteAffiliateUsingDELETE()

Deletes the specified Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateUsingDELETERequest = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteAffiliateUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


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

# **deleteRedirectLinkUsingDELETE**
> void deleteRedirectLinkUsingDELETE()

Deletes an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteRedirectLinkUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteRedirectLinkUsingDELETERequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.deleteRedirectLinkUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


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

# **getAffiliateCommissionTotalUsingGET**
> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET()

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionTotalUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionTotalUsingGETRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getAffiliateCommissionTotalUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined


### Return type

**AffiliateCommissionEarned**

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

# **getAffiliateCommissionsUsingGET**
> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET()

Retrieve a list of Affiliate\'s Commissions and Clawbacks

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionsUsingGETRequest = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
    // Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.getAffiliateCommissionsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | [**string**] | affiliate_id | defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionResponse**

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

# **getAffiliateCustomFieldsUsingGET**
> ObjectModel getAffiliateCustomFieldsUsingGET()

Get the custom fields and optional properties for the Affiliate object

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request = {};

const data = await apiInstance.getAffiliateCustomFieldsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **getAffiliateUsingGET1**
> RestAffiliate getAffiliateUsingGET1()

Retrieves a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateUsingGET1Request = {
    // id
  id: "id_example",
};

const data = await apiInstance.getAffiliateUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined


### Return type

**RestAffiliate**

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

# **getCommissionProgramUsingGET**
> AffiliateProgramV2 getCommissionProgramUsingGET()

Retrieves a single Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetCommissionProgramUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetCommissionProgramUsingGETRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.getCommissionProgramUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined


### Return type

**AffiliateProgramV2**

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

# **getRedirectLinkUsingGET**
> AffiliateLink getRedirectLinkUsingGET()

Retrieves information about a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetRedirectLinkUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetRedirectLinkUsingGETRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.getRedirectLinkUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

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

# **listAffiliateCommissionProgramsUsingGET**
> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET()

Retrieves a list of Affiliate Commission Programs

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateCommissionProgramsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateCommissionProgramsUsingGETRequest = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateCommissionProgramsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateCommissionProgramsResponse**

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

# **listAffiliateLinksUsingGET**
> ListAffiliateLinksResponse listAffiliateLinksUsingGET()

Retrieves a list of Affiliate Links

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateLinksUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateLinksUsingGETRequest = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateLinksUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateLinksResponse**

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

# **listSummariesUsingGET1**
> ListAffiliateSummariesResponse listSummariesUsingGET1()

Retrieve a list of Affiliate Summaries

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListSummariesUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListSummariesUsingGET1Request = {
    // Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSummariesUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListAffiliateSummariesResponse**

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

# **patchCommissionProgramUsingPATCH**
> AffiliateCommissionProgramResponse patchCommissionProgramUsingPATCH(patchCommissionProgramRequest)

Updates the properties of an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // patchCommissionProgramRequest
  patchCommissionProgramRequest: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.patchCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchCommissionProgramRequest** | **PatchCommissionProgramRequest**| patchCommissionProgramRequest |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**AffiliateCommissionProgramResponse**

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

# **patchDefaultCommissionProgramUsingPATCH**
> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH()

Updates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchDefaultCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchDefaultCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the default Commission Program (optional)
  patchDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.patchDefaultCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchDefaultCommissionProgramRequest** | **PatchDefaultCommissionProgramRequest**| Values of the default Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SetDefaultCommissionProgramResponse**

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

# **patchProductCommissionProgramUsingPATCH**
> ProductCommissionProgram patchProductCommissionProgramUsingPATCH()

Updates a Product Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchProductCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchProductCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the product Commission Program (optional)
  patchProductCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.patchProductCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchProductCommissionProgramRequest** | **PatchProductCommissionProgramRequest**| Values of the product Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**ProductCommissionProgram**

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

# **patchSubscriptionCommissionProgramUsingPATCH**
> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH()

Updates a Subscription Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchSubscriptionCommissionProgramUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCHRequest = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // update_mask (optional)
  updateMask: [
    "update_mask_example",
  ],
    // Values of the subscription Commission Program (optional)
  patchSubscriptionCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.patchSubscriptionCommissionProgramUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchSubscriptionCommissionProgramRequest** | **PatchSubscriptionCommissionProgramRequest**| Values of the subscription Commission Program |
 **commissionProgramId** | [**string**] | commission_program_id | defaults to undefined
 **updateMask** | **Array&lt;string&gt;** | update_mask | (optional) defaults to undefined


### Return type

**SubscriptionCommissionProgram**

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

# **removeAffiliateFromProgramUsingPOST**
> void removeAffiliateFromProgramUsingPOST(affiliateRemoveFromProgramRequest)

Removes an Affiliate from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest = {
    // id
  id: "id_example",
    // removeFromProgramRequest
  affiliateRemoveFromProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.removeAffiliateFromProgramUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateRemoveFromProgramRequest** | **AffiliateRemoveFromProgramRequest**| removeFromProgramRequest |
 **id** | [**string**] | id | defaults to undefined


### Return type

**void**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeSubscriptionPlanCommissionFromCommissionsUsingPOST**
> void removeSubscriptionPlanCommissionFromCommissionsUsingPOST(deleteSubscriptionPlanCommissionRequest)

Removes a Subscription from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest = {
    // commission_id
  commissionId: "commission_id_example",
    // deleteSubscriptionPlanCommissionRequest
  deleteSubscriptionPlanCommissionRequest: {
    productId: "productId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSubscriptionPlanCommissionRequest** | **DeleteSubscriptionPlanCommissionRequest**| deleteSubscriptionPlanCommissionRequest |
 **commissionId** | [**string**] | commission_id | defaults to undefined


### Return type

**void**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAffiliateCustomFieldUsingPATCH**
> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH(updateCustomFieldMetaDataRequest)

Updates a custom field of the specified type and options to the Affiliate object.

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateCustomFieldUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateCustomFieldUsingPATCHRequest = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  updateCustomFieldMetaDataRequest: {
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

const data = await apiInstance.updateAffiliateCustomFieldUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldMetaDataRequest** | **UpdateCustomFieldMetaDataRequest**| request |
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

# **updateAffiliateUsingPATCH**
> RestAffiliate updateAffiliateUsingPATCH()

Updates a single Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateUsingPATCHRequest = {
    // id
  id: "id_example",
    // Affiliate request to patch (optional)
  patchAffiliateRequest: {
    code: "M123",
    contactId: "1",
    name: "Affiliate Name",
    status: "ACTIVE",
  },
};

const data = await apiInstance.updateAffiliateUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchAffiliateRequest** | **PatchAffiliateRequest**| Affiliate request to patch |
 **id** | [**string**] | id | defaults to undefined


### Return type

**RestAffiliate**

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

# **updateRedirectLinkUsingPATCH**
> AffiliateLink updateRedirectLinkUsingPATCH(createOrPatchAffiliateLinkRequest)

Updates an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateRedirectLinkUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateRedirectLinkUsingPATCHRequest = {
    // redirect_id
  redirectId: "redirect_id_example",
    // request
  createOrPatchAffiliateLinkRequest: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.updateRedirectLinkUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrPatchAffiliateLinkRequest** | **CreateOrPatchAffiliateLinkRequest**| request |
 **redirectId** | [**string**] | redirect_id | defaults to undefined


### Return type

**AffiliateLink**

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


