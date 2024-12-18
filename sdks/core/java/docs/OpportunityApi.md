# OpportunityApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOpportunityCustomFieldsUsingPOST**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOST) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityCustomFieldsUsingPOSTWithHttpInfo**](OpportunityApi.md#createOpportunityCustomFieldsUsingPOSTWithHttpInfo) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**createOpportunityStageUsingPOST**](OpportunityApi.md#createOpportunityStageUsingPOST) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityStageUsingPOSTWithHttpInfo**](OpportunityApi.md#createOpportunityStageUsingPOSTWithHttpInfo) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**createOpportunityUsingPOST1**](OpportunityApi.md#createOpportunityUsingPOST1) | **POST** /v2/opportunities | Create an Opportunity |
| [**createOpportunityUsingPOST1WithHttpInfo**](OpportunityApi.md#createOpportunityUsingPOST1WithHttpInfo) | **POST** /v2/opportunities | Create an Opportunity |
| [**deleteOpportunityStageUsingDELETE**](OpportunityApi.md#deleteOpportunityStageUsingDELETE) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityStageUsingDELETEWithHttpInfo**](OpportunityApi.md#deleteOpportunityStageUsingDELETEWithHttpInfo) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**deleteOpportunityUsingDELETE**](OpportunityApi.md#deleteOpportunityUsingDELETE) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**deleteOpportunityUsingDELETEWithHttpInfo**](OpportunityApi.md#deleteOpportunityUsingDELETEWithHttpInfo) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**getOpportunityStageUsingGET**](OpportunityApi.md#getOpportunityStageUsingGET) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityStageUsingGETWithHttpInfo**](OpportunityApi.md#getOpportunityStageUsingGETWithHttpInfo) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**getOpportunityUsingGET1**](OpportunityApi.md#getOpportunityUsingGET1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**getOpportunityUsingGET1WithHttpInfo**](OpportunityApi.md#getOpportunityUsingGET1WithHttpInfo) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**listOpportunitiesUsingGET1**](OpportunityApi.md#listOpportunitiesUsingGET1) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunitiesUsingGET1WithHttpInfo**](OpportunityApi.md#listOpportunitiesUsingGET1WithHttpInfo) | **GET** /v2/opportunities | List Opportunities |
| [**listOpportunityStagesUsingGET**](OpportunityApi.md#listOpportunityStagesUsingGET) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**listOpportunityStagesUsingGETWithHttpInfo**](OpportunityApi.md#listOpportunityStagesUsingGETWithHttpInfo) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**updateOpportunityCustomFieldUsingPATCH**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCH) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityCustomFieldUsingPATCHWithHttpInfo**](OpportunityApi.md#updateOpportunityCustomFieldUsingPATCHWithHttpInfo) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**updateOpportunityStageUsingPATCH**](OpportunityApi.md#updateOpportunityStageUsingPATCH) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**updateOpportunityStageUsingPATCHWithHttpInfo**](OpportunityApi.md#updateOpportunityStageUsingPATCHWithHttpInfo) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**updateOpportunityUsingPATCH**](OpportunityApi.md#updateOpportunityUsingPATCH) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |
| [**updateOpportunityUsingPATCHWithHttpInfo**](OpportunityApi.md#updateOpportunityUsingPATCHWithHttpInfo) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |



## createOpportunityCustomFieldsUsingPOST

> CustomFieldMetaData createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CustomFieldMetaData result = apiInstance.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFieldsUsingPOST");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

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

## createOpportunityCustomFieldsUsingPOSTWithHttpInfo

> ApiResponse<CustomFieldMetaData> createOpportunityCustomFieldsUsingPOST createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateCustomFieldRequest createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityCustomFieldsUsingPOST");
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
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

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


## createOpportunityStageUsingPOST

> RestOpportunityStage createOpportunityStageUsingPOST(createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | opportunity
        try {
            RestOpportunityStage result = apiInstance.createOpportunityStageUsingPOST(createOpportunityStageRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityStageUsingPOST");
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] |

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

## createOpportunityStageUsingPOSTWithHttpInfo

> ApiResponse<RestOpportunityStage> createOpportunityStageUsingPOST createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityStageRequest createOpportunityStageRequest = new CreateOpportunityStageRequest(); // CreateOpportunityStageRequest | opportunity
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityStageUsingPOST");
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
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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


## createOpportunityUsingPOST1

> RestV2Opportunity createOpportunityUsingPOST1(createOpportunityRequest)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | opportunity
        try {
            RestV2Opportunity result = apiInstance.createOpportunityUsingPOST1(createOpportunityRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityUsingPOST1");
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] |

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

## createOpportunityUsingPOST1WithHttpInfo

> ApiResponse<RestV2Opportunity> createOpportunityUsingPOST1 createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        CreateOpportunityRequest createOpportunityRequest = new CreateOpportunityRequest(); // CreateOpportunityRequest | opportunity
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#createOpportunityUsingPOST1");
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
| **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## deleteOpportunityStageUsingDELETE

> void deleteOpportunityStageUsingDELETE(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            apiInstance.deleteOpportunityStageUsingDELETE(stageId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityStageUsingDELETE");
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
| **stageId** | **String**| stage_id | |

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

## deleteOpportunityStageUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteOpportunityStageUsingDELETE deleteOpportunityStageUsingDELETEWithHttpInfo(stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityStageUsingDELETE");
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
| **stageId** | **String**| stage_id | |

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


## deleteOpportunityUsingDELETE

> void deleteOpportunityUsingDELETE(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            apiInstance.deleteOpportunityUsingDELETE(opportunityId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityUsingDELETE");
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
| **opportunityId** | **String**| opportunity_id | |

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

## deleteOpportunityUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteOpportunityUsingDELETE deleteOpportunityUsingDELETEWithHttpInfo(opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            ApiResponse<Void> response = apiInstance.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#deleteOpportunityUsingDELETE");
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
| **opportunityId** | **String**| opportunity_id | |

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


## getOpportunityStageUsingGET

> RestOpportunityStage getOpportunityStageUsingGET(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            RestOpportunityStage result = apiInstance.getOpportunityStageUsingGET(stageId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityStageUsingGET");
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
| **stageId** | **String**| stage_id | |

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

## getOpportunityStageUsingGETWithHttpInfo

> ApiResponse<RestOpportunityStage> getOpportunityStageUsingGET getOpportunityStageUsingGETWithHttpInfo(stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.getOpportunityStageUsingGETWithHttpInfo(stageId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityStageUsingGET");
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
| **stageId** | **String**| stage_id | |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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


## getOpportunityUsingGET1

> RestV2Opportunity getOpportunityUsingGET1(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            RestV2Opportunity result = apiInstance.getOpportunityUsingGET1(opportunityId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityUsingGET1");
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
| **opportunityId** | **String**| opportunity_id | |

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

## getOpportunityUsingGET1WithHttpInfo

> ApiResponse<RestV2Opportunity> getOpportunityUsingGET1 getOpportunityUsingGET1WithHttpInfo(opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.getOpportunityUsingGET1WithHttpInfo(opportunityId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#getOpportunityUsingGET1");
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
| **opportunityId** | **String**| opportunity_id | |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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


## listOpportunitiesUsingGET1

> ListOpportunitiesResponse listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | fields
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListOpportunitiesResponse result = apiInstance.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunitiesUsingGET1");
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
| **fields** | [**List&lt;String&gt;**](String.md)| fields | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

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

## listOpportunitiesUsingGET1WithHttpInfo

> ApiResponse<ListOpportunitiesResponse> listOpportunitiesUsingGET1 listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken)

List Opportunities

Retrieves a list of all Opportunities.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | fields
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
        String orderBy = "orderBy_example"; // String | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListOpportunitiesResponse> response = apiInstance.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunitiesUsingGET1");
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
| **fields** | [**List&lt;String&gt;**](String.md)| fields | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional] |
| **orderBy** | **String**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)>


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


## listOpportunityStagesUsingGET

> ListOpportunityStagesResponse listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListOpportunityStagesResponse result = apiInstance.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityStagesUsingGET");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

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

## listOpportunityStagesUsingGETWithHttpInfo

> ApiResponse<ListOpportunityStagesResponse> listOpportunityStagesUsingGET listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListOpportunityStagesResponse> response = apiInstance.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#listOpportunityStagesUsingGET");
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
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)>


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


## updateOpportunityCustomFieldUsingPATCH

> CustomFieldMetaData updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomFieldUsingPATCH");
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
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
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

## updateOpportunityCustomFieldUsingPATCHWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateOpportunityCustomFieldUsingPATCH updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask)

Update a Opportunity&#39;s Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityCustomFieldUsingPATCH");
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
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
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


## updateOpportunityStageUsingPATCH

> RestOpportunityStage updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestOpportunityStage result = apiInstance.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityStageUsingPATCH");
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
| **stageId** | **String**| stage_id | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## updateOpportunityStageUsingPATCHWithHttpInfo

> ApiResponse<RestOpportunityStage> updateOpportunityStageUsingPATCH updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String stageId = "stageId_example"; // String | stage_id
        UpdateOpportunityStageRequest updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestOpportunityStage> response = apiInstance.updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityStageUsingPATCH");
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
| **stageId** | **String**| stage_id | |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, order, target_number_days, probability, checklist_items] |

### Return type

ApiResponse<[**RestOpportunityStage**](RestOpportunityStage.md)>


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


## updateOpportunityUsingPATCH

> RestV2Opportunity updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, updateMask)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        PatchOpportunityRequest patchOpportunityRequest = new PatchOpportunityRequest(); // PatchOpportunityRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            RestV2Opportunity result = apiInstance.updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityUsingPATCH");
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
| **opportunityId** | **String**| opportunity_id | |
| **patchOpportunityRequest** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notesestimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_highcontact_id, stage_id, user_id, custom_fields, affiliate_id] |

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

## updateOpportunityUsingPATCHWithHttpInfo

> ApiResponse<RestV2Opportunity> updateOpportunityUsingPATCH updateOpportunityUsingPATCHWithHttpInfo(opportunityId, patchOpportunityRequest, updateMask)

Update an opportunity

Updates specified values of a given opportunity

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OpportunityApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OpportunityApi apiInstance = new OpportunityApi(defaultClient);
        String opportunityId = "opportunityId_example"; // String | opportunity_id
        PatchOpportunityRequest patchOpportunityRequest = new PatchOpportunityRequest(); // PatchOpportunityRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<RestV2Opportunity> response = apiInstance.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, patchOpportunityRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpportunityApi#updateOpportunityUsingPATCH");
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
| **opportunityId** | **String**| opportunity_id | |
| **patchOpportunityRequest** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: opportunity_title, next_action_time, next_action_notes, opportunity_notesestimated_close_time, include_in_forecast, projected_revenue_low, projected_revenue_highcontact_id, stage_id, user_id, custom_fields, affiliate_id] |

### Return type

ApiResponse<[**RestV2Opportunity**](RestV2Opportunity.md)>


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

