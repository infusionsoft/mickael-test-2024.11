# KeapRestApi.BusinessProfileApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBusinessProfileUsingGET**](BusinessProfileApi.md#getBusinessProfileUsingGET) | **GET** /v2/businessProfile | Retrieve Business Profile
[**patchBusinessProfileUsingPATCH**](BusinessProfileApi.md#patchBusinessProfileUsingPATCH) | **PATCH** /v2/businessProfile | Update Business Profile



## getBusinessProfileUsingGET

> GetBusinessProfileResponse getBusinessProfileUsingGET()

Retrieve Business Profile

Retrieves Business Profile information.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.BusinessProfileApi();
apiInstance.getBusinessProfileUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchBusinessProfileUsingPATCH

> GetBusinessProfileResponse patchBusinessProfileUsingPATCH(opts)

Update Business Profile

Updates Business Profile information.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.BusinessProfileApi();
let opts = {
  'updateMask': ["null"], // [String] | An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
  'businessProfile': new KeapRestApi.PatchBusinessProfileRequest() // PatchBusinessProfileRequest | businessProfile
};
apiInstance.patchBusinessProfileUsingPATCH(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. | [optional] 
 **businessProfile** | [**PatchBusinessProfileRequest**](PatchBusinessProfileRequest.md)| businessProfile | [optional] 

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

