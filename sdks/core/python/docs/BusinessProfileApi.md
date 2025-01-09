# keap_sdk_core_client.BusinessProfileApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_business_profile_using_get**](BusinessProfileApi.md#get_business_profile_using_get) | **GET** /v2/businessProfile | Retrieve Business Profile
[**update_business_profile_using_patch**](BusinessProfileApi.md#update_business_profile_using_patch) | **PATCH** /v2/businessProfile | Update Business Profile


# **get_business_profile_using_get**
> GetBusinessProfileResponse get_business_profile_using_get()

Retrieve Business Profile

Retrieves Business Profile information.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.get_business_profile_response import GetBusinessProfileResponse
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.BusinessProfileApi(api_client)

    try:
        # Retrieve Business Profile
        api_response = api_instance.get_business_profile_using_get()
        print("The response of BusinessProfileApi->get_business_profile_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessProfileApi->get_business_profile_using_get: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

# **update_business_profile_using_patch**
> GetBusinessProfileResponse update_business_profile_using_patch(update_mask=update_mask, update_business_profile_request=update_business_profile_request)

Update Business Profile

Updates Business Profile information.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.get_business_profile_response import GetBusinessProfileResponse
from keap_sdk_core_client.models.update_business_profile_request import UpdateBusinessProfileRequest
from keap_sdk_core_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.keap.com/crm/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = keap_sdk_core_client.Configuration(
    host = "https://api.keap.com/crm/rest"
)

# Enter a context with an instance of the API client
with keap_sdk_core_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = keap_sdk_core_client.BusinessProfileApi(api_client)
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    update_business_profile_request = keap_sdk_core_client.UpdateBusinessProfileRequest() # UpdateBusinessProfileRequest | businessProfile (optional)

    try:
        # Update Business Profile
        api_response = api_instance.update_business_profile_using_patch(update_mask=update_mask, update_business_profile_request=update_business_profile_request)
        print("The response of BusinessProfileApi->update_business_profile_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BusinessProfileApi->update_business_profile_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **update_business_profile_request** | [**UpdateBusinessProfileRequest**](UpdateBusinessProfileRequest.md)| businessProfile | [optional] 

### Return type

[**GetBusinessProfileResponse**](GetBusinessProfileResponse.md)

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

