# KeapRestApi.OrdersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderCustomFieldUsingPOST_0**](OrdersApi.md#createOrderCustomFieldUsingPOST_0) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**createOrderItemsOnOrderUsingPOST1_0**](OrdersApi.md#createOrderItemsOnOrderUsingPOST1_0) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**createOrderUsingPOST1_0**](OrdersApi.md#createOrderUsingPOST1_0) | **POST** /v2/orders | Create an Order
[**createPaymentOnOrderUsingPOST1**](OrdersApi.md#createPaymentOnOrderUsingPOST1) | **POST** /v2/orders/{order_id}/payments | Create a Payment
[**deleteOrderUsingDELETE1_0**](OrdersApi.md#deleteOrderUsingDELETE1_0) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**getOrderUsingGET1_0**](OrdersApi.md#getOrderUsingGET1_0) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**listOrdersUsingGET1_0**](OrdersApi.md#listOrdersUsingGET1_0) | **GET** /v2/orders | List orders
[**retrieveOrderCustomFieldModelUsingGET_0**](OrdersApi.md#retrieveOrderCustomFieldModelUsingGET_0) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**updateOrderCustomFieldUsingPATCH_0**](OrdersApi.md#updateOrderCustomFieldUsingPATCH_0) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field



## createOrderCustomFieldUsingPOST_0

> CustomFieldMetaData createOrderCustomFieldUsingPOST_0(customField)

Create an Order&#39;s Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let customField = new KeapRestApi.CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
apiInstance.createOrderCustomFieldUsingPOST_0(customField).then((data) => {
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


## createOrderItemsOnOrderUsingPOST1_0

> RestV2OrderItem createOrderItemsOnOrderUsingPOST1_0(orderId, createRestOrderItemRequest)

Create an Order Item

Creates an order item on an existing order.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createRestOrderItemRequest = new KeapRestApi.CreateRestOrderItemRequest(); // CreateRestOrderItemRequest | createRestOrderItemRequest
apiInstance.createOrderItemsOnOrderUsingPOST1_0(orderId, createRestOrderItemRequest).then((data) => {
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


## createOrderUsingPOST1_0

> RestV2Order createOrderUsingPOST1_0(createOrderRequest)

Create an Order

Create a one time Order with Order items.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let createOrderRequest = new KeapRestApi.RestCreateOrderRequest(); // RestCreateOrderRequest | createOrderRequest
apiInstance.createOrderUsingPOST1_0(createOrderRequest).then((data) => {
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
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let orderId = "orderId_example"; // String | order_id
let createPaymentRequest = new KeapRestApi.CreatePaymentRequest(); // CreatePaymentRequest | createPaymentRequest
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


## deleteOrderUsingDELETE1_0

> deleteOrderUsingDELETE1_0(orderId)

Delete an Order

  Deletes an Order&lt;br/&gt;   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.deleteOrderUsingDELETE1_0(orderId).then(() => {
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


## getOrderUsingGET1_0

> RestV2Order getOrderUsingGET1_0(orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let orderId = "orderId_example"; // String | order_id
apiInstance.getOrderUsingGET1_0(orderId).then((data) => {
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


## listOrdersUsingGET1_0

> ListOrders listOrdersUsingGET1_0(opts)

List orders

Retrieves a list of orders

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let opts = {
  'filter': "filter_example", // String | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567`
  'orderBy': "orderBy_example", // String | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
  'pageSize': 0, // Number | Total number of items to return per page
  'pageToken': "pageToken_example" // String | Page token
};
apiInstance.listOrdersUsingGET1_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60; | [optional] 
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


## retrieveOrderCustomFieldModelUsingGET_0

> ObjectModel retrieveOrderCustomFieldModelUsingGET_0()

Retrieve an Order&#39;s Custom Field Model

Gets the custom field&#39;s model for the Order object

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
apiInstance.retrieveOrderCustomFieldModelUsingGET_0().then((data) => {
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


## updateOrderCustomFieldUsingPATCH_0

> CustomFieldMetaData updateOrderCustomFieldUsingPATCH_0(customFieldId, request, opts)

Update an Order&#39;s Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.OrdersApi();
let customFieldId = "customFieldId_example"; // String | custom_field_id
let request = new KeapRestApi.UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
let opts = {
  'updateMask': ["null"] // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
};
apiInstance.updateOrderCustomFieldUsingPATCH_0(customFieldId, request, opts).then((data) => {
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

