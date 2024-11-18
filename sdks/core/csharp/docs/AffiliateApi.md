# Keap.Sdk.Core.Api.AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddAffiliateToProgramUsingPOST_0**](AffiliateApi.md#addaffiliatetoprogramusingpost_0) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**AddAffiliateUsingPOST**](AffiliateApi.md#addaffiliateusingpost) | **POST** /v2/affiliates | Create an Affiliate |
| [**AddCommissionProgramUsingPOST_0**](AffiliateApi.md#addcommissionprogramusingpost_0) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**AssignProductCommissionProgramUsingPOST_0**](AffiliateApi.md#assignproductcommissionprogramusingpost_0) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**AssignSubscriptionCommissionProgramUsingPOST_0**](AffiliateApi.md#assignsubscriptioncommissionprogramusingpost_0) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**CreateAffiliateCustomFieldUsingPOST_0**](AffiliateApi.md#createaffiliatecustomfieldusingpost_0) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**CreateDefaultCommissionProgramUsingPOST_0**](AffiliateApi.md#createdefaultcommissionprogramusingpost_0) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**CreateRedirectLinkUsingPOST_0**](AffiliateApi.md#createredirectlinkusingpost_0) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**DeleteAffiliateCommissionProgramUsingDELETE_0**](AffiliateApi.md#deleteaffiliatecommissionprogramusingdelete_0) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**DeleteAffiliateUsingDELETE_0**](AffiliateApi.md#deleteaffiliateusingdelete_0) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**DeleteRedirectLinkUsingDELETE_0**](AffiliateApi.md#deleteredirectlinkusingdelete_0) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**GetAffiliateCommissionTotalUsingGET_0**](AffiliateApi.md#getaffiliatecommissiontotalusingget_0) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**GetAffiliateCommissionsUsingGET_0**](AffiliateApi.md#getaffiliatecommissionsusingget_0) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**GetAffiliateCustomFieldsUsingGET_0**](AffiliateApi.md#getaffiliatecustomfieldsusingget_0) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**GetAffiliateUsingGET1**](AffiliateApi.md#getaffiliateusingget1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**GetCommissionProgramUsingGET_0**](AffiliateApi.md#getcommissionprogramusingget_0) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**GetRedirectLinkUsingGET_0**](AffiliateApi.md#getredirectlinkusingget_0) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**ListAffiliateCommissionProgramsUsingGET_0**](AffiliateApi.md#listaffiliatecommissionprogramsusingget_0) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**ListAffiliateLinksUsingGET_0**](AffiliateApi.md#listaffiliatelinksusingget_0) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**ListSummariesUsingGET1_0**](AffiliateApi.md#listsummariesusingget1_0) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**PatchCommissionProgramUsingPATCH**](AffiliateApi.md#patchcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**PatchDefaultCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchdefaultcommissionprogramusingpatch_0) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**PatchProductCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchproductcommissionprogramusingpatch_0) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**PatchSubscriptionCommissionProgramUsingPATCH_0**](AffiliateApi.md#patchsubscriptioncommissionprogramusingpatch_0) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**RemoveAffiliateFromProgramUsingPOST_0**](AffiliateApi.md#removeaffiliatefromprogramusingpost_0) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0**](AffiliateApi.md#removesubscriptionplancommissionfromcommissionsusingpost_0) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**UpdateAffiliateCustomFieldUsingPATCH_0**](AffiliateApi.md#updateaffiliatecustomfieldusingpatch_0) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**UpdateAffiliateUsingPATCH**](AffiliateApi.md#updateaffiliateusingpatch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**UpdateRedirectLinkUsingPATCH_0**](AffiliateApi.md#updateredirectlinkusingpatch_0) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |

<a id="addaffiliatetoprogramusingpost_0"></a>
# **AddAffiliateToProgramUsingPOST_0**
> void AddAffiliateToProgramUsingPOST_0 (string id, AffiliateAddToProgramRequest affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AddAffiliateToProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest

            try
            {
                // Assign Affiliate to Commission program
                apiInstance.AddAffiliateToProgramUsingPOST_0(id, affiliateAddToProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateToProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign Affiliate to Commission program
    apiInstance.AddAffiliateToProgramUsingPOST_0WithHttpInfo(id, affiliateAddToProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddAffiliateToProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md) | affiliateAddToProgramRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addaffiliateusingpost"></a>
# **AddAffiliateUsingPOST**
> RestAffiliate AddAffiliateUsingPOST (CreateAffiliateRequest? insertAffiliate = null)

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
            var insertAffiliate = new CreateAffiliateRequest?(); // CreateAffiliateRequest? | Affiliate request to insert (optional) 

            try
            {
                // Create an Affiliate
                RestAffiliate result = apiInstance.AddAffiliateUsingPOST(insertAffiliate);
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
    ApiResponse<RestAffiliate> response = apiInstance.AddAffiliateUsingPOSTWithHttpInfo(insertAffiliate);
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
| **insertAffiliate** | [**CreateAffiliateRequest?**](CreateAffiliateRequest?.md) | Affiliate request to insert | [optional]  |

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

<a id="addcommissionprogramusingpost_0"></a>
# **AddCommissionProgramUsingPOST_0**
> AffiliateCommissionProgramResponse AddCommissionProgramUsingPOST_0 (CreateCommissionProgramRequest? insertCommissionProgram = null)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AddCommissionProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var insertCommissionProgram = new CreateCommissionProgramRequest?(); // CreateCommissionProgramRequest? | Commission Program to insert (optional) 

            try
            {
                // Create an Affiliate Commission Program
                AffiliateCommissionProgramResponse result = apiInstance.AddCommissionProgramUsingPOST_0(insertCommissionProgram);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AddCommissionProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddCommissionProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.AddCommissionProgramUsingPOST_0WithHttpInfo(insertCommissionProgram);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AddCommissionProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **insertCommissionProgram** | [**CreateCommissionProgramRequest?**](CreateCommissionProgramRequest?.md) | Commission Program to insert | [optional]  |

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
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="assignproductcommissionprogramusingpost_0"></a>
# **AssignProductCommissionProgramUsingPOST_0**
> ProductCommissionProgram AssignProductCommissionProgramUsingPOST_0 (string commissionProgramId, CreateProductCommissionProgramRequest? productCommissionProgram = null)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AssignProductCommissionProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var productCommissionProgram = new CreateProductCommissionProgramRequest?(); // CreateProductCommissionProgramRequest? | Product Commission Program (optional) 

            try
            {
                // Assign a Product Commission Program
                ProductCommissionProgram result = apiInstance.AssignProductCommissionProgramUsingPOST_0(commissionProgramId, productCommissionProgram);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignProductCommissionProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.AssignProductCommissionProgramUsingPOST_0WithHttpInfo(commissionProgramId, productCommissionProgram);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignProductCommissionProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **productCommissionProgram** | [**CreateProductCommissionProgramRequest?**](CreateProductCommissionProgramRequest?.md) | Product Commission Program | [optional]  |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

<a id="assignsubscriptioncommissionprogramusingpost_0"></a>
# **AssignSubscriptionCommissionProgramUsingPOST_0**
> SubscriptionCommissionProgram AssignSubscriptionCommissionProgramUsingPOST_0 (string commissionProgramId, CreateSubscriptionCommissionProgramRequest? subscriptionCommissionProgram = null)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AssignSubscriptionCommissionProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var subscriptionCommissionProgram = new CreateSubscriptionCommissionProgramRequest?(); // CreateSubscriptionCommissionProgramRequest? | Subscription Commission Program (optional) 

            try
            {
                // Assign a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.AssignSubscriptionCommissionProgramUsingPOST_0(commissionProgramId, subscriptionCommissionProgram);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignSubscriptionCommissionProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.AssignSubscriptionCommissionProgramUsingPOST_0WithHttpInfo(commissionProgramId, subscriptionCommissionProgram);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.AssignSubscriptionCommissionProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **subscriptionCommissionProgram** | [**CreateSubscriptionCommissionProgramRequest?**](CreateSubscriptionCommissionProgramRequest?.md) | Subscription Commission Program | [optional]  |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

<a id="createaffiliatecustomfieldusingpost_0"></a>
# **CreateAffiliateCustomFieldUsingPOST_0**
> CustomFieldMetaData CreateAffiliateCustomFieldUsingPOST_0 (CreateCustomFieldRequest customField)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateAffiliateCustomFieldUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create an Affiliate Custom Field
                CustomFieldMetaData result = apiInstance.CreateAffiliateCustomFieldUsingPOST_0(customField);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateAffiliateCustomFieldUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateAffiliateCustomFieldUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateAffiliateCustomFieldUsingPOST_0WithHttpInfo(customField);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateAffiliateCustomFieldUsingPOST_0WithHttpInfo: " + e.Message);
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

<a id="createdefaultcommissionprogramusingpost_0"></a>
# **CreateDefaultCommissionProgramUsingPOST_0**
> SetDefaultCommissionProgramResponse CreateDefaultCommissionProgramUsingPOST_0 (string commissionProgramId, CreateDefaultCommissionProgramRequest? createDefaultCommissionProgramRequest = null)

Create a Default Commission Program

Creates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateDefaultCommissionProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest?(); // CreateDefaultCommissionProgramRequest? | Values of the Default Commission Program (optional) 

            try
            {
                // Create a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.CreateDefaultCommissionProgramUsingPOST_0(commissionProgramId, createDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDefaultCommissionProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.CreateDefaultCommissionProgramUsingPOST_0WithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateDefaultCommissionProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest?**](CreateDefaultCommissionProgramRequest?.md) | Values of the Default Commission Program | [optional]  |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

<a id="createredirectlinkusingpost_0"></a>
# **CreateRedirectLinkUsingPOST_0**
> AffiliateLink CreateRedirectLinkUsingPOST_0 (CreateOrPatchAffiliateLinkRequest request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateRedirectLinkUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request

            try
            {
                // Create an Affiliate Link
                AffiliateLink result = apiInstance.CreateRedirectLinkUsingPOST_0(request);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.CreateRedirectLinkUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateRedirectLinkUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.CreateRedirectLinkUsingPOST_0WithHttpInfo(request);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.CreateRedirectLinkUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md) | request |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

<a id="deleteaffiliatecommissionprogramusingdelete_0"></a>
# **DeleteAffiliateCommissionProgramUsingDELETE_0**
> void DeleteAffiliateCommissionProgramUsingDELETE_0 (string commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteAffiliateCommissionProgramUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Delete a Commission Program
                apiInstance.DeleteAffiliateCommissionProgramUsingDELETE_0(commissionProgramId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgramUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateCommissionProgramUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Commission Program
    apiInstance.DeleteAffiliateCommissionProgramUsingDELETE_0WithHttpInfo(commissionProgramId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateCommissionProgramUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteaffiliateusingdelete_0"></a>
# **DeleteAffiliateUsingDELETE_0**
> void DeleteAffiliateUsingDELETE_0 (string id)

Delete Affiliate

Deletes the specified Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteAffiliateUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Delete Affiliate
                apiInstance.DeleteAffiliateUsingDELETE_0(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Affiliate
    apiInstance.DeleteAffiliateUsingDELETE_0WithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteAffiliateUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

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
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteredirectlinkusingdelete_0"></a>
# **DeleteRedirectLinkUsingDELETE_0**
> void DeleteRedirectLinkUsingDELETE_0 (string redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteRedirectLinkUsingDELETE_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Delete an Affiliate Link
                apiInstance.DeleteRedirectLinkUsingDELETE_0(redirectId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLinkUsingDELETE_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteRedirectLinkUsingDELETE_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Affiliate Link
    apiInstance.DeleteRedirectLinkUsingDELETE_0WithHttpInfo(redirectId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.DeleteRedirectLinkUsingDELETE_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getaffiliatecommissiontotalusingget_0"></a>
# **GetAffiliateCommissionTotalUsingGET_0**
> AffiliateCommissionEarned GetAffiliateCommissionTotalUsingGET_0 (string affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCommissionTotalUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id

            try
            {
                // Retrieve Affiliate Commission Earned and View LedgerURl for portal
                AffiliateCommissionEarned result = apiInstance.GetAffiliateCommissionTotalUsingGET_0(affiliateId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotalUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionTotalUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission Earned and View LedgerURl for portal
    ApiResponse<AffiliateCommissionEarned> response = apiInstance.GetAffiliateCommissionTotalUsingGET_0WithHttpInfo(affiliateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionTotalUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

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

<a id="getaffiliatecommissionsusingget_0"></a>
# **GetAffiliateCommissionsUsingGET_0**
> ListAffiliateCommissionResponse GetAffiliateCommissionsUsingGET_0 (string affiliateId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCommissionsUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Affiliate Commission and Clawbacks
                ListAffiliateCommissionResponse result = apiInstance.GetAffiliateCommissionsUsingGET_0(affiliateId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionsUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionsUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission and Clawbacks
    ApiResponse<ListAffiliateCommissionResponse> response = apiInstance.GetAffiliateCommissionsUsingGET_0WithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCommissionsUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)

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

<a id="getaffiliatecustomfieldsusingget_0"></a>
# **GetAffiliateCustomFieldsUsingGET_0**
> ObjectModel GetAffiliateCustomFieldsUsingGET_0 ()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCustomFieldsUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);

            try
            {
                // Retrieve Affiliate Model
                ObjectModel result = apiInstance.GetAffiliateCustomFieldsUsingGET_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetAffiliateCustomFieldsUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCustomFieldsUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Model
    ApiResponse<ObjectModel> response = apiInstance.GetAffiliateCustomFieldsUsingGET_0WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetAffiliateCustomFieldsUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ObjectModel**](ObjectModel.md)

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

<a id="getcommissionprogramusingget_0"></a>
# **GetCommissionProgramUsingGET_0**
> AffiliateProgramV2 GetCommissionProgramUsingGET_0 (string commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetCommissionProgramUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Retrieve a Commission Program
                AffiliateProgramV2 result = apiInstance.GetCommissionProgramUsingGET_0(commissionProgramId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetCommissionProgramUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCommissionProgramUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Commission Program
    ApiResponse<AffiliateProgramV2> response = apiInstance.GetCommissionProgramUsingGET_0WithHttpInfo(commissionProgramId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetCommissionProgramUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

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

<a id="getredirectlinkusingget_0"></a>
# **GetRedirectLinkUsingGET_0**
> AffiliateLink GetRedirectLinkUsingGET_0 (string redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetRedirectLinkUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Retrieve an Affiliate Link
                AffiliateLink result = apiInstance.GetRedirectLinkUsingGET_0(redirectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.GetRedirectLinkUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRedirectLinkUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.GetRedirectLinkUsingGET_0WithHttpInfo(redirectId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.GetRedirectLinkUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

<a id="listaffiliatecommissionprogramsusingget_0"></a>
# **ListAffiliateCommissionProgramsUsingGET_0**
> ListAffiliateCommissionProgramsResponse ListAffiliateCommissionProgramsUsingGET_0 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListAffiliateCommissionProgramsUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Commission Programs
                ListAffiliateCommissionProgramsResponse result = apiInstance.ListAffiliateCommissionProgramsUsingGET_0(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionProgramsUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateCommissionProgramsUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Commission Programs
    ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.ListAffiliateCommissionProgramsUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateCommissionProgramsUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

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

<a id="listaffiliatelinksusingget_0"></a>
# **ListAffiliateLinksUsingGET_0**
> ListAffiliateLinksResponse ListAffiliateLinksUsingGET_0 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListAffiliateLinksUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Links
                ListAffiliateLinksResponse result = apiInstance.ListAffiliateLinksUsingGET_0(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinksUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateLinksUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Links
    ApiResponse<ListAffiliateLinksResponse> response = apiInstance.ListAffiliateLinksUsingGET_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListAffiliateLinksUsingGET_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

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

<a id="listsummariesusingget1_0"></a>
# **ListSummariesUsingGET1_0**
> ListAffiliateSummariesResponse ListSummariesUsingGET1_0 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListSummariesUsingGET1_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Summaries
                ListAffiliateSummariesResponse result = apiInstance.ListSummariesUsingGET1_0(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.ListSummariesUsingGET1_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSummariesUsingGET1_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Summaries
    ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.ListSummariesUsingGET1_0WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.ListSummariesUsingGET1_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

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

<a id="patchdefaultcommissionprogramusingpatch_0"></a>
# **PatchDefaultCommissionProgramUsingPATCH_0**
> SetDefaultCommissionProgramResponse PatchDefaultCommissionProgramUsingPATCH_0 (string commissionProgramId, List<string>? updateMask = null, PatchDefaultCommissionProgramRequest? patchDefaultCommissionProgramRequest = null)

Update a Default Commission Program

Updates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchDefaultCommissionProgramUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchDefaultCommissionProgramRequest = new PatchDefaultCommissionProgramRequest?(); // PatchDefaultCommissionProgramRequest? | Values of the default Commission Program (optional) 

            try
            {
                // Update a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.PatchDefaultCommissionProgramUsingPATCH_0(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.PatchDefaultCommissionProgramUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchDefaultCommissionProgramUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.PatchDefaultCommissionProgramUsingPATCH_0WithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.PatchDefaultCommissionProgramUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest?**](PatchDefaultCommissionProgramRequest?.md) | Values of the default Commission Program | [optional]  |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

<a id="patchproductcommissionprogramusingpatch_0"></a>
# **PatchProductCommissionProgramUsingPATCH_0**
> ProductCommissionProgram PatchProductCommissionProgramUsingPATCH_0 (string commissionProgramId, List<string>? updateMask = null, PatchProductCommissionProgramRequest? patchProductCommissionProgramRequest = null)

Update a Product Commission Program

Updates a Product Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchProductCommissionProgramUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchProductCommissionProgramRequest = new PatchProductCommissionProgramRequest?(); // PatchProductCommissionProgramRequest? | Values of the product Commission Program (optional) 

            try
            {
                // Update a Product Commission Program
                ProductCommissionProgram result = apiInstance.PatchProductCommissionProgramUsingPATCH_0(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.PatchProductCommissionProgramUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchProductCommissionProgramUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.PatchProductCommissionProgramUsingPATCH_0WithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.PatchProductCommissionProgramUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest?**](PatchProductCommissionProgramRequest?.md) | Values of the product Commission Program | [optional]  |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

<a id="patchsubscriptioncommissionprogramusingpatch_0"></a>
# **PatchSubscriptionCommissionProgramUsingPATCH_0**
> SubscriptionCommissionProgram PatchSubscriptionCommissionProgramUsingPATCH_0 (string commissionProgramId, List<string>? updateMask = null, PatchSubscriptionCommissionProgramRequest? patchSubscriptionCommissionProgramRequest = null)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchSubscriptionCommissionProgramUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchSubscriptionCommissionProgramRequest = new PatchSubscriptionCommissionProgramRequest?(); // PatchSubscriptionCommissionProgramRequest? | Values of the subscription Commission Program (optional) 

            try
            {
                // Update a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.PatchSubscriptionCommissionProgramUsingPATCH_0(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.PatchSubscriptionCommissionProgramUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchSubscriptionCommissionProgramUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.PatchSubscriptionCommissionProgramUsingPATCH_0WithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.PatchSubscriptionCommissionProgramUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest?**](PatchSubscriptionCommissionProgramRequest?.md) | Values of the subscription Commission Program | [optional]  |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

<a id="removeaffiliatefromprogramusingpost_0"></a>
# **RemoveAffiliateFromProgramUsingPOST_0**
> void RemoveAffiliateFromProgramUsingPOST_0 (string id, AffiliateRemoveFromProgramRequest removeFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RemoveAffiliateFromProgramUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var id = "id_example";  // string | id
            var removeFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest

            try
            {
                // Remove an Affiliate from a Commission Program
                apiInstance.RemoveAffiliateFromProgramUsingPOST_0(id, removeFromProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgramUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveAffiliateFromProgramUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove an Affiliate from a Commission Program
    apiInstance.RemoveAffiliateFromProgramUsingPOST_0WithHttpInfo(id, removeFromProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveAffiliateFromProgramUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **removeFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md) | removeFromProgramRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removesubscriptionplancommissionfromcommissionsusingpost_0"></a>
# **RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0**
> void RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0 (string commissionId, DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var commissionId = "commissionId_example";  // string | commission_id
            var deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

            try
            {
                // Remove a Subscription from a Commission Program
                apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0(commissionId, deleteSubscriptionPlanCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Subscription from a Commission Program
    apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0WithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionId** | **string** | commission_id |  |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md) | deleteSubscriptionPlanCommissionRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateaffiliatecustomfieldusingpatch_0"></a>
# **UpdateAffiliateCustomFieldUsingPATCH_0**
> CustomFieldMetaData UpdateAffiliateCustomFieldUsingPATCH_0 (string customFieldId, UpdateCustomFieldMetaDataRequest request, List<string>? updateMask = null)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateAffiliateCustomFieldUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Custom Field
                CustomFieldMetaData result = apiInstance.UpdateAffiliateCustomFieldUsingPATCH_0(customFieldId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateCustomFieldUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAffiliateCustomFieldUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateAffiliateCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateAffiliateCustomFieldUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

<a id="updateaffiliateusingpatch"></a>
# **UpdateAffiliateUsingPATCH**
> RestAffiliate UpdateAffiliateUsingPATCH (string id, PatchAffiliateRequest? patchAffiliate = null)

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
            var patchAffiliate = new PatchAffiliateRequest?(); // PatchAffiliateRequest? | Affiliate request to patch (optional) 

            try
            {
                // Update an Affiliate
                RestAffiliate result = apiInstance.UpdateAffiliateUsingPATCH(id, patchAffiliate);
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
    ApiResponse<RestAffiliate> response = apiInstance.UpdateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate);
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
| **patchAffiliate** | [**PatchAffiliateRequest?**](PatchAffiliateRequest?.md) | Affiliate request to patch | [optional]  |

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

<a id="updateredirectlinkusingpatch_0"></a>
# **UpdateRedirectLinkUsingPATCH_0**
> AffiliateLink UpdateRedirectLinkUsingPATCH_0 (string redirectId, CreateOrPatchAffiliateLinkRequest request)

Update an Affiliate Link

Updates an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateRedirectLinkUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new AffiliateApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id
            var request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request

            try
            {
                // Update an Affiliate Link
                AffiliateLink result = apiInstance.UpdateRedirectLinkUsingPATCH_0(redirectId, request);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLinkUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateRedirectLinkUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.UpdateRedirectLinkUsingPATCH_0WithHttpInfo(redirectId, request);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AffiliateApi.UpdateRedirectLinkUsingPATCH_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md) | request |  |

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

