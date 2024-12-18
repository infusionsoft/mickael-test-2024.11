# Keap.Sdk.Core.Api.AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddAffiliateUsingPOST**](AffiliateApi.md#addaffiliateusingpost) | **POST** /v2/affiliates | Create an Affiliate |
| [**GetAffiliateUsingGET1**](AffiliateApi.md#getaffiliateusingget1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**PatchCommissionProgramUsingPATCH**](AffiliateApi.md#patchcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**UpdateAffiliateUsingPATCH**](AffiliateApi.md#updateaffiliateusingpatch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |

<a id="addaffiliateusingpost"></a>
# **AddAffiliateUsingPOST**
> RestAffiliate AddAffiliateUsingPOST (CreateAffiliateRequest? createAffiliateRequest = null)

Create an Affiliate

Creates a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AddAffiliateUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var createAffiliateRequest = new CreateAffiliateRequest?(); // CreateAffiliateRequest? | Affiliate request to insert (optional) 

            try
            {
                // Create an Affiliate
                RestAffiliate result = apiInstance.AddAffiliateUsingPOST(createAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliateUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.AddAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createAffiliateRequest** | [**CreateAffiliateRequest?**](CreateAffiliateRequest?.md) | Affiliate request to insert | [optional]  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

<a id="getaffiliateusingget1"></a>
# **GetAffiliateUsingGET1**
> RestAffiliate GetAffiliateUsingGET1 (string id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Retrieve an Affiliate
                RestAffiliate result = apiInstance.GetAffiliateUsingGET1(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.GetAffiliateUsingGET1WithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

<a id="patchcommissionprogramusingpatch"></a>
# **PatchCommissionProgramUsingPATCH**
> AffiliateCommissionProgramResponse PatchCommissionProgramUsingPATCH (string commissionProgramId, PatchCommissionProgramRequest patchCommissionProgramRequest, List<string>? updateMask = null)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchCommissionProgramUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var patchCommissionProgramRequest = new PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Affiliate Commission Program
                AffiliateCommissionProgramResponse result = apiInstance.PatchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.PatchCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.PatchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.PatchCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md) | patchCommissionProgramRequest |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

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

<a id="updateaffiliateusingpatch"></a>
# **UpdateAffiliateUsingPATCH**
> RestAffiliate UpdateAffiliateUsingPATCH (string id, PatchAffiliateRequest? patchAffiliateRequest = null)

Update an Affiliate

Updates a single Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateAffiliateUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var patchAffiliateRequest = new PatchAffiliateRequest?(); // PatchAffiliateRequest? | Affiliate request to patch (optional) 

            try
            {
                // Update an Affiliate
                RestAffiliate result = apiInstance.UpdateAffiliateUsingPATCH(id, patchAffiliateRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAffiliateUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate
    ApiResponse<RestAffiliate> response = apiInstance.UpdateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **patchAffiliateRequest** | [**PatchAffiliateRequest?**](PatchAffiliateRequest?.md) | Affiliate request to patch | [optional]  |

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

