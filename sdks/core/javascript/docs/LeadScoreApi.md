# KeapCoreServiceCoreSdk.LeadScoreApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeadScoreDetailsUsingGET**](LeadScoreApi.md#getLeadScoreDetailsUsingGET) | **GET** /v2/contact/{contact_id}/leadScore | Retrieve Lead Score of a Contact



## getLeadScoreDetailsUsingGET

> LeadScore getLeadScoreDetailsUsingGET(contactId)

Retrieve Lead Score of a Contact

Retrieves information about the Lead Score of a Contact

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadScoreApi();
let contactId = "contactId_example"; // String | contact_id
apiInstance.getLeadScoreDetailsUsingGET(contactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| contact_id | 

### Return type

[**LeadScore**](LeadScore.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

