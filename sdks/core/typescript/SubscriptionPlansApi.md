# .SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscriptionV2UsingPOST**](SubscriptionPlansApi.md#createSubscriptionV2UsingPOST) | **POST** /v2/subscriptions | Create Subscription
[**listSubscriptionPlansUsingGET_0**](SubscriptionPlansApi.md#listSubscriptionPlansUsingGET_0) | **GET** /v2/subscriptionPlans | List Subscription Plans


# **createSubscriptionV2UsingPOST**
> RestSubscriptionV2 createSubscriptionV2UsingPOST(createSubscriptionV2)

Creates a subscription with the specified product and product subscription id.

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiCreateSubscriptionV2UsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiCreateSubscriptionV2UsingPOSTRequest = {
    // createSubscriptionV2
  createSubscriptionV2: {
    allowDuplicate: true,
    allowTax: true,
    autoCharge: true,
    billingAmount: 3.14,
    contactId: "contactId_example",
    firstBillDate: new Date('1970-01-01').toISOString().split('T')[0];,
    paymentMethodId: "paymentMethodId_example",
    quantity: 1,
    saleAffiliateId: "saleAffiliateId_example",
    subscriptionPlanId: "subscriptionPlanId_example",
  },
};

const data = await apiInstance.createSubscriptionV2UsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionV2** | **CreateSubscriptionV2**| createSubscriptionV2 |


### Return type

**RestSubscriptionV2**

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

# **listSubscriptionPlansUsingGET_0**
> ListSubscriptionPlansResponse listSubscriptionPlansUsingGET_0()

Retrieves a list of Subscription Plans

### Example


```typescript
import { createConfiguration, SubscriptionPlansApi } from '';
import type { SubscriptionPlansApiListSubscriptionPlansUsingGET0Request } from '';

const configuration = createConfiguration();
const apiInstance = new SubscriptionPlansApi(configuration);

const request: SubscriptionPlansApiListSubscriptionPlansUsingGET0Request = {
    // Filter to apply, allowed fields are:   - (String) name    (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listSubscriptionPlansUsingGET_0(request);
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

**ListSubscriptionPlansResponse**

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


