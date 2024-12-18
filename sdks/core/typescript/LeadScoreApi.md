# .LeadScoreApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetailsUsingGET**](LeadScoreApi.md#getLeadScoreDetailsUsingGET) | **GET** /v2/contact/{contact_id}/leadScore | Retrieve Lead Score of a Contact


# **getLeadScoreDetailsUsingGET**
> LeadScore getLeadScoreDetailsUsingGET()

Retrieves information about the Lead Score of a Contact

### Example


```typescript
import { createConfiguration, LeadScoreApi } from '';
import type { LeadScoreApiGetLeadScoreDetailsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LeadScoreApi(configuration);

const request: LeadScoreApiGetLeadScoreDetailsUsingGETRequest = {
    // contact_id
  contactId: "contact_id_example",
};

const data = await apiInstance.getLeadScoreDetailsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined


### Return type

**LeadScore**

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


