# ContactApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createContactLinkTypeUsingPOST**](ContactApi.md#createContactLinkTypeUsingPOST) | **POST** /v2/contacts/links/types | Create a Contact Link type |
| [**createContactLinkTypeUsingPOSTWithHttpInfo**](ContactApi.md#createContactLinkTypeUsingPOSTWithHttpInfo) | **POST** /v2/contacts/links/types | Create a Contact Link type |
| [**createContactUsingPOST1**](ContactApi.md#createContactUsingPOST1) | **POST** /v2/contacts | Create a Contact |
| [**createContactUsingPOST1WithHttpInfo**](ContactApi.md#createContactUsingPOST1WithHttpInfo) | **POST** /v2/contacts | Create a Contact |
| [**deleteContactUsingDELETE1**](ContactApi.md#deleteContactUsingDELETE1) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact |
| [**deleteContactUsingDELETE1WithHttpInfo**](ContactApi.md#deleteContactUsingDELETE1WithHttpInfo) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact |
| [**getContactUsingGET1**](ContactApi.md#getContactUsingGET1) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact |
| [**getContactUsingGET1WithHttpInfo**](ContactApi.md#getContactUsingGET1WithHttpInfo) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact |
| [**linkContactsUsingPOST**](ContactApi.md#linkContactsUsingPOST) | **POST** /v2/contacts:link | Link Contacts |
| [**linkContactsUsingPOSTWithHttpInfo**](ContactApi.md#linkContactsUsingPOSTWithHttpInfo) | **POST** /v2/contacts:link | Link Contacts |
| [**listContactLinkTypesUsingGET**](ContactApi.md#listContactLinkTypesUsingGET) | **GET** /v2/contacts/links/types | List Contact Link types |
| [**listContactLinkTypesUsingGETWithHttpInfo**](ContactApi.md#listContactLinkTypesUsingGETWithHttpInfo) | **GET** /v2/contacts/links/types | List Contact Link types |
| [**listContactLinksUsingGET**](ContactApi.md#listContactLinksUsingGET) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts |
| [**listContactLinksUsingGETWithHttpInfo**](ContactApi.md#listContactLinksUsingGETWithHttpInfo) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts |
| [**listContactsUsingGET1**](ContactApi.md#listContactsUsingGET1) | **GET** /v2/contacts | List Contacts |
| [**listContactsUsingGET1WithHttpInfo**](ContactApi.md#listContactsUsingGET1WithHttpInfo) | **GET** /v2/contacts | List Contacts |
| [**listPaymentMethodsUsingGET**](ContactApi.md#listPaymentMethodsUsingGET) | **GET** /v2/contacts/{contact_id}/paymentMethods | Retrieve Payment Methods |
| [**listPaymentMethodsUsingGETWithHttpInfo**](ContactApi.md#listPaymentMethodsUsingGETWithHttpInfo) | **GET** /v2/contacts/{contact_id}/paymentMethods | Retrieve Payment Methods |
| [**patchContactUsingPATCH**](ContactApi.md#patchContactUsingPATCH) | **PATCH** /v2/contacts/{contact_id} | Update a Contact |
| [**patchContactUsingPATCHWithHttpInfo**](ContactApi.md#patchContactUsingPATCHWithHttpInfo) | **PATCH** /v2/contacts/{contact_id} | Update a Contact |
| [**retrieveContactModelUsingGET1**](ContactApi.md#retrieveContactModelUsingGET1) | **GET** /v2/contacts/model | Retrieve Contact Model |
| [**retrieveContactModelUsingGET1WithHttpInfo**](ContactApi.md#retrieveContactModelUsingGET1WithHttpInfo) | **GET** /v2/contacts/model | Retrieve Contact Model |
| [**unlinkContactsUsingPOST**](ContactApi.md#unlinkContactsUsingPOST) | **POST** /v2/contacts:unlink | Delete Link between two Contacts |
| [**unlinkContactsUsingPOSTWithHttpInfo**](ContactApi.md#unlinkContactsUsingPOSTWithHttpInfo) | **POST** /v2/contacts:unlink | Delete Link between two Contacts |



## createContactLinkTypeUsingPOST

> ContactLinkType createContactLinkTypeUsingPOST(createContactLinkTypeRequest)

Create a Contact Link type

Creates a new type of Contact Link.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        CreateContactLinkTypeRequest createContactLinkTypeRequest = new CreateContactLinkTypeRequest(); // CreateContactLinkTypeRequest | request
        try {
            ContactLinkType result = apiInstance.createContactLinkTypeUsingPOST(createContactLinkTypeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#createContactLinkTypeUsingPOST");
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
| **createContactLinkTypeRequest** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md)| request | |

### Return type

[**ContactLinkType**](ContactLinkType.md)


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

## createContactLinkTypeUsingPOSTWithHttpInfo

> ApiResponse<ContactLinkType> createContactLinkTypeUsingPOST createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest)

Create a Contact Link type

Creates a new type of Contact Link.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        CreateContactLinkTypeRequest createContactLinkTypeRequest = new CreateContactLinkTypeRequest(); // CreateContactLinkTypeRequest | request
        try {
            ApiResponse<ContactLinkType> response = apiInstance.createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#createContactLinkTypeUsingPOST");
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
| **createContactLinkTypeRequest** | [**CreateContactLinkTypeRequest**](CreateContactLinkTypeRequest.md)| request | |

### Return type

ApiResponse<[**ContactLinkType**](ContactLinkType.md)>


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


## createContactUsingPOST1

> Contact createContactUsingPOST1(createPatchContactRequest)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60; and &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        CreatePatchContactRequest createPatchContactRequest = new CreatePatchContactRequest(); // CreatePatchContactRequest | contact
        try {
            Contact result = apiInstance.createContactUsingPOST1(createPatchContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#createContactUsingPOST1");
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
| **createPatchContactRequest** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] |

### Return type

[**Contact**](Contact.md)


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

## createContactUsingPOST1WithHttpInfo

> ApiResponse<Contact> createContactUsingPOST1 createContactUsingPOST1WithHttpInfo(createPatchContactRequest)

Create a Contact

Creates a new Contact. *Note:* Contact must contain at least one item in &#x60;email_addresses&#x60; or &#x60;phone_numbers&#x60; and &#x60;country_code&#x60; is required if &#x60;region&#x60; is specified.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        CreatePatchContactRequest createPatchContactRequest = new CreatePatchContactRequest(); // CreatePatchContactRequest | contact
        try {
            ApiResponse<Contact> response = apiInstance.createContactUsingPOST1WithHttpInfo(createPatchContactRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#createContactUsingPOST1");
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
| **createPatchContactRequest** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] |

### Return type

ApiResponse<[**Contact**](Contact.md)>


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


## deleteContactUsingDELETE1

> void deleteContactUsingDELETE1(contactId)

Delete a Contact

Deletes the specified Contact.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            apiInstance.deleteContactUsingDELETE1(contactId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#deleteContactUsingDELETE1");
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
| **contactId** | **String**| contact_id | |

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

## deleteContactUsingDELETE1WithHttpInfo

> ApiResponse<Void> deleteContactUsingDELETE1 deleteContactUsingDELETE1WithHttpInfo(contactId)

Delete a Contact

Deletes the specified Contact.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            ApiResponse<Void> response = apiInstance.deleteContactUsingDELETE1WithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#deleteContactUsingDELETE1");
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
| **contactId** | **String**| contact_id | |

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


## getContactUsingGET1

> Contact getContactUsingGET1(contactId, fields)

Retrieve a Contact

Retrieves a single Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
        try {
            Contact result = apiInstance.getContactUsingGET1(contactId, fields);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#getContactUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] |

### Return type

[**Contact**](Contact.md)


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

## getContactUsingGET1WithHttpInfo

> ApiResponse<Contact> getContactUsingGET1 getContactUsingGET1WithHttpInfo(contactId, fields)

Retrieve a Contact

Retrieves a single Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
        try {
            ApiResponse<Contact> response = apiInstance.getContactUsingGET1WithHttpInfo(contactId, fields);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#getContactUsingGET1");
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
| **contactId** | **String**| contact_id | |
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] |

### Return type

ApiResponse<[**Contact**](Contact.md)>


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


## linkContactsUsingPOST

> ContactLink linkContactsUsingPOST(linkContactsRequest)

Link Contacts

Links two Contacts together using the provided Link type

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        LinkContactsRequest linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
        try {
            ContactLink result = apiInstance.linkContactsUsingPOST(linkContactsRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#linkContactsUsingPOST");
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
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | |

### Return type

[**ContactLink**](ContactLink.md)


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

## linkContactsUsingPOSTWithHttpInfo

> ApiResponse<ContactLink> linkContactsUsingPOST linkContactsUsingPOSTWithHttpInfo(linkContactsRequest)

Link Contacts

Links two Contacts together using the provided Link type

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        LinkContactsRequest linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
        try {
            ApiResponse<ContactLink> response = apiInstance.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#linkContactsUsingPOST");
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
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | |

### Return type

ApiResponse<[**ContactLink**](ContactLink.md)>


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


## listContactLinkTypesUsingGET

> ListContactLinkTypesResponse listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken)

List Contact Link types

Retrieves a list of Contact Link types.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String filter = "name"; // String | Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 56; // Integer | 
        String pageToken = "pageToken_example"; // String | 
        try {
            ListContactLinkTypesResponse result = apiInstance.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactLinkTypesUsingGET");
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
| **filter** | **String**| Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue | [optional] [enum: name] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] |
| **pageToken** | **String**|  | [optional] |

### Return type

[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)


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

## listContactLinkTypesUsingGETWithHttpInfo

> ApiResponse<ListContactLinkTypesResponse> listContactLinkTypesUsingGET listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Contact Link types

Retrieves a list of Contact Link types.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String filter = "name"; // String | Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
        String orderBy = "orderBy_example"; // String | 
        Integer pageSize = 56; // Integer | 
        String pageToken = "pageToken_example"; // String | 
        try {
            ApiResponse<ListContactLinkTypesResponse> response = apiInstance.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactLinkTypesUsingGET");
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
| **filter** | **String**| Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue | [optional] [enum: name] |
| **orderBy** | **String**|  | [optional] |
| **pageSize** | **Integer**|  | [optional] |
| **pageToken** | **String**|  | [optional] |

### Return type

ApiResponse<[**ListContactLinkTypesResponse**](ListContactLinkTypesResponse.md)>


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


## listContactLinksUsingGET

> ListContactLinksResponse listContactLinksUsingGET(contactId)

List Linked Contacts

Retrieves a list of Linked Contacts for a given Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            ListContactLinksResponse result = apiInstance.listContactLinksUsingGET(contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactLinksUsingGET");
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
| **contactId** | **String**| contact_id | |

### Return type

[**ListContactLinksResponse**](ListContactLinksResponse.md)


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

## listContactLinksUsingGETWithHttpInfo

> ApiResponse<ListContactLinksResponse> listContactLinksUsingGET listContactLinksUsingGETWithHttpInfo(contactId)

List Linked Contacts

Retrieves a list of Linked Contacts for a given Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        try {
            ApiResponse<ListContactLinksResponse> response = apiInstance.listContactLinksUsingGETWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactLinksUsingGET");
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
| **contactId** | **String**| contact_id | |

### Return type

ApiResponse<[**ListContactLinksResponse**](ListContactLinksResponse.md)>


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


## listContactsUsingGET1

> ListContactsResponse listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken)

List Contacts

Retrieves a list of Contacts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListContactsResponse result = apiInstance.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactsUsingGET1");
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
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListContactsResponse**](ListContactsResponse.md)


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

## listContactsUsingGET1WithHttpInfo

> ApiResponse<ListContactsResponse> listContactsUsingGET1 listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken)

List Contacts

Retrieves a list of Contacts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        List<String> fields = Arrays.asList(); // List<String> | Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListContactsResponse> response = apiInstance.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listContactsUsingGET1");
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
| **fields** | [**List&lt;String&gt;**](String.md)| Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | [optional] |
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListContactsResponse**](ListContactsResponse.md)>


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


## listPaymentMethodsUsingGET

> PaymentMethodList listPaymentMethodsUsingGET(contactId)

Retrieve Payment Methods

List all Payment Methods for a Contact.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        Long contactId = 56L; // Long | contact_id
        try {
            PaymentMethodList result = apiInstance.listPaymentMethodsUsingGET(contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listPaymentMethodsUsingGET");
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
| **contactId** | **Long**| contact_id | |

### Return type

[**PaymentMethodList**](PaymentMethodList.md)


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

## listPaymentMethodsUsingGETWithHttpInfo

> ApiResponse<PaymentMethodList> listPaymentMethodsUsingGET listPaymentMethodsUsingGETWithHttpInfo(contactId)

Retrieve Payment Methods

List all Payment Methods for a Contact.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        Long contactId = 56L; // Long | contact_id
        try {
            ApiResponse<PaymentMethodList> response = apiInstance.listPaymentMethodsUsingGETWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#listPaymentMethodsUsingGET");
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
| **contactId** | **Long**| contact_id | |

### Return type

ApiResponse<[**PaymentMethodList**](PaymentMethodList.md)>


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


## patchContactUsingPATCH

> Contact patchContactUsingPATCH(contactId, updateMask, createPatchContactRequest)

Update a Contact

Updates a Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreatePatchContactRequest createPatchContactRequest = new CreatePatchContactRequest(); // CreatePatchContactRequest | contact
        try {
            Contact result = apiInstance.patchContactUsingPATCH(contactId, updateMask, createPatchContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#patchContactUsingPATCH");
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
| **contactId** | **String**| contact_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: addresses, anniversary, birthday, company, contact_type, custom_fields, email_addresses, family_name, fax_numbers, given_name, job_title, lead_source_id, links, middle_name, notes, opt_in_reason, origin, owner_id, phone_numbers, preferred_locale, preferred_name, prefix, referral_code, social_accounts, source_type, spouse_name, suffix, time_zone, website, utm_parameters] |
| **createPatchContactRequest** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] |

### Return type

[**Contact**](Contact.md)


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

## patchContactUsingPATCHWithHttpInfo

> ApiResponse<Contact> patchContactUsingPATCH patchContactUsingPATCHWithHttpInfo(contactId, updateMask, createPatchContactRequest)

Update a Contact

Updates a Contact

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        String contactId = "contactId_example"; // String | contact_id
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        CreatePatchContactRequest createPatchContactRequest = new CreatePatchContactRequest(); // CreatePatchContactRequest | contact
        try {
            ApiResponse<Contact> response = apiInstance.patchContactUsingPATCHWithHttpInfo(contactId, updateMask, createPatchContactRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#patchContactUsingPATCH");
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
| **contactId** | **String**| contact_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: addresses, anniversary, birthday, company, contact_type, custom_fields, email_addresses, family_name, fax_numbers, given_name, job_title, lead_source_id, links, middle_name, notes, opt_in_reason, origin, owner_id, phone_numbers, preferred_locale, preferred_name, prefix, referral_code, social_accounts, source_type, spouse_name, suffix, time_zone, website, utm_parameters] |
| **createPatchContactRequest** | [**CreatePatchContactRequest**](CreatePatchContactRequest.md)| contact | [optional] |

### Return type

ApiResponse<[**Contact**](Contact.md)>


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


## retrieveContactModelUsingGET1

> ObjectModel retrieveContactModelUsingGET1()

Retrieve Contact Model

Get the custom fields and optional properties for the Contact object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        try {
            ObjectModel result = apiInstance.retrieveContactModelUsingGET1();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#retrieveContactModelUsingGET1");
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

[**ObjectModel**](ObjectModel.md)


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

## retrieveContactModelUsingGET1WithHttpInfo

> ApiResponse<ObjectModel> retrieveContactModelUsingGET1 retrieveContactModelUsingGET1WithHttpInfo()

Retrieve Contact Model

Get the custom fields and optional properties for the Contact object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.retrieveContactModelUsingGET1WithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#retrieveContactModelUsingGET1");
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

ApiResponse<[**ObjectModel**](ObjectModel.md)>


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


## unlinkContactsUsingPOST

> void unlinkContactsUsingPOST(linkContactsRequest)

Delete Link between two Contacts

Deletes Link between two Contacts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        LinkContactsRequest linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
        try {
            apiInstance.unlinkContactsUsingPOST(linkContactsRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#unlinkContactsUsingPOST");
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
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | |

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
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## unlinkContactsUsingPOSTWithHttpInfo

> ApiResponse<Void> unlinkContactsUsingPOST unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest)

Delete Link between two Contacts

Deletes Link between two Contacts

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.ContactApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        ContactApi apiInstance = new ContactApi(defaultClient);
        LinkContactsRequest linkContactsRequest = new LinkContactsRequest(); // LinkContactsRequest | linkContactsRequest
        try {
            ApiResponse<Void> response = apiInstance.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContactApi#unlinkContactsUsingPOST");
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
| **linkContactsRequest** | [**LinkContactsRequest**](LinkContactsRequest.md)| linkContactsRequest | |

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
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

