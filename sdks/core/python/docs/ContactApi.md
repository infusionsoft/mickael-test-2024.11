# keap_sdk_core_client.ContactApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_contact_link_type_using_post**](ContactApi.md#create_contact_link_type_using_post) | **POST** /v2/contacts/links/types | Create a Contact Link type
[**create_contact_using_post1**](ContactApi.md#create_contact_using_post1) | **POST** /v2/contacts | Create a Contact
[**delete_contact_using_delete1**](ContactApi.md#delete_contact_using_delete1) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact
[**get_contact_using_get1**](ContactApi.md#get_contact_using_get1) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact
[**get_contacts_by_search_term_using_get**](ContactApi.md#get_contacts_by_search_term_using_get) | **GET** /v2/contacts:search | Search for Contacts
[**link_contacts_using_post**](ContactApi.md#link_contacts_using_post) | **POST** /v2/contacts:link | Link Contacts
[**list_contact_link_types_using_get**](ContactApi.md#list_contact_link_types_using_get) | **GET** /v2/contacts/links/types | List Contact Link types
[**list_contact_links_using_get**](ContactApi.md#list_contact_links_using_get) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts
[**list_contacts_using_get1**](ContactApi.md#list_contacts_using_get1) | **GET** /v2/contacts | List Contacts
[**list_payment_methods_using_get**](ContactApi.md#list_payment_methods_using_get) | **GET** /v2/contacts/{contact_id}/paymentMethods | Retrieve Payment Methods
[**patch_contact_using_patch**](ContactApi.md#patch_contact_using_patch) | **PATCH** /v2/contacts/{contact_id} | Update a Contact
[**retrieve_contact_model_using_get1**](ContactApi.md#retrieve_contact_model_using_get1) | **GET** /v2/contacts/model | Retrieve Contact Model
[**unlink_contacts_using_post**](ContactApi.md#unlink_contacts_using_post) | **POST** /v2/contacts:unlink | Delete Link between two Contacts


# **create_contact_link_type_using_post**
> ContactLinkType create_contact_link_type_using_post(request)

Create a Contact Link type

Creates a new type of Contact Link.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.contact_link_type import ContactLinkType
from keap_sdk_core_client.models.create_contact_link_type_request import CreateContactLinkTypeRequest
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    request = keap_sdk_core_client.CreateContactLinkTypeRequest() # CreateContactLinkTypeRequest | request

    try:
        # Create a Contact Link type
        api_response = api_instance.create_contact_link_type_using_post(request)
        print("The response of ContactApi->create_contact_link_type_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->create_contact_link_type_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md)| request | 

### Return type

[**ContactLinkType**](ContactLinkType.md)

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

# **create_contact_using_post1**
> Contact create_contact_using_post1(contact=contact)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.contact import Contact
from keap_sdk_core_client.models.create_patch_contact_request import CreatePatchContactRequest
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact = keap_sdk_core_client.CreatePatchContactRequest() # CreatePatchContactRequest | contact (optional)

    try:
        # Create a Contact
        api_response = api_instance.create_contact_using_post1(contact=contact)
        print("The response of ContactApi->create_contact_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->create_contact_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] 

### Return type

[**Contact**](Contact.md)

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

# **delete_contact_using_delete1**
> delete_contact_using_delete1(contact_id)

Delete a Contact

Deletes the specified Contact.

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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id

    try:
        # Delete a Contact
        api_instance.delete_contact_using_delete1(contact_id)
    except Exception as e:
        print("Exception when calling ContactApi->delete_contact_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 

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
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_contact_using_get1**
> Contact get_contact_using_get1(contact_id, fields=fields)

Retrieve a Contact

Retrieves a single Contact

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.contact import Contact
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    fields = ['fields_example'] # List[str] | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`) (optional)

    try:
        # Retrieve a Contact
        api_response = api_instance.get_contact_using_get1(contact_id, fields=fields)
        print("The response of ContactApi->get_contact_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contact_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **fields** | [**List[str]**](str.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] 

### Return type

[**Contact**](Contact.md)

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

# **get_contacts_by_search_term_using_get**
> ListBasicContactResponse get_contacts_by_search_term_using_get(search_param)

Search for Contacts

Get a list of Contacts based search parameters.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_basic_contact_response import ListBasicContactResponse
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    search_param = 'search_param_example' # str | searchParam

    try:
        # Search for Contacts
        api_response = api_instance.get_contacts_by_search_term_using_get(search_param)
        print("The response of ContactApi->get_contacts_by_search_term_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->get_contacts_by_search_term_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_param** | **str**| searchParam | 

### Return type

[**ListBasicContactResponse**](ListBasicContactResponse.md)

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

# **link_contacts_using_post**
> ContactLink link_contacts_using_post(link_contacts_request)

Link Contacts

Links two Contacts together using the provided Link type

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.contact_link import ContactLink
from keap_sdk_core_client.models.link_contacts_request import LinkContactsRequest
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    link_contacts_request = keap_sdk_core_client.LinkContactsRequest() # LinkContactsRequest | linkContactsRequest

    try:
        # Link Contacts
        api_response = api_instance.link_contacts_using_post(link_contacts_request)
        print("The response of ContactApi->link_contacts_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->link_contacts_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_contacts_request** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | 

### Return type

[**ContactLink**](ContactLink.md)

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

# **list_contact_link_types_using_get**
> ListContactLinkTypesResponse list_contact_link_types_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Contact Link types

Retrieves a list of Contact Link types.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_contact_link_types_response import ListContactLinkTypesResponse
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue (optional)
    order_by = 'order_by_example' # str |  (optional)
    page_size = 56 # int |  (optional)
    page_token = 'page_token_example' # str |  (optional)

    try:
        # List Contact Link types
        api_response = api_instance.list_contact_link_types_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ContactApi->list_contact_link_types_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->list_contact_link_types_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue | [optional] 
 **order_by** | **str**|  | [optional] 
 **page_size** | **int**|  | [optional] 
 **page_token** | **str**|  | [optional] 

### Return type

[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)

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

# **list_contact_links_using_get**
> ListContactLinksResponse list_contact_links_using_get(contact_id)

List Linked Contacts

Retrieves a list of Linked Contacts for a given Contact

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_contact_links_response import ListContactLinksResponse
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id

    try:
        # List Linked Contacts
        api_response = api_instance.list_contact_links_using_get(contact_id)
        print("The response of ContactApi->list_contact_links_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->list_contact_links_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 

### Return type

[**ListContactLinksResponse**](ListContactLinksResponse.md)

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

# **list_contacts_using_get1**
> ListContactsResponse list_contacts_using_get1(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Contacts

Retrieves a list of Contacts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_contacts_response import ListContactsResponse
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    fields = ['fields_example'] # List[str] | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`) (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123;family_name=Smith`   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Contacts
        api_response = api_instance.list_contacts_using_get1(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of ContactApi->list_contacts_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->list_contacts_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123;family_name&#x3D;Smith&#x60;   | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListContactsResponse**](ListContactsResponse.md)

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

# **list_payment_methods_using_get**
> PaymentMethodList list_payment_methods_using_get(contact_id)

Retrieve Payment Methods

List all Payment Methods for a Contact.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.payment_method_list import PaymentMethodList
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact_id = 56 # int | contact_id

    try:
        # Retrieve Payment Methods
        api_response = api_instance.list_payment_methods_using_get(contact_id)
        print("The response of ContactApi->list_payment_methods_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->list_payment_methods_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **int**| contact_id | 

### Return type

[**PaymentMethodList**](PaymentMethodList.md)

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

# **patch_contact_using_patch**
> Contact patch_contact_using_patch(contact_id, update_mask=update_mask, contact=contact)

Update a Contact

Updates a Contact

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.contact import Contact
from keap_sdk_core_client.models.create_patch_contact_request import CreatePatchContactRequest
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    contact_id = 'contact_id_example' # str | contact_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    contact = keap_sdk_core_client.CreatePatchContactRequest() # CreatePatchContactRequest | contact (optional)

    try:
        # Update a Contact
        api_response = api_instance.patch_contact_using_patch(contact_id, update_mask=update_mask, contact=contact)
        print("The response of ContactApi->patch_contact_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->patch_contact_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_id** | **str**| contact_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **contact** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] 

### Return type

[**Contact**](Contact.md)

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

# **retrieve_contact_model_using_get1**
> ObjectModel retrieve_contact_model_using_get1()

Retrieve Contact Model

Get the custom fields and optional properties for the Contact object

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
    api_instance = keap_sdk_core_client.ContactApi(api_client)

    try:
        # Retrieve Contact Model
        api_response = api_instance.retrieve_contact_model_using_get1()
        print("The response of ContactApi->retrieve_contact_model_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactApi->retrieve_contact_model_using_get1: %s\n" % e)
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

# **unlink_contacts_using_post**
> unlink_contacts_using_post(link_contacts_request)

Delete Link between two Contacts

Deletes Link between two Contacts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.link_contacts_request import LinkContactsRequest
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
    api_instance = keap_sdk_core_client.ContactApi(api_client)
    link_contacts_request = keap_sdk_core_client.LinkContactsRequest() # LinkContactsRequest | linkContactsRequest

    try:
        # Delete Link between two Contacts
        api_instance.unlink_contacts_using_post(link_contacts_request)
    except Exception as e:
        print("Exception when calling ContactApi->unlink_contacts_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_contacts_request** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | 

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
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

