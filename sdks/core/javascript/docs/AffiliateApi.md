# KeapCoreServiceCoreSdk.AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate



## addAffiliateUsingPOST

> RestAffiliate addAffiliateUsingPOST(opts)

Create an Affiliate

Creates a single Affiliate

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let opts = {
  'createAffiliateRequest': new KeapCoreServiceCoreSdk.CreateAffiliateRequest() // CreateAffiliateRequest | Affiliate request to insert
};
apiInstance.addAffiliateUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAffiliateUsingGET1

> RestAffiliate getAffiliateUsingGET1(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let id = "id_example"; // String | id
apiInstance.getAffiliateUsingGET1(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchCommissionProgramUsingPATCH

> AffiliateCommissionProgramResponse patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, opts)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let patchCommissionProgramRequest = new KeapCoreServiceCoreSdk.PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAffiliateUsingPATCH

> RestAffiliate updateAffiliateUsingPATCH(id, opts)

Update an Affiliate

Updates a single Affiliate

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let id = "id_example"; // String | id
let opts = {
  'patchAffiliateRequest': new KeapCoreServiceCoreSdk.PatchAffiliateRequest() // PatchAffiliateRequest | Affiliate request to patch
};
apiInstance.updateAffiliateUsingPATCH(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **patchAffiliateRequest** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

