# Keap.Sdk.Core.Api.BusinessProfileApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetBusinessProfileUsingGET**](BusinessProfileApi.md#getbusinessprofileusingget) | **GET** /v2/businessProfile | Retrieve Business Profile |
| [**PatchBusinessProfileUsingPATCH**](BusinessProfileApi.md#patchbusinessprofileusingpatch) | **PATCH** /v2/businessProfile | Update Business Profile |

<a id="getbusinessprofileusingget"></a>
# **GetBusinessProfileUsingGET**
> GetBusinessProfileResponse GetBusinessProfileUsingGET ()

Retrieve Business Profile

Retrieves Business Profile information.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetBusinessProfileUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new BusinessProfileApi(config);

            try
            {
                // Retrieve Business Profile
                GetBusinessProfileResponse result = apiInstance.GetBusinessProfileUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BusinessProfileApi.GetBusinessProfileUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBusinessProfileUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Business Profile
    ApiResponse<GetBusinessProfileResponse> response = apiInstance.GetBusinessProfileUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BusinessProfileApi.GetBusinessProfileUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

<a id="patchbusinessprofileusingpatch"></a>
# **PatchBusinessProfileUsingPATCH**
> GetBusinessProfileResponse PatchBusinessProfileUsingPATCH (List<string>? updateMask = null, PatchBusinessProfileRequest? patchBusinessProfileRequest = null)

Update Business Profile

Updates Business Profile information.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchBusinessProfileUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new BusinessProfileApi(config);
            var updateMask = new List<string>?(); // List<string>? | An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional) 
            var patchBusinessProfileRequest = new PatchBusinessProfileRequest?(); // PatchBusinessProfileRequest? | businessProfile (optional) 

            try
            {
                // Update Business Profile
                GetBusinessProfileResponse result = apiInstance.PatchBusinessProfileUsingPATCH(updateMask, patchBusinessProfileRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BusinessProfileApi.PatchBusinessProfileUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchBusinessProfileUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Business Profile
    ApiResponse<GetBusinessProfileResponse> response = apiInstance.PatchBusinessProfileUsingPATCHWithHttpInfo(updateMask, patchBusinessProfileRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BusinessProfileApi.PatchBusinessProfileUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. | [optional]  |
| **patchBusinessProfileRequest** | [**PatchBusinessProfileRequest?**](PatchBusinessProfileRequest?.md) | businessProfile | [optional]  |

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

