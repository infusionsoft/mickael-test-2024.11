# .ContactApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContactLinkTypeUsingPOST**](ContactApi.md#createContactLinkTypeUsingPOST) | **POST** /v2/contacts/links/types | Create a Contact Link type
[**createContactUsingPOST1**](ContactApi.md#createContactUsingPOST1) | **POST** /v2/contacts | Create a Contact
[**deleteContactUsingDELETE1**](ContactApi.md#deleteContactUsingDELETE1) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact
[**getContactUsingGET1**](ContactApi.md#getContactUsingGET1) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact
[**linkContactsUsingPOST**](ContactApi.md#linkContactsUsingPOST) | **POST** /v2/contacts:link | Link Contacts
[**listContactLinkTypesUsingGET**](ContactApi.md#listContactLinkTypesUsingGET) | **GET** /v2/contacts/links/types | List Contact Link types
[**listContactLinksUsingGET**](ContactApi.md#listContactLinksUsingGET) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts
[**listContactsUsingGET1**](ContactApi.md#listContactsUsingGET1) | **GET** /v2/contacts | List Contacts
[**listPaymentMethodsUsingGET**](ContactApi.md#listPaymentMethodsUsingGET) | **GET** /v2/contacts/{contact_id}/paymentMethods | Retrieve Payment Methods
[**patchContactUsingPATCH**](ContactApi.md#patchContactUsingPATCH) | **PATCH** /v2/contacts/{contact_id} | Update a Contact
[**retrieveContactModelUsingGET1**](ContactApi.md#retrieveContactModelUsingGET1) | **GET** /v2/contacts/model | Retrieve Contact Model
[**unlinkContactsUsingPOST**](ContactApi.md#unlinkContactsUsingPOST) | **POST** /v2/contacts:unlink | Delete Link between two Contacts


# **createContactLinkTypeUsingPOST**
> ContactLinkType createContactLinkTypeUsingPOST(createContactLinkTypeRequest)

Creates a new type of Contact Link.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactLinkTypeUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactLinkTypeUsingPOSTRequest = {
    // request
  createContactLinkTypeRequest: {
    maxLinks: 1,
    name: "name_example",
  },
};

const data = await apiInstance.createContactLinkTypeUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactLinkTypeRequest** | **CreateContactLinkTypeRequest**| request |


### Return type

**ContactLinkType**

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

# **createContactUsingPOST1**
> Contact createContactUsingPOST1()

Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiCreateContactUsingPOST1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiCreateContactUsingPOST1Request = {
    // contact (optional)
  createPatchContactRequest: {
    addresses: [
      {
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
    ],
    anniversaryDate: "anniversaryDate_example",
    birthDate: "birthDate_example",
    company: {
      companyName: "companyName_example",
      id: "id_example",
    },
    contactType: "contactType_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    emailAddresses: [
      {
        email: "email_example",
        field: "EMAIL_FIELD_UNSPECIFIED",
        optInReason: "optInReason_example",
      },
    ],
    familyName: "familyName_example",
    faxNumbers: [
      {
        field: "FAX_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    givenName: "givenName_example",
    jobTitle: "jobTitle_example",
    leadsourceId: "leadsourceId_example",
    middleName: "middleName_example",
    origin: {
      ipAddress: "ipAddress_example",
    },
    ownerId: "ownerId_example",
    phoneNumbers: [
      {
        extension: "extension_example",
        field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    preferredLocale: "en_US",
    preferredName: "preferredName_example",
    prefix: "prefix_example",
    referralCode: "referralCode_example",
    socialAccounts: [
      {
        name: "name_example",
        type: "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED",
      },
    ],
    sourceType: "SOURCE_TYPE_UNSPECIFIED",
    spouseName: "spouseName_example",
    suffix: "suffix_example",
    timeZone: "timeZone_example",
    utmParameters: {
      keapSourceId: "6088383224687662",
      utmCampaign: "spring_sale",
      utmContent: "textlink",
      utmMedium: "cpc",
      utmSource: "google",
      utmTerm: "financial_consulting",
    },
    website: "website_example",
  },
};

const data = await apiInstance.createContactUsingPOST1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPatchContactRequest** | **CreatePatchContactRequest**| contact |


### Return type

**Contact**

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

# **deleteContactUsingDELETE1**
> void deleteContactUsingDELETE1()

Deletes the specified Contact.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiDeleteContactUsingDELETE1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiDeleteContactUsingDELETE1Request = {
    // contact_id
  contactId: "contact_id_example",
};

const data = await apiInstance.deleteContactUsingDELETE1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContactUsingGET1**
> Contact getContactUsingGET1()

Retrieves a single Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiGetContactUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiGetContactUsingGET1Request = {
    // contact_id
  contactId: "contact_id_example",
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`) (optional)
  fields: [
    "fields_example",
  ],
};

const data = await apiInstance.getContactUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | (optional) defaults to undefined


### Return type

**Contact**

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

# **linkContactsUsingPOST**
> ContactLink linkContactsUsingPOST(linkContactsRequest)

Links two Contacts together using the provided Link type

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiLinkContactsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiLinkContactsUsingPOSTRequest = {
    // linkContactsRequest
  linkContactsRequest: {
    contact1Id: "contact1Id_example",
    contact2Id: "contact2Id_example",
    linkTypeId: "linkTypeId_example",
  },
};

const data = await apiInstance.linkContactsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | **LinkContactsRequest**| linkContactsRequest |


### Return type

**ContactLink**

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

# **listContactLinkTypesUsingGET**
> ListContactLinkTypesResponse listContactLinkTypesUsingGET()

Retrieves a list of Contact Link types.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactLinkTypesUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactLinkTypesUsingGETRequest = {
    // Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue (optional)
  filter: "name",
  
  orderBy: "orderBy_example",
  
  pageSize: 1,
  
  pageToken: "pageToken_example",
};

const data = await apiInstance.listContactLinkTypesUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**&#39;name&#39;**]**Array<&#39;name&#39;>** | Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue | (optional) defaults to undefined
 **orderBy** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListContactLinkTypesResponse**

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

# **listContactLinksUsingGET**
> ListContactLinksResponse listContactLinksUsingGET()

Retrieves a list of Linked Contacts for a given Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactLinksUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactLinksUsingGETRequest = {
    // contact_id
  contactId: "contact_id_example",
};

const data = await apiInstance.listContactLinksUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**string**] | contact_id | defaults to undefined


### Return type

**ListContactLinksResponse**

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

# **listContactsUsingGET1**
> ListContactsResponse listContactsUsingGET1()

Retrieves a list of Contacts

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListContactsUsingGET1Request } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListContactsUsingGET1Request = {
    // Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`) (optional)
  fields: [
    "fields_example",
  ],
    // Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123%3Bfamily_name%3D%3DSmith`   (optional)
  filter: "filter_example",
    // Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
    // Page token (optional)
  pageToken: "page_token_example",
};

const data = await apiInstance.listContactsUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **Array&lt;string&gt;** | Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;) | (optional) defaults to undefined
 **filter** | [**string**] | Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;   | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined


### Return type

**ListContactsResponse**

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

# **listPaymentMethodsUsingGET**
> PaymentMethodList listPaymentMethodsUsingGET()

List all Payment Methods for a Contact.

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiListPaymentMethodsUsingGETRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiListPaymentMethodsUsingGETRequest = {
    // contact_id
  contactId: 1,
};

const data = await apiInstance.listPaymentMethodsUsingGET(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | [**number**] | contact_id | defaults to undefined


### Return type

**PaymentMethodList**

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

# **patchContactUsingPATCH**
> Contact patchContactUsingPATCH()

Updates a Contact

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiPatchContactUsingPATCHRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiPatchContactUsingPATCHRequest = {
    // contact_id
  contactId: "contact_id_example",
    // An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional)
  updateMask: [
    "addresses",
  ],
    // contact (optional)
  createPatchContactRequest: {
    addresses: [
      {
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
    ],
    anniversaryDate: "anniversaryDate_example",
    birthDate: "birthDate_example",
    company: {
      companyName: "companyName_example",
      id: "id_example",
    },
    contactType: "contactType_example",
    customFields: [
      {
        content: {},
        id: "id_example",
      },
    ],
    emailAddresses: [
      {
        email: "email_example",
        field: "EMAIL_FIELD_UNSPECIFIED",
        optInReason: "optInReason_example",
      },
    ],
    familyName: "familyName_example",
    faxNumbers: [
      {
        field: "FAX_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    givenName: "givenName_example",
    jobTitle: "jobTitle_example",
    leadsourceId: "leadsourceId_example",
    middleName: "middleName_example",
    origin: {
      ipAddress: "ipAddress_example",
    },
    ownerId: "ownerId_example",
    phoneNumbers: [
      {
        extension: "extension_example",
        field: "PHONE_NUMBER_FIELD_UNSPECIFIED",
        number: "number_example",
        type: "type_example",
      },
    ],
    preferredLocale: "en_US",
    preferredName: "preferredName_example",
    prefix: "prefix_example",
    referralCode: "referralCode_example",
    socialAccounts: [
      {
        name: "name_example",
        type: "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED",
      },
    ],
    sourceType: "SOURCE_TYPE_UNSPECIFIED",
    spouseName: "spouseName_example",
    suffix: "suffix_example",
    timeZone: "timeZone_example",
    utmParameters: {
      keapSourceId: "6088383224687662",
      utmCampaign: "spring_sale",
      utmContent: "textlink",
      utmMedium: "cpc",
      utmSource: "google",
      utmTerm: "financial_consulting",
    },
    website: "website_example",
  },
};

const data = await apiInstance.patchContactUsingPATCH(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPatchContactRequest** | **CreatePatchContactRequest**| contact |
 **contactId** | [**string**] | contact_id | defaults to undefined
 **updateMask** |  | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | (optional) defaults to undefined


### Return type

**Contact**

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

# **retrieveContactModelUsingGET1**
> ObjectModel retrieveContactModelUsingGET1()

Get the custom fields and optional properties for the Contact object

### Example


```typescript
import { createConfiguration, ContactApi } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request = {};

const data = await apiInstance.retrieveContactModelUsingGET1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ObjectModel**

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

# **unlinkContactsUsingPOST**
> void unlinkContactsUsingPOST(linkContactsRequest)

Deletes Link between two Contacts

### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiUnlinkContactsUsingPOSTRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiUnlinkContactsUsingPOSTRequest = {
    // linkContactsRequest
  linkContactsRequest: {
    contact1Id: "contact1Id_example",
    contact2Id: "contact2Id_example",
    linkTypeId: "linkTypeId_example",
  },
};

const data = await apiInstance.unlinkContactsUsingPOST(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkContactsRequest** | **LinkContactsRequest**| linkContactsRequest |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


