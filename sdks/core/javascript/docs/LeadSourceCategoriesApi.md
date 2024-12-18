# KeapCoreServiceCoreSdk.LeadSourceCategoriesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category
[**deleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category
[**getLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category



## createLeadSourceCategoryUsingPOST

> LeadSourceCategory createLeadSourceCategoryUsingPOST(opts)

Create a Lead Source Category

Create a Lead Source Category.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadSourceCategoriesApi();
let opts = {
  'createUpdateLeadSourceCategoryRequest': new KeapCoreServiceCoreSdk.CreateUpdateLeadSourceCategoryRequest() // CreateUpdateLeadSourceCategoryRequest | leadSourceCategory
};
apiInstance.createLeadSourceCategoryUsingPOST(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| leadSourceCategory | [optional] 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLeadSourceCategoryUsingDELETE

> deleteLeadSourceCategoryUsingDELETE(categoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadSourceCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
apiInstance.deleteLeadSourceCategoryUsingDELETE(categoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeadSourceCategoryUsingGET

> LeadSourceCategory getLeadSourceCategoryUsingGET(categoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.LeadSourceCategoriesApi();
let categoryId = "categoryId_example"; // String | category_id
apiInstance.getLeadSourceCategoryUsingGET(categoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category_id | 

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

