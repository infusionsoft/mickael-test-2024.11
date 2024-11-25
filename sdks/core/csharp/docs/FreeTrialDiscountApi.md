# Keap.Sdk.Core.Api.FreeTrialDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DeleteDiscountUsingDELETE1**](FreeTrialDiscountApi.md#deletediscountusingdelete1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount |

<a id="deletediscountusingdelete1"></a>
# **DeleteDiscountUsingDELETE1**
> void DeleteDiscountUsingDELETE1 (string discountId)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteDiscountUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new FreeTrialDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Free Trial Discount
                apiInstance.DeleteDiscountUsingDELETE1(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FreeTrialDiscountApi.DeleteDiscountUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Free Trial Discount
    apiInstance.DeleteDiscountUsingDELETE1WithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FreeTrialDiscountApi.DeleteDiscountUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

