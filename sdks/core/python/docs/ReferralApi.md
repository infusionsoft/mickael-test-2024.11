# keap_sdk_core_client.ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_referral_using_post**](ReferralApi.md#create_referral_using_post) | **POST** /v2/referrals | Create a Referral


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
    api_instance = keap_sdk_core_client.ReferralApi(api_client)
    request = keap_sdk_core_client.CreateReferralRequest() # CreateReferralRequest | request

    try:
        # Create a Referral
        api_response = api_instance.create_referral_using_post(request)
        print("The response of ReferralApi->create_referral_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferralApi->create_referral_using_post: %s\n" % e)
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

