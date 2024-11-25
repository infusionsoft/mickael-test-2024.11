# .LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceUsingPOST**](LeadSourcesApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadsources | Create a Lead Source
[**listLeadSourcesUsingGET**](LeadSourcesApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadsources | List Lead Sources


# **createLeadSourceUsingPOST**
> LeadSource createLeadSourceUsingPOST()

Creates a new Lead Source

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiCreateLeadSourceUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiCreateLeadSourceUsingPOSTRequest = {
    // leadsource (optional)
  leadsource: {
    category: {
      id: "id_example",
      name: "name_example",
    },
    description: "description_example",
    endTime: "endTime_example",
    medium: "medium_example",
    message: "message_example",
    name: "name_example",
    startTime: "startTime_example",
    statusIsActive: true,
    vendor: "vendor_example",
  },
};

const data = await apiInstance.createLeadSourceUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadsource** | **CreateLeadSourceRequest**| leadsource |


### Return type

**LeadSource**

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

# **listLeadSourcesUsingGET**
> ListLeadSourcesResponse listLeadSourcesUsingGET()

Retrieves a list of lead sources

### Example


```typescript
import { createConfiguration, LeadSourcesApi } from '';
import type { LeadSourcesApiListLeadSourcesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadSourcesApi(configuration);

const request: LeadSourcesApiListLeadSourcesUsingGETRequest = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listLeadSourcesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListLeadSourcesResponse**

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


