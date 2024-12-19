# StagesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**create1**](StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity. |
| [**create1WithHttpInfo**](StagesApi.md#create1WithHttpInfo) | **POST** /v2/stages | Creates a new entity. |
| [**delete2**](StagesApi.md#delete2) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**delete2WithHttpInfo**](StagesApi.md#delete2WithHttpInfo) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant. |
| [**get1**](StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**get1WithHttpInfo**](StagesApi.md#get1WithHttpInfo) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier. |
| [**list1**](StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**list1WithHttpInfo**](StagesApi.md#list1WithHttpInfo) | **GET** /v2/stages | Lists entities based on the provided ListCommand. |
| [**listStages1**](StagesApi.md#listStages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**listStages1WithHttpInfo**](StagesApi.md#listStages1WithHttpInfo) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage. |
| [**update2**](StagesApi.md#update2) | **PATCH** /v2/stages/{id} | Updates an existing entity. |
| [**update2WithHttpInfo**](StagesApi.md#update2WithHttpInfo) | **PATCH** /v2/stages/{id} | Updates an existing entity. |



## create1

> Stage create1(createStageRequest)

Creates a new entity.

Creates a new entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        CreateStageRequest createStageRequest = new CreateStageRequest(); // CreateStageRequest | the create request
        try {
            Stage result = apiInstance.create1(createStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#create1");
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
| **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The create_1d entity |  -  |

## create1WithHttpInfo

> ApiResponse<Stage> create1 create1WithHttpInfo(createStageRequest)

Creates a new entity.

Creates a new entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        CreateStageRequest createStageRequest = new CreateStageRequest(); // CreateStageRequest | the create request
        try {
            ApiResponse<Stage> response = apiInstance.create1WithHttpInfo(createStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#create1");
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
| **createStageRequest** | [**CreateStageRequest**](CreateStageRequest.md)| the create request | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The create_1d entity |  -  |


## delete2

> void delete2(id, newStageId)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            apiInstance.delete2(id, newStageId);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#delete2");
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
| **id** | **String**| the stage identifier | |
| **newStageId** | **String**| the new stage identifier, can be null | [optional] |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A response indicating no content |  -  |

## delete2WithHttpInfo

> ApiResponse<Void> delete2 delete2WithHttpInfo(id, newStageId)

Deletes a stage by its identifier for a given tenant.

Deletes a stage by its identifier for a given tenant.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            ApiResponse<Void> response = apiInstance.delete2WithHttpInfo(id, newStageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#delete2");
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
| **id** | **String**| the stage identifier | |
| **newStageId** | **String**| the new stage identifier, can be null | [optional] |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | A response indicating no content |  -  |


## get1

> Stage get1(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            Stage result = apiInstance.get1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#get1");
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
| **id** | **String**| the entity identifier | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |

## get1WithHttpInfo

> ApiResponse<Stage> get1 get1WithHttpInfo(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            ApiResponse<Stage> response = apiInstance.get1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#get1");
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
| **id** | **String**| the entity identifier | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |


## list1

> StageListResponse list1(filter, pageToken, orderBy, pageSize)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            StageListResponse result = apiInstance.list1(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#list1");
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
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**StageListResponse**](StageListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list_1 of entities |  -  |

## list1WithHttpInfo

> ApiResponse<StageListResponse> list1 list1WithHttpInfo(filter, pageToken, orderBy, pageSize)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<StageListResponse> response = apiInstance.list1WithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#list1");
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
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**StageListResponse**](StageListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list_1 of entities |  -  |


## listStages1

> StageDealListResponse listStages1(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            StageDealListResponse result = apiInstance.listStages1(id, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#listStages1");
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
| **id** | **String**| the stage identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**StageDealListResponse**](StageDealListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of deals and the next page token |  -  |

## listStages1WithHttpInfo

> ApiResponse<StageDealListResponse> listStages1 listStages1WithHttpInfo(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of deals for a specific stage.

Retrieves a list of deals for a specific stage.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the stage identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<StageDealListResponse> response = apiInstance.listStages1WithHttpInfo(id, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#listStages1");
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
| **id** | **String**| the stage identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**StageDealListResponse**](StageDealListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of deals and the next page token |  -  |


## update2

> Stage update2(id, updateMask, updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdateStageRequest updateStageRequest = new UpdateStageRequest(); // UpdateStageRequest | the update request
        try {
            Stage result = apiInstance.update2(id, updateMask, updateStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#update2");
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
| **id** | **String**| the entity identifier | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| the fields to update | |
| **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | |

### Return type

[**Stage**](Stage.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_2d entity |  -  |

## update2WithHttpInfo

> ApiResponse<Stage> update2 update2WithHttpInfo(id, updateMask, updateStageRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.StagesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        StagesApi apiInstance = new StagesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdateStageRequest updateStageRequest = new UpdateStageRequest(); // UpdateStageRequest | the update request
        try {
            ApiResponse<Stage> response = apiInstance.update2WithHttpInfo(id, updateMask, updateStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling StagesApi#update2");
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
| **id** | **String**| the entity identifier | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| the fields to update | |
| **updateStageRequest** | [**UpdateStageRequest**](UpdateStageRequest.md)| the update request | |

### Return type

ApiResponse<[**Stage**](Stage.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_2d entity |  -  |

