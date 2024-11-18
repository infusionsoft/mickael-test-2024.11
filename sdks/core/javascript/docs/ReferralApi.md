# KeapRestApi.ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferralUsingPOST_0**](ReferralApi.md#createReferralUsingPOST_0) | **POST** /v2/referrals | Create a Referral



## createReferralUsingPOST_0

> Referral createReferralUsingPOST_0(request)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.ReferralApi();
let request = new KeapRestApi.CreateReferralRequest(); // CreateReferralRequest | request
apiInstance.createReferralUsingPOST_0(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

