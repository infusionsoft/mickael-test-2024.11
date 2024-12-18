# KeapCoreServiceCoreSdk.LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceUsingPOST**](LeadSourcesApi.md#createLeadSourceUsingPOST) | **POST** /v2/leadsources | Create a Lead Source
[**listLeadSourcesUsingGET**](LeadSourcesApi.md#listLeadSourcesUsingGET) | **GET** /v2/leadsources | List Lead Sources



## createLeadSourceUsingPOST

> LeadSource createLeadSourceUsingPOST(opts)

Create a Lead Source

Creates a new Lead Source

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadSourcesApi();
let opts = {
  'createLeadSourceRequest': new KeapCoreServiceCoreSdk.CreateLeadSourceRequest() // CreateLeadSourceRequest | leadsource
};
apiInstance.createLeadSourceUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLeadSourceRequest** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listLeadSourcesUsingGET

> ListLeadSourcesResponse listLeadSourcesUsingGET(opts)

List Lead Sources

Retrieves a list of lead sources

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadSourcesApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourcesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

