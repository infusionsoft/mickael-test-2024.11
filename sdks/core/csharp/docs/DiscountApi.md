# Keap.Sdk.Core.Api.DiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetCategoryDiscountUsingGET_0**](DiscountApi.md#getcategorydiscountusingget_0) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve Category Discount |

<a id="getcategorydiscountusingget_0"></a>
# **GetCategoryDiscountUsingGET_0**
> CategoryDiscount GetCategoryDiscountUsingGET_0 (string discountId)

Retrieve Category Discount

Retrieves a single Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetCategoryDiscountUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new DiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve Category Discount
                CategoryDiscount result = apiInstance.GetCategoryDiscountUsingGET_0(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DiscountApi.GetCategoryDiscountUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryDiscountUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.GetCategoryDiscountUsingGET_0WithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DiscountApi.GetCategoryDiscountUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

