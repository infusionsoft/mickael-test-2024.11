# .CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount
[**deleteDiscountUsingDELETE**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getDiscountUsingGET**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**listCategoryDiscountsUsingGET**](CategoryDiscountApi.md#listCategoryDiscountsUsingGET) | **GET** /v2/discounts/productCategories | List Category Discounts
[**updateDiscountUsingPATCH**](CategoryDiscountApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount


# **createDiscountUsingPOST**
> CategoryDiscount createDiscountUsingPOST(createUpdateDiscountRequest)

Create a Category Discount.

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiCreateDiscountUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiCreateDiscountUsingPOSTRequest = {
    // request
  createUpdateDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
};

const data = await apiInstance.createDiscountUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateDiscountRequest** | **CreateUpdateDiscountRequest**| request |


### Return type

**CategoryDiscount**

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

# **deleteDiscountUsingDELETE**
> void deleteDiscountUsingDELETE()

Deletes a specified Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiDeleteDiscountUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiDeleteDiscountUsingDELETERequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


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

# **getDiscountUsingGET**
> CategoryDiscount getDiscountUsingGET()

Retrieves a single Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiGetDiscountUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiGetDiscountUsingGETRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getDiscountUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**CategoryDiscount**

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

# **listCategoryDiscountsUsingGET**
> ListCategoryDiscountsResponse listCategoryDiscountsUsingGET()

Retrieve a list of Category Discounts.

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiListCategoryDiscountsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiListCategoryDiscountsUsingGETRequest = {
    // Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listCategoryDiscountsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListCategoryDiscountsResponse**

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

# **updateDiscountUsingPATCH**
> CategoryDiscount updateDiscountUsingPATCH(createUpdateDiscountRequest)

Update a Category Discount.

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiUpdateDiscountUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiUpdateDiscountUsingPATCHRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  createUpdateDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountPercent: 3.14,
    name: "name_example",
    productCategoryIds: [
      "productCategoryIds_example",
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "contact_id",
  ],
};

const data = await apiInstance.updateDiscountUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateDiscountRequest** | **CreateUpdateDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CategoryDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


