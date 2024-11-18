# Keap.Sdk.Core.Api.SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CancelSubscriptionUsingPOST_0**](SubscriptionsApi.md#cancelsubscriptionusingpost_0) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**CreateSubscriptionCustomFieldUsingPOST_0**](SubscriptionsApi.md#createsubscriptioncustomfieldusingpost_0) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**RetrieveSubscriptionCustomFieldModelUsingGET_0**](SubscriptionsApi.md#retrievesubscriptioncustomfieldmodelusingget_0) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**UpdateSubscriptionCustomFieldUsingPATCH_0**](SubscriptionsApi.md#updatesubscriptioncustomfieldusingpatch_0) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |

<a id="cancelsubscriptionusingpost_0"></a>
# **CancelSubscriptionUsingPOST_0**
> void CancelSubscriptionUsingPOST_0 (string subscriptionId, CancelSubscriptionsRequest cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CancelSubscriptionUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new SubscriptionsApi(config);
            var subscriptionId = "subscriptionId_example";  // string | subscription_id
            var cancelSubscriptionsRequest = new CancelSubscriptionsRequest(); // CancelSubscriptionsRequest | cancelSubscriptionsRequest

            try
            {
                // Cancel Subscription
                apiInstance.CancelSubscriptionUsingPOST_0(subscriptionId, cancelSubscriptionsRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CancelSubscriptionUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CancelSubscriptionUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Cancel Subscription
    apiInstance.CancelSubscriptionUsingPOST_0WithHttpInfo(subscriptionId, cancelSubscriptionsRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CancelSubscriptionUsingPOST_0WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** | subscription_id |  |
| **cancelSubscriptionsRequest** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md) | cancelSubscriptionsRequest |  |

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

<a id="createsubscriptioncustomfieldusingpost_0"></a>
# **CreateSubscriptionCustomFieldUsingPOST_0**
> CustomFieldMetaData CreateSubscriptionCustomFieldUsingPOST_0 (CreateCustomFieldRequest customField)

Create a Subscription's Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateSubscriptionCustomFieldUsingPOST_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new SubscriptionsApi(config);
            var customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Subscription's Custom Field
                CustomFieldMetaData result = apiInstance.CreateSubscriptionCustomFieldUsingPOST_0(customField);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldUsingPOST_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldUsingPOST_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateSubscriptionCustomFieldUsingPOST_0WithHttpInfo(customField);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.CreateSubscriptionCustomFieldUsingPOST_0WithHttpInfo: " + e.Message);
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

<a id="retrievesubscriptioncustomfieldmodelusingget_0"></a>
# **RetrieveSubscriptionCustomFieldModelUsingGET_0**
> ObjectModel RetrieveSubscriptionCustomFieldModelUsingGET_0 ()

Retrieve Subscription's Custom Field Model

Gets the custom field's model for the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveSubscriptionCustomFieldModelUsingGET_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new SubscriptionsApi(config);

            try
            {
                // Retrieve Subscription's Custom Field Model
                ObjectModel result = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGET_0();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModelUsingGET_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveSubscriptionCustomFieldModelUsingGET_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Subscription's Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGET_0WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.RetrieveSubscriptionCustomFieldModelUsingGET_0WithHttpInfo: " + e.Message);
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

<a id="updatesubscriptioncustomfieldusingpatch_0"></a>
# **UpdateSubscriptionCustomFieldUsingPATCH_0**
> CustomFieldMetaData UpdateSubscriptionCustomFieldUsingPATCH_0 (string customFieldId, UpdateCustomFieldMetaDataRequest request, List<string>? updateMask = null)

Update a Subscription's Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateSubscriptionCustomFieldUsingPATCH_0Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new SubscriptionsApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateSubscriptionCustomFieldUsingPATCH_0(customFieldId, request, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldUsingPATCH_0: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldUsingPATCH_0WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateSubscriptionCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionsApi.UpdateSubscriptionCustomFieldUsingPATCH_0WithHttpInfo: " + e.Message);
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

