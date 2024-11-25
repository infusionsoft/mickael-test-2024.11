# .ShippingApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShippingMethodsUsingGET**](ShippingApi.md#listShippingMethodsUsingGET) | **GET** /v2/shipping | List Shipping methods


# **listShippingMethodsUsingGET**
> ListRestShippingMethodsResponse listShippingMethodsUsingGET()

Retrieves a list of Shipping methods

### Example


```typescript
import { createConfiguration, ShippingApi } from '';

const configuration = createConfiguration();
const apiInstance = new ShippingApi(configuration);

const request = {};

const data = await apiInstance.listShippingMethodsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListRestShippingMethodsResponse**

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


