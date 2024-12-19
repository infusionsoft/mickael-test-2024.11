# keap_sdk_core_client.OrdersApi

All URIs are relative to *https://api.keap.com/crm/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_on_order_using_post1**](OrdersApi.md#create_payment_on_order_using_post1) | **POST** /v2/orders/{order_id}/payments | Create a Payment


# **create_payment_on_order_using_post1**
> PaymentResult create_payment_on_order_using_post1(order_id, create_payment_request)

Create a Payment

Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.

### Example


```python
import keap_sdk_core_client
from keap_sdk_core_client.models.create_payment_request import CreatePaymentRequest
from keap_sdk_core_client.models.payment_result import PaymentResult
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
    api_instance = keap_sdk_core_client.OrdersApi(api_client)
    order_id = 'order_id_example' # str | order_id
    create_payment_request = keap_sdk_core_client.CreatePaymentRequest() # CreatePaymentRequest | createPaymentRequest

    try:
        # Create a Payment
        api_response = api_instance.create_payment_on_order_using_post1(order_id, create_payment_request)
        print("The response of OrdersApi->create_payment_on_order_using_post1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->create_payment_on_order_using_post1: %s\n" % e)
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| order_id | 
 **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| createPaymentRequest | 

### Return type

[**PaymentResult**](PaymentResult.md)

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

