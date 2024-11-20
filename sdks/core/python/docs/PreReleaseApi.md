# keap_sdk_core_client.PreReleaseApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_affiliate_to_program_using_post**](PreReleaseApi.md#add_affiliate_to_program_using_post) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program
[**add_commission_program_using_post**](PreReleaseApi.md#add_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program
[**assign_product_commission_program_using_post**](PreReleaseApi.md#assign_product_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program
[**assign_subscription_commission_program_using_post**](PreReleaseApi.md#assign_subscription_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program
[**cancel_subscription_using_post**](PreReleaseApi.md#cancel_subscription_using_post) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription
[**create_affiliate_custom_field_using_post**](PreReleaseApi.md#create_affiliate_custom_field_using_post) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field
[**create_default_commission_program_using_post**](PreReleaseApi.md#create_default_commission_program_using_post) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program
[**create_funnel_integration_using_post**](PreReleaseApi.md#create_funnel_integration_using_post) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app.
[**create_integration_trigger_event_using_post**](PreReleaseApi.md#create_integration_trigger_event_using_post) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal
[**create_lead_source_using_post**](PreReleaseApi.md#create_lead_source_using_post) | **POST** /v2/leadsources | Create a Lead Source
[**create_note_custom_field_using_post1**](PreReleaseApi.md#create_note_custom_field_using_post1) | **POST** /v2/notes/model/customFields | Create a Custom Field
[**create_opportunity_custom_fields_using_post**](PreReleaseApi.md#create_opportunity_custom_fields_using_post) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field
[**create_opportunity_stage_using_post**](PreReleaseApi.md#create_opportunity_stage_using_post) | **POST** /v2/opportunities/stages | Create an Opportunity Stage
[**create_opportunity_using_post1**](PreReleaseApi.md#create_opportunity_using_post1) | **POST** /v2/opportunities | Create an Opportunity
[**create_order_custom_field_using_post**](PreReleaseApi.md#create_order_custom_field_using_post) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field
[**create_order_items_on_order_using_post1**](PreReleaseApi.md#create_order_items_on_order_using_post1) | **POST** /v2/orders/{order_id}/items | Create an Order Item
[**create_order_using_post1**](PreReleaseApi.md#create_order_using_post1) | **POST** /v2/orders | Create an Order
[**create_redirect_link_using_post**](PreReleaseApi.md#create_redirect_link_using_post) | **POST** /v2/affiliates/redirects | Create an Affiliate Link
[**create_referral_using_post**](PreReleaseApi.md#create_referral_using_post) | **POST** /v2/referrals | Create a Referral
[**create_subscription_custom_field_using_post**](PreReleaseApi.md#create_subscription_custom_field_using_post) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field
[**create_task_custom_field_using_post1**](PreReleaseApi.md#create_task_custom_field_using_post1) | **POST** /v2/tasks/model/customFields | Create a Custom Field
[**create_task_using_post1**](PreReleaseApi.md#create_task_using_post1) | **POST** /v2/tasks | Create a Task
[**create_user_using_post1**](PreReleaseApi.md#create_user_using_post1) | **POST** /v2/users | Create a User
[**delete_affiliate_commission_program_using_delete**](PreReleaseApi.md#delete_affiliate_commission_program_using_delete) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program
[**delete_affiliate_using_delete**](PreReleaseApi.md#delete_affiliate_using_delete) | **DELETE** /v2/affiliates/{id} | Delete Affiliate
[**delete_discount_using_delete**](PreReleaseApi.md#delete_discount_using_delete) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount
[**delete_discount_using_delete1**](PreReleaseApi.md#delete_discount_using_delete1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount
[**delete_funnel_integration_using_post**](PreReleaseApi.md#delete_funnel_integration_using_post) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app.
[**delete_opportunity_stage_using_delete**](PreReleaseApi.md#delete_opportunity_stage_using_delete) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage
[**delete_opportunity_using_delete**](PreReleaseApi.md#delete_opportunity_using_delete) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity
[**delete_order_using_delete1**](PreReleaseApi.md#delete_order_using_delete1) | **DELETE** /v2/orders/{order_id} | Delete an Order
[**delete_redirect_link_using_delete**](PreReleaseApi.md#delete_redirect_link_using_delete) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link
[**delete_task_custom_field_using_delete**](PreReleaseApi.md#delete_task_custom_field_using_delete) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field
[**delete_task_using_delete1**](PreReleaseApi.md#delete_task_using_delete1) | **DELETE** /v2/tasks/{task_id} | Delete a Task
[**get_affiliate_commission_total_using_get**](PreReleaseApi.md#get_affiliate_commission_total_using_get) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal
[**get_affiliate_commissions_using_get**](PreReleaseApi.md#get_affiliate_commissions_using_get) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks
[**get_affiliate_custom_fields_using_get**](PreReleaseApi.md#get_affiliate_custom_fields_using_get) | **GET** /v2/affiliates/model | Retrieve Affiliate Model
[**get_commission_program_using_get**](PreReleaseApi.md#get_commission_program_using_get) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program
[**get_contacts_by_search_term_using_get**](PreReleaseApi.md#get_contacts_by_search_term_using_get) | **GET** /v2/contacts:search | Search for Contacts
[**get_discount_using_get**](PreReleaseApi.md#get_discount_using_get) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount
[**get_opportunity_stage_using_get**](PreReleaseApi.md#get_opportunity_stage_using_get) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage
[**get_opportunity_using_get1**](PreReleaseApi.md#get_opportunity_using_get1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity
[**get_order_using_get1**](PreReleaseApi.md#get_order_using_get1) | **GET** /v2/orders/{order_id} | Retrieve an Order
[**get_redirect_link_using_get**](PreReleaseApi.md#get_redirect_link_using_get) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link
[**get_task_using_get1**](PreReleaseApi.md#get_task_using_get1) | **GET** /v2/tasks/{task_id} | Retrieve a Task
[**get_user_by_id_using_get**](PreReleaseApi.md#get_user_by_id_using_get) | **GET** /v2/users/{user_id} | Get User
[**get_user_info_using_get1**](PreReleaseApi.md#get_user_info_using_get1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**get_user_signature_using_get1**](PreReleaseApi.md#get_user_signature_using_get1) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**list_affiliate_commission_programs_using_get**](PreReleaseApi.md#list_affiliate_commission_programs_using_get) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs
[**list_affiliate_links_using_get**](PreReleaseApi.md#list_affiliate_links_using_get) | **GET** /v2/affiliates/redirects | List Affiliate Links
[**list_countries_using_get2**](PreReleaseApi.md#list_countries_using_get2) | **GET** /v2/locales/countries | List Countries
[**list_landing_pages_using_get**](PreReleaseApi.md#list_landing_pages_using_get) | **GET** /v2/landingpages | List Landing Pages
[**list_lead_sources_using_get**](PreReleaseApi.md#list_lead_sources_using_get) | **GET** /v2/leadsources | List Lead Sources
[**list_merchants_using_get**](PreReleaseApi.md#list_merchants_using_get) | **GET** /v2/merchants | List Merchant accounts
[**list_opportunities_using_get1**](PreReleaseApi.md#list_opportunities_using_get1) | **GET** /v2/opportunities | List Opportunities
[**list_opportunity_stages_using_get**](PreReleaseApi.md#list_opportunity_stages_using_get) | **GET** /v2/opportunities/stages | List of Opportunity Stages
[**list_orders_using_get1**](PreReleaseApi.md#list_orders_using_get1) | **GET** /v2/orders | List orders
[**list_products_using_get1**](PreReleaseApi.md#list_products_using_get1) | **GET** /v2/products | List Products
[**list_provinces_for_country_using_get**](PreReleaseApi.md#list_provinces_for_country_using_get) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces
[**list_shipping_methods_using_get**](PreReleaseApi.md#list_shipping_methods_using_get) | **GET** /v2/shipping | List Shipping methods
[**list_subscription_plans_using_get**](PreReleaseApi.md#list_subscription_plans_using_get) | **GET** /v2/subscriptionPlans | List Subscription Plans
[**list_summaries_using_get1**](PreReleaseApi.md#list_summaries_using_get1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries
[**list_tasks_using_get1**](PreReleaseApi.md#list_tasks_using_get1) | **GET** /v2/tasks | List Tasks
[**list_users_using_get1**](PreReleaseApi.md#list_users_using_get1) | **GET** /v2/users | List Users
[**patch_default_commission_program_using_patch**](PreReleaseApi.md#patch_default_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program
[**patch_order_using_patch**](PreReleaseApi.md#patch_order_using_patch) | **PATCH** /v2/orders/{order_id} | Update an Order
[**patch_product_commission_program_using_patch**](PreReleaseApi.md#patch_product_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program
[**patch_subscription_commission_program_using_patch**](PreReleaseApi.md#patch_subscription_commission_program_using_patch) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program
[**patch_task_using_patch**](PreReleaseApi.md#patch_task_using_patch) | **PATCH** /v2/tasks/{task_id} | Update a Task
[**patch_user_using_patch**](PreReleaseApi.md#patch_user_using_patch) | **PATCH** /v2/users/{user_id} | Update User
[**remove_affiliate_from_program_using_post**](PreReleaseApi.md#remove_affiliate_from_program_using_post) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program
[**remove_subscription_plan_commission_from_commissions_using_post**](PreReleaseApi.md#remove_subscription_plan_commission_from_commissions_using_post) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program
[**retrieve_note_model_using_get1**](PreReleaseApi.md#retrieve_note_model_using_get1) | **GET** /v2/notes/model | Retrieve Note Model
[**retrieve_order_custom_field_model_using_get**](PreReleaseApi.md#retrieve_order_custom_field_model_using_get) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model
[**retrieve_subscription_custom_field_model_using_get**](PreReleaseApi.md#retrieve_subscription_custom_field_model_using_get) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model
[**retrieve_task_model_using_get1**](PreReleaseApi.md#retrieve_task_model_using_get1) | **GET** /v2/tasks/model | Retrieve Task Model
[**update_affiliate_custom_field_using_patch**](PreReleaseApi.md#update_affiliate_custom_field_using_patch) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field
[**update_notes_custom_field_using_patch**](PreReleaseApi.md#update_notes_custom_field_using_patch) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field
[**update_opportunity_custom_field_using_patch**](PreReleaseApi.md#update_opportunity_custom_field_using_patch) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field
[**update_opportunity_using_patch**](PreReleaseApi.md#update_opportunity_using_patch) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity
[**update_order_custom_field_using_patch**](PreReleaseApi.md#update_order_custom_field_using_patch) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field
[**update_redirect_link_using_patch**](PreReleaseApi.md#update_redirect_link_using_patch) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link
[**update_subscription_custom_field_using_patch**](PreReleaseApi.md#update_subscription_custom_field_using_patch) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field
[**update_task_custom_field_using_patch**](PreReleaseApi.md#update_task_custom_field_using_patch) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field


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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    id = 'id_example' # str | id
    affiliate_add_to_program_request = keap_sdk_core_client.AffiliateAddToProgramRequest() # AffiliateAddToProgramRequest | affiliateAddToProgramRequest

    try:
        # Assign Affiliate to Commission program
        api_instance.add_affiliate_to_program_using_post(id, affiliate_add_to_program_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->add_affiliate_to_program_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    insert_commission_program = keap_sdk_core_client.CreateCommissionProgramRequest() # CreateCommissionProgramRequest | Commission Program to insert (optional)

    try:
        # Create an Affiliate Commission Program
        api_response = api_instance.add_commission_program_using_post(insert_commission_program=insert_commission_program)
        print("The response of PreReleaseApi->add_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->add_commission_program_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    product_commission_program = keap_sdk_core_client.CreateProductCommissionProgramRequest() # CreateProductCommissionProgramRequest | Product Commission Program (optional)

    try:
        # Assign a Product Commission Program
        api_response = api_instance.assign_product_commission_program_using_post(commission_program_id, product_commission_program=product_commission_program)
        print("The response of PreReleaseApi->assign_product_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->assign_product_commission_program_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    subscription_commission_program = keap_sdk_core_client.CreateSubscriptionCommissionProgramRequest() # CreateSubscriptionCommissionProgramRequest | Subscription Commission Program (optional)

    try:
        # Assign a Subscription Commission Program
        api_response = api_instance.assign_subscription_commission_program_using_post(commission_program_id, subscription_commission_program=subscription_commission_program)
        print("The response of PreReleaseApi->assign_subscription_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->assign_subscription_commission_program_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    subscription_id = 'subscription_id_example' # str | subscription_id
    cancel_subscriptions_request = keap_sdk_core_client.CancelSubscriptionsRequest() # CancelSubscriptionsRequest | cancelSubscriptionsRequest

    try:
        # Cancel Subscription
        api_instance.cancel_subscription_using_post(subscription_id, cancel_subscriptions_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->cancel_subscription_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Affiliate Custom Field
        api_response = api_instance.create_affiliate_custom_field_using_post(custom_field)
        print("The response of PreReleaseApi->create_affiliate_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_affiliate_custom_field_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    create_default_commission_program_request = keap_sdk_core_client.CreateDefaultCommissionProgramRequest() # CreateDefaultCommissionProgramRequest | Values of the Default Commission Program (optional)

    try:
        # Create a Default Commission Program
        api_response = api_instance.create_default_commission_program_using_post(commission_program_id, create_default_commission_program_request=create_default_commission_program_request)
        print("The response of PreReleaseApi->create_default_commission_program_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_default_commission_program_using_post: %s\n" % e)
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

# **create_funnel_integration_using_post**
> create_funnel_integration_using_post(create_funnel_integration_request)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_funnel_integration_request import CreateFunnelIntegrationRequest
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    create_funnel_integration_request = keap_sdk_core_client.CreateFunnelIntegrationRequest() # CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

    try:
        # Create Funnel Integrations into the app.
        api_instance.create_funnel_integration_using_post(create_funnel_integration_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_funnel_integration_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_funnel_integration_request** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md)| createFunnelIntegrationRequest | 

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

# **create_integration_trigger_event_using_post**
> List[FunnelIntegrationTriggerResultDTO] create_integration_trigger_event_using_post(create_funnel_integration_trigger_events)

Achieve Funnel Integration Trigger Goal

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_funnel_integration_trigger_events import CreateFunnelIntegrationTriggerEvents
from keap_sdk_core_client.models.funnel_integration_trigger_result_dto import FunnelIntegrationTriggerResultDTO
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    create_funnel_integration_trigger_events = keap_sdk_core_client.CreateFunnelIntegrationTriggerEvents() # CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

    try:
        # Achieve Funnel Integration Trigger Goal
        api_response = api_instance.create_integration_trigger_event_using_post(create_funnel_integration_trigger_events)
        print("The response of PreReleaseApi->create_integration_trigger_event_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_integration_trigger_event_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_funnel_integration_trigger_events** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md)| createFunnelIntegrationTriggerEvents | 

### Return type

[**List[FunnelIntegrationTriggerResultDTO]**](FunnelIntegrationTriggerResultDTO.md)

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

# **create_lead_source_using_post**
> LeadSource create_lead_source_using_post(leadsource=leadsource)

Create a Lead Source

Creates a new Lead Source

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_lead_source_request import CreateLeadSourceRequest
from keap_sdk_core_client.models.lead_source import LeadSource
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    leadsource = keap_sdk_core_client.CreateLeadSourceRequest() # CreateLeadSourceRequest | leadsource (optional)

    try:
        # Create a Lead Source
        api_response = api_instance.create_lead_source_using_post(leadsource=leadsource)
        print("The response of PreReleaseApi->create_lead_source_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_lead_source_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadsource** | [**CreateLeadSourceRequest**](CreateLeadSourceRequest.md)| leadsource | [optional] 

### Return type

[**LeadSource**](LeadSource.md)

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

# **create_note_custom_field_using_post1**
> CustomFieldMetaData create_note_custom_field_using_post1(custom_field)

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Custom Field
        api_response = api_instance.create_note_custom_field_using_post1(custom_field)
        print("The response of PreReleaseApi->create_note_custom_field_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_note_custom_field_using_post1: %s\n" % e)
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

# **create_opportunity_custom_fields_using_post**
> CustomFieldMetaData create_opportunity_custom_fields_using_post(custom_field)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Opportunity Custom Field
        api_response = api_instance.create_opportunity_custom_fields_using_post(custom_field)
        print("The response of PreReleaseApi->create_opportunity_custom_fields_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_opportunity_custom_fields_using_post: %s\n" % e)
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

# **create_opportunity_stage_using_post**
> RestOpportunityStage create_opportunity_stage_using_post(opportunity_stage=opportunity_stage)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_opportunity_stage_request import CreateOpportunityStageRequest
from keap_sdk_core_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    opportunity_stage = keap_sdk_core_client.CreateOpportunityStageRequest() # CreateOpportunityStageRequest | opportunity (optional)

    try:
        # Create an Opportunity Stage
        api_response = api_instance.create_opportunity_stage_using_post(opportunity_stage=opportunity_stage)
        print("The response of PreReleaseApi->create_opportunity_stage_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_opportunity_stage_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_stage** | [**CreateOpportunityStageRequest**](CreateOpportunityStageRequest.md)| opportunity | [optional] 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **create_opportunity_using_post1**
> RestV2Opportunity create_opportunity_using_post1(opportunity=opportunity)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_opportunity_request import CreateOpportunityRequest
from keap_sdk_core_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    opportunity = keap_sdk_core_client.CreateOpportunityRequest() # CreateOpportunityRequest | opportunity (optional)

    try:
        # Create an Opportunity
        api_response = api_instance.create_opportunity_using_post1(opportunity=opportunity)
        print("The response of PreReleaseApi->create_opportunity_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_opportunity_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| opportunity | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **create_order_custom_field_using_post**
> CustomFieldMetaData create_order_custom_field_using_post(custom_field)

Create an Order's Custom Field

Adds a custom field of the specified type and options to the Order object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create an Order's Custom Field
        api_response = api_instance.create_order_custom_field_using_post(custom_field)
        print("The response of PreReleaseApi->create_order_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_order_custom_field_using_post: %s\n" % e)
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

# **create_order_items_on_order_using_post1**
> RestV2OrderItem create_order_items_on_order_using_post1(order_id, create_rest_order_item_request)

Create an Order Item

Creates an order item on an existing order.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_rest_order_item_request import CreateRestOrderItemRequest
from keap_sdk_core_client.models.rest_v2_order_item import RestV2OrderItem
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_rest_order_item_request = keap_sdk_core_client.CreateRestOrderItemRequest() # CreateRestOrderItemRequest | createRestOrderItemRequest

    try:
        # Create an Order Item
        api_response = api_instance.create_order_items_on_order_using_post1(order_id, create_rest_order_item_request)
        print("The response of PreReleaseApi->create_order_items_on_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_order_items_on_order_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **create_rest_order_item_request** | [**CreateRestOrderItemRequest**](CreateRestOrderItemRequest.md)| createRestOrderItemRequest | 

### Return type

[**RestV2OrderItem**](RestV2OrderItem.md)

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

# **create_order_using_post1**
> RestV2Order create_order_using_post1(create_order_request)

Create an Order

Create a one time Order with Order items.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_create_order_request import RestCreateOrderRequest
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    create_order_request = keap_sdk_core_client.RestCreateOrderRequest() # RestCreateOrderRequest | createOrderRequest

    try:
        # Create an Order
        api_response = api_instance.create_order_using_post1(create_order_request)
        print("The response of PreReleaseApi->create_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_order_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_request** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md)| createOrderRequest | 

### Return type

[**RestV2Order**](RestV2Order.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    request = keap_sdk_core_client.CreateOrPatchAffiliateLinkRequest() # CreateOrPatchAffiliateLinkRequest | request

    try:
        # Create an Affiliate Link
        api_response = api_instance.create_redirect_link_using_post(request)
        print("The response of PreReleaseApi->create_redirect_link_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_redirect_link_using_post: %s\n" % e)
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

# **create_referral_using_post**
> Referral create_referral_using_post(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_referral_request import CreateReferralRequest
from keap_sdk_core_client.models.referral import Referral
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    request = keap_sdk_core_client.CreateReferralRequest() # CreateReferralRequest | request

    try:
        # Create a Referral
        api_response = api_instance.create_referral_using_post(request)
        print("The response of PreReleaseApi->create_referral_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_referral_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | 

### Return type

[**Referral**](Referral.md)

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

# **create_subscription_custom_field_using_post**
> CustomFieldMetaData create_subscription_custom_field_using_post(custom_field)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Subscription's Custom Field
        api_response = api_instance.create_subscription_custom_field_using_post(custom_field)
        print("The response of PreReleaseApi->create_subscription_custom_field_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_subscription_custom_field_using_post: %s\n" % e)
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

# **create_task_custom_field_using_post1**
> CreateCustomFieldResponse create_task_custom_field_using_post1(custom_field)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_custom_field_request import CreateCustomFieldRequest
from keap_sdk_core_client.models.create_custom_field_response import CreateCustomFieldResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field = keap_sdk_core_client.CreateCustomFieldRequest() # CreateCustomFieldRequest | customField

    try:
        # Create a Custom Field
        api_response = api_instance.create_task_custom_field_using_post1(custom_field)
        print("The response of PreReleaseApi->create_task_custom_field_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_task_custom_field_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | 

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

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

# **create_task_using_post1**
> Task create_task_using_post1(task=task)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_task_request import CreateTaskRequest
from keap_sdk_core_client.models.task import Task
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    task = keap_sdk_core_client.CreateTaskRequest() # CreateTaskRequest | task (optional)

    try:
        # Create a Task
        api_response = api_instance.create_task_using_post1(task=task)
        print("The response of PreReleaseApi->create_task_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_task_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**CreateTaskRequest**](CreateTaskRequest.md)| task | [optional] 

### Return type

[**Task**](Task.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    user = keap_sdk_core_client.CreateUserRequestV2() # CreateUserRequestV2 | user (optional)

    try:
        # Create a User
        api_response = api_instance.create_user_using_post1(user=user)
        print("The response of PreReleaseApi->create_user_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->create_user_using_post1: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

    try:
        # Delete a Commission Program
        api_instance.delete_affiliate_commission_program_using_delete(commission_program_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_affiliate_commission_program_using_delete: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    id = 'id_example' # str | id

    try:
        # Delete Affiliate
        api_instance.delete_affiliate_using_delete(id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_affiliate_using_delete: %s\n" % e)
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

# **delete_discount_using_delete**
> delete_discount_using_delete(discount_id)

Delete a Category Discount

Deletes a specified Category Discount

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Category Discount
        api_instance.delete_discount_using_delete(discount_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_discount_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

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

# **delete_discount_using_delete1**
> delete_discount_using_delete1(discount_id)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Delete a Free Trial Discount
        api_instance.delete_discount_using_delete1(discount_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_discount_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

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

# **delete_funnel_integration_using_post**
> delete_funnel_integration_using_post(delete_funnel_integration_request)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.delete_funnel_integration_request import DeleteFunnelIntegrationRequest
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    delete_funnel_integration_request = keap_sdk_core_client.DeleteFunnelIntegrationRequest() # DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

    try:
        # Deletes Funnel Integrations from the app.
        api_instance.delete_funnel_integration_using_post(delete_funnel_integration_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_funnel_integration_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_funnel_integration_request** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md)| deleteFunnelIntegrationRequest | 

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

# **delete_opportunity_stage_using_delete**
> delete_opportunity_stage_using_delete(stage_id)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    stage_id = 'stage_id_example' # str | stage_id

    try:
        # Delete an Opportunity Stage
        api_instance.delete_opportunity_stage_using_delete(stage_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_opportunity_stage_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**| stage_id | 

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

# **delete_opportunity_using_delete**
> delete_opportunity_using_delete(opportunity_id)

Delete an Opportunity

Deletes the specified Opportunity

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id

    try:
        # Delete an Opportunity
        api_instance.delete_opportunity_using_delete(opportunity_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_opportunity_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 

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

# **delete_order_using_delete1**
> delete_order_using_delete1(order_id)

Delete an Order

  Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    order_id = 'order_id_example' # str | order_id

    try:
        # Delete an Order
        api_instance.delete_order_using_delete1(order_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_order_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

    try:
        # Delete an Affiliate Link
        api_instance.delete_redirect_link_using_delete(redirect_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_redirect_link_using_delete: %s\n" % e)
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

# **delete_task_custom_field_using_delete**
> delete_task_custom_field_using_delete(custom_field_id)

Delete a Custom Field

Deletes a Custom Field from Task.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id

    try:
        # Delete a Custom Field
        api_instance.delete_task_custom_field_using_delete(custom_field_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_task_custom_field_using_delete: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_id** | **str**| custom_field_id | 

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

# **delete_task_using_delete1**
> delete_task_using_delete1(task_id)

Delete a Task

Deletes a single task

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    task_id = 'task_id_example' # str | task_id

    try:
        # Delete a Task
        api_instance.delete_task_using_delete1(task_id)
    except Exception as e:
        print("Exception when calling PreReleaseApi->delete_task_using_delete1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id

    try:
        # Retrieve Affiliate Commission Earned and View LedgerURl for portal
        api_response = api_instance.get_affiliate_commission_total_using_get(affiliate_id)
        print("The response of PreReleaseApi->get_affiliate_commission_total_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_affiliate_commission_total_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    affiliate_id = 'affiliate_id_example' # str | affiliate_id
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # Retrieve Affiliate Commission and Clawbacks
        api_response = api_instance.get_affiliate_commissions_using_get(affiliate_id, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->get_affiliate_commissions_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_affiliate_commissions_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve Affiliate Model
        api_response = api_instance.get_affiliate_custom_fields_using_get()
        print("The response of PreReleaseApi->get_affiliate_custom_fields_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_affiliate_custom_fields_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id

    try:
        # Retrieve a Commission Program
        api_response = api_instance.get_commission_program_using_get(commission_program_id)
        print("The response of PreReleaseApi->get_commission_program_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_commission_program_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    search_param = 'search_param_example' # str | searchParam

    try:
        # Search for Contacts
        api_response = api_instance.get_contacts_by_search_term_using_get(search_param)
        print("The response of PreReleaseApi->get_contacts_by_search_term_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_contacts_by_search_term_using_get: %s\n" % e)
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

# **get_discount_using_get**
> CategoryDiscount get_discount_using_get(discount_id)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.category_discount import CategoryDiscount
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    discount_id = 'discount_id_example' # str | discount_id

    try:
        # Retrieve a Category Discount
        api_response = api_instance.get_discount_using_get(discount_id)
        print("The response of PreReleaseApi->get_discount_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_discount_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_id** | **str**| discount_id | 

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

# **get_opportunity_stage_using_get**
> RestOpportunityStage get_opportunity_stage_using_get(stage_id)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_opportunity_stage import RestOpportunityStage
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    stage_id = 'stage_id_example' # str | stage_id

    try:
        # Retrieve an Opportunity Stage
        api_response = api_instance.get_opportunity_stage_using_get(stage_id)
        print("The response of PreReleaseApi->get_opportunity_stage_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_opportunity_stage_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage_id** | **str**| stage_id | 

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

# **get_opportunity_using_get1**
> RestV2Opportunity get_opportunity_using_get1(opportunity_id)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id

    try:
        # Retrieve a Opportunity
        api_response = api_instance.get_opportunity_using_get1(opportunity_id)
        print("The response of PreReleaseApi->get_opportunity_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_opportunity_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **get_order_using_get1**
> RestV2Order get_order_using_get1(order_id)

Retrieve an Order

Retrieves a single Order for a given order id

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    order_id = 'order_id_example' # str | order_id

    try:
        # Retrieve an Order
        api_response = api_instance.get_order_using_get1(order_id)
        print("The response of PreReleaseApi->get_order_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_order_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 

### Return type

[**RestV2Order**](RestV2Order.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id

    try:
        # Retrieve an Affiliate Link
        api_response = api_instance.get_redirect_link_using_get(redirect_id)
        print("The response of PreReleaseApi->get_redirect_link_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_redirect_link_using_get: %s\n" % e)
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

# **get_task_using_get1**
> Task get_task_using_get1(task_id)

Retrieve a Task

Retrieves a single task

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.task import Task
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    task_id = 'task_id_example' # str | task_id

    try:
        # Retrieve a Task
        api_response = api_instance.get_task_using_get1(task_id)
        print("The response of PreReleaseApi->get_task_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_task_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 

### Return type

[**Task**](Task.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    user_id = 'user_id_example' # str | user_id

    try:
        # Get User
        api_response = api_instance.get_user_by_id_using_get(user_id)
        print("The response of PreReleaseApi->get_user_by_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_user_by_id_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve User Info
        api_response = api_instance.get_user_info_using_get1()
        print("The response of PreReleaseApi->get_user_info_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_user_info_using_get1: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    user_id = 'user_id_example' # str | user_id

    try:
        # Get User email signature
        api_response = api_instance.get_user_signature_using_get1(user_id)
        print("The response of PreReleaseApi->get_user_signature_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->get_user_signature_using_get1: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Commission Programs
        api_response = api_instance.list_affiliate_commission_programs_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_affiliate_commission_programs_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_affiliate_commission_programs_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Links
        api_response = api_instance.list_affiliate_links_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_affiliate_links_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_affiliate_links_using_get: %s\n" % e)
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

# **list_countries_using_get2**
> ListCountriesResponse list_countries_using_get2()

List Countries

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_countries_response import ListCountriesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # List Countries
        api_response = api_instance.list_countries_using_get2()
        print("The response of PreReleaseApi->list_countries_using_get2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_countries_using_get2: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListCountriesResponse**](ListCountriesResponse.md)

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

# **list_landing_pages_using_get**
> ListLandingPagesResponse list_landing_pages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Landing Pages

Retrieves a list of all landing pages

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_landing_pages_response import ListLandingPagesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Landing Pages
        api_response = api_instance.list_landing_pages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_landing_pages_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_landing_pages_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLandingPagesResponse**](ListLandingPagesResponse.md)

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

# **list_lead_sources_using_get**
> ListLeadSourcesResponse list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Lead Sources

Retrieves a list of lead sources

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_lead_sources_response import ListLeadSourcesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Lead Sources
        api_response = api_instance.list_lead_sources_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_lead_sources_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_lead_sources_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

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

# **list_merchants_using_get**
> ListRestMerchantResponse list_merchants_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_rest_merchant_response import ListRestMerchantResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123;account_name=abc` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Merchant accounts
        api_response = api_instance.list_merchants_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_merchants_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_merchants_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)

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

# **list_opportunities_using_get1**
> ListOpportunitiesResponse list_opportunities_using_get1(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Opportunities

Retrieves a list of all Opportunities.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_opportunities_response import ListOpportunitiesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    fields = ['fields_example'] # List[str] | fields (optional)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Opportunities
        api_response = api_instance.list_opportunities_using_get1(fields=fields, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_opportunities_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_opportunities_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**List[str]**](str.md)| fields | [optional] 
 **filter** | **str**| Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional] 
 **order_by** | **str**| Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

# **list_opportunity_stages_using_get**
> ListOpportunityStagesResponse list_opportunity_stages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_opportunity_stages_response import ListOpportunityStagesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List of Opportunity Stages
        api_response = api_instance.list_opportunity_stages_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_opportunity_stages_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_opportunity_stages_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

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

# **list_orders_using_get1**
> ListOrders list_orders_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List orders

Retrieves a list of orders

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_orders import ListOrders
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567` (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List orders
        api_response = api_instance.list_orders_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_orders_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_orders_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60; | [optional] 
 **order_by** | **str**| Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListOrders**](ListOrders.md)

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

# **list_products_using_get1**
> ListProductsResponse list_products_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

List Products

Retrieves a list of Products

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_products_response import ListProductsResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name    (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Products
        api_response = api_instance.list_products_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_products_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_products_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Filter to apply, allowed fields are:   - (String) name    | [optional] 
 **order_by** | **str**| Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_provinces_for_country_using_get**
> ListProvincesResponse list_provinces_for_country_using_get(country_code)

List a Country's Provinces

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_provinces_response import ListProvincesResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    country_code = 'country_code_example' # str | country_code

    try:
        # List a Country's Provinces
        api_response = api_instance.list_provinces_for_country_using_get(country_code)
        print("The response of PreReleaseApi->list_provinces_for_country_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_provinces_for_country_using_get: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_code** | **str**| country_code | 

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)

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

# **list_shipping_methods_using_get**
> ListRestShippingMethodsResponse list_shipping_methods_using_get()

List Shipping methods

Retrieves a list of Shipping methods

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_rest_shipping_methods_response import ListRestShippingMethodsResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # List Shipping methods
        api_response = api_instance.list_shipping_methods_using_get()
        print("The response of PreReleaseApi->list_shipping_methods_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_shipping_methods_using_get: %s\n" % e)
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

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

# **list_subscription_plans_using_get**
> ListSubscriptionPlansResponse list_subscription_plans_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are:   - (String) name    (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Subscription Plans
        api_response = api_instance.list_subscription_plans_using_get(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_subscription_plans_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_subscription_plans_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)

    try:
        # List Affiliate Summaries
        api_response = api_instance.list_summaries_using_get1(filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of PreReleaseApi->list_summaries_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_summaries_using_get1: %s\n" % e)
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

# **list_tasks_using_get1**
> ListTasksResponse list_tasks_using_get1(end_due_time=end_due_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_due_time=start_due_time)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.list_tasks_response import ListTasksResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    end_due_time = 'end_due_time_example' # str |  (optional)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. `given_name desc` (optional)
    page_size = 0 # int | Total number of items to return per page (optional)
    page_token = 'page_token_example' # str | Page token (optional)
    start_due_time = 'start_due_time_example' # str |  (optional)

    try:
        # List Tasks
        api_response = api_instance.list_tasks_using_get1(end_due_time=end_due_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_due_time=start_due_time)
        print("The response of PreReleaseApi->list_tasks_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_tasks_using_get1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **end_due_time** | **str**|  | [optional] 
 **filter** | **str**| Search filter to apply to results | [optional] 
 **order_by** | **str**| Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional] 
 **page_size** | **int**| Total number of items to return per page | [optional] 
 **page_token** | **str**| Page token | [optional] 
 **start_due_time** | **str**|  | [optional] 

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    filter = 'filter_example' # str | Search filter to apply to results (optional)
    order_by = 'order_by_example' # str | Attribute and direction to order items by. E.g. 'given_name desc' (optional)

    try:
        # List Users
        api_response = api_instance.list_users_using_get1(filter=filter, order_by=order_by)
        print("The response of PreReleaseApi->list_users_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->list_users_using_get1: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_default_commission_program_request = keap_sdk_core_client.PatchDefaultCommissionProgramRequest() # PatchDefaultCommissionProgramRequest | Values of the default Commission Program (optional)

    try:
        # Update a Default Commission Program
        api_response = api_instance.patch_default_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_default_commission_program_request=patch_default_commission_program_request)
        print("The response of PreReleaseApi->patch_default_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_default_commission_program_using_patch: %s\n" % e)
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

# **patch_order_using_patch**
> RestV2Order patch_order_using_patch(order_id, update_mask=update_mask, order=order)

Update an Order

Updates an Order

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.rest_v2_order import RestV2Order
from keap_sdk_core_client.models.rest_v2_patch_order_request import RestV2PatchOrderRequest
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    order_id = 'order_id_example' # str | order_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    order = keap_sdk_core_client.RestV2PatchOrderRequest() # RestV2PatchOrderRequest | order (optional)

    try:
        # Update an Order
        api_response = api_instance.patch_order_using_patch(order_id, update_mask=update_mask, order=order)
        print("The response of PreReleaseApi->patch_order_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_order_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **order** | [**RestV2PatchOrderRequest**](RestV2PatchOrderRequest.md)| order | [optional] 

### Return type

[**RestV2Order**](RestV2Order.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_product_commission_program_request = keap_sdk_core_client.PatchProductCommissionProgramRequest() # PatchProductCommissionProgramRequest | Values of the product Commission Program (optional)

    try:
        # Update a Product Commission Program
        api_response = api_instance.patch_product_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_product_commission_program_request=patch_product_commission_program_request)
        print("The response of PreReleaseApi->patch_product_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_product_commission_program_using_patch: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_program_id = 'commission_program_id_example' # str | commission_program_id
    update_mask = ['update_mask_example'] # List[str] | update_mask (optional)
    patch_subscription_commission_program_request = keap_sdk_core_client.PatchSubscriptionCommissionProgramRequest() # PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program (optional)

    try:
        # Update a Subscription Commission Program
        api_response = api_instance.patch_subscription_commission_program_using_patch(commission_program_id, update_mask=update_mask, patch_subscription_commission_program_request=patch_subscription_commission_program_request)
        print("The response of PreReleaseApi->patch_subscription_commission_program_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_subscription_commission_program_using_patch: %s\n" % e)
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

# **patch_task_using_patch**
> UpdateTaskResponse patch_task_using_patch(task_id, update_mask=update_mask, task=task)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_patch_task_request import CreatePatchTaskRequest
from keap_sdk_core_client.models.update_task_response import UpdateTaskResponse
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    task_id = 'task_id_example' # str | task_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
    task = keap_sdk_core_client.CreatePatchTaskRequest() # CreatePatchTaskRequest | task (optional)

    try:
        # Update a Task
        api_response = api_instance.patch_task_using_patch(task_id, update_mask=update_mask, task=task)
        print("The response of PreReleaseApi->patch_task_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_task_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **str**| task_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **task** | [**CreatePatchTaskRequest**](CreatePatchTaskRequest.md)| task | [optional] 

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    user_id = 'user_id_example' # str | user_id
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. (optional)
    user = keap_sdk_core_client.PatchUserRequestV2() # PatchUserRequestV2 | user (optional)

    try:
        # Update User
        api_response = api_instance.patch_user_using_patch(user_id, update_mask=update_mask, user=user)
        print("The response of PreReleaseApi->patch_user_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->patch_user_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| user_id | 
 **update_mask** | [**List[str]**](str.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] 
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    id = 'id_example' # str | id
    remove_from_program_request = keap_sdk_core_client.AffiliateRemoveFromProgramRequest() # AffiliateRemoveFromProgramRequest | removeFromProgramRequest

    try:
        # Remove an Affiliate from a Commission Program
        api_instance.remove_affiliate_from_program_using_post(id, remove_from_program_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->remove_affiliate_from_program_using_post: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    commission_id = 'commission_id_example' # str | commission_id
    delete_subscription_plan_commission_request = keap_sdk_core_client.DeleteSubscriptionPlanCommissionRequest() # DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

    try:
        # Remove a Subscription from a Commission Program
        api_instance.remove_subscription_plan_commission_from_commissions_using_post(commission_id, delete_subscription_plan_commission_request)
    except Exception as e:
        print("Exception when calling PreReleaseApi->remove_subscription_plan_commission_from_commissions_using_post: %s\n" % e)
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

# **retrieve_note_model_using_get1**
> ObjectModel retrieve_note_model_using_get1()

Retrieve Note Model

Gets the custom fields for the Note object

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve Note Model
        api_response = api_instance.retrieve_note_model_using_get1()
        print("The response of PreReleaseApi->retrieve_note_model_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->retrieve_note_model_using_get1: %s\n" % e)
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

# **retrieve_order_custom_field_model_using_get**
> ObjectModel retrieve_order_custom_field_model_using_get()

Retrieve an Order's Custom Field Model

Gets the custom field's model for the Order object

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve an Order's Custom Field Model
        api_response = api_instance.retrieve_order_custom_field_model_using_get()
        print("The response of PreReleaseApi->retrieve_order_custom_field_model_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->retrieve_order_custom_field_model_using_get: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve Subscription's Custom Field Model
        api_response = api_instance.retrieve_subscription_custom_field_model_using_get()
        print("The response of PreReleaseApi->retrieve_subscription_custom_field_model_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->retrieve_subscription_custom_field_model_using_get: %s\n" % e)
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

# **retrieve_task_model_using_get1**
> ObjectModel retrieve_task_model_using_get1()

Retrieve Task Model

Get the custom fields for the Task object

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)

    try:
        # Retrieve Task Model
        api_response = api_instance.retrieve_task_model_using_get1()
        print("The response of PreReleaseApi->retrieve_task_model_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->retrieve_task_model_using_get1: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_affiliate_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_affiliate_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_affiliate_custom_field_using_patch: %s\n" % e)
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

# **update_notes_custom_field_using_patch**
> CustomFieldMetaData update_notes_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Custom Field
        api_response = api_instance.update_notes_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_notes_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_notes_custom_field_using_patch: %s\n" % e)
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

# **update_opportunity_custom_field_using_patch**
> CustomFieldMetaData update_opportunity_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Opportunity's Custom Field
        api_response = api_instance.update_opportunity_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_opportunity_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_opportunity_custom_field_using_patch: %s\n" % e)
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

# **update_opportunity_using_patch**
> RestV2Opportunity update_opportunity_using_patch(opportunity_id, request, update_mask=update_mask)

Update an opportunity

Updates specified values of a given opportunity

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.patch_opportunity_request import PatchOpportunityRequest
from keap_sdk_core_client.models.rest_v2_opportunity import RestV2Opportunity
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    opportunity_id = 'opportunity_id_example' # str | opportunity_id
    request = keap_sdk_core_client.PatchOpportunityRequest() # PatchOpportunityRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an opportunity
        api_response = api_instance.update_opportunity_using_patch(opportunity_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_opportunity_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_opportunity_using_patch: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **opportunity_id** | **str**| opportunity_id | 
 **request** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md)| request | 
 **update_mask** | [**List[str]**](str.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

# **update_order_custom_field_using_patch**
> CustomFieldMetaData update_order_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update an Order's Custom Field

Updates a custom field of the specified type and options to the Order object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update an Order's Custom Field
        api_response = api_instance.update_order_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_order_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_order_custom_field_using_patch: %s\n" % e)
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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    redirect_id = 'redirect_id_example' # str | redirect_id
    request = keap_sdk_core_client.CreateOrPatchAffiliateLinkRequest() # CreateOrPatchAffiliateLinkRequest | request

    try:
        # Update an Affiliate Link
        api_response = api_instance.update_redirect_link_using_patch(redirect_id, request)
        print("The response of PreReleaseApi->update_redirect_link_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_redirect_link_using_patch: %s\n" % e)
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

# **update_subscription_custom_field_using_patch**
> CustomFieldMetaData update_subscription_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Subscription's Custom Field
        api_response = api_instance.update_subscription_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_subscription_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_subscription_custom_field_using_patch: %s\n" % e)
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

# **update_task_custom_field_using_patch**
> CustomFieldMetaData update_task_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.

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
    api_instance = keap_sdk_core_client.PreReleaseApi(api_client)
    custom_field_id = 'custom_field_id_example' # str | custom_field_id
    request = keap_sdk_core_client.UpdateCustomFieldMetaDataRequest() # UpdateCustomFieldMetaDataRequest | request
    update_mask = ['update_mask_example'] # List[str] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)

    try:
        # Update a Task's Custom Field
        api_response = api_instance.update_task_custom_field_using_patch(custom_field_id, request, update_mask=update_mask)
        print("The response of PreReleaseApi->update_task_custom_field_using_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreReleaseApi->update_task_custom_field_using_patch: %s\n" % e)
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

