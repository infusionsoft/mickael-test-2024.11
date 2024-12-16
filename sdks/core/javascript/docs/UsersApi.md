# KeapCoreServiceCoreSdk.UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserUsingPOST1**](UsersApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User
[**getUserByIdUsingGET**](UsersApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User
[**getUserInfoUsingGET1**](UsersApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info
[**getUserSignatureUsingGET1**](UsersApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature
[**listUsersUsingGET1**](UsersApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users
[**patchUserUsingPATCH**](UsersApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User



## createUserUsingPOST1

> User createUserUsingPOST1(opts)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \&quot;Invited\&quot; status until the user accepts the invite. \&quot;Inactive\&quot; users will not take up a user license.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
let opts = {
  'user': new KeapCoreServiceCoreSdk.CreateUserRequestV2() // CreateUserRequestV2 | user
};
apiInstance.createUserUsingPOST1(opts).then((data) => {
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


## getUserByIdUsingGET

> User getUserByIdUsingGET(userId)

Get User

Retrieves a specific User

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserByIdUsingGET(userId).then((data) => {
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


## getUserInfoUsingGET1

> GetUserInfoResponse getUserInfoUsingGET1()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
apiInstance.getUserInfoUsingGET1().then((data) => {
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


## getUserSignatureUsingGET1

> String getUserSignatureUsingGET1(userId)

Get User email signature

Retrieves a HTML snippet that contains the user&#39;s email signature.

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
let userId = "userId_example"; // String | user_id
apiInstance.getUserSignatureUsingGET1(userId).then((data) => {
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


## listUsersUsingGET1

> ListUserResponse listUsersUsingGET1(opts)

List Users

Retrieves a list of users

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
let opts = {
  'filter': "filter_example", // String | Search filter to apply to results
  'orderBy': "orderBy_example" // String | Attribute and direction to order items by. E.g. 'given_name desc'
};
apiInstance.listUsersUsingGET1(opts).then((data) => {
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


## patchUserUsingPATCH

> User patchUserUsingPATCH(userId, opts)

Update User

Updates information on a specific User

### Example

```javascript
import KeapCoreServiceCoreSdk from 'keap-core-service-core-sdk';

let apiInstance = new KeapCoreServiceCoreSdk.UsersApi();
let userId = "userId_example"; // String | user_id
let opts = {
  'updateMask': ["null"], // [String] | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
  'user': new KeapCoreServiceCoreSdk.PatchUserRequestV2() // PatchUserRequestV2 | user
};
apiInstance.patchUserUsingPATCH(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| user_id | 
 **updateMask** | [**[String]**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] 
 **user** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

