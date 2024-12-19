# PipelinesApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**callList**](PipelinesApi.md#callList) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand. |
| [**callListWithHttpInfo**](PipelinesApi.md#callListWithHttpInfo) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand. |
| [**create**](PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity. |
| [**createWithHttpInfo**](PipelinesApi.md#createWithHttpInfo) | **POST** /v2/pipelines | Creates a new entity. |
| [**delete1**](PipelinesApi.md#delete1) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline. |
| [**delete1WithHttpInfo**](PipelinesApi.md#delete1WithHttpInfo) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline. |
| [**get**](PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier. |
| [**getWithHttpInfo**](PipelinesApi.md#getWithHttpInfo) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier. |
| [**getOutcomeLabels**](PipelinesApi.md#getOutcomeLabels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline. |
| [**getOutcomeLabelsWithHttpInfo**](PipelinesApi.md#getOutcomeLabelsWithHttpInfo) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline. |
| [**listStages**](PipelinesApi.md#listStages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline. |
| [**listStagesWithHttpInfo**](PipelinesApi.md#listStagesWithHttpInfo) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline. |
| [**listSummaries**](PipelinesApi.md#listSummaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries. |
| [**listSummariesWithHttpInfo**](PipelinesApi.md#listSummariesWithHttpInfo) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries. |
| [**setOutcomeLabels**](PipelinesApi.md#setOutcomeLabels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline. |
| [**setOutcomeLabelsWithHttpInfo**](PipelinesApi.md#setOutcomeLabelsWithHttpInfo) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline. |
| [**update1**](PipelinesApi.md#update1) | **PATCH** /v2/pipelines/{id} | Updates an existing entity. |
| [**update1WithHttpInfo**](PipelinesApi.md#update1WithHttpInfo) | **PATCH** /v2/pipelines/{id} | Updates an existing entity. |



## callList

> PipelineListResponse callList(filter, pageToken, orderBy, pageSize)

Lists entities based on the provided ListCommand.

Lists entities based on the provided ListCommand.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            PipelineListResponse result = apiInstance.callList(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#callList");
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

[**PipelineListResponse**](PipelineListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list of entities |  -  |

## callListWithHttpInfo

> ApiResponse<PipelineListResponse> callList callListWithHttpInfo(filter, pageToken, orderBy, pageSize)

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
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<PipelineListResponse> response = apiInstance.callListWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#callList");
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

ApiResponse<[**PipelineListResponse**](PipelineListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a response containing the list of entities |  -  |


## create

> Pipeline create(createPipelineRequest)

Creates a new entity.

Creates a new entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        CreatePipelineRequest createPipelineRequest = new CreatePipelineRequest(); // CreatePipelineRequest | the create request
        try {
            Pipeline result = apiInstance.create(createPipelineRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#create");
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
| **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| the create request | |

### Return type

[**Pipeline**](Pipeline.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created entity |  -  |

## createWithHttpInfo

> ApiResponse<Pipeline> create createWithHttpInfo(createPipelineRequest)

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
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        CreatePipelineRequest createPipelineRequest = new CreatePipelineRequest(); // CreatePipelineRequest | the create request
        try {
            ApiResponse<Pipeline> response = apiInstance.createWithHttpInfo(createPipelineRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#create");
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
| **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| the create request | |

### Return type

ApiResponse<[**Pipeline**](Pipeline.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created entity |  -  |


## delete1

> void delete1(id, allowCleanup, newStageId)

Deletes a pipeline.

Deletes a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        Boolean allowCleanup = true; // Boolean | flag indicating whether cleanup is allowed, can be null
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            apiInstance.delete1(id, allowCleanup, newStageId);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#delete1");
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
| **id** | **String**| the pipeline identifier | |
| **allowCleanup** | **Boolean**| flag indicating whether cleanup is allowed, can be null | [optional] |
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

## delete1WithHttpInfo

> ApiResponse<Void> delete1 delete1WithHttpInfo(id, allowCleanup, newStageId)

Deletes a pipeline.

Deletes a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        Boolean allowCleanup = true; // Boolean | flag indicating whether cleanup is allowed, can be null
        String newStageId = "newStageId_example"; // String | the new stage identifier, can be null
        try {
            ApiResponse<Void> response = apiInstance.delete1WithHttpInfo(id, allowCleanup, newStageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#delete1");
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
| **id** | **String**| the pipeline identifier | |
| **allowCleanup** | **Boolean**| flag indicating whether cleanup is allowed, can be null | [optional] |
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


## get

> Pipeline get(id)

Retrieves an entity by its identifier.

Retrieves an entity by its identifier.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            Pipeline result = apiInstance.get(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#get");
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

[**Pipeline**](Pipeline.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |

## getWithHttpInfo

> ApiResponse<Pipeline> get getWithHttpInfo(id)

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
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        try {
            ApiResponse<Pipeline> response = apiInstance.getWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#get");
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

ApiResponse<[**Pipeline**](Pipeline.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The retrieved entity |  -  |


## getOutcomeLabels

> PipelineOutcomeLabelListResponse getOutcomeLabels(id, filter, pageToken, orderBy, pageSize)

Gets the outcome labels for a pipeline.

Gets the outcome labels for a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            PipelineOutcomeLabelListResponse result = apiInstance.getOutcomeLabels(id, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#getOutcomeLabels");
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
| **id** | **String**| the pipeline identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |

## getOutcomeLabelsWithHttpInfo

> ApiResponse<PipelineOutcomeLabelListResponse> getOutcomeLabels getOutcomeLabelsWithHttpInfo(id, filter, pageToken, orderBy, pageSize)

Gets the outcome labels for a pipeline.

Gets the outcome labels for a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<PipelineOutcomeLabelListResponse> response = apiInstance.getOutcomeLabelsWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#getOutcomeLabels");
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
| **id** | **String**| the pipeline identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |


## listStages

> PipelineStageListResponse listStages(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of stages for a specific pipeline.

Retrieves a list of stages for a specific pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            PipelineStageListResponse result = apiInstance.listStages(id, filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#listStages");
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
| **id** | **String**| the pipeline identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

[**PipelineStageListResponse**](PipelineStageListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline stages and the next page token |  -  |

## listStagesWithHttpInfo

> ApiResponse<PipelineStageListResponse> listStages listStagesWithHttpInfo(id, filter, pageToken, orderBy, pageSize)

Retrieves a list of stages for a specific pipeline.

Retrieves a list of stages for a specific pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<PipelineStageListResponse> response = apiInstance.listStagesWithHttpInfo(id, filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#listStages");
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
| **id** | **String**| the pipeline identifier | |
| **filter** | **String**|  | [optional] |
| **pageToken** | **String**|  | [optional] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] [default to 1000] |

### Return type

ApiResponse<[**PipelineStageListResponse**](PipelineStageListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline stages and the next page token |  -  |


## listSummaries

> PipelineSummariesListResponse listSummaries(filter, pageToken, orderBy, pageSize)

Retrieves a list of pipeline summaries.

Retrieves a list of pipeline summaries.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            PipelineSummariesListResponse result = apiInstance.listSummaries(filter, pageToken, orderBy, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#listSummaries");
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

[**PipelineSummariesListResponse**](PipelineSummariesListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline summaries and the next page token |  -  |

## listSummariesWithHttpInfo

> ApiResponse<PipelineSummariesListResponse> listSummaries listSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize)

Retrieves a list of pipeline summaries.

Retrieves a list of pipeline summaries.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String filter = "filter_example"; // String | 
        String pageToken = "pageToken_example"; // String | 
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 1000; // Integer | 
        try {
            ApiResponse<PipelineSummariesListResponse> response = apiInstance.listSummariesWithHttpInfo(filter, pageToken, orderBy, pageSize);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#listSummaries");
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

ApiResponse<[**PipelineSummariesListResponse**](PipelineSummariesListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the response containing the list of pipeline summaries and the next page token |  -  |


## setOutcomeLabels

> PipelineOutcomeLabelListResponse setOutcomeLabels(id, updateOutcomeLabelsRequest)

Sets the outcome labels for a pipeline.

Sets the outcome labels for a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        UpdateOutcomeLabelsRequest updateOutcomeLabelsRequest = new UpdateOutcomeLabelsRequest(); // UpdateOutcomeLabelsRequest | the request containing the new outcome labels
        try {
            PipelineOutcomeLabelListResponse result = apiInstance.setOutcomeLabels(id, updateOutcomeLabelsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#setOutcomeLabels");
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
| **id** | **String**| the pipeline identifier | |
| **updateOutcomeLabelsRequest** | [**UpdateOutcomeLabelsRequest**](UpdateOutcomeLabelsRequest.md)| the request containing the new outcome labels | |

### Return type

[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |

## setOutcomeLabelsWithHttpInfo

> ApiResponse<PipelineOutcomeLabelListResponse> setOutcomeLabels setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest)

Sets the outcome labels for a pipeline.

Sets the outcome labels for a pipeline.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the pipeline identifier
        UpdateOutcomeLabelsRequest updateOutcomeLabelsRequest = new UpdateOutcomeLabelsRequest(); // UpdateOutcomeLabelsRequest | the request containing the new outcome labels
        try {
            ApiResponse<PipelineOutcomeLabelListResponse> response = apiInstance.setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#setOutcomeLabels");
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
| **id** | **String**| the pipeline identifier | |
| **updateOutcomeLabelsRequest** | [**UpdateOutcomeLabelsRequest**](UpdateOutcomeLabelsRequest.md)| the request containing the new outcome labels | |

### Return type

ApiResponse<[**PipelineOutcomeLabelListResponse**](PipelineOutcomeLabelListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated list of the pipeline&#39;s outcome labels |  -  |


## update1

> Pipeline update1(id, updateMask, updatePipelineRequest)

Updates an existing entity.

Updates an existing entity.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdatePipelineRequest updatePipelineRequest = new UpdatePipelineRequest(); // UpdatePipelineRequest | the update request
        try {
            Pipeline result = apiInstance.update1(id, updateMask, updatePipelineRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#update1");
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
| **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| the update request | |

### Return type

[**Pipeline**](Pipeline.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_1d entity |  -  |

## update1WithHttpInfo

> ApiResponse<Pipeline> update1 update1WithHttpInfo(id, updateMask, updatePipelineRequest)

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
import com.keap.sdk.sdk.client.PipelinesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        PipelinesApi apiInstance = new PipelinesApi(defaultClient);
        String id = "id_example"; // String | the entity identifier
        List<String> updateMask = Arrays.asList(); // List<String> | the fields to update
        UpdatePipelineRequest updatePipelineRequest = new UpdatePipelineRequest(); // UpdatePipelineRequest | the update request
        try {
            ApiResponse<Pipeline> response = apiInstance.update1WithHttpInfo(id, updateMask, updatePipelineRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PipelinesApi#update1");
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
| **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| the update request | |

### Return type

ApiResponse<[**Pipeline**](Pipeline.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The update_1d entity |  -  |

