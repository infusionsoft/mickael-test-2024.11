# .LeadSourceCategoriesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**deleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category
[**getLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category


# **createLeadSourceCategoryUsingPOST**
> LeadSourceCategory createLeadSourceCategoryUsingPOST()

Create a Lead Source Category.

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest = {
    // leadSourceCategory (optional)
  createUpdateLeadSourceCategoryRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createLeadSourceCategoryUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateLeadSourceCategoryRequest** | **CreateUpdateLeadSourceCategoryRequest**| leadSourceCategory |


### Return type

**LeadSourceCategory**

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

# **deleteLeadSourceCategoryUsingDELETE**
> void deleteLeadSourceCategoryUsingDELETE()

Deletes the specified Lead Source Category.

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest = {
    // category_id
  categoryId: "category_id_example",
};

const data = await apiInstance.deleteLeadSourceCategoryUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined


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

# **getLeadSourceCategoryUsingGET**
> LeadSourceCategory getLeadSourceCategoryUsingGET()

Retrieves a single Lead Source Category for a given id

### Example


```typescript
import { createConfiguration, LeadSourceCategoriesApi } from '';
import type { LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourceCategoriesApi(configuration);

const request: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest = {
    // category_id
  categoryId: "category_id_example",
};

const data = await apiInstance.getLeadSourceCategoryUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | category_id | defaults to undefined


### Return type

**LeadSourceCategory**

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


