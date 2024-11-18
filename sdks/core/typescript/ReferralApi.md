# .ReferralApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReferralUsingPOST_0**](ReferralApi.md#createReferralUsingPOST_0) | **POST** /v2/referrals | Create a Referral


# **createReferralUsingPOST_0**
> Referral createReferralUsingPOST_0(request)

Creates a new referral partner referral on the provided contact

### Example


```typescript
import { createConfiguration, ReferralApi } from '';
import type { ReferralApiCreateReferralUsingPOST0Request } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralApi(configuration);

const request: ReferralApiCreateReferralUsingPOST0Request = {
    // request
  request: {
    contactId: "contactId_example",
    description: "description_example",
    expirationTime: "expirationTime_example",
    ipAddress: "ipAddress_example",
    referralPartnerId: "referralPartnerId_example",
    referralTime: "referralTime_example",
    referralType: "COOKIE",
    source: "source_example",
  },
};

const data = await apiInstance.createReferralUsingPOST_0(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **CreateReferralRequest**| request |


### Return type

**Referral**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


