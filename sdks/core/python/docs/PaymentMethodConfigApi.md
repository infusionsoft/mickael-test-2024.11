# keap_sdk_core_client.PaymentMethodConfigApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_method_config_using_post**](PaymentMethodConfigApi.md#create_payment_method_config_using_post) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration


# **create_payment_method_config_using_post**
> PaymentMethodConfig create_payment_method_config_using_post(request)

Create Payment Method Configuration

Creates configuration details for rendering payment method components

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_payment_method_config_request import CreatePaymentMethodConfigRequest
from keap_sdk_core_client.models.payment_method_config import PaymentMethodConfig
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
    api_instance = keap_sdk_core_client.PaymentMethodConfigApi(api_client)
    request = keap_sdk_core_client.CreatePaymentMethodConfigRequest() # CreatePaymentMethodConfigRequest | request

    try:
        # Create Payment Method Configuration
        api_response = api_instance.create_payment_method_config_using_post(request)
        print("The response of PaymentMethodConfigApi->create_payment_method_config_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentMethodConfigApi->create_payment_method_config_using_post: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreatePaymentMethodConfigRequest**](CreatePaymentMethodConfigRequest.md)| request | 

### Return type

[**PaymentMethodConfig**](PaymentMethodConfig.md)

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

