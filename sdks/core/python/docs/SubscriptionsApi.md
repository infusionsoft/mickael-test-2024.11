# keap_sdk_core_client.SubscriptionsApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_subscription_using_post_0**](SubscriptionsApi.md#cancel_subscription_using_post_0) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**create_subscription_custom_field_using_post_0**](SubscriptionsApi.md#create_subscription_custom_field_using_post_0) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field
[**retrieve_subscription_custom_field_model_using_get_0**](SubscriptionsApi.md#retrieve_subscription_custom_field_model_using_get_0) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model
[**update_subscription_custom_field_using_patch_0**](SubscriptionsApi.md#update_subscription_custom_field_using_patch_0) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field


# **cancel_subscription_using_post_0**
> cancel_subscription_using_post_0(subscription_id, cancel_subscriptions_request)

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
        api_instance.cancel_subscription_using_post_0(subscription_id, cancel_subscriptions_request)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->cancel_subscription_using_post_0: %s\n" % e)
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

# **create_subscription_custom_field_using_post_0**
> CustomFieldMetaData create_subscription_custom_field_using_post_0(custom_field)

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
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Subscription's Custom Field
        api_response = api_instance.create_subscription_custom_field_using_post_0(custom_field)
        print("The response of SubscriptionsApi->create_subscription_custom_field_using_post_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription_custom_field_using_post_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

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

# **retrieve_subscription_custom_field_model_using_get_0**
> ObjectModel retrieve_subscription_custom_field_model_using_get_0()

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
        api_response = api_instance.retrieve_subscription_custom_field_model_using_get_0()
        print("The response of SubscriptionsApi->retrieve_subscription_custom_field_model_using_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_subscription_custom_field_model_using_get_0: %s\n" % e)
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

# **update_subscription_custom_field_using_patch_0**
> CustomFieldMetaData update_subscription_custom_field_using_patch_0(custom_field_id, request, update_mask=update_mask)

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
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription's Custom Field
        api_response = api_instance.update_subscription_custom_field_using_patch_0(custom_field_id, request, update_mask=update_mask)
        print("The response of SubscriptionsApi->update_subscription_custom_field_using_patch_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription_custom_field_using_patch_0: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
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

