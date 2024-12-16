# SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelSubscriptionUsingPOST**](SubscriptionsApi.md#cancelSubscriptionUsingPOST) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**cancelSubscriptionUsingPOSTWithHttpInfo**](SubscriptionsApi.md#cancelSubscriptionUsingPOSTWithHttpInfo) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**createSubscriptionCustomFieldUsingPOST**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOST) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**createSubscriptionCustomFieldUsingPOSTWithHttpInfo**](SubscriptionsApi.md#createSubscriptionCustomFieldUsingPOSTWithHttpInfo) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**createSubscriptionV2UsingPOST**](SubscriptionsApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription |
| [**createSubscriptionV2UsingPOSTWithHttpInfo**](SubscriptionsApi.md#createSubscriptionV2UsingPOSTWithHttpInfo) | **POST** /v2/subscriptions | Create Subscription |
| [**listSubscriptionsUsingGET1**](SubscriptionsApi.md#listSubscriptionsUsingGET1) | **GET** /v2/subscriptions | List Subscriptions |
| [**listSubscriptionsUsingGET1WithHttpInfo**](SubscriptionsApi.md#listSubscriptionsUsingGET1WithHttpInfo) | **GET** /v2/subscriptions | List Subscriptions |
| [**retrieveSubscriptionCustomFieldModelUsingGET**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGET) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo**](SubscriptionsApi.md#retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**updateSubscriptionCustomFieldUsingPATCH**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCH) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |
| [**updateSubscriptionCustomFieldUsingPATCHWithHttpInfo**](SubscriptionsApi.md#updateSubscriptionCustomFieldUsingPATCHWithHttpInfo) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |



## cancelSubscriptionUsingPOST

> void cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        CancelSubscriptionsRequest cancelSubscriptionsRequest = new CancelSubscriptionsRequest(); // CancelSubscriptionsRequest | cancelSubscriptionsRequest
        try {
            apiInstance.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#cancelSubscriptionUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | **String**| subscription_id | |
| **cancelSubscriptionsRequest** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | |

### Return type


null (empty response body)

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

## cancelSubscriptionUsingPOSTWithHttpInfo

> ApiResponse<Void> cancelSubscriptionUsingPOST cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | subscription_id
        CancelSubscriptionsRequest cancelSubscriptionsRequest = new CancelSubscriptionsRequest(); // CancelSubscriptionsRequest | cancelSubscriptionsRequest
        try {
            ApiResponse<Void> response = apiInstance.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#cancelSubscriptionUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | **String**| subscription_id | |
| **cancelSubscriptionsRequest** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | |

### Return type


ApiResponse<Void>

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


## createSubscriptionCustomFieldUsingPOST

> CustomFieldMetaData createSubscriptionCustomFieldUsingPOST(customField)

Create a Subscription&#39;s Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CustomFieldMetaData result = apiInstance.createSubscriptionCustomFieldUsingPOST(customField);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionCustomFieldUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

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

## createSubscriptionCustomFieldUsingPOSTWithHttpInfo

> ApiResponse<CustomFieldMetaData> createSubscriptionCustomFieldUsingPOST createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField)

Create a Subscription&#39;s Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionCustomFieldUsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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


## createSubscriptionV2UsingPOST

> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateSubscriptionV2 createSubscriptionV2 = new CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
        try {
            RestSubscriptionV2 result = apiInstance.createSubscriptionV2UsingPOST(createSubscriptionV2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionV2UsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)


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

## createSubscriptionV2UsingPOSTWithHttpInfo

> ApiResponse<RestSubscriptionV2> createSubscriptionV2UsingPOST createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        CreateSubscriptionV2 createSubscriptionV2 = new CreateSubscriptionV2(); // CreateSubscriptionV2 | createSubscriptionV2
        try {
            ApiResponse<RestSubscriptionV2> response = apiInstance.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#createSubscriptionV2UsingPOST");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createSubscriptionV2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | |

### Return type

ApiResponse<[**RestSubscriptionV2**](RestSubscriptionV2.md)>


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


## listSubscriptionsUsingGET1

> ListSubscriptionsResponse listSubscriptionsUsingGET1(filter, orderBy, pageSize, pageToken)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListSubscriptionsResponse result = apiInstance.listSubscriptionsUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#listSubscriptionsUsingGET1");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)


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

## listSubscriptionsUsingGET1WithHttpInfo

> ApiResponse<ListSubscriptionsResponse> listSubscriptionsUsingGET1 listSubscriptionsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListSubscriptionsResponse> response = apiInstance.listSubscriptionsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#listSubscriptionsUsingGET1");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)>


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


## retrieveSubscriptionCustomFieldModelUsingGET

> ObjectModel retrieveSubscriptionCustomFieldModelUsingGET()

Retrieve Subscription&#39;s Custom Field Model

Gets the custom field&#39;s model for the Subscription object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveSubscriptionCustomFieldModelUsingGET();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#retrieveSubscriptionCustomFieldModelUsingGET");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
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

## retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo

> ApiResponse<ObjectModel> retrieveSubscriptionCustomFieldModelUsingGET retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo()

Retrieve Subscription&#39;s Custom Field Model

Gets the custom field&#39;s model for the Subscription object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#retrieveSubscriptionCustomFieldModelUsingGET");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**ObjectModel**](ObjectModel.md)>


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


## updateSubscriptionCustomFieldUsingPATCH

> CustomFieldMetaData updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask)

Update a Subscription&#39;s Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscriptionCustomFieldUsingPATCH");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

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

## updateSubscriptionCustomFieldUsingPATCHWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateSubscriptionCustomFieldUsingPATCH updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask)

Update a Subscription&#39;s Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.SubscriptionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        SubscriptionsApi apiInstance = new SubscriptionsApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SubscriptionsApi#updateSubscriptionCustomFieldUsingPATCH");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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

