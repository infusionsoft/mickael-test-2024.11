# AffiliateApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAffiliateToProgramUsingPOST**](AffiliateApi.md#addAffiliateToProgramUsingPOST) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateToProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#addAffiliateToProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**addAffiliateUsingPOST**](AffiliateApi.md#addAffiliateUsingPOST) | **POST** /v2/affiliates | Create an Affiliate |
| [**addAffiliateUsingPOSTWithHttpInfo**](AffiliateApi.md#addAffiliateUsingPOSTWithHttpInfo) | **POST** /v2/affiliates | Create an Affiliate |
| [**addCommissionProgramUsingPOST**](AffiliateApi.md#addCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**addCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#addCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**assignProductCommissionProgramUsingPOST**](AffiliateApi.md#assignProductCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignProductCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#assignProductCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOST**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**createAffiliateCustomFieldUsingPOST**](AffiliateApi.md#createAffiliateCustomFieldUsingPOST) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createAffiliateCustomFieldUsingPOSTWithHttpInfo**](AffiliateApi.md#createAffiliateCustomFieldUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**createDefaultCommissionProgramUsingPOST**](AffiliateApi.md#createDefaultCommissionProgramUsingPOST) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createDefaultCommissionProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#createDefaultCommissionProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**createRedirectLinkUsingPOST**](AffiliateApi.md#createRedirectLinkUsingPOST) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**createRedirectLinkUsingPOSTWithHttpInfo**](AffiliateApi.md#createRedirectLinkUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**deleteAffiliateCommissionProgramUsingDELETE**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETE) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**deleteAffiliateUsingDELETE**](AffiliateApi.md#deleteAffiliateUsingDELETE) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteAffiliateUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteAffiliateUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**deleteRedirectLinkUsingDELETE**](AffiliateApi.md#deleteRedirectLinkUsingDELETE) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**deleteRedirectLinkUsingDELETEWithHttpInfo**](AffiliateApi.md#deleteRedirectLinkUsingDELETEWithHttpInfo) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**getAffiliateCommissionTotalUsingGET**](AffiliateApi.md#getAffiliateCommissionTotalUsingGET) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionTotalUsingGETWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionTotalUsingGETWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**getAffiliateCommissionsUsingGET**](AffiliateApi.md#getAffiliateCommissionsUsingGET) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCommissionsUsingGETWithHttpInfo**](AffiliateApi.md#getAffiliateCommissionsUsingGETWithHttpInfo) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**getAffiliateCustomFieldsUsingGET**](AffiliateApi.md#getAffiliateCustomFieldsUsingGET) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**getAffiliateCustomFieldsUsingGETWithHttpInfo**](AffiliateApi.md#getAffiliateCustomFieldsUsingGETWithHttpInfo) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**getAffiliateUsingGET1**](AffiliateApi.md#getAffiliateUsingGET1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getAffiliateUsingGET1WithHttpInfo**](AffiliateApi.md#getAffiliateUsingGET1WithHttpInfo) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate |
| [**getCommissionProgramUsingGET**](AffiliateApi.md#getCommissionProgramUsingGET) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getCommissionProgramUsingGETWithHttpInfo**](AffiliateApi.md#getCommissionProgramUsingGETWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**getRedirectLinkUsingGET**](AffiliateApi.md#getRedirectLinkUsingGET) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**getRedirectLinkUsingGETWithHttpInfo**](AffiliateApi.md#getRedirectLinkUsingGETWithHttpInfo) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**listAffiliateCommissionProgramsUsingGET**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGET) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateCommissionProgramsUsingGETWithHttpInfo**](AffiliateApi.md#listAffiliateCommissionProgramsUsingGETWithHttpInfo) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**listAffiliateLinksUsingGET**](AffiliateApi.md#listAffiliateLinksUsingGET) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listAffiliateLinksUsingGETWithHttpInfo**](AffiliateApi.md#listAffiliateLinksUsingGETWithHttpInfo) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**listSummariesUsingGET1**](AffiliateApi.md#listSummariesUsingGET1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**listSummariesUsingGET1WithHttpInfo**](AffiliateApi.md#listSummariesUsingGET1WithHttpInfo) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**patchCommissionProgramUsingPATCH**](AffiliateApi.md#patchCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**patchCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#patchCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program |
| [**patchDefaultCommissionProgramUsingPATCH**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**patchDefaultCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#patchDefaultCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**patchProductCommissionProgramUsingPATCH**](AffiliateApi.md#patchProductCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**patchProductCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#patchProductCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**patchSubscriptionCommissionProgramUsingPATCH**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCH) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo**](AffiliateApi.md#patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**removeAffiliateFromProgramUsingPOST**](AffiliateApi.md#removeAffiliateFromProgramUsingPOST) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeAffiliateFromProgramUsingPOSTWithHttpInfo**](AffiliateApi.md#removeAffiliateFromProgramUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOST**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOST) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo**](AffiliateApi.md#removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**updateAffiliateCustomFieldUsingPATCH**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCH) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateAffiliateCustomFieldUsingPATCHWithHttpInfo**](AffiliateApi.md#updateAffiliateCustomFieldUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**updateAffiliateUsingPATCH**](AffiliateApi.md#updateAffiliateUsingPATCH) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateAffiliateUsingPATCHWithHttpInfo**](AffiliateApi.md#updateAffiliateUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/{id} | Update an Affiliate |
| [**updateRedirectLinkUsingPATCH**](AffiliateApi.md#updateRedirectLinkUsingPATCH) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**updateRedirectLinkUsingPATCHWithHttpInfo**](AffiliateApi.md#updateRedirectLinkUsingPATCHWithHttpInfo) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |



## addAffiliateToProgramUsingPOST

> void addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
        try {
            apiInstance.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgramUsingPOST");
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
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## addAffiliateToProgramUsingPOSTWithHttpInfo

> ApiResponse<Void> addAffiliateToProgramUsingPOST addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateAddToProgramRequest affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest
        try {
            ApiResponse<Void> response = apiInstance.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateToProgramUsingPOST");
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
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md)| affiliateAddToProgramRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## addAffiliateUsingPOST

> RestAffiliate addAffiliateUsingPOST(insertAffiliate)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest insertAffiliate = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            RestAffiliate result = apiInstance.addAffiliateUsingPOST(insertAffiliate);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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
| **insertAffiliate** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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

## addAffiliateUsingPOSTWithHttpInfo

> ApiResponse<RestAffiliate> addAffiliateUsingPOST addAffiliateUsingPOSTWithHttpInfo(insertAffiliate)

Create an Affiliate

Creates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateAffiliateRequest insertAffiliate = new CreateAffiliateRequest(); // CreateAffiliateRequest | Affiliate request to insert
        try {
            ApiResponse<RestAffiliate> response = apiInstance.addAffiliateUsingPOSTWithHttpInfo(insertAffiliate);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addAffiliateUsingPOST");
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
| **insertAffiliate** | [**CreateAffiliateRequest**](CreateAffiliateRequest.md)| Affiliate request to insert | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## addCommissionProgramUsingPOST

> AffiliateCommissionProgramResponse addCommissionProgramUsingPOST(insertCommissionProgram)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest insertCommissionProgram = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | Commission Program to insert
        try {
            AffiliateCommissionProgramResponse result = apiInstance.addCommissionProgramUsingPOST(insertCommissionProgram);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgramUsingPOST");
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
| **insertCommissionProgram** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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

## addCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> addCommissionProgramUsingPOST addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCommissionProgramRequest insertCommissionProgram = new CreateCommissionProgramRequest(); // CreateCommissionProgramRequest | Commission Program to insert
        try {
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#addCommissionProgramUsingPOST");
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
| **insertCommissionProgram** | [**CreateCommissionProgramRequest**](CreateCommissionProgramRequest.md)| Commission Program to insert | [optional] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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


## assignProductCommissionProgramUsingPOST

> ProductCommissionProgram assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateProductCommissionProgramRequest productCommissionProgram = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | Product Commission Program
        try {
            ProductCommissionProgram result = apiInstance.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **productCommissionProgram** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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

## assignProductCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<ProductCommissionProgram> assignProductCommissionProgramUsingPOST assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateProductCommissionProgramRequest productCommissionProgram = new CreateProductCommissionProgramRequest(); // CreateProductCommissionProgramRequest | Product Commission Program
        try {
            ApiResponse<ProductCommissionProgram> response = apiInstance.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignProductCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **productCommissionProgram** | [**CreateProductCommissionProgramRequest**](CreateProductCommissionProgramRequest.md)| Product Commission Program | [optional] |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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


## assignSubscriptionCommissionProgramUsingPOST

> SubscriptionCommissionProgram assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateSubscriptionCommissionProgramRequest subscriptionCommissionProgram = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
        try {
            SubscriptionCommissionProgram result = apiInstance.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **subscriptionCommissionProgram** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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

## assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> assignSubscriptionCommissionProgramUsingPOST assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateSubscriptionCommissionProgramRequest subscriptionCommissionProgram = new CreateSubscriptionCommissionProgramRequest(); // CreateSubscriptionCommissionProgramRequest | Subscription Commission Program
        try {
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#assignSubscriptionCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **subscriptionCommissionProgram** | [**CreateSubscriptionCommissionProgramRequest**](CreateSubscriptionCommissionProgramRequest.md)| Subscription Commission Program | [optional] |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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


## createAffiliateCustomFieldUsingPOST

> CustomFieldMetaData createAffiliateCustomFieldUsingPOST(customField)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            CustomFieldMetaData result = apiInstance.createAffiliateCustomFieldUsingPOST(customField);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createAffiliateCustomFieldUsingPOST");
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
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


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

## createAffiliateCustomFieldUsingPOSTWithHttpInfo

> ApiResponse<CustomFieldMetaData> createAffiliateCustomFieldUsingPOST createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateCustomFieldRequest customField = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createAffiliateCustomFieldUsingPOST");
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
| **customField** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md)| customField | |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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


## createDefaultCommissionProgramUsingPOST

> SetDefaultCommissionProgramResponse createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
        try {
            SetDefaultCommissionProgramResponse result = apiInstance.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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

## createDefaultCommissionProgramUsingPOSTWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> createDefaultCommissionProgramUsingPOST createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest)

Create a Default Commission Program

Creates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        CreateDefaultCommissionProgramRequest createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest(); // CreateDefaultCommissionProgramRequest | Values of the Default Commission Program
        try {
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createDefaultCommissionProgramUsingPOST");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest**](CreateDefaultCommissionProgramRequest.md)| Values of the Default Commission Program | [optional] |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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


## createRedirectLinkUsingPOST

> AffiliateLink createRedirectLinkUsingPOST(request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrPatchAffiliateLinkRequest request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
        try {
            AffiliateLink result = apiInstance.createRedirectLinkUsingPOST(request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLinkUsingPOST");
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
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## createRedirectLinkUsingPOSTWithHttpInfo

> ApiResponse<AffiliateLink> createRedirectLinkUsingPOST createRedirectLinkUsingPOSTWithHttpInfo(request)

Create an Affiliate Link

Creates a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        CreateOrPatchAffiliateLinkRequest request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
        try {
            ApiResponse<AffiliateLink> response = apiInstance.createRedirectLinkUsingPOSTWithHttpInfo(request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#createRedirectLinkUsingPOST");
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
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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


## deleteAffiliateCommissionProgramUsingDELETE

> void deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            apiInstance.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgramUsingDELETE");
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
| **commissionProgramId** | **String**| commission_program_id | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteAffiliateCommissionProgramUsingDELETE deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            ApiResponse<Void> response = apiInstance.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateCommissionProgramUsingDELETE");
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
| **commissionProgramId** | **String**| commission_program_id | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## deleteAffiliateUsingDELETE

> void deleteAffiliateUsingDELETE(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            apiInstance.deleteAffiliateUsingDELETE(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateUsingDELETE");
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
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## deleteAffiliateUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteAffiliateUsingDELETE deleteAffiliateUsingDELETEWithHttpInfo(id)

Delete Affiliate

Deletes the specified Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<Void> response = apiInstance.deleteAffiliateUsingDELETEWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteAffiliateUsingDELETE");
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
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## deleteRedirectLinkUsingDELETE

> void deleteRedirectLinkUsingDELETE(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            apiInstance.deleteRedirectLinkUsingDELETE(redirectId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLinkUsingDELETE");
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
| **redirectId** | **String**| redirect_id | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

## deleteRedirectLinkUsingDELETEWithHttpInfo

> ApiResponse<Void> deleteRedirectLinkUsingDELETE deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            ApiResponse<Void> response = apiInstance.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#deleteRedirectLinkUsingDELETE");
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
| **redirectId** | **String**| redirect_id | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getAffiliateCommissionTotalUsingGET

> AffiliateCommissionEarned getAffiliateCommissionTotalUsingGET(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        try {
            AffiliateCommissionEarned result = apiInstance.getAffiliateCommissionTotalUsingGET(affiliateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotalUsingGET");
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
| **affiliateId** | **String**| affiliate_id | |

### Return type

[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)


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

## getAffiliateCommissionTotalUsingGETWithHttpInfo

> ApiResponse<AffiliateCommissionEarned> getAffiliateCommissionTotalUsingGET getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        try {
            ApiResponse<AffiliateCommissionEarned> response = apiInstance.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionTotalUsingGET");
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
| **affiliateId** | **String**| affiliate_id | |

### Return type

ApiResponse<[**AffiliateCommissionEarned**](AffiliateCommissionEarned.md)>


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


## getAffiliateCommissionsUsingGET

> ListAffiliateCommissionResponse getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateCommissionResponse result = apiInstance.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionsUsingGET");
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
| **affiliateId** | **String**| affiliate_id | |
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)


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

## getAffiliateCommissionsUsingGETWithHttpInfo

> ApiResponse<ListAffiliateCommissionResponse> getAffiliateCommissionsUsingGET getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate&#39;s Commissions and Clawbacks

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String affiliateId = "affiliateId_example"; // String | affiliate_id
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateCommissionResponse> response = apiInstance.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCommissionsUsingGET");
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
| **affiliateId** | **String**| affiliate_id | |
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateCommissionResponse**](ListAffiliateCommissionResponse.md)>


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


## getAffiliateCustomFieldsUsingGET

> ObjectModel getAffiliateCustomFieldsUsingGET()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        try {
            ObjectModel result = apiInstance.getAffiliateCustomFieldsUsingGET();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCustomFieldsUsingGET");
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

## getAffiliateCustomFieldsUsingGETWithHttpInfo

> ApiResponse<ObjectModel> getAffiliateCustomFieldsUsingGET getAffiliateCustomFieldsUsingGETWithHttpInfo()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        try {
            ApiResponse<ObjectModel> response = apiInstance.getAffiliateCustomFieldsUsingGETWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateCustomFieldsUsingGET");
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


## getAffiliateUsingGET1

> RestAffiliate getAffiliateUsingGET1(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            RestAffiliate result = apiInstance.getAffiliateUsingGET1(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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

[**RestAffiliate**](RestAffiliate.md)


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

## getAffiliateUsingGET1WithHttpInfo

> ApiResponse<RestAffiliate> getAffiliateUsingGET1 getAffiliateUsingGET1WithHttpInfo(id)

Retrieve an Affiliate

Retrieves a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        try {
            ApiResponse<RestAffiliate> response = apiInstance.getAffiliateUsingGET1WithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getAffiliateUsingGET1");
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

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## getCommissionProgramUsingGET

> AffiliateProgramV2 getCommissionProgramUsingGET(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            AffiliateProgramV2 result = apiInstance.getCommissionProgramUsingGET(commissionProgramId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgramUsingGET");
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
| **commissionProgramId** | **String**| commission_program_id | |

### Return type

[**AffiliateProgramV2**](AffiliateProgramV2.md)


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

## getCommissionProgramUsingGETWithHttpInfo

> ApiResponse<AffiliateProgramV2> getCommissionProgramUsingGET getCommissionProgramUsingGETWithHttpInfo(commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        try {
            ApiResponse<AffiliateProgramV2> response = apiInstance.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getCommissionProgramUsingGET");
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
| **commissionProgramId** | **String**| commission_program_id | |

### Return type

ApiResponse<[**AffiliateProgramV2**](AffiliateProgramV2.md)>


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


## getRedirectLinkUsingGET

> AffiliateLink getRedirectLinkUsingGET(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            AffiliateLink result = apiInstance.getRedirectLinkUsingGET(redirectId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLinkUsingGET");
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
| **redirectId** | **String**| redirect_id | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## getRedirectLinkUsingGETWithHttpInfo

> ApiResponse<AffiliateLink> getRedirectLinkUsingGET getRedirectLinkUsingGETWithHttpInfo(redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        try {
            ApiResponse<AffiliateLink> response = apiInstance.getRedirectLinkUsingGETWithHttpInfo(redirectId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#getRedirectLinkUsingGET");
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
| **redirectId** | **String**| redirect_id | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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


## listAffiliateCommissionProgramsUsingGET

> ListAffiliateCommissionProgramsResponse listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateCommissionProgramsResponse result = apiInstance.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionProgramsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)


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

## listAffiliateCommissionProgramsUsingGETWithHttpInfo

> ApiResponse<ListAffiliateCommissionProgramsResponse> listAffiliateCommissionProgramsUsingGET listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateCommissionProgramsUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateCommissionProgramsResponse**](ListAffiliateCommissionProgramsResponse.md)>


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


## listAffiliateLinksUsingGET

> ListAffiliateLinksResponse listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateLinksResponse result = apiInstance.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinksUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)


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

## listAffiliateLinksUsingGETWithHttpInfo

> ApiResponse<ListAffiliateLinksResponse> listAffiliateLinksUsingGET listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateLinksResponse> response = apiInstance.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listAffiliateLinksUsingGET");
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
| **filter** | **String**| Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional] |
| **orderBy** | **String**| Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateLinksResponse**](ListAffiliateLinksResponse.md)>


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


## listSummariesUsingGET1

> ListAffiliateSummariesResponse listSummariesUsingGET1(filter, orderBy, pageSize, pageToken)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ListAffiliateSummariesResponse result = apiInstance.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummariesUsingGET1");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)


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

## listSummariesUsingGET1WithHttpInfo

> ApiResponse<ListAffiliateSummariesResponse> listSummariesUsingGET1 listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String filter = "filter_example"; // String | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
        String orderBy = "orderBy_example"; // String | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
        Integer pageSize = 0; // Integer | Total number of items to return per page
        String pageToken = "pageToken_example"; // String | Page token
        try {
            ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#listSummariesUsingGET1");
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
| **filter** | **String**| Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional] |
| **orderBy** | **String**| Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional] |
| **pageSize** | **Integer**| Total number of items to return per page | [optional] |
| **pageToken** | **String**| Page token | [optional] |

### Return type

ApiResponse<[**ListAffiliateSummariesResponse**](ListAffiliateSummariesResponse.md)>


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


## patchCommissionProgramUsingPATCH

> AffiliateCommissionProgramResponse patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        PatchCommissionProgramRequest patchCommissionProgramRequest = new PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            AffiliateCommissionProgramResponse result = apiInstance.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

### Return type

[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)


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

## patchCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<AffiliateCommissionProgramResponse> patchCommissionProgramUsingPATCH patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask)

Update a Affiliate Commission Program

Updates the properties of an Affiliate Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        PatchCommissionProgramRequest patchCommissionProgramRequest = new PatchCommissionProgramRequest(); // PatchCommissionProgramRequest | patchCommissionProgramRequest
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **patchCommissionProgramRequest** | [**PatchCommissionProgramRequest**](PatchCommissionProgramRequest.md)| patchCommissionProgramRequest | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: name, notes, priority] |

### Return type

ApiResponse<[**AffiliateCommissionProgramResponse**](AffiliateCommissionProgramResponse.md)>


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


## patchDefaultCommissionProgramUsingPATCH

> SetDefaultCommissionProgramResponse patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchDefaultCommissionProgramRequest patchDefaultCommissionProgramRequest = new PatchDefaultCommissionProgramRequest(); // PatchDefaultCommissionProgramRequest | Values of the default Commission Program
        try {
            SetDefaultCommissionProgramResponse result = apiInstance.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchDefaultCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest**](PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] |

### Return type

[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)


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

## patchDefaultCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<SetDefaultCommissionProgramResponse> patchDefaultCommissionProgramUsingPATCH patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest)

Update a Default Commission Program

Updates a Default Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchDefaultCommissionProgramRequest patchDefaultCommissionProgramRequest = new PatchDefaultCommissionProgramRequest(); // PatchDefaultCommissionProgramRequest | Values of the default Commission Program
        try {
            ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchDefaultCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest**](PatchDefaultCommissionProgramRequest.md)| Values of the default Commission Program | [optional] |

### Return type

ApiResponse<[**SetDefaultCommissionProgramResponse**](SetDefaultCommissionProgramResponse.md)>


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


## patchProductCommissionProgramUsingPATCH

> ProductCommissionProgram patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchProductCommissionProgramRequest patchProductCommissionProgramRequest = new PatchProductCommissionProgramRequest(); // PatchProductCommissionProgramRequest | Values of the product Commission Program
        try {
            ProductCommissionProgram result = apiInstance.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchProductCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest**](PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] |

### Return type

[**ProductCommissionProgram**](ProductCommissionProgram.md)


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

## patchProductCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<ProductCommissionProgram> patchProductCommissionProgramUsingPATCH patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest)

Update a Product Commission Program

Updates a Product Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchProductCommissionProgramRequest patchProductCommissionProgramRequest = new PatchProductCommissionProgramRequest(); // PatchProductCommissionProgramRequest | Values of the product Commission Program
        try {
            ApiResponse<ProductCommissionProgram> response = apiInstance.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchProductCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest**](PatchProductCommissionProgramRequest.md)| Values of the product Commission Program | [optional] |

### Return type

ApiResponse<[**ProductCommissionProgram**](ProductCommissionProgram.md)>


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


## patchSubscriptionCommissionProgramUsingPATCH

> SubscriptionCommissionProgram patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchSubscriptionCommissionProgramRequest patchSubscriptionCommissionProgramRequest = new PatchSubscriptionCommissionProgramRequest(); // PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
        try {
            SubscriptionCommissionProgram result = apiInstance.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchSubscriptionCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest**](PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] |

### Return type

[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)


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

## patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo

> ApiResponse<SubscriptionCommissionProgram> patchSubscriptionCommissionProgramUsingPATCH patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionProgramId = "commissionProgramId_example"; // String | commission_program_id
        List<String> updateMask = Arrays.asList(); // List<String> | update_mask
        PatchSubscriptionCommissionProgramRequest patchSubscriptionCommissionProgramRequest = new PatchSubscriptionCommissionProgramRequest(); // PatchSubscriptionCommissionProgramRequest | Values of the subscription Commission Program
        try {
            ApiResponse<SubscriptionCommissionProgram> response = apiInstance.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#patchSubscriptionCommissionProgramUsingPATCH");
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
| **commissionProgramId** | **String**| commission_program_id | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| update_mask | [optional] |
| **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest**](PatchSubscriptionCommissionProgramRequest.md)| Values of the subscription Commission Program | [optional] |

### Return type

ApiResponse<[**SubscriptionCommissionProgram**](SubscriptionCommissionProgram.md)>


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


## removeAffiliateFromProgramUsingPOST

> void removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateRemoveFromProgramRequest removeFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
        try {
            apiInstance.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgramUsingPOST");
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
| **removeFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## removeAffiliateFromProgramUsingPOSTWithHttpInfo

> ApiResponse<Void> removeAffiliateFromProgramUsingPOST removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        AffiliateRemoveFromProgramRequest removeFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest
        try {
            ApiResponse<Void> response = apiInstance.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeAffiliateFromProgramUsingPOST");
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
| **removeFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md)| removeFromProgramRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## removeSubscriptionPlanCommissionFromCommissionsUsingPOST

> void removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
        try {
            apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
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
| **commissionId** | **String**| commission_id | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

## removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo

> ApiResponse<Void> removeSubscriptionPlanCommissionFromCommissionsUsingPOST removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String commissionId = "commissionId_example"; // String | commission_id
        DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest
        try {
            ApiResponse<Void> response = apiInstance.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
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
| **commissionId** | **String**| commission_id | |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md)| deleteSubscriptionPlanCommissionRequest | |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |


## updateAffiliateCustomFieldUsingPATCH

> CustomFieldMetaData updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            CustomFieldMetaData result = apiInstance.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateCustomFieldUsingPATCH");
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
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

[**CustomFieldMetaData**](CustomFieldMetaData.md)


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

## updateAffiliateCustomFieldUsingPATCHWithHttpInfo

> ApiResponse<CustomFieldMetaData> updateAffiliateCustomFieldUsingPATCH updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String customFieldId = "customFieldId_example"; // String | custom_field_id
        UpdateCustomFieldMetaDataRequest request = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
        List<String> updateMask = Arrays.asList(); // List<String> | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
        try {
            ApiResponse<CustomFieldMetaData> response = apiInstance.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateCustomFieldUsingPATCH");
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
| **customFieldId** | **String**| custom_field_id | |
| **request** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md)| request | |
| **updateMask** | [**List&lt;String&gt;**](String.md)| An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional] [enum: group_id, label, options] |

### Return type

ApiResponse<[**CustomFieldMetaData**](CustomFieldMetaData.md)>


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


## updateAffiliateUsingPATCH

> RestAffiliate updateAffiliateUsingPATCH(id, patchAffiliate)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAffiliateRequest patchAffiliate = new PatchAffiliateRequest(); // PatchAffiliateRequest | Affiliate request to patch
        try {
            RestAffiliate result = apiInstance.updateAffiliateUsingPATCH(id, patchAffiliate);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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
| **patchAffiliate** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

### Return type

[**RestAffiliate**](RestAffiliate.md)


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

## updateAffiliateUsingPATCHWithHttpInfo

> ApiResponse<RestAffiliate> updateAffiliateUsingPATCH updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate)

Update an Affiliate

Updates a single Affiliate

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String id = "id_example"; // String | id
        PatchAffiliateRequest patchAffiliate = new PatchAffiliateRequest(); // PatchAffiliateRequest | Affiliate request to patch
        try {
            ApiResponse<RestAffiliate> response = apiInstance.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateAffiliateUsingPATCH");
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
| **patchAffiliate** | [**PatchAffiliateRequest**](PatchAffiliateRequest.md)| Affiliate request to patch | [optional] |

### Return type

ApiResponse<[**RestAffiliate**](RestAffiliate.md)>


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


## updateRedirectLinkUsingPATCH

> AffiliateLink updateRedirectLinkUsingPATCH(redirectId, request)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        CreateOrPatchAffiliateLinkRequest request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
        try {
            AffiliateLink result = apiInstance.updateRedirectLinkUsingPATCH(redirectId, request);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLinkUsingPATCH");
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
| **redirectId** | **String**| redirect_id | |
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

[**AffiliateLink**](AffiliateLink.md)


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

## updateRedirectLinkUsingPATCHWithHttpInfo

> ApiResponse<AffiliateLink> updateRedirectLinkUsingPATCH updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request)

Update an Affiliate Link

Updates an Affiliate Link

### Example

```java
// Import classes:
import com.keap.sdk.sdk.ApiClient;
import com.keap.sdk.sdk.ApiException;
import com.keap.sdk.sdk.ApiResponse;
import com.keap.sdk.sdk.Configuration;
import com.keap.sdk.sdk.models.*;
import com.keap.sdk.sdk.client.AffiliateApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.infusionsoft.com/crm/rest/app");

        AffiliateApi apiInstance = new AffiliateApi(defaultClient);
        String redirectId = "redirectId_example"; // String | redirect_id
        CreateOrPatchAffiliateLinkRequest request = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request
        try {
            ApiResponse<AffiliateLink> response = apiInstance.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AffiliateApi#updateRedirectLinkUsingPATCH");
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
| **redirectId** | **String**| redirect_id | |
| **request** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md)| request | |

### Return type

ApiResponse<[**AffiliateLink**](AffiliateLink.md)>


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

