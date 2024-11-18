# keap_sdk_core_client.SubscriptionPlansApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription_v2_using_post**](SubscriptionPlansApi.md#create_subscription_v2_using_post) | **POST** /v2/subscriptions | Create Subscription
[**list_subscription_plans_using_get_0**](SubscriptionPlansApi.md#list_subscription_plans_using_get_0) | **GET** /v2/subscriptionPlans | List Subscription Plans


# **create_subscription_v2_using_post**
> RestSubscriptionV2 create_subscription_v2_using_post(create_subscription_v2)

Create Subscription

Creates a subscription with the specified product and product subscription id.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_subscription_v2 import CreateSubscriptionV2
from keap_sdk_core_client.models.rest_subscription_v2 import RestSubscriptionV2
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.SubscriptionPlansApi(api_client)
    create_subscription_v2 = keap_sdk_core_client.CreateSubscriptionV2() # CreateSubscriptionV2 | createSubscriptionV2

    try:
        # Create Subscription
        api_response = api_instance.create_subscription_v2_using_post(create_subscription_v2)
        print("The response of SubscriptionPlansApi->create_subscription_v2_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->create_subscription_v2_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_subscription_v2** | [**CreateSubscriptionV2**](CreateSubscriptionV2.md)| createSubscriptionV2 | 

### Return type

[**RestSubscriptionV2**](RestSubscriptionV2.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_subscription_plans_using_get_0**
> ListSubscriptionPlansResponse list_subscription_plans_using_get_0(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_subscription_plans_response import ListSubscriptionPlansResponse
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.infusionsoft.com/crm/rest/app
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.infusionsoft.com/crm/rest/app"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.SubscriptionPlansApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name    (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Subscription Plans
        api_response = api_instance.list_subscription_plans_using_get_0(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of SubscriptionPlansApi->list_subscription_plans_using_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionPlansApi->list_subscription_plans_using_get_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) name    | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

