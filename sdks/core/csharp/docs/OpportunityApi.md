# Keap.Sdk.Core.Api.OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateOpportunityCustomFieldsUsingPOST_0**](OpportunityApi.md#createopportunitycustomfieldsusingpost_0) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**CreateOpportunityStageUsingPOST_0**](OpportunityApi.md#createopportunitystageusingpost_0) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**CreateOpportunityUsingPOST1_0**](OpportunityApi.md#createopportunityusingpost1_0) | **POST** /v2/opportunities | Create an Opportunity |
| [**DeleteOpportunityStageUsingDELETE_0**](OpportunityApi.md#deleteopportunitystageusingdelete_0) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**DeleteOpportunityUsingDELETE_0**](OpportunityApi.md#deleteopportunityusingdelete_0) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**GetOpportunityStageUsingGET_0**](OpportunityApi.md#getopportunitystageusingget_0) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**GetOpportunityUsingGET1_0**](OpportunityApi.md#getopportunityusingget1_0) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**ListOpportunitiesUsingGET1_0**](OpportunityApi.md#listopportunitiesusingget1_0) | **GET** /v2/opportunities | List Opportunities |
| [**ListOpportunityStagesUsingGET_0**](OpportunityApi.md#listopportunitystagesusingget_0) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**UpdateOpportunityCustomFieldUsingPATCH_0**](OpportunityApi.md#updateopportunitycustomfieldusingpatch_0) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**UpdateOpportunityUsingPATCH_0**](OpportunityApi.md#updateopportunityusingpatch_0) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |

<a id="createopportunitycustomfieldsusingpost_0"></a>
# **CreateOpportunityCustomFieldsUsingPOST_0**
> CustomFieldMetaData CreateOpportunityCustomFieldsUsingPOST_0 (CreateCustomFieldRequest customField)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityCustomFieldsUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create an Opportunity Custom Field
                CustomFieldMetaData result = apiInstance.CreateOpportunityCustomFieldsUsingPOST_0(customField);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldsUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityCustomFieldsUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateOpportunityCustomFieldsUsingPOST_0WithHttpInfo(customField);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityCustomFieldsUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="createopportunitystageusingpost_0"></a>
# **CreateOpportunityStageUsingPOST_0**
> RestOpportunityStage CreateOpportunityStageUsingPOST_0 (CreateOpportunityStageRequest? opportunityStage = null)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityStageUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var opportunityStage = new CreateOpportunityStageRequest?(); // CreateOpportunityStageRequest? | opportunity (optional) 

            try
            {
                // Create an Opportunity Stage
                RestOpportunityStage result = apiInstance.CreateOpportunityStageUsingPOST_0(opportunityStage);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityStageUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityStageUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.CreateOpportunityStageUsingPOST_0WithHttpInfo(opportunityStage);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityStageUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityStage** | [**CreateOpportunityStageRequest?**](CreateOpportunityStageRequest?.md) | opportunity | [optional]  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

<a id="createopportunityusingpost1_0"></a>
# **CreateOpportunityUsingPOST1_0**
> RestV2Opportunity CreateOpportunityUsingPOST1_0 (CreateOpportunityRequest? opportunity = null)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityUsingPOST1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var opportunity = new CreateOpportunityRequest?(); // CreateOpportunityRequest? | opportunity (optional) 

            try
            {
                // Create an Opportunity
                RestV2Opportunity result = apiInstance.CreateOpportunityUsingPOST1_0(opportunity);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.CreateOpportunityUsingPOST1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityUsingPOST1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.CreateOpportunityUsingPOST1_0WithHttpInfo(opportunity);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.CreateOpportunityUsingPOST1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunity** | [**CreateOpportunityRequest?**](CreateOpportunityRequest?.md) | opportunity | [optional]  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

<a id="deleteopportunitystageusingdelete_0"></a>
# **DeleteOpportunityStageUsingDELETE_0**
> void DeleteOpportunityStageUsingDELETE_0 (string stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOpportunityStageUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var stageId = "stageId_example";  // string | stage_id

            try
            {
                // Delete an Opportunity Stage
                apiInstance.DeleteOpportunityStageUsingDELETE_0(stageId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityStageUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityStageUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Stage
    apiInstance.DeleteOpportunityStageUsingDELETE_0WithHttpInfo(stageId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityStageUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** | stage_id |  |

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

<a id="deleteopportunityusingdelete_0"></a>
# **DeleteOpportunityUsingDELETE_0**
> void DeleteOpportunityUsingDELETE_0 (string opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOpportunityUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id

            try
            {
                // Delete an Opportunity
                apiInstance.DeleteOpportunityUsingDELETE_0(opportunityId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity
    apiInstance.DeleteOpportunityUsingDELETE_0WithHttpInfo(opportunityId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.DeleteOpportunityUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |

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

<a id="getopportunitystageusingget_0"></a>
# **GetOpportunityStageUsingGET_0**
> RestOpportunityStage GetOpportunityStageUsingGET_0 (string stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOpportunityStageUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var stageId = "stageId_example";  // string | stage_id

            try
            {
                // Retrieve an Opportunity Stage
                RestOpportunityStage result = apiInstance.GetOpportunityStageUsingGET_0(stageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityStageUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityStageUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.GetOpportunityStageUsingGET_0WithHttpInfo(stageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityStageUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** | stage_id |  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

<a id="getopportunityusingget1_0"></a>
# **GetOpportunityUsingGET1_0**
> RestV2Opportunity GetOpportunityUsingGET1_0 (string opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOpportunityUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id

            try
            {
                // Retrieve a Opportunity
                RestV2Opportunity result = apiInstance.GetOpportunityUsingGET1_0(opportunityId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.GetOpportunityUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.GetOpportunityUsingGET1_0WithHttpInfo(opportunityId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.GetOpportunityUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

<a id="listopportunitiesusingget1_0"></a>
# **ListOpportunitiesUsingGET1_0**
> ListOpportunitiesResponse ListOpportunitiesUsingGET1_0 (List<string>? fields = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Opportunities

Retrieves a list of all Opportunities.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOpportunitiesUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var fields = new List<string>?(); // List<string>? | fields (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Opportunities
                ListOpportunitiesResponse result = apiInstance.ListOpportunitiesUsingGET1_0(fields, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunitiesUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunitiesUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunities
    ApiResponse<ListOpportunitiesResponse> response = apiInstance.ListOpportunitiesUsingGET1_0WithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunitiesUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) | fields | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

<a id="listopportunitystagesusingget_0"></a>
# **ListOpportunityStagesUsingGET_0**
> ListOpportunityStagesResponse ListOpportunityStagesUsingGET_0 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOpportunityStagesUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List of Opportunity Stages
                ListOpportunityStagesResponse result = apiInstance.ListOpportunityStagesUsingGET_0(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.ListOpportunityStagesUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityStagesUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List of Opportunity Stages
    ApiResponse<ListOpportunityStagesResponse> response = apiInstance.ListOpportunityStagesUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.ListOpportunityStagesUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

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

<a id="updateopportunitycustomfieldusingpatch_0"></a>
# **UpdateOpportunityCustomFieldUsingPATCH_0**
> CustomFieldMetaData UpdateOpportunityCustomFieldUsingPATCH_0 (string customFieldId, UpdateCustomFieldMetaDataRequest request, List<string>? updateMask = null)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOpportunityCustomFieldUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Opportunity's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateOpportunityCustomFieldUsingPATCH_0(customFieldId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityCustomFieldUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Opportunity's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateOpportunityCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityCustomFieldUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

<a id="updateopportunityusingpatch_0"></a>
# **UpdateOpportunityUsingPATCH_0**
> RestV2Opportunity UpdateOpportunityUsingPATCH_0 (string opportunityId, PatchOpportunityRequest request, List<string>? updateMask = null)

Update an opportunity

Updates specified values of a given opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOpportunityUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new OpportunityApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id
            var request = new PatchOpportunityRequest(); // PatchOpportunityRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an opportunity
                RestV2Opportunity result = apiInstance.UpdateOpportunityUsingPATCH_0(opportunityId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.UpdateOpportunityUsingPATCH_0WithHttpInfo(opportunityId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OpportunityApi.UpdateOpportunityUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |
| **request** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

