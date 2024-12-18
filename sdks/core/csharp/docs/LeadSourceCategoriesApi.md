# Keap.Sdk.Core.Api.LeadSourceCategoriesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createleadsourcecategoryusingpost) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**DeleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteleadsourcecategoryusingdelete) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category |
| [**GetLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getleadsourcecategoryusingget) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category |

<a id="createleadsourcecategoryusingpost"></a>
# **CreateLeadSourceCategoryUsingPOST**
> LeadSourceCategory CreateLeadSourceCategoryUsingPOST (CreateUpdateLeadSourceCategoryRequest? createUpdateLeadSourceCategoryRequest = null)

Create a Lead Source Category

Create a Lead Source Category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateLeadSourceCategoryUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest?(); // CreateUpdateLeadSourceCategoryRequest? | leadSourceCategory (optional) 

            try
            {
                // Create a Lead Source Category
                LeadSourceCategory result = apiInstance.CreateLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.CreateLeadSourceCategoryUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceCategoryUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source Category
    ApiResponse<LeadSourceCategory> response = apiInstance.CreateLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.CreateLeadSourceCategoryUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest?**](CreateUpdateLeadSourceCategoryRequest?.md) | leadSourceCategory | [optional]  |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

<a id="deleteleadsourcecategoryusingdelete"></a>
# **DeleteLeadSourceCategoryUsingDELETE**
> void DeleteLeadSourceCategoryUsingDELETE (string categoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteLeadSourceCategoryUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id

            try
            {
                // Delete a Lead Source Category
                apiInstance.DeleteLeadSourceCategoryUsingDELETE(categoryId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.DeleteLeadSourceCategoryUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteLeadSourceCategoryUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Lead Source Category
    apiInstance.DeleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.DeleteLeadSourceCategoryUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |

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

<a id="getleadsourcecategoryusingget"></a>
# **GetLeadSourceCategoryUsingGET**
> LeadSourceCategory GetLeadSourceCategoryUsingGET (string categoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetLeadSourceCategoryUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new LeadSourceCategoriesApi(config);
            var categoryId = "categoryId_example";  // string | category_id

            try
            {
                // Retrieve a Lead Source Category
                LeadSourceCategory result = apiInstance.GetLeadSourceCategoryUsingGET(categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling LeadSourceCategoriesApi.GetLeadSourceCategoryUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeadSourceCategoryUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Lead Source Category
    ApiResponse<LeadSourceCategory> response = apiInstance.GetLeadSourceCategoryUsingGETWithHttpInfo(categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LeadSourceCategoriesApi.GetLeadSourceCategoryUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | category_id |  |

### Return type

[**LeadSourceCategory**](LeadSourceCategory.md)

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

