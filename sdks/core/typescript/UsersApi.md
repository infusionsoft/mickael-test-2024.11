# .UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsingPOST1**](UsersApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User
[**getUserByIdUsingGET**](UsersApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User
[**getUserInfoUsingGET1**](UsersApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**getUserSignatureUsingGET1**](UsersApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**listUsersUsingGET1**](UsersApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users
[**patchUserUsingPATCH**](UsersApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User


# **createUserUsingPOST1**
> User createUserUsingPOST1()

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiCreateUserUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiCreateUserUsingPOST1Request = {
    // user (optional)
  createUserRequestV2: {
    admin: true,
    emailAddress: {
      email: "email_example",
      field: "EMAIL_FIELD_UNSPECIFIED",
      optInReason: "optInReason_example",
    },
    givenName: "givenName_example",
    partner: true,
  },
};

const data = await apiInstance.createUserUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequestV2** | **CreateUserRequestV2**| user |


### Return type

**User**

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

# **getUserByIdUsingGET**
> User getUserByIdUsingGET()

Retrieves a specific User

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetUserByIdUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetUserByIdUsingGETRequest = {
    // user_id
  userId: "user_id_example",
};

const data = await apiInstance.getUserByIdUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | user_id | defaults to undefined


### Return type

**User**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserInfoUsingGET1**
> GetUserInfoResponse getUserInfoUsingGET1()

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getUserInfoUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetUserInfoResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserSignatureUsingGET1**
> string getUserSignatureUsingGET1()

Retrieves a HTML snippet that contains the user\'s email signature.

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetUserSignatureUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetUserSignatureUsingGET1Request = {
    // user_id
  userId: "user_id_example",
};

const data = await apiInstance.getUserSignatureUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | user_id | defaults to undefined


### Return type

**string**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUsersUsingGET1**
> ListUserResponse listUsersUsingGET1()

Retrieves a list of users

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiListUsersUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiListUsersUsingGET1Request = {
    // Search filter to apply to results (optional)
  filter: "filter_example",
    // Attribute and direction to order items by. E.g. \'given_name desc\' (optional)
  orderBy: "order_by_example",
};

const data = await apiInstance.listUsersUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Search filter to apply to results | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39; | (optional) defaults to undefined


### Return type

**ListUserResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchUserUsingPATCH**
> User patchUserUsingPATCH()

Updates information on a specific User

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiPatchUserUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiPatchUserUsingPATCHRequest = {
    // user_id
  userId: "user_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "address",
  ],
    // user (optional)
  patchUserRequestV2: {
    address: {
      country: "United States of America",
      countryCode: "USA",
      field: "ADDRESS_FIELD_UNSPECIFIED",
      line1: "line1_example",
      line2: "line2_example",
      locality: "Phoenix",
      postalCode: "postalCode_example",
      region: "Arizona",
      regionCode: "US-AZ",
      zipCode: "zipCode_example",
      zipFour: "zipFour_example",
    },
    companyName: "companyName_example",
    emailAddress: {
      email: "email_example",
      field: "EMAIL_FIELD_UNSPECIFIED",
      optInReason: "optInReason_example",
    },
    familyName: "familyName_example",
    faxNumbers: [
      {
        field: "FAX_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    givenName: "givenName_example",
    phoneNumbers: [
      {
        extension: "extension_example",
        field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    timeZone: "timeZone_example",
    title: "title_example",
    website: "website_example",
  },
};

const data = await apiInstance.patchUserUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchUserRequestV2** | **PatchUserRequestV2**| user |
 **userId** | [**string**] | user_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**User**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


