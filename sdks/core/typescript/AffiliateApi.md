# .AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateToProgramUsingPOST_0**](AffiliateApi.md#addAffiliateToProgramUsingPOST_0) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**addCommissionProgramUsingPOST_0**](AffiliateApi.md#addCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgramUsingPOST_0**](AffiliateApi.md#assignProductCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgramUsingPOST_0**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**createAffiliateCustomFieldUsingPOST_0**](AffiliateApi.md#createAffiliateCustomFieldUsingPOST_0) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgramUsingPOST_0**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**createRedirectLinkUsingPOST_0**](AffiliateApi.md#createRedirectLinkUsingPOST_0) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliateCommissionProgramUsingDELETE_0**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE_0) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateUsingDELETE_0**](AffiliateApi.md#deleteAffiliateUsingDELETE_0) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteRedirectLinkUsingDELETE_0**](AffiliateApi.md#deleteRedirectLinkUsingDELETE_0) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliateCommissionTotalUsingGET_0**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET_0) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissionsUsingGET_0**](AffiliateApi.md#getAffiliateCommissionsUsingGET_0) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateCustomFieldsUsingGET_0**](AffiliateApi.md#getAffiliateCustomFieldsUsingGET_0) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**getCommissionProgramUsingGET_0**](AffiliateApi.md#getCommissionProgramUsingGET_0) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLinkUsingGET_0**](AffiliateApi.md#getRedirectLinkUsingGET_0) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**listAffiliateCommissionProgramsUsingGET_0**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET_0) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinksUsingGET_0**](AffiliateApi.md#listAffiliateLinksUsingGET_0) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listSummariesUsingGET1_0**](AffiliateApi.md#listSummariesUsingGET1_0) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**patchDefaultCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patchProductCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchProductCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patchSubscriptionCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCH_0) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**removeAffiliateFromProgramUsingPOST_0**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST_0) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliateCustomFieldUsingPATCH_0**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCH_0) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**updateRedirectLinkUsingPATCH_0**](AffiliateApi.md#updateRedirectLinkUsingPATCH_0) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link


# **addAffiliateToProgramUsingPOST_0**
> void addAffiliateToProgramUsingPOST_0(affiliateAddToProgramRequest)

Assigns an Affiliate to Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddAffiliateToProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddAffiliateToProgramUsingPOST0Request = {
    // id
  id: "id_example",
    // affiliateAddToProgramRequest
  affiliateAddToProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.addAffiliateToProgramUsingPOST_0(request);
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
  insertAffiliate: {
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
 **insertAffiliate** | **CreateAffiliateRequest**| Affiliate request to insert |


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

# **addCommissionProgramUsingPOST_0**
> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST_0()

Creates an Affiliate Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAddCommissionProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAddCommissionProgramUsingPOST0Request = {
    // Commission Program to insert (optional)
  insertCommissionProgram: {
    name: "Fitness program",
    notes: "20% default commission",
    priority: 100,
  },
};

const data = await apiInstance.addCommissionProgramUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insertCommissionProgram** | **CreateCommissionProgramRequest**| Commission Program to insert |


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

# **assignProductCommissionProgramUsingPOST_0**
> ProductCommissionProgram assignProductCommissionProgramUsingPOST_0()

Assigns a Product Commission Program to a Product

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignProductCommissionProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignProductCommissionProgramUsingPOST0Request = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Product Commission Program (optional)
  productCommissionProgram: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    productId: "productId_example",
  },
};

const data = await apiInstance.assignProductCommissionProgramUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCommissionProgram** | **CreateProductCommissionProgramRequest**| Product Commission Program |
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

# **assignSubscriptionCommissionProgramUsingPOST_0**
> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST_0()

Assigns a Subscription Commission Program to a Subscription

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiAssignSubscriptionCommissionProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiAssignSubscriptionCommissionProgramUsingPOST0Request = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Subscription Commission Program (optional)
  subscriptionCommissionProgram: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
    subscriptionId: "subscriptionId_example",
  },
};

const data = await apiInstance.assignSubscriptionCommissionProgramUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionCommissionProgram** | **CreateSubscriptionCommissionProgramRequest**| Subscription Commission Program |
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

# **createAffiliateCustomFieldUsingPOST_0**
> CustomFieldMetaData createAffiliateCustomFieldUsingPOST_0(customField)

Creates a single Affiliate Custom Field

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateAffiliateCustomFieldUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateAffiliateCustomFieldUsingPOST0Request = {
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

const data = await apiInstance.createAffiliateCustomFieldUsingPOST_0(request);
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

# **createDefaultCommissionProgramUsingPOST_0**
> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST_0()

Creates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateDefaultCommissionProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateDefaultCommissionProgramUsingPOST0Request = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
    // Values of the Default Commission Program (optional)
  createDefaultCommissionProgramRequest: {
    dollarAmount: "dollarAmount_example",
    percentage: "percentage_example",
  },
};

const data = await apiInstance.createDefaultCommissionProgramUsingPOST_0(request);
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

# **createRedirectLinkUsingPOST_0**
> AffiliateLink createRedirectLinkUsingPOST_0(request)

Creates a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiCreateRedirectLinkUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiCreateRedirectLinkUsingPOST0Request = {
    // request
  request: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.createRedirectLinkUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateOrPatchAffiliateLinkRequest**| request |


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

# **deleteAffiliateCommissionProgramUsingDELETE_0**
> void deleteAffiliateCommissionProgramUsingDELETE_0()

Deletes a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateCommissionProgramUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETE0Request = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.deleteAffiliateCommissionProgramUsingDELETE_0(request);
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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAffiliateUsingDELETE_0**
> void deleteAffiliateUsingDELETE_0()

Deletes the specified Affiliate

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteAffiliateUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteAffiliateUsingDELETE0Request = {
    // id
  id: "id_example",
};

const data = await apiInstance.deleteAffiliateUsingDELETE_0(request);
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
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRedirectLinkUsingDELETE_0**
> void deleteRedirectLinkUsingDELETE_0()

Deletes an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiDeleteRedirectLinkUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiDeleteRedirectLinkUsingDELETE0Request = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.deleteRedirectLinkUsingDELETE_0(request);
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
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAffiliateCommissionTotalUsingGET_0**
> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET_0()

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionTotalUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionTotalUsingGET0Request = {
    // affiliate_id
  affiliateId: "affiliate_id_example",
};

const data = await apiInstance.getAffiliateCommissionTotalUsingGET_0(request);
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

# **getAffiliateCommissionsUsingGET_0**
> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET_0()

Retrieve a list of Affiliate\'s Commissions and Clawbacks

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetAffiliateCommissionsUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetAffiliateCommissionsUsingGET0Request = {
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

const data = await apiInstance.getAffiliateCommissionsUsingGET_0(request);
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

# **getAffiliateCustomFieldsUsingGET_0**
> ObjectModel getAffiliateCustomFieldsUsingGET_0()

Get the custom fields and optional properties for the Affiliate object

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request = {};

const data = await apiInstance.getAffiliateCustomFieldsUsingGET_0(request);
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

# **getCommissionProgramUsingGET_0**
> AffiliateProgramV2 getCommissionProgramUsingGET_0()

Retrieves a single Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetCommissionProgramUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetCommissionProgramUsingGET0Request = {
    // commission_program_id
  commissionProgramId: "commission_program_id_example",
};

const data = await apiInstance.getCommissionProgramUsingGET_0(request);
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

# **getRedirectLinkUsingGET_0**
> AffiliateLink getRedirectLinkUsingGET_0()

Retrieves information about a single Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiGetRedirectLinkUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiGetRedirectLinkUsingGET0Request = {
    // redirect_id
  redirectId: "redirect_id_example",
};

const data = await apiInstance.getRedirectLinkUsingGET_0(request);
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

# **listAffiliateCommissionProgramsUsingGET_0**
> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET_0()

Retrieves a list of Affiliate Commission Programs

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateCommissionProgramsUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateCommissionProgramsUsingGET0Request = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateCommissionProgramsUsingGET_0(request);
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

# **listAffiliateLinksUsingGET_0**
> ListAffiliateLinksResponse listAffiliateLinksUsingGET_0()

Retrieves a list of Affiliate Links

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListAffiliateLinksUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListAffiliateLinksUsingGET0Request = {
    // Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listAffiliateLinksUsingGET_0(request);
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

# **listSummariesUsingGET1_0**
> ListAffiliateSummariesResponse listSummariesUsingGET1_0()

Retrieve a list of Affiliate Summaries

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiListSummariesUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiListSummariesUsingGET10Request = {
    // Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSummariesUsingGET1_0(request);
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

# **patchDefaultCommissionProgramUsingPATCH_0**
> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH_0()

Updates a Default Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchDefaultCommissionProgramUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchDefaultCommissionProgramUsingPATCH0Request = {
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

const data = await apiInstance.patchDefaultCommissionProgramUsingPATCH_0(request);
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

# **patchProductCommissionProgramUsingPATCH_0**
> ProductCommissionProgram patchProductCommissionProgramUsingPATCH_0()

Updates a Product Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchProductCommissionProgramUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchProductCommissionProgramUsingPATCH0Request = {
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

const data = await apiInstance.patchProductCommissionProgramUsingPATCH_0(request);
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

# **patchSubscriptionCommissionProgramUsingPATCH_0**
> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH_0()

Updates a Subscription Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiPatchSubscriptionCommissionProgramUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCH0Request = {
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

const data = await apiInstance.patchSubscriptionCommissionProgramUsingPATCH_0(request);
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

# **removeAffiliateFromProgramUsingPOST_0**
> void removeAffiliateFromProgramUsingPOST_0(removeFromProgramRequest)

Removes an Affiliate from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveAffiliateFromProgramUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveAffiliateFromProgramUsingPOST0Request = {
    // id
  id: "id_example",
    // removeFromProgramRequest
  removeFromProgramRequest: {
    affiliateProgramId: "affiliateProgramId_example",
  },
};

const data = await apiInstance.removeAffiliateFromProgramUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeFromProgramRequest** | **AffiliateRemoveFromProgramRequest**| removeFromProgramRequest |
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

# **removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0**
> void removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0(deleteSubscriptionPlanCommissionRequest)

Removes a Subscription from a Commission Program

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOST0Request = {
    // commission_id
  commissionId: "commission_id_example",
    // deleteSubscriptionPlanCommissionRequest
  deleteSubscriptionPlanCommissionRequest: {
    productId: "productId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST_0(request);
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

# **updateAffiliateCustomFieldUsingPATCH_0**
> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH_0(request)

Updates a custom field of the specified type and options to the Affiliate object.

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateAffiliateCustomFieldUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateAffiliateCustomFieldUsingPATCH0Request = {
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
    // An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateAffiliateCustomFieldUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


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
  patchAffiliate: {
    code: "M123",
    contactId: "1",
    name: "Affiliate Name",
    status: "active",
  },
};

const data = await apiInstance.updateAffiliateUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchAffiliate** | **PatchAffiliateRequest**| Affiliate request to patch |
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

# **updateRedirectLinkUsingPATCH_0**
> AffiliateLink updateRedirectLinkUsingPATCH_0(request)

Updates an Affiliate Link

### Example


```typescript
import { createConfiguration, AffiliateApi } from '';
import type { AffiliateApiUpdateRedirectLinkUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new AffiliateApi(configuration);

const request: AffiliateApiUpdateRedirectLinkUsingPATCH0Request = {
    // redirect_id
  redirectId: "redirect_id_example",
    // request
  request: {
    affiliateId: "1",
    code: "fP100",
    name: "Fitness Program",
    programIds: [
      "programIds_example",
    ],
    websiteAddress: "www.fitnessProgram.com",
  },
};

const data = await apiInstance.updateRedirectLinkUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateOrPatchAffiliateLinkRequest**| request |
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


