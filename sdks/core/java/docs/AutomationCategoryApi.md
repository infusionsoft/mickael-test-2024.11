# AutomationCategoryApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCategoryUsingPOST**](AutomationCategoryApi.md#createCategoryUsingPOST) | **POST** /v2/automationCategory | Create automation category |
| [**createCategoryUsingPOSTWithHttpInfo**](AutomationCategoryApi.md#createCategoryUsingPOSTWithHttpInfo) | **POST** /v2/automationCategory | Create automation category |
| [**deleteCategoriesUsingDELETE**](AutomationCategoryApi.md#deleteCategoriesUsingDELETE) | **DELETE** /v2/automationCategory | Delete automation category |
| [**deleteCategoriesUsingDELETEWithHttpInfo**](AutomationCategoryApi.md#deleteCategoriesUsingDELETEWithHttpInfo) | **DELETE** /v2/automationCategory | Delete automation category |
| [**listCategoriesUsingGET**](AutomationCategoryApi.md#listCategoriesUsingGET) | **GET** /v2/automationCategory | List automation categories |
| [**listCategoriesUsingGETWithHttpInfo**](AutomationCategoryApi.md#listCategoriesUsingGETWithHttpInfo) | **GET** /v2/automationCategory | List automation categories |
| [**saveCategoryUsingPUT**](AutomationCategoryApi.md#saveCategoryUsingPUT) | **PUT** /v2/automationCategory | Save automation category |
| [**saveCategoryUsingPUTWithHttpInfo**](AutomationCategoryApi.md#saveCategoryUsingPUTWithHttpInfo) | **PUT** /v2/automationCategory | Save automation category |



## createCategoryUsingPOST

> AutomationCategory createCategoryUsingPOST(createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        CreateAutomationCategoryRequest createAutomationCategoryRequest = new CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest
        try {
            AutomationCategory result = apiInstance.createCategoryUsingPOST(createAutomationCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#createCategoryUsingPOST");
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
| **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | |

### Return type

[**AutomationCategory**](AutomationCategory.md)


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

## createCategoryUsingPOSTWithHttpInfo

> ApiResponse<AutomationCategory> createCategoryUsingPOST createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest)

Create automation category

Creates a single automation category

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        CreateAutomationCategoryRequest createAutomationCategoryRequest = new CreateAutomationCategoryRequest(); // CreateAutomationCategoryRequest | createAutomationCategoryRequest
        try {
            ApiResponse<AutomationCategory> response = apiInstance.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#createCategoryUsingPOST");
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
| **createAutomationCategoryRequest** | [**CreateAutomationCategoryRequest**](CreateAutomationCategoryRequest.md)| createAutomationCategoryRequest | |

### Return type

ApiResponse<[**AutomationCategory**](AutomationCategory.md)>


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


## deleteCategoriesUsingDELETE

> void deleteCategoriesUsingDELETE(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        List<Long> ids = Arrays.asList(); // List<Long> | ids
        try {
            apiInstance.deleteCategoriesUsingDELETE(ids);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#deleteCategoriesUsingDELETE");
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
| **ids** | [**List&lt;Long&gt;**](Long.md)| ids | |

### Return type


null (empty response body)

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

## deleteCategoriesUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteCategoriesUsingDELETE deleteCategoriesUsingDELETEWithHttpInfo(ids)

Delete automation category

Deletes one or more automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        List<Long> ids = Arrays.asList(); // List<Long> | ids
        try {
            ApiResponse<Void> response = apiInstance.deleteCategoriesUsingDELETEWithHttpInfo(ids);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#deleteCategoriesUsingDELETE");
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
| **ids** | [**List&lt;Long&gt;**](Long.md)| ids | |

### Return type


ApiResponse<Void>

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


## listCategoriesUsingGET

> ListAutomationCategoryResponse listCategoriesUsingGET()

List automation categories

Lists all automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        try {
            ListAutomationCategoryResponse result = apiInstance.listCategoriesUsingGET();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#listCategoriesUsingGET");
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

[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)


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

## listCategoriesUsingGETWithHttpInfo

> ApiResponse<ListAutomationCategoryResponse> listCategoriesUsingGET listCategoriesUsingGETWithHttpInfo()

List automation categories

Lists all automation categories based on the request parameters

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        try {
            ApiResponse<ListAutomationCategoryResponse> response = apiInstance.listCategoriesUsingGETWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#listCategoriesUsingGET");
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

ApiResponse<[**ListAutomationCategoryResponse**](ListAutomationCategoryResponse.md)>


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


## saveCategoryUsingPUT

> AutomationCategory saveCategoryUsingPUT(saveAutomationCategoryRequest)

Save automation category

Creates or updates a single automation category

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        SaveAutomationCategoryRequest saveAutomationCategoryRequest = new SaveAutomationCategoryRequest(); // SaveAutomationCategoryRequest | saveAutomationCategoryRequest
        try {
            AutomationCategory result = apiInstance.saveCategoryUsingPUT(saveAutomationCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#saveCategoryUsingPUT");
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
| **saveAutomationCategoryRequest** | [**SaveAutomationCategoryRequest**](SaveAutomationCategoryRequest.md)| saveAutomationCategoryRequest | |

### Return type

[**AutomationCategory**](AutomationCategory.md)


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

## saveCategoryUsingPUTWithHttpInfo

> ApiResponse<AutomationCategory> saveCategoryUsingPUT saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest)

Save automation category

Creates or updates a single automation category

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.AutomationCategoryApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AutomationCategoryApi apiInstance = new AutomationCategoryApi(defaultClient);
        SaveAutomationCategoryRequest saveAutomationCategoryRequest = new SaveAutomationCategoryRequest(); // SaveAutomationCategoryRequest | saveAutomationCategoryRequest
        try {
            ApiResponse<AutomationCategory> response = apiInstance.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AutomationCategoryApi#saveCategoryUsingPUT");
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
| **saveAutomationCategoryRequest** | [**SaveAutomationCategoryRequest**](SaveAutomationCategoryRequest.md)| saveAutomationCategoryRequest | |

### Return type

ApiResponse<[**AutomationCategory**](AutomationCategory.md)>


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

