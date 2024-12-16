# ShippingDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDiscountUsingPOST1**](ShippingDiscountApi.md#createDiscountUsingPOST1) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**createDiscountUsingPOST1WithHttpInfo**](ShippingDiscountApi.md#createDiscountUsingPOST1WithHttpInfo) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**deleteDiscountUsingDELETE2**](ShippingDiscountApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**deleteDiscountUsingDELETE2WithHttpInfo**](ShippingDiscountApi.md#deleteDiscountUsingDELETE2WithHttpInfo) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**getDiscountUsingGET1**](ShippingDiscountApi.md#getDiscountUsingGET1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**getDiscountUsingGET1WithHttpInfo**](ShippingDiscountApi.md#getDiscountUsingGET1WithHttpInfo) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**listDiscountsUsingGET**](ShippingDiscountApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**listDiscountsUsingGETWithHttpInfo**](ShippingDiscountApi.md#listDiscountsUsingGETWithHttpInfo) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**updateDiscountUsingPATCH1**](ShippingDiscountApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |
| [**updateDiscountUsingPATCH1WithHttpInfo**](ShippingDiscountApi.md#updateDiscountUsingPATCH1WithHttpInfo) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |



## createDiscountUsingPOST1

> ShippingDiscount createDiscountUsingPOST1(request)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        CreateShippingDiscountRequest request = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request
        try {
            ShippingDiscount result = apiInstance.createDiscountUsingPOST1(request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#createDiscountUsingPOST1");
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
| **request** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)


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

## createDiscountUsingPOST1WithHttpInfo

> ApiResponse<ShippingDiscount> createDiscountUsingPOST1 createDiscountUsingPOST1WithHttpInfo(request)

Create a Shipping Discount

Creates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        CreateShippingDiscountRequest request = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.createDiscountUsingPOST1WithHttpInfo(request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#createDiscountUsingPOST1");
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
| **request** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md)| request | |

### Return type

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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


## deleteDiscountUsingDELETE2

> void deleteDiscountUsingDELETE2(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteDiscountUsingDELETE2(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#deleteDiscountUsingDELETE2");
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
| **discountId** | **String**| discount_id | |

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

## deleteDiscountUsingDELETE2WithHttpInfo

> ApiResponse<Void> deleteDiscountUsingDELETE2 deleteDiscountUsingDELETE2WithHttpInfo(discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteDiscountUsingDELETE2WithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#deleteDiscountUsingDELETE2");
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
| **discountId** | **String**| discount_id | |

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


## getDiscountUsingGET1

> ShippingDiscount getDiscountUsingGET1(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ShippingDiscount result = apiInstance.getDiscountUsingGET1(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#getDiscountUsingGET1");
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
| **discountId** | **String**| discount_id | |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)


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

## getDiscountUsingGET1WithHttpInfo

> ApiResponse<ShippingDiscount> getDiscountUsingGET1 getDiscountUsingGET1WithHttpInfo(discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.getDiscountUsingGET1WithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#getDiscountUsingGET1");
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
| **discountId** | **String**| discount_id | |

### Return type

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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


## listDiscountsUsingGET

> ListShippingDiscountsResponse listDiscountsUsingGET(fields, filter, orderBy, pageSize, pageToken)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | TODO: PAPI-1449
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListShippingDiscountsResponse result = apiInstance.listDiscountsUsingGET(fields, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#listDiscountsUsingGET");
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
| **fields** | [**List&lt;String&gt;**](String.md)| TODO: PAPI-1449 | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)


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

## listDiscountsUsingGETWithHttpInfo

> ApiResponse<ListShippingDiscountsResponse> listDiscountsUsingGET listDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | TODO: PAPI-1449
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListShippingDiscountsResponse> response = apiInstance.listDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#listDiscountsUsingGET");
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
| **fields** | [**List&lt;String&gt;**](String.md)| TODO: PAPI-1449 | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)>


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


## updateDiscountUsingPATCH1

> ShippingDiscount updateDiscountUsingPATCH1(discountId, request, updateMask)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateShippingDiscountRequest request = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ShippingDiscount result = apiInstance.updateDiscountUsingPATCH1(discountId, request, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#updateDiscountUsingPATCH1");
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
| **discountId** | **String**| discount_id | |
| **request** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: TODO: PAPI-1452] |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)


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

## updateDiscountUsingPATCH1WithHttpInfo

> ApiResponse<ShippingDiscount> updateDiscountUsingPATCH1 updateDiscountUsingPATCH1WithHttpInfo(discountId, request, updateMask)

Update a Shipping Discount

Updates a Shipping Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ShippingDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ShippingDiscountApi apiInstance = new ShippingDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateShippingDiscountRequest request = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<ShippingDiscount> response = apiInstance.updateDiscountUsingPATCH1WithHttpInfo(discountId, request, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ShippingDiscountApi#updateDiscountUsingPATCH1");
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
| **discountId** | **String**| discount_id | |
| **request** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: TODO: PAPI-1452] |

### Return type

ApiResponse<[**ShippingDiscount**](ShippingDiscount.md)>


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

