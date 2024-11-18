# .ProductApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listProductsUsingGET1_0**](ProductApi.md#listProductsUsingGET1_0) | **GET** /v2/products | List Products


# **listProductsUsingGET1_0**
> ListProductsResponse listProductsUsingGET1_0()

Retrieves a list of Products

### Example


```typescript
import { createConfiguration, ProductApi } from '';
import type { ProductApiListProductsUsingGET10Request } from '';

const configuration = createConfiguration();
const apiInstance = new ProductApi(configuration);

const request: ProductApiListProductsUsingGET10Request = {
    // Filter to apply, allowed fields are:   - (String) name    (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listProductsUsingGET1_0(request);
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
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


