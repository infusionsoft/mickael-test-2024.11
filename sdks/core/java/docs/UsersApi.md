# UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserUsingPOST1_0**](UsersApi.md#createUserUsingPOST1_0) | **POST** /v2/users | Create a User |
| [**createUserUsingPOST1_0WithHttpInfo**](UsersApi.md#createUserUsingPOST1_0WithHttpInfo) | **POST** /v2/users | Create a User |
| [**getUserByIdUsingGET_0**](UsersApi.md#getUserByIdUsingGET_0) | **GET** /v2/users/{user_id} | Get User |
| [**getUserByIdUsingGET_0WithHttpInfo**](UsersApi.md#getUserByIdUsingGET_0WithHttpInfo) | **GET** /v2/users/{user_id} | Get User |
| [**getUserInfoUsingGET1_0**](UsersApi.md#getUserInfoUsingGET1_0) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserInfoUsingGET1_0WithHttpInfo**](UsersApi.md#getUserInfoUsingGET1_0WithHttpInfo) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserSignatureUsingGET1_0**](UsersApi.md#getUserSignatureUsingGET1_0) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**getUserSignatureUsingGET1_0WithHttpInfo**](UsersApi.md#getUserSignatureUsingGET1_0WithHttpInfo) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**listUsersUsingGET1_0**](UsersApi.md#listUsersUsingGET1_0) | **GET** /v2/users | List Users |
| [**listUsersUsingGET1_0WithHttpInfo**](UsersApi.md#listUsersUsingGET1_0WithHttpInfo) | **GET** /v2/users | List Users |
| [**patchUserUsingPATCH_0**](UsersApi.md#patchUserUsingPATCH_0) | **PATCH** /v2/users/{user_id} | Update User |
| [**patchUserUsingPATCH_0WithHttpInfo**](UsersApi.md#patchUserUsingPATCH_0WithHttpInfo) | **PATCH** /v2/users/{user_id} | Update User |



## createUserUsingPOST1_0

> User createUserUsingPOST1_0(user)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \&quot;Invited\&quot; status until the user accepts the invite. \&quot;Inactive\&quot; users will not take up a user license.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        CreateUserRequestV2 user = new CreateUserRequestV2(); // CreateUserRequestV2 | user
        try {
            User result = apiInstance.createUserUsingPOST1_0(user);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#createUserUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] |

### Return type

[**User**](User.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## createUserUsingPOST1_0WithHttpInfo

> ApiResponse<User> createUserUsingPOST1_0 createUserUsingPOST1_0WithHttpInfo(user)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \&quot;Invited\&quot; status until the user accepts the invite. \&quot;Inactive\&quot; users will not take up a user license.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        CreateUserRequestV2 user = new CreateUserRequestV2(); // CreateUserRequestV2 | user
        try {
            ApiResponse<User> response = apiInstance.createUserUsingPOST1_0WithHttpInfo(user);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#createUserUsingPOST1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] |

### Return type

ApiResponse<[**User**](User.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## getUserByIdUsingGET_0

> User getUserByIdUsingGET_0(userId)

Get User

Retrieves a specific User

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        try {
            User result = apiInstance.getUserByIdUsingGET_0(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserByIdUsingGET_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |

### Return type

[**User**](User.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## getUserByIdUsingGET_0WithHttpInfo

> ApiResponse<User> getUserByIdUsingGET_0 getUserByIdUsingGET_0WithHttpInfo(userId)

Get User

Retrieves a specific User

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        try {
            ApiResponse<User> response = apiInstance.getUserByIdUsingGET_0WithHttpInfo(userId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserByIdUsingGET_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |

### Return type

ApiResponse<[**User**](User.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getUserInfoUsingGET1_0

> GetUserInfoResponse getUserInfoUsingGET1_0()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        try {
            GetUserInfoResponse result = apiInstance.getUserInfoUsingGET1_0();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserInfoUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## getUserInfoUsingGET1_0WithHttpInfo

> ApiResponse<GetUserInfoResponse> getUserInfoUsingGET1_0 getUserInfoUsingGET1_0WithHttpInfo()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        try {
            ApiResponse<GetUserInfoResponse> response = apiInstance.getUserInfoUsingGET1_0WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserInfoUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**GetUserInfoResponse**](GetUserInfoResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getUserSignatureUsingGET1_0

> String getUserSignatureUsingGET1_0(userId)

Get User email signature

Retrieves a HTML snippet that contains the user&#39;s email signature.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        try {
            String result = apiInstance.getUserSignatureUsingGET1_0(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserSignatureUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |

### Return type

**String**


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## getUserSignatureUsingGET1_0WithHttpInfo

> ApiResponse<String> getUserSignatureUsingGET1_0 getUserSignatureUsingGET1_0WithHttpInfo(userId)

Get User email signature

Retrieves a HTML snippet that contains the user&#39;s email signature.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        try {
            ApiResponse<String> response = apiInstance.getUserSignatureUsingGET1_0WithHttpInfo(userId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserSignatureUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |

### Return type

ApiResponse<**String**>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## listUsersUsingGET1_0

> ListUserResponse listUsersUsingGET1_0(filter, orderBy)

List Users

Retrieves a list of users

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. 'given_name desc'
        try {
            ListUserResponse result = apiInstance.listUsersUsingGET1_0(filter, orderBy);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listUsersUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] |

### Return type

[**ListUserResponse**](ListUserResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## listUsersUsingGET1_0WithHttpInfo

> ApiResponse<ListUserResponse> listUsersUsingGET1_0 listUsersUsingGET1_0WithHttpInfo(filter, orderBy)

List Users

Retrieves a list of users

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String filter = "filter_example"; // String | Search filter to apply to results
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items by. E.g. 'given_name desc'
        try {
            ApiResponse<ListUserResponse> response = apiInstance.listUsersUsingGET1_0WithHttpInfo(filter, orderBy);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listUsersUsingGET1_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| Search filter to apply to results | [optional] |
| **orderBy** | **String**| Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional] |

### Return type

ApiResponse<[**ListUserResponse**](ListUserResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## patchUserUsingPATCH_0

> User patchUserUsingPATCH_0(userId, updateMask, user)

Update User

Updates information on a specific User

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
        PatchUserRequestV2 user = new PatchUserRequestV2(); // PatchUserRequestV2 | user
        try {
            User result = apiInstance.patchUserUsingPATCH_0(userId, updateMask, user);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#patchUserUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] [enum: address, company_name, email_address, family_name, fax_numbers, given_name, job_title, phone_numbers, time_zone, website] |
| **user** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] |

### Return type

[**User**](User.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## patchUserUsingPATCH_0WithHttpInfo

> ApiResponse<User> patchUserUsingPATCH_0 patchUserUsingPATCH_0WithHttpInfo(userId, updateMask, user)

Update User

Updates information on a specific User

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.UsersApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        UsersApi apiInstance = new UsersApi(defaultClient);
        String userId = "userId_example"; // String | user_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
        PatchUserRequestV2 user = new PatchUserRequestV2(); // PatchUserRequestV2 | user
        try {
            ApiResponse<User> response = apiInstance.patchUserUsingPATCH_0WithHttpInfo(userId, updateMask, user);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#patchUserUsingPATCH_0");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**| user_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped. | [optional] [enum: address, company_name, email_address, family_name, fax_numbers, given_name, job_title, phone_numbers, time_zone, website] |
| **user** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] |

### Return type

ApiResponse<[**User**](User.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

