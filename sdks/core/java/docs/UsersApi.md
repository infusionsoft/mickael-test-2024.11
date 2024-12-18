# UsersApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserUsingPOST1**](UsersApi.md#createUserUsingPOST1) | **POST** /v2/users | Create a User |
| [**createUserUsingPOST1WithHttpInfo**](UsersApi.md#createUserUsingPOST1WithHttpInfo) | **POST** /v2/users | Create a User |
| [**getUserByIdUsingGET**](UsersApi.md#getUserByIdUsingGET) | **GET** /v2/users/{user_id} | Get User |
| [**getUserByIdUsingGETWithHttpInfo**](UsersApi.md#getUserByIdUsingGETWithHttpInfo) | **GET** /v2/users/{user_id} | Get User |
| [**getUserInfoUsingGET1**](UsersApi.md#getUserInfoUsingGET1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserInfoUsingGET1WithHttpInfo**](UsersApi.md#getUserInfoUsingGET1WithHttpInfo) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**getUserSignatureUsingGET1**](UsersApi.md#getUserSignatureUsingGET1) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**getUserSignatureUsingGET1WithHttpInfo**](UsersApi.md#getUserSignatureUsingGET1WithHttpInfo) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**listUsersUsingGET1**](UsersApi.md#listUsersUsingGET1) | **GET** /v2/users | List Users |
| [**listUsersUsingGET1WithHttpInfo**](UsersApi.md#listUsersUsingGET1WithHttpInfo) | **GET** /v2/users | List Users |
| [**patchUserUsingPATCH**](UsersApi.md#patchUserUsingPATCH) | **PATCH** /v2/users/{user_id} | Update User |
| [**patchUserUsingPATCHWithHttpInfo**](UsersApi.md#patchUserUsingPATCHWithHttpInfo) | **PATCH** /v2/users/{user_id} | Update User |



## createUserUsingPOST1

> User createUserUsingPOST1(createUserRequestV2)

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
        CreateUserRequestV2 createUserRequestV2 = new CreateUserRequestV2(); // CreateUserRequestV2 | user
        try {
            User result = apiInstance.createUserUsingPOST1(createUserRequestV2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#createUserUsingPOST1");
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
| **createUserRequestV2** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] |

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

## createUserUsingPOST1WithHttpInfo

> ApiResponse<User> createUserUsingPOST1 createUserUsingPOST1WithHttpInfo(createUserRequestV2)

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
        CreateUserRequestV2 createUserRequestV2 = new CreateUserRequestV2(); // CreateUserRequestV2 | user
        try {
            ApiResponse<User> response = apiInstance.createUserUsingPOST1WithHttpInfo(createUserRequestV2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#createUserUsingPOST1");
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
| **createUserRequestV2** | [**CreateUserRequestV2**](CreateUserRequestV2.md)| user | [optional] |

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


## getUserByIdUsingGET

> User getUserByIdUsingGET(userId)

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
            User result = apiInstance.getUserByIdUsingGET(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserByIdUsingGET");
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

## getUserByIdUsingGETWithHttpInfo

> ApiResponse<User> getUserByIdUsingGET getUserByIdUsingGETWithHttpInfo(userId)

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
            ApiResponse<User> response = apiInstance.getUserByIdUsingGETWithHttpInfo(userId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserByIdUsingGET");
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


## getUserInfoUsingGET1

> GetUserInfoResponse getUserInfoUsingGET1()

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
            GetUserInfoResponse result = apiInstance.getUserInfoUsingGET1();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserInfoUsingGET1");
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

## getUserInfoUsingGET1WithHttpInfo

> ApiResponse<GetUserInfoResponse> getUserInfoUsingGET1 getUserInfoUsingGET1WithHttpInfo()

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
            ApiResponse<GetUserInfoResponse> response = apiInstance.getUserInfoUsingGET1WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserInfoUsingGET1");
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


## getUserSignatureUsingGET1

> String getUserSignatureUsingGET1(userId)

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
            String result = apiInstance.getUserSignatureUsingGET1(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserSignatureUsingGET1");
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

## getUserSignatureUsingGET1WithHttpInfo

> ApiResponse<String> getUserSignatureUsingGET1 getUserSignatureUsingGET1WithHttpInfo(userId)

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
            ApiResponse<String> response = apiInstance.getUserSignatureUsingGET1WithHttpInfo(userId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#getUserSignatureUsingGET1");
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


## listUsersUsingGET1

> ListUserResponse listUsersUsingGET1(filter, orderBy)

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
            ListUserResponse result = apiInstance.listUsersUsingGET1(filter, orderBy);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listUsersUsingGET1");
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

## listUsersUsingGET1WithHttpInfo

> ApiResponse<ListUserResponse> listUsersUsingGET1 listUsersUsingGET1WithHttpInfo(filter, orderBy)

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
            ApiResponse<ListUserResponse> response = apiInstance.listUsersUsingGET1WithHttpInfo(filter, orderBy);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#listUsersUsingGET1");
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


## patchUserUsingPATCH

> User patchUserUsingPATCH(userId, updateMask, patchUserRequestV2)

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
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        PatchUserRequestV2 patchUserRequestV2 = new PatchUserRequestV2(); // PatchUserRequestV2 | user
        try {
            User result = apiInstance.patchUserUsingPATCH(userId, updateMask, patchUserRequestV2);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#patchUserUsingPATCH");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: address, company_name, email_address, family_name, fax_numbers, given_name, job_title, phone_numbers, time_zone, website] |
| **patchUserRequestV2** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] |

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

## patchUserUsingPATCHWithHttpInfo

> ApiResponse<User> patchUserUsingPATCH patchUserUsingPATCHWithHttpInfo(userId, updateMask, patchUserRequestV2)

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
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        PatchUserRequestV2 patchUserRequestV2 = new PatchUserRequestV2(); // PatchUserRequestV2 | user
        try {
            ApiResponse<User> response = apiInstance.patchUserUsingPATCHWithHttpInfo(userId, updateMask, patchUserRequestV2);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling UsersApi#patchUserUsingPATCH");
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
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: address, company_name, email_address, family_name, fax_numbers, given_name, job_title, phone_numbers, time_zone, website] |
| **patchUserRequestV2** | [**PatchUserRequestV2**](PatchUserRequestV2.md)| user | [optional] |

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

