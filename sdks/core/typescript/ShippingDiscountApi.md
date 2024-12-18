# .ShippingDiscountApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDiscountUsingPOST1**](ShippingDiscountApi.md#createDiscountUsingPOST1) | **POST** /v2/discounts/shipping | Create a Shipping Discount
[**deleteDiscountUsingDELETE2**](ShippingDiscountApi.md#deleteDiscountUsingDELETE2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount
[**getDiscountUsingGET1**](ShippingDiscountApi.md#getDiscountUsingGET1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount
[**listDiscountsUsingGET**](ShippingDiscountApi.md#listDiscountsUsingGET) | **GET** /v2/discounts/shipping | List all Shipping Discounts
[**updateDiscountUsingPATCH1**](ShippingDiscountApi.md#updateDiscountUsingPATCH1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount


# **createDiscountUsingPOST1**
> ShippingDiscount createDiscountUsingPOST1(createShippingDiscountRequest)

Creates a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountApi } from '';
import type { ShippingDiscountApiCreateDiscountUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountApi(configuration);

const request: ShippingDiscountApiCreateDiscountUsingPOST1Request = {
    // request
  createShippingDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
};

const data = await apiInstance.createDiscountUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShippingDiscountRequest** | **CreateShippingDiscountRequest**| request |


### Return type

**ShippingDiscount**

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

# **deleteDiscountUsingDELETE2**
> void deleteDiscountUsingDELETE2()

Deletes a specified Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountApi } from '';
import type { ShippingDiscountApiDeleteDiscountUsingDELETE2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountApi(configuration);

const request: ShippingDiscountApiDeleteDiscountUsingDELETE2Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.deleteDiscountUsingDELETE2(request);
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

# **getDiscountUsingGET1**
> ShippingDiscount getDiscountUsingGET1()

Retrieves a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountApi } from '';
import type { ShippingDiscountApiGetDiscountUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountApi(configuration);

const request: ShippingDiscountApiGetDiscountUsingGET1Request = {
    // discount_id
  discountId: "discount_id_example",
};

const data = await apiInstance.getDiscountUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discountId** | [**string**] | discount_id | defaults to undefined


### Return type

**ShippingDiscount**

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

# **listDiscountsUsingGET**
> ListShippingDiscountsResponse listDiscountsUsingGET()

Retrieves all Shipping Discounts

### Example


```typescript
import { createConfiguration, ShippingDiscountApi } from '';
import type { ShippingDiscountApiListDiscountsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountApi(configuration);

const request: ShippingDiscountApiListDiscountsUsingGETRequest = {
    // TODO: PAPI-1449 (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld`  (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. `given_name desc` (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listDiscountsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | TODO: PAPI-1449 | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListShippingDiscountsResponse**

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

# **updateDiscountUsingPATCH1**
> ShippingDiscount updateDiscountUsingPATCH1(updateShippingDiscountRequest)

Updates a Shipping Discount

### Example


```typescript
import { createConfiguration, ShippingDiscountApi } from '';
import type { ShippingDiscountApiUpdateDiscountUsingPATCH1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingDiscountApi(configuration);

const request: ShippingDiscountApiUpdateDiscountUsingPATCH1Request = {
    // discount_id
  discountId: "discount_id_example",
    // request
  updateShippingDiscountRequest: {
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
    discountType: "AMOUNT",
    discountValue: 3.14,
    name: "name_example",
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "TODO: PAPI-1452",
  ],
};

const data = await apiInstance.updateDiscountUsingPATCH1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateShippingDiscountRequest** | **UpdateShippingDiscountRequest**| request |
 **discountId** | [**string**] | discount_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**ShippingDiscount**

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


