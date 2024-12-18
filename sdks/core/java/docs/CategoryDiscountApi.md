# CategoryDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDiscountUsingPOST**](CategoryDiscountApi.md#createDiscountUsingPOST) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**createDiscountUsingPOSTWithHttpInfo**](CategoryDiscountApi.md#createDiscountUsingPOSTWithHttpInfo) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**deleteDiscountUsingDELETE**](CategoryDiscountApi.md#deleteDiscountUsingDELETE) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**deleteDiscountUsingDELETEWithHttpInfo**](CategoryDiscountApi.md#deleteDiscountUsingDELETEWithHttpInfo) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**getDiscountUsingGET**](CategoryDiscountApi.md#getDiscountUsingGET) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**getDiscountUsingGETWithHttpInfo**](CategoryDiscountApi.md#getDiscountUsingGETWithHttpInfo) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**listCategoryDiscountsUsingGET**](CategoryDiscountApi.md#listCategoryDiscountsUsingGET) | **GET** /v2/discounts/productCategories | List Category Discounts |
| [**listCategoryDiscountsUsingGETWithHttpInfo**](CategoryDiscountApi.md#listCategoryDiscountsUsingGETWithHttpInfo) | **GET** /v2/discounts/productCategories | List Category Discounts |
| [**updateDiscountUsingPATCH**](CategoryDiscountApi.md#updateDiscountUsingPATCH) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |
| [**updateDiscountUsingPATCHWithHttpInfo**](CategoryDiscountApi.md#updateDiscountUsingPATCHWithHttpInfo) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |



## createDiscountUsingPOST

> CategoryDiscount createDiscountUsingPOST(createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        CreateUpdateDiscountRequest createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
        try {
            CategoryDiscount result = apiInstance.createDiscountUsingPOST(createUpdateDiscountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#createDiscountUsingPOST");
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
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)


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

## createDiscountUsingPOSTWithHttpInfo

> ApiResponse<CategoryDiscount> createDiscountUsingPOST createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        CreateUpdateDiscountRequest createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#createDiscountUsingPOST");
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
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | |

### Return type

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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


## deleteDiscountUsingDELETE

> void deleteDiscountUsingDELETE(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteDiscountUsingDELETE(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#deleteDiscountUsingDELETE");
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

## deleteDiscountUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteDiscountUsingDELETE deleteDiscountUsingDELETEWithHttpInfo(discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteDiscountUsingDELETEWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#deleteDiscountUsingDELETE");
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


## getDiscountUsingGET

> CategoryDiscount getDiscountUsingGET(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            CategoryDiscount result = apiInstance.getDiscountUsingGET(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#getDiscountUsingGET");
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

[**CategoryDiscount**](CategoryDiscount.md)


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

## getDiscountUsingGETWithHttpInfo

> ApiResponse<CategoryDiscount> getDiscountUsingGET getDiscountUsingGETWithHttpInfo(discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.getDiscountUsingGETWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#getDiscountUsingGET");
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

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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


## listCategoryDiscountsUsingGET

> ListCategoryDiscountsResponse listCategoryDiscountsUsingGET(filter, orderBy, pageSize, pageToken)

List Category Discounts

Retrieve a list of Category Discounts.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListCategoryDiscountsResponse result = apiInstance.listCategoryDiscountsUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#listCategoryDiscountsUsingGET");
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
| **filter** | **String**| Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)


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

## listCategoryDiscountsUsingGETWithHttpInfo

> ApiResponse<ListCategoryDiscountsResponse> listCategoryDiscountsUsingGET listCategoryDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Category Discounts

Retrieve a list of Category Discounts.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the `==` operator to check the equality of the filter with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_category_id%3D%3D4`
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListCategoryDiscountsResponse> response = apiInstance.listCategoryDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#listCategoryDiscountsUsingGET");
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
| **filter** | **String**| Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60; | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListCategoryDiscountsResponse**](ListCategoryDiscountsResponse.md)>


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


## updateDiscountUsingPATCH

> CategoryDiscount updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask)

Update a Category Discount

Update a Category Discount.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        CreateUpdateDiscountRequest createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CategoryDiscount result = apiInstance.updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#updateDiscountUsingPATCH");
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
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, order_items, order_title, order_time, order_type, promo_codes, lead_affiliate_id, sales_affiliate_id, shipping_address] |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)


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

## updateDiscountUsingPATCHWithHttpInfo

> ApiResponse<CategoryDiscount> updateDiscountUsingPATCH updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask)

Update a Category Discount

Update a Category Discount.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.CategoryDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        CategoryDiscountApi apiInstance = new CategoryDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        CreateUpdateDiscountRequest createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CategoryDiscount> response = apiInstance.updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryDiscountApi#updateDiscountUsingPATCH");
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
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: contact_id, order_items, order_title, order_time, order_type, promo_codes, lead_affiliate_id, sales_affiliate_id, shipping_address] |

### Return type

ApiResponse<[**CategoryDiscount**](CategoryDiscount.md)>


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

