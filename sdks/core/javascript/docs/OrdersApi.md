# KeapCoreServiceCoreSdk.OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderCustomFieldUsingPOST**](OrdersApi.md#createOrderCustomFieldUsingPOST) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**createOrderItemsOnOrderUsingPOST1**](OrdersApi.md#createOrderItemsOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createOrderUsingPOST1**](OrdersApi.md#createOrderUsingPOST1) | **POST** /v2/orders | Create an Order
[**createPaymentOnOrderUsingPOST1**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**deleteOrderCustomFieldUsingDELETE**](OrdersApi.md#deleteOrderCustomFieldUsingDELETE) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order&#39;s Custom Field
[**deleteOrderUsingDELETE1**](OrdersApi.md#deleteOrderUsingDELETE1) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**getOrderUsingGET1**](OrdersApi.md#getOrderUsingGET1) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**listOrderPaymentsUsingGET1**](OrdersApi.md#listOrderPaymentsUsingGET1) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments
[**listOrdersUsingGET1**](OrdersApi.md#listOrdersUsingGET1) | **GET** /v2/orders | List orders
[**patchOrderUsingPATCH**](OrdersApi.md#patchOrderUsingPATCH) | **PATCH** /v2/orders/{order_id} | Update an Order
[**retrieveOrderCustomFieldModelUsingGET**](OrdersApi.md#retrieveOrderCustomFieldModelUsingGET) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**updateOrderCustomFieldUsingPATCH**](OrdersApi.md#updateOrderCustomFieldUsingPATCH) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field



## createOrderCustomFieldUsingPOST

> CustomFieldMetaData createOrderCustomFieldUsingPOST(customField)

Create an Order&#39;s Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let customField = new KeapCoreServiceCoreSdk.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOrderCustomFieldUsingPOST(customField).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderItemsOnOrderUsingPOST1

> RestV2OrderItem createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest)

Create an Order Item

Creates an order item on an existing order.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createRestOrderItemRequest = new KeapCoreServiceCoreSdk.CreateRestOrderItemRequest(); // CreateRestOrderItemRequest | createRestOrderItemRequest
apiInstance.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **createRestOrderItemRequest** | [**CreateRestOrderItemRequest**](CreateRestOrderItemRequest.md)| createRestOrderItemRequest | 

### Return type

[**RestV2OrderItem**](RestV2OrderItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderUsingPOST1

> RestV2Order createOrderUsingPOST1(createOrderRequest)

Create an Order

Create a one time Order with Order items.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let createOrderRequest = new KeapCoreServiceCoreSdk.RestCreateOrderRequest(); // RestCreateOrderRequest | createOrderRequest
apiInstance.createOrderUsingPOST1(createOrderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| createOrderRequest | 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentOnOrderUsingPOST1

> PaymentResult createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createPaymentRequest = new KeapCoreServiceCoreSdk.CreatePaymentRequest(); // CreatePaymentRequest | createPaymentRequest
apiInstance.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| createPaymentRequest | 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrderCustomFieldUsingDELETE

> deleteOrderCustomFieldUsingDELETE(customFieldId)

Delete an Order&#39;s Custom Field

Deletes a Custom Field from Order.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
apiInstance.deleteOrderCustomFieldUsingDELETE(customFieldId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrderUsingDELETE1

> deleteOrderUsingDELETE1(orderId)

Delete an Order

  Deletes an Order&lt;br/&gt;   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.deleteOrderUsingDELETE1(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderUsingGET1

> RestV2Order getOrderUsingGET1(orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.getOrderUsingGET1(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrderPaymentsUsingGET1

> ListOrderPaymentsResponse listOrderPaymentsUsingGET1(orderId, opts)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true` 
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrderPaymentsUsingGET1(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **filter** | **String**| Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listOrdersUsingGET1

> ListOrders listOrdersUsingGET1(opts)

List orders

Retrieves a list of orders

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrdersUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional] 
 **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] 
 **pageSize** | **Number**| Total number of items to return per page | [optional] 
 **pageToken** | **String**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchOrderUsingPATCH

> RestV2Order patchOrderUsingPATCH(orderId, opts)

Update an Order

Updates an Order

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'order': new KeapCoreServiceCoreSdk.RestV2PatchOrderRequest() // RestV2PatchOrderRequest | order
};
apiInstance.patchOrderUsingPATCH(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| order_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **order** | [**RestV2PatchOrderRequest**](RestV2PatchOrderRequest.md)| order | [optional] 

### Return type

[**RestV2Order**](RestV2Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveOrderCustomFieldModelUsingGET

> ObjectModel retrieveOrderCustomFieldModelUsingGET()

Retrieve an Order&#39;s Custom Field Model

Gets the custom field&#39;s model for the Order object

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
apiInstance.retrieveOrderCustomFieldModelUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ObjectModel**](ObjectModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrderCustomFieldUsingPATCH

> CustomFieldMetaData updateOrderCustomFieldUsingPATCH(customFieldId, request, opts)

Update an Order&#39;s Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.OrdersApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapCoreServiceCoreSdk.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOrderCustomFieldUsingPATCH(customFieldId, request, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldId** | **String**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

