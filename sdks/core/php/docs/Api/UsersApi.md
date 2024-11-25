# Com\Keap\Sdk\Core\UsersApi

All URIs are relative to https://api.infusionsoft.com/crm/rest/app, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUserUsingPOST1()**](UsersApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User |
| [**getUserByIdUsingGET()**](UsersApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User |
| [**getUserInfoUsingGET1()**](UsersApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserSignatureUsingGET1()**](UsersApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**listUsersUsingGET1()**](UsersApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users |
| [**patchUserUsingPATCH()**](UsersApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User |


## `createUserUsingPOST1()`

```php
createUserUsingPOST1($user): \Com\Keap\Sdk\Core\Model\User
```

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user = new \Com\Keap\Sdk\Core\Model\CreateUserRequestV2(); // \Com\Keap\Sdk\Core\Model\CreateUserRequestV2 | user

try {
    $result = $apiInstance->createUserUsingPOST1($user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->createUserUsingPOST1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user** | [**\Com\Keap\Sdk\Core\Model\CreateUserRequestV2**](../Model/CreateUserRequestV2.md)| user | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserByIdUsingGET()`

```php
getUserByIdUsingGET($user_id): \Com\Keap\Sdk\Core\Model\User
```

Get User

Retrieves a specific User

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id

try {
    $result = $apiInstance->getUserByIdUsingGET($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserByIdUsingGET: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserInfoUsingGET1()`

```php
getUserInfoUsingGET1(): \Com\Keap\Sdk\Core\Model\GetUserInfoResponse
```

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getUserInfoUsingGET1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserInfoUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Com\Keap\Sdk\Core\Model\GetUserInfoResponse**](../Model/GetUserInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserSignatureUsingGET1()`

```php
getUserSignatureUsingGET1($user_id): string
```

Get User email signature

Retrieves a HTML snippet that contains the user's email signature.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id

try {
    $result = $apiInstance->getUserSignatureUsingGET1($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserSignatureUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listUsersUsingGET1()`

```php
listUsersUsingGET1($filter, $order_by): \Com\Keap\Sdk\Core\Model\ListUserResponse
```

List Users

Retrieves a list of users

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filter = 'filter_example'; // string | Search filter to apply to results
$order_by = 'order_by_example'; // string | Attribute and direction to order items by. E.g. 'given_name desc'

try {
    $result = $apiInstance->listUsersUsingGET1($filter, $order_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->listUsersUsingGET1: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **filter** | **string**| Search filter to apply to results | [optional] |
| **order_by** | **string**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\ListUserResponse**](../Model/ListUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchUserUsingPATCH()`

```php
patchUserUsingPATCH($user_id, $update_mask, $user): \Com\Keap\Sdk\Core\Model\User
```

Update User

Updates information on a specific User

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new Com\Keap\Sdk\Core\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 'user_id_example'; // string | user_id
$update_mask = array('update_mask_example'); // string[] | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
$user = new \Com\Keap\Sdk\Core\Model\PatchUserRequestV2(); // \Com\Keap\Sdk\Core\Model\PatchUserRequestV2 | user

try {
    $result = $apiInstance->patchUserUsingPATCH($user_id, $update_mask, $user);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->patchUserUsingPATCH: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**| user_id | |
| **update_mask** | [**string[]**](../Model/string.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] |
| **user** | [**\Com\Keap\Sdk\Core\Model\PatchUserRequestV2**](../Model/PatchUserRequestV2.md)| user | [optional] |

### Return type

[**\Com\Keap\Sdk\Core\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
