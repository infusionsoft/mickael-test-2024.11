# .AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate


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


