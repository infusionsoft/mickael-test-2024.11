# ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProductUsingPOST1**](ProductApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product |
| [**createProductUsingPOST1WithHttpInfo**](ProductApi.md#createProductUsingPOST1WithHttpInfo) | **POST** /v2/products | Create a Product |
| [**deleteProductUsingDELETE1**](ProductApi.md#deleteProductUsingDELETE1) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**deleteProductUsingDELETE1WithHttpInfo**](ProductApi.md#deleteProductUsingDELETE1WithHttpInfo) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**getProductUsingGET**](ProductApi.md#getProductUsingGET) | **GET** /v2/products/{product_id} | Get a Product |
| [**getProductUsingGETWithHttpInfo**](ProductApi.md#getProductUsingGETWithHttpInfo) | **GET** /v2/products/{product_id} | Get a Product |
| [**listProductsUsingGET1**](ProductApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products |
| [**listProductsUsingGET1WithHttpInfo**](ProductApi.md#listProductsUsingGET1WithHttpInfo) | **GET** /v2/products | List Products |



## createProductUsingPOST1

> RestV2Product createProductUsingPOST1(createProductRequest)

Create a Product

Creates a new product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        CreateProductRequest createProductRequest = new CreateProductRequest(); // CreateProductRequest | createProductRequest
        try {
            RestV2Product result = apiInstance.createProductUsingPOST1(createProductRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#createProductUsingPOST1");
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
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | |

### Return type

[**RestV2Product**](RestV2Product.md)


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

## createProductUsingPOST1WithHttpInfo

> ApiResponse<RestV2Product> createProductUsingPOST1 createProductUsingPOST1WithHttpInfo(createProductRequest)

Create a Product

Creates a new product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        CreateProductRequest createProductRequest = new CreateProductRequest(); // CreateProductRequest | createProductRequest
        try {
            ApiResponse<RestV2Product> response = apiInstance.createProductUsingPOST1WithHttpInfo(createProductRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#createProductUsingPOST1");
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
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| createProductRequest | |

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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


## deleteProductUsingDELETE1

> void deleteProductUsingDELETE1(productId)

Delete a Product

Deletes a single product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            apiInstance.deleteProductUsingDELETE1(productId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#deleteProductUsingDELETE1");
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
| **productId** | **String**| product_id | |

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

## deleteProductUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteProductUsingDELETE1 deleteProductUsingDELETE1WithHttpInfo(productId)

Delete a Product

Deletes a single product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            ApiResponse<Void> response = apiInstance.deleteProductUsingDELETE1WithHttpInfo(productId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#deleteProductUsingDELETE1");
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
| **productId** | **String**| product_id | |

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


## getProductUsingGET

> RestV2Product getProductUsingGET(productId)

Get a Product

Gets a single Product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            RestV2Product result = apiInstance.getProductUsingGET(productId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#getProductUsingGET");
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
| **productId** | **String**| product_id | |

### Return type

[**RestV2Product**](RestV2Product.md)


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

## getProductUsingGETWithHttpInfo

> ApiResponse<RestV2Product> getProductUsingGET getProductUsingGETWithHttpInfo(productId)

Get a Product

Gets a single Product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String productId = "productId_example"; // String | product_id
        try {
            ApiResponse<RestV2Product> response = apiInstance.getProductUsingGETWithHttpInfo(productId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#getProductUsingGET");
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
| **productId** | **String**| product_id | |

### Return type

ApiResponse<[**RestV2Product**](RestV2Product.md)>


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


## listProductsUsingGET1

> ListProductsResponse listProductsUsingGET1(filter, orderBy, pageSize, pageToken)

List Products

Retrieves a list of Products

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListProductsResponse result = apiInstance.listProductsUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#listProductsUsingGET1");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListProductsResponse**](ListProductsResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## listProductsUsingGET1WithHttpInfo

> ApiResponse<ListProductsResponse> listProductsUsingGET1 listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

List Products

Retrieves a list of Products

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ProductApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ProductApi apiInstance = new ProductApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListProductsResponse> response = apiInstance.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ProductApi#listProductsUsingGET1");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name    | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListProductsResponse**](ListProductsResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

