# KeapRestApi.UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsingPOST1_0**](UsersApi.md#createUserUsingPOST1_0) | **POST** /v2/users | Create a User
[**getUserByIdUsingGET_0**](UsersApi.md#getUserByIdUsingGET_0) | **GET** /v2/users/{user_id} | Get User
[**getUserInfoUsingGET1_0**](UsersApi.md#getUserInfoUsingGET1_0) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**getUserSignatureUsingGET1_0**](UsersApi.md#getUserSignatureUsingGET1_0) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**listUsersUsingGET1_0**](UsersApi.md#listUsersUsingGET1_0) | **GET** /v2/users | List Users
[**patchUserUsingPATCH_0**](UsersApi.md#patchUserUsingPATCH_0) | **PATCH** /v2/users/{user_id} | Update User



## createUserUsingPOST1_0

> User createUserUsingPOST1_0(opts)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \&quot;Invited\&quot; status until the user accepts the invite. \&quot;Inactive\&quot; users will not take up a user license.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
let opts = {
  'user': new KeapRestApi.CreateUserRequestV2() // CreateUserRequestV2 | user
};
apiInstance.createUserUsingPOST1_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getUserByIdUsingGET_0

> User getUserByIdUsingGET_0(userId)

Get User

Retrieves a specific User

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserByIdUsingGET_0(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserInfoUsingGET1_0

> GetUserInfoResponse getUserInfoUsingGET1_0()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
apiInstance.getUserInfoUsingGET1_0().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## getUserSignatureUsingGET1_0

> String getUserSignatureUsingGET1_0(userId)

Get User email signature

Retrieves a HTML snippet that contains the user&#39;s email signature.

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserSignatureUsingGET1_0(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsersUsingGET1_0

> ListUserResponse listUsersUsingGET1_0(opts)

List Users

Retrieves a list of users

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example" // String | Attribute and direction to order items by. E.g. 'given_name desc'
};
apiInstance.listUsersUsingGET1_0(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Search filter to apply to results | [optional] 
 **orderBy** | **String**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] 

### Return type

[**ListUserResponse**](ListUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchUserUsingPATCH_0

> User patchUserUsingPATCH_0(userId, opts)

Update User

Updates information on a specific User

### Example

```javascript
import KeapRestApi from 'keap_rest_api';

let apiInstance = new KeapRestApi.UsersApi();
let userId = "userId_example"; // String | user_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
  'user': new KeapRestApi.PatchUserRequestV2() // PatchUserRequestV2 | user
};
apiInstance.patchUserUsingPATCH_0(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] 
 **user** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

