# .DiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryDiscountUsingGET_0**](DiscountApi.md#getCategoryDiscountUsingGET_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount


# **getCategoryDiscountUsingGET_0**
> CategoryDiscount getCategoryDiscountUsingGET_0()

Retrieves a single Category Discount

### Example


```typescript
import { createConfiguration, DiscountApi } from '';
import type { DiscountApiGetCategoryDiscountUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new DiscountApi(configuration);

const request: DiscountApiGetCategoryDiscountUsingGET0Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getCategoryDiscountUsingGET_0(request);
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


