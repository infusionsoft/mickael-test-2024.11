# Keap.Sdk.Core.Api.PreReleaseApi

All URIs are relative to *https://api.infusionsoft.com/crm/rest/app*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddAffiliateToProgramUsingPOST**](PreReleaseApi.md#addaffiliatetoprogramusingpost) | **POST** /v2/affiliates/{id}:assignToProgram | Assign Affiliate to Commission program |
| [**AddCommissionProgramUsingPOST**](PreReleaseApi.md#addcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms | Create an Affiliate Commission Program |
| [**AssignProductCommissionProgramUsingPOST**](PreReleaseApi.md#assignproductcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id} | Assign a Product Commission Program |
| [**AssignSubscriptionCommissionProgramUsingPOST**](PreReleaseApi.md#assignsubscriptioncommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id} | Assign a Subscription Commission Program |
| [**CancelSubscriptionUsingPOST**](PreReleaseApi.md#cancelsubscriptionusingpost) | **POST** /v2/subscriptions/{subscription_id}:deactivate | Cancel Subscription |
| [**CreateAffiliateCustomFieldUsingPOST**](PreReleaseApi.md#createaffiliatecustomfieldusingpost) | **POST** /v2/affiliates/model/customFields | Create an Affiliate Custom Field |
| [**CreateDefaultCommissionProgramUsingPOST**](PreReleaseApi.md#createdefaultcommissionprogramusingpost) | **POST** /v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id} | Create a Default Commission Program |
| [**CreateDiscountUsingPOST**](PreReleaseApi.md#creatediscountusingpost) | **POST** /v2/discounts/productCategories | Create a Category Discount |
| [**CreateDiscountUsingPOST1**](PreReleaseApi.md#creatediscountusingpost1) | **POST** /v2/discounts/shipping | Create a Shipping Discount |
| [**CreateFunnelIntegrationUsingPOST**](PreReleaseApi.md#createfunnelintegrationusingpost) | **POST** /v2/funnelIntegration | Create Funnel Integrations into the app. |
| [**CreateIntegrationTriggerEventUsingPOST**](PreReleaseApi.md#createintegrationtriggereventusingpost) | **POST** /v2/funnelIntegration/trigger | Achieve Funnel Integration Trigger Goal |
| [**CreateLeadSourceUsingPOST**](PreReleaseApi.md#createleadsourceusingpost) | **POST** /v2/leadsources | Create a Lead Source |
| [**CreateNoteCustomFieldUsingPOST1**](PreReleaseApi.md#createnotecustomfieldusingpost1) | **POST** /v2/notes/model/customFields | Create a Custom Field |
| [**CreateOpportunityCustomFieldsUsingPOST**](PreReleaseApi.md#createopportunitycustomfieldsusingpost) | **POST** /v2/opportunities/model/customFields | Create an Opportunity Custom Field |
| [**CreateOpportunityStageUsingPOST**](PreReleaseApi.md#createopportunitystageusingpost) | **POST** /v2/opportunities/stages | Create an Opportunity Stage |
| [**CreateOpportunityUsingPOST1**](PreReleaseApi.md#createopportunityusingpost1) | **POST** /v2/opportunities | Create an Opportunity |
| [**CreateOrderCustomFieldUsingPOST**](PreReleaseApi.md#createordercustomfieldusingpost) | **POST** /v2/orders/model/customFields | Create an Order&#39;s Custom Field |
| [**CreateOrderItemsOnOrderUsingPOST1**](PreReleaseApi.md#createorderitemsonorderusingpost1) | **POST** /v2/orders/{order_id}/items | Create an Order Item |
| [**CreateOrderTotalDiscountUsingPOST**](PreReleaseApi.md#createordertotaldiscountusingpost) | **POST** /v2/discounts/orderTotals | Create an Order Total Discount |
| [**CreateOrderUsingPOST1**](PreReleaseApi.md#createorderusingpost1) | **POST** /v2/orders | Create an Order |
| [**CreateProductUsingPOST1**](PreReleaseApi.md#createproductusingpost1) | **POST** /v2/products | Create a Product |
| [**CreateRedirectLinkUsingPOST**](PreReleaseApi.md#createredirectlinkusingpost) | **POST** /v2/affiliates/redirects | Create an Affiliate Link |
| [**CreateReferralUsingPOST**](PreReleaseApi.md#createreferralusingpost) | **POST** /v2/referrals | Create a Referral |
| [**CreateSubscriptionCustomFieldUsingPOST**](PreReleaseApi.md#createsubscriptioncustomfieldusingpost) | **POST** /v2/subscriptions/model/customFields | Create a Subscription&#39;s Custom Field |
| [**CreateTaskCustomFieldUsingPOST1**](PreReleaseApi.md#createtaskcustomfieldusingpost1) | **POST** /v2/tasks/model/customFields | Create a Custom Field |
| [**CreateTaskUsingPOST1**](PreReleaseApi.md#createtaskusingpost1) | **POST** /v2/tasks | Create a Task |
| [**CreateUserUsingPOST1**](PreReleaseApi.md#createuserusingpost1) | **POST** /v2/users | Create a User |
| [**DeleteAffiliateCommissionProgramUsingDELETE**](PreReleaseApi.md#deleteaffiliatecommissionprogramusingdelete) | **DELETE** /v2/affiliates/commissionPrograms/{commission_program_id} | Delete a Commission Program |
| [**DeleteAffiliateUsingDELETE**](PreReleaseApi.md#deleteaffiliateusingdelete) | **DELETE** /v2/affiliates/{id} | Delete Affiliate |
| [**DeleteDiscountUsingDELETE**](PreReleaseApi.md#deletediscountusingdelete) | **DELETE** /v2/discounts/productCategories/{discount_id} | Delete a Category Discount |
| [**DeleteDiscountUsingDELETE1**](PreReleaseApi.md#deletediscountusingdelete1) | **DELETE** /v2/discounts/freeTrials/{discount_id} | Delete a Free Trial Discount |
| [**DeleteDiscountUsingDELETE2**](PreReleaseApi.md#deletediscountusingdelete2) | **DELETE** /v2/discounts/shipping/{discount_id} | Delete a Shipping Discount |
| [**DeleteFunnelIntegrationUsingPOST**](PreReleaseApi.md#deletefunnelintegrationusingpost) | **POST** /v2/funnelIntegration/uninstall | Deletes Funnel Integrations from the app. |
| [**DeleteOpportunityStageUsingDELETE**](PreReleaseApi.md#deleteopportunitystageusingdelete) | **DELETE** /v2/opportunities/stages/{stage_id} | Delete an Opportunity Stage |
| [**DeleteOpportunityUsingDELETE**](PreReleaseApi.md#deleteopportunityusingdelete) | **DELETE** /v2/opportunities/{opportunity_id} | Delete an Opportunity |
| [**DeleteOrderCustomFieldUsingDELETE**](PreReleaseApi.md#deleteordercustomfieldusingdelete) | **DELETE** /v2/orders/model/customFields/{custom_field_id} | Delete an Order&#39;s Custom Field |
| [**DeleteOrderTotalDiscountUsingDELETE**](PreReleaseApi.md#deleteordertotaldiscountusingdelete) | **DELETE** /v2/discounts/orderTotals/{discount_id} | Delete an Order Total Discount |
| [**DeleteOrderUsingDELETE1**](PreReleaseApi.md#deleteorderusingdelete1) | **DELETE** /v2/orders/{order_id} | Delete an Order |
| [**DeleteProductUsingDELETE1**](PreReleaseApi.md#deleteproductusingdelete1) | **DELETE** /v2/products/{product_id} | Delete a Product |
| [**DeleteRedirectLinkUsingDELETE**](PreReleaseApi.md#deleteredirectlinkusingdelete) | **DELETE** /v2/affiliates/redirects/{redirect_id} | Delete an Affiliate Link |
| [**DeleteTaskCustomFieldUsingDELETE**](PreReleaseApi.md#deletetaskcustomfieldusingdelete) | **DELETE** /v2/tasks/model/customFields/{custom_field_id} | Delete a Custom Field |
| [**DeleteTaskUsingDELETE1**](PreReleaseApi.md#deletetaskusingdelete1) | **DELETE** /v2/tasks/{task_id} | Delete a Task |
| [**GetAffiliateCommissionTotalUsingGET**](PreReleaseApi.md#getaffiliatecommissiontotalusingget) | **GET** /v2/affiliates/{affiliate_id}/commissionTotal | Retrieve Affiliate Commission Earned and View LedgerURl for portal |
| [**GetAffiliateCommissionsUsingGET**](PreReleaseApi.md#getaffiliatecommissionsusingget) | **GET** /v2/affiliates/{affiliate_id}:commissions | Retrieve Affiliate Commission and Clawbacks |
| [**GetAffiliateCustomFieldsUsingGET**](PreReleaseApi.md#getaffiliatecustomfieldsusingget) | **GET** /v2/affiliates/model | Retrieve Affiliate Model |
| [**GetCommissionProgramUsingGET**](PreReleaseApi.md#getcommissionprogramusingget) | **GET** /v2/affiliates/commissionPrograms/{commission_program_id} | Retrieve a Commission Program |
| [**GetContactsBySearchTermUsingGET**](PreReleaseApi.md#getcontactsbysearchtermusingget) | **GET** /v2/contacts:search | Search for Contacts |
| [**GetDiscountUsingGET**](PreReleaseApi.md#getdiscountusingget) | **GET** /v2/discounts/productCategories/{discount_id} | Retrieve a Category Discount |
| [**GetDiscountUsingGET1**](PreReleaseApi.md#getdiscountusingget1) | **GET** /v2/discounts/shipping/{discount_id} | Retrieve a Shipping Discount |
| [**GetOpportunityStageUsingGET**](PreReleaseApi.md#getopportunitystageusingget) | **GET** /v2/opportunities/stages/{stage_id} | Retrieve an Opportunity Stage |
| [**GetOpportunityUsingGET1**](PreReleaseApi.md#getopportunityusingget1) | **GET** /v2/opportunities/{opportunity_id} | Retrieve a Opportunity |
| [**GetOrderTotalDiscountUsingGET**](PreReleaseApi.md#getordertotaldiscountusingget) | **GET** /v2/discounts/orderTotals/{discount_id} | Retrieve an Order Total Discount |
| [**GetOrderUsingGET1**](PreReleaseApi.md#getorderusingget1) | **GET** /v2/orders/{order_id} | Retrieve an Order |
| [**GetProductUsingGET**](PreReleaseApi.md#getproductusingget) | **GET** /v2/products/{product_id} | Get a Product |
| [**GetRedirectLinkUsingGET**](PreReleaseApi.md#getredirectlinkusingget) | **GET** /v2/affiliates/redirects/{redirect_id} | Retrieve an Affiliate Link |
| [**GetTaskUsingGET1**](PreReleaseApi.md#gettaskusingget1) | **GET** /v2/tasks/{task_id} | Retrieve a Task |
| [**GetUserByIdUsingGET**](PreReleaseApi.md#getuserbyidusingget) | **GET** /v2/users/{user_id} | Get User |
| [**GetUserInfoUsingGET1**](PreReleaseApi.md#getuserinfousingget1) | **GET** /v2/oauth/connect/userinfo | Retrieve User Info |
| [**GetUserSignatureUsingGET1**](PreReleaseApi.md#getusersignatureusingget1) | **GET** /v2/users/{user_id}/signature | Get User email signature |
| [**ListAffiliateCommissionProgramsUsingGET**](PreReleaseApi.md#listaffiliatecommissionprogramsusingget) | **GET** /v2/affiliates/commissionPrograms | List Affiliate Commission Programs |
| [**ListAffiliateLinksUsingGET**](PreReleaseApi.md#listaffiliatelinksusingget) | **GET** /v2/affiliates/redirects | List Affiliate Links |
| [**ListCountriesUsingGET2**](PreReleaseApi.md#listcountriesusingget2) | **GET** /v2/locales/countries | List Countries |
| [**ListDiscountsUsingGET**](PreReleaseApi.md#listdiscountsusingget) | **GET** /v2/discounts/shipping | List all Shipping Discounts |
| [**ListLandingPagesUsingGET**](PreReleaseApi.md#listlandingpagesusingget) | **GET** /v2/landingpages | List Landing Pages |
| [**ListLeadSourcesUsingGET**](PreReleaseApi.md#listleadsourcesusingget) | **GET** /v2/leadsources | List Lead Sources |
| [**ListMerchantsUsingGET**](PreReleaseApi.md#listmerchantsusingget) | **GET** /v2/merchants | List Merchant accounts |
| [**ListNoteTemplatesUsingGET**](PreReleaseApi.md#listnotetemplatesusingget) | **GET** /v2/notes/templates | Retrieve Note Templates |
| [**ListOpportunitiesUsingGET1**](PreReleaseApi.md#listopportunitiesusingget1) | **GET** /v2/opportunities | List Opportunities |
| [**ListOpportunityStagesUsingGET**](PreReleaseApi.md#listopportunitystagesusingget) | **GET** /v2/opportunities/stages | List of Opportunity Stages |
| [**ListOrderPaymentsUsingGET1**](PreReleaseApi.md#listorderpaymentsusingget1) | **GET** /v2/orders/{order_id}/payments | Retrieve Order Payments |
| [**ListOrderTotalDiscountsUsingGET**](PreReleaseApi.md#listordertotaldiscountsusingget) | **GET** /v2/discounts/orderTotals | List all Order Total Discounts |
| [**ListOrdersUsingGET1**](PreReleaseApi.md#listordersusingget1) | **GET** /v2/orders | List orders |
| [**ListProductsUsingGET1**](PreReleaseApi.md#listproductsusingget1) | **GET** /v2/products | List Products |
| [**ListProvincesForCountryUsingGET**](PreReleaseApi.md#listprovincesforcountryusingget) | **GET** /v2/locales/countries/{country_code}/provinces | List a Country&#39;s Provinces |
| [**ListShippingMethodsUsingGET**](PreReleaseApi.md#listshippingmethodsusingget) | **GET** /v2/shipping | List Shipping methods |
| [**ListSubscriptionPlansUsingGET**](PreReleaseApi.md#listsubscriptionplansusingget) | **GET** /v2/subscriptionPlans | List Subscription Plans |
| [**ListSubscriptionsUsingGET1**](PreReleaseApi.md#listsubscriptionsusingget1) | **GET** /v2/subscriptions | List Subscriptions |
| [**ListSummariesUsingGET1**](PreReleaseApi.md#listsummariesusingget1) | **GET** /v2/affiliates/summaries | List Affiliate Summaries |
| [**ListTasksUsingGET1**](PreReleaseApi.md#listtasksusingget1) | **GET** /v2/tasks | List Tasks |
| [**ListUsersUsingGET1**](PreReleaseApi.md#listusersusingget1) | **GET** /v2/users | List Users |
| [**PatchDefaultCommissionProgramUsingPATCH**](PreReleaseApi.md#patchdefaultcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id} | Update a Default Commission Program |
| [**PatchOrderUsingPATCH**](PreReleaseApi.md#patchorderusingpatch) | **PATCH** /v2/orders/{order_id} | Update an Order |
| [**PatchProductCommissionProgramUsingPATCH**](PreReleaseApi.md#patchproductcommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id} | Update a Product Commission Program |
| [**PatchSubscriptionCommissionProgramUsingPATCH**](PreReleaseApi.md#patchsubscriptioncommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id} | Update a Subscription Commission Program |
| [**PatchTaskUsingPATCH**](PreReleaseApi.md#patchtaskusingpatch) | **PATCH** /v2/tasks/{task_id} | Update a Task |
| [**PatchUserUsingPATCH**](PreReleaseApi.md#patchuserusingpatch) | **PATCH** /v2/users/{user_id} | Update User |
| [**RemoveAffiliateFromProgramUsingPOST**](PreReleaseApi.md#removeaffiliatefromprogramusingpost) | **POST** /v2/affiliates/{id}:removeFromProgram | Remove an Affiliate from a Commission Program |
| [**RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST**](PreReleaseApi.md#removesubscriptionplancommissionfromcommissionsusingpost) | **POST** /v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission | Remove a Subscription from a Commission Program |
| [**RetrieveNoteModelUsingGET1**](PreReleaseApi.md#retrievenotemodelusingget1) | **GET** /v2/notes/model | Retrieve Note Model |
| [**RetrieveOrderCustomFieldModelUsingGET**](PreReleaseApi.md#retrieveordercustomfieldmodelusingget) | **GET** /v2/orders/model | Retrieve an Order&#39;s Custom Field Model |
| [**RetrieveSubscriptionCustomFieldModelUsingGET**](PreReleaseApi.md#retrievesubscriptioncustomfieldmodelusingget) | **GET** /v2/subscriptions/model | Retrieve Subscription&#39;s Custom Field Model |
| [**RetrieveTaskModelUsingGET1**](PreReleaseApi.md#retrievetaskmodelusingget1) | **GET** /v2/tasks/model | Retrieve Task Model |
| [**UpdateAffiliateCustomFieldUsingPATCH**](PreReleaseApi.md#updateaffiliatecustomfieldusingpatch) | **PATCH** /v2/affiliates/model/customFields/{custom_field_id} | Update a Custom Field |
| [**UpdateDiscountUsingPATCH**](PreReleaseApi.md#updatediscountusingpatch) | **PATCH** /v2/discounts/productCategories/{discount_id} | Update a Category Discount |
| [**UpdateDiscountUsingPATCH1**](PreReleaseApi.md#updatediscountusingpatch1) | **PATCH** /v2/discounts/shipping/{discount_id} | Update a Shipping Discount |
| [**UpdateNotesCustomFieldUsingPATCH**](PreReleaseApi.md#updatenotescustomfieldusingpatch) | **PATCH** /v2/notes/model/customFields/{custom_field_id} | Update a Custom Field |
| [**UpdateOpportunityCustomFieldUsingPATCH**](PreReleaseApi.md#updateopportunitycustomfieldusingpatch) | **PATCH** /v2/opportunities/model/customFields/{custom_field_id} | Update a Opportunity&#39;s Custom Field |
| [**UpdateOpportunityStageUsingPATCH**](PreReleaseApi.md#updateopportunitystageusingpatch) | **PATCH** /v2/opportunities/stages/{stage_id} | Update an Opportunity Stage |
| [**UpdateOpportunityUsingPATCH**](PreReleaseApi.md#updateopportunityusingpatch) | **PATCH** /v2/opportunities/{opportunity_id} | Update an opportunity |
| [**UpdateOrderCustomFieldUsingPATCH**](PreReleaseApi.md#updateordercustomfieldusingpatch) | **PATCH** /v2/orders/model/customFields/{custom_field_id} | Update an Order&#39;s Custom Field |
| [**UpdateOrderTotalDiscountUsingPATCH**](PreReleaseApi.md#updateordertotaldiscountusingpatch) | **PATCH** /v2/discounts/orderTotals/{discount_id} | Update an Order Total Discount |
| [**UpdateRedirectLinkUsingPATCH**](PreReleaseApi.md#updateredirectlinkusingpatch) | **PATCH** /v2/affiliates/redirects/{redirect_id} | Update an Affiliate Link |
| [**UpdateSubscriptionCustomFieldUsingPATCH**](PreReleaseApi.md#updatesubscriptioncustomfieldusingpatch) | **PATCH** /v2/subscriptions/model/customFields/{custom_field_id} | Update a Subscription&#39;s Custom Field |
| [**UpdateTaskCustomFieldUsingPATCH**](PreReleaseApi.md#updatetaskcustomfieldusingpatch) | **PATCH** /v2/tasks/model/customFields/{custom_field_id} | Update a Task&#39;s Custom Field |

<a id="addaffiliatetoprogramusingpost"></a>
# **AddAffiliateToProgramUsingPOST**
> void AddAffiliateToProgramUsingPOST (string id, AffiliateAddToProgramRequest affiliateAddToProgramRequest)

Assign Affiliate to Commission program

Assigns an Affiliate to Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AddAffiliateToProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var id = "id_example";  // string | id
            var affiliateAddToProgramRequest = new AffiliateAddToProgramRequest(); // AffiliateAddToProgramRequest | affiliateAddToProgramRequest

            try
            {
                // Assign Affiliate to Commission program
                apiInstance.AddAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.AddAffiliateToProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddAffiliateToProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign Affiliate to Commission program
    apiInstance.AddAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.AddAffiliateToProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **affiliateAddToProgramRequest** | [**AffiliateAddToProgramRequest**](AffiliateAddToProgramRequest.md) | affiliateAddToProgramRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="addcommissionprogramusingpost"></a>
# **AddCommissionProgramUsingPOST**
> AffiliateCommissionProgramResponse AddCommissionProgramUsingPOST (CreateCommissionProgramRequest? createCommissionProgramRequest = null)

Create an Affiliate Commission Program

Creates an Affiliate Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AddCommissionProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCommissionProgramRequest = new CreateCommissionProgramRequest?(); // CreateCommissionProgramRequest? | Commission Program to insert (optional) 

            try
            {
                // Create an Affiliate Commission Program
                AffiliateCommissionProgramResponse result = apiInstance.AddCommissionProgramUsingPOST(createCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.AddCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Commission Program
    ApiResponse<AffiliateCommissionProgramResponse> response = apiInstance.AddCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.AddCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCommissionProgramRequest** | [**CreateCommissionProgramRequest?**](CreateCommissionProgramRequest?.md) | Commission Program to insert | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="assignproductcommissionprogramusingpost"></a>
# **AssignProductCommissionProgramUsingPOST**
> ProductCommissionProgram AssignProductCommissionProgramUsingPOST (string commissionProgramId, CreateProductCommissionProgramRequest? createProductCommissionProgramRequest = null)

Assign a Product Commission Program

Assigns a Product Commission Program to a Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AssignProductCommissionProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createProductCommissionProgramRequest = new CreateProductCommissionProgramRequest?(); // CreateProductCommissionProgramRequest? | Product Commission Program (optional) 

            try
            {
                // Assign a Product Commission Program
                ProductCommissionProgram result = apiInstance.AssignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.AssignProductCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignProductCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.AssignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.AssignProductCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createProductCommissionProgramRequest** | [**CreateProductCommissionProgramRequest?**](CreateProductCommissionProgramRequest?.md) | Product Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="assignsubscriptioncommissionprogramusingpost"></a>
# **AssignSubscriptionCommissionProgramUsingPOST**
> SubscriptionCommissionProgram AssignSubscriptionCommissionProgramUsingPOST (string commissionProgramId, CreateSubscriptionCommissionProgramRequest? createSubscriptionCommissionProgramRequest = null)

Assign a Subscription Commission Program

Assigns a Subscription Commission Program to a Subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class AssignSubscriptionCommissionProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createSubscriptionCommissionProgramRequest = new CreateSubscriptionCommissionProgramRequest?(); // CreateSubscriptionCommissionProgramRequest? | Subscription Commission Program (optional) 

            try
            {
                // Assign a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.AssignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.AssignSubscriptionCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Assign a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.AssignSubscriptionCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createSubscriptionCommissionProgramRequest** | [**CreateSubscriptionCommissionProgramRequest?**](CreateSubscriptionCommissionProgramRequest?.md) | Subscription Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="cancelsubscriptionusingpost"></a>
# **CancelSubscriptionUsingPOST**
> void CancelSubscriptionUsingPOST (string subscriptionId, CancelSubscriptionsRequest cancelSubscriptionsRequest)

Cancel Subscription

Cancels the specified subscription

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CancelSubscriptionUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var subscriptionId = "subscriptionId_example";  // string | subscription_id
            var cancelSubscriptionsRequest = new CancelSubscriptionsRequest(); // CancelSubscriptionsRequest | cancelSubscriptionsRequest

            try
            {
                // Cancel Subscription
                apiInstance.CancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CancelSubscriptionUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CancelSubscriptionUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Cancel Subscription
    apiInstance.CancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CancelSubscriptionUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **subscriptionId** | **string** | subscription_id |  |
| **cancelSubscriptionsRequest** | [**CancelSubscriptionsRequest**](CancelSubscriptionsRequest.md) | cancelSubscriptionsRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createaffiliatecustomfieldusingpost"></a>
# **CreateAffiliateCustomFieldUsingPOST**
> CustomFieldMetaData CreateAffiliateCustomFieldUsingPOST (CreateCustomFieldRequest createCustomFieldRequest)

Create an Affiliate Custom Field

Creates a single Affiliate Custom Field

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateAffiliateCustomFieldUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create an Affiliate Custom Field
                CustomFieldMetaData result = apiInstance.CreateAffiliateCustomFieldUsingPOST(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateAffiliateCustomFieldUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateAffiliateCustomFieldUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateAffiliateCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateAffiliateCustomFieldUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createdefaultcommissionprogramusingpost"></a>
# **CreateDefaultCommissionProgramUsingPOST**
> SetDefaultCommissionProgramResponse CreateDefaultCommissionProgramUsingPOST (string commissionProgramId, CreateDefaultCommissionProgramRequest? createDefaultCommissionProgramRequest = null)

Create a Default Commission Program

Creates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateDefaultCommissionProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var createDefaultCommissionProgramRequest = new CreateDefaultCommissionProgramRequest?(); // CreateDefaultCommissionProgramRequest? | Values of the Default Commission Program (optional) 

            try
            {
                // Create a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.CreateDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateDefaultCommissionProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDefaultCommissionProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.CreateDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateDefaultCommissionProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **createDefaultCommissionProgramRequest** | [**CreateDefaultCommissionProgramRequest?**](CreateDefaultCommissionProgramRequest?.md) | Values of the Default Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="creatediscountusingpost"></a>
# **CreateDiscountUsingPOST**
> CategoryDiscount CreateDiscountUsingPOST (CreateUpdateDiscountRequest createUpdateDiscountRequest)

Create a Category Discount

Create a Category Discount.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateDiscountUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request

            try
            {
                // Create a Category Discount
                CategoryDiscount result = apiInstance.CreateDiscountUsingPOST(createUpdateDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateDiscountUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDiscountUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.CreateDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateDiscountUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md) | request |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="creatediscountusingpost1"></a>
# **CreateDiscountUsingPOST1**
> ShippingDiscount CreateDiscountUsingPOST1 (CreateShippingDiscountRequest createShippingDiscountRequest)

Create a Shipping Discount

Creates a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateDiscountUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createShippingDiscountRequest = new CreateShippingDiscountRequest(); // CreateShippingDiscountRequest | request

            try
            {
                // Create a Shipping Discount
                ShippingDiscount result = apiInstance.CreateDiscountUsingPOST1(createShippingDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateDiscountUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDiscountUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.CreateDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateDiscountUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createShippingDiscountRequest** | [**CreateShippingDiscountRequest**](CreateShippingDiscountRequest.md) | request |  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createfunnelintegrationusingpost"></a>
# **CreateFunnelIntegrationUsingPOST**
> void CreateFunnelIntegrationUsingPOST (CreateFunnelIntegrationRequest createFunnelIntegrationRequest)

Create Funnel Integrations into the app.

Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateFunnelIntegrationUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createFunnelIntegrationRequest = new CreateFunnelIntegrationRequest(); // CreateFunnelIntegrationRequest | createFunnelIntegrationRequest

            try
            {
                // Create Funnel Integrations into the app.
                apiInstance.CreateFunnelIntegrationUsingPOST(createFunnelIntegrationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateFunnelIntegrationUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateFunnelIntegrationUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Funnel Integrations into the app.
    apiInstance.CreateFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateFunnelIntegrationUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFunnelIntegrationRequest** | [**CreateFunnelIntegrationRequest**](CreateFunnelIntegrationRequest.md) | createFunnelIntegrationRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createintegrationtriggereventusingpost"></a>
# **CreateIntegrationTriggerEventUsingPOST**
> List&lt;FunnelIntegrationTriggerResultDTO&gt; CreateIntegrationTriggerEventUsingPOST (CreateFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents)

Achieve Funnel Integration Trigger Goal

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateIntegrationTriggerEventUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createFunnelIntegrationTriggerEvents = new CreateFunnelIntegrationTriggerEvents(); // CreateFunnelIntegrationTriggerEvents | createFunnelIntegrationTriggerEvents

            try
            {
                // Achieve Funnel Integration Trigger Goal
                List<FunnelIntegrationTriggerResultDTO> result = apiInstance.CreateIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateIntegrationTriggerEventUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateIntegrationTriggerEventUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Achieve Funnel Integration Trigger Goal
    ApiResponse<List<FunnelIntegrationTriggerResultDTO>> response = apiInstance.CreateIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateIntegrationTriggerEventUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createFunnelIntegrationTriggerEvents** | [**CreateFunnelIntegrationTriggerEvents**](CreateFunnelIntegrationTriggerEvents.md) | createFunnelIntegrationTriggerEvents |  |

### Return type

[**List&lt;FunnelIntegrationTriggerResultDTO&gt;**](FunnelIntegrationTriggerResultDTO.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createleadsourceusingpost"></a>
# **CreateLeadSourceUsingPOST**
> LeadSource CreateLeadSourceUsingPOST (CreateLeadSourceRequest? createLeadSourceRequest = null)

Create a Lead Source

Creates a new Lead Source

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateLeadSourceUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createLeadSourceRequest = new CreateLeadSourceRequest?(); // CreateLeadSourceRequest? | leadsource (optional) 

            try
            {
                // Create a Lead Source
                LeadSource result = apiInstance.CreateLeadSourceUsingPOST(createLeadSourceRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateLeadSourceUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateLeadSourceUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Lead Source
    ApiResponse<LeadSource> response = apiInstance.CreateLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateLeadSourceUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createLeadSourceRequest** | [**CreateLeadSourceRequest?**](CreateLeadSourceRequest?.md) | leadsource | [optional]  |

### Return type

[**LeadSource**](LeadSource.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createnotecustomfieldusingpost1"></a>
# **CreateNoteCustomFieldUsingPOST1**
> CustomFieldMetaData CreateNoteCustomFieldUsingPOST1 (CreateCustomFieldRequest createCustomFieldRequest)

Create a Custom Field

Adds a custom field of the specified type and options to the Note object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateNoteCustomFieldUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Custom Field
                CustomFieldMetaData result = apiInstance.CreateNoteCustomFieldUsingPOST1(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateNoteCustomFieldUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateNoteCustomFieldUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateNoteCustomFieldUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createopportunitycustomfieldsusingpost"></a>
# **CreateOpportunityCustomFieldsUsingPOST**
> CustomFieldMetaData CreateOpportunityCustomFieldsUsingPOST (CreateCustomFieldRequest createCustomFieldRequest)

Create an Opportunity Custom Field

Adds a custom field of the specified type and options to the Opportunity object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityCustomFieldsUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create an Opportunity Custom Field
                CustomFieldMetaData result = apiInstance.CreateOpportunityCustomFieldsUsingPOST(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityCustomFieldsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityCustomFieldsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityCustomFieldsUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createopportunitystageusingpost"></a>
# **CreateOpportunityStageUsingPOST**
> RestOpportunityStage CreateOpportunityStageUsingPOST (CreateOpportunityStageRequest? createOpportunityStageRequest = null)

Create an Opportunity Stage

Creates a new Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityStageUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createOpportunityStageRequest = new CreateOpportunityStageRequest?(); // CreateOpportunityStageRequest? | opportunity (optional) 

            try
            {
                // Create an Opportunity Stage
                RestOpportunityStage result = apiInstance.CreateOpportunityStageUsingPOST(createOpportunityStageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityStageUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityStageUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.CreateOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityStageUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOpportunityStageRequest** | [**CreateOpportunityStageRequest?**](CreateOpportunityStageRequest?.md) | opportunity | [optional]  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createopportunityusingpost1"></a>
# **CreateOpportunityUsingPOST1**
> RestV2Opportunity CreateOpportunityUsingPOST1 (CreateOpportunityRequest? createOpportunityRequest = null)

Create an Opportunity

Creates a new opportunity as the authenticated user.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOpportunityUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createOpportunityRequest = new CreateOpportunityRequest?(); // CreateOpportunityRequest? | opportunity (optional) 

            try
            {
                // Create an Opportunity
                RestV2Opportunity result = apiInstance.CreateOpportunityUsingPOST1(createOpportunityRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOpportunityUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.CreateOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOpportunityUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOpportunityRequest** | [**CreateOpportunityRequest?**](CreateOpportunityRequest?.md) | opportunity | [optional]  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createordercustomfieldusingpost"></a>
# **CreateOrderCustomFieldUsingPOST**
> CustomFieldMetaData CreateOrderCustomFieldUsingPOST (CreateCustomFieldRequest createCustomFieldRequest)

Create an Order's Custom Field

Adds a custom field of the specified type and options to the Order object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOrderCustomFieldUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create an Order's Custom Field
                CustomFieldMetaData result = apiInstance.CreateOrderCustomFieldUsingPOST(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOrderCustomFieldUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderCustomFieldUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOrderCustomFieldUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createorderitemsonorderusingpost1"></a>
# **CreateOrderItemsOnOrderUsingPOST1**
> RestV2OrderItem CreateOrderItemsOnOrderUsingPOST1 (string orderId, CreateRestOrderItemRequest createRestOrderItemRequest)

Create an Order Item

Creates an order item on an existing order.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOrderItemsOnOrderUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var orderId = "orderId_example";  // string | order_id
            var createRestOrderItemRequest = new CreateRestOrderItemRequest(); // CreateRestOrderItemRequest | createRestOrderItemRequest

            try
            {
                // Create an Order Item
                RestV2OrderItem result = apiInstance.CreateOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOrderItemsOnOrderUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderItemsOnOrderUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Item
    ApiResponse<RestV2OrderItem> response = apiInstance.CreateOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOrderItemsOnOrderUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |
| **createRestOrderItemRequest** | [**CreateRestOrderItemRequest**](CreateRestOrderItemRequest.md) | createRestOrderItemRequest |  |

### Return type

[**RestV2OrderItem**](RestV2OrderItem.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createordertotaldiscountusingpost"></a>
# **CreateOrderTotalDiscountUsingPOST**
> OrderTotalDiscount CreateOrderTotalDiscountUsingPOST (CreateOrderTotalDiscountRequest createOrderTotalDiscountRequest)

Create an Order Total Discount

Creates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOrderTotalDiscountUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createOrderTotalDiscountRequest = new CreateOrderTotalDiscountRequest(); // CreateOrderTotalDiscountRequest | request

            try
            {
                // Create an Order Total Discount
                OrderTotalDiscount result = apiInstance.CreateOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOrderTotalDiscountUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderTotalDiscountUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.CreateOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOrderTotalDiscountUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOrderTotalDiscountRequest** | [**CreateOrderTotalDiscountRequest**](CreateOrderTotalDiscountRequest.md) | request |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createorderusingpost1"></a>
# **CreateOrderUsingPOST1**
> RestV2Order CreateOrderUsingPOST1 (RestCreateOrderRequest restCreateOrderRequest)

Create an Order

Create a one time Order with Order items.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateOrderUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var restCreateOrderRequest = new RestCreateOrderRequest(); // RestCreateOrderRequest | createOrderRequest

            try
            {
                // Create an Order
                RestV2Order result = apiInstance.CreateOrderUsingPOST1(restCreateOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateOrderUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateOrderUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Order
    ApiResponse<RestV2Order> response = apiInstance.CreateOrderUsingPOST1WithHttpInfo(restCreateOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateOrderUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **restCreateOrderRequest** | [**RestCreateOrderRequest**](RestCreateOrderRequest.md) | createOrderRequest |  |

### Return type

[**RestV2Order**](RestV2Order.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createproductusingpost1"></a>
# **CreateProductUsingPOST1**
> RestV2Product CreateProductUsingPOST1 (CreateProductRequest createProductRequest)

Create a Product

Creates a new product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateProductUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createProductRequest = new CreateProductRequest(); // CreateProductRequest | createProductRequest

            try
            {
                // Create a Product
                RestV2Product result = apiInstance.CreateProductUsingPOST1(createProductRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateProductUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateProductUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Product
    ApiResponse<RestV2Product> response = apiInstance.CreateProductUsingPOST1WithHttpInfo(createProductRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateProductUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md) | createProductRequest |  |

### Return type

[**RestV2Product**](RestV2Product.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createredirectlinkusingpost"></a>
# **CreateRedirectLinkUsingPOST**
> AffiliateLink CreateRedirectLinkUsingPOST (CreateOrPatchAffiliateLinkRequest createOrPatchAffiliateLinkRequest)

Create an Affiliate Link

Creates a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateRedirectLinkUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createOrPatchAffiliateLinkRequest = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request

            try
            {
                // Create an Affiliate Link
                AffiliateLink result = apiInstance.CreateRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateRedirectLinkUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateRedirectLinkUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.CreateRedirectLinkUsingPOSTWithHttpInfo(createOrPatchAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateRedirectLinkUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md) | request |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createreferralusingpost"></a>
# **CreateReferralUsingPOST**
> Referral CreateReferralUsingPOST (CreateReferralRequest createReferralRequest)

Create a Referral

Creates a new referral partner referral on the provided contact

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateReferralUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createReferralRequest = new CreateReferralRequest(); // CreateReferralRequest | request

            try
            {
                // Create a Referral
                Referral result = apiInstance.CreateReferralUsingPOST(createReferralRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateReferralUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateReferralUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Referral
    ApiResponse<Referral> response = apiInstance.CreateReferralUsingPOSTWithHttpInfo(createReferralRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateReferralUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createReferralRequest** | [**CreateReferralRequest**](CreateReferralRequest.md) | request |  |

### Return type

[**Referral**](Referral.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createsubscriptioncustomfieldusingpost"></a>
# **CreateSubscriptionCustomFieldUsingPOST**
> CustomFieldMetaData CreateSubscriptionCustomFieldUsingPOST (CreateCustomFieldRequest createCustomFieldRequest)

Create a Subscription's Custom Field

Adds a custom field of the specified type and options to the Subscription object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateSubscriptionCustomFieldUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Subscription's Custom Field
                CustomFieldMetaData result = apiInstance.CreateSubscriptionCustomFieldUsingPOST(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateSubscriptionCustomFieldUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Subscription's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateSubscriptionCustomFieldUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createtaskcustomfieldusingpost1"></a>
# **CreateTaskCustomFieldUsingPOST1**
> CreateCustomFieldResponse CreateTaskCustomFieldUsingPOST1 (CreateCustomFieldRequest createCustomFieldRequest)

Create a Custom Field

Adds a custom field of the specified type and options to the Task object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateTaskCustomFieldUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createCustomFieldRequest = new CreateCustomFieldRequest(); // CreateCustomFieldRequest | customField

            try
            {
                // Create a Custom Field
                CreateCustomFieldResponse result = apiInstance.CreateTaskCustomFieldUsingPOST1(createCustomFieldRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateTaskCustomFieldUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTaskCustomFieldUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Custom Field
    ApiResponse<CreateCustomFieldResponse> response = apiInstance.CreateTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateTaskCustomFieldUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomFieldRequest** | [**CreateCustomFieldRequest**](CreateCustomFieldRequest.md) | customField |  |

### Return type

[**CreateCustomFieldResponse**](CreateCustomFieldResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createtaskusingpost1"></a>
# **CreateTaskUsingPOST1**
> Task CreateTaskUsingPOST1 (CreateTaskRequest? createTaskRequest = null)

Create a Task

Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateTaskUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createTaskRequest = new CreateTaskRequest?(); // CreateTaskRequest? | task (optional) 

            try
            {
                // Create a Task
                Task result = apiInstance.CreateTaskUsingPOST1(createTaskRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateTaskUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTaskUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a Task
    ApiResponse<Task> response = apiInstance.CreateTaskUsingPOST1WithHttpInfo(createTaskRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateTaskUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createTaskRequest** | [**CreateTaskRequest?**](CreateTaskRequest?.md) | task | [optional]  |

### Return type

[**Task**](Task.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createuserusingpost1"></a>
# **CreateUserUsingPOST1**
> User CreateUserUsingPOST1 (CreateUserRequestV2? createUserRequestV2 = null)

Create a User

Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class CreateUserUsingPOST1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var createUserRequestV2 = new CreateUserRequestV2?(); // CreateUserRequestV2? | user (optional) 

            try
            {
                // Create a User
                User result = apiInstance.CreateUserUsingPOST1(createUserRequestV2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.CreateUserUsingPOST1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateUserUsingPOST1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a User
    ApiResponse<User> response = apiInstance.CreateUserUsingPOST1WithHttpInfo(createUserRequestV2);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.CreateUserUsingPOST1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createUserRequestV2** | [**CreateUserRequestV2?**](CreateUserRequestV2?.md) | user | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteaffiliatecommissionprogramusingdelete"></a>
# **DeleteAffiliateCommissionProgramUsingDELETE**
> void DeleteAffiliateCommissionProgramUsingDELETE (string commissionProgramId)

Delete a Commission Program

Deletes a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteAffiliateCommissionProgramUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Delete a Commission Program
                apiInstance.DeleteAffiliateCommissionProgramUsingDELETE(commissionProgramId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteAffiliateCommissionProgramUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Commission Program
    apiInstance.DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteAffiliateCommissionProgramUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteaffiliateusingdelete"></a>
# **DeleteAffiliateUsingDELETE**
> void DeleteAffiliateUsingDELETE (string id)

Delete Affiliate

Deletes the specified Affiliate

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteAffiliateUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var id = "id_example";  // string | id

            try
            {
                // Delete Affiliate
                apiInstance.DeleteAffiliateUsingDELETE(id);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteAffiliateUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteAffiliateUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Affiliate
    apiInstance.DeleteAffiliateUsingDELETEWithHttpInfo(id);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteAffiliateUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletediscountusingdelete"></a>
# **DeleteDiscountUsingDELETE**
> void DeleteDiscountUsingDELETE (string discountId)

Delete a Category Discount

Deletes a specified Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteDiscountUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Category Discount
                apiInstance.DeleteDiscountUsingDELETE(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Category Discount
    apiInstance.DeleteDiscountUsingDELETEWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletediscountusingdelete1"></a>
# **DeleteDiscountUsingDELETE1**
> void DeleteDiscountUsingDELETE1 (string discountId)

Delete a Free Trial Discount

Deletes a specified Free Trial Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteDiscountUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Free Trial Discount
                apiInstance.DeleteDiscountUsingDELETE1(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Free Trial Discount
    apiInstance.DeleteDiscountUsingDELETE1WithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletediscountusingdelete2"></a>
# **DeleteDiscountUsingDELETE2**
> void DeleteDiscountUsingDELETE2 (string discountId)

Delete a Shipping Discount

Deletes a specified Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteDiscountUsingDELETE2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete a Shipping Discount
                apiInstance.DeleteDiscountUsingDELETE2(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETE2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteDiscountUsingDELETE2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Shipping Discount
    apiInstance.DeleteDiscountUsingDELETE2WithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteDiscountUsingDELETE2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletefunnelintegrationusingpost"></a>
# **DeleteFunnelIntegrationUsingPOST**
> void DeleteFunnelIntegrationUsingPOST (DeleteFunnelIntegrationRequest deleteFunnelIntegrationRequest)

Deletes Funnel Integrations from the app.

Deletes all triggers / goals, and actions / sequence items for the given funnel integration

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteFunnelIntegrationUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var deleteFunnelIntegrationRequest = new DeleteFunnelIntegrationRequest(); // DeleteFunnelIntegrationRequest | deleteFunnelIntegrationRequest

            try
            {
                // Deletes Funnel Integrations from the app.
                apiInstance.DeleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteFunnelIntegrationUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteFunnelIntegrationUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletes Funnel Integrations from the app.
    apiInstance.DeleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteFunnelIntegrationUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **deleteFunnelIntegrationRequest** | [**DeleteFunnelIntegrationRequest**](DeleteFunnelIntegrationRequest.md) | deleteFunnelIntegrationRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteopportunitystageusingdelete"></a>
# **DeleteOpportunityStageUsingDELETE**
> void DeleteOpportunityStageUsingDELETE (string stageId)

Delete an Opportunity Stage

Deletes the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOpportunityStageUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var stageId = "stageId_example";  // string | stage_id

            try
            {
                // Delete an Opportunity Stage
                apiInstance.DeleteOpportunityStageUsingDELETE(stageId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteOpportunityStageUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityStageUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity Stage
    apiInstance.DeleteOpportunityStageUsingDELETEWithHttpInfo(stageId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteOpportunityStageUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** | stage_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteopportunityusingdelete"></a>
# **DeleteOpportunityUsingDELETE**
> void DeleteOpportunityUsingDELETE (string opportunityId)

Delete an Opportunity

Deletes the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOpportunityUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id

            try
            {
                // Delete an Opportunity
                apiInstance.DeleteOpportunityUsingDELETE(opportunityId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteOpportunityUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOpportunityUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Opportunity
    apiInstance.DeleteOpportunityUsingDELETEWithHttpInfo(opportunityId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteOpportunityUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteordercustomfieldusingdelete"></a>
# **DeleteOrderCustomFieldUsingDELETE**
> void DeleteOrderCustomFieldUsingDELETE (string customFieldId)

Delete an Order's Custom Field

Deletes a Custom Field from Order.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOrderCustomFieldUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id

            try
            {
                // Delete an Order's Custom Field
                apiInstance.DeleteOrderCustomFieldUsingDELETE(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteOrderCustomFieldUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderCustomFieldUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order's Custom Field
    apiInstance.DeleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteOrderCustomFieldUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteordertotaldiscountusingdelete"></a>
# **DeleteOrderTotalDiscountUsingDELETE**
> void DeleteOrderTotalDiscountUsingDELETE (string discountId)

Delete an Order Total Discount

Deletes a specified Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOrderTotalDiscountUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Delete an Order Total Discount
                apiInstance.DeleteOrderTotalDiscountUsingDELETE(discountId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteOrderTotalDiscountUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderTotalDiscountUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order Total Discount
    apiInstance.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteOrderTotalDiscountUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteorderusingdelete1"></a>
# **DeleteOrderUsingDELETE1**
> void DeleteOrderUsingDELETE1 (string orderId)

Delete an Order

  Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteOrderUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var orderId = "orderId_example";  // string | order_id

            try
            {
                // Delete an Order
                apiInstance.DeleteOrderUsingDELETE1(orderId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteOrderUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteOrderUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Order
    apiInstance.DeleteOrderUsingDELETE1WithHttpInfo(orderId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteOrderUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteproductusingdelete1"></a>
# **DeleteProductUsingDELETE1**
> void DeleteProductUsingDELETE1 (string productId)

Delete a Product

Deletes a single product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteProductUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Delete a Product
                apiInstance.DeleteProductUsingDELETE1(productId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteProductUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteProductUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Product
    apiInstance.DeleteProductUsingDELETE1WithHttpInfo(productId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteProductUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteredirectlinkusingdelete"></a>
# **DeleteRedirectLinkUsingDELETE**
> void DeleteRedirectLinkUsingDELETE (string redirectId)

Delete an Affiliate Link

Deletes an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteRedirectLinkUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Delete an Affiliate Link
                apiInstance.DeleteRedirectLinkUsingDELETE(redirectId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteRedirectLinkUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteRedirectLinkUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete an Affiliate Link
    apiInstance.DeleteRedirectLinkUsingDELETEWithHttpInfo(redirectId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteRedirectLinkUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetaskcustomfieldusingdelete"></a>
# **DeleteTaskCustomFieldUsingDELETE**
> void DeleteTaskCustomFieldUsingDELETE (string customFieldId)

Delete a Custom Field

Deletes a Custom Field from Task.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteTaskCustomFieldUsingDELETEExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id

            try
            {
                // Delete a Custom Field
                apiInstance.DeleteTaskCustomFieldUsingDELETE(customFieldId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteTaskCustomFieldUsingDELETE: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTaskCustomFieldUsingDELETEWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Custom Field
    apiInstance.DeleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteTaskCustomFieldUsingDELETEWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deletetaskusingdelete1"></a>
# **DeleteTaskUsingDELETE1**
> void DeleteTaskUsingDELETE1 (string taskId)

Delete a Task

Deletes a single task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class DeleteTaskUsingDELETE1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var taskId = "taskId_example";  // string | task_id

            try
            {
                // Delete a Task
                apiInstance.DeleteTaskUsingDELETE1(taskId);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.DeleteTaskUsingDELETE1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTaskUsingDELETE1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a Task
    apiInstance.DeleteTaskUsingDELETE1WithHttpInfo(taskId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.DeleteTaskUsingDELETE1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getaffiliatecommissiontotalusingget"></a>
# **GetAffiliateCommissionTotalUsingGET**
> AffiliateCommissionEarned GetAffiliateCommissionTotalUsingGET (string affiliateId)

Retrieve Affiliate Commission Earned and View LedgerURl for portal

Get the Affiliate Commission Earned and View LedgerURl for portal

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCommissionTotalUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id

            try
            {
                // Retrieve Affiliate Commission Earned and View LedgerURl for portal
                AffiliateCommissionEarned result = apiInstance.GetAffiliateCommissionTotalUsingGET(affiliateId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCommissionTotalUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionTotalUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission Earned and View LedgerURl for portal
    ApiResponse<AffiliateCommissionEarned> response = apiInstance.GetAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCommissionTotalUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getaffiliatecommissionsusingget"></a>
# **GetAffiliateCommissionsUsingGET**
> ListAffiliateCommissionResponse GetAffiliateCommissionsUsingGET (string affiliateId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Affiliate Commission and Clawbacks

Retrieve a list of Affiliate's Commissions and Clawbacks

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCommissionsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var affiliateId = "affiliateId_example";  // string | affiliate_id
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Affiliate Commission and Clawbacks
                ListAffiliateCommissionResponse result = apiInstance.GetAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCommissionsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCommissionsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Commission and Clawbacks
    ApiResponse<ListAffiliateCommissionResponse> response = apiInstance.GetAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCommissionsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **affiliateId** | **string** | affiliate_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getaffiliatecustomfieldsusingget"></a>
# **GetAffiliateCustomFieldsUsingGET**
> ObjectModel GetAffiliateCustomFieldsUsingGET ()

Retrieve Affiliate Model

Get the custom fields and optional properties for the Affiliate object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetAffiliateCustomFieldsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve Affiliate Model
                ObjectModel result = apiInstance.GetAffiliateCustomFieldsUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCustomFieldsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAffiliateCustomFieldsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Affiliate Model
    ApiResponse<ObjectModel> response = apiInstance.GetAffiliateCustomFieldsUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetAffiliateCustomFieldsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcommissionprogramusingget"></a>
# **GetCommissionProgramUsingGET**
> AffiliateProgramV2 GetCommissionProgramUsingGET (string commissionProgramId)

Retrieve a Commission Program

Retrieves a single Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetCommissionProgramUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id

            try
            {
                // Retrieve a Commission Program
                AffiliateProgramV2 result = apiInstance.GetCommissionProgramUsingGET(commissionProgramId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetCommissionProgramUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCommissionProgramUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Commission Program
    ApiResponse<AffiliateProgramV2> response = apiInstance.GetCommissionProgramUsingGETWithHttpInfo(commissionProgramId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetCommissionProgramUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcontactsbysearchtermusingget"></a>
# **GetContactsBySearchTermUsingGET**
> ListBasicContactResponse GetContactsBySearchTermUsingGET (string searchParam)

Search for Contacts

Get a list of Contacts based search parameters.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetContactsBySearchTermUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var searchParam = "searchParam_example";  // string | searchParam

            try
            {
                // Search for Contacts
                ListBasicContactResponse result = apiInstance.GetContactsBySearchTermUsingGET(searchParam);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetContactsBySearchTermUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetContactsBySearchTermUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Search for Contacts
    ApiResponse<ListBasicContactResponse> response = apiInstance.GetContactsBySearchTermUsingGETWithHttpInfo(searchParam);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetContactsBySearchTermUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **searchParam** | **string** | searchParam |  |

### Return type

[**ListBasicContactResponse**](ListBasicContactResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getdiscountusingget"></a>
# **GetDiscountUsingGET**
> CategoryDiscount GetDiscountUsingGET (string discountId)

Retrieve a Category Discount

Retrieves a single Category Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetDiscountUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve a Category Discount
                CategoryDiscount result = apiInstance.GetDiscountUsingGET(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetDiscountUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDiscountUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.GetDiscountUsingGETWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetDiscountUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getdiscountusingget1"></a>
# **GetDiscountUsingGET1**
> ShippingDiscount GetDiscountUsingGET1 (string discountId)

Retrieve a Shipping Discount

Retrieves a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetDiscountUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve a Shipping Discount
                ShippingDiscount result = apiInstance.GetDiscountUsingGET1(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetDiscountUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDiscountUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.GetDiscountUsingGET1WithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetDiscountUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getopportunitystageusingget"></a>
# **GetOpportunityStageUsingGET**
> RestOpportunityStage GetOpportunityStageUsingGET (string stageId)

Retrieve an Opportunity Stage

Retrieves the specified Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOpportunityStageUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var stageId = "stageId_example";  // string | stage_id

            try
            {
                // Retrieve an Opportunity Stage
                RestOpportunityStage result = apiInstance.GetOpportunityStageUsingGET(stageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetOpportunityStageUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityStageUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.GetOpportunityStageUsingGETWithHttpInfo(stageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetOpportunityStageUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** | stage_id |  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getopportunityusingget1"></a>
# **GetOpportunityUsingGET1**
> RestV2Opportunity GetOpportunityUsingGET1 (string opportunityId)

Retrieve a Opportunity

Retrieves the specified Opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOpportunityUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id

            try
            {
                // Retrieve a Opportunity
                RestV2Opportunity result = apiInstance.GetOpportunityUsingGET1(opportunityId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetOpportunityUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOpportunityUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.GetOpportunityUsingGET1WithHttpInfo(opportunityId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetOpportunityUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getordertotaldiscountusingget"></a>
# **GetOrderTotalDiscountUsingGET**
> OrderTotalDiscount GetOrderTotalDiscountUsingGET (string discountId)

Retrieve an Order Total Discount

Retrieves an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOrderTotalDiscountUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id

            try
            {
                // Retrieve an Order Total Discount
                OrderTotalDiscount result = apiInstance.GetOrderTotalDiscountUsingGET(discountId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetOrderTotalDiscountUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderTotalDiscountUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.GetOrderTotalDiscountUsingGETWithHttpInfo(discountId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetOrderTotalDiscountUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getorderusingget1"></a>
# **GetOrderUsingGET1**
> RestV2Order GetOrderUsingGET1 (string orderId)

Retrieve an Order

Retrieves a single Order for a given order id

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetOrderUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var orderId = "orderId_example";  // string | order_id

            try
            {
                // Retrieve an Order
                RestV2Order result = apiInstance.GetOrderUsingGET1(orderId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetOrderUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetOrderUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order
    ApiResponse<RestV2Order> response = apiInstance.GetOrderUsingGET1WithHttpInfo(orderId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetOrderUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |

### Return type

[**RestV2Order**](RestV2Order.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getproductusingget"></a>
# **GetProductUsingGET**
> RestV2Product GetProductUsingGET (string productId)

Get a Product

Gets a single Product

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetProductUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var productId = "productId_example";  // string | product_id

            try
            {
                // Get a Product
                RestV2Product result = apiInstance.GetProductUsingGET(productId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetProductUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetProductUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a Product
    ApiResponse<RestV2Product> response = apiInstance.GetProductUsingGETWithHttpInfo(productId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetProductUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **productId** | **string** | product_id |  |

### Return type

[**RestV2Product**](RestV2Product.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getredirectlinkusingget"></a>
# **GetRedirectLinkUsingGET**
> AffiliateLink GetRedirectLinkUsingGET (string redirectId)

Retrieve an Affiliate Link

Retrieves information about a single Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetRedirectLinkUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id

            try
            {
                // Retrieve an Affiliate Link
                AffiliateLink result = apiInstance.GetRedirectLinkUsingGET(redirectId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetRedirectLinkUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetRedirectLinkUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.GetRedirectLinkUsingGETWithHttpInfo(redirectId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetRedirectLinkUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="gettaskusingget1"></a>
# **GetTaskUsingGET1**
> Task GetTaskUsingGET1 (string taskId)

Retrieve a Task

Retrieves a single task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetTaskUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var taskId = "taskId_example";  // string | task_id

            try
            {
                // Retrieve a Task
                Task result = apiInstance.GetTaskUsingGET1(taskId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetTaskUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTaskUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve a Task
    ApiResponse<Task> response = apiInstance.GetTaskUsingGET1WithHttpInfo(taskId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetTaskUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |

### Return type

[**Task**](Task.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getuserbyidusingget"></a>
# **GetUserByIdUsingGET**
> User GetUserByIdUsingGET (string userId)

Get User

Retrieves a specific User

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetUserByIdUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var userId = "userId_example";  // string | user_id

            try
            {
                // Get User
                User result = apiInstance.GetUserByIdUsingGET(userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetUserByIdUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserByIdUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get User
    ApiResponse<User> response = apiInstance.GetUserByIdUsingGETWithHttpInfo(userId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetUserByIdUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **userId** | **string** | user_id |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getuserinfousingget1"></a>
# **GetUserInfoUsingGET1**
> GetUserInfoResponse GetUserInfoUsingGET1 ()

Retrieve User Info

Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetUserInfoUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve User Info
                GetUserInfoResponse result = apiInstance.GetUserInfoUsingGET1();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetUserInfoUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserInfoUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve User Info
    ApiResponse<GetUserInfoResponse> response = apiInstance.GetUserInfoUsingGET1WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetUserInfoUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getusersignatureusingget1"></a>
# **GetUserSignatureUsingGET1**
> string GetUserSignatureUsingGET1 (string userId)

Get User email signature

Retrieves a HTML snippet that contains the user's email signature.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class GetUserSignatureUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var userId = "userId_example";  // string | user_id

            try
            {
                // Get User email signature
                string result = apiInstance.GetUserSignatureUsingGET1(userId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.GetUserSignatureUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserSignatureUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get User email signature
    ApiResponse<string> response = apiInstance.GetUserSignatureUsingGET1WithHttpInfo(userId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.GetUserSignatureUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **userId** | **string** | user_id |  |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listaffiliatecommissionprogramsusingget"></a>
# **ListAffiliateCommissionProgramsUsingGET**
> ListAffiliateCommissionProgramsResponse ListAffiliateCommissionProgramsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Commission Programs

Retrieves a list of Affiliate Commission Programs

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListAffiliateCommissionProgramsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Commission Programs
                ListAffiliateCommissionProgramsResponse result = apiInstance.ListAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListAffiliateCommissionProgramsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateCommissionProgramsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Commission Programs
    ApiResponse<ListAffiliateCommissionProgramsResponse> response = apiInstance.ListAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListAffiliateCommissionProgramsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listaffiliatelinksusingget"></a>
# **ListAffiliateLinksUsingGET**
> ListAffiliateLinksResponse ListAffiliateLinksUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Links

Retrieves a list of Affiliate Links

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListAffiliateLinksUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Links
                ListAffiliateLinksResponse result = apiInstance.ListAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListAffiliateLinksUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListAffiliateLinksUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Links
    ApiResponse<ListAffiliateLinksResponse> response = apiInstance.ListAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListAffiliateLinksUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id   | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcountriesusingget2"></a>
# **ListCountriesUsingGET2**
> ListCountriesResponse ListCountriesUsingGET2 ()

List Countries

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListCountriesUsingGET2Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // List Countries
                ListCountriesResponse result = apiInstance.ListCountriesUsingGET2();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListCountriesUsingGET2: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCountriesUsingGET2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Countries
    ApiResponse<ListCountriesResponse> response = apiInstance.ListCountriesUsingGET2WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListCountriesUsingGET2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ListCountriesResponse**](ListCountriesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listdiscountsusingget"></a>
# **ListDiscountsUsingGET**
> ListShippingDiscountsResponse ListDiscountsUsingGET (List<string>? fields = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Shipping Discounts

Retrieves all Shipping Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListDiscountsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var fields = new List<string>?(); // List<string>? | TODO: PAPI-1449 (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=description%3D%3DHello+World` - `filter=discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Shipping Discounts
                ListShippingDiscountsResponse result = apiInstance.ListDiscountsUsingGET(fields, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListDiscountsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListDiscountsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Shipping Discounts
    ApiResponse<ListShippingDiscountsResponse> response = apiInstance.ListDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListDiscountsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) | TODO: PAPI-1449 | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListShippingDiscountsResponse**](ListShippingDiscountsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listlandingpagesusingget"></a>
# **ListLandingPagesUsingGET**
> ListLandingPagesResponse ListLandingPagesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Landing Pages

Retrieves a list of all landing pages

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListLandingPagesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Landing Pages
                ListLandingPagesResponse result = apiInstance.ListLandingPagesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListLandingPagesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLandingPagesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Landing Pages
    ApiResponse<ListLandingPagesResponse> response = apiInstance.ListLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListLandingPagesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLandingPagesResponse**](ListLandingPagesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listleadsourcesusingget"></a>
# **ListLeadSourcesUsingGET**
> ListLeadSourcesResponse ListLeadSourcesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Lead Sources

Retrieves a list of lead sources

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListLeadSourcesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Lead Sources
                ListLeadSourcesResponse result = apiInstance.ListLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListLeadSourcesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListLeadSourcesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Lead Sources
    ApiResponse<ListLeadSourcesResponse> response = apiInstance.ListLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListLeadSourcesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListLeadSourcesResponse**](ListLeadSourcesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listmerchantsusingget"></a>
# **ListMerchantsUsingGET**
> ListRestMerchantResponse ListMerchantsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Merchant accounts

Retrieves a list of Merchant accounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListMerchantsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123%3Baccount_name=abc` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Merchant accounts
                ListRestMerchantResponse result = apiInstance.ListMerchantsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListMerchantsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListMerchantsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Merchant accounts
    ApiResponse<ListRestMerchantResponse> response = apiInstance.ListMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListMerchantsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListRestMerchantResponse**](ListRestMerchantResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listnotetemplatesusingget"></a>
# **ListNoteTemplatesUsingGET**
> ListNoteTemplateResponse ListNoteTemplatesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Note Templates

Retrieves a list of Note Templates

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListNoteTemplatesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Note Templates
                ListNoteTemplateResponse result = apiInstance.ListNoteTemplatesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListNoteTemplatesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListNoteTemplatesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Note Templates
    ApiResponse<ListNoteTemplateResponse> response = apiInstance.ListNoteTemplatesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListNoteTemplatesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListNoteTemplateResponse**](ListNoteTemplateResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listopportunitiesusingget1"></a>
# **ListOpportunitiesUsingGET1**
> ListOpportunitiesResponse ListOpportunitiesUsingGET1 (List<string>? fields = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Opportunities

Retrieves a list of all Opportunities.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOpportunitiesUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var fields = new List<string>?(); // List<string>? | fields (optional) 
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Opportunities
                ListOpportunitiesResponse result = apiInstance.ListOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListOpportunitiesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunitiesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Opportunities
    ApiResponse<ListOpportunitiesResponse> response = apiInstance.ListOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListOpportunitiesUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **fields** | [**List&lt;string&gt;?**](string.md) | fields | [optional]  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) stage_id - (String) user_id  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunitiesResponse**](ListOpportunitiesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listopportunitystagesusingget"></a>
# **ListOpportunityStagesUsingGET**
> ListOpportunityStagesResponse ListOpportunityStagesUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List of Opportunity Stages

Retrieves a list of Opportunity Stages.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOpportunityStagesUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List of Opportunity Stages
                ListOpportunityStagesResponse result = apiInstance.ListOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListOpportunityStagesUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOpportunityStagesUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List of Opportunity Stages
    ApiResponse<ListOpportunityStagesResponse> response = apiInstance.ListOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListOpportunityStagesUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOpportunityStagesResponse**](ListOpportunityStagesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listorderpaymentsusingget1"></a>
# **ListOrderPaymentsUsingGET1**
> ListOrderPaymentsResponse ListOrderPaymentsUsingGET1 (string orderId, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

Retrieve Order Payments

Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOrderPaymentsUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var orderId = "orderId_example";  // string | order_id
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=payment_id%3D%3D123` - `filter=pay_status%3D%3DAPPROVED` - `filter=invoice_id%3D%3D456%3Bskip_commission=true`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // Retrieve Order Payments
                ListOrderPaymentsResponse result = apiInstance.ListOrderPaymentsUsingGET1(orderId, filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListOrderPaymentsUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderPaymentsUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Order Payments
    ApiResponse<ListOrderPaymentsResponse> response = apiInstance.ListOrderPaymentsUsingGET1WithHttpInfo(orderId, filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListOrderPaymentsUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderPaymentsResponse**](ListOrderPaymentsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listordertotaldiscountsusingget"></a>
# **ListOrderTotalDiscountsUsingGET**
> ListOrderTotalDiscountsResponse ListOrderTotalDiscountsUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List all Order Total Discounts

Retrieves all Order Total Discounts

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOrderTotalDiscountsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List all Order Total Discounts
                ListOrderTotalDiscountsResponse result = apiInstance.ListOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListOrderTotalDiscountsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrderTotalDiscountsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all Order Total Discounts
    ApiResponse<ListOrderTotalDiscountsResponse> response = apiInstance.ListOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListOrderTotalDiscountsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrderTotalDiscountsResponse**](ListOrderTotalDiscountsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listordersusingget1"></a>
# **ListOrdersUsingGET1**
> ListOrders ListOrdersUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List orders

Retrieves a list of orders

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListOrdersUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123%3Bcontact_id%3D%3D567` (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List orders
                ListOrders result = apiInstance.ListOrdersUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListOrdersUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListOrdersUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List orders
    ApiResponse<ListOrders> response = apiInstance.ListOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListOrdersUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60; | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListOrders**](ListOrders.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listproductsusingget1"></a>
# **ListProductsUsingGET1**
> ListProductsResponse ListProductsUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Products

Retrieves a list of Products

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListProductsUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name    (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Products
                ListProductsResponse result = apiInstance.ListProductsUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListProductsUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProductsUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Products
    ApiResponse<ListProductsResponse> response = apiInstance.ListProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListProductsUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name    | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListProductsResponse**](ListProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listprovincesforcountryusingget"></a>
# **ListProvincesForCountryUsingGET**
> ListProvincesResponse ListProvincesForCountryUsingGET (string countryCode)

List a Country's Provinces

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListProvincesForCountryUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var countryCode = "countryCode_example";  // string | country_code

            try
            {
                // List a Country's Provinces
                ListProvincesResponse result = apiInstance.ListProvincesForCountryUsingGET(countryCode);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListProvincesForCountryUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListProvincesForCountryUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List a Country's Provinces
    ApiResponse<ListProvincesResponse> response = apiInstance.ListProvincesForCountryUsingGETWithHttpInfo(countryCode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListProvincesForCountryUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **countryCode** | **string** | country_code |  |

### Return type

[**ListProvincesResponse**](ListProvincesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listshippingmethodsusingget"></a>
# **ListShippingMethodsUsingGET**
> ListRestShippingMethodsResponse ListShippingMethodsUsingGET ()

List Shipping methods

Retrieves a list of Shipping methods

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListShippingMethodsUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // List Shipping methods
                ListRestShippingMethodsResponse result = apiInstance.ListShippingMethodsUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListShippingMethodsUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListShippingMethodsUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Shipping methods
    ApiResponse<ListRestShippingMethodsResponse> response = apiInstance.ListShippingMethodsUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListShippingMethodsUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**ListRestShippingMethodsResponse**](ListRestShippingMethodsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsubscriptionplansusingget"></a>
# **ListSubscriptionPlansUsingGET**
> ListSubscriptionPlansResponse ListSubscriptionPlansUsingGET (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Subscription Plans

Retrieves a list of Subscription Plans

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListSubscriptionPlansUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are:   - (String) name    (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Subscription Plans
                ListSubscriptionPlansResponse result = apiInstance.ListSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListSubscriptionPlansUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionPlansUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscription Plans
    ApiResponse<ListSubscriptionPlansResponse> response = apiInstance.ListSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListSubscriptionPlansUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are:   - (String) name    | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListSubscriptionPlansResponse**](ListSubscriptionPlansResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsubscriptionsusingget1"></a>
# **ListSubscriptionsUsingGET1**
> ListSubscriptionsResponse ListSubscriptionsUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Subscriptions

Retrieves a list of subscriptions using the specified search criteria.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListSubscriptionsUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Subscriptions
                ListSubscriptionsResponse result = apiInstance.ListSubscriptionsUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListSubscriptionsUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSubscriptionsUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Subscriptions
    ApiResponse<ListSubscriptionsResponse> response = apiInstance.ListSubscriptionsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListSubscriptionsUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC  | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

### Return type

[**ListSubscriptionsResponse**](ListSubscriptionsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listsummariesusingget1"></a>
# **ListSummariesUsingGET1**
> ListAffiliateSummariesResponse ListSummariesUsingGET1 (string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null)

List Affiliate Summaries

Retrieve a list of Affiliate Summaries

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListSummariesUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789`  (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 

            try
            {
                // List Affiliate Summaries
                ListAffiliateSummariesResponse result = apiInstance.ListSummariesUsingGET1(filter, orderBy, pageSize, pageToken);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListSummariesUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListSummariesUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Affiliate Summaries
    ApiResponse<ListAffiliateSummariesResponse> response = apiInstance.ListSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListSummariesUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60;  | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listtasksusingget1"></a>
# **ListTasksUsingGET1**
> ListTasksResponse ListTasksUsingGET1 (string? endDueTime = null, string? filter = null, string? orderBy = null, int? pageSize = null, string? pageToken = null, string? startDueTime = null)

List Tasks

Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListTasksUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var endDueTime = "endDueTime_example";  // string? |  (optional) 
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. `given_name desc` (optional) 
            var pageSize = 0;  // int? | Total number of items to return per page (optional) 
            var pageToken = "pageToken_example";  // string? | Page token (optional) 
            var startDueTime = "startDueTime_example";  // string? |  (optional) 

            try
            {
                // List Tasks
                ListTasksResponse result = apiInstance.ListTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListTasksUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTasksUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Tasks
    ApiResponse<ListTasksResponse> response = apiInstance.ListTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListTasksUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **endDueTime** | **string?** |  | [optional]  |
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60; | [optional]  |
| **pageSize** | **int?** | Total number of items to return per page | [optional]  |
| **pageToken** | **string?** | Page token | [optional]  |
| **startDueTime** | **string?** |  | [optional]  |

### Return type

[**ListTasksResponse**](ListTasksResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listusersusingget1"></a>
# **ListUsersUsingGET1**
> ListUserResponse ListUsersUsingGET1 (string? filter = null, string? orderBy = null)

List Users

Retrieves a list of users

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class ListUsersUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var filter = "filter_example";  // string? | Search filter to apply to results (optional) 
            var orderBy = "orderBy_example";  // string? | Attribute and direction to order items by. E.g. 'given_name desc' (optional) 

            try
            {
                // List Users
                ListUserResponse result = apiInstance.ListUsersUsingGET1(filter, orderBy);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.ListUsersUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListUsersUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Users
    ApiResponse<ListUserResponse> response = apiInstance.ListUsersUsingGET1WithHttpInfo(filter, orderBy);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.ListUsersUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **filter** | **string?** | Search filter to apply to results | [optional]  |
| **orderBy** | **string?** | Attribute and direction to order items by. E.g. &#39;given_name desc&#39; | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchdefaultcommissionprogramusingpatch"></a>
# **PatchDefaultCommissionProgramUsingPATCH**
> SetDefaultCommissionProgramResponse PatchDefaultCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, PatchDefaultCommissionProgramRequest? patchDefaultCommissionProgramRequest = null)

Update a Default Commission Program

Updates a Default Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchDefaultCommissionProgramUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchDefaultCommissionProgramRequest = new PatchDefaultCommissionProgramRequest?(); // PatchDefaultCommissionProgramRequest? | Values of the default Commission Program (optional) 

            try
            {
                // Update a Default Commission Program
                SetDefaultCommissionProgramResponse result = apiInstance.PatchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchDefaultCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchDefaultCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Default Commission Program
    ApiResponse<SetDefaultCommissionProgramResponse> response = apiInstance.PatchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchDefaultCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchDefaultCommissionProgramRequest** | [**PatchDefaultCommissionProgramRequest?**](PatchDefaultCommissionProgramRequest?.md) | Values of the default Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchorderusingpatch"></a>
# **PatchOrderUsingPATCH**
> RestV2Order PatchOrderUsingPATCH (string orderId, List<string>? updateMask = null, RestV2PatchOrderRequest? restV2PatchOrderRequest = null)

Update an Order

Updates an Order

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchOrderUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var orderId = "orderId_example";  // string | order_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var restV2PatchOrderRequest = new RestV2PatchOrderRequest?(); // RestV2PatchOrderRequest? | order (optional) 

            try
            {
                // Update an Order
                RestV2Order result = apiInstance.PatchOrderUsingPATCH(orderId, updateMask, restV2PatchOrderRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchOrderUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchOrderUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order
    ApiResponse<RestV2Order> response = apiInstance.PatchOrderUsingPATCHWithHttpInfo(orderId, updateMask, restV2PatchOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchOrderUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **orderId** | **string** | order_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **restV2PatchOrderRequest** | [**RestV2PatchOrderRequest?**](RestV2PatchOrderRequest?.md) | order | [optional]  |

### Return type

[**RestV2Order**](RestV2Order.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchproductcommissionprogramusingpatch"></a>
# **PatchProductCommissionProgramUsingPATCH**
> ProductCommissionProgram PatchProductCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, PatchProductCommissionProgramRequest? patchProductCommissionProgramRequest = null)

Update a Product Commission Program

Updates a Product Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchProductCommissionProgramUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchProductCommissionProgramRequest = new PatchProductCommissionProgramRequest?(); // PatchProductCommissionProgramRequest? | Values of the product Commission Program (optional) 

            try
            {
                // Update a Product Commission Program
                ProductCommissionProgram result = apiInstance.PatchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchProductCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchProductCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Product Commission Program
    ApiResponse<ProductCommissionProgram> response = apiInstance.PatchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchProductCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchProductCommissionProgramRequest** | [**PatchProductCommissionProgramRequest?**](PatchProductCommissionProgramRequest?.md) | Values of the product Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchsubscriptioncommissionprogramusingpatch"></a>
# **PatchSubscriptionCommissionProgramUsingPATCH**
> SubscriptionCommissionProgram PatchSubscriptionCommissionProgramUsingPATCH (string commissionProgramId, List<string>? updateMask = null, PatchSubscriptionCommissionProgramRequest? patchSubscriptionCommissionProgramRequest = null)

Update a Subscription Commission Program

Updates a Subscription Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchSubscriptionCommissionProgramUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionProgramId = "commissionProgramId_example";  // string | commission_program_id
            var updateMask = new List<string>?(); // List<string>? | update_mask (optional) 
            var patchSubscriptionCommissionProgramRequest = new PatchSubscriptionCommissionProgramRequest?(); // PatchSubscriptionCommissionProgramRequest? | Values of the subscription Commission Program (optional) 

            try
            {
                // Update a Subscription Commission Program
                SubscriptionCommissionProgram result = apiInstance.PatchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchSubscriptionCommissionProgramUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchSubscriptionCommissionProgramUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription Commission Program
    ApiResponse<SubscriptionCommissionProgram> response = apiInstance.PatchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchSubscriptionCommissionProgramUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionProgramId** | **string** | commission_program_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | update_mask | [optional]  |
| **patchSubscriptionCommissionProgramRequest** | [**PatchSubscriptionCommissionProgramRequest?**](PatchSubscriptionCommissionProgramRequest?.md) | Values of the subscription Commission Program | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchtaskusingpatch"></a>
# **PatchTaskUsingPATCH**
> UpdateTaskResponse PatchTaskUsingPATCH (string taskId, List<string>? updateMask = null, CreatePatchTaskRequest? createPatchTaskRequest = null)

Update a Task

Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchTaskUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var taskId = "taskId_example";  // string | task_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var createPatchTaskRequest = new CreatePatchTaskRequest?(); // CreatePatchTaskRequest? | task (optional) 

            try
            {
                // Update a Task
                UpdateTaskResponse result = apiInstance.PatchTaskUsingPATCH(taskId, updateMask, createPatchTaskRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchTaskUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchTaskUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Task
    ApiResponse<UpdateTaskResponse> response = apiInstance.PatchTaskUsingPATCHWithHttpInfo(taskId, updateMask, createPatchTaskRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchTaskUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **taskId** | **string** | task_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **createPatchTaskRequest** | [**CreatePatchTaskRequest?**](CreatePatchTaskRequest?.md) | task | [optional]  |

### Return type

[**UpdateTaskResponse**](UpdateTaskResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="patchuserusingpatch"></a>
# **PatchUserUsingPATCH**
> User PatchUserUsingPATCH (string userId, List<string>? updateMask = null, PatchUserRequestV2? patchUserRequestV2 = null)

Update User

Updates information on a specific User

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class PatchUserUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var userId = "userId_example";  // string | user_id
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 
            var patchUserRequestV2 = new PatchUserRequestV2?(); // PatchUserRequestV2? | user (optional) 

            try
            {
                // Update User
                User result = apiInstance.PatchUserUsingPATCH(userId, updateMask, patchUserRequestV2);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.PatchUserUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the PatchUserUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update User
    ApiResponse<User> response = apiInstance.PatchUserUsingPATCHWithHttpInfo(userId, updateMask, patchUserRequestV2);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.PatchUserUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **userId** | **string** | user_id |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |
| **patchUserRequestV2** | [**PatchUserRequestV2?**](PatchUserRequestV2?.md) | user | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removeaffiliatefromprogramusingpost"></a>
# **RemoveAffiliateFromProgramUsingPOST**
> void RemoveAffiliateFromProgramUsingPOST (string id, AffiliateRemoveFromProgramRequest affiliateRemoveFromProgramRequest)

Remove an Affiliate from a Commission Program

Removes an Affiliate from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RemoveAffiliateFromProgramUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var id = "id_example";  // string | id
            var affiliateRemoveFromProgramRequest = new AffiliateRemoveFromProgramRequest(); // AffiliateRemoveFromProgramRequest | removeFromProgramRequest

            try
            {
                // Remove an Affiliate from a Commission Program
                apiInstance.RemoveAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RemoveAffiliateFromProgramUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveAffiliateFromProgramUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove an Affiliate from a Commission Program
    apiInstance.RemoveAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RemoveAffiliateFromProgramUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | id |  |
| **affiliateRemoveFromProgramRequest** | [**AffiliateRemoveFromProgramRequest**](AffiliateRemoveFromProgramRequest.md) | removeFromProgramRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removesubscriptionplancommissionfromcommissionsusingpost"></a>
# **RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST**
> void RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST (string commissionId, DeleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest)

Remove a Subscription from a Commission Program

Removes a Subscription from a Commission Program

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var commissionId = "commissionId_example";  // string | commission_id
            var deleteSubscriptionPlanCommissionRequest = new DeleteSubscriptionPlanCommissionRequest(); // DeleteSubscriptionPlanCommissionRequest | deleteSubscriptionPlanCommissionRequest

            try
            {
                // Remove a Subscription from a Commission Program
                apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOST: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a Subscription from a Commission Program
    apiInstance.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **commissionId** | **string** | commission_id |  |
| **deleteSubscriptionPlanCommissionRequest** | [**DeleteSubscriptionPlanCommissionRequest**](DeleteSubscriptionPlanCommissionRequest.md) | deleteSubscriptionPlanCommissionRequest |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievenotemodelusingget1"></a>
# **RetrieveNoteModelUsingGET1**
> ObjectModel RetrieveNoteModelUsingGET1 ()

Retrieve Note Model

Gets the custom fields for the Note object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveNoteModelUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve Note Model
                ObjectModel result = apiInstance.RetrieveNoteModelUsingGET1();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RetrieveNoteModelUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveNoteModelUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Note Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveNoteModelUsingGET1WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RetrieveNoteModelUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrieveordercustomfieldmodelusingget"></a>
# **RetrieveOrderCustomFieldModelUsingGET**
> ObjectModel RetrieveOrderCustomFieldModelUsingGET ()

Retrieve an Order's Custom Field Model

Gets the custom field's model for the Order object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveOrderCustomFieldModelUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve an Order's Custom Field Model
                ObjectModel result = apiInstance.RetrieveOrderCustomFieldModelUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RetrieveOrderCustomFieldModelUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveOrderCustomFieldModelUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve an Order's Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveOrderCustomFieldModelUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RetrieveOrderCustomFieldModelUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievesubscriptioncustomfieldmodelusingget"></a>
# **RetrieveSubscriptionCustomFieldModelUsingGET**
> ObjectModel RetrieveSubscriptionCustomFieldModelUsingGET ()

Retrieve Subscription's Custom Field Model

Gets the custom field's model for the Subscription object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveSubscriptionCustomFieldModelUsingGETExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve Subscription's Custom Field Model
                ObjectModel result = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGET();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RetrieveSubscriptionCustomFieldModelUsingGET: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Subscription's Custom Field Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RetrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="retrievetaskmodelusingget1"></a>
# **RetrieveTaskModelUsingGET1**
> ObjectModel RetrieveTaskModelUsingGET1 ()

Retrieve Task Model

Get the custom fields for the Task object

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class RetrieveTaskModelUsingGET1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);

            try
            {
                // Retrieve Task Model
                ObjectModel result = apiInstance.RetrieveTaskModelUsingGET1();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.RetrieveTaskModelUsingGET1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RetrieveTaskModelUsingGET1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieve Task Model
    ApiResponse<ObjectModel> response = apiInstance.RetrieveTaskModelUsingGET1WithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.RetrieveTaskModelUsingGET1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateaffiliatecustomfieldusingpatch"></a>
# **UpdateAffiliateCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateAffiliateCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Custom Field

Updates a custom field of the specified type and options to the Affiliate object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateAffiliateCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Custom Field
                CustomFieldMetaData result = apiInstance.UpdateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateAffiliateCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateAffiliateCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateAffiliateCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatediscountusingpatch"></a>
# **UpdateDiscountUsingPATCH**
> CategoryDiscount UpdateDiscountUsingPATCH (string discountId, CreateUpdateDiscountRequest createUpdateDiscountRequest, List<string>? updateMask = null)

Update a Category Discount

Update a Category Discount.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateDiscountUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var createUpdateDiscountRequest = new CreateUpdateDiscountRequest(); // CreateUpdateDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Category Discount
                CategoryDiscount result = apiInstance.UpdateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateDiscountUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDiscountUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Category Discount
    ApiResponse<CategoryDiscount> response = apiInstance.UpdateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateDiscountUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **createUpdateDiscountRequest** | [**CreateUpdateDiscountRequest**](CreateUpdateDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**CategoryDiscount**](CategoryDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatediscountusingpatch1"></a>
# **UpdateDiscountUsingPATCH1**
> ShippingDiscount UpdateDiscountUsingPATCH1 (string discountId, UpdateShippingDiscountRequest updateShippingDiscountRequest, List<string>? updateMask = null)

Update a Shipping Discount

Updates a Shipping Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateDiscountUsingPATCH1Example
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var updateShippingDiscountRequest = new UpdateShippingDiscountRequest(); // UpdateShippingDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Shipping Discount
                ShippingDiscount result = apiInstance.UpdateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateDiscountUsingPATCH1: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateDiscountUsingPATCH1WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Shipping Discount
    ApiResponse<ShippingDiscount> response = apiInstance.UpdateDiscountUsingPATCH1WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateDiscountUsingPATCH1WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **updateShippingDiscountRequest** | [**UpdateShippingDiscountRequest**](UpdateShippingDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**ShippingDiscount**](ShippingDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatenotescustomfieldusingpatch"></a>
# **UpdateNotesCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateNotesCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Custom Field

Updates a custom field of the specified type and options to the Note object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateNotesCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Custom Field
                CustomFieldMetaData result = apiInstance.UpdateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateNotesCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateNotesCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateNotesCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateopportunitycustomfieldusingpatch"></a>
# **UpdateOpportunityCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateOpportunityCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Opportunity's Custom Field

Updates a custom field of the specified type and options to the Opportunity object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOpportunityCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Opportunity's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Opportunity's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateopportunitystageusingpatch"></a>
# **UpdateOpportunityStageUsingPATCH**
> RestOpportunityStage UpdateOpportunityStageUsingPATCH (string stageId, UpdateOpportunityStageRequest updateOpportunityStageRequest, List<string>? updateMask = null)

Update an Opportunity Stage

Updates specified values of a given Opportunity Stage

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOpportunityStageUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var stageId = "stageId_example";  // string | stage_id
            var updateOpportunityStageRequest = new UpdateOpportunityStageRequest(); // UpdateOpportunityStageRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Opportunity Stage
                RestOpportunityStage result = apiInstance.UpdateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityStageUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityStageUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Opportunity Stage
    ApiResponse<RestOpportunityStage> response = apiInstance.UpdateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityStageUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **stageId** | **string** | stage_id |  |
| **updateOpportunityStageRequest** | [**UpdateOpportunityStageRequest**](UpdateOpportunityStageRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestOpportunityStage**](RestOpportunityStage.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateopportunityusingpatch"></a>
# **UpdateOpportunityUsingPATCH**
> RestV2Opportunity UpdateOpportunityUsingPATCH (string opportunityId, PatchOpportunityRequest patchOpportunityRequest, List<string>? updateMask = null)

Update an opportunity

Updates specified values of a given opportunity

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOpportunityUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var opportunityId = "opportunityId_example";  // string | opportunity_id
            var patchOpportunityRequest = new PatchOpportunityRequest(); // PatchOpportunityRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an opportunity
                RestV2Opportunity result = apiInstance.UpdateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOpportunityUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an opportunity
    ApiResponse<RestV2Opportunity> response = apiInstance.UpdateOpportunityUsingPATCHWithHttpInfo(opportunityId, patchOpportunityRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateOpportunityUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **opportunityId** | **string** | opportunity_id |  |
| **patchOpportunityRequest** | [**PatchOpportunityRequest**](PatchOpportunityRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**RestV2Opportunity**](RestV2Opportunity.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateordercustomfieldusingpatch"></a>
# **UpdateOrderCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateOrderCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update an Order's Custom Field

Updates a custom field of the specified type and options to the Order object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOrderCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateOrderCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateOrderCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateordertotaldiscountusingpatch"></a>
# **UpdateOrderTotalDiscountUsingPATCH**
> OrderTotalDiscount UpdateOrderTotalDiscountUsingPATCH (string discountId, UpdateOrderTotalDiscountRequest updateOrderTotalDiscountRequest, List<string>? updateMask = null)

Update an Order Total Discount

Updates an Order Total Discount

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateOrderTotalDiscountUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var discountId = "discountId_example";  // string | discount_id
            var updateOrderTotalDiscountRequest = new UpdateOrderTotalDiscountRequest(); // UpdateOrderTotalDiscountRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update an Order Total Discount
                OrderTotalDiscount result = apiInstance.UpdateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateOrderTotalDiscountUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateOrderTotalDiscountUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Order Total Discount
    ApiResponse<OrderTotalDiscount> response = apiInstance.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateOrderTotalDiscountUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **discountId** | **string** | discount_id |  |
| **updateOrderTotalDiscountRequest** | [**UpdateOrderTotalDiscountRequest**](UpdateOrderTotalDiscountRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

### Return type

[**OrderTotalDiscount**](OrderTotalDiscount.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updateredirectlinkusingpatch"></a>
# **UpdateRedirectLinkUsingPATCH**
> AffiliateLink UpdateRedirectLinkUsingPATCH (string redirectId, CreateOrPatchAffiliateLinkRequest createOrPatchAffiliateLinkRequest)

Update an Affiliate Link

Updates an Affiliate Link

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateRedirectLinkUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var redirectId = "redirectId_example";  // string | redirect_id
            var createOrPatchAffiliateLinkRequest = new CreateOrPatchAffiliateLinkRequest(); // CreateOrPatchAffiliateLinkRequest | request

            try
            {
                // Update an Affiliate Link
                AffiliateLink result = apiInstance.UpdateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateRedirectLinkUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateRedirectLinkUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update an Affiliate Link
    ApiResponse<AffiliateLink> response = apiInstance.UpdateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrPatchAffiliateLinkRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateRedirectLinkUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **redirectId** | **string** | redirect_id |  |
| **createOrPatchAffiliateLinkRequest** | [**CreateOrPatchAffiliateLinkRequest**](CreateOrPatchAffiliateLinkRequest.md) | request |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatesubscriptioncustomfieldusingpatch"></a>
# **UpdateSubscriptionCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateSubscriptionCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Subscription's Custom Field

Updates a custom field of the specified type and options to the Subscription object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateSubscriptionCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Subscription's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateSubscriptionCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Subscription's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateSubscriptionCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatetaskcustomfieldusingpatch"></a>
# **UpdateTaskCustomFieldUsingPATCH**
> CustomFieldMetaData UpdateTaskCustomFieldUsingPATCH (string customFieldId, UpdateCustomFieldMetaDataRequest updateCustomFieldMetaDataRequest, List<string>? updateMask = null)

Update a Task's Custom Field

Updates a custom field of the specified type and options to the Task object.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Keap.Sdk.Core.Api;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Model;

namespace Example
{
    public class UpdateTaskCustomFieldUsingPATCHExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.infusionsoft.com/crm/rest/app";
            var apiInstance = new PreReleaseApi(config);
            var customFieldId = "customFieldId_example";  // string | custom_field_id
            var updateCustomFieldMetaDataRequest = new UpdateCustomFieldMetaDataRequest(); // UpdateCustomFieldMetaDataRequest | request
            var updateMask = new List<string>?(); // List<string>? | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. (optional) 

            try
            {
                // Update a Task's Custom Field
                CustomFieldMetaData result = apiInstance.UpdateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling PreReleaseApi.UpdateTaskCustomFieldUsingPATCH: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTaskCustomFieldUsingPATCHWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a Task's Custom Field
    ApiResponse<CustomFieldMetaData> response = apiInstance.UpdateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling PreReleaseApi.UpdateTaskCustomFieldUsingPATCHWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **customFieldId** | **string** | custom_field_id |  |
| **updateCustomFieldMetaDataRequest** | [**UpdateCustomFieldMetaDataRequest**](UpdateCustomFieldMetaDataRequest.md) | request |  |
| **updateMask** | [**List&lt;string&gt;?**](string.md) | An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

