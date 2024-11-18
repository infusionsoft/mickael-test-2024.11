# KeapRestApi.LeadSourcesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceUsingPOST_0**](LeadSourcesApi.md#createLeadSourceUsingPOST_0) | **POST** /v2/leadsources | Create a Lead Source
[**listLeadSourcesUsingGET_0**](LeadSourcesApi.md#listLeadSourcesUsingGET_0) | **GET** /v2/leadsources | List Lead Sources



## createLeadSourceUsingPOST_0

> LeadSource createLeadSourceUsingPOST_0(opts)

Create a Lead Source

Creates a new Lead Source

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.LeadSourcesApi();
let opts = {
  'leadsource': new KeapRestApi.CreateLeadSourceRequest() // CreateLeadSourceRequest | leadsource
};
apiInstance.createLeadSourceUsingPOST_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadsource** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listLeadSourcesUsingGET_0

> ListLeadSourcesResponse listLeadSourcesUsingGET_0(opts)

List Lead Sources

Retrieves a list of lead sources

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.LeadSourcesApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example", // String | Attribute and direction to order items by. E.g. `given_name desc`
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listLeadSourcesUsingGET_0(opts).then((data) => {
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

