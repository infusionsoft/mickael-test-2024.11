# OrderTotalDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrderTotalDiscountUsingPOST**](OrderTotalDiscountApi.md#createOrderTotalDiscountUsingPOST) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**createOrderTotalDiscountUsingPOSTWithHttpInfo**](OrderTotalDiscountApi.md#createOrderTotalDiscountUsingPOSTWithHttpInfo) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**deleteOrderTotalDiscountUsingDELETE**](OrderTotalDiscountApi.md#deleteOrderTotalDiscountUsingDELETE) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**deleteOrderTotalDiscountUsingDELETEWithHttpInfo**](OrderTotalDiscountApi.md#deleteOrderTotalDiscountUsingDELETEWithHttpInfo) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**getOrderTotalDiscountUsingGET**](OrderTotalDiscountApi.md#getOrderTotalDiscountUsingGET) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**getOrderTotalDiscountUsingGETWithHttpInfo**](OrderTotalDiscountApi.md#getOrderTotalDiscountUsingGETWithHttpInfo) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**listOrderTotalDiscountsUsingGET**](OrderTotalDiscountApi.md#listOrderTotalDiscountsUsingGET) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**listOrderTotalDiscountsUsingGETWithHttpInfo**](OrderTotalDiscountApi.md#listOrderTotalDiscountsUsingGETWithHttpInfo) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**updateOrderTotalDiscountUsingPATCH**](OrderTotalDiscountApi.md#updateOrderTotalDiscountUsingPATCH) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |
| [**updateOrderTotalDiscountUsingPATCHWithHttpInfo**](OrderTotalDiscountApi.md#updateOrderTotalDiscountUsingPATCHWithHttpInfo) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |



## createOrderTotalDiscountUsingPOST

> OrderTotalDiscount createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest)

Create an Order Total Discount

Creates an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request
        try {
            OrderTotalDiscount result = apiInstance.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#createOrderTotalDiscountUsingPOST");
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
| **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md)| request | |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)


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

## createOrderTotalDiscountUsingPOSTWithHttpInfo

> ApiResponse<OrderTotalDiscount> createOrderTotalDiscountUsingPOST createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest)

Create an Order Total Discount

Creates an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request
        try {
            ApiResponse<OrderTotalDiscount> response = apiInstance.createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#createOrderTotalDiscountUsingPOST");
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
| **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md)| request | |

### Return type

ApiResponse<[**OrderTotalDiscount**](OrderTotalDiscount.md)>


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


## deleteOrderTotalDiscountUsingDELETE

> void deleteOrderTotalDiscountUsingDELETE(discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            apiInstance.deleteOrderTotalDiscountUsingDELETE(discountId);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#deleteOrderTotalDiscountUsingDELETE");
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

## deleteOrderTotalDiscountUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteOrderTotalDiscountUsingDELETE deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<Void> response = apiInstance.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#deleteOrderTotalDiscountUsingDELETE");
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


## getOrderTotalDiscountUsingGET

> OrderTotalDiscount getOrderTotalDiscountUsingGET(discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            OrderTotalDiscount result = apiInstance.getOrderTotalDiscountUsingGET(discountId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#getOrderTotalDiscountUsingGET");
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

[**OrderTotalDiscount**](OrderTotalDiscount.md)


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

## getOrderTotalDiscountUsingGETWithHttpInfo

> ApiResponse<OrderTotalDiscount> getOrderTotalDiscountUsingGET getOrderTotalDiscountUsingGETWithHttpInfo(discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        try {
            ApiResponse<OrderTotalDiscount> response = apiInstance.getOrderTotalDiscountUsingGETWithHttpInfo(discountId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#getOrderTotalDiscountUsingGET");
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

ApiResponse<[**OrderTotalDiscount**](OrderTotalDiscount.md)>


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


## listOrderTotalDiscountsUsingGET

> ListOrderTotalDiscountsResponse listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListOrderTotalDiscountsResponse result = apiInstance.listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#listOrderTotalDiscountsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)


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

## listOrderTotalDiscountsUsingGETWithHttpInfo

> ApiResponse<ListOrderTotalDiscountsResponse> listOrderTotalDiscountsUsingGET listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. `given_name desc`
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListOrderTotalDiscountsResponse> response = apiInstance.listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#listOrderTotalDiscountsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)>


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


## updateOrderTotalDiscountUsingPATCH

> OrderTotalDiscount updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask)

Update an Order Total Discount

Updates an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateOrderTotalDiscountRequest updateOrderTotalDiscountRequest = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            OrderTotalDiscount result = apiInstance.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#updateOrderTotalDiscountUsingPATCH");
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
| **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, apply_to_commissions, discount_type, discount_value, discount_strategy, criteria] |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)


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

## updateOrderTotalDiscountUsingPATCHWithHttpInfo

> ApiResponse<OrderTotalDiscount> updateOrderTotalDiscountUsingPATCH updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask)

Update an Order Total Discount

Updates an Order Total Discount

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.OrderTotalDiscountApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        OrderTotalDiscountApi apiInstance = new OrderTotalDiscountApi(defaultClient);
        String discountId = "discountId_example"; // String | discount_id
        UpdateOrderTotalDiscountRequest updateOrderTotalDiscountRequest = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<OrderTotalDiscount> response = apiInstance.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling OrderTotalDiscountApi#updateOrderTotalDiscountUsingPATCH");
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
| **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, description, apply_to_commissions, discount_type, discount_value, discount_strategy, criteria] |

### Return type

ApiResponse<[**OrderTotalDiscount**](OrderTotalDiscount.md)>


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

