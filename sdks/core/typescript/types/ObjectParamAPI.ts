import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
import { AddToAutomationSequenceRequest } from '../models/AddToAutomationSequenceRequest';
import { AddToAutomationSequenceResponse } from '../models/AddToAutomationSequenceResponse';
import { Address } from '../models/Address';
import { AddressInformation } from '../models/AddressInformation';
import { AffiliateAddToProgramRequest } from '../models/AffiliateAddToProgramRequest';
import { AffiliateCommission } from '../models/AffiliateCommission';
import { AffiliateCommissionEarned } from '../models/AffiliateCommissionEarned';
import { AffiliateCommissionProgramResponse } from '../models/AffiliateCommissionProgramResponse';
import { AffiliateLink } from '../models/AffiliateLink';
import { AffiliateProgramV2 } from '../models/AffiliateProgramV2';
import { AffiliateRemoveFromProgramRequest } from '../models/AffiliateRemoveFromProgramRequest';
import { AffiliateSummaryRecord } from '../models/AffiliateSummaryRecord';
import { ApplicationCompany } from '../models/ApplicationCompany';
import { ApplicationConfigurationModuleAffiliate } from '../models/ApplicationConfigurationModuleAffiliate';
import { ApplicationConfigurationModuleAffiliateCommission } from '../models/ApplicationConfigurationModuleAffiliateCommission';
import { ApplicationConfigurationModuleApplication } from '../models/ApplicationConfigurationModuleApplication';
import { ApplicationConfigurationModuleAppointment } from '../models/ApplicationConfigurationModuleAppointment';
import { ApplicationConfigurationModuleContact } from '../models/ApplicationConfigurationModuleContact';
import { ApplicationConfigurationModuleContactAddressLabels } from '../models/ApplicationConfigurationModuleContactAddressLabels';
import { ApplicationConfigurationModuleEcommerce } from '../models/ApplicationConfigurationModuleEcommerce';
import { ApplicationConfigurationModuleEmail } from '../models/ApplicationConfigurationModuleEmail';
import { ApplicationConfigurationModuleForms } from '../models/ApplicationConfigurationModuleForms';
import { ApplicationConfigurationModuleFulfillment } from '../models/ApplicationConfigurationModuleFulfillment';
import { ApplicationConfigurationModuleInvoice } from '../models/ApplicationConfigurationModuleInvoice';
import { ApplicationConfigurationModuleNote } from '../models/ApplicationConfigurationModuleNote';
import { ApplicationConfigurationModuleOpportunity } from '../models/ApplicationConfigurationModuleOpportunity';
import { ApplicationConfigurationModuleOpportunityStates } from '../models/ApplicationConfigurationModuleOpportunityStates';
import { ApplicationConfigurationModuleOpportunityStatesActive } from '../models/ApplicationConfigurationModuleOpportunityStatesActive';
import { ApplicationConfigurationModuleOpportunityStatesLoss } from '../models/ApplicationConfigurationModuleOpportunityStatesLoss';
import { ApplicationConfigurationModuleOpportunityStatesWin } from '../models/ApplicationConfigurationModuleOpportunityStatesWin';
import { ApplicationConfigurationModuleTask } from '../models/ApplicationConfigurationModuleTask';
import { ApplicationConfigurationModuleTemplate } from '../models/ApplicationConfigurationModuleTemplate';
import { ApplicationFeaturesEnabled } from '../models/ApplicationFeaturesEnabled';
import { ApplyRemoveTagRequest } from '../models/ApplyRemoveTagRequest';
import { ApplyTagsResponse } from '../models/ApplyTagsResponse';
import { Automation } from '../models/Automation';
import { AutomationCategory } from '../models/AutomationCategory';
import { AutomationLockStatus } from '../models/AutomationLockStatus';
import { BasicCompany } from '../models/BasicCompany';
import { BasicContact } from '../models/BasicContact';
import { BasicUser } from '../models/BasicUser';
import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
import { Campaign } from '../models/Campaign';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
import { CardInfo } from '../models/CardInfo';
import { CategoryDiscount } from '../models/CategoryDiscount';
import { CategoryReference } from '../models/CategoryReference';
import { CheckListItemDetails } from '../models/CheckListItemDetails';
import { ChecklistItem } from '../models/ChecklistItem';
import { Company } from '../models/Company';
import { Contact } from '../models/Contact';
import { ContactLink } from '../models/ContactLink';
import { ContactLinkType } from '../models/ContactLinkType';
import { ContactUtmResponse } from '../models/ContactUtmResponse';
import { Country } from '../models/Country';
import { CreateAffiliateRequest } from '../models/CreateAffiliateRequest';
import { CreateAutomationCategoryRequest } from '../models/CreateAutomationCategoryRequest';
import { CreateCommissionProgramRequest } from '../models/CreateCommissionProgramRequest';
import { CreateCompanyRequest } from '../models/CreateCompanyRequest';
import { CreateContactLinkTypeRequest } from '../models/CreateContactLinkTypeRequest';
import { CreateContactUtmPropertiesRequest } from '../models/CreateContactUtmPropertiesRequest';
import { CreateCustomFieldOptionRequest } from '../models/CreateCustomFieldOptionRequest';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateCustomFieldResponse } from '../models/CreateCustomFieldResponse';
import { CreateDefaultCommissionProgramRequest } from '../models/CreateDefaultCommissionProgramRequest';
import { CreateEmailSentRequest } from '../models/CreateEmailSentRequest';
import { CreateEmailsSentRequest } from '../models/CreateEmailsSentRequest';
import { CreateFileRequest } from '../models/CreateFileRequest';
import { CreateFunnelIntegrationRequest } from '../models/CreateFunnelIntegrationRequest';
import { CreateFunnelIntegrationTriggerEvents } from '../models/CreateFunnelIntegrationTriggerEvents';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { CreateNoteRequest } from '../models/CreateNoteRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageChecklistItem } from '../models/CreateOpportunityStageChecklistItem';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CreateOrPatchAffiliateLinkRequest } from '../models/CreateOrPatchAffiliateLinkRequest';
import { CreateOrderTotalDiscountRequest } from '../models/CreateOrderTotalDiscountRequest';
import { CreatePatchContactRequest } from '../models/CreatePatchContactRequest';
import { CreatePatchTaskRequest } from '../models/CreatePatchTaskRequest';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { CreatePaymentRequest } from '../models/CreatePaymentRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateProductRequest } from '../models/CreateProductRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CreateShippingDiscountRequest } from '../models/CreateShippingDiscountRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateSubscriptionV2 } from '../models/CreateSubscriptionV2';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CreateUpdateDiscountRequest } from '../models/CreateUpdateDiscountRequest';
import { CreateUpdateLeadSourceCategoryRequest } from '../models/CreateUpdateLeadSourceCategoryRequest';
import { CreateUpdateTagCategoryRequest } from '../models/CreateUpdateTagCategoryRequest';
import { CreateUpdateTagRequest } from '../models/CreateUpdateTagRequest';
import { CreateUserRequestV2 } from '../models/CreateUserRequestV2';
import { CurrencyValue } from '../models/CurrencyValue';
import { CustomField } from '../models/CustomField';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { CustomFieldOption } from '../models/CustomFieldOption';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { DefaultCommission } from '../models/DefaultCommission';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { Discount } from '../models/Discount';
import { DiscountCriteria } from '../models/DiscountCriteria';
import { EmailAddress } from '../models/EmailAddress';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailsSentList } from '../models/EmailsSentList';
import { FaxNumber } from '../models/FaxNumber';
import { FileMetadata } from '../models/FileMetadata';
import { FunnelIntegrationAction } from '../models/FunnelIntegrationAction';
import { FunnelIntegrationHttpRequest } from '../models/FunnelIntegrationHttpRequest';
import { FunnelIntegrationSchemaField } from '../models/FunnelIntegrationSchemaField';
import { FunnelIntegrationTriggerEventDTO } from '../models/FunnelIntegrationTriggerEventDTO';
import { FunnelIntegrationTriggerResultDTO } from '../models/FunnelIntegrationTriggerResultDTO';
import { GetApplicationEnabledStatusResponse } from '../models/GetApplicationEnabledStatusResponse';
import { GetBusinessProfileResponse } from '../models/GetBusinessProfileResponse';
import { GetContactOptionTypesResponse } from '../models/GetContactOptionTypesResponse';
import { GetNoteResponse } from '../models/GetNoteResponse';
import { GetSettingsResponse } from '../models/GetSettingsResponse';
import { GetTagCategoryResponse } from '../models/GetTagCategoryResponse';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { Goal } from '../models/Goal';
import { HistoricalCounts } from '../models/HistoricalCounts';
import { InvoiceOrderPayment } from '../models/InvoiceOrderPayment';
import { Item } from '../models/Item';
import { LandingPage } from '../models/LandingPage';
import { LeadScore } from '../models/LeadScore';
import { LeadSource } from '../models/LeadSource';
import { LeadSourceCategory } from '../models/LeadSourceCategory';
import { Link } from '../models/Link';
import { LinkContactsRequest } from '../models/LinkContactsRequest';
import { ListAffiliateCommissionProgramsResponse } from '../models/ListAffiliateCommissionProgramsResponse';
import { ListAffiliateCommissionResponse } from '../models/ListAffiliateCommissionResponse';
import { ListAffiliateLinksResponse } from '../models/ListAffiliateLinksResponse';
import { ListAffiliateSummariesResponse } from '../models/ListAffiliateSummariesResponse';
import { ListAutomationCategoryResponse } from '../models/ListAutomationCategoryResponse';
import { ListAutomationIdsResponse } from '../models/ListAutomationIdsResponse';
import { ListAutomationResponse } from '../models/ListAutomationResponse';
import { ListBasicContactResponse } from '../models/ListBasicContactResponse';
import { ListCampaignsResponse } from '../models/ListCampaignsResponse';
import { ListCategoryDiscountsResponse } from '../models/ListCategoryDiscountsResponse';
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListFilesResponse } from '../models/ListFilesResponse';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListNoteTemplateResponse } from '../models/ListNoteTemplateResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOrderPaymentsResponse } from '../models/ListOrderPaymentsResponse';
import { ListOrderTotalDiscountsResponse } from '../models/ListOrderTotalDiscountsResponse';
import { ListOrders } from '../models/ListOrders';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
import { ListRestMerchantAccountResponse } from '../models/ListRestMerchantAccountResponse';
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListShippingDiscountsResponse } from '../models/ListShippingDiscountsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { ModelError } from '../models/ModelError';
import { Note } from '../models/Note';
import { NoteTemplate } from '../models/NoteTemplate';
import { ObjectModel } from '../models/ObjectModel';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { OrderItemProduct } from '../models/OrderItemProduct';
import { OrderItemTax } from '../models/OrderItemTax';
import { OrderTotalDiscount } from '../models/OrderTotalDiscount';
import { Origin } from '../models/Origin';
import { OriginRequest } from '../models/OriginRequest';
import { PatchAffiliateRequest } from '../models/PatchAffiliateRequest';
import { PatchBusinessProfileRequest } from '../models/PatchBusinessProfileRequest';
import { PatchCommissionProgramRequest } from '../models/PatchCommissionProgramRequest';
import { PatchCompanyRequest } from '../models/PatchCompanyRequest';
import { PatchDefaultCommissionProgramRequest } from '../models/PatchDefaultCommissionProgramRequest';
import { PatchOpportunityRequest } from '../models/PatchOpportunityRequest';
import { PatchProductCommissionProgramRequest } from '../models/PatchProductCommissionProgramRequest';
import { PatchSubscriptionCommissionProgramRequest } from '../models/PatchSubscriptionCommissionProgramRequest';
import { PatchUserRequestV2 } from '../models/PatchUserRequestV2';
import { PaymentMethodConfig } from '../models/PaymentMethodConfig';
import { PaymentMethodList } from '../models/PaymentMethodList';
import { PaymentPlan } from '../models/PaymentPlan';
import { PaymentResult } from '../models/PaymentResult';
import { PhoneNumber } from '../models/PhoneNumber';
import { ProductCommission } from '../models/ProductCommission';
import { ProductCommissionProgram } from '../models/ProductCommissionProgram';
import { ProductFixedOption } from '../models/ProductFixedOption';
import { ProductInventory } from '../models/ProductInventory';
import { ProductOptions } from '../models/ProductOptions';
import { ProductVariableSetting } from '../models/ProductVariableSetting';
import { Provinces } from '../models/Provinces';
import { Referral } from '../models/Referral';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { ReportEntryValue } from '../models/ReportEntryValue';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestPaymentGateway } from '../models/RestPaymentGateway';
import { RestPaymentMethod } from '../models/RestPaymentMethod';
import { RestProductOption } from '../models/RestProductOption';
import { RestProductOptionValue } from '../models/RestProductOptionValue';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { RestV2PatchOrderRequest } from '../models/RestV2PatchOrderRequest';
import { RestV2Product } from '../models/RestV2Product';
import { RestV2Subscription } from '../models/RestV2Subscription';
import { RestV2User } from '../models/RestV2User';
import { SaveAutomationCategoryRequest } from '../models/SaveAutomationCategoryRequest';
import { Sequence } from '../models/Sequence';
import { SequencePath } from '../models/SequencePath';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { ShippingDiscount } from '../models/ShippingDiscount';
import { ShippingInformation } from '../models/ShippingInformation';
import { ShippingMethod } from '../models/ShippingMethod';
import { SocialAccount } from '../models/SocialAccount';
import { StackTraceElement } from '../models/StackTraceElement';
import { StageDetails } from '../models/StageDetails';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { Tag } from '../models/Tag';
import { TaggedCompany } from '../models/TaggedCompany';
import { Task } from '../models/Task';
import { Throwable } from '../models/Throwable';
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
import { UpdateFileRequest } from '../models/UpdateFileRequest';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
import { UpdateOpportunityStageChecklistItem } from '../models/UpdateOpportunityStageChecklistItem';
import { UpdateOpportunityStageRequest } from '../models/UpdateOpportunityStageRequest';
import { UpdateOrderTotalDiscountRequest } from '../models/UpdateOrderTotalDiscountRequest';
import { UpdateProductInventoryRequest } from '../models/UpdateProductInventoryRequest';
import { UpdateShippingDiscountRequest } from '../models/UpdateShippingDiscountRequest';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { User } from '../models/User';

import { ObservableAffiliateApi } from "./ObservableAPI";
import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";

export interface AffiliateApiAddAffiliateToProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiaddAffiliateToProgramUsingPOST
     */
    id: string
    /**
     * affiliateAddToProgramRequest
     * @type AffiliateAddToProgramRequest
     * @memberof AffiliateApiaddAffiliateToProgramUsingPOST
     */
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest
}

export interface AffiliateApiAddAffiliateUsingPOSTRequest {
    /**
     * Affiliate request to insert
     * @type CreateAffiliateRequest
     * @memberof AffiliateApiaddAffiliateUsingPOST
     */
    createAffiliateRequest?: CreateAffiliateRequest
}

export interface AffiliateApiAddCommissionProgramUsingPOSTRequest {
    /**
     * Commission Program to insert
     * @type CreateCommissionProgramRequest
     * @memberof AffiliateApiaddCommissionProgramUsingPOST
     */
    createCommissionProgramRequest?: CreateCommissionProgramRequest
}

export interface AffiliateApiAssignProductCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignProductCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Product Commission Program
     * @type CreateProductCommissionProgramRequest
     * @memberof AffiliateApiassignProductCommissionProgramUsingPOST
     */
    createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest
}

export interface AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiassignSubscriptionCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Subscription Commission Program
     * @type CreateSubscriptionCommissionProgramRequest
     * @memberof AffiliateApiassignSubscriptionCommissionProgramUsingPOST
     */
    createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest
}

export interface AffiliateApiCreateAffiliateCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof AffiliateApicreateAffiliateCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApicreateDefaultCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Values of the Default Commission Program
     * @type CreateDefaultCommissionProgramRequest
     * @memberof AffiliateApicreateDefaultCommissionProgramUsingPOST
     */
    createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest
}

export interface AffiliateApiCreateRedirectLinkUsingPOSTRequest {
    /**
     * request
     * @type CreateOrPatchAffiliateLinkRequest
     * @memberof AffiliateApicreateRedirectLinkUsingPOST
     */
    createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest
}

export interface AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateCommissionProgramUsingDELETE
     */
    commissionProgramId: string
}

export interface AffiliateApiDeleteAffiliateUsingDELETERequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteAffiliateUsingDELETE
     */
    id: string
}

export interface AffiliateApiDeleteRedirectLinkUsingDELETERequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApideleteRedirectLinkUsingDELETE
     */
    redirectId: string
}

export interface AffiliateApiGetAffiliateCommissionTotalUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionTotalUsingGET
     */
    affiliateId: string
}

export interface AffiliateApiGetAffiliateCommissionsUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    affiliateId: string
    /**
     * Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateCommissionsUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiGetAffiliateCustomFieldsUsingGETRequest {
}

export interface AffiliateApiGetAffiliateUsingGET1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetAffiliateUsingGET1
     */
    id: string
}

export interface AffiliateApiGetCommissionProgramUsingGETRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetCommissionProgramUsingGET
     */
    commissionProgramId: string
}

export interface AffiliateApiGetRedirectLinkUsingGETRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApigetRedirectLinkUsingGET
     */
    redirectId: string
}

export interface AffiliateApiListAffiliateCommissionProgramsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateCommissionProgramsUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiListAffiliateLinksUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistAffiliateLinksUsingGET
     */
    pageToken?: string
}

export interface AffiliateApiListSummariesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApilistSummariesUsingGET1
     */
    pageToken?: string
}

export interface AffiliateApiPatchCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApipatchCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * patchCommissionProgramRequest
     * @type PatchCommissionProgramRequest
     * @memberof AffiliateApipatchCommissionProgramUsingPATCH
     */
    patchCommissionProgramRequest: PatchCommissionProgramRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApipatchCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
}

export interface AffiliateApiPatchDefaultCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApipatchDefaultCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApipatchDefaultCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the default Commission Program
     * @type PatchDefaultCommissionProgramRequest
     * @memberof AffiliateApipatchDefaultCommissionProgramUsingPATCH
     */
    patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest
}

export interface AffiliateApiPatchProductCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApipatchProductCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApipatchProductCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the product Commission Program
     * @type PatchProductCommissionProgramRequest
     * @memberof AffiliateApipatchProductCommissionProgramUsingPATCH
     */
    patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest
}

export interface AffiliateApiPatchSubscriptionCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApipatchSubscriptionCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApipatchSubscriptionCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the subscription Commission Program
     * @type PatchSubscriptionCommissionProgramRequest
     * @memberof AffiliateApipatchSubscriptionCommissionProgramUsingPATCH
     */
    patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest
}

export interface AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveAffiliateFromProgramUsingPOST
     */
    id: string
    /**
     * removeFromProgramRequest
     * @type AffiliateRemoveFromProgramRequest
     * @memberof AffiliateApiremoveAffiliateFromProgramUsingPOST
     */
    affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest
}

export interface AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest {
    /**
     * commission_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    commissionId: string
    /**
     * deleteSubscriptionPlanCommissionRequest
     * @type DeleteSubscriptionPlanCommissionRequest
     * @memberof AffiliateApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest
}

export interface AffiliateApiUpdateAffiliateCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateAffiliateCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof AffiliateApiupdateAffiliateCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AffiliateApiupdateAffiliateCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface AffiliateApiUpdateAffiliateUsingPATCHRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateAffiliateUsingPATCH
     */
    id: string
    /**
     * Affiliate request to patch
     * @type PatchAffiliateRequest
     * @memberof AffiliateApiupdateAffiliateUsingPATCH
     */
    patchAffiliateRequest?: PatchAffiliateRequest
}

export interface AffiliateApiUpdateRedirectLinkUsingPATCHRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof AffiliateApiupdateRedirectLinkUsingPATCH
     */
    redirectId: string
    /**
     * request
     * @type CreateOrPatchAffiliateLinkRequest
     * @memberof AffiliateApiupdateRedirectLinkUsingPATCH
     */
    createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest
}

export class ObjectAffiliateApi {
    private api: ObservableAffiliateApi

    public constructor(configuration: Configuration, requestFactory?: AffiliateApiRequestFactory, responseProcessor?: AffiliateApiResponseProcessor) {
        this.api = new ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOST(param: AffiliateApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.addAffiliateToProgramUsingPOST(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.addAffiliateUsingPOSTWithHttpInfo(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param param the request object
     */
    public addAffiliateUsingPOST(param: AffiliateApiAddAffiliateUsingPOSTRequest = {}, options?: Configuration): Promise<RestAffiliate> {
        return this.api.addAffiliateUsingPOST(param.createAffiliateRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAddCommissionProgramUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.addCommissionProgramUsingPOSTWithHttpInfo(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOST(param: AffiliateApiAddCommissionProgramUsingPOSTRequest = {}, options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        return this.api.addCommissionProgramUsingPOST(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOST(param: AffiliateApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<ProductCommissionProgram> {
        return this.api.assignProductCommissionProgramUsingPOST(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOST(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SubscriptionCommissionProgram> {
        return this.api.assignSubscriptionCommissionProgramUsingPOST(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(param: AffiliateApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomFieldUsingPOST(param: AffiliateApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createAffiliateCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOST(param: AffiliateApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.createDefaultCommissionProgramUsingPOST(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(param: AffiliateApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.createRedirectLinkUsingPOSTWithHttpInfo(param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOST(param: AffiliateApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.createRedirectLinkUsingPOST(param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETE(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETE(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateUsingDELETEWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETE(param: AffiliateApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAffiliateUsingDELETE(param.id,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(param: AffiliateApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETE(param: AffiliateApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteRedirectLinkUsingDELETE(param.redirectId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>> {
        return this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(param.affiliateId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGET(param: AffiliateApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<AffiliateCommissionEarned> {
        return this.api.getAffiliateCommissionTotalUsingGET(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>> {
        return this.api.getAffiliateCommissionsUsingGETWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGET(param: AffiliateApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<ListAffiliateCommissionResponse> {
        return this.api.getAffiliateCommissionsUsingGET(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCustomFieldsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFieldsUsingGET(param: AffiliateApiGetAffiliateCustomFieldsUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.getAffiliateCustomFieldsUsingGET( options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1WithHttpInfo(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.getAffiliateUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param param the request object
     */
    public getAffiliateUsingGET1(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<RestAffiliate> {
        return this.api.getAffiliateUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGETWithHttpInfo(param: AffiliateApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>> {
        return this.api.getCommissionProgramUsingGETWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGET(param: AffiliateApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<AffiliateProgramV2> {
        return this.api.getCommissionProgramUsingGET(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGETWithHttpInfo(param: AffiliateApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.getRedirectLinkUsingGETWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGET(param: AffiliateApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.getRedirectLinkUsingGET(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(param: AffiliateApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        return this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGET(param: AffiliateApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse> {
        return this.api.listAffiliateCommissionProgramsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGETWithHttpInfo(param: AffiliateApiListAffiliateLinksUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        return this.api.listAffiliateLinksUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGET(param: AffiliateApiListAffiliateLinksUsingGETRequest = {}, options?: Configuration): Promise<ListAffiliateLinksResponse> {
        return this.api.listAffiliateLinksUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1WithHttpInfo(param: AffiliateApiListSummariesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        return this.api.listSummariesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1(param: AffiliateApiListSummariesUsingGET1Request = {}, options?: Configuration): Promise<ListAffiliateSummariesResponse> {
        return this.api.listSummariesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param param the request object
     */
    public patchCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.patchCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.patchCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param param the request object
     */
    public patchCommissionProgramUsingPATCH(param: AffiliateApiPatchCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        return this.api.patchCommissionProgramUsingPATCH(param.commissionProgramId, param.patchCommissionProgramRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public patchDefaultCommissionProgramUsingPATCH(param: AffiliateApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.patchDefaultCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public patchProductCommissionProgramUsingPATCH(param: AffiliateApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<ProductCommissionProgram> {
        return this.api.patchProductCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public patchSubscriptionCommissionProgramUsingPATCH(param: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SubscriptionCommissionProgram> {
        return this.api.patchSubscriptionCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(param: AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOST(param: AffiliateApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeAffiliateFromProgramUsingPOST(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomFieldUsingPATCH(param: AffiliateApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateAffiliateCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        return this.api.updateAffiliateUsingPATCHWithHttpInfo(param.id, param.patchAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param param the request object
     */
    public updateAffiliateUsingPATCH(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<RestAffiliate> {
        return this.api.updateAffiliateUsingPATCH(param.id, param.patchAffiliateRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(param: AffiliateApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.updateRedirectLinkUsingPATCHWithHttpInfo(param.redirectId, param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCH(param: AffiliateApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.updateRedirectLinkUsingPATCH(param.redirectId, param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

}

import { ObservableAutomationApi } from "./ObservableAPI";
import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";

export interface AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest {
    /**
     * automation_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    automationId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    sequenceId: string
    /**
     * addToAutomationSequenceRequest
     * @type AddToAutomationSequenceRequest
     * @memberof AutomationApiaddContactsToAutomationSequenceUsingPOST
     */
    addToAutomationSequenceRequest: AddToAutomationSequenceRequest
}

export interface AutomationApiDeleteAutomationUsingDELETERequest {
    /**
     * automation_ids
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationApideleteAutomationUsingDELETE
     */
    automationIds: Array<number>
}

export interface AutomationApiGetAutomationUsingGETRequest {
    /**
     * automation_id
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApigetAutomationUsingGET
     */
    automationId: string
}

export interface AutomationApiListAllAutomationIdsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AutomationApilistAllAutomationIdsUsingGET
     */
    stats?: boolean
}

export interface AutomationApiListAutomationsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof AutomationApilistAutomationsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof AutomationApilistAutomationsUsingGET
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AutomationApilistAutomationsUsingGET
     */
    stats?: boolean
}

export interface AutomationApiUpdateAutomationCategoryUsingPUTRequest {
    /**
     * updateAutomationCategoryRequest
     * @type UpdateAutomationCategoryRequest
     * @memberof AutomationApiupdateAutomationCategoryUsingPUT
     */
    updateAutomationCategoryRequest: UpdateAutomationCategoryRequest
}

export class ObjectAutomationApi {
    private api: ObservableAutomationApi

    public constructor(configuration: Configuration, requestFactory?: AutomationApiRequestFactory, responseProcessor?: AutomationApiResponseProcessor) {
        this.api = new ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        return this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param param the request object
     */
    public addContactsToAutomationSequenceUsingPOST(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<AddToAutomationSequenceResponse> {
        return this.api.addContactsToAutomationSequenceUsingPOST(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETEWithHttpInfo(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAutomationUsingDELETEWithHttpInfo(param.automationIds,  options).toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param param the request object
     */
    public deleteAutomationUsingDELETE(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAutomationUsingDELETE(param.automationIds,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGETWithHttpInfo(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<HttpInfo<Automation>> {
        return this.api.getAutomationUsingGETWithHttpInfo(param.automationId,  options).toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param param the request object
     */
    public getAutomationUsingGET(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<Automation> {
        return this.api.getAutomationUsingGET(param.automationId,  options).toPromise();
    }

    /**
     * Lists all automations ids based on the request parameters.
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGETWithHttpInfo(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationIdsResponse>> {
        return this.api.listAllAutomationIdsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Lists all automations ids based on the request parameters.
     * List Automations Ids
     * @param param the request object
     */
    public listAllAutomationIdsUsingGET(param: AutomationApiListAllAutomationIdsUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationIdsResponse> {
        return this.api.listAllAutomationIdsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Lists all automations based on the request parameters.
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGETWithHttpInfo(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationResponse>> {
        return this.api.listAutomationsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Lists all automations based on the request parameters.
     * List Automations
     * @param param the request object
     */
    public listAutomationsUsingGET(param: AutomationApiListAutomationsUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationResponse> {
        return this.api.listAutomationsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAutomationCategoryUsingPUTWithHttpInfo(param.updateAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param param the request object
     */
    public updateAutomationCategoryUsingPUT(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<void> {
        return this.api.updateAutomationCategoryUsingPUT(param.updateAutomationCategoryRequest,  options).toPromise();
    }

}

import { ObservableAutomationCategoryApi } from "./ObservableAPI";
import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";

export interface AutomationCategoryApiCreateCategoryUsingPOSTRequest {
    /**
     * createAutomationCategoryRequest
     * @type CreateAutomationCategoryRequest
     * @memberof AutomationCategoryApicreateCategoryUsingPOST
     */
    createAutomationCategoryRequest: CreateAutomationCategoryRequest
}

export interface AutomationCategoryApiDeleteCategoriesUsingDELETERequest {
    /**
     * ids
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof AutomationCategoryApideleteCategoriesUsingDELETE
     */
    ids: Array<number>
}

export interface AutomationCategoryApiListCategoriesUsingGETRequest {
}

export interface AutomationCategoryApiSaveCategoryUsingPUTRequest {
    /**
     * saveAutomationCategoryRequest
     * @type SaveAutomationCategoryRequest
     * @memberof AutomationCategoryApisaveCategoryUsingPUT
     */
    saveAutomationCategoryRequest: SaveAutomationCategoryRequest
}

export class ObjectAutomationCategoryApi {
    private api: ObservableAutomationCategoryApi

    public constructor(configuration: Configuration, requestFactory?: AutomationCategoryApiRequestFactory, responseProcessor?: AutomationCategoryApiResponseProcessor) {
        this.api = new ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategoryUsingPOSTWithHttpInfo(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        return this.api.createCategoryUsingPOSTWithHttpInfo(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param param the request object
     */
    public createCategoryUsingPOST(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<AutomationCategory> {
        return this.api.createCategoryUsingPOST(param.createAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCategoriesUsingDELETEWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param param the request object
     */
    public deleteCategoriesUsingDELETE(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteCategoriesUsingDELETE(param.ids,  options).toPromise();
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGETWithHttpInfo(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        return this.api.listCategoriesUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     * @param param the request object
     */
    public listCategoriesUsingGET(param: AutomationCategoryApiListCategoriesUsingGETRequest = {}, options?: Configuration): Promise<ListAutomationCategoryResponse> {
        return this.api.listCategoriesUsingGET( options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUTWithHttpInfo(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        return this.api.saveCategoryUsingPUTWithHttpInfo(param.saveAutomationCategoryRequest,  options).toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param param the request object
     */
    public saveCategoryUsingPUT(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<AutomationCategory> {
        return this.api.saveCategoryUsingPUT(param.saveAutomationCategoryRequest,  options).toPromise();
    }

}

import { ObservableBusinessProfileApi } from "./ObservableAPI";
import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";

export interface BusinessProfileApiGetBusinessProfileUsingGETRequest {
}

export interface BusinessProfileApiPatchBusinessProfileUsingPATCHRequest {
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BusinessProfileApipatchBusinessProfileUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * businessProfile
     * @type PatchBusinessProfileRequest
     * @memberof BusinessProfileApipatchBusinessProfileUsingPATCH
     */
    patchBusinessProfileRequest?: PatchBusinessProfileRequest
}

export class ObjectBusinessProfileApi {
    private api: ObservableBusinessProfileApi

    public constructor(configuration: Configuration, requestFactory?: BusinessProfileApiRequestFactory, responseProcessor?: BusinessProfileApiResponseProcessor) {
        this.api = new ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfileUsingGETWithHttpInfo(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.getBusinessProfileUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     * @param param the request object
     */
    public getBusinessProfileUsingGET(param: BusinessProfileApiGetBusinessProfileUsingGETRequest = {}, options?: Configuration): Promise<GetBusinessProfileResponse> {
        return this.api.getBusinessProfileUsingGET( options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public patchBusinessProfileUsingPATCHWithHttpInfo(param: BusinessProfileApiPatchBusinessProfileUsingPATCHRequest = {}, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        return this.api.patchBusinessProfileUsingPATCHWithHttpInfo(param.updateMask, param.patchBusinessProfileRequest,  options).toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param param the request object
     */
    public patchBusinessProfileUsingPATCH(param: BusinessProfileApiPatchBusinessProfileUsingPATCHRequest = {}, options?: Configuration): Promise<GetBusinessProfileResponse> {
        return this.api.patchBusinessProfileUsingPATCH(param.updateMask, param.patchBusinessProfileRequest,  options).toPromise();
    }

}

import { ObservableCampaignApi } from "./ObservableAPI";
import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";

export interface CampaignApiAddContactsToCampaignSequenceUsingPOST1Request {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    campaignId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    sequenceId: string
    /**
     * addContactsToSequenceRequest
     * @type AddContactsToSequenceRequest
     * @memberof CampaignApiaddContactsToCampaignSequenceUsingPOST1
     */
    addContactsToSequenceRequest: AddContactsToSequenceRequest
}

export interface CampaignApiGetCampaignUsingGET1Request {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApigetCampaignUsingGET1
     */
    campaignId: string
}

export interface CampaignApiListCampaignsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name.   - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof CampaignApilistCampaignsUsingGET1
     */
    stats?: boolean
}

export interface CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest {
    /**
     * campaign_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
     */
    campaignId: string
    /**
     * sequence_id
     * Defaults to: undefined
     * @type string
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
     */
    sequenceId: string
    /**
     * removeContactsFromSequenceRequest
     * @type RemoveContactsFromSequenceRequest
     * @memberof CampaignApiremoveContactsFromCampaignSequenceUsingPOST
     */
    removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest
}

export class ObjectCampaignApi {
    private api: ObservableCampaignApi

    public constructor(configuration: Configuration, requestFactory?: CampaignApiRequestFactory, responseProcessor?: CampaignApiResponseProcessor) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        return this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param param the request object
     */
    public addContactsToCampaignSequenceUsingPOST1(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<AddContactsToSequenceResponse> {
        return this.api.addContactsToCampaignSequenceUsingPOST1(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1WithHttpInfo(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<HttpInfo<Campaign>> {
        return this.api.getCampaignUsingGET1WithHttpInfo(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param param the request object
     */
    public getCampaignUsingGET1(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<Campaign> {
        return this.api.getCampaignUsingGET1(param.campaignId,  options).toPromise();
    }

    /**
     * Retrieves all campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1WithHttpInfo(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListCampaignsResponse>> {
        return this.api.listCampaignsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Retrieves all campaigns for the authenticated user
     * List Campaigns
     * @param param the request object
     */
    public listCampaignsUsingGET1(param: CampaignApiListCampaignsUsingGET1Request = {}, options?: Configuration): Promise<ListCampaignsResponse> {
        return this.api.listCampaignsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        return this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param param the request object
     */
    public removeContactsFromCampaignSequenceUsingPOST(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<RemoveContactsFromSequenceResponse> {
        return this.api.removeContactsFromCampaignSequenceUsingPOST(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest,  options).toPromise();
    }

}

import { ObservableCategoryDiscountApi } from "./ObservableAPI";
import { CategoryDiscountApiRequestFactory, CategoryDiscountApiResponseProcessor} from "../apis/CategoryDiscountApi";

export interface CategoryDiscountApiCreateDiscountUsingPOSTRequest {
    /**
     * request
     * @type CreateUpdateDiscountRequest
     * @memberof CategoryDiscountApicreateDiscountUsingPOST
     */
    createUpdateDiscountRequest: CreateUpdateDiscountRequest
}

export interface CategoryDiscountApiDeleteDiscountUsingDELETERequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApideleteDiscountUsingDELETE
     */
    discountId: string
}

export interface CategoryDiscountApiGetDiscountUsingGETRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApigetDiscountUsingGET
     */
    discountId: string
}

export interface CategoryDiscountApiListCategoryDiscountsUsingGETRequest {
    /**
     * Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApilistCategoryDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApilistCategoryDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CategoryDiscountApilistCategoryDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApilistCategoryDiscountsUsingGET
     */
    pageToken?: string
}

export interface CategoryDiscountApiUpdateDiscountUsingPATCHRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof CategoryDiscountApiupdateDiscountUsingPATCH
     */
    discountId: string
    /**
     * request
     * @type CreateUpdateDiscountRequest
     * @memberof CategoryDiscountApiupdateDiscountUsingPATCH
     */
    createUpdateDiscountRequest: CreateUpdateDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CategoryDiscountApiupdateDiscountUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectCategoryDiscountApi {
    private api: ObservableCategoryDiscountApi

    public constructor(configuration: Configuration, requestFactory?: CategoryDiscountApiRequestFactory, responseProcessor?: CategoryDiscountApiResponseProcessor) {
        this.api = new ObservableCategoryDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param param the request object
     */
    public createDiscountUsingPOSTWithHttpInfo(param: CategoryDiscountApiCreateDiscountUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.createDiscountUsingPOSTWithHttpInfo(param.createUpdateDiscountRequest,  options).toPromise();
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param param the request object
     */
    public createDiscountUsingPOST(param: CategoryDiscountApiCreateDiscountUsingPOSTRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.createDiscountUsingPOST(param.createUpdateDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETEWithHttpInfo(param: CategoryDiscountApiDeleteDiscountUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETEWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE(param: CategoryDiscountApiDeleteDiscountUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getDiscountUsingGETWithHttpInfo(param: CategoryDiscountApiGetDiscountUsingGETRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.getDiscountUsingGETWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getDiscountUsingGET(param: CategoryDiscountApiGetDiscountUsingGETRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.getDiscountUsingGET(param.discountId,  options).toPromise();
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscountsUsingGETWithHttpInfo(param: CategoryDiscountApiListCategoryDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListCategoryDiscountsResponse>> {
        return this.api.listCategoryDiscountsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscountsUsingGET(param: CategoryDiscountApiListCategoryDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListCategoryDiscountsResponse> {
        return this.api.listCategoryDiscountsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCHWithHttpInfo(param: CategoryDiscountApiUpdateDiscountUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.updateDiscountUsingPATCHWithHttpInfo(param.discountId, param.createUpdateDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH(param: CategoryDiscountApiUpdateDiscountUsingPATCHRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.updateDiscountUsingPATCH(param.discountId, param.createUpdateDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableCompanyApi } from "./ObservableAPI";
import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";

export interface CompanyApiCreateCompanyUsingPOST1Request {
    /**
     * company
     * @type CreateCompanyRequest
     * @memberof CompanyApicreateCompanyUsingPOST1
     */
    createCompanyRequest?: CreateCompanyRequest
}

export interface CompanyApiDeleteCompanyUsingDELETERequest {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApideleteCompanyUsingDELETE
     */
    companyId: string
}

export interface CompanyApiGetCompanyUsingGET1Request {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApigetCompanyUsingGET1
     */
    companyId: string
    /**
     * Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApigetCompanyUsingGET1
     */
    fields?: Array<string>
}

export interface CompanyApiListCompaniesUsingGET1Request {
    /**
     * Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    fields?: Array<string>
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApilistCompaniesUsingGET1
     */
    pageToken?: string
}

export interface CompanyApiPatchCompanyUsingPATCHRequest {
    /**
     * company_id
     * Defaults to: undefined
     * @type string
     * @memberof CompanyApipatchCompanyUsingPATCH
     */
    companyId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof CompanyApipatchCompanyUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * company
     * @type PatchCompanyRequest
     * @memberof CompanyApipatchCompanyUsingPATCH
     */
    patchCompanyRequest?: PatchCompanyRequest
}

export class ObjectCompanyApi {
    private api: ObservableCompanyApi

    public constructor(configuration: Configuration, requestFactory?: CompanyApiRequestFactory, responseProcessor?: CompanyApiResponseProcessor) {
        this.api = new ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompanyUsingPOST1WithHttpInfo(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.createCompanyUsingPOST1WithHttpInfo(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param param the request object
     */
    public createCompanyUsingPOST1(param: CompanyApiCreateCompanyUsingPOST1Request = {}, options?: Configuration): Promise<Company> {
        return this.api.createCompanyUsingPOST1(param.createCompanyRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETEWithHttpInfo(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCompanyUsingDELETEWithHttpInfo(param.companyId,  options).toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param param the request object
     */
    public deleteCompanyUsingDELETE(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteCompanyUsingDELETE(param.companyId,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1WithHttpInfo(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.getCompanyUsingGET1WithHttpInfo(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param param the request object
     */
    public getCompanyUsingGET1(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<Company> {
        return this.api.getCompanyUsingGET1(param.companyId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1WithHttpInfo(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListCompaniesResponse>> {
        return this.api.listCompaniesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param param the request object
     */
    public listCompaniesUsingGET1(param: CompanyApiListCompaniesUsingGET1Request = {}, options?: Configuration): Promise<ListCompaniesResponse> {
        return this.api.listCompaniesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public patchCompanyUsingPATCHWithHttpInfo(param: CompanyApiPatchCompanyUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.patchCompanyUsingPATCHWithHttpInfo(param.companyId, param.updateMask, param.patchCompanyRequest,  options).toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param param the request object
     */
    public patchCompanyUsingPATCH(param: CompanyApiPatchCompanyUsingPATCHRequest, options?: Configuration): Promise<Company> {
        return this.api.patchCompanyUsingPATCH(param.companyId, param.updateMask, param.patchCompanyRequest,  options).toPromise();
    }

}

import { ObservableContactApi } from "./ObservableAPI";
import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";

export interface ContactApiCreateContactLinkTypeUsingPOSTRequest {
    /**
     * request
     * @type CreateContactLinkTypeRequest
     * @memberof ContactApicreateContactLinkTypeUsingPOST
     */
    createContactLinkTypeRequest: CreateContactLinkTypeRequest
}

export interface ContactApiCreateContactUsingPOST1Request {
    /**
     * contact
     * @type CreatePatchContactRequest
     * @memberof ContactApicreateContactUsingPOST1
     */
    createPatchContactRequest?: CreatePatchContactRequest
}

export interface ContactApiDeleteContactUsingDELETE1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApideleteContactUsingDELETE1
     */
    contactId: string
}

export interface ContactApiGetContactUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContactUsingGET1
     */
    contactId: string
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApigetContactUsingGET1
     */
    fields?: Array<string>
}

export interface ContactApiGetContactsBySearchTermUsingGETRequest {
    /**
     * searchParam
     * Defaults to: undefined
     * @type string
     * @memberof ContactApigetContactsBySearchTermUsingGET
     */
    searchParam: string
}

export interface ContactApiLinkContactsUsingPOSTRequest {
    /**
     * linkContactsRequest
     * @type LinkContactsRequest
     * @memberof ContactApilinkContactsUsingPOST
     */
    linkContactsRequest: LinkContactsRequest
}

export interface ContactApiListContactLinkTypesUsingGETRequest {
    /**
     * Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * Defaults to: undefined
     * @type &#39;name&#39;
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    filter?: 'name'
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    orderBy?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    pageSize?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinkTypesUsingGET
     */
    pageToken?: string
}

export interface ContactApiListContactLinksUsingGETRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactLinksUsingGET
     */
    contactId: string
}

export interface ContactApiListContactsUsingGET1Request {
    /**
     * Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApilistContactsUsingGET1
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistContactsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ContactApilistContactsUsingGET1
     */
    pageToken?: string
}

export interface ContactApiListPaymentMethodsUsingGETRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type number
     * @memberof ContactApilistPaymentMethodsUsingGET
     */
    contactId: number
}

export interface ContactApiPatchContactUsingPATCHRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof ContactApipatchContactUsingPATCH
     */
    contactId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ContactApipatchContactUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * contact
     * @type CreatePatchContactRequest
     * @memberof ContactApipatchContactUsingPATCH
     */
    createPatchContactRequest?: CreatePatchContactRequest
}

export interface ContactApiRetrieveContactModelUsingGET1Request {
}

export interface ContactApiUnlinkContactsUsingPOSTRequest {
    /**
     * linkContactsRequest
     * @type LinkContactsRequest
     * @memberof ContactApiunlinkContactsUsingPOST
     */
    linkContactsRequest: LinkContactsRequest
}

export class ObjectContactApi {
    private api: ObservableContactApi

    public constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLinkType>> {
        return this.api.createContactLinkTypeUsingPOSTWithHttpInfo(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param param the request object
     */
    public createContactLinkTypeUsingPOST(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<ContactLinkType> {
        return this.api.createContactLinkTypeUsingPOST(param.createContactLinkTypeRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1WithHttpInfo(param: ContactApiCreateContactUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.createContactUsingPOST1WithHttpInfo(param.createPatchContactRequest,  options).toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param param the request object
     */
    public createContactUsingPOST1(param: ContactApiCreateContactUsingPOST1Request = {}, options?: Configuration): Promise<Contact> {
        return this.api.createContactUsingPOST1(param.createPatchContactRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1WithHttpInfo(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteContactUsingDELETE1WithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param param the request object
     */
    public deleteContactUsingDELETE1(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteContactUsingDELETE1(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1WithHttpInfo(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.getContactUsingGET1WithHttpInfo(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param param the request object
     */
    public getContactUsingGET1(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<Contact> {
        return this.api.getContactUsingGET1(param.contactId, param.fields,  options).toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param param the request object
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(param: ContactApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>> {
        return this.api.getContactsBySearchTermUsingGETWithHttpInfo(param.searchParam,  options).toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param param the request object
     */
    public getContactsBySearchTermUsingGET(param: ContactApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<ListBasicContactResponse> {
        return this.api.getContactsBySearchTermUsingGET(param.searchParam,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOSTWithHttpInfo(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLink>> {
        return this.api.linkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param param the request object
     */
    public linkContactsUsingPOST(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<ContactLink> {
        return this.api.linkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGETWithHttpInfo(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        return this.api.listContactLinkTypesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param param the request object
     */
    public listContactLinkTypesUsingGET(param: ContactApiListContactLinkTypesUsingGETRequest = {}, options?: Configuration): Promise<ListContactLinkTypesResponse> {
        return this.api.listContactLinkTypesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGETWithHttpInfo(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListContactLinksResponse>> {
        return this.api.listContactLinksUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param param the request object
     */
    public listContactLinksUsingGET(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<ListContactLinksResponse> {
        return this.api.listContactLinksUsingGET(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1WithHttpInfo(param: ContactApiListContactsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListContactsResponse>> {
        return this.api.listContactsUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param param the request object
     */
    public listContactsUsingGET1(param: ContactApiListContactsUsingGET1Request = {}, options?: Configuration): Promise<ListContactsResponse> {
        return this.api.listContactsUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param param the request object
     */
    public listPaymentMethodsUsingGETWithHttpInfo(param: ContactApiListPaymentMethodsUsingGETRequest, options?: Configuration): Promise<HttpInfo<PaymentMethodList>> {
        return this.api.listPaymentMethodsUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param param the request object
     */
    public listPaymentMethodsUsingGET(param: ContactApiListPaymentMethodsUsingGETRequest, options?: Configuration): Promise<PaymentMethodList> {
        return this.api.listPaymentMethodsUsingGET(param.contactId,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public patchContactUsingPATCHWithHttpInfo(param: ContactApiPatchContactUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.patchContactUsingPATCHWithHttpInfo(param.contactId, param.updateMask, param.createPatchContactRequest,  options).toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param param the request object
     */
    public patchContactUsingPATCH(param: ContactApiPatchContactUsingPATCHRequest, options?: Configuration): Promise<Contact> {
        return this.api.patchContactUsingPATCH(param.contactId, param.updateMask, param.createPatchContactRequest,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1WithHttpInfo(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveContactModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     * @param param the request object
     */
    public retrieveContactModelUsingGET1(param: ContactApiRetrieveContactModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveContactModelUsingGET1( options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOSTWithHttpInfo(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unlinkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest,  options).toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param param the request object
     */
    public unlinkContactsUsingPOST(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.unlinkContactsUsingPOST(param.linkContactsRequest,  options).toPromise();
    }

}

import { ObservableEmailApi } from "./ObservableAPI";
import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";

export interface EmailApiCreateEmailUsingPOST1Request {
    /**
     * emailWithContent
     * @type CreateEmailSentRequest
     * @memberof EmailApicreateEmailUsingPOST1
     */
    createEmailSentRequest: CreateEmailSentRequest
}

export interface EmailApiCreateEmailsUsingPOST1Request {
    /**
     * Email records to persist, with content.
     * @type CreateEmailsSentRequest
     * @memberof EmailApicreateEmailsUsingPOST1
     */
    createEmailsSentRequest?: CreateEmailsSentRequest
}

export interface EmailApiDeleteEmailUsingDELETE1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApideleteEmailUsingDELETE1
     */
    id: string
}

export interface EmailApiDeleteEmailsUsingPOST1Request {
    /**
     * deleteEmailsRequest
     * @type DeleteEmailsRequest
     * @memberof EmailApideleteEmailsUsingPOST1
     */
    deleteEmailsRequest: DeleteEmailsRequest
}

export interface EmailApiGetEmailUsingGET1Request {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof EmailApigetEmailUsingGET1
     */
    id: string
}

export interface EmailApiSendEmailUsingPOST1Request {
    /**
     * emailSendRequest
     * @type EmailSendRequest
     * @memberof EmailApisendEmailUsingPOST1
     */
    emailSendRequest?: EmailSendRequest
}

export class ObjectEmailApi {
    private api: ObservableEmailApi

    public constructor(configuration: Configuration, requestFactory?: EmailApiRequestFactory, responseProcessor?: EmailApiResponseProcessor) {
        this.api = new ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmailUsingPOST1WithHttpInfo(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.createEmailUsingPOST1WithHttpInfo(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param param the request object
     */
    public createEmailUsingPOST1(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<EmailSentWithContent> {
        return this.api.createEmailUsingPOST1(param.createEmailSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1WithHttpInfo(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<EmailsSentList>> {
        return this.api.createEmailsUsingPOST1WithHttpInfo(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param param the request object
     */
    public createEmailsUsingPOST1(param: EmailApiCreateEmailsUsingPOST1Request = {}, options?: Configuration): Promise<EmailsSentList> {
        return this.api.createEmailsUsingPOST1(param.createEmailsSentRequest,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1WithHttpInfo(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEmailUsingDELETE1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param param the request object
     */
    public deleteEmailUsingDELETE1(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteEmailUsingDELETE1(param.id,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1WithHttpInfo(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<HttpInfo<DeleteEmailsResponse>> {
        return this.api.deleteEmailsUsingPOST1WithHttpInfo(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param param the request object
     */
    public deleteEmailsUsingPOST1(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<DeleteEmailsResponse> {
        return this.api.deleteEmailsUsingPOST1(param.deleteEmailsRequest,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1WithHttpInfo(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        return this.api.getEmailUsingGET1WithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param param the request object
     */
    public getEmailUsingGET1(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<EmailSentWithContent> {
        return this.api.getEmailUsingGET1(param.id,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1WithHttpInfo(param: EmailApiSendEmailUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendEmailUsingPOST1WithHttpInfo(param.emailSendRequest,  options).toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param param the request object
     */
    public sendEmailUsingPOST1(param: EmailApiSendEmailUsingPOST1Request = {}, options?: Configuration): Promise<void> {
        return this.api.sendEmailUsingPOST1(param.emailSendRequest,  options).toPromise();
    }

}

import { ObservableEmailAddressApi } from "./ObservableAPI";
import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";

export interface EmailAddressApiGetEmailAddressStatusUsingGETRequest {
    /**
     * email
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApigetEmailAddressStatusUsingGET
     */
    email: string
}

export interface EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest {
    /**
     * email
     * Defaults to: undefined
     * @type string
     * @memberof EmailAddressApiupdateEmailAddressOptStatusUsingPUT
     */
    email: string
    /**
     * updateEmailAddress
     * @type UpdateEmailAddress
     * @memberof EmailAddressApiupdateEmailAddressOptStatusUsingPUT
     */
    updateEmailAddress: UpdateEmailAddress
}

export class ObjectEmailAddressApi {
    private api: ObservableEmailAddressApi

    public constructor(configuration: Configuration, requestFactory?: EmailAddressApiRequestFactory, responseProcessor?: EmailAddressApiResponseProcessor) {
        this.api = new ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatusUsingGETWithHttpInfo(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        return this.api.getEmailAddressStatusUsingGETWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param param the request object
     */
    public getEmailAddressStatusUsingGET(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<RestEmailAddress> {
        return this.api.getEmailAddressStatusUsingGET(param.email,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatusUsingPUTWithHttpInfo(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        return this.api.updateEmailAddressOptStatusUsingPUTWithHttpInfo(param.email, param.updateEmailAddress,  options).toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param param the request object
     */
    public updateEmailAddressOptStatusUsingPUT(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<RestEmailAddress> {
        return this.api.updateEmailAddressOptStatusUsingPUT(param.email, param.updateEmailAddress,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiCreateFileUsingPOST1Request {
    /**
     * request
     * @type CreateFileRequest
     * @memberof FilesApicreateFileUsingPOST1
     */
    createFileRequest: CreateFileRequest
}

export interface FilesApiDeleteFileUsingDELETE1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApideleteFileUsingDELETE1
     */
    fileId: string
}

export interface FilesApiGetFileDataUsingGETRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFileDataUsingGET
     */
    fileId: string
}

export interface FilesApiGetFileUsingGET1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetFileUsingGET1
     */
    fileId: string
}

export interface FilesApiListFilesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof FilesApilistFilesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof FilesApilistFilesUsingGET1
     */
    pageToken?: string
}

export interface FilesApiUpdateFileUsingPATCHRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateFileUsingPATCH
     */
    fileId: string
    /**
     * request
     * @type UpdateFileRequest
     * @memberof FilesApiupdateFileUsingPATCH
     */
    updateFileRequest: UpdateFileRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FilesApiupdateFileUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileUsingPOST1WithHttpInfo(param: FilesApiCreateFileUsingPOST1Request, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.createFileUsingPOST1WithHttpInfo(param.createFileRequest,  options).toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileUsingPOST1(param: FilesApiCreateFileUsingPOST1Request, options?: Configuration): Promise<FileMetadata> {
        return this.api.createFileUsingPOST1(param.createFileRequest,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1WithHttpInfo(param: FilesApiDeleteFileUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFileUsingDELETE1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1(param: FilesApiDeleteFileUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteFileUsingDELETE1(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGETWithHttpInfo(param: FilesApiGetFileDataUsingGETRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getFileDataUsingGETWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGET(param: FilesApiGetFileDataUsingGETRequest, options?: Configuration): Promise<string> {
        return this.api.getFileDataUsingGET(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1WithHttpInfo(param: FilesApiGetFileUsingGET1Request, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.getFileUsingGET1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1(param: FilesApiGetFileUsingGET1Request, options?: Configuration): Promise<FileMetadata> {
        return this.api.getFileUsingGET1(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves all files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1WithHttpInfo(param: FilesApiListFilesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListFilesResponse>> {
        return this.api.listFilesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1(param: FilesApiListFilesUsingGET1Request = {}, options?: Configuration): Promise<ListFilesResponse> {
        return this.api.listFilesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a file
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPATCHWithHttpInfo(param: FilesApiUpdateFileUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.updateFileUsingPATCHWithHttpInfo(param.fileId, param.updateFileRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a file
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPATCH(param: FilesApiUpdateFileUsingPATCHRequest, options?: Configuration): Promise<FileMetadata> {
        return this.api.updateFileUsingPATCH(param.fileId, param.updateFileRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableFreeTrialDiscountApi } from "./ObservableAPI";
import { FreeTrialDiscountApiRequestFactory, FreeTrialDiscountApiResponseProcessor} from "../apis/FreeTrialDiscountApi";

export interface FreeTrialDiscountApiDeleteDiscountUsingDELETE1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof FreeTrialDiscountApideleteDiscountUsingDELETE1
     */
    discountId: string
}

export class ObjectFreeTrialDiscountApi {
    private api: ObservableFreeTrialDiscountApi

    public constructor(configuration: Configuration, requestFactory?: FreeTrialDiscountApiRequestFactory, responseProcessor?: FreeTrialDiscountApiResponseProcessor) {
        this.api = new ObservableFreeTrialDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(param: FreeTrialDiscountApiDeleteDiscountUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETE1WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE1(param: FreeTrialDiscountApiDeleteDiscountUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE1(param.discountId,  options).toPromise();
    }

}

import { ObservableFunnelIntegrationApi } from "./ObservableAPI";
import { FunnelIntegrationApiRequestFactory, FunnelIntegrationApiResponseProcessor} from "../apis/FunnelIntegrationApi";

export interface FunnelIntegrationApiCreateFunnelIntegrationUsingPOSTRequest {
    /**
     * createFunnelIntegrationRequest
     * @type CreateFunnelIntegrationRequest
     * @memberof FunnelIntegrationApicreateFunnelIntegrationUsingPOST
     */
    createFunnelIntegrationRequest: CreateFunnelIntegrationRequest
}

export interface FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOSTRequest {
    /**
     * createFunnelIntegrationTriggerEvents
     * @type CreateFunnelIntegrationTriggerEvents
     * @memberof FunnelIntegrationApicreateIntegrationTriggerEventUsingPOST
     */
    createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents
}

export interface FunnelIntegrationApiDeleteFunnelIntegrationUsingPOSTRequest {
    /**
     * deleteFunnelIntegrationRequest
     * @type DeleteFunnelIntegrationRequest
     * @memberof FunnelIntegrationApideleteFunnelIntegrationUsingPOST
     */
    deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest
}

export class ObjectFunnelIntegrationApi {
    private api: ObservableFunnelIntegrationApi

    public constructor(configuration: Configuration, requestFactory?: FunnelIntegrationApiRequestFactory, responseProcessor?: FunnelIntegrationApiResponseProcessor) {
        this.api = new ObservableFunnelIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param param the request object
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(param: FunnelIntegrationApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(param.createFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param param the request object
     */
    public createFunnelIntegrationUsingPOST(param: FunnelIntegrationApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.createFunnelIntegrationUsingPOST(param.createFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param param the request object
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(param: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        return this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(param.createFunnelIntegrationTriggerEvents,  options).toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param param the request object
     */
    public createIntegrationTriggerEventUsingPOST(param: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>> {
        return this.api.createIntegrationTriggerEventUsingPOST(param.createFunnelIntegrationTriggerEvents,  options).toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param param the request object
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(param: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(param.deleteFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param param the request object
     */
    public deleteFunnelIntegrationUsingPOST(param: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFunnelIntegrationUsingPOST(param.deleteFunnelIntegrationRequest,  options).toPromise();
    }

}

import { ObservableLandingPagesApi } from "./ObservableAPI";
import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";

export interface LandingPagesApiListLandingPagesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApilistLandingPagesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApilistLandingPagesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LandingPagesApilistLandingPagesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApilistLandingPagesUsingGET
     */
    pageToken?: string
}

export class ObjectLandingPagesApi {
    private api: ObservableLandingPagesApi

    public constructor(configuration: Configuration, requestFactory?: LandingPagesApiRequestFactory, responseProcessor?: LandingPagesApiResponseProcessor) {
        this.api = new ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param param the request object
     */
    public listLandingPagesUsingGETWithHttpInfo(param: LandingPagesApiListLandingPagesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>> {
        return this.api.listLandingPagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param param the request object
     */
    public listLandingPagesUsingGET(param: LandingPagesApiListLandingPagesUsingGETRequest = {}, options?: Configuration): Promise<ListLandingPagesResponse> {
        return this.api.listLandingPagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableLeadScoreApi } from "./ObservableAPI";
import { LeadScoreApiRequestFactory, LeadScoreApiResponseProcessor} from "../apis/LeadScoreApi";

export interface LeadScoreApiGetLeadScoreDetailsUsingGETRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof LeadScoreApigetLeadScoreDetailsUsingGET
     */
    contactId: string
}

export class ObjectLeadScoreApi {
    private api: ObservableLeadScoreApi

    public constructor(configuration: Configuration, requestFactory?: LeadScoreApiRequestFactory, responseProcessor?: LeadScoreApiResponseProcessor) {
        this.api = new ObservableLeadScoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetailsUsingGETWithHttpInfo(param: LeadScoreApiGetLeadScoreDetailsUsingGETRequest, options?: Configuration): Promise<HttpInfo<LeadScore>> {
        return this.api.getLeadScoreDetailsUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetailsUsingGET(param: LeadScoreApiGetLeadScoreDetailsUsingGETRequest, options?: Configuration): Promise<LeadScore> {
        return this.api.getLeadScoreDetailsUsingGET(param.contactId,  options).toPromise();
    }

}

import { ObservableLeadSourceCategoriesApi } from "./ObservableAPI";
import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";

export interface LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest {
    /**
     * leadSourceCategory
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof LeadSourceCategoriesApicreateLeadSourceCategoryUsingPOST
     */
    createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest
}

export interface LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest {
    /**
     * category_id
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApideleteLeadSourceCategoryUsingDELETE
     */
    categoryId: string
}

export interface LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest {
    /**
     * category_id
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourceCategoriesApigetLeadSourceCategoryUsingGET
     */
    categoryId: string
}

export class ObjectLeadSourceCategoriesApi {
    private api: ObservableLeadSourceCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourceCategoriesApiRequestFactory, responseProcessor?: LeadSourceCategoriesApiResponseProcessor) {
        this.api = new ObservableLeadSourceCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(param: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.createLeadSourceCategoryUsingPOSTWithHttpInfo(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOST(param: LeadSourceCategoriesApiCreateLeadSourceCategoryUsingPOSTRequest = {}, options?: Configuration): Promise<LeadSourceCategory> {
        return this.api.createLeadSourceCategoryUsingPOST(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETE(param: LeadSourceCategoriesApiDeleteLeadSourceCategoryUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteLeadSourceCategoryUsingDELETE(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(param: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest, options?: Configuration): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.getLeadSourceCategoryUsingGETWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGET(param: LeadSourceCategoriesApiGetLeadSourceCategoryUsingGETRequest, options?: Configuration): Promise<LeadSourceCategory> {
        return this.api.getLeadSourceCategoryUsingGET(param.categoryId,  options).toPromise();
    }

}

import { ObservableLeadSourcesApi } from "./ObservableAPI";
import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";

export interface LeadSourcesApiCreateLeadSourceUsingPOSTRequest {
    /**
     * leadsource
     * @type CreateLeadSourceRequest
     * @memberof LeadSourcesApicreateLeadSourceUsingPOST
     */
    createLeadSourceRequest?: CreateLeadSourceRequest
}

export interface LeadSourcesApiListLeadSourcesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof LeadSourcesApilistLeadSourcesUsingGET
     */
    pageToken?: string
}

export class ObjectLeadSourcesApi {
    private api: ObservableLeadSourcesApi

    public constructor(configuration: Configuration, requestFactory?: LeadSourcesApiRequestFactory, responseProcessor?: LeadSourcesApiResponseProcessor) {
        this.api = new ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceUsingPOSTWithHttpInfo(param: LeadSourcesApiCreateLeadSourceUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<LeadSource>> {
        return this.api.createLeadSourceUsingPOSTWithHttpInfo(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceUsingPOST(param: LeadSourcesApiCreateLeadSourceUsingPOSTRequest = {}, options?: Configuration): Promise<LeadSource> {
        return this.api.createLeadSourceUsingPOST(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGETWithHttpInfo(param: LeadSourcesApiListLeadSourcesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>> {
        return this.api.listLeadSourcesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGET(param: LeadSourcesApiListLeadSourcesUsingGETRequest = {}, options?: Configuration): Promise<ListLeadSourcesResponse> {
        return this.api.listLeadSourcesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableLocaleApi } from "./ObservableAPI";
import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";

export interface LocaleApiListCountriesUsingGET2Request {
}

export interface LocaleApiListProvincesForCountryUsingGETRequest {
    /**
     * country_code
     * Defaults to: undefined
     * @type string
     * @memberof LocaleApilistProvincesForCountryUsingGET
     */
    countryCode: string
}

export class ObjectLocaleApi {
    private api: ObservableLocaleApi

    public constructor(configuration: Configuration, requestFactory?: LocaleApiRequestFactory, responseProcessor?: LocaleApiResponseProcessor) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Countries
     * @param param the request object
     */
    public listCountriesUsingGET2WithHttpInfo(param: LocaleApiListCountriesUsingGET2Request = {}, options?: Configuration): Promise<HttpInfo<ListCountriesResponse>> {
        return this.api.listCountriesUsingGET2WithHttpInfo( options).toPromise();
    }

    /**
     * List Countries
     * @param param the request object
     */
    public listCountriesUsingGET2(param: LocaleApiListCountriesUsingGET2Request = {}, options?: Configuration): Promise<ListCountriesResponse> {
        return this.api.listCountriesUsingGET2( options).toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountryUsingGETWithHttpInfo(param: LocaleApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListProvincesResponse>> {
        return this.api.listProvincesForCountryUsingGETWithHttpInfo(param.countryCode,  options).toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountryUsingGET(param: LocaleApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<ListProvincesResponse> {
        return this.api.listProvincesForCountryUsingGET(param.countryCode,  options).toPromise();
    }

}

import { ObservableMerchantApi } from "./ObservableAPI";
import { MerchantApiRequestFactory, MerchantApiResponseProcessor} from "../apis/MerchantApi";

export interface MerchantApiListMerchantsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof MerchantApilistMerchantsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof MerchantApilistMerchantsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof MerchantApilistMerchantsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof MerchantApilistMerchantsUsingGET
     */
    pageToken?: string
}

export class ObjectMerchantApi {
    private api: ObservableMerchantApi

    public constructor(configuration: Configuration, requestFactory?: MerchantApiRequestFactory, responseProcessor?: MerchantApiResponseProcessor) {
        this.api = new ObservableMerchantApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchantsUsingGETWithHttpInfo(param: MerchantApiListMerchantsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>> {
        return this.api.listMerchantsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchantsUsingGET(param: MerchantApiListMerchantsUsingGETRequest = {}, options?: Configuration): Promise<ListRestMerchantResponse> {
        return this.api.listMerchantsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableNoteApi } from "./ObservableAPI";
import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";

export interface NoteApiCreateNoteCustomFieldUsingPOST1Request {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof NoteApicreateNoteCustomFieldUsingPOST1
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface NoteApiCreateNoteUsingPOST1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApicreateNoteUsingPOST1
     */
    contactId: string
    /**
     * request
     * @type CreateNoteRequest
     * @memberof NoteApicreateNoteUsingPOST1
     */
    createNoteRequest: CreateNoteRequest
}

export interface NoteApiDeleteNoteUsingDELETE1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNoteUsingDELETE1
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApideleteNoteUsingDELETE1
     */
    noteId: string
}

export interface NoteApiGetNoteUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNoteUsingGET1
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApigetNoteUsingGET1
     */
    noteId: string
}

export interface NoteApiListNoteTemplatesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplatesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplatesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof NoteApilistNoteTemplatesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNoteTemplatesUsingGET
     */
    pageToken?: string
}

export interface NoteApiListNotesUsingGET1Request {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    contactId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof NoteApilistNotesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof NoteApilistNotesUsingGET1
     */
    pageToken?: string
}

export interface NoteApiRetrieveNoteModelUsingGET1Request {
}

export interface NoteApiUpdateNoteUsingPATCHRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    contactId: string
    /**
     * note_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    noteId: string
    /**
     * updateNoteRequest
     * @type UpdateNoteRequest
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    updateNoteRequest: UpdateNoteRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof NoteApiupdateNoteUsingPATCH
     */
    updateMask?: Array<string>
}

export interface NoteApiUpdateNotesCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof NoteApiupdateNotesCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof NoteApiupdateNotesCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof NoteApiupdateNotesCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectNoteApi {
    private api: ObservableNoteApi

    public constructor(configuration: Configuration, requestFactory?: NoteApiRequestFactory, responseProcessor?: NoteApiResponseProcessor) {
        this.api = new ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(param: NoteApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomFieldUsingPOST1(param: NoteApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createNoteCustomFieldUsingPOST1(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNoteUsingPOST1WithHttpInfo(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Note>> {
        return this.api.createNoteUsingPOST1WithHttpInfo(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param param the request object
     */
    public createNoteUsingPOST1(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<Note> {
        return this.api.createNoteUsingPOST1(param.contactId, param.createNoteRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1WithHttpInfo(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteNoteUsingDELETE1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param param the request object
     */
    public deleteNoteUsingDELETE1(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteNoteUsingDELETE1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1WithHttpInfo(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<HttpInfo<GetNoteResponse>> {
        return this.api.getNoteUsingGET1WithHttpInfo(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param param the request object
     */
    public getNoteUsingGET1(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<GetNoteResponse> {
        return this.api.getNoteUsingGET1(param.contactId, param.noteId,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplatesUsingGETWithHttpInfo(param: NoteApiListNoteTemplatesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListNoteTemplateResponse>> {
        return this.api.listNoteTemplatesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplatesUsingGET(param: NoteApiListNoteTemplatesUsingGETRequest = {}, options?: Configuration): Promise<ListNoteTemplateResponse> {
        return this.api.listNoteTemplatesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1WithHttpInfo(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListNotesResponse>> {
        return this.api.listNotesUsingGET1WithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param param the request object
     */
    public listNotesUsingGET1(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<ListNotesResponse> {
        return this.api.listNotesUsingGET1(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(param: NoteApiRetrieveNoteModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveNoteModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModelUsingGET1(param: NoteApiRetrieveNoteModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveNoteModelUsingGET1( options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCHWithHttpInfo(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateNoteResponse>> {
        return this.api.updateNoteUsingPATCHWithHttpInfo(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param param the request object
     */
    public updateNoteUsingPATCH(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<UpdateNoteResponse> {
        return this.api.updateNoteUsingPATCH(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(param: NoteApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomFieldUsingPATCH(param: NoteApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateNotesCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOpportunityApi } from "./ObservableAPI";
import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";

export interface OpportunityApiCreateOpportunityCustomFieldsUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof OpportunityApicreateOpportunityCustomFieldsUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface OpportunityApiCreateOpportunityStageUsingPOSTRequest {
    /**
     * opportunity
     * @type CreateOpportunityStageRequest
     * @memberof OpportunityApicreateOpportunityStageUsingPOST
     */
    createOpportunityStageRequest?: CreateOpportunityStageRequest
}

export interface OpportunityApiCreateOpportunityUsingPOST1Request {
    /**
     * opportunity
     * @type CreateOpportunityRequest
     * @memberof OpportunityApicreateOpportunityUsingPOST1
     */
    createOpportunityRequest?: CreateOpportunityRequest
}

export interface OpportunityApiDeleteOpportunityStageUsingDELETERequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApideleteOpportunityStageUsingDELETE
     */
    stageId: string
}

export interface OpportunityApiDeleteOpportunityUsingDELETERequest {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApideleteOpportunityUsingDELETE
     */
    opportunityId: string
}

export interface OpportunityApiGetOpportunityStageUsingGETRequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApigetOpportunityStageUsingGET
     */
    stageId: string
}

export interface OpportunityApiGetOpportunityUsingGET1Request {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApigetOpportunityUsingGET1
     */
    opportunityId: string
}

export interface OpportunityApiListOpportunitiesUsingGET1Request {
    /**
     * fields
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OpportunityApilistOpportunitiesUsingGET1
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunitiesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunitiesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunityApilistOpportunitiesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunitiesUsingGET1
     */
    pageToken?: string
}

export interface OpportunityApiListOpportunityStagesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStagesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStagesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OpportunityApilistOpportunityStagesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApilistOpportunityStagesUsingGET
     */
    pageToken?: string
}

export interface OpportunityApiUpdateOpportunityCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunityCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof OpportunityApiupdateOpportunityCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OpportunityApiupdateOpportunityCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface OpportunityApiUpdateOpportunityStageUsingPATCHRequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunityStageUsingPATCH
     */
    stageId: string
    /**
     * request
     * @type UpdateOpportunityStageRequest
     * @memberof OpportunityApiupdateOpportunityStageUsingPATCH
     */
    updateOpportunityStageRequest: UpdateOpportunityStageRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OpportunityApiupdateOpportunityStageUsingPATCH
     */
    updateMask?: Array<string>
}

export interface OpportunityApiUpdateOpportunityUsingPATCHRequest {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof OpportunityApiupdateOpportunityUsingPATCH
     */
    opportunityId: string
    /**
     * request
     * @type PatchOpportunityRequest
     * @memberof OpportunityApiupdateOpportunityUsingPATCH
     */
    patchOpportunityRequest: PatchOpportunityRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OpportunityApiupdateOpportunityUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectOpportunityApi {
    private api: ObservableOpportunityApi

    public constructor(configuration: Configuration, requestFactory?: OpportunityApiRequestFactory, responseProcessor?: OpportunityApiResponseProcessor) {
        this.api = new ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param: OpportunityApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFieldsUsingPOST(param: OpportunityApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createOpportunityCustomFieldsUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(param: OpportunityApiCreateOpportunityStageUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.createOpportunityStageUsingPOSTWithHttpInfo(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStageUsingPOST(param: OpportunityApiCreateOpportunityStageUsingPOSTRequest = {}, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.createOpportunityStageUsingPOST(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunityUsingPOST1WithHttpInfo(param: OpportunityApiCreateOpportunityUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.createOpportunityUsingPOST1WithHttpInfo(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunityUsingPOST1(param: OpportunityApiCreateOpportunityUsingPOST1Request = {}, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.createOpportunityUsingPOST1(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(param: OpportunityApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStageUsingDELETE(param: OpportunityApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOpportunityStageUsingDELETE(param.stageId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(param: OpportunityApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityUsingDELETEWithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunityUsingDELETE(param: OpportunityApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOpportunityUsingDELETE(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStageUsingGETWithHttpInfo(param: OpportunityApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.getOpportunityStageUsingGETWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStageUsingGET(param: OpportunityApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.getOpportunityStageUsingGET(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunityUsingGET1WithHttpInfo(param: OpportunityApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.getOpportunityUsingGET1WithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunityUsingGET1(param: OpportunityApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.getOpportunityUsingGET1(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunitiesUsingGET1WithHttpInfo(param: OpportunityApiListOpportunitiesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>> {
        return this.api.listOpportunitiesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunitiesUsingGET1(param: OpportunityApiListOpportunitiesUsingGET1Request = {}, options?: Configuration): Promise<ListOpportunitiesResponse> {
        return this.api.listOpportunitiesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStagesUsingGETWithHttpInfo(param: OpportunityApiListOpportunityStagesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        return this.api.listOpportunityStagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStagesUsingGET(param: OpportunityApiListOpportunityStagesUsingGETRequest = {}, options?: Configuration): Promise<ListOpportunityStagesResponse> {
        return this.api.listOpportunityStagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param: OpportunityApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomFieldUsingPATCH(param: OpportunityApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateOpportunityCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(param: OpportunityApiUpdateOpportunityStageUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.updateOpportunityStageUsingPATCHWithHttpInfo(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStageUsingPATCH(param: OpportunityApiUpdateOpportunityStageUsingPATCHRequest, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.updateOpportunityStageUsingPATCH(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunityUsingPATCHWithHttpInfo(param: OpportunityApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.updateOpportunityUsingPATCHWithHttpInfo(param.opportunityId, param.patchOpportunityRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunityUsingPATCH(param: OpportunityApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.updateOpportunityUsingPATCH(param.opportunityId, param.patchOpportunityRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOrderTotalDiscountApi } from "./ObservableAPI";
import { OrderTotalDiscountApiRequestFactory, OrderTotalDiscountApiResponseProcessor} from "../apis/OrderTotalDiscountApi";

export interface OrderTotalDiscountApiCreateOrderTotalDiscountUsingPOSTRequest {
    /**
     * request
     * @type CreateOrderTotalDiscountRequest
     * @memberof OrderTotalDiscountApicreateOrderTotalDiscountUsingPOST
     */
    createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest
}

export interface OrderTotalDiscountApiDeleteOrderTotalDiscountUsingDELETERequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApideleteOrderTotalDiscountUsingDELETE
     */
    discountId: string
}

export interface OrderTotalDiscountApiGetOrderTotalDiscountUsingGETRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApigetOrderTotalDiscountUsingGET
     */
    discountId: string
}

export interface OrderTotalDiscountApiListOrderTotalDiscountsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApilistOrderTotalDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApilistOrderTotalDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrderTotalDiscountApilistOrderTotalDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApilistOrderTotalDiscountsUsingGET
     */
    pageToken?: string
}

export interface OrderTotalDiscountApiUpdateOrderTotalDiscountUsingPATCHRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof OrderTotalDiscountApiupdateOrderTotalDiscountUsingPATCH
     */
    discountId: string
    /**
     * request
     * @type UpdateOrderTotalDiscountRequest
     * @memberof OrderTotalDiscountApiupdateOrderTotalDiscountUsingPATCH
     */
    updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrderTotalDiscountApiupdateOrderTotalDiscountUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectOrderTotalDiscountApi {
    private api: ObservableOrderTotalDiscountApi

    public constructor(configuration: Configuration, requestFactory?: OrderTotalDiscountApiRequestFactory, responseProcessor?: OrderTotalDiscountApiResponseProcessor) {
        this.api = new ObservableOrderTotalDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(param: OrderTotalDiscountApiCreateOrderTotalDiscountUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.createOrderTotalDiscountUsingPOSTWithHttpInfo(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscountUsingPOST(param: OrderTotalDiscountApiCreateOrderTotalDiscountUsingPOSTRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.createOrderTotalDiscountUsingPOST(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(param: OrderTotalDiscountApiDeleteOrderTotalDiscountUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscountUsingDELETE(param: OrderTotalDiscountApiDeleteOrderTotalDiscountUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrderTotalDiscountUsingDELETE(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(param: OrderTotalDiscountApiGetOrderTotalDiscountUsingGETRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.getOrderTotalDiscountUsingGETWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscountUsingGET(param: OrderTotalDiscountApiGetOrderTotalDiscountUsingGETRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.getOrderTotalDiscountUsingGET(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(param: OrderTotalDiscountApiListOrderTotalDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListOrderTotalDiscountsResponse>> {
        return this.api.listOrderTotalDiscountsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscountsUsingGET(param: OrderTotalDiscountApiListOrderTotalDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListOrderTotalDiscountsResponse> {
        return this.api.listOrderTotalDiscountsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(param: OrderTotalDiscountApiUpdateOrderTotalDiscountUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.updateOrderTotalDiscountUsingPATCHWithHttpInfo(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscountUsingPATCH(param: OrderTotalDiscountApiUpdateOrderTotalDiscountUsingPATCHRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.updateOrderTotalDiscountUsingPATCH(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableOrdersApi } from "./ObservableAPI";
import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";

export interface OrdersApiCreateOrderCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof OrdersApicreateOrderCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface OrdersApiCreateOrderItemsOnOrderUsingPOST1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApicreateOrderItemsOnOrderUsingPOST1
     */
    orderId: string
    /**
     * createRestOrderItemRequest
     * @type CreateRestOrderItemRequest
     * @memberof OrdersApicreateOrderItemsOnOrderUsingPOST1
     */
    createRestOrderItemRequest: CreateRestOrderItemRequest
}

export interface OrdersApiCreateOrderUsingPOST1Request {
    /**
     * createOrderRequest
     * @type RestCreateOrderRequest
     * @memberof OrdersApicreateOrderUsingPOST1
     */
    restCreateOrderRequest: RestCreateOrderRequest
}

export interface OrdersApiCreatePaymentOnOrderUsingPOST1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApicreatePaymentOnOrderUsingPOST1
     */
    orderId: string
    /**
     * createPaymentRequest
     * @type CreatePaymentRequest
     * @memberof OrdersApicreatePaymentOnOrderUsingPOST1
     */
    createPaymentRequest: CreatePaymentRequest
}

export interface OrdersApiDeleteOrderCustomFieldUsingDELETERequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrderCustomFieldUsingDELETE
     */
    customFieldId: string
}

export interface OrdersApiDeleteOrderUsingDELETE1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApideleteOrderUsingDELETE1
     */
    orderId: string
}

export interface OrdersApiGetOrderUsingGET1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApigetOrderUsingGET1
     */
    orderId: string
}

export interface OrdersApiListOrderPaymentsUsingGET1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPaymentsUsingGET1
     */
    orderId: string
    /**
     * Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPaymentsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPaymentsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrderPaymentsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrderPaymentsUsingGET1
     */
    pageToken?: string
}

export interface OrdersApiListOrdersUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrdersUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrdersUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof OrdersApilistOrdersUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApilistOrdersUsingGET1
     */
    pageToken?: string
}

export interface OrdersApiPatchOrderUsingPATCHRequest {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApipatchOrderUsingPATCH
     */
    orderId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrdersApipatchOrderUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * order
     * @type RestV2PatchOrderRequest
     * @memberof OrdersApipatchOrderUsingPATCH
     */
    restV2PatchOrderRequest?: RestV2PatchOrderRequest
}

export interface OrdersApiRetrieveOrderCustomFieldModelUsingGETRequest {
}

export interface OrdersApiUpdateOrderCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof OrdersApiupdateOrderCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof OrdersApiupdateOrderCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrdersApiupdateOrderCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectOrdersApi {
    private api: ObservableOrdersApi

    public constructor(configuration: Configuration, requestFactory?: OrdersApiRequestFactory, responseProcessor?: OrdersApiResponseProcessor) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param param the request object
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(param: OrdersApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param param the request object
     */
    public createOrderCustomFieldUsingPOST(param: OrdersApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createOrderCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(param: OrdersApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2OrderItem>> {
        return this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createRestOrderItemRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItemsOnOrderUsingPOST1(param: OrdersApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<RestV2OrderItem> {
        return this.api.createOrderItemsOnOrderUsingPOST1(param.orderId, param.createRestOrderItemRequest,  options).toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param param the request object
     */
    public createOrderUsingPOST1WithHttpInfo(param: OrdersApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.createOrderUsingPOST1WithHttpInfo(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param param the request object
     */
    public createOrderUsingPOST1(param: OrdersApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<RestV2Order> {
        return this.api.createOrderUsingPOST1(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param param the request object
     */
    public createPaymentOnOrderUsingPOST1WithHttpInfo(param: OrdersApiCreatePaymentOnOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<PaymentResult>> {
        return this.api.createPaymentOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createPaymentRequest,  options).toPromise();
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param param the request object
     */
    public createPaymentOnOrderUsingPOST1(param: OrdersApiCreatePaymentOnOrderUsingPOST1Request, options?: Configuration): Promise<PaymentResult> {
        return this.api.createPaymentOnOrderUsingPOST1(param.orderId, param.createPaymentRequest,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param param the request object
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(param: OrdersApiDeleteOrderCustomFieldUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderCustomFieldUsingDELETEWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param param the request object
     */
    public deleteOrderCustomFieldUsingDELETE(param: OrdersApiDeleteOrderCustomFieldUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrderCustomFieldUsingDELETE(param.customFieldId,  options).toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrderUsingDELETE1WithHttpInfo(param: OrdersApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderUsingDELETE1WithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrderUsingDELETE1(param: OrdersApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteOrderUsingDELETE1(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrderUsingGET1WithHttpInfo(param: OrdersApiGetOrderUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.getOrderUsingGET1WithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrderUsingGET1(param: OrdersApiGetOrderUsingGET1Request, options?: Configuration): Promise<RestV2Order> {
        return this.api.getOrderUsingGET1(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPaymentsUsingGET1WithHttpInfo(param: OrdersApiListOrderPaymentsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListOrderPaymentsResponse>> {
        return this.api.listOrderPaymentsUsingGET1WithHttpInfo(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPaymentsUsingGET1(param: OrdersApiListOrderPaymentsUsingGET1Request, options?: Configuration): Promise<ListOrderPaymentsResponse> {
        return this.api.listOrderPaymentsUsingGET1(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrdersUsingGET1WithHttpInfo(param: OrdersApiListOrdersUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListOrders>> {
        return this.api.listOrdersUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrdersUsingGET1(param: OrdersApiListOrdersUsingGET1Request = {}, options?: Configuration): Promise<ListOrders> {
        return this.api.listOrdersUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public patchOrderUsingPATCHWithHttpInfo(param: OrdersApiPatchOrderUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.patchOrderUsingPATCHWithHttpInfo(param.orderId, param.updateMask, param.restV2PatchOrderRequest,  options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public patchOrderUsingPATCH(param: OrdersApiPatchOrderUsingPATCHRequest, options?: Configuration): Promise<RestV2Order> {
        return this.api.patchOrderUsingPATCH(param.orderId, param.updateMask, param.restV2PatchOrderRequest,  options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(param: OrdersApiRetrieveOrderCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModelUsingGET(param: OrdersApiRetrieveOrderCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveOrderCustomFieldModelUsingGET( options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param param the request object
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(param: OrdersApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param param the request object
     */
    public updateOrderCustomFieldUsingPATCH(param: OrdersApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateOrderCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservablePaymentMethodConfigApi } from "./ObservableAPI";
import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor} from "../apis/PaymentMethodConfigApi";

export interface PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest {
    /**
     * request
     * @type CreatePaymentMethodConfigRequest
     * @memberof PaymentMethodConfigApicreatePaymentMethodConfigUsingPOST
     */
    createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest
}

export class ObjectPaymentMethodConfigApi {
    private api: ObservablePaymentMethodConfigApi

    public constructor(configuration: Configuration, requestFactory?: PaymentMethodConfigApiRequestFactory, responseProcessor?: PaymentMethodConfigApiResponseProcessor) {
        this.api = new ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<PaymentMethodConfig>> {
        return this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param param the request object
     */
    public createPaymentMethodConfigUsingPOST(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<PaymentMethodConfig> {
        return this.api.createPaymentMethodConfigUsingPOST(param.createPaymentMethodConfigRequest,  options).toPromise();
    }

}

import { ObservablePreReleaseApi } from "./ObservableAPI";
import { PreReleaseApiRequestFactory, PreReleaseApiResponseProcessor} from "../apis/PreReleaseApi";

export interface PreReleaseApiAddAffiliateToProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiaddAffiliateToProgramUsingPOST
     */
    id: string
    /**
     * affiliateAddToProgramRequest
     * @type AffiliateAddToProgramRequest
     * @memberof PreReleaseApiaddAffiliateToProgramUsingPOST
     */
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest
}

export interface PreReleaseApiAddCommissionProgramUsingPOSTRequest {
    /**
     * Commission Program to insert
     * @type CreateCommissionProgramRequest
     * @memberof PreReleaseApiaddCommissionProgramUsingPOST
     */
    createCommissionProgramRequest?: CreateCommissionProgramRequest
}

export interface PreReleaseApiAdjustInventoryUsingPOSTRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiadjustInventoryUsingPOST
     */
    productId: string
    /**
     * updateProductInventoryRequest
     * @type UpdateProductInventoryRequest
     * @memberof PreReleaseApiadjustInventoryUsingPOST
     */
    updateProductInventoryRequest: UpdateProductInventoryRequest
}

export interface PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiassignProductCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Product Commission Program
     * @type CreateProductCommissionProgramRequest
     * @memberof PreReleaseApiassignProductCommissionProgramUsingPOST
     */
    createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest
}

export interface PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiassignSubscriptionCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Subscription Commission Program
     * @type CreateSubscriptionCommissionProgramRequest
     * @memberof PreReleaseApiassignSubscriptionCommissionProgramUsingPOST
     */
    createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest
}

export interface PreReleaseApiCancelSubscriptionUsingPOSTRequest {
    /**
     * subscription_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApicancelSubscriptionUsingPOST
     */
    subscriptionId: string
    /**
     * cancelSubscriptionsRequest
     * @type CancelSubscriptionsRequest
     * @memberof PreReleaseApicancelSubscriptionUsingPOST
     */
    cancelSubscriptionsRequest: CancelSubscriptionsRequest
}

export interface PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateAffiliateCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApicreateDefaultCommissionProgramUsingPOST
     */
    commissionProgramId: string
    /**
     * Values of the Default Commission Program
     * @type CreateDefaultCommissionProgramRequest
     * @memberof PreReleaseApicreateDefaultCommissionProgramUsingPOST
     */
    createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest
}

export interface PreReleaseApiCreateDiscountUsingPOSTRequest {
    /**
     * request
     * @type CreateUpdateDiscountRequest
     * @memberof PreReleaseApicreateDiscountUsingPOST
     */
    createUpdateDiscountRequest: CreateUpdateDiscountRequest
}

export interface PreReleaseApiCreateDiscountUsingPOST1Request {
    /**
     * request
     * @type CreateShippingDiscountRequest
     * @memberof PreReleaseApicreateDiscountUsingPOST1
     */
    createShippingDiscountRequest: CreateShippingDiscountRequest
}

export interface PreReleaseApiCreateFileUsingPOST1Request {
    /**
     * request
     * @type CreateFileRequest
     * @memberof PreReleaseApicreateFileUsingPOST1
     */
    createFileRequest: CreateFileRequest
}

export interface PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest {
    /**
     * createFunnelIntegrationRequest
     * @type CreateFunnelIntegrationRequest
     * @memberof PreReleaseApicreateFunnelIntegrationUsingPOST
     */
    createFunnelIntegrationRequest: CreateFunnelIntegrationRequest
}

export interface PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest {
    /**
     * createFunnelIntegrationTriggerEvents
     * @type CreateFunnelIntegrationTriggerEvents
     * @memberof PreReleaseApicreateIntegrationTriggerEventUsingPOST
     */
    createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents
}

export interface PreReleaseApiCreateLeadSourceCategoryUsingPOSTRequest {
    /**
     * leadSourceCategory
     * @type CreateUpdateLeadSourceCategoryRequest
     * @memberof PreReleaseApicreateLeadSourceCategoryUsingPOST
     */
    createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest
}

export interface PreReleaseApiCreateLeadSourceUsingPOSTRequest {
    /**
     * leadsource
     * @type CreateLeadSourceRequest
     * @memberof PreReleaseApicreateLeadSourceUsingPOST
     */
    createLeadSourceRequest?: CreateLeadSourceRequest
}

export interface PreReleaseApiCreateNoteCustomFieldUsingPOST1Request {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateNoteCustomFieldUsingPOST1
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateOpportunityCustomFieldsUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateOpportunityStageUsingPOSTRequest {
    /**
     * opportunity
     * @type CreateOpportunityStageRequest
     * @memberof PreReleaseApicreateOpportunityStageUsingPOST
     */
    createOpportunityStageRequest?: CreateOpportunityStageRequest
}

export interface PreReleaseApiCreateOpportunityUsingPOST1Request {
    /**
     * opportunity
     * @type CreateOpportunityRequest
     * @memberof PreReleaseApicreateOpportunityUsingPOST1
     */
    createOpportunityRequest?: CreateOpportunityRequest
}

export interface PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateOrderCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApicreateOrderItemsOnOrderUsingPOST1
     */
    orderId: string
    /**
     * createRestOrderItemRequest
     * @type CreateRestOrderItemRequest
     * @memberof PreReleaseApicreateOrderItemsOnOrderUsingPOST1
     */
    createRestOrderItemRequest: CreateRestOrderItemRequest
}

export interface PreReleaseApiCreateOrderTotalDiscountUsingPOSTRequest {
    /**
     * request
     * @type CreateOrderTotalDiscountRequest
     * @memberof PreReleaseApicreateOrderTotalDiscountUsingPOST
     */
    createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest
}

export interface PreReleaseApiCreateOrderUsingPOST1Request {
    /**
     * createOrderRequest
     * @type RestCreateOrderRequest
     * @memberof PreReleaseApicreateOrderUsingPOST1
     */
    restCreateOrderRequest: RestCreateOrderRequest
}

export interface PreReleaseApiCreateProductUsingPOST1Request {
    /**
     * createProductRequest
     * @type CreateProductRequest
     * @memberof PreReleaseApicreateProductUsingPOST1
     */
    createProductRequest: CreateProductRequest
}

export interface PreReleaseApiCreateRedirectLinkUsingPOSTRequest {
    /**
     * request
     * @type CreateOrPatchAffiliateLinkRequest
     * @memberof PreReleaseApicreateRedirectLinkUsingPOST
     */
    createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest
}

export interface PreReleaseApiCreateReferralUsingPOSTRequest {
    /**
     * request
     * @type CreateReferralRequest
     * @memberof PreReleaseApicreateReferralUsingPOST
     */
    createReferralRequest: CreateReferralRequest
}

export interface PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateSubscriptionCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateTaskCustomFieldUsingPOST1Request {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof PreReleaseApicreateTaskCustomFieldUsingPOST1
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface PreReleaseApiCreateTaskUsingPOST1Request {
    /**
     * task
     * @type CreateTaskRequest
     * @memberof PreReleaseApicreateTaskUsingPOST1
     */
    createTaskRequest?: CreateTaskRequest
}

export interface PreReleaseApiCreateUserUsingPOST1Request {
    /**
     * user
     * @type CreateUserRequestV2
     * @memberof PreReleaseApicreateUserUsingPOST1
     */
    createUserRequestV2?: CreateUserRequestV2
}

export interface PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteAffiliateCommissionProgramUsingDELETE
     */
    commissionProgramId: string
}

export interface PreReleaseApiDeleteAffiliateUsingDELETERequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteAffiliateUsingDELETE
     */
    id: string
}

export interface PreReleaseApiDeleteDiscountUsingDELETERequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteDiscountUsingDELETE
     */
    discountId: string
}

export interface PreReleaseApiDeleteDiscountUsingDELETE1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteDiscountUsingDELETE1
     */
    discountId: string
}

export interface PreReleaseApiDeleteDiscountUsingDELETE2Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteDiscountUsingDELETE2
     */
    discountId: string
}

export interface PreReleaseApiDeleteFileUsingDELETE1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteFileUsingDELETE1
     */
    fileId: string
}

export interface PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest {
    /**
     * deleteFunnelIntegrationRequest
     * @type DeleteFunnelIntegrationRequest
     * @memberof PreReleaseApideleteFunnelIntegrationUsingPOST
     */
    deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest
}

export interface PreReleaseApiDeleteLeadSourceCategoryUsingDELETERequest {
    /**
     * category_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteLeadSourceCategoryUsingDELETE
     */
    categoryId: string
}

export interface PreReleaseApiDeleteOpportunityStageUsingDELETERequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteOpportunityStageUsingDELETE
     */
    stageId: string
}

export interface PreReleaseApiDeleteOpportunityUsingDELETERequest {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteOpportunityUsingDELETE
     */
    opportunityId: string
}

export interface PreReleaseApiDeleteOrderCustomFieldUsingDELETERequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteOrderCustomFieldUsingDELETE
     */
    customFieldId: string
}

export interface PreReleaseApiDeleteOrderTotalDiscountUsingDELETERequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteOrderTotalDiscountUsingDELETE
     */
    discountId: string
}

export interface PreReleaseApiDeleteOrderUsingDELETE1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteOrderUsingDELETE1
     */
    orderId: string
}

export interface PreReleaseApiDeleteProductUsingDELETE1Request {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteProductUsingDELETE1
     */
    productId: string
}

export interface PreReleaseApiDeleteRedirectLinkUsingDELETERequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteRedirectLinkUsingDELETE
     */
    redirectId: string
}

export interface PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteTaskCustomFieldUsingDELETE
     */
    customFieldId: string
}

export interface PreReleaseApiDeleteTaskUsingDELETE1Request {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApideleteTaskUsingDELETE1
     */
    taskId: string
}

export interface PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetAffiliateCommissionTotalUsingGET
     */
    affiliateId: string
}

export interface PreReleaseApiGetAffiliateCommissionsUsingGETRequest {
    /**
     * affiliate_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetAffiliateCommissionsUsingGET
     */
    affiliateId: string
    /**
     * Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetAffiliateCommissionsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetAffiliateCommissionsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApigetAffiliateCommissionsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetAffiliateCommissionsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest {
}

export interface PreReleaseApiGetCommissionProgramUsingGETRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetCommissionProgramUsingGET
     */
    commissionProgramId: string
}

export interface PreReleaseApiGetContactsBySearchTermUsingGETRequest {
    /**
     * searchParam
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetContactsBySearchTermUsingGET
     */
    searchParam: string
}

export interface PreReleaseApiGetDiscountUsingGETRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetDiscountUsingGET
     */
    discountId: string
}

export interface PreReleaseApiGetDiscountUsingGET1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetDiscountUsingGET1
     */
    discountId: string
}

export interface PreReleaseApiGetFileDataUsingGETRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetFileDataUsingGET
     */
    fileId: string
}

export interface PreReleaseApiGetFileUsingGET1Request {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetFileUsingGET1
     */
    fileId: string
}

export interface PreReleaseApiGetLeadScoreDetailsUsingGETRequest {
    /**
     * contact_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetLeadScoreDetailsUsingGET
     */
    contactId: string
}

export interface PreReleaseApiGetLeadSourceCategoryUsingGETRequest {
    /**
     * category_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetLeadSourceCategoryUsingGET
     */
    categoryId: string
}

export interface PreReleaseApiGetOpportunityStageUsingGETRequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetOpportunityStageUsingGET
     */
    stageId: string
}

export interface PreReleaseApiGetOpportunityUsingGET1Request {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetOpportunityUsingGET1
     */
    opportunityId: string
}

export interface PreReleaseApiGetOrderTotalDiscountUsingGETRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetOrderTotalDiscountUsingGET
     */
    discountId: string
}

export interface PreReleaseApiGetOrderUsingGET1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetOrderUsingGET1
     */
    orderId: string
}

export interface PreReleaseApiGetProductUsingGETRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetProductUsingGET
     */
    productId: string
}

export interface PreReleaseApiGetRedirectLinkUsingGETRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetRedirectLinkUsingGET
     */
    redirectId: string
}

export interface PreReleaseApiGetTaskUsingGET1Request {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetTaskUsingGET1
     */
    taskId: string
}

export interface PreReleaseApiGetUserByIdUsingGETRequest {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetUserByIdUsingGET
     */
    userId: string
}

export interface PreReleaseApiGetUserInfoUsingGET1Request {
}

export interface PreReleaseApiGetUserSignatureUsingGET1Request {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApigetUserSignatureUsingGET1
     */
    userId: string
}

export interface PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateCommissionProgramsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateCommissionProgramsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistAffiliateCommissionProgramsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateCommissionProgramsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListAffiliateLinksUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateLinksUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateLinksUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistAffiliateLinksUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistAffiliateLinksUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListCategoryDiscountsUsingGETRequest {
    /**
     * Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistCategoryDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistCategoryDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistCategoryDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistCategoryDiscountsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListCountriesUsingGET2Request {
}

export interface PreReleaseApiListDiscountsUsingGETRequest {
    /**
     * TODO: PAPI-1449
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApilistDiscountsUsingGET
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistDiscountsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListFilesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistFilesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistFilesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistFilesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistFilesUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListLandingPagesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLandingPagesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLandingPagesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistLandingPagesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLandingPagesUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListLeadSourcesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLeadSourcesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLeadSourcesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistLeadSourcesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistLeadSourcesUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListMerchantsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistMerchantsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistMerchantsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistMerchantsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistMerchantsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListNoteTemplatesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistNoteTemplatesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistNoteTemplatesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistNoteTemplatesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistNoteTemplatesUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListOpportunitiesUsingGET1Request {
    /**
     * fields
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApilistOpportunitiesUsingGET1
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunitiesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunitiesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistOpportunitiesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunitiesUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListOpportunityStagesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunityStagesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunityStagesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistOpportunityStagesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOpportunityStagesUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListOrderPaymentsUsingGET1Request {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderPaymentsUsingGET1
     */
    orderId: string
    /**
     * Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderPaymentsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderPaymentsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistOrderPaymentsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderPaymentsUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListOrderTotalDiscountsUsingGETRequest {
    /**
     * Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderTotalDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderTotalDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistOrderTotalDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrderTotalDiscountsUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListOrdersUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrdersUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrdersUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistOrdersUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistOrdersUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListProductsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are:   - (String) name   
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistProductsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistProductsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistProductsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistProductsUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListProvincesForCountryUsingGETRequest {
    /**
     * country_code
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistProvincesForCountryUsingGET
     */
    countryCode: string
}

export interface PreReleaseApiListShippingMethodsUsingGETRequest {
}

export interface PreReleaseApiListSubscriptionPlansUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionPlansUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionPlansUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistSubscriptionPlansUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionPlansUsingGET
     */
    pageToken?: string
}

export interface PreReleaseApiListSubscriptionsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistSubscriptionsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSubscriptionsUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListSummariesUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSummariesUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSummariesUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistSummariesUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistSummariesUsingGET1
     */
    pageToken?: string
}

export interface PreReleaseApiListTasksUsingGET1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    endDueTime?: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistTasksUsingGET1
     */
    startDueTime?: string
}

export interface PreReleaseApiListUsersUsingGET1Request {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistUsersUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApilistUsersUsingGET1
     */
    orderBy?: string
}

export interface PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchDefaultCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchDefaultCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the default Commission Program
     * @type PatchDefaultCommissionProgramRequest
     * @memberof PreReleaseApipatchDefaultCommissionProgramUsingPATCH
     */
    patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest
}

export interface PreReleaseApiPatchOrderUsingPATCHRequest {
    /**
     * order_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchOrderUsingPATCH
     */
    orderId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchOrderUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * order
     * @type RestV2PatchOrderRequest
     * @memberof PreReleaseApipatchOrderUsingPATCH
     */
    restV2PatchOrderRequest?: RestV2PatchOrderRequest
}

export interface PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchProductCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchProductCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the product Commission Program
     * @type PatchProductCommissionProgramRequest
     * @memberof PreReleaseApipatchProductCommissionProgramUsingPATCH
     */
    patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest
}

export interface PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest {
    /**
     * commission_program_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchSubscriptionCommissionProgramUsingPATCH
     */
    commissionProgramId: string
    /**
     * update_mask
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchSubscriptionCommissionProgramUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * Values of the subscription Commission Program
     * @type PatchSubscriptionCommissionProgramRequest
     * @memberof PreReleaseApipatchSubscriptionCommissionProgramUsingPATCH
     */
    patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest
}

export interface PreReleaseApiPatchTaskUsingPATCHRequest {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchTaskUsingPATCH
     */
    taskId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchTaskUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * task
     * @type CreatePatchTaskRequest
     * @memberof PreReleaseApipatchTaskUsingPATCH
     */
    createPatchTaskRequest?: CreatePatchTaskRequest
}

export interface PreReleaseApiPatchUserUsingPATCHRequest {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApipatchUserUsingPATCH
     */
    userId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApipatchUserUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * user
     * @type PatchUserRequestV2
     * @memberof PreReleaseApipatchUserUsingPATCH
     */
    patchUserRequestV2?: PatchUserRequestV2
}

export interface PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiremoveAffiliateFromProgramUsingPOST
     */
    id: string
    /**
     * removeFromProgramRequest
     * @type AffiliateRemoveFromProgramRequest
     * @memberof PreReleaseApiremoveAffiliateFromProgramUsingPOST
     */
    affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest
}

export interface PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest {
    /**
     * commission_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    commissionId: string
    /**
     * deleteSubscriptionPlanCommissionRequest
     * @type DeleteSubscriptionPlanCommissionRequest
     * @memberof PreReleaseApiremoveSubscriptionPlanCommissionFromCommissionsUsingPOST
     */
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest
}

export interface PreReleaseApiRetrieveNoteModelUsingGET1Request {
}

export interface PreReleaseApiRetrieveOrderCustomFieldModelUsingGETRequest {
}

export interface PreReleaseApiRetrieveSubscriptionCustomFieldModelUsingGETRequest {
}

export interface PreReleaseApiRetrieveTaskModelUsingGET1Request {
}

export interface PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateAffiliateCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateAffiliateCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateAffiliateCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateDiscountUsingPATCHRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateDiscountUsingPATCH
     */
    discountId: string
    /**
     * request
     * @type CreateUpdateDiscountRequest
     * @memberof PreReleaseApiupdateDiscountUsingPATCH
     */
    createUpdateDiscountRequest: CreateUpdateDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateDiscountUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateDiscountUsingPATCH1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateDiscountUsingPATCH1
     */
    discountId: string
    /**
     * request
     * @type UpdateShippingDiscountRequest
     * @memberof PreReleaseApiupdateDiscountUsingPATCH1
     */
    updateShippingDiscountRequest: UpdateShippingDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateDiscountUsingPATCH1
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateFileUsingPATCHRequest {
    /**
     * file_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateFileUsingPATCH
     */
    fileId: string
    /**
     * request
     * @type UpdateFileRequest
     * @memberof PreReleaseApiupdateFileUsingPATCH
     */
    updateFileRequest: UpdateFileRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateFileUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateNotesCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateNotesCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateNotesCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateOpportunityCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateOpportunityCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateOpportunityCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateOpportunityStageUsingPATCHRequest {
    /**
     * stage_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateOpportunityStageUsingPATCH
     */
    stageId: string
    /**
     * request
     * @type UpdateOpportunityStageRequest
     * @memberof PreReleaseApiupdateOpportunityStageUsingPATCH
     */
    updateOpportunityStageRequest: UpdateOpportunityStageRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateOpportunityStageUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateOpportunityUsingPATCHRequest {
    /**
     * opportunity_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateOpportunityUsingPATCH
     */
    opportunityId: string
    /**
     * request
     * @type PatchOpportunityRequest
     * @memberof PreReleaseApiupdateOpportunityUsingPATCH
     */
    patchOpportunityRequest: PatchOpportunityRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateOpportunityUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateOrderCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateOrderCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateOrderCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateOrderTotalDiscountUsingPATCHRequest {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateOrderTotalDiscountUsingPATCH
     */
    discountId: string
    /**
     * request
     * @type UpdateOrderTotalDiscountRequest
     * @memberof PreReleaseApiupdateOrderTotalDiscountUsingPATCH
     */
    updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateOrderTotalDiscountUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateRedirectLinkUsingPATCHRequest {
    /**
     * redirect_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateRedirectLinkUsingPATCH
     */
    redirectId: string
    /**
     * request
     * @type CreateOrPatchAffiliateLinkRequest
     * @memberof PreReleaseApiupdateRedirectLinkUsingPATCH
     */
    createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest
}

export interface PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateSubscriptionCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export interface PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof PreReleaseApiupdateTaskCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof PreReleaseApiupdateTaskCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PreReleaseApiupdateTaskCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectPreReleaseApi {
    private api: ObservablePreReleaseApi

    public constructor(configuration: Configuration, requestFactory?: PreReleaseApiRequestFactory, responseProcessor?: PreReleaseApiResponseProcessor) {
        this.api = new ObservablePreReleaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param param the request object
     */
    public addAffiliateToProgramUsingPOST(param: PreReleaseApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.addAffiliateToProgramUsingPOST(param.id, param.affiliateAddToProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAddCommissionProgramUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        return this.api.addCommissionProgramUsingPOSTWithHttpInfo(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param param the request object
     */
    public addCommissionProgramUsingPOST(param: PreReleaseApiAddCommissionProgramUsingPOSTRequest = {}, options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        return this.api.addCommissionProgramUsingPOST(param.createCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventoryUsingPOSTWithHttpInfo(param: PreReleaseApiAdjustInventoryUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.adjustInventoryUsingPOSTWithHttpInfo(param.productId, param.updateProductInventoryRequest,  options).toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventoryUsingPOST(param: PreReleaseApiAdjustInventoryUsingPOSTRequest, options?: Configuration): Promise<RestV2Product> {
        return this.api.adjustInventoryUsingPOST(param.productId, param.updateProductInventoryRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param param the request object
     */
    public assignProductCommissionProgramUsingPOST(param: PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<ProductCommissionProgram> {
        return this.api.assignProductCommissionProgramUsingPOST(param.commissionProgramId, param.createProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param param the request object
     */
    public assignSubscriptionCommissionProgramUsingPOST(param: PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SubscriptionCommissionProgram> {
        return this.api.assignSubscriptionCommissionProgramUsingPOST(param.commissionProgramId, param.createSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(param: PreReleaseApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cancelSubscriptionUsingPOSTWithHttpInfo(param.subscriptionId, param.cancelSubscriptionsRequest,  options).toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscriptionUsingPOST(param: PreReleaseApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.cancelSubscriptionUsingPOST(param.subscriptionId, param.cancelSubscriptionsRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param param the request object
     */
    public createAffiliateCustomFieldUsingPOST(param: PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createAffiliateCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param param the request object
     */
    public createDefaultCommissionProgramUsingPOST(param: PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.createDefaultCommissionProgramUsingPOST(param.commissionProgramId, param.createDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param param the request object
     */
    public createDiscountUsingPOSTWithHttpInfo(param: PreReleaseApiCreateDiscountUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.createDiscountUsingPOSTWithHttpInfo(param.createUpdateDiscountRequest,  options).toPromise();
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param param the request object
     */
    public createDiscountUsingPOST(param: PreReleaseApiCreateDiscountUsingPOSTRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.createDiscountUsingPOST(param.createUpdateDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createDiscountUsingPOST1WithHttpInfo(param: PreReleaseApiCreateDiscountUsingPOST1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.createDiscountUsingPOST1WithHttpInfo(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createDiscountUsingPOST1(param: PreReleaseApiCreateDiscountUsingPOST1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.createDiscountUsingPOST1(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileUsingPOST1WithHttpInfo(param: PreReleaseApiCreateFileUsingPOST1Request, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.createFileUsingPOST1WithHttpInfo(param.createFileRequest,  options).toPromise();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param param the request object
     */
    public createFileUsingPOST1(param: PreReleaseApiCreateFileUsingPOST1Request, options?: Configuration): Promise<FileMetadata> {
        return this.api.createFileUsingPOST1(param.createFileRequest,  options).toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param param the request object
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(param: PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(param.createFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param param the request object
     */
    public createFunnelIntegrationUsingPOST(param: PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.createFunnelIntegrationUsingPOST(param.createFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param param the request object
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(param: PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        return this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(param.createFunnelIntegrationTriggerEvents,  options).toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param param the request object
     */
    public createIntegrationTriggerEventUsingPOST(param: PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>> {
        return this.api.createIntegrationTriggerEventUsingPOST(param.createFunnelIntegrationTriggerEvents,  options).toPromise();
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(param: PreReleaseApiCreateLeadSourceCategoryUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.createLeadSourceCategoryUsingPOSTWithHttpInfo(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param param the request object
     */
    public createLeadSourceCategoryUsingPOST(param: PreReleaseApiCreateLeadSourceCategoryUsingPOSTRequest = {}, options?: Configuration): Promise<LeadSourceCategory> {
        return this.api.createLeadSourceCategoryUsingPOST(param.createUpdateLeadSourceCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceUsingPOSTWithHttpInfo(param: PreReleaseApiCreateLeadSourceUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<LeadSource>> {
        return this.api.createLeadSourceUsingPOSTWithHttpInfo(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param param the request object
     */
    public createLeadSourceUsingPOST(param: PreReleaseApiCreateLeadSourceUsingPOSTRequest = {}, options?: Configuration): Promise<LeadSource> {
        return this.api.createLeadSourceUsingPOST(param.createLeadSourceRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(param: PreReleaseApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param param the request object
     */
    public createNoteCustomFieldUsingPOST1(param: PreReleaseApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createNoteCustomFieldUsingPOST1(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param param the request object
     */
    public createOpportunityCustomFieldsUsingPOST(param: PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createOpportunityCustomFieldsUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOpportunityStageUsingPOSTRequest = {}, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.createOpportunityStageUsingPOSTWithHttpInfo(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param param the request object
     */
    public createOpportunityStageUsingPOST(param: PreReleaseApiCreateOpportunityStageUsingPOSTRequest = {}, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.createOpportunityStageUsingPOST(param.createOpportunityStageRequest,  options).toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunityUsingPOST1WithHttpInfo(param: PreReleaseApiCreateOpportunityUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.createOpportunityUsingPOST1WithHttpInfo(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param param the request object
     */
    public createOpportunityUsingPOST1(param: PreReleaseApiCreateOpportunityUsingPOST1Request = {}, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.createOpportunityUsingPOST1(param.createOpportunityRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param param the request object
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param param the request object
     */
    public createOrderCustomFieldUsingPOST(param: PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createOrderCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(param: PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2OrderItem>> {
        return this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createRestOrderItemRequest,  options).toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param param the request object
     */
    public createOrderItemsOnOrderUsingPOST1(param: PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<RestV2OrderItem> {
        return this.api.createOrderItemsOnOrderUsingPOST1(param.orderId, param.createRestOrderItemRequest,  options).toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOrderTotalDiscountUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.createOrderTotalDiscountUsingPOSTWithHttpInfo(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param param the request object
     */
    public createOrderTotalDiscountUsingPOST(param: PreReleaseApiCreateOrderTotalDiscountUsingPOSTRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.createOrderTotalDiscountUsingPOST(param.createOrderTotalDiscountRequest,  options).toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param param the request object
     */
    public createOrderUsingPOST1WithHttpInfo(param: PreReleaseApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.createOrderUsingPOST1WithHttpInfo(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param param the request object
     */
    public createOrderUsingPOST1(param: PreReleaseApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<RestV2Order> {
        return this.api.createOrderUsingPOST1(param.restCreateOrderRequest,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProductUsingPOST1WithHttpInfo(param: PreReleaseApiCreateProductUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.createProductUsingPOST1WithHttpInfo(param.createProductRequest,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProductUsingPOST1(param: PreReleaseApiCreateProductUsingPOST1Request, options?: Configuration): Promise<RestV2Product> {
        return this.api.createProductUsingPOST1(param.createProductRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(param: PreReleaseApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.createRedirectLinkUsingPOSTWithHttpInfo(param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param param the request object
     */
    public createRedirectLinkUsingPOST(param: PreReleaseApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.createRedirectLinkUsingPOST(param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferralUsingPOSTWithHttpInfo(param: PreReleaseApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Referral>> {
        return this.api.createReferralUsingPOSTWithHttpInfo(param.createReferralRequest,  options).toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferralUsingPOST(param: PreReleaseApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<Referral> {
        return this.api.createReferralUsingPOST(param.createReferralRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOST(param: PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createSubscriptionCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(param: PreReleaseApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>> {
        return this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomFieldUsingPOST1(param: PreReleaseApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<CreateCustomFieldResponse> {
        return this.api.createTaskCustomFieldUsingPOST1(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTaskUsingPOST1WithHttpInfo(param: PreReleaseApiCreateTaskUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.createTaskUsingPOST1WithHttpInfo(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTaskUsingPOST1(param: PreReleaseApiCreateTaskUsingPOST1Request = {}, options?: Configuration): Promise<Task> {
        return this.api.createTaskUsingPOST1(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param param the request object
     */
    public createUserUsingPOST1WithHttpInfo(param: PreReleaseApiCreateUserUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.createUserUsingPOST1WithHttpInfo(param.createUserRequestV2,  options).toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param param the request object
     */
    public createUserUsingPOST1(param: PreReleaseApiCreateUserUsingPOST1Request = {}, options?: Configuration): Promise<User> {
        return this.api.createUserUsingPOST1(param.createUserRequestV2,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param param the request object
     */
    public deleteAffiliateCommissionProgramUsingDELETE(param: PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAffiliateCommissionProgramUsingDELETE(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAffiliateUsingDELETEWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param param the request object
     */
    public deleteAffiliateUsingDELETE(param: PreReleaseApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteAffiliateUsingDELETE(param.id,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteDiscountUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETEWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE(param: PreReleaseApiDeleteDiscountUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteDiscountUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETE1WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE1(param: PreReleaseApiDeleteDiscountUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE1(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(param: PreReleaseApiDeleteDiscountUsingDELETE2Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETE2WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE2(param: PreReleaseApiDeleteDiscountUsingDELETE2Request, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE2(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteFileUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFileUsingDELETE1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param param the request object
     */
    public deleteFileUsingDELETE1(param: PreReleaseApiDeleteFileUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteFileUsingDELETE1(param.fileId,  options).toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param param the request object
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(param: PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(param.deleteFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param param the request object
     */
    public deleteFunnelIntegrationUsingPOST(param: PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFunnelIntegrationUsingPOST(param.deleteFunnelIntegrationRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteLeadSourceCategoryUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param param the request object
     */
    public deleteLeadSourceCategoryUsingDELETE(param: PreReleaseApiDeleteLeadSourceCategoryUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteLeadSourceCategoryUsingDELETE(param.categoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param param the request object
     */
    public deleteOpportunityStageUsingDELETE(param: PreReleaseApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOpportunityStageUsingDELETE(param.stageId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOpportunityUsingDELETEWithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param param the request object
     */
    public deleteOpportunityUsingDELETE(param: PreReleaseApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOpportunityUsingDELETE(param.opportunityId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param param the request object
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOrderCustomFieldUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderCustomFieldUsingDELETEWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param param the request object
     */
    public deleteOrderCustomFieldUsingDELETE(param: PreReleaseApiDeleteOrderCustomFieldUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrderCustomFieldUsingDELETE(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOrderTotalDiscountUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param param the request object
     */
    public deleteOrderTotalDiscountUsingDELETE(param: PreReleaseApiDeleteOrderTotalDiscountUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrderTotalDiscountUsingDELETE(param.discountId,  options).toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrderUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderUsingDELETE1WithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param param the request object
     */
    public deleteOrderUsingDELETE1(param: PreReleaseApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteOrderUsingDELETE1(param.orderId,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProductUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteProductUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProductUsingDELETE1WithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProductUsingDELETE1(param: PreReleaseApiDeleteProductUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteProductUsingDELETE1(param.productId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param param the request object
     */
    public deleteRedirectLinkUsingDELETE(param: PreReleaseApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteRedirectLinkUsingDELETE(param.redirectId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomFieldUsingDELETE(param: PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTaskCustomFieldUsingDELETE(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTaskUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTaskUsingDELETE1WithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTaskUsingDELETE1(param: PreReleaseApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteTaskUsingDELETE1(param.taskId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(param: PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>> {
        return this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(param.affiliateId,  options).toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param param the request object
     */
    public getAffiliateCommissionTotalUsingGET(param: PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<AffiliateCommissionEarned> {
        return this.api.getAffiliateCommissionTotalUsingGET(param.affiliateId,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGETWithHttpInfo(param: PreReleaseApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>> {
        return this.api.getAffiliateCommissionsUsingGETWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param param the request object
     */
    public getAffiliateCommissionsUsingGET(param: PreReleaseApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<ListAffiliateCommissionResponse> {
        return this.api.getAffiliateCommissionsUsingGET(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(param: PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     * @param param the request object
     */
    public getAffiliateCustomFieldsUsingGET(param: PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.getAffiliateCustomFieldsUsingGET( options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGETWithHttpInfo(param: PreReleaseApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>> {
        return this.api.getCommissionProgramUsingGETWithHttpInfo(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param param the request object
     */
    public getCommissionProgramUsingGET(param: PreReleaseApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<AffiliateProgramV2> {
        return this.api.getCommissionProgramUsingGET(param.commissionProgramId,  options).toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param param the request object
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(param: PreReleaseApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>> {
        return this.api.getContactsBySearchTermUsingGETWithHttpInfo(param.searchParam,  options).toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param param the request object
     */
    public getContactsBySearchTermUsingGET(param: PreReleaseApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<ListBasicContactResponse> {
        return this.api.getContactsBySearchTermUsingGET(param.searchParam,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getDiscountUsingGETWithHttpInfo(param: PreReleaseApiGetDiscountUsingGETRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.getDiscountUsingGETWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param param the request object
     */
    public getDiscountUsingGET(param: PreReleaseApiGetDiscountUsingGETRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.getDiscountUsingGET(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getDiscountUsingGET1WithHttpInfo(param: PreReleaseApiGetDiscountUsingGET1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.getDiscountUsingGET1WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getDiscountUsingGET1(param: PreReleaseApiGetDiscountUsingGET1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.getDiscountUsingGET1(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGETWithHttpInfo(param: PreReleaseApiGetFileDataUsingGETRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getFileDataUsingGETWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param param the request object
     */
    public getFileDataUsingGET(param: PreReleaseApiGetFileDataUsingGETRequest, options?: Configuration): Promise<string> {
        return this.api.getFileDataUsingGET(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1WithHttpInfo(param: PreReleaseApiGetFileUsingGET1Request, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.getFileUsingGET1WithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param param the request object
     */
    public getFileUsingGET1(param: PreReleaseApiGetFileUsingGET1Request, options?: Configuration): Promise<FileMetadata> {
        return this.api.getFileUsingGET1(param.fileId,  options).toPromise();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetailsUsingGETWithHttpInfo(param: PreReleaseApiGetLeadScoreDetailsUsingGETRequest, options?: Configuration): Promise<HttpInfo<LeadScore>> {
        return this.api.getLeadScoreDetailsUsingGETWithHttpInfo(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param param the request object
     */
    public getLeadScoreDetailsUsingGET(param: PreReleaseApiGetLeadScoreDetailsUsingGETRequest, options?: Configuration): Promise<LeadScore> {
        return this.api.getLeadScoreDetailsUsingGET(param.contactId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(param: PreReleaseApiGetLeadSourceCategoryUsingGETRequest, options?: Configuration): Promise<HttpInfo<LeadSourceCategory>> {
        return this.api.getLeadSourceCategoryUsingGETWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param param the request object
     */
    public getLeadSourceCategoryUsingGET(param: PreReleaseApiGetLeadSourceCategoryUsingGETRequest, options?: Configuration): Promise<LeadSourceCategory> {
        return this.api.getLeadSourceCategoryUsingGET(param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStageUsingGETWithHttpInfo(param: PreReleaseApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.getOpportunityStageUsingGETWithHttpInfo(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param param the request object
     */
    public getOpportunityStageUsingGET(param: PreReleaseApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.getOpportunityStageUsingGET(param.stageId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunityUsingGET1WithHttpInfo(param: PreReleaseApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.getOpportunityUsingGET1WithHttpInfo(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param param the request object
     */
    public getOpportunityUsingGET1(param: PreReleaseApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.getOpportunityUsingGET1(param.opportunityId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(param: PreReleaseApiGetOrderTotalDiscountUsingGETRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.getOrderTotalDiscountUsingGETWithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param param the request object
     */
    public getOrderTotalDiscountUsingGET(param: PreReleaseApiGetOrderTotalDiscountUsingGETRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.getOrderTotalDiscountUsingGET(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrderUsingGET1WithHttpInfo(param: PreReleaseApiGetOrderUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.getOrderUsingGET1WithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param param the request object
     */
    public getOrderUsingGET1(param: PreReleaseApiGetOrderUsingGET1Request, options?: Configuration): Promise<RestV2Order> {
        return this.api.getOrderUsingGET1(param.orderId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProductUsingGETWithHttpInfo(param: PreReleaseApiGetProductUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.getProductUsingGETWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProductUsingGET(param: PreReleaseApiGetProductUsingGETRequest, options?: Configuration): Promise<RestV2Product> {
        return this.api.getProductUsingGET(param.productId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGETWithHttpInfo(param: PreReleaseApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.getRedirectLinkUsingGETWithHttpInfo(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param param the request object
     */
    public getRedirectLinkUsingGET(param: PreReleaseApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.getRedirectLinkUsingGET(param.redirectId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTaskUsingGET1WithHttpInfo(param: PreReleaseApiGetTaskUsingGET1Request, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.getTaskUsingGET1WithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTaskUsingGET1(param: PreReleaseApiGetTaskUsingGET1Request, options?: Configuration): Promise<Task> {
        return this.api.getTaskUsingGET1(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserByIdUsingGETWithHttpInfo(param: PreReleaseApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.getUserByIdUsingGETWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserByIdUsingGET(param: PreReleaseApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<User> {
        return this.api.getUserByIdUsingGET(param.userId,  options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfoUsingGET1WithHttpInfo(param: PreReleaseApiGetUserInfoUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>> {
        return this.api.getUserInfoUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfoUsingGET1(param: PreReleaseApiGetUserInfoUsingGET1Request = {}, options?: Configuration): Promise<GetUserInfoResponse> {
        return this.api.getUserInfoUsingGET1( options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignatureUsingGET1WithHttpInfo(param: PreReleaseApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getUserSignatureUsingGET1WithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignatureUsingGET1(param: PreReleaseApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<string> {
        return this.api.getUserSignatureUsingGET1(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(param: PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        return this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param param the request object
     */
    public listAffiliateCommissionProgramsUsingGET(param: PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest = {}, options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse> {
        return this.api.listAffiliateCommissionProgramsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGETWithHttpInfo(param: PreReleaseApiListAffiliateLinksUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        return this.api.listAffiliateLinksUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param param the request object
     */
    public listAffiliateLinksUsingGET(param: PreReleaseApiListAffiliateLinksUsingGETRequest = {}, options?: Configuration): Promise<ListAffiliateLinksResponse> {
        return this.api.listAffiliateLinksUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscountsUsingGETWithHttpInfo(param: PreReleaseApiListCategoryDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListCategoryDiscountsResponse>> {
        return this.api.listCategoryDiscountsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param param the request object
     */
    public listCategoryDiscountsUsingGET(param: PreReleaseApiListCategoryDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListCategoryDiscountsResponse> {
        return this.api.listCategoryDiscountsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List Countries
     * @param param the request object
     */
    public listCountriesUsingGET2WithHttpInfo(param: PreReleaseApiListCountriesUsingGET2Request = {}, options?: Configuration): Promise<HttpInfo<ListCountriesResponse>> {
        return this.api.listCountriesUsingGET2WithHttpInfo( options).toPromise();
    }

    /**
     * List Countries
     * @param param the request object
     */
    public listCountriesUsingGET2(param: PreReleaseApiListCountriesUsingGET2Request = {}, options?: Configuration): Promise<ListCountriesResponse> {
        return this.api.listCountriesUsingGET2( options).toPromise();
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listDiscountsUsingGETWithHttpInfo(param: PreReleaseApiListDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListShippingDiscountsResponse>> {
        return this.api.listDiscountsUsingGETWithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listDiscountsUsingGET(param: PreReleaseApiListDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListShippingDiscountsResponse> {
        return this.api.listDiscountsUsingGET(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1WithHttpInfo(param: PreReleaseApiListFilesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListFilesResponse>> {
        return this.api.listFilesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all files
     * List all files
     * @param param the request object
     */
    public listFilesUsingGET1(param: PreReleaseApiListFilesUsingGET1Request = {}, options?: Configuration): Promise<ListFilesResponse> {
        return this.api.listFilesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param param the request object
     */
    public listLandingPagesUsingGETWithHttpInfo(param: PreReleaseApiListLandingPagesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>> {
        return this.api.listLandingPagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param param the request object
     */
    public listLandingPagesUsingGET(param: PreReleaseApiListLandingPagesUsingGETRequest = {}, options?: Configuration): Promise<ListLandingPagesResponse> {
        return this.api.listLandingPagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGETWithHttpInfo(param: PreReleaseApiListLeadSourcesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>> {
        return this.api.listLeadSourcesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param param the request object
     */
    public listLeadSourcesUsingGET(param: PreReleaseApiListLeadSourcesUsingGETRequest = {}, options?: Configuration): Promise<ListLeadSourcesResponse> {
        return this.api.listLeadSourcesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchantsUsingGETWithHttpInfo(param: PreReleaseApiListMerchantsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>> {
        return this.api.listMerchantsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param param the request object
     */
    public listMerchantsUsingGET(param: PreReleaseApiListMerchantsUsingGETRequest = {}, options?: Configuration): Promise<ListRestMerchantResponse> {
        return this.api.listMerchantsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplatesUsingGETWithHttpInfo(param: PreReleaseApiListNoteTemplatesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListNoteTemplateResponse>> {
        return this.api.listNoteTemplatesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param param the request object
     */
    public listNoteTemplatesUsingGET(param: PreReleaseApiListNoteTemplatesUsingGETRequest = {}, options?: Configuration): Promise<ListNoteTemplateResponse> {
        return this.api.listNoteTemplatesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunitiesUsingGET1WithHttpInfo(param: PreReleaseApiListOpportunitiesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>> {
        return this.api.listOpportunitiesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param param the request object
     */
    public listOpportunitiesUsingGET1(param: PreReleaseApiListOpportunitiesUsingGET1Request = {}, options?: Configuration): Promise<ListOpportunitiesResponse> {
        return this.api.listOpportunitiesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStagesUsingGETWithHttpInfo(param: PreReleaseApiListOpportunityStagesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        return this.api.listOpportunityStagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param param the request object
     */
    public listOpportunityStagesUsingGET(param: PreReleaseApiListOpportunityStagesUsingGETRequest = {}, options?: Configuration): Promise<ListOpportunityStagesResponse> {
        return this.api.listOpportunityStagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPaymentsUsingGET1WithHttpInfo(param: PreReleaseApiListOrderPaymentsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListOrderPaymentsResponse>> {
        return this.api.listOrderPaymentsUsingGET1WithHttpInfo(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param param the request object
     */
    public listOrderPaymentsUsingGET1(param: PreReleaseApiListOrderPaymentsUsingGET1Request, options?: Configuration): Promise<ListOrderPaymentsResponse> {
        return this.api.listOrderPaymentsUsingGET1(param.orderId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(param: PreReleaseApiListOrderTotalDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListOrderTotalDiscountsResponse>> {
        return this.api.listOrderTotalDiscountsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param param the request object
     */
    public listOrderTotalDiscountsUsingGET(param: PreReleaseApiListOrderTotalDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListOrderTotalDiscountsResponse> {
        return this.api.listOrderTotalDiscountsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrdersUsingGET1WithHttpInfo(param: PreReleaseApiListOrdersUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListOrders>> {
        return this.api.listOrdersUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param param the request object
     */
    public listOrdersUsingGET1(param: PreReleaseApiListOrdersUsingGET1Request = {}, options?: Configuration): Promise<ListOrders> {
        return this.api.listOrdersUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProductsUsingGET1WithHttpInfo(param: PreReleaseApiListProductsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListProductsResponse>> {
        return this.api.listProductsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProductsUsingGET1(param: PreReleaseApiListProductsUsingGET1Request = {}, options?: Configuration): Promise<ListProductsResponse> {
        return this.api.listProductsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountryUsingGETWithHttpInfo(param: PreReleaseApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListProvincesResponse>> {
        return this.api.listProvincesForCountryUsingGETWithHttpInfo(param.countryCode,  options).toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param param the request object
     */
    public listProvincesForCountryUsingGET(param: PreReleaseApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<ListProvincesResponse> {
        return this.api.listProvincesForCountryUsingGET(param.countryCode,  options).toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethodsUsingGETWithHttpInfo(param: PreReleaseApiListShippingMethodsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        return this.api.listShippingMethodsUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethodsUsingGET(param: PreReleaseApiListShippingMethodsUsingGETRequest = {}, options?: Configuration): Promise<ListRestShippingMethodsResponse> {
        return this.api.listShippingMethodsUsingGET( options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(param: PreReleaseApiListSubscriptionPlansUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        return this.api.listSubscriptionPlansUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlansUsingGET(param: PreReleaseApiListSubscriptionPlansUsingGETRequest = {}, options?: Configuration): Promise<ListSubscriptionPlansResponse> {
        return this.api.listSubscriptionPlansUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptionsUsingGET1WithHttpInfo(param: PreReleaseApiListSubscriptionsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListSubscriptionsResponse>> {
        return this.api.listSubscriptionsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptionsUsingGET1(param: PreReleaseApiListSubscriptionsUsingGET1Request = {}, options?: Configuration): Promise<ListSubscriptionsResponse> {
        return this.api.listSubscriptionsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1WithHttpInfo(param: PreReleaseApiListSummariesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        return this.api.listSummariesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param param the request object
     */
    public listSummariesUsingGET1(param: PreReleaseApiListSummariesUsingGET1Request = {}, options?: Configuration): Promise<ListAffiliateSummariesResponse> {
        return this.api.listSummariesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasksUsingGET1WithHttpInfo(param: PreReleaseApiListTasksUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListTasksResponse>> {
        return this.api.listTasksUsingGET1WithHttpInfo(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime,  options).toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasksUsingGET1(param: PreReleaseApiListTasksUsingGET1Request = {}, options?: Configuration): Promise<ListTasksResponse> {
        return this.api.listTasksUsingGET1(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listUsersUsingGET1WithHttpInfo(param: PreReleaseApiListUsersUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListUserResponse>> {
        return this.api.listUsersUsingGET1WithHttpInfo(param.filter, param.orderBy,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listUsersUsingGET1(param: PreReleaseApiListUsersUsingGET1Request = {}, options?: Configuration): Promise<ListUserResponse> {
        return this.api.listUsersUsingGET1(param.filter, param.orderBy,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        return this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param param the request object
     */
    public patchDefaultCommissionProgramUsingPATCH(param: PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        return this.api.patchDefaultCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public patchOrderUsingPATCHWithHttpInfo(param: PreReleaseApiPatchOrderUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        return this.api.patchOrderUsingPATCHWithHttpInfo(param.orderId, param.updateMask, param.restV2PatchOrderRequest,  options).toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param param the request object
     */
    public patchOrderUsingPATCH(param: PreReleaseApiPatchOrderUsingPATCHRequest, options?: Configuration): Promise<RestV2Order> {
        return this.api.patchOrderUsingPATCH(param.orderId, param.updateMask, param.restV2PatchOrderRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        return this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param param the request object
     */
    public patchProductCommissionProgramUsingPATCH(param: PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<ProductCommissionProgram> {
        return this.api.patchProductCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        return this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param param the request object
     */
    public patchSubscriptionCommissionProgramUsingPATCH(param: PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SubscriptionCommissionProgram> {
        return this.api.patchSubscriptionCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest,  options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public patchTaskUsingPATCHWithHttpInfo(param: PreReleaseApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>> {
        return this.api.patchTaskUsingPATCHWithHttpInfo(param.taskId, param.updateMask, param.createPatchTaskRequest,  options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public patchTaskUsingPATCH(param: PreReleaseApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<UpdateTaskResponse> {
        return this.api.patchTaskUsingPATCH(param.taskId, param.updateMask, param.createPatchTaskRequest,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public patchUserUsingPATCHWithHttpInfo(param: PreReleaseApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.patchUserUsingPATCHWithHttpInfo(param.userId, param.updateMask, param.patchUserRequestV2,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public patchUserUsingPATCH(param: PreReleaseApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<User> {
        return this.api.patchUserUsingPATCH(param.userId, param.updateMask, param.patchUserRequestV2,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(param: PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param param the request object
     */
    public removeAffiliateFromProgramUsingPOST(param: PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeAffiliateFromProgramUsingPOST(param.id, param.affiliateRemoveFromProgramRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param: PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param param the request object
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param: PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteSubscriptionPlanCommissionRequest,  options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(param: PreReleaseApiRetrieveNoteModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveNoteModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     * @param param the request object
     */
    public retrieveNoteModelUsingGET1(param: PreReleaseApiRetrieveNoteModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveNoteModelUsingGET1( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(param: PreReleaseApiRetrieveOrderCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     * @param param the request object
     */
    public retrieveOrderCustomFieldModelUsingGET(param: PreReleaseApiRetrieveOrderCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveOrderCustomFieldModelUsingGET( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(param: PreReleaseApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(param: PreReleaseApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGET( options).toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(param: PreReleaseApiRetrieveTaskModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveTaskModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModelUsingGET1(param: PreReleaseApiRetrieveTaskModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveTaskModelUsingGET1( options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateAffiliateCustomFieldUsingPATCH(param: PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateAffiliateCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateDiscountUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        return this.api.updateDiscountUsingPATCHWithHttpInfo(param.discountId, param.createUpdateDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH(param: PreReleaseApiUpdateDiscountUsingPATCHRequest, options?: Configuration): Promise<CategoryDiscount> {
        return this.api.updateDiscountUsingPATCH(param.discountId, param.createUpdateDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH1WithHttpInfo(param: PreReleaseApiUpdateDiscountUsingPATCH1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.updateDiscountUsingPATCH1WithHttpInfo(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH1(param: PreReleaseApiUpdateDiscountUsingPATCH1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.updateDiscountUsingPATCH1(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a file
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateFileUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<FileMetadata>> {
        return this.api.updateFileUsingPATCHWithHttpInfo(param.fileId, param.updateFileRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a file
     * Update a file
     * @param param the request object
     */
    public updateFileUsingPATCH(param: PreReleaseApiUpdateFileUsingPATCHRequest, options?: Configuration): Promise<FileMetadata> {
        return this.api.updateFileUsingPATCH(param.fileId, param.updateFileRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param param the request object
     */
    public updateNotesCustomFieldUsingPATCH(param: PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateNotesCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param param the request object
     */
    public updateOpportunityCustomFieldUsingPATCH(param: PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateOpportunityCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOpportunityStageUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        return this.api.updateOpportunityStageUsingPATCHWithHttpInfo(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param param the request object
     */
    public updateOpportunityStageUsingPATCH(param: PreReleaseApiUpdateOpportunityStageUsingPATCHRequest, options?: Configuration): Promise<RestOpportunityStage> {
        return this.api.updateOpportunityStageUsingPATCH(param.stageId, param.updateOpportunityStageRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunityUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        return this.api.updateOpportunityUsingPATCHWithHttpInfo(param.opportunityId, param.patchOpportunityRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param param the request object
     */
    public updateOpportunityUsingPATCH(param: PreReleaseApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<RestV2Opportunity> {
        return this.api.updateOpportunityUsingPATCH(param.opportunityId, param.patchOpportunityRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param param the request object
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param param the request object
     */
    public updateOrderCustomFieldUsingPATCH(param: PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateOrderCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOrderTotalDiscountUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<OrderTotalDiscount>> {
        return this.api.updateOrderTotalDiscountUsingPATCHWithHttpInfo(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param param the request object
     */
    public updateOrderTotalDiscountUsingPATCH(param: PreReleaseApiUpdateOrderTotalDiscountUsingPATCHRequest, options?: Configuration): Promise<OrderTotalDiscount> {
        return this.api.updateOrderTotalDiscountUsingPATCH(param.discountId, param.updateOrderTotalDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        return this.api.updateRedirectLinkUsingPATCHWithHttpInfo(param.redirectId, param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param param the request object
     */
    public updateRedirectLinkUsingPATCH(param: PreReleaseApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<AffiliateLink> {
        return this.api.updateRedirectLinkUsingPATCH(param.redirectId, param.createOrPatchAffiliateLinkRequest,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCH(param: PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateSubscriptionCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomFieldUsingPATCH(param: PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateTaskCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableProductApi } from "./ObservableAPI";
import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";

export interface ProductApiAdjustInventoryUsingPOSTRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApiadjustInventoryUsingPOST
     */
    productId: string
    /**
     * updateProductInventoryRequest
     * @type UpdateProductInventoryRequest
     * @memberof ProductApiadjustInventoryUsingPOST
     */
    updateProductInventoryRequest: UpdateProductInventoryRequest
}

export interface ProductApiCreateProductUsingPOST1Request {
    /**
     * createProductRequest
     * @type CreateProductRequest
     * @memberof ProductApicreateProductUsingPOST1
     */
    createProductRequest: CreateProductRequest
}

export interface ProductApiDeleteProductUsingDELETE1Request {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApideleteProductUsingDELETE1
     */
    productId: string
}

export interface ProductApiGetProductUsingGETRequest {
    /**
     * product_id
     * Defaults to: undefined
     * @type string
     * @memberof ProductApigetProductUsingGET
     */
    productId: string
}

export interface ProductApiListProductsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are:   - (String) name   
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ProductApilistProductsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ProductApilistProductsUsingGET1
     */
    pageToken?: string
}

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventoryUsingPOSTWithHttpInfo(param: ProductApiAdjustInventoryUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.adjustInventoryUsingPOSTWithHttpInfo(param.productId, param.updateProductInventoryRequest,  options).toPromise();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param param the request object
     */
    public adjustInventoryUsingPOST(param: ProductApiAdjustInventoryUsingPOSTRequest, options?: Configuration): Promise<RestV2Product> {
        return this.api.adjustInventoryUsingPOST(param.productId, param.updateProductInventoryRequest,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProductUsingPOST1WithHttpInfo(param: ProductApiCreateProductUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.createProductUsingPOST1WithHttpInfo(param.createProductRequest,  options).toPromise();
    }

    /**
     * Creates a new product
     * Create a Product
     * @param param the request object
     */
    public createProductUsingPOST1(param: ProductApiCreateProductUsingPOST1Request, options?: Configuration): Promise<RestV2Product> {
        return this.api.createProductUsingPOST1(param.createProductRequest,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProductUsingDELETE1WithHttpInfo(param: ProductApiDeleteProductUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProductUsingDELETE1WithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param param the request object
     */
    public deleteProductUsingDELETE1(param: ProductApiDeleteProductUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteProductUsingDELETE1(param.productId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProductUsingGETWithHttpInfo(param: ProductApiGetProductUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestV2Product>> {
        return this.api.getProductUsingGETWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param param the request object
     */
    public getProductUsingGET(param: ProductApiGetProductUsingGETRequest, options?: Configuration): Promise<RestV2Product> {
        return this.api.getProductUsingGET(param.productId,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProductsUsingGET1WithHttpInfo(param: ProductApiListProductsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListProductsResponse>> {
        return this.api.listProductsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param param the request object
     */
    public listProductsUsingGET1(param: ProductApiListProductsUsingGET1Request = {}, options?: Configuration): Promise<ListProductsResponse> {
        return this.api.listProductsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableReferralApi } from "./ObservableAPI";
import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";

export interface ReferralApiCreateReferralUsingPOSTRequest {
    /**
     * request
     * @type CreateReferralRequest
     * @memberof ReferralApicreateReferralUsingPOST
     */
    createReferralRequest: CreateReferralRequest
}

export class ObjectReferralApi {
    private api: ObservableReferralApi

    public constructor(configuration: Configuration, requestFactory?: ReferralApiRequestFactory, responseProcessor?: ReferralApiResponseProcessor) {
        this.api = new ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferralUsingPOSTWithHttpInfo(param: ReferralApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Referral>> {
        return this.api.createReferralUsingPOSTWithHttpInfo(param.createReferralRequest,  options).toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param param the request object
     */
    public createReferralUsingPOST(param: ReferralApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<Referral> {
        return this.api.createReferralUsingPOST(param.createReferralRequest,  options).toPromise();
    }

}

import { ObservableReportingApi } from "./ObservableAPI";
import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";

export interface ReportingApiRunReportUsingPOSTRequest {
    /**
     * The unique identifier of the report (Saved Search) to execute
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    reportId: string
    /**
     * Comma-separated list of fields to return (or do not supply a value to return all)
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    fields?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: 1000
     * @type number
     * @memberof ReportingApirunReportUsingPOST
     */
    pageSize?: number
    /**
     * Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     * Defaults to: undefined
     * @type string
     * @memberof ReportingApirunReportUsingPOST
     */
    pageToken?: string
}

export class ObjectReportingApi {
    private api: ObservableReportingApi

    public constructor(configuration: Configuration, requestFactory?: ReportingApiRequestFactory, responseProcessor?: ReportingApiResponseProcessor) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOSTWithHttpInfo(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ReportExecutionResult>> {
        return this.api.runReportUsingPOSTWithHttpInfo(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param param the request object
     */
    public runReportUsingPOST(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<ReportExecutionResult> {
        return this.api.runReportUsingPOST(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableSalesApi } from "./ObservableAPI";
import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";

export interface SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest {
    /**
     * id
     * Defaults to: undefined
     * @type number
     * @memberof SalesApisetMerchantGatewayAsDefaultUsingPOST
     */
    id: number
}

export class ObjectSalesApi {
    private api: ObservableSalesApi

    public constructor(configuration: Configuration, requestFactory?: SalesApiRequestFactory, responseProcessor?: SalesApiResponseProcessor) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param param the request object
     */
    public setMerchantGatewayAsDefaultUsingPOST(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.setMerchantGatewayAsDefaultUsingPOST(param.id,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetApplicationConfigurationsUsingGETRequest {
    /**
     * By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * Defaults to: undefined
     * @type Array&lt;&#39;affiliate&#39; | &#39;appointment&#39; | &#39;contact&#39; | &#39;ecommerce&#39; | &#39;email&#39; | &#39;forms&#39; | &#39;fulfillment&#39; | &#39;invoice&#39; | &#39;note&#39; | &#39;opportunity&#39; | &#39;task&#39; | &#39;template&#39;&gt;
     * @memberof SettingsApigetApplicationConfigurationsUsingGET
     */
    fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>
}

export interface SettingsApiGetContactOptionTypesUsingGET1Request {
}

export interface SettingsApiIsApplicationEnabledUsingGETRequest {
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurationsUsingGETWithHttpInfo(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetSettingsResponse>> {
        return this.api.getApplicationConfigurationsUsingGETWithHttpInfo(param.fields,  options).toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param param the request object
     */
    public getApplicationConfigurationsUsingGET(param: SettingsApiGetApplicationConfigurationsUsingGETRequest = {}, options?: Configuration): Promise<GetSettingsResponse> {
        return this.api.getApplicationConfigurationsUsingGET(param.fields,  options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        return this.api.getContactOptionTypesUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     * @param param the request object
     */
    public getContactOptionTypesUsingGET1(param: SettingsApiGetContactOptionTypesUsingGET1Request = {}, options?: Configuration): Promise<GetContactOptionTypesResponse> {
        return this.api.getContactOptionTypesUsingGET1( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGETWithHttpInfo(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        return this.api.isApplicationEnabledUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     * @param param the request object
     */
    public isApplicationEnabledUsingGET(param: SettingsApiIsApplicationEnabledUsingGETRequest = {}, options?: Configuration): Promise<GetApplicationEnabledStatusResponse> {
        return this.api.isApplicationEnabledUsingGET( options).toPromise();
    }

}

import { ObservableShippingApi } from "./ObservableAPI";
import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";

export interface ShippingApiListShippingMethodsUsingGETRequest {
}

export class ObjectShippingApi {
    private api: ObservableShippingApi

    public constructor(configuration: Configuration, requestFactory?: ShippingApiRequestFactory, responseProcessor?: ShippingApiResponseProcessor) {
        this.api = new ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethodsUsingGETWithHttpInfo(param: ShippingApiListShippingMethodsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        return this.api.listShippingMethodsUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     * @param param the request object
     */
    public listShippingMethodsUsingGET(param: ShippingApiListShippingMethodsUsingGETRequest = {}, options?: Configuration): Promise<ListRestShippingMethodsResponse> {
        return this.api.listShippingMethodsUsingGET( options).toPromise();
    }

}

import { ObservableShippingDiscountApi } from "./ObservableAPI";
import { ShippingDiscountApiRequestFactory, ShippingDiscountApiResponseProcessor} from "../apis/ShippingDiscountApi";

export interface ShippingDiscountApiCreateDiscountUsingPOST1Request {
    /**
     * request
     * @type CreateShippingDiscountRequest
     * @memberof ShippingDiscountApicreateDiscountUsingPOST1
     */
    createShippingDiscountRequest: CreateShippingDiscountRequest
}

export interface ShippingDiscountApiDeleteDiscountUsingDELETE2Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApideleteDiscountUsingDELETE2
     */
    discountId: string
}

export interface ShippingDiscountApiGetDiscountUsingGET1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApigetDiscountUsingGET1
     */
    discountId: string
}

export interface ShippingDiscountApiListDiscountsUsingGETRequest {
    /**
     * TODO: PAPI-1449
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ShippingDiscountApilistDiscountsUsingGET
     */
    fields?: Array<string>
    /**
     * Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApilistDiscountsUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApilistDiscountsUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof ShippingDiscountApilistDiscountsUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApilistDiscountsUsingGET
     */
    pageToken?: string
}

export interface ShippingDiscountApiUpdateDiscountUsingPATCH1Request {
    /**
     * discount_id
     * Defaults to: undefined
     * @type string
     * @memberof ShippingDiscountApiupdateDiscountUsingPATCH1
     */
    discountId: string
    /**
     * request
     * @type UpdateShippingDiscountRequest
     * @memberof ShippingDiscountApiupdateDiscountUsingPATCH1
     */
    updateShippingDiscountRequest: UpdateShippingDiscountRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ShippingDiscountApiupdateDiscountUsingPATCH1
     */
    updateMask?: Array<string>
}

export class ObjectShippingDiscountApi {
    private api: ObservableShippingDiscountApi

    public constructor(configuration: Configuration, requestFactory?: ShippingDiscountApiRequestFactory, responseProcessor?: ShippingDiscountApiResponseProcessor) {
        this.api = new ObservableShippingDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createDiscountUsingPOST1WithHttpInfo(param: ShippingDiscountApiCreateDiscountUsingPOST1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.createDiscountUsingPOST1WithHttpInfo(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param param the request object
     */
    public createDiscountUsingPOST1(param: ShippingDiscountApiCreateDiscountUsingPOST1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.createDiscountUsingPOST1(param.createShippingDiscountRequest,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(param: ShippingDiscountApiDeleteDiscountUsingDELETE2Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiscountUsingDELETE2WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param param the request object
     */
    public deleteDiscountUsingDELETE2(param: ShippingDiscountApiDeleteDiscountUsingDELETE2Request, options?: Configuration): Promise<void> {
        return this.api.deleteDiscountUsingDELETE2(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getDiscountUsingGET1WithHttpInfo(param: ShippingDiscountApiGetDiscountUsingGET1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.getDiscountUsingGET1WithHttpInfo(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param param the request object
     */
    public getDiscountUsingGET1(param: ShippingDiscountApiGetDiscountUsingGET1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.getDiscountUsingGET1(param.discountId,  options).toPromise();
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listDiscountsUsingGETWithHttpInfo(param: ShippingDiscountApiListDiscountsUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListShippingDiscountsResponse>> {
        return this.api.listDiscountsUsingGETWithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param param the request object
     */
    public listDiscountsUsingGET(param: ShippingDiscountApiListDiscountsUsingGETRequest = {}, options?: Configuration): Promise<ListShippingDiscountsResponse> {
        return this.api.listDiscountsUsingGET(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH1WithHttpInfo(param: ShippingDiscountApiUpdateDiscountUsingPATCH1Request, options?: Configuration): Promise<HttpInfo<ShippingDiscount>> {
        return this.api.updateDiscountUsingPATCH1WithHttpInfo(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param param the request object
     */
    public updateDiscountUsingPATCH1(param: ShippingDiscountApiUpdateDiscountUsingPATCH1Request, options?: Configuration): Promise<ShippingDiscount> {
        return this.api.updateDiscountUsingPATCH1(param.discountId, param.updateShippingDiscountRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableSubscriptionPlansApi } from "./ObservableAPI";
import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";

export interface SubscriptionPlansApiListSubscriptionPlansUsingGETRequest {
    /**
     * Filter to apply, allowed fields are:   - (String) name   
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlansUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlansUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionPlansApilistSubscriptionPlansUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionPlansApilistSubscriptionPlansUsingGET
     */
    pageToken?: string
}

export class ObjectSubscriptionPlansApi {
    private api: ObservableSubscriptionPlansApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionPlansApiRequestFactory, responseProcessor?: SubscriptionPlansApiResponseProcessor) {
        this.api = new ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(param: SubscriptionPlansApiListSubscriptionPlansUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        return this.api.listSubscriptionPlansUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param param the request object
     */
    public listSubscriptionPlansUsingGET(param: SubscriptionPlansApiListSubscriptionPlansUsingGETRequest = {}, options?: Configuration): Promise<ListSubscriptionPlansResponse> {
        return this.api.listSubscriptionPlansUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiCancelSubscriptionUsingPOSTRequest {
    /**
     * subscription_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApicancelSubscriptionUsingPOST
     */
    subscriptionId: string
    /**
     * cancelSubscriptionsRequest
     * @type CancelSubscriptionsRequest
     * @memberof SubscriptionsApicancelSubscriptionUsingPOST
     */
    cancelSubscriptionsRequest: CancelSubscriptionsRequest
}

export interface SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof SubscriptionsApicreateSubscriptionCustomFieldUsingPOST
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest {
    /**
     * createSubscriptionV2
     * @type CreateSubscriptionV2
     * @memberof SubscriptionsApicreateSubscriptionV2UsingPOST
     */
    createSubscriptionV2: CreateSubscriptionV2
}

export interface SubscriptionsApiListSubscriptionsUsingGET1Request {
    /**
     * Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptionsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptionsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApilistSubscriptionsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApilistSubscriptionsUsingGET1
     */
    pageToken?: string
}

export interface SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest {
}

export interface SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SubscriptionsApiupdateSubscriptionCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(param: SubscriptionsApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cancelSubscriptionUsingPOSTWithHttpInfo(param.subscriptionId, param.cancelSubscriptionsRequest,  options).toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param param the request object
     */
    public cancelSubscriptionUsingPOST(param: SubscriptionsApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.cancelSubscriptionUsingPOST(param.subscriptionId, param.cancelSubscriptionsRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param param the request object
     */
    public createSubscriptionCustomFieldUsingPOST(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.createSubscriptionCustomFieldUsingPOST(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestSubscriptionV2>> {
        return this.api.createSubscriptionV2UsingPOSTWithHttpInfo(param.createSubscriptionV2,  options).toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param param the request object
     */
    public createSubscriptionV2UsingPOST(param: SubscriptionsApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<RestSubscriptionV2> {
        return this.api.createSubscriptionV2UsingPOST(param.createSubscriptionV2,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptionsUsingGET1WithHttpInfo(param: SubscriptionsApiListSubscriptionsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListSubscriptionsResponse>> {
        return this.api.listSubscriptionsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param param the request object
     */
    public listSubscriptionsUsingGET1(param: SubscriptionsApiListSubscriptionsUsingGET1Request = {}, options?: Configuration): Promise<ListSubscriptionsResponse> {
        return this.api.listSubscriptionsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     * @param param the request object
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(param: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGETRequest = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveSubscriptionCustomFieldModelUsingGET( options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param param the request object
     */
    public updateSubscriptionCustomFieldUsingPATCH(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateSubscriptionCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiApplyTagsUsingPOSTRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiapplyTagsUsingPOST
     */
    tagId: string
    /**
     * applyRemoveTagRequest
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiapplyTagsUsingPOST
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export interface TagsApiCreateTagCategoryUsingPOST1Request {
    /**
     * request
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApicreateTagCategoryUsingPOST1
     */
    createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest
}

export interface TagsApiCreateTagUsingPOST1Request {
    /**
     * tag
     * @type CreateUpdateTagRequest
     * @memberof TagsApicreateTagUsingPOST1
     */
    createUpdateTagRequest: CreateUpdateTagRequest
}

export interface TagsApiDeleteTagCategoryUsingDELETERequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTagCategoryUsingDELETE
     */
    tagCategoryId: string
}

export interface TagsApiDeleteTagUsingDELETERequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApideleteTagUsingDELETE
     */
    tagId: string
}

export interface TagsApiGetCategoryUsingGETRequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetCategoryUsingGET
     */
    tagCategoryId: string
}

export interface TagsApiGetTagUsingGET1Request {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApigetTagUsingGET1
     */
    tagId: string
}

export interface TagsApiListCompaniesForTagIdUsingGET1Request {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    tagId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistCompaniesForTagIdUsingGET1
     */
    pageToken?: string
}

export interface TagsApiListContactsWithTagIdUsingGETRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    tagId: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistContactsWithTagIdUsingGET
     */
    pageToken?: string
}

export interface TagsApiListTagCategoriesUsingGETRequest {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagCategoriesUsingGET
     */
    pageToken?: string
}

export interface TagsApiListTagsUsingGET1Request {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TagsApilistTagsUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TagsApilistTagsUsingGET1
     */
    pageToken?: string
}

export interface TagsApiPatchTagCategoryUsingPATCHRequest {
    /**
     * tag_category_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApipatchTagCategoryUsingPATCH
     */
    tagCategoryId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TagsApipatchTagCategoryUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * tagCategory
     * @type CreateUpdateTagCategoryRequest
     * @memberof TagsApipatchTagCategoryUsingPATCH
     */
    createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest
}

export interface TagsApiPatchTagUsingPATCHRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApipatchTagUsingPATCH
     */
    tagId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TagsApipatchTagUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * tag
     * @type CreateUpdateTagRequest
     * @memberof TagsApipatchTagUsingPATCH
     */
    createUpdateTagRequest?: CreateUpdateTagRequest
}

export interface TagsApiRemoveTagsUsingPOSTRequest {
    /**
     * tag_id
     * Defaults to: undefined
     * @type string
     * @memberof TagsApiremoveTagsUsingPOST
     */
    tagId: string
    /**
     * applyRemoveTagRequest
     * @type ApplyRemoveTagRequest
     * @memberof TagsApiremoveTagsUsingPOST
     */
    applyRemoveTagRequest: ApplyRemoveTagRequest
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTagsUsingPOSTWithHttpInfo(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ApplyTagsResponse>> {
        return this.api.applyTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param param the request object
     */
    public applyTagsUsingPOST(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<ApplyTagsResponse> {
        return this.api.applyTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1WithHttpInfo(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createTagCategoryUsingPOST1WithHttpInfo(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param param the request object
     */
    public createTagCategoryUsingPOST1(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<Tag> {
        return this.api.createTagCategoryUsingPOST1(param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1WithHttpInfo(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createTagUsingPOST1WithHttpInfo(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param param the request object
     */
    public createTagUsingPOST1(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<Tag> {
        return this.api.createTagUsingPOST1(param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTagCategoryUsingDELETEWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param param the request object
     */
    public deleteTagCategoryUsingDELETE(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTagCategoryUsingDELETE(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETEWithHttpInfo(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTagUsingDELETEWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param param the request object
     */
    public deleteTagUsingDELETE(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTagUsingDELETE(param.tagId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGETWithHttpInfo(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetTagCategoryResponse>> {
        return this.api.getCategoryUsingGETWithHttpInfo(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param param the request object
     */
    public getCategoryUsingGET(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<GetTagCategoryResponse> {
        return this.api.getCategoryUsingGET(param.tagCategoryId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1WithHttpInfo(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.getTagUsingGET1WithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param param the request object
     */
    public getTagUsingGET1(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<Tag> {
        return this.api.getTagUsingGET1(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1WithHttpInfo(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        return this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param param the request object
     */
    public listCompaniesForTagIdUsingGET1(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<ListTaggedCompaniesResponse> {
        return this.api.listCompaniesForTagIdUsingGET1(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGETWithHttpInfo(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListTaggedContactsResponse>> {
        return this.api.listContactsWithTagIdUsingGETWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param param the request object
     */
    public listContactsWithTagIdUsingGET(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<ListTaggedContactsResponse> {
        return this.api.listContactsWithTagIdUsingGET(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGETWithHttpInfo(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: Configuration): Promise<HttpInfo<ListTagCategoriesResponse>> {
        return this.api.listTagCategoriesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param param the request object
     */
    public listTagCategoriesUsingGET(param: TagsApiListTagCategoriesUsingGETRequest = {}, options?: Configuration): Promise<ListTagCategoriesResponse> {
        return this.api.listTagCategoriesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1WithHttpInfo(param: TagsApiListTagsUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListTagsResponse>> {
        return this.api.listTagsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param param the request object
     */
    public listTagsUsingGET1(param: TagsApiListTagsUsingGET1Request = {}, options?: Configuration): Promise<ListTagsResponse> {
        return this.api.listTagsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public patchTagCategoryUsingPATCHWithHttpInfo(param: TagsApiPatchTagCategoryUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        return this.api.patchTagCategoryUsingPATCHWithHttpInfo(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param param the request object
     */
    public patchTagCategoryUsingPATCH(param: TagsApiPatchTagCategoryUsingPATCHRequest, options?: Configuration): Promise<UpdateTagCategoryResponse> {
        return this.api.patchTagCategoryUsingPATCH(param.tagCategoryId, param.updateMask, param.createUpdateTagCategoryRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public patchTagUsingPATCHWithHttpInfo(param: TagsApiPatchTagUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagResponse>> {
        return this.api.patchTagUsingPATCHWithHttpInfo(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param param the request object
     */
    public patchTagUsingPATCH(param: TagsApiPatchTagUsingPATCHRequest, options?: Configuration): Promise<UpdateTagResponse> {
        return this.api.patchTagUsingPATCH(param.tagId, param.updateMask, param.createUpdateTagRequest,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOSTWithHttpInfo(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param param the request object
     */
    public removeTagsUsingPOST(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<void> {
        return this.api.removeTagsUsingPOST(param.tagId, param.applyRemoveTagRequest,  options).toPromise();
    }

}

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiCreateTaskCustomFieldUsingPOST1Request {
    /**
     * customField
     * @type CreateCustomFieldRequest
     * @memberof TaskApicreateTaskCustomFieldUsingPOST1
     */
    createCustomFieldRequest: CreateCustomFieldRequest
}

export interface TaskApiCreateTaskUsingPOST1Request {
    /**
     * task
     * @type CreateTaskRequest
     * @memberof TaskApicreateTaskUsingPOST1
     */
    createTaskRequest?: CreateTaskRequest
}

export interface TaskApiDeleteTaskCustomFieldUsingDELETERequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof TaskApideleteTaskCustomFieldUsingDELETE
     */
    customFieldId: string
}

export interface TaskApiDeleteTaskUsingDELETE1Request {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof TaskApideleteTaskUsingDELETE1
     */
    taskId: string
}

export interface TaskApiGetTaskUsingGET1Request {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof TaskApigetTaskUsingGET1
     */
    taskId: string
}

export interface TaskApiListTasksUsingGET1Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasksUsingGET1
     */
    endDueTime?: string
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasksUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasksUsingGET1
     */
    orderBy?: string
    /**
     * Total number of items to return per page
     * Minimum: 1
     * Maximum: 1000
     * Defaults to: undefined
     * @type number
     * @memberof TaskApilistTasksUsingGET1
     */
    pageSize?: number
    /**
     * Page token
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasksUsingGET1
     */
    pageToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TaskApilistTasksUsingGET1
     */
    startDueTime?: string
}

export interface TaskApiPatchTaskUsingPATCHRequest {
    /**
     * task_id
     * Defaults to: undefined
     * @type string
     * @memberof TaskApipatchTaskUsingPATCH
     */
    taskId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TaskApipatchTaskUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * task
     * @type CreatePatchTaskRequest
     * @memberof TaskApipatchTaskUsingPATCH
     */
    createPatchTaskRequest?: CreatePatchTaskRequest
}

export interface TaskApiRetrieveTaskModelUsingGET1Request {
}

export interface TaskApiUpdateTaskCustomFieldUsingPATCHRequest {
    /**
     * custom_field_id
     * Defaults to: undefined
     * @type string
     * @memberof TaskApiupdateTaskCustomFieldUsingPATCH
     */
    customFieldId: string
    /**
     * request
     * @type UpdateCustomFieldMetaDataRequest
     * @memberof TaskApiupdateTaskCustomFieldUsingPATCH
     */
    updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TaskApiupdateTaskCustomFieldUsingPATCH
     */
    updateMask?: Array<string>
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(param: TaskApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>> {
        return this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param param the request object
     */
    public createTaskCustomFieldUsingPOST1(param: TaskApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<CreateCustomFieldResponse> {
        return this.api.createTaskCustomFieldUsingPOST1(param.createCustomFieldRequest,  options).toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTaskUsingPOST1WithHttpInfo(param: TaskApiCreateTaskUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.createTaskUsingPOST1WithHttpInfo(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param param the request object
     */
    public createTaskUsingPOST1(param: TaskApiCreateTaskUsingPOST1Request = {}, options?: Configuration): Promise<Task> {
        return this.api.createTaskUsingPOST1(param.createTaskRequest,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(param: TaskApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param param the request object
     */
    public deleteTaskCustomFieldUsingDELETE(param: TaskApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<void> {
        return this.api.deleteTaskCustomFieldUsingDELETE(param.customFieldId,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTaskUsingDELETE1WithHttpInfo(param: TaskApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTaskUsingDELETE1WithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param param the request object
     */
    public deleteTaskUsingDELETE1(param: TaskApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<void> {
        return this.api.deleteTaskUsingDELETE1(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTaskUsingGET1WithHttpInfo(param: TaskApiGetTaskUsingGET1Request, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.getTaskUsingGET1WithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param param the request object
     */
    public getTaskUsingGET1(param: TaskApiGetTaskUsingGET1Request, options?: Configuration): Promise<Task> {
        return this.api.getTaskUsingGET1(param.taskId,  options).toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasksUsingGET1WithHttpInfo(param: TaskApiListTasksUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListTasksResponse>> {
        return this.api.listTasksUsingGET1WithHttpInfo(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime,  options).toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param param the request object
     */
    public listTasksUsingGET1(param: TaskApiListTasksUsingGET1Request = {}, options?: Configuration): Promise<ListTasksResponse> {
        return this.api.listTasksUsingGET1(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime,  options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public patchTaskUsingPATCHWithHttpInfo(param: TaskApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>> {
        return this.api.patchTaskUsingPATCHWithHttpInfo(param.taskId, param.updateMask, param.createPatchTaskRequest,  options).toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param param the request object
     */
    public patchTaskUsingPATCH(param: TaskApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<UpdateTaskResponse> {
        return this.api.patchTaskUsingPATCH(param.taskId, param.updateMask, param.createPatchTaskRequest,  options).toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(param: TaskApiRetrieveTaskModelUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        return this.api.retrieveTaskModelUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     * @param param the request object
     */
    public retrieveTaskModelUsingGET1(param: TaskApiRetrieveTaskModelUsingGET1Request = {}, options?: Configuration): Promise<ObjectModel> {
        return this.api.retrieveTaskModelUsingGET1( options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(param: TaskApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        return this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param param the request object
     */
    public updateTaskCustomFieldUsingPATCH(param: TaskApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData> {
        return this.api.updateTaskCustomFieldUsingPATCH(param.customFieldId, param.updateCustomFieldMetaDataRequest, param.updateMask,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiCreateUserUsingPOST1Request {
    /**
     * user
     * @type CreateUserRequestV2
     * @memberof UsersApicreateUserUsingPOST1
     */
    createUserRequestV2?: CreateUserRequestV2
}

export interface UsersApiGetUserByIdUsingGETRequest {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetUserByIdUsingGET
     */
    userId: string
}

export interface UsersApiGetUserInfoUsingGET1Request {
}

export interface UsersApiGetUserSignatureUsingGET1Request {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetUserSignatureUsingGET1
     */
    userId: string
}

export interface UsersApiListUsersUsingGET1Request {
    /**
     * Search filter to apply to results
     * Defaults to: undefined
     * @type string
     * @memberof UsersApilistUsersUsingGET1
     */
    filter?: string
    /**
     * Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     * Defaults to: undefined
     * @type string
     * @memberof UsersApilistUsersUsingGET1
     */
    orderBy?: string
}

export interface UsersApiPatchUserUsingPATCHRequest {
    /**
     * user_id
     * Defaults to: undefined
     * @type string
     * @memberof UsersApipatchUserUsingPATCH
     */
    userId: string
    /**
     * An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof UsersApipatchUserUsingPATCH
     */
    updateMask?: Array<string>
    /**
     * user
     * @type PatchUserRequestV2
     * @memberof UsersApipatchUserUsingPATCH
     */
    patchUserRequestV2?: PatchUserRequestV2
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param param the request object
     */
    public createUserUsingPOST1WithHttpInfo(param: UsersApiCreateUserUsingPOST1Request = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.createUserUsingPOST1WithHttpInfo(param.createUserRequestV2,  options).toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param param the request object
     */
    public createUserUsingPOST1(param: UsersApiCreateUserUsingPOST1Request = {}, options?: Configuration): Promise<User> {
        return this.api.createUserUsingPOST1(param.createUserRequestV2,  options).toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserByIdUsingGETWithHttpInfo(param: UsersApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.getUserByIdUsingGETWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param param the request object
     */
    public getUserByIdUsingGET(param: UsersApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<User> {
        return this.api.getUserByIdUsingGET(param.userId,  options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfoUsingGET1WithHttpInfo(param: UsersApiGetUserInfoUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>> {
        return this.api.getUserInfoUsingGET1WithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     * @param param the request object
     */
    public getUserInfoUsingGET1(param: UsersApiGetUserInfoUsingGET1Request = {}, options?: Configuration): Promise<GetUserInfoResponse> {
        return this.api.getUserInfoUsingGET1( options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignatureUsingGET1WithHttpInfo(param: UsersApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getUserSignatureUsingGET1WithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param param the request object
     */
    public getUserSignatureUsingGET1(param: UsersApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<string> {
        return this.api.getUserSignatureUsingGET1(param.userId,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listUsersUsingGET1WithHttpInfo(param: UsersApiListUsersUsingGET1Request = {}, options?: Configuration): Promise<HttpInfo<ListUserResponse>> {
        return this.api.listUsersUsingGET1WithHttpInfo(param.filter, param.orderBy,  options).toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param param the request object
     */
    public listUsersUsingGET1(param: UsersApiListUsersUsingGET1Request = {}, options?: Configuration): Promise<ListUserResponse> {
        return this.api.listUsersUsingGET1(param.filter, param.orderBy,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public patchUserUsingPATCHWithHttpInfo(param: UsersApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.patchUserUsingPATCHWithHttpInfo(param.userId, param.updateMask, param.patchUserRequestV2,  options).toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param param the request object
     */
    public patchUserUsingPATCH(param: UsersApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<User> {
        return this.api.patchUserUsingPATCH(param.userId, param.updateMask, param.patchUserRequestV2,  options).toPromise();
    }

}
