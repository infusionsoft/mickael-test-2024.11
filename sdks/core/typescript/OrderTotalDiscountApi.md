# .OrderTotalDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderTotalDiscountUsingPOST**](OrderTotalDiscountApi.md#createOrderTotalDiscountUsingPOST) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount
[**deleteOrderTotalDiscountUsingDELETE**](OrderTotalDiscountApi.md#deleteOrderTotalDiscountUsingDELETE) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount
[**getOrderTotalDiscountUsingGET**](OrderTotalDiscountApi.md#getOrderTotalDiscountUsingGET) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount
[**listOrderTotalDiscountsUsingGET**](OrderTotalDiscountApi.md#listOrderTotalDiscountsUsingGET) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts
[**updateOrderTotalDiscountUsingPATCH**](OrderTotalDiscountApi.md#updateOrderTotalDiscountUsingPATCH) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount


# **createOrderTotalDiscountUsingPOST**
> OrderTotalDiscount createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest)

Creates an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountApi } from '';
import type { OrderTotalDiscountApiCreateOrderTotalDiscountUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountApi(configuration);

const request: OrderTotalDiscountApiCreateOrderTotalDiscountUsingPOSTRequest = {
    // request
  createOrderTotalDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createOrderTotalDiscountUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderTotalDiscountRequest** | **CreateOrderTotalDiscountRequest**| request |


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrderTotalDiscountUsingDELETE**
> void deleteOrderTotalDiscountUsingDELETE()

Deletes a specified Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountApi } from '';
import type { OrderTotalDiscountApiDeleteOrderTotalDiscountUsingDELETERequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountApi(configuration);

const request: OrderTotalDiscountApiDeleteOrderTotalDiscountUsingDELETERequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteOrderTotalDiscountUsingDELETE(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderTotalDiscountUsingGET**
> OrderTotalDiscount getOrderTotalDiscountUsingGET()

Retrieves an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountApi } from '';
import type { OrderTotalDiscountApiGetOrderTotalDiscountUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountApi(configuration);

const request: OrderTotalDiscountApiGetOrderTotalDiscountUsingGETRequest = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getOrderTotalDiscountUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrderTotalDiscountsUsingGET**
> ListOrderTotalDiscountsResponse listOrderTotalDiscountsUsingGET()

Retrieves all Order Total Discounts

### Example


```typescript
import { createConfiguration, OrderTotalDiscountApi } from '';
import type { OrderTotalDiscountApiListOrderTotalDiscountsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountApi(configuration);

const request: OrderTotalDiscountApiListOrderTotalDiscountsUsingGETRequest = {
    // Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrderTotalDiscountsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrderTotalDiscountsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrderTotalDiscountUsingPATCH**
> OrderTotalDiscount updateOrderTotalDiscountUsingPATCH(updateOrderTotalDiscountRequest)

Updates an Order Total Discount

### Example


```typescript
import { createConfiguration, OrderTotalDiscountApi } from '';
import type { OrderTotalDiscountApiUpdateOrderTotalDiscountUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrderTotalDiscountApi(configuration);

const request: OrderTotalDiscountApiUpdateOrderTotalDiscountUsingPATCHRequest = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateOrderTotalDiscountRequest: {
    applyToCommissions: true,
    criteria: [
      {
        code: "code_example",
        criteriaId: "criteriaId_example",
        operator: "LESS_THAN",
        planId: "planId_example",
        productId: "productId_example",
        productQuantityMax: 1,
        productQuantityMin: 1,
        rangeEndTime: "rangeEndTime_example",
        rangeStartTime: "rangeStartTime_example",
        subscriptionQuantity: 1,
        totalAmount: 3.14,
        type: "DATE_RANGE",
      },
    ],
    description: "description_example",
    discountStrategy: "GROSS",
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "name",
  ],
};

const data = await apiInstance.updateOrderTotalDiscountUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrderTotalDiscountRequest** | **UpdateOrderTotalDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**OrderTotalDiscount**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


