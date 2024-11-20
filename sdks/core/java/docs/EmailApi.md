# EmailApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmailUsingPOST1**](EmailApi.md#createEmailUsingPOST1) | **POST** /v2/emails | Create an Email Record |
| [**createEmailUsingPOST1WithHttpInfo**](EmailApi.md#createEmailUsingPOST1WithHttpInfo) | **POST** /v2/emails | Create an Email Record |
| [**createEmailsUsingPOST1**](EmailApi.md#createEmailsUsingPOST1) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**createEmailsUsingPOST1WithHttpInfo**](EmailApi.md#createEmailsUsingPOST1WithHttpInfo) | **POST** /v2/emails:batchAdd | Create a set of Email Records |
| [**deleteEmailUsingDELETE1**](EmailApi.md#deleteEmailUsingDELETE1) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**deleteEmailUsingDELETE1WithHttpInfo**](EmailApi.md#deleteEmailUsingDELETE1WithHttpInfo) | **DELETE** /v2/emails/{id} | Delete an Email Record |
| [**deleteEmailsUsingPOST1**](EmailApi.md#deleteEmailsUsingPOST1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**deleteEmailsUsingPOST1WithHttpInfo**](EmailApi.md#deleteEmailsUsingPOST1WithHttpInfo) | **POST** /v2/emails:batchRemove | Remove a set of Email Records |
| [**getEmailUsingGET1**](EmailApi.md#getEmailUsingGET1) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**getEmailUsingGET1WithHttpInfo**](EmailApi.md#getEmailUsingGET1WithHttpInfo) | **GET** /v2/emails/{id} | Retrieve an Email |
| [**sendEmailUsingPOST1**](EmailApi.md#sendEmailUsingPOST1) | **POST** /v2/emails:send | Send an Email |
| [**sendEmailUsingPOST1WithHttpInfo**](EmailApi.md#sendEmailUsingPOST1WithHttpInfo) | **POST** /v2/emails:send | Send an Email |



## createEmailUsingPOST1

> EmailSentWithContent createEmailUsingPOST1(emailWithContent)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailSentRequest emailWithContent = new CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
        try {
            EmailSentWithContent result = apiInstance.createEmailUsingPOST1(emailWithContent);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmailUsingPOST1");
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
| **emailWithContent** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | |

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)


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

## createEmailUsingPOST1WithHttpInfo

> ApiResponse<EmailSentWithContent> createEmailUsingPOST1 createEmailUsingPOST1WithHttpInfo(emailWithContent)

Create an Email Record

Creates a Record of an Email sent to a Contact

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailSentRequest emailWithContent = new CreateEmailSentRequest(); // CreateEmailSentRequest | emailWithContent
        try {
            ApiResponse<EmailSentWithContent> response = apiInstance.createEmailUsingPOST1WithHttpInfo(emailWithContent);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmailUsingPOST1");
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
| **emailWithContent** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md)| emailWithContent | |

### Return type

ApiResponse<[**EmailSentWithContent**](EmailSentWithContent.md)>


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


## createEmailsUsingPOST1

> EmailsSentList createEmailsUsingPOST1(createEmailsSentRequest)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailsSentRequest createEmailsSentRequest = new CreateEmailsSentRequest(); // CreateEmailsSentRequest | Email records to persist, with content.
        try {
            EmailsSentList result = apiInstance.createEmailsUsingPOST1(createEmailsSentRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmailsUsingPOST1");
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
| **createEmailsSentRequest** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] |

### Return type

[**EmailsSentList**](EmailsSentList.md)


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

## createEmailsUsingPOST1WithHttpInfo

> ApiResponse<EmailsSentList> createEmailsUsingPOST1 createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest)

Create a set of Email Records

Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        CreateEmailsSentRequest createEmailsSentRequest = new CreateEmailsSentRequest(); // CreateEmailsSentRequest | Email records to persist, with content.
        try {
            ApiResponse<EmailsSentList> response = apiInstance.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#createEmailsUsingPOST1");
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
| **createEmailsSentRequest** | [**CreateEmailsSentRequest**](CreateEmailsSentRequest.md)| Email records to persist, with content. | [optional] |

### Return type

ApiResponse<[**EmailsSentList**](EmailsSentList.md)>


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


## deleteEmailUsingDELETE1

> void deleteEmailUsingDELETE1(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.deleteEmailUsingDELETE1(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmailUsingDELETE1");
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
| **id** | **String**| id | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## deleteEmailUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteEmailUsingDELETE1 deleteEmailUsingDELETE1WithHttpInfo(id)

Delete an Email Record

Deletes a specific Email Record

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.deleteEmailUsingDELETE1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmailUsingDELETE1");
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
| **id** | **String**| id | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## deleteEmailsUsingPOST1

> DeleteEmailsResponse deleteEmailsUsingPOST1(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        DeleteEmailsRequest deleteEmailsRequest = new DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
        try {
            DeleteEmailsResponse result = apiInstance.deleteEmailsUsingPOST1(deleteEmailsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmailsUsingPOST1");
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
| **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | |

### Return type

[**DeleteEmailsResponse**](DeleteEmailsResponse.md)


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

## deleteEmailsUsingPOST1WithHttpInfo

> ApiResponse<DeleteEmailsResponse> deleteEmailsUsingPOST1 deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest)

Remove a set of Email Records

Removes a set of Email Records

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        DeleteEmailsRequest deleteEmailsRequest = new DeleteEmailsRequest(); // DeleteEmailsRequest | deleteEmailsRequest
        try {
            ApiResponse<DeleteEmailsResponse> response = apiInstance.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#deleteEmailsUsingPOST1");
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
| **deleteEmailsRequest** | [**DeleteEmailsRequest**](DeleteEmailsRequest.md)| deleteEmailsRequest | |

### Return type

ApiResponse<[**DeleteEmailsResponse**](DeleteEmailsResponse.md)>


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


## getEmailUsingGET1

> EmailSentWithContent getEmailUsingGET1(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            EmailSentWithContent result = apiInstance.getEmailUsingGET1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmailUsingGET1");
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
| **id** | **String**| id | |

### Return type

[**EmailSentWithContent**](EmailSentWithContent.md)


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

## getEmailUsingGET1WithHttpInfo

> ApiResponse<EmailSentWithContent> getEmailUsingGET1 getEmailUsingGET1WithHttpInfo(id)

Retrieve an Email

Retrieves a single Email that has been sent

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<EmailSentWithContent> response = apiInstance.getEmailUsingGET1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#getEmailUsingGET1");
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
| **id** | **String**| id | |

### Return type

ApiResponse<[**EmailSentWithContent**](EmailSentWithContent.md)>


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


## sendEmailUsingPOST1

> void sendEmailUsingPOST1(emailSendRequest)

Send an Email

Sends an Email to a list of Contacts

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendRequest emailSendRequest = new EmailSendRequest(); // EmailSendRequest | emailSendRequest
        try {
            apiInstance.sendEmailUsingPOST1(emailSendRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmailUsingPOST1");
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
| **emailSendRequest** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## sendEmailUsingPOST1WithHttpInfo

> ApiResponse<Void> sendEmailUsingPOST1 sendEmailUsingPOST1WithHttpInfo(emailSendRequest)

Send an Email

Sends an Email to a list of Contacts

### Example

```java
// Import classes:
import com.keap.sdk.core.ApiClient;
import com.keap.sdk.core.ApiException;
import com.keap.sdk.core.ApiResponse;
import com.keap.sdk.core.Configuration;
import com.keap.sdk.core.models.*;
import com.keap.sdk.core.api.EmailApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        EmailApi apiInstance = new EmailApi(defaultClient);
        EmailSendRequest emailSendRequest = new EmailSendRequest(); // EmailSendRequest | emailSendRequest
        try {
            ApiResponse<Void> response = apiInstance.sendEmailUsingPOST1WithHttpInfo(emailSendRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailApi#sendEmailUsingPOST1");
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
| **emailSendRequest** | [**EmailSendRequest**](EmailSendRequest.md)| emailSendRequest | [optional] |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

