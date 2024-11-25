# keap_sdk_core_client.AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_affiliate_to_program_using_post**](AffiliateApi.md#add_affiliate_to_program_using_post) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**add_affiliate_using_post**](AffiliateApi.md#add_affiliate_using_post) | **POST** /v2/affiliates | Create an Affiliate
[**add_commission_program_using_post**](AffiliateApi.md#add_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assign_product_commission_program_using_post**](AffiliateApi.md#assign_product_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assign_subscription_commission_program_using_post**](AffiliateApi.md#assign_subscription_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**create_affiliate_custom_field_using_post**](AffiliateApi.md#create_affiliate_custom_field_using_post) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**create_default_commission_program_using_post**](AffiliateApi.md#create_default_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**create_redirect_link_using_post**](AffiliateApi.md#create_redirect_link_using_post) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**delete_affiliate_commission_program_using_delete**](AffiliateApi.md#delete_affiliate_commission_program_using_delete) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**delete_affiliate_using_delete**](AffiliateApi.md#delete_affiliate_using_delete) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**delete_redirect_link_using_delete**](AffiliateApi.md#delete_redirect_link_using_delete) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**get_affiliate_commission_total_using_get**](AffiliateApi.md#get_affiliate_commission_total_using_get) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**get_affiliate_commissions_using_get**](AffiliateApi.md#get_affiliate_commissions_using_get) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**get_affiliate_custom_fields_using_get**](AffiliateApi.md#get_affiliate_custom_fields_using_get) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**get_affiliate_using_get1**](AffiliateApi.md#get_affiliate_using_get1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
[**get_commission_program_using_get**](AffiliateApi.md#get_commission_program_using_get) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**get_redirect_link_using_get**](AffiliateApi.md#get_redirect_link_using_get) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**list_affiliate_commission_programs_using_get**](AffiliateApi.md#list_affiliate_commission_programs_using_get) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**list_affiliate_links_using_get**](AffiliateApi.md#list_affiliate_links_using_get) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**list_summaries_using_get1**](AffiliateApi.md#list_summaries_using_get1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**patch_commission_program_using_patch**](AffiliateApi.md#patch_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
[**patch_default_commission_program_using_patch**](AffiliateApi.md#patch_default_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patch_product_commission_program_using_patch**](AffiliateApi.md#patch_product_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patch_subscription_commission_program_using_patch**](AffiliateApi.md#patch_subscription_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**remove_affiliate_from_program_using_post**](AffiliateApi.md#remove_affiliate_from_program_using_post) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**remove_subscription_plan_commission_from_commissions_using_post**](AffiliateApi.md#remove_subscription_plan_commission_from_commissions_using_post) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**update_affiliate_custom_field_using_patch**](AffiliateApi.md#update_affiliate_custom_field_using_patch) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**update_affiliate_using_patch**](AffiliateApi.md#update_affiliate_using_patch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
[**update_redirect_link_using_patch**](AffiliateApi.md#update_redirect_link_using_patch) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link


# **add_affiliate_to_program_using_post**
> add_affiliate_to_program_using_post(id, affiliate_add_to_program_request)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_add_to_program_request import AffiliateAddToProgramRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    affiliate_add_to_program_request = keap_sdk_core_client.AffiliateAddToProgramRequest() # AffiliateAddToProgramRequest | affiliateAddToProgramRequest

    try:
        # Assign Affiliate to Commission program
        api_instance.add_affiliate_to_program_using_post(id, affiliate_add_to_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate_to_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **affiliate_add_to_program_request** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | 

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

# **add_affiliate_using_post**
> RestAffiliate add_affiliate_using_post(insert_affiliate=insert_affiliate)

Create an Affiliate

Creates a single Affiliate

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_affiliate_request import CreateAffiliateRequest
from keap_sdk_core_client.models.rest_affiliate import RestAffiliate
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    insert_affiliate = keap_sdk_core_client.CreateAffiliateRequest() # CreateAffiliateRequest | Affiliate request to insert (optional)

    try:
        # Create an Affiliate
        api_response = api_instance.add_affiliate_using_post(insert_affiliate=insert_affiliate)
        print("The response of AffiliateApi->add_affiliate_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_affiliate_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insert_affiliate** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

# **add_commission_program_using_post**
> AffiliateCommissionProgramResponse add_commission_program_using_post(insert_commission_program=insert_commission_program)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_sdk_core_client.models.create_commission_program_request import CreateCommissionProgramRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    insert_commission_program = keap_sdk_core_client.CreateCommissionProgramRequest() # CreateCommissionProgramRequest | Commission Program to insert (optional)

    try:
        # Create an Affiliate Commission Program
        api_response = api_instance.add_commission_program_using_post(insert_commission_program=insert_commission_program)
        print("The response of AffiliateApi->add_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->add_commission_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insert_commission_program** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

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

# **assign_product_commission_program_using_post**
> ProductCommissionProgram assign_product_commission_program_using_post(commission_program_id, product_commission_program=product_commission_program)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_product_commission_program_request import CreateProductCommissionProgramRequest
from keap_sdk_core_client.models.product_commission_program import ProductCommissionProgram
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    product_commission_program = keap_sdk_core_client.CreateProductCommissionProgramRequest() # CreateProductCommissionProgramRequest | Product Commission Program (optional)

    try:
        # Assign a Product Commission Program
        api_response = api_instance.assign_product_commission_program_using_post(commission_program_id, product_commission_program=product_commission_program)
        print("The response of AffiliateApi->assign_product_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_product_commission_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **product_commission_program** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

# **assign_subscription_commission_program_using_post**
> SubscriptionCommissionProgram assign_subscription_commission_program_using_post(commission_program_id, subscription_commission_program=subscription_commission_program)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_subscription_commission_program_request import CreateSubscriptionCommissionProgramRequest
from keap_sdk_core_client.models.subscription_commission_program import SubscriptionCommissionProgram
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    subscription_commission_program = keap_sdk_core_client.CreateSubscriptionCommissionProgramRequest() # CreateSubscriptionCommissionProgramRequest | Subscription Commission Program (optional)

    try:
        # Assign a Subscription Commission Program
        api_response = api_instance.assign_subscription_commission_program_using_post(commission_program_id, subscription_commission_program=subscription_commission_program)
        print("The response of AffiliateApi->assign_subscription_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->assign_subscription_commission_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **subscription_commission_program** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

# **create_affiliate_custom_field_using_post**
> CustomFieldMetaData create_affiliate_custom_field_using_post(custom_field)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Affiliate Custom Field
        api_response = api_instance.create_affiliate_custom_field_using_post(custom_field)
        print("The response of AffiliateApi->create_affiliate_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_affiliate_custom_field_using_post: %s\n" % e)
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

# **create_default_commission_program_using_post**
> SetDefaultCommissionProgramResponse create_default_commission_program_using_post(commission_program_id, create_default_commission_program_request=create_default_commission_program_request)

Create a Default Commission Program

Creates a Default Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest
from keap_sdk_core_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    create_default_commission_program_request = keap_sdk_core_client.CreateDefaultCommissionProgramRequest() # CreateDefaultCommissionProgramRequest | Values of the Default Commission Program (optional)

    try:
        # Create a Default Commission Program
        api_response = api_instance.create_default_commission_program_using_post(commission_program_id, create_default_commission_program_request=create_default_commission_program_request)
        print("The response of AffiliateApi->create_default_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_default_commission_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **create_default_commission_program_request** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

# **create_redirect_link_using_post**
> AffiliateLink create_redirect_link_using_post(request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_link import AffiliateLink
from keap_sdk_core_client.models.create_or_patch_affiliate_link_request import CreateOrPatchAffiliateLinkRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    request = keap_sdk_core_client.CreateOrPatchAffiliateLinkRequest() # CreateOrPatchAffiliateLinkRequest | request

    try:
        # Create an Affiliate Link
        api_response = api_instance.create_redirect_link_using_post(request)
        print("The response of AffiliateApi->create_redirect_link_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->create_redirect_link_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

# **delete_affiliate_commission_program_using_delete**
> delete_affiliate_commission_program_using_delete(commission_program_id)

Delete a Commission Program

Deletes a Commission Program

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

    try:
        # Delete a Commission Program
        api_instance.delete_affiliate_commission_program_using_delete(commission_program_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate_commission_program_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 

### Return type

void (empty response body)

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

# **delete_affiliate_using_delete**
> delete_affiliate_using_delete(id)

Delete Affiliate

Deletes the specified Affiliate

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    id = 'id_example' # str | id

    try:
        # Delete Affiliate
        api_instance.delete_affiliate_using_delete(id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_affiliate_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_redirect_link_using_delete**
> delete_redirect_link_using_delete(redirect_id)

Delete an Affiliate Link

Deletes an Affiliate Link

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

    try:
        # Delete an Affiliate Link
        api_instance.delete_redirect_link_using_delete(redirect_id)
    except Exception as e:
        print("Exception when calling AffiliateApi->delete_redirect_link_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**| redirect_id | 

### Return type

void (empty response body)

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

# **get_affiliate_commission_total_using_get**
> AffiliateCommissionEarned get_affiliate_commission_total_using_get(affiliate_id)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_commission_earned import AffiliateCommissionEarned
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id

    try:
        # Retrieve Affiliate Commission Earned and View LedgerURl for portal
        api_response = api_instance.get_affiliate_commission_total_using_get(affiliate_id)
        print("The response of AffiliateApi->get_affiliate_commission_total_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_commission_total_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**| affiliate_id | 

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)

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

# **get_affiliate_commissions_using_get**
> ListAffiliateCommissionResponse get_affiliate_commissions_using_get(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_affiliate_commission_response import ListAffiliateCommissionResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Affiliate Commission and Clawbacks
        api_response = api_instance.get_affiliate_commissions_using_get(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->get_affiliate_commissions_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_commissions_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_id** | **str**| affiliate_id | 
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)

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

# **get_affiliate_custom_fields_using_get**
> ObjectModel get_affiliate_custom_fields_using_get()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)

    try:
        # Retrieve Affiliate Model
        api_response = api_instance.get_affiliate_custom_fields_using_get()
        print("The response of AffiliateApi->get_affiliate_custom_fields_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_custom_fields_using_get: %s\n" % e)
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

# **get_affiliate_using_get1**
> RestAffiliate get_affiliate_using_get1(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_affiliate import RestAffiliate
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    id = 'id_example' # str | id

    try:
        # Retrieve an Affiliate
        api_response = api_instance.get_affiliate_using_get1(id)
        print("The response of AffiliateApi->get_affiliate_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_affiliate_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

# **get_commission_program_using_get**
> AffiliateProgramV2 get_commission_program_using_get(commission_program_id)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_program_v2 import AffiliateProgramV2
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

    try:
        # Retrieve a Commission Program
        api_response = api_instance.get_commission_program_using_get(commission_program_id)
        print("The response of AffiliateApi->get_commission_program_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_commission_program_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)

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

# **get_redirect_link_using_get**
> AffiliateLink get_redirect_link_using_get(redirect_id)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_link import AffiliateLink
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

    try:
        # Retrieve an Affiliate Link
        api_response = api_instance.get_redirect_link_using_get(redirect_id)
        print("The response of AffiliateApi->get_redirect_link_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->get_redirect_link_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**| redirect_id | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

# **list_affiliate_commission_programs_using_get**
> ListAffiliateCommissionProgramsResponse list_affiliate_commission_programs_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_affiliate_commission_programs_response import ListAffiliateCommissionProgramsResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Commission Programs
        api_response = api_instance.list_affiliate_commission_programs_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate_commission_programs_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate_commission_programs_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)

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

# **list_affiliate_links_using_get**
> ListAffiliateLinksResponse list_affiliate_links_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_affiliate_links_response import ListAffiliateLinksResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Links
        api_response = api_instance.list_affiliate_links_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_affiliate_links_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_affiliate_links_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)

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

# **list_summaries_using_get1**
> ListAffiliateSummariesResponse list_summaries_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_affiliate_summaries_response import ListAffiliateSummariesResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Summaries
        api_response = api_instance.list_summaries_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of AffiliateApi->list_summaries_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->list_summaries_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)

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

# **patch_commission_program_using_patch**
> AffiliateCommissionProgramResponse patch_commission_program_using_patch(commission_program_id, patch_commission_program_request, update_mask=update_mask)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_commission_program_response import AffiliateCommissionProgramResponse
from keap_sdk_core_client.models.patch_commission_program_request import PatchCommissionProgramRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    patch_commission_program_request = keap_sdk_core_client.PatchCommissionProgramRequest() # PatchCommissionProgramRequest | patchCommissionProgramRequest
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Affiliate Commission Program
        api_response = api_instance.patch_commission_program_using_patch(commission_program_id, patch_commission_program_request, update_mask=update_mask)
        print("The response of AffiliateApi->patch_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->patch_commission_program_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **patch_commission_program_request** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)

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

# **patch_default_commission_program_using_patch**
> SetDefaultCommissionProgramResponse patch_default_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_default_commission_program_request=patch_default_commission_program_request)

Update a Default Commission Program

Updates a Default Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_default_commission_program_request import PatchDefaultCommissionProgramRequest
from keap_sdk_core_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_default_commission_program_request = keap_sdk_core_client.PatchDefaultCommissionProgramRequest() # PatchDefaultCommissionProgramRequest | Values of the default Commission Program (optional)

    try:
        # Update a Default Commission Program
        api_response = api_instance.patch_default_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_default_commission_program_request=patch_default_commission_program_request)
        print("The response of AffiliateApi->patch_default_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->patch_default_commission_program_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **patch_default_commission_program_request** | [**PatchDefaultCommissionProgramRequest**](PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] 

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)

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

# **patch_product_commission_program_using_patch**
> ProductCommissionProgram patch_product_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_product_commission_program_request=patch_product_commission_program_request)

Update a Product Commission Program

Updates a Product Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_product_commission_program_request import PatchProductCommissionProgramRequest
from keap_sdk_core_client.models.product_commission_program import ProductCommissionProgram
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_product_commission_program_request = keap_sdk_core_client.PatchProductCommissionProgramRequest() # PatchProductCommissionProgramRequest | Values of the product Commission Program (optional)

    try:
        # Update a Product Commission Program
        api_response = api_instance.patch_product_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_product_commission_program_request=patch_product_commission_program_request)
        print("The response of AffiliateApi->patch_product_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->patch_product_commission_program_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **patch_product_commission_program_request** | [**PatchProductCommissionProgramRequest**](PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] 

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)

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

# **patch_subscription_commission_program_using_patch**
> SubscriptionCommissionProgram patch_subscription_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_subscription_commission_program_request=patch_subscription_commission_program_request)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_subscription_commission_program_request import PatchSubscriptionCommissionProgramRequest
from keap_sdk_core_client.models.subscription_commission_program import SubscriptionCommissionProgram
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_subscription_commission_program_request = keap_sdk_core_client.PatchSubscriptionCommissionProgramRequest() # PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program (optional)

    try:
        # Update a Subscription Commission Program
        api_response = api_instance.patch_subscription_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_subscription_commission_program_request=patch_subscription_commission_program_request)
        print("The response of AffiliateApi->patch_subscription_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->patch_subscription_commission_program_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_program_id** | **str**| commission_program_id | 
 **update_mask** | [**List[str]**](str.md)| update_mask | [optional] 
 **patch_subscription_commission_program_request** | [**PatchSubscriptionCommissionProgramRequest**](PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] 

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)

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

# **remove_affiliate_from_program_using_post**
> remove_affiliate_from_program_using_post(id, remove_from_program_request)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_remove_from_program_request import AffiliateRemoveFromProgramRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    remove_from_program_request = keap_sdk_core_client.AffiliateRemoveFromProgramRequest() # AffiliateRemoveFromProgramRequest | removeFromProgramRequest

    try:
        # Remove an Affiliate from a Commission Program
        api_instance.remove_affiliate_from_program_using_post(id, remove_from_program_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_affiliate_from_program_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **remove_from_program_request** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | 

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

# **remove_subscription_plan_commission_from_commissions_using_post**
> remove_subscription_plan_commission_from_commissions_using_post(commission_id, delete_subscription_plan_commission_request)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.delete_subscription_plan_commission_request import DeleteSubscriptionPlanCommissionRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    commission_id = 'commission_id_example' # str | commission_id
    delete_subscription_plan_commission_request = keap_sdk_core_client.DeleteSubscriptionPlanCommissionRequest() # DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

    try:
        # Remove a Subscription from a Commission Program
        api_instance.remove_subscription_plan_commission_from_commissions_using_post(commission_id, delete_subscription_plan_commission_request)
    except Exception as e:
        print("Exception when calling AffiliateApi->remove_subscription_plan_commission_from_commissions_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commission_id** | **str**| commission_id | 
 **delete_subscription_plan_commission_request** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | 

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

# **update_affiliate_custom_field_using_patch**
> CustomFieldMetaData update_affiliate_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_affiliate_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of AffiliateApi->update_affiliate_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate_custom_field_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 
 **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

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

# **update_affiliate_using_patch**
> RestAffiliate update_affiliate_using_patch(id, patch_affiliate=patch_affiliate)

Update an Affiliate

Updates a single Affiliate

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_affiliate_request import PatchAffiliateRequest
from keap_sdk_core_client.models.rest_affiliate import RestAffiliate
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    id = 'id_example' # str | id
    patch_affiliate = keap_sdk_core_client.PatchAffiliateRequest() # PatchAffiliateRequest | Affiliate request to patch (optional)

    try:
        # Update an Affiliate
        api_response = api_instance.update_affiliate_using_patch(id, patch_affiliate=patch_affiliate)
        print("The response of AffiliateApi->update_affiliate_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_affiliate_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| id | 
 **patch_affiliate** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] 

### Return type

[**RestAffiliate**](RestAffiliate.md)

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

# **update_redirect_link_using_patch**
> AffiliateLink update_redirect_link_using_patch(redirect_id, request)

Update an Affiliate Link

Updates an Affiliate Link

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.affiliate_link import AffiliateLink
from keap_sdk_core_client.models.create_or_patch_affiliate_link_request import CreateOrPatchAffiliateLinkRequest
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
    api_instance = keap_sdk_core_client.AffiliateApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id
    request = keap_sdk_core_client.CreateOrPatchAffiliateLinkRequest() # CreateOrPatchAffiliateLinkRequest | request

    try:
        # Update an Affiliate Link
        api_response = api_instance.update_redirect_link_using_patch(redirect_id, request)
        print("The response of AffiliateApi->update_redirect_link_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AffiliateApi->update_redirect_link_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_id** | **str**| redirect_id | 
 **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | 

### Return type

[**AffiliateLink**](AffiliateLink.md)

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

