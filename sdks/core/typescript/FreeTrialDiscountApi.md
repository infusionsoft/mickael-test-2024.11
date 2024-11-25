# .FreeTrialDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiscountUsingDELETE1**](FreeTrialDiscountApi.md#deleteDiscountUsingDELETE1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount


# **deleteDiscountUsingDELETE1**
> void deleteDiscountUsingDELETE1()

Deletes a specified Free Trial Discount

### Example


```typescript
import { createConfiguration, FreeTrialDiscountApi } from '';
import type { FreeTrialDiscountApiDeleteDiscountUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new FreeTrialDiscountApi(configuration);

const request: FreeTrialDiscountApiDeleteDiscountUsingDELETE1Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE1(request);
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


