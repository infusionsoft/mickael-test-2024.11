# Keap.Sdk.Core.Api.SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ListSubscriptionPlansUsingGET**](SubscriptionPlansApi.md#listsubscriptionplansusingget) | **GET** /v2/subscriptionPlans | List Subscription Plans |

<a id="listsubscriptionplansusingget"></a>
# **ListSubscriptionPlansUsingGET**
> ListSubscriptionPlansResponse ListSubscriptionPlansUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListSubscriptionPlansUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new SubscriptionPlansApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name    (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Subscription Plans
                ListSubscriptionPlansResponse result = apiInstance.ListSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionPlansApi.ListSubscriptionPlansUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionPlansUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscription Plans
    ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.ListSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionPlansApi.ListSubscriptionPlansUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name    | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

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

