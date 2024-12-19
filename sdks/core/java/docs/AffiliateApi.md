# AffiliateApi

All URIs are relative to *https://api.keap.com/crm/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate |
| [**addAffiliateUsingPOSTWithHttpInfo**](AffiliateApi.md#addAffiliateUsingPOSTWithHttpInfo) | **POST** /v2/affiliates | Create an Affiliate |
| [**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateUsingGET1WithHttpInfo**](AffiliateApi.md#getAffiliateUsingGET1WithHttpInfo) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**patchCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#patchCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateUsingPATCHWithHttpInfo**](AffiliateApi.md#updateAffiliateUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |



## addAffiliateUsingPOST

> RestAffiliate addAffiliateUsingPOST(createAffiliateRequest)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            RestAffiliate result = apiInstance.addAffiliateUsingPOST(createAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

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

## addAffiliateUsingPOSTWithHttpInfo

> ApiResponse<RestAffiliate> addAffiliateUsingPOST addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest createAffiliateRequest = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            ApiResponse<RestAffiliate> response = apiInstance.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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
| **createAffiliateRequest** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## getAffiliateUsingGET1

> RestAffiliate getAffiliateUsingGET1(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            RestAffiliate result = apiInstance.getAffiliateUsingGET1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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
| **id** | **String**| id | |

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

## getAffiliateUsingGET1WithHttpInfo

> ApiResponse<RestAffiliate> getAffiliateUsingGET1 getAffiliateUsingGET1WithHttpInfo(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<RestAffiliate> response = apiInstance.getAffiliateUsingGET1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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
| **id** | **String**| id | |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## patchCommissionProgramUsingPATCH

> AffiliateCommissionProgramResponse patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        PatchCommissionProgramRequest patchCommissionProgramRequest = new PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            AffiliateCommissionProgramResponse result = apiInstance.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

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

## patchCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> patchCommissionProgramUsingPATCH patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        PatchCommissionProgramRequest patchCommissionProgramRequest = new PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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


## updateAffiliateUsingPATCH

> RestAffiliate updateAffiliateUsingPATCH(id, patchAffiliateRequest)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAffiliateRequest patchAffiliateRequest = new PatchAffiliateRequest(); // PatchAffiliateRequest | Affiliate request to patch
        try {
            RestAffiliate result = apiInstance.updateAffiliateUsingPATCH(id, patchAffiliateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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
| **id** | **String**| id | |
| **patchAffiliateRequest** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

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

## updateAffiliateUsingPATCHWithHttpInfo

> ApiResponse<RestAffiliate> updateAffiliateUsingPATCH updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliateRequest)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.keap.com/crm/rest");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAffiliateRequest patchAffiliateRequest = new PatchAffiliateRequest(); // PatchAffiliateRequest | Affiliate request to patch
        try {
            ApiResponse<RestAffiliate> response = apiInstance.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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
| **id** | **String**| id | |
| **patchAffiliateRequest** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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

