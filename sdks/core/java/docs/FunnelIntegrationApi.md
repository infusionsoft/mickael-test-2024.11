# FunnelIntegrationApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**createFunnelIntegrationUsingPOSTWithHttpInfo**](FunnelIntegrationApi.md#createFunnelIntegrationUsingPOSTWithHttpInfo) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**createIntegrationTriggerEventUsingPOST**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOST) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**createIntegrationTriggerEventUsingPOSTWithHttpInfo**](FunnelIntegrationApi.md#createIntegrationTriggerEventUsingPOSTWithHttpInfo) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**deleteFunnelIntegrationUsingPOST**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOST) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |
| [**deleteFunnelIntegrationUsingPOSTWithHttpInfo**](FunnelIntegrationApi.md#deleteFunnelIntegrationUsingPOSTWithHttpInfo) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |



## createFunnelIntegrationUsingPOST

> void createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        CreateFunnelIntegrationRequest createFunnelIntegrationRequest = new CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest
        try {
            apiInstance.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#createFunnelIntegrationUsingPOST");
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
| **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | |

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

## createFunnelIntegrationUsingPOSTWithHttpInfo

> ApiResponse<Void> createFunnelIntegrationUsingPOST createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        CreateFunnelIntegrationRequest createFunnelIntegrationRequest = new CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest
        try {
            ApiResponse<Void> response = apiInstance.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#createFunnelIntegrationUsingPOST");
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
| **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | |

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


## createIntegrationTriggerEventUsingPOST

> List<FunnelIntegrationTriggerResultDTO> createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        CreateFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents = new CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents
        try {
            List<FunnelIntegrationTriggerResultDTO> result = apiInstance.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#createIntegrationTriggerEventUsingPOST");
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
| **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | |

### Return type

[**List&lt;FunnelIntegrationTriggerResultDTO&gt;**](FunnelIntegrationTriggerResultDTO.md)


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

## createIntegrationTriggerEventUsingPOSTWithHttpInfo

> ApiResponse<List<FunnelIntegrationTriggerResultDTO>> createIntegrationTriggerEventUsingPOST createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        CreateFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents = new CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents
        try {
            ApiResponse<List<FunnelIntegrationTriggerResultDTO>> response = apiInstance.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#createIntegrationTriggerEventUsingPOST");
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
| **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | |

### Return type

ApiResponse<[**List&lt;FunnelIntegrationTriggerResultDTO&gt;**](FunnelIntegrationTriggerResultDTO.md)>


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


## deleteFunnelIntegrationUsingPOST

> void deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        DeleteFunnelIntegrationRequest deleteFunnelIntegrationRequest = new DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest
        try {
            apiInstance.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#deleteFunnelIntegrationUsingPOST");
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
| **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | |

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

## deleteFunnelIntegrationUsingPOSTWithHttpInfo

> ApiResponse<Void> deleteFunnelIntegrationUsingPOST deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.FunnelIntegrationApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        FunnelIntegrationApi apiInstance = new FunnelIntegrationApi(defaultClient);
        DeleteFunnelIntegrationRequest deleteFunnelIntegrationRequest = new DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest
        try {
            ApiResponse<Void> response = apiInstance.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling FunnelIntegrationApi#deleteFunnelIntegrationUsingPOST");
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
| **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | |

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

