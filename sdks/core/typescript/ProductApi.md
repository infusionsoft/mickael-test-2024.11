# .ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustInventoryUsingPOST**](ProductApi.md#adjustInventoryUsingPOST) | **POST** /v2/products/{product_id}:adjustInventory | Adjust Inventory of a Product
[**createProductUsingPOST1**](ProductApi.md#createProductUsingPOST1) | **POST** /v2/products | Create a Product
[**deleteProductUsingDELETE1**](ProductApi.md#deleteProductUsingDELETE1) | **DELETE** /v2/products/{product_id} | Delete a Product
[**getProductUsingGET**](ProductApi.md#getProductUsingGET) | **GET** /v2/products/{product_id} | Get a Product
[**listProductsUsingGET1**](ProductApi.md#listProductsUsingGET1) | **GET** /v2/products | List Products


# **adjustInventoryUsingPOST**
> RestV2Product adjustInventoryUsingPOST(updateProductInventoryRequest)

Increase or decrease the quantity of the Product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiAdjustInventoryUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiAdjustInventoryUsingPOSTRequest = {
    // product_id
  productId: "product_id_example",
    // updateProductInventoryRequest
  updateProductInventoryRequest: {
    quantity: 1,
    type: "INCREASE",
  },
};

const data = await apiInstance.adjustInventoryUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProductInventoryRequest** | **UpdateProductInventoryRequest**| updateProductInventoryRequest |
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2Product**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductUsingPOST1**
> RestV2Product createProductUsingPOST1(createProductRequest)

Creates a new product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiCreateProductUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiCreateProductUsingPOST1Request = {
    // createProductRequest
  createProductRequest: {
    active: true,
    cityTaxable: true,
    countryTaxable: true,
    description: "description_example",
    name: "name_example",
    price: 1,
    shortDescription: "shortDescription_example",
    sku: "sku_example",
    stateTaxable: true,
    storefrontHidden: true,
    subscriptionOnly: true,
    taxable: true,
    weight: 3.14,
  },
};

const data = await apiInstance.createProductUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProductRequest** | **CreateProductRequest**| createProductRequest |


### Return type

**RestV2Product**

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

# **deleteProductUsingDELETE1**
> void deleteProductUsingDELETE1()

Deletes a single product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiDeleteProductUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiDeleteProductUsingDELETE1Request = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.deleteProductUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


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

# **getProductUsingGET**
> RestV2Product getProductUsingGET()

Gets a single Product

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiGetProductUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiGetProductUsingGETRequest = {
    // product_id
  productId: "product_id_example",
};

const data = await apiInstance.getProductUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**string**] | product_id | defaults to undefined


### Return type

**RestV2Product**

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

# **listProductsUsingGET1**
> ListProductsResponse listProductsUsingGET1()

Retrieves a list of Products

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiListProductsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiListProductsUsingGET1Request = {
    // Filter to apply, allowed fields are:   - (String) name    (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) name    | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListProductsResponse**

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


