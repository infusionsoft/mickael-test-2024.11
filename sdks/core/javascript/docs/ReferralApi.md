# KeapCoreServiceCoreSdk.ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferralUsingPOST**](ReferralApi.md#createReferralUsingPOST) | **POST** /v2/referrals | Create a Referral



## createReferralUsingPOST

> Referral createReferralUsingPOST(createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.ReferralApi();
let createReferralRequest = new KeapCoreServiceCoreSdk.CreateReferralRequest(); // CreateReferralRequest | request
apiInstance.createReferralUsingPOST(createReferralRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md)| request | 

### Return type

[**Referral**](Referral.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

