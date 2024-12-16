# Keap.Sdk.Core.Api.OrderTotalDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOrderTotalDiscountUsingPOST**](OrderTotalDiscountApi.md#createordertotaldiscountusingpost) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**DeleteOrderTotalDiscountUsingDELETE**](OrderTotalDiscountApi.md#deleteordertotaldiscountusingdelete) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**GetOrderTotalDiscountUsingGET**](OrderTotalDiscountApi.md#getordertotaldiscountusingget) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**ListOrderTotalDiscountsUsingGET**](OrderTotalDiscountApi.md#listordertotaldiscountsusingget) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**UpdateOrderTotalDiscountUsingPATCH**](OrderTotalDiscountApi.md#updateordertotaldiscountusingpatch) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |

<a id="createordertotaldiscountusingpost"></a>
# **CreateOrderTotalDiscountUsingPOST**
> OrderTotalDiscount CreateOrderTotalDiscountUsingPOST (CreateOrderTotalDiscountRequest request)

Create an Order Total Discount

Creates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOrderTotalDiscountUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OrderTotalDiscountApi(config);
            var request = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request

            try
            {
                // Create an Order Total Discount
                OrderTotalDiscount result = apiInstance.CreateOrderTotalDiscountUsingPOST(request);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountApi.CreateOrderTotalDiscountUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderTotalDiscountUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.CreateOrderTotalDiscountUsingPOSTWithHttpInfo(request);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountApi.CreateOrderTotalDiscountUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **request** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md) | request |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteordertotaldiscountusingdelete"></a>
# **DeleteOrderTotalDiscountUsingDELETE**
> void DeleteOrderTotalDiscountUsingDELETE (string discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOrderTotalDiscountUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OrderTotalDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete an Order Total Discount
                apiInstance.DeleteOrderTotalDiscountUsingDELETE(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountApi.DeleteOrderTotalDiscountUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderTotalDiscountUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Total Discount
    apiInstance.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountApi.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="getordertotaldiscountusingget"></a>
# **GetOrderTotalDiscountUsingGET**
> OrderTotalDiscount GetOrderTotalDiscountUsingGET (string discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOrderTotalDiscountUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OrderTotalDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve an Order Total Discount
                OrderTotalDiscount result = apiInstance.GetOrderTotalDiscountUsingGET(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountApi.GetOrderTotalDiscountUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderTotalDiscountUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.GetOrderTotalDiscountUsingGETWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountApi.GetOrderTotalDiscountUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

<a id="listordertotaldiscountsusingget"></a>
# **ListOrderTotalDiscountsUsingGET**
> ListOrderTotalDiscountsResponse ListOrderTotalDiscountsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOrderTotalDiscountsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OrderTotalDiscountApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Order Total Discounts
                ListOrderTotalDiscountsResponse result = apiInstance.ListOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountApi.ListOrderTotalDiscountsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderTotalDiscountsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Order Total Discounts
    ApiResponse<ListOrderTotalDiscountsResponse> response = apiInstance.ListOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountApi.ListOrderTotalDiscountsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

<a id="updateordertotaldiscountusingpatch"></a>
# **UpdateOrderTotalDiscountUsingPATCH**
> OrderTotalDiscount UpdateOrderTotalDiscountUsingPATCH (string discountId, UpdateOrderTotalDiscountRequest request, List<string>? updateMask = null)

Update an Order Total Discount

Updates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOrderTotalDiscountUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OrderTotalDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var request = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Total Discount
                OrderTotalDiscount result = apiInstance.UpdateOrderTotalDiscountUsingPATCH(discountId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OrderTotalDiscountApi.UpdateOrderTotalDiscountUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderTotalDiscountUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OrderTotalDiscountApi.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **request** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

