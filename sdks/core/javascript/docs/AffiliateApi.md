# KeapCoreServiceCoreSdk.AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAffiliateToProgramUsingPOST**](AffiliateApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate
[**addCommissionProgramUsingPOST**](AffiliateApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**createAffiliateCustomFieldUsingPOST**](AffiliateApi.md#createAffiliateCustomFieldUsingPOST) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**createDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**createRedirectLinkUsingPOST**](AffiliateApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**deleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**deleteAffiliateUsingDELETE**](AffiliateApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**deleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**getAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**getAffiliateCommissionsUsingGET**](AffiliateApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**getAffiliateCustomFieldsUsingGET**](AffiliateApi.md#getAffiliateCustomFieldsUsingGET) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**getCommissionProgramUsingGET**](AffiliateApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**getRedirectLinkUsingGET**](AffiliateApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**listAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**listAffiliateLinksUsingGET**](AffiliateApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**listSummariesUsingGET1**](AffiliateApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**patchDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patchProductCommissionProgramUsingPATCH**](AffiliateApi.md#patchProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patchSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**removeAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**updateAffiliateCustomFieldUsingPATCH**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**updateRedirectLinkUsingPATCH**](AffiliateApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link



## addAffiliateToProgramUsingPOST

> addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let id = "id_example"; // String | id
let affiliateAddToProgramRequest = new KeapCoreServiceCoreSdk.AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
apiInstance.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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


## addCommissionProgramUsingPOST

> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST(opts)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let opts = {
  'createCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateCommissionProgramRequest() // CreateCommissionProgramRequest | Commission Program to insert
};
apiInstance.addCommissionProgramUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommissionProgramRequest** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignProductCommissionProgramUsingPOST

> ProductCommissionProgram assignProductCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createProductCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateProductCommissionProgramRequest() // CreateProductCommissionProgramRequest | Product Commission Program
};
apiInstance.assignProductCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## assignSubscriptionCommissionProgramUsingPOST

> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createSubscriptionCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateSubscriptionCommissionProgramRequest() // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
};
apiInstance.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAffiliateCustomFieldUsingPOST

> CustomFieldMetaData createAffiliateCustomFieldUsingPOST(createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let createCustomFieldRequest = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createAffiliateCustomFieldUsingPOST(createCustomFieldRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDefaultCommissionProgramUsingPOST

> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST(commissionProgramId, opts)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'createDefaultCommissionProgramRequest': new KeapCoreServiceCoreSdk.CreateDefaultCommissionProgramRequest() // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
};
apiInstance.createDefaultCommissionProgramUsingPOST(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRedirectLinkUsingPOST

> AffiliateLink createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let createOrPatchAffiliateLinkRequest = new KeapCoreServiceCoreSdk.CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
apiInstance.createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAffiliateCommissionProgramUsingDELETE

> deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAffiliateUsingDELETE

> deleteAffiliateUsingDELETE(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let id = "id_example"; // String | id
apiInstance.deleteAffiliateUsingDELETE(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRedirectLinkUsingDELETE

> deleteRedirectLinkUsingDELETE(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.deleteRedirectLinkUsingDELETE(redirectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionTotalUsingGET

> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
apiInstance.getAffiliateCommissionTotalUsingGET(affiliateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCommissionsUsingGET

> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET(affiliateId, opts)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let affiliateId = "affiliateId_example"; // String | affiliate_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.getAffiliateCommissionsUsingGET(affiliateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliateId** | **String**| affiliate_id | 
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliateCustomFieldsUsingGET

> ObjectModel getAffiliateCustomFieldsUsingGET()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
apiInstance.getAffiliateCustomFieldsUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
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


## getCommissionProgramUsingGET

> AffiliateProgramV2 getCommissionProgramUsingGET(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
apiInstance.getCommissionProgramUsingGET(commissionProgramId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedirectLinkUsingGET

> AffiliateLink getRedirectLinkUsingGET(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
apiInstance.getRedirectLinkUsingGET(redirectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateCommissionProgramsUsingGET

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET(opts)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateCommissionProgramsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAffiliateLinksUsingGET

> ListAffiliateLinksResponse listAffiliateLinksUsingGET(opts)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
  'orderBy': "orderBy_example", // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listAffiliateLinksUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSummariesUsingGET1

> ListAffiliateSummariesResponse listSummariesUsingGET1(opts)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listSummariesUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

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


## patchDefaultCommissionProgramUsingPATCH

> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchDefaultCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchDefaultCommissionProgramRequest() // PatchDefaultCommissionProgramRequest | Values of the default Commission Program
};
apiInstance.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest**](PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchProductCommissionProgramUsingPATCH

> ProductCommissionProgram patchProductCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchProductCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchProductCommissionProgramRequest() // PatchProductCommissionProgramRequest | Values of the product Commission Program
};
apiInstance.patchProductCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest**](PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSubscriptionCommissionProgramUsingPATCH

> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
let opts = {
  'updateMask': ["null"], // [String] | update_mask
  'patchSubscriptionCommissionProgramRequest': new KeapCoreServiceCoreSdk.PatchSubscriptionCommissionProgramRequest() // PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
};
apiInstance.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionProgramId** | **String**| commission_program_id | 
 **updateMask** | [**[String]**](String.md)| update_mask | [optional] 
 **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest**](PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeAffiliateFromProgramUsingPOST

> removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let id = "id_example"; // String | id
let affiliateRemoveFromProgramRequest = new KeapCoreServiceCoreSdk.AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
apiInstance.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeSubscriptionPlanCommissionFromCommissionsUsingPOST

> removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let commissionId = "commissionId_example"; // String | commission_id
let deleteSubscriptionPlanCommissionRequest = new KeapCoreServiceCoreSdk.DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commissionId** | **String**| commission_id | 
 **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAffiliateCustomFieldUsingPATCH

> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let updateCustomFieldMetaDataRequest = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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


## updateRedirectLinkUsingPATCH

> AffiliateLink updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.AffiliateApi();
let redirectId = "redirectId_example"; // String | redirect_id
let createOrPatchAffiliateLinkRequest = new KeapCoreServiceCoreSdk.CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
apiInstance.updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| redirect_id | 
 **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

