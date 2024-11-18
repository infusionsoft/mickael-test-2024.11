# .OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderCustomFieldUsingPOST_0**](OrdersApi.md#createOrderCustomFieldUsingPOST_0) | **POST** /v2/orders/model/customFields | Create an Order\&#39;s Custom Field
[**createOrderItemsOnOrderUsingPOST1_0**](OrdersApi.md#createOrderItemsOnOrderUsingPOST1_0) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createOrderUsingPOST1_0**](OrdersApi.md#createOrderUsingPOST1_0) | **POST** /v2/orders | Create an Order
[**createPaymentOnOrderUsingPOST1**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**deleteOrderUsingDELETE1_0**](OrdersApi.md#deleteOrderUsingDELETE1_0) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**getOrderUsingGET1_0**](OrdersApi.md#getOrderUsingGET1_0) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**listOrdersUsingGET1_0**](OrdersApi.md#listOrdersUsingGET1_0) | **GET** /v2/orders | List orders
[**retrieveOrderCustomFieldModelUsingGET_0**](OrdersApi.md#retrieveOrderCustomFieldModelUsingGET_0) | **GET** /v2/orders/model | Retrieve an Order\&#39;s Custom Field Model
[**updateOrderCustomFieldUsingPATCH_0**](OrdersApi.md#updateOrderCustomFieldUsingPATCH_0) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order\&#39;s Custom Field


# **createOrderCustomFieldUsingPOST_0**
> CustomFieldMetaData createOrderCustomFieldUsingPOST_0(customField)

Adds a custom field of the specified type and options to the Order object.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderCustomFieldUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderCustomFieldUsingPOST0Request = {
    // customField
  customField: {
    fieldType: "CURRENCY",
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        label: "label_example",
        options: [],
      },
    ],
    userGroupId: "userGroupId_example",
  },
};

const data = await apiInstance.createOrderCustomFieldUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | **CreateCustomFieldRequest**| customField |


### Return type

**CustomFieldMetaData**

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

# **createOrderItemsOnOrderUsingPOST1_0**
> RestV2OrderItem createOrderItemsOnOrderUsingPOST1_0(createRestOrderItemRequest)

Creates an order item on an existing order.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderItemsOnOrderUsingPOST10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderItemsOnOrderUsingPOST10Request = {
    // order_id
  orderId: "order_id_example",
    // createRestOrderItemRequest
  createRestOrderItemRequest: {
    description: "description_example",
    price: 3.14,
    productId: "productId_example",
    productType: "PRODUCT",
    quantity: 1,
  },
};

const data = await apiInstance.createOrderItemsOnOrderUsingPOST1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRestOrderItemRequest** | **CreateRestOrderItemRequest**| createRestOrderItemRequest |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**RestV2OrderItem**

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

# **createOrderUsingPOST1_0**
> RestV2Order createOrderUsingPOST1_0(createOrderRequest)

Create a one time Order with Order items.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreateOrderUsingPOST10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreateOrderUsingPOST10Request = {
    // createOrderRequest
  createOrderRequest: {
    contactId: "contactId_example",
    leadAffiliateId: "leadAffiliateId_example",
    orderItems: [
      {
        description: "description_example",
        price: 3.14,
        productId: "productId_example",
        productType: "PRODUCT",
        quantity: 1,
      },
    ],
    orderTime: "orderTime_example",
    orderTitle: "orderTitle_example",
    orderType: "OFFLINE",
    promoCodes: [
      "promoCodes_example",
    ],
    salesAffiliateId: "salesAffiliateId_example",
    shippingAddress: {
      company: "company_example",
      countryCode: "countryCode_example",
      firstName: "firstName_example",
      isInvoiceToCompany: true,
      lastName: "lastName_example",
      line1: "line1_example",
      line2: "line2_example",
      locality: "locality_example",
      middleName: "middleName_example",
      phone: "phone_example",
      region: "region_example",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
  },
};

const data = await apiInstance.createOrderUsingPOST1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | **RestCreateOrderRequest**| createOrderRequest |


### Return type

**RestV2Order**

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

# **createPaymentOnOrderUsingPOST1**
> PaymentResult createPaymentOnOrderUsingPOST1(createPaymentRequest)

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiCreatePaymentOnOrderUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiCreatePaymentOnOrderUsingPOST1Request = {
    // order_id
  orderId: "order_id_example",
    // createPaymentRequest
  createPaymentRequest: {
    applyToCommissions: true,
    date: new Date('1970-01-01T00:00:00.00Z'),
    notes: "notes_example",
    paymentAmount: "paymentAmount_example",
    paymentMethodId: 1,
  },
};

const data = await apiInstance.createPaymentOnOrderUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | **CreatePaymentRequest**| createPaymentRequest |
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**PaymentResult**

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

# **deleteOrderUsingDELETE1_0**
> void deleteOrderUsingDELETE1_0()

  Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiDeleteOrderUsingDELETE10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiDeleteOrderUsingDELETE10Request = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.deleteOrderUsingDELETE1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


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

# **getOrderUsingGET1_0**
> RestV2Order getOrderUsingGET1_0()

Retrieves a single Order for a given order id

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiGetOrderUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiGetOrderUsingGET10Request = {
    // order_id
  orderId: "order_id_example",
};

const data = await apiInstance.getOrderUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | order_id | defaults to undefined


### Return type

**RestV2Order**

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

# **listOrdersUsingGET1_0**
> ListOrders listOrdersUsingGET1_0()

Retrieves a list of orders

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiListOrdersUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiListOrdersUsingGET10Request = {
    // Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567` (optional)
  filter: "filter_example",
    // Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listOrdersUsingGET1_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60; | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListOrders**

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

# **retrieveOrderCustomFieldModelUsingGET_0**
> ObjectModel retrieveOrderCustomFieldModelUsingGET_0()

Gets the custom field\'s model for the Order object

### Example


```typescript
import { createConfiguration, OrdersApi } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request = {};

const data = await apiInstance.retrieveOrderCustomFieldModelUsingGET_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **updateOrderCustomFieldUsingPATCH_0**
> CustomFieldMetaData updateOrderCustomFieldUsingPATCH_0(request)

Updates a custom field of the specified type and options to the Order object.

### Example


```typescript
import { createConfiguration, OrdersApi } from '';
import type { OrdersApiUpdateOrderCustomFieldUsingPATCH0Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrdersApi(configuration);

const request: OrdersApiUpdateOrderCustomFieldUsingPATCH0Request = {
    // custom_field_id
  customFieldId: "custom_field_id_example",
    // request
  request: {
    groupId: "groupId_example",
    label: "label_example",
    options: [
      {
        id: "id_example",
        label: "label_example",
        options: [],
      },
    ],
  },
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "group_id",
  ],
};

const data = await apiInstance.updateOrderCustomFieldUsingPATCH_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **UpdateCustomFieldMetaDataRequest**| request |
 **customFieldId** | [**string**] | custom_field_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**CustomFieldMetaData**

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


