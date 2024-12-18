# LeadSourceCategoriesApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLeadSourceCategoryUsingPOST**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOST) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**createLeadSourceCategoryUsingPOSTWithHttpInfo**](LeadSourceCategoriesApi.md#createLeadSourceCategoryUsingPOSTWithHttpInfo) | **POST** /v2/leadSourceCategories | Create a Lead Source Category |
| [**deleteLeadSourceCategoryUsingDELETE**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETE) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category |
| [**deleteLeadSourceCategoryUsingDELETEWithHttpInfo**](LeadSourceCategoriesApi.md#deleteLeadSourceCategoryUsingDELETEWithHttpInfo) | **DELETE** /v2/leadSourceCategories/{category_id} | Delete a Lead Source Category |
| [**getLeadSourceCategoryUsingGET**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGET) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category |
| [**getLeadSourceCategoryUsingGETWithHttpInfo**](LeadSourceCategoriesApi.md#getLeadSourceCategoryUsingGETWithHttpInfo) | **GET** /v2/leadSourceCategories/{category_id} | Retrieve a Lead Source Category |



## createLeadSourceCategoryUsingPOST

> LeadSourceCategory createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Create a Lead Source Category.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | leadSourceCategory
        try {
            LeadSourceCategory result = apiInstance.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#createLeadSourceCategoryUsingPOST");
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
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| leadSourceCategory | [optional] |

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

## createLeadSourceCategoryUsingPOSTWithHttpInfo

> ApiResponse<LeadSourceCategory> createLeadSourceCategoryUsingPOST createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest)

Create a Lead Source Category

Create a Lead Source Category.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        CreateUpdateLeadSourceCategoryRequest createUpdateLeadSourceCategoryRequest = new CreateUpdateLeadSourceCategoryRequest(); // CreateUpdateLeadSourceCategoryRequest | leadSourceCategory
        try {
            ApiResponse<LeadSourceCategory> response = apiInstance.createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#createLeadSourceCategoryUsingPOST");
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
| **createUpdateLeadSourceCategoryRequest** | [**CreateUpdateLeadSourceCategoryRequest**](CreateUpdateLeadSourceCategoryRequest.md)| leadSourceCategory | [optional] |

### Return type

ApiResponse<[**LeadSourceCategory**](LeadSourceCategory.md)>


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


## deleteLeadSourceCategoryUsingDELETE

> void deleteLeadSourceCategoryUsingDELETE(categoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        try {
            apiInstance.deleteLeadSourceCategoryUsingDELETE(categoryId);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#deleteLeadSourceCategoryUsingDELETE");
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
| **categoryId** | **String**| category_id | |

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

## deleteLeadSourceCategoryUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteLeadSourceCategoryUsingDELETE deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId)

Delete a Lead Source Category

Deletes the specified Lead Source Category.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        try {
            ApiResponse<Void> response = apiInstance.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#deleteLeadSourceCategoryUsingDELETE");
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
| **categoryId** | **String**| category_id | |

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


## getLeadSourceCategoryUsingGET

> LeadSourceCategory getLeadSourceCategoryUsingGET(categoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        try {
            LeadSourceCategory result = apiInstance.getLeadSourceCategoryUsingGET(categoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#getLeadSourceCategoryUsingGET");
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
| **categoryId** | **String**| category_id | |

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

## getLeadSourceCategoryUsingGETWithHttpInfo

> ApiResponse<LeadSourceCategory> getLeadSourceCategoryUsingGET getLeadSourceCategoryUsingGETWithHttpInfo(categoryId)

Retrieve a Lead Source Category

Retrieves a single Lead Source Category for a given id

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.LeadSourceCategoriesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        LeadSourceCategoriesApi apiInstance = new LeadSourceCategoriesApi(defaultClient);
        String categoryId = "categoryId_example"; // String | category_id
        try {
            ApiResponse<LeadSourceCategory> response = apiInstance.getLeadSourceCategoryUsingGETWithHttpInfo(categoryId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling LeadSourceCategoriesApi#getLeadSourceCategoryUsingGET");
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
| **categoryId** | **String**| category_id | |

### Return type

ApiResponse<[**LeadSourceCategory**](LeadSourceCategory.md)>


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

