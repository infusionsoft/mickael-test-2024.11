# .CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiscountUsingDELETE_0**](CategoryDiscountApi.md#deleteDiscountUsingDELETE_0) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**getDiscountUsingGET_0**](CategoryDiscountApi.md#getDiscountUsingGET_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount


# **deleteDiscountUsingDELETE_0**
> void deleteDiscountUsingDELETE_0()

Deletes a specified Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiDeleteDiscountUsingDELETE0Request } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiDeleteDiscountUsingDELETE0Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE_0(request);
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

# **getDiscountUsingGET_0**
> CategoryDiscount getDiscountUsingGET_0()

Retrieves a single Category Discount

### Example


```typescript
import { createConfiguration, CategoryDiscountApi } from '';
import type { CategoryDiscountApiGetDiscountUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new CategoryDiscountApi(configuration);

const request: CategoryDiscountApiGetDiscountUsingGET0Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getDiscountUsingGET_0(request);
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


