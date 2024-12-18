# keap_sdk_core_client.SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_subscription_using_post**](SubscriptionsApi.md#cancel_subscription_using_post) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**create_subscription_custom_field_using_post**](SubscriptionsApi.md#create_subscription_custom_field_using_post) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field
[**create_subscription_v2_using_post**](SubscriptionsApi.md#create_subscription_v2_using_post) | **POST** /v2/subscriptions | Create Subscription
[**list_subscriptions_using_get1**](SubscriptionsApi.md#list_subscriptions_using_get1) | **GET** /v2/subscriptions | List Subscriptions
[**retrieve_subscription_custom_field_model_using_get**](SubscriptionsApi.md#retrieve_subscription_custom_field_model_using_get) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model
[**update_subscription_custom_field_using_patch**](SubscriptionsApi.md#update_subscription_custom_field_using_patch) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field


# **cancel_subscription_using_post**
> cancel_subscription_using_post(subscription_id, cancel_subscriptions_request)

Cancel Subscription

Cancels the specified subscription

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.cancel_subscriptions_request import CancelSubscriptionsRequest
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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | subscription_id
    cancel_subscriptions_request = keap_sdk_core_client.CancelSubscriptionsRequest() # CancelSubscriptionsRequest | cancelSubscriptionsRequest

    try:
        # Cancel Subscription
        api_instance.cancel_subscription_using_post(subscription_id, cancel_subscriptions_request)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->cancel_subscription_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription_id | 
 **cancel_subscriptions_request** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md)| cancelSubscriptionsRequest | 

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_subscription_custom_field_using_post**
> CustomFieldMetaData create_subscription_custom_field_using_post(create_custom_field_request)

Create a Subscription's Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_sdk_core_client.models.custom_field_meta_data import CustomFieldMetaData
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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)
    create_custom_field_request = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Subscription's Custom Field
        api_response = api_instance.create_subscription_custom_field_using_post(create_custom_field_request)
        print("The response of SubscriptionsApi->create_subscription_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_custom_field_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_field_request** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)
    create_subscription_v2 = keap_sdk_core_client.CreateSubscriptionV2() # CreateSubscriptionV2 | createSubscriptionV2

    try:
        # Create Subscription
        api_response = api_instance.create_subscription_v2_using_post(create_subscription_v2)
        print("The response of SubscriptionsApi->create_subscription_v2_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_v2_using_post: %s\n" % e)
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

# **list_subscriptions_using_get1**
> ListSubscriptionsResponse list_subscriptions_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_subscriptions_response import ListSubscriptionsResponse
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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Subscriptions
        api_response = api_instance.list_subscriptions_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of SubscriptionsApi->list_subscriptions_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->list_subscriptions_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

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

# **retrieve_subscription_custom_field_model_using_get**
> ObjectModel retrieve_subscription_custom_field_model_using_get()

Retrieve Subscription's Custom Field Model

Gets the custom field's model for the Subscription object

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.object_model import ObjectModel
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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)

    try:
        # Retrieve Subscription's Custom Field Model
        api_response = api_instance.retrieve_subscription_custom_field_model_using_get()
        print("The response of SubscriptionsApi->retrieve_subscription_custom_field_model_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_subscription_custom_field_model_using_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_subscription_custom_field_using_patch**
> CustomFieldMetaData update_subscription_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)

Update a Subscription's Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.custom_field_meta_data import CustomFieldMetaData
from keap_sdk_core_client.models.update_custom_field_meta_data_request import UpdateCustomFieldMetaDataRequest
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
    api_instance = keap_sdk_core_client.SubscriptionsApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    update_custom_field_meta_data_request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription's Custom Field
        api_response = api_instance.update_subscription_custom_field_using_patch(custom_field_id, update_custom_field_meta_data_request, update_mask=update_mask)
        print("The response of SubscriptionsApi->update_subscription_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription_custom_field_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **update_custom_field_meta_data_request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

