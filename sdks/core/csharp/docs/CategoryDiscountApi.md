# Keap.Sdk.Core.Api.CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateDiscountUsingPOST**](CategoryDiscountApi.md#creatediscountusingpost) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**DeleteDiscountUsingDELETE**](CategoryDiscountApi.md#deletediscountusingdelete) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**GetDiscountUsingGET**](CategoryDiscountApi.md#getdiscountusingget) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**UpdateDiscountUsingPATCH**](CategoryDiscountApi.md#updatediscountusingpatch) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |

<a id="creatediscountusingpost"></a>
# **CreateDiscountUsingPOST**
> CategoryDiscount CreateDiscountUsingPOST (CreateUpdateDiscountRequest createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateDiscountUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new CategoryDiscountApi(config);
            var createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request

            try
            {
                // Create a Category Discount
                CategoryDiscount result = apiInstance.CreateDiscountUsingPOST(createUpdateDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountApi.CreateDiscountUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDiscountUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.CreateDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountApi.CreateDiscountUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md) | request |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

<a id="deletediscountusingdelete"></a>
# **DeleteDiscountUsingDELETE**
> void DeleteDiscountUsingDELETE (string discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteDiscountUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new CategoryDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Category Discount
                apiInstance.DeleteDiscountUsingDELETE(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountApi.DeleteDiscountUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Category Discount
    apiInstance.DeleteDiscountUsingDELETEWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountApi.DeleteDiscountUsingDELETEWithHttpInfo: " + e.Message);
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

<a id="getdiscountusingget"></a>
# **GetDiscountUsingGET**
> CategoryDiscount GetDiscountUsingGET (string discountId)

Retrieve a Category Discount

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
    public class GetDiscountUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new CategoryDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve a Category Discount
                CategoryDiscount result = apiInstance.GetDiscountUsingGET(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountApi.GetDiscountUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDiscountUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.GetDiscountUsingGETWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountApi.GetDiscountUsingGETWithHttpInfo: " + e.Message);
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

<a id="updatediscountusingpatch"></a>
# **UpdateDiscountUsingPATCH**
> CategoryDiscount UpdateDiscountUsingPATCH (string discountId, CreateUpdateDiscountRequest createUpdateDiscountRequest, List<string>? updateMask = null)

Update a Category Discount

Update a Category Discount.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateDiscountUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new CategoryDiscountApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Category Discount
                CategoryDiscount result = apiInstance.UpdateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling CategoryDiscountApi.UpdateDiscountUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDiscountUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.UpdateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling CategoryDiscountApi.UpdateDiscountUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

