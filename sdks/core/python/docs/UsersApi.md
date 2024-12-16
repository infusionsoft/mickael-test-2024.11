# keap_sdk_core_client.UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_using_post1**](UsersApi.md#create_user_using_post1) | **POST** /v2/users | Create a User
[**get_user_by_id_using_get**](UsersApi.md#get_user_by_id_using_get) | **GET** /v2/users/{user_id} | Get User
[**get_user_info_using_get1**](UsersApi.md#get_user_info_using_get1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**get_user_signature_using_get1**](UsersApi.md#get_user_signature_using_get1) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**list_users_using_get1**](UsersApi.md#list_users_using_get1) | **GET** /v2/users | List Users
[**patch_user_using_patch**](UsersApi.md#patch_user_using_patch) | **PATCH** /v2/users/{user_id} | Update User


# **create_user_using_post1**
> User create_user_using_post1(user=user)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_user_request_v2 import CreateUserRequestV2
from keap_sdk_core_client.models.user import User
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)
    user = keap_sdk_core_client.CreateUserRequestV2() # CreateUserRequestV2 | user (optional)

    try:
        # Create a User
        api_response = api_instance.create_user_using_post1(user=user)
        print("The response of UsersApi->create_user_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->create_user_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

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

# **get_user_by_id_using_get**
> User get_user_by_id_using_get(user_id)

Get User

Retrieves a specific User

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.user import User
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | user_id

    try:
        # Get User
        api_response = api_instance.get_user_by_id_using_get(user_id)
        print("The response of UsersApi->get_user_by_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_id_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| user_id | 

### Return type

[**User**](User.md)

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

# **get_user_info_using_get1**
> GetUserInfoResponse get_user_info_using_get1()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.get_user_info_response import GetUserInfoResponse
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)

    try:
        # Retrieve User Info
        api_response = api_instance.get_user_info_using_get1()
        print("The response of UsersApi->get_user_info_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_info_using_get1: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserInfoResponse**](GetUserInfoResponse.md)

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

# **get_user_signature_using_get1**
> str get_user_signature_using_get1(user_id)

Get User email signature

Retrieves a HTML snippet that contains the user's email signature.

### Example


```python
import keap_sdk_core_client
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | user_id

    try:
        # Get User email signature
        api_response = api_instance.get_user_signature_using_get1(user_id)
        print("The response of UsersApi->get_user_signature_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_signature_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| user_id | 

### Return type

**str**

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

# **list_users_using_get1**
> ListUserResponse list_users_using_get1(filter=filter, order_by=order_by)

List Users

Retrieves a list of users

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_user_response import ListUserResponse
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. 'given_name desc' (optional)

    try:
        # List Users
        api_response = api_instance.list_users_using_get1(filter=filter, order_by=order_by)
        print("The response of UsersApi->list_users_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_users_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] 

### Return type

[**ListUserResponse**](ListUserResponse.md)

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

# **patch_user_using_patch**
> User patch_user_using_patch(user_id, update_mask=update_mask, user=user)

Update User

Updates information on a specific User

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_user_request_v2 import PatchUserRequestV2
from keap_sdk_core_client.models.user import User
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
    api_instance = keap_sdk_core_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | user_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    user = keap_sdk_core_client.PatchUserRequestV2() # PatchUserRequestV2 | user (optional)

    try:
        # Update User
        api_response = api_instance.patch_user_using_patch(user_id, update_mask=update_mask, user=user)
        print("The response of UsersApi->patch_user_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->patch_user_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| user_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **user** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

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

