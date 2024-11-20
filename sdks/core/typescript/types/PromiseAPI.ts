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
import { CheckListItem } from '../models/CheckListItem';
import { CheckListItemDetails } from '../models/CheckListItemDetails';
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
import { CreateFunnelIntegrationRequest } from '../models/CreateFunnelIntegrationRequest';
import { CreateFunnelIntegrationTriggerEvents } from '../models/CreateFunnelIntegrationTriggerEvents';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { CreateNoteRequest } from '../models/CreateNoteRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageCheckListItem } from '../models/CreateOpportunityStageCheckListItem';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CreateOrPatchAffiliateLinkRequest } from '../models/CreateOrPatchAffiliateLinkRequest';
import { CreatePatchContactRequest } from '../models/CreatePatchContactRequest';
import { CreatePatchTaskRequest } from '../models/CreatePatchTaskRequest';
import { CreatePaymentMethodConfigRequest } from '../models/CreatePaymentMethodConfigRequest';
import { CreatePaymentRequest } from '../models/CreatePaymentRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateSubscriptionV2 } from '../models/CreateSubscriptionV2';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CreateUpdateTagCategoryRequest } from '../models/CreateUpdateTagCategoryRequest';
import { CreateUpdateTagRequest } from '../models/CreateUpdateTagRequest';
import { CreateUserRequestV2 } from '../models/CreateUserRequestV2';
import { Criteria } from '../models/Criteria';
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
import { EmailAddress } from '../models/EmailAddress';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailsSentList } from '../models/EmailsSentList';
import { FaxNumber } from '../models/FaxNumber';
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
import { Item } from '../models/Item';
import { LandingPage } from '../models/LandingPage';
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
import { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import { ListContactLinkTypesResponse } from '../models/ListContactLinkTypesResponse';
import { ListContactLinksResponse } from '../models/ListContactLinksResponse';
import { ListContactsResponse } from '../models/ListContactsResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListNotesResponse } from '../models/ListNotesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOrders } from '../models/ListOrders';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
import { ListRestMerchantAccountResponse } from '../models/ListRestMerchantAccountResponse';
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { ModelError } from '../models/ModelError';
import { Note } from '../models/Note';
import { ObjectModel } from '../models/ObjectModel';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { OrderItemTax } from '../models/OrderItemTax';
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
import { RestProduct } from '../models/RestProduct';
import { RestProductOption } from '../models/RestProductOption';
import { RestProductOptionValue } from '../models/RestProductOptionValue';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { RestV2PatchOrderRequest } from '../models/RestV2PatchOrderRequest';
import { RestV2Subscription } from '../models/RestV2Subscription';
import { RestV2User } from '../models/RestV2User';
import { SaveAutomationCategoryRequest } from '../models/SaveAutomationCategoryRequest';
import { Sequence } from '../models/Sequence';
import { SequencePath } from '../models/SequencePath';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { ShippingInformation } from '../models/ShippingInformation';
import { ShippingMethod } from '../models/ShippingMethod';
import { SocialAccount } from '../models/SocialAccount';
import { StackTraceElement } from '../models/StackTraceElement';
import { StageDetails } from '../models/StageDetails';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { Tag } from '../models/Tag';
import { TaggedCompany } from '../models/TaggedCompany';
import { Task } from '../models/Task';
import { Throwable } from '../models/Throwable';
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { User } from '../models/User';
import { ObservableAffiliateApi } from './ObservableAPI';

import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";
export class PromiseAffiliateApi {
    private api: ObservableAffiliateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AffiliateApiRequestFactory,
        responseProcessor?: AffiliateApiResponseProcessor
    ) {
        this.api = new ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Promise<void> {
        const result = this.api.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [insertAffiliate] Affiliate request to insert
     */
    public addAffiliateUsingPOSTWithHttpInfo(insertAffiliate?: CreateAffiliateRequest, _options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        const result = this.api.addAffiliateUsingPOSTWithHttpInfo(insertAffiliate, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [insertAffiliate] Affiliate request to insert
     */
    public addAffiliateUsingPOST(insertAffiliate?: CreateAffiliateRequest, _options?: Configuration): Promise<RestAffiliate> {
        const result = this.api.addAffiliateUsingPOST(insertAffiliate, _options);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [insertCommissionProgram] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram?: CreateCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const result = this.api.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [insertCommissionProgram] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(insertCommissionProgram?: CreateCommissionProgramRequest, _options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        const result = this.api.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [productCommissionProgram] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, productCommissionProgram?: CreateProductCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        const result = this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [productCommissionProgram] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, productCommissionProgram?: CreateProductCommissionProgramRequest, _options?: Configuration): Promise<ProductCommissionProgram> {
        const result = this.api.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [subscriptionCommissionProgram] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const result = this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [subscriptionCommissionProgram] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<SubscriptionCommissionProgram> {
        const result = this.api.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param customField customField
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param customField customField
     */
    public createAffiliateCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createAffiliateCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const result = this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        const result = this.api.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param request request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.createRedirectLinkUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param request request
     */
    public createRedirectLinkUsingPOST(request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.createRedirectLinkUsingPOST(request, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAffiliateUsingDELETEWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAffiliateUsingDELETE(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRedirectLinkUsingDELETE(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>> {
        const result = this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: Configuration): Promise<AffiliateCommissionEarned> {
        const result = this.api.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>> {
        const result = this.api.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateCommissionResponse> {
        const result = this.api.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.getAffiliateCustomFieldsUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1WithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        const result = this.api.getAffiliateUsingGET1WithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1(id: string, _options?: Configuration): Promise<RestAffiliate> {
        const result = this.api.getAffiliateUsingGET1(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>> {
        const result = this.api.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: Configuration): Promise<AffiliateProgramV2> {
        const result = this.api.getCommissionProgramUsingGET(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.getRedirectLinkUsingGET(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const result = this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse> {
        const result = this.api.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        const result = this.api.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateLinksResponse> {
        const result = this.api.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        const result = this.api.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateSummariesResponse> {
        const result = this.api.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param patchCommissionProgramRequest patchCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, patchCommissionProgramRequest: PatchCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const result = this.api.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param patchCommissionProgramRequest patchCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public patchCommissionProgramUsingPATCH(commissionProgramId: string, patchCommissionProgramRequest: PatchCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        const result = this.api.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const result = this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        const result = this.api.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        const result = this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Promise<ProductCommissionProgram> {
        const result = this.api.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const result = this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<SubscriptionCommissionProgram> {
        const result = this.api.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param removeFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, removeFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param removeFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, removeFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [patchAffiliate] Affiliate request to patch
     */
    public updateAffiliateUsingPATCHWithHttpInfo(id: string, patchAffiliate?: PatchAffiliateRequest, _options?: Configuration): Promise<HttpInfo<RestAffiliate>> {
        const result = this.api.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate, _options);
        return result.toPromise();
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [patchAffiliate] Affiliate request to patch
     */
    public updateAffiliateUsingPATCH(id: string, patchAffiliate?: PatchAffiliateRequest, _options?: Configuration): Promise<RestAffiliate> {
        const result = this.api.updateAffiliateUsingPATCH(id, patchAffiliate, _options);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param request request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param request request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        return result.toPromise();
    }


}



import { ObservableAutomationApi } from './ObservableAPI';

import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";
export class PromiseAutomationApi {
    private api: ObservableAutomationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationApiRequestFactory,
        responseProcessor?: AutomationApiResponseProcessor
    ) {
        this.api = new ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Promise<HttpInfo<AddToAutomationSequenceResponse>> {
        const result = this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Promise<AddToAutomationSequenceResponse> {
        const result = this.api.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETEWithHttpInfo(automationIds: Array<number>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomationUsingDELETE(automationIds, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGETWithHttpInfo(automationId: string, _options?: Configuration): Promise<HttpInfo<Automation>> {
        const result = this.api.getAutomationUsingGETWithHttpInfo(automationId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGET(automationId: string, _options?: Configuration): Promise<Automation> {
        const result = this.api.getAutomationUsingGET(automationId, _options);
        return result.toPromise();
    }

    /**
     * Lists all automations ids based on the request parameters.
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAllAutomationIdsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<HttpInfo<ListAutomationIdsResponse>> {
        const result = this.api.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Lists all automations ids based on the request parameters.
     * List Automations Ids
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<ListAutomationIdsResponse> {
        const result = this.api.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Lists all automations based on the request parameters.
     * List Automations
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAutomationsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<HttpInfo<ListAutomationResponse>> {
        const result = this.api.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Lists all automations based on the request parameters.
     * List Automations
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the automation name.   - &#x60;filter&#x3D;name%3D%3DSpring Automation&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<ListAutomationResponse> {
        const result = this.api.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _options);
        return result.toPromise();
    }


}



import { ObservableAutomationCategoryApi } from './ObservableAPI';

import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";
export class PromiseAutomationCategoryApi {
    private api: ObservableAutomationCategoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationCategoryApiRequestFactory,
        responseProcessor?: AutomationCategoryApiResponseProcessor
    ) {
        this.api = new ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        const result = this.api.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Promise<AutomationCategory> {
        const result = this.api.createCategoryUsingPOST(createAutomationCategoryRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(ids: Array<number>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options);
        return result.toPromise();
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETE(ids: Array<number>, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCategoriesUsingDELETE(ids, _options);
        return result.toPromise();
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     */
    public listCategoriesUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListAutomationCategoryResponse>> {
        const result = this.api.listCategoriesUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     */
    public listCategoriesUsingGET(_options?: Configuration): Promise<ListAutomationCategoryResponse> {
        const result = this.api.listCategoriesUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Promise<HttpInfo<AutomationCategory>> {
        const result = this.api.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Promise<AutomationCategory> {
        const result = this.api.saveCategoryUsingPUT(saveAutomationCategoryRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBusinessProfileApi } from './ObservableAPI';

import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";
export class PromiseBusinessProfileApi {
    private api: ObservableBusinessProfileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessProfileApiRequestFactory,
        responseProcessor?: BusinessProfileApiResponseProcessor
    ) {
        this.api = new ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const result = this.api.getBusinessProfileUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGET(_options?: Configuration): Promise<GetBusinessProfileResponse> {
        const result = this.api.getBusinessProfileUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [businessProfile] businessProfile
     */
    public patchBusinessProfileUsingPATCHWithHttpInfo(updateMask?: Array<string>, businessProfile?: PatchBusinessProfileRequest, _options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>> {
        const result = this.api.patchBusinessProfileUsingPATCHWithHttpInfo(updateMask, businessProfile, _options);
        return result.toPromise();
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [businessProfile] businessProfile
     */
    public patchBusinessProfileUsingPATCH(updateMask?: Array<string>, businessProfile?: PatchBusinessProfileRequest, _options?: Configuration): Promise<GetBusinessProfileResponse> {
        const result = this.api.patchBusinessProfileUsingPATCH(updateMask, businessProfile, _options);
        return result.toPromise();
    }


}



import { ObservableCampaignApi } from './ObservableAPI';

import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";
export class PromiseCampaignApi {
    private api: ObservableCampaignApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignApiRequestFactory,
        responseProcessor?: CampaignApiResponseProcessor
    ) {
        this.api = new ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Promise<HttpInfo<AddContactsToSequenceResponse>> {
        const result = this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Promise<AddContactsToSequenceResponse> {
        const result = this.api.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1WithHttpInfo(campaignId: string, _options?: Configuration): Promise<HttpInfo<Campaign>> {
        const result = this.api.getCampaignUsingGET1WithHttpInfo(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1(campaignId: string, _options?: Configuration): Promise<Campaign> {
        const result = this.api.getCampaignUsingGET1(campaignId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name.   - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listCampaignsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<HttpInfo<ListCampaignsResponse>> {
        const result = this.api.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all campaigns for the authenticated user
     * List Campaigns
     * @param [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched  text, in the encoded form &#x60;%3D%3D&#x60;. The search will look for the text anywhere in the campaign name.   - &#x60;filter&#x3D;name%3D%3DSpring Campaign&#x60;  - &#x60;filter&#x3D;name%3D%3DTag New Contacts&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [stats]
     */
    public listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Promise<ListCampaignsResponse> {
        const result = this.api.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Promise<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const result = this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Promise<RemoveContactsFromSequenceResponse> {
        const result = this.api.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCategoryDiscountApi } from './ObservableAPI';

import { CategoryDiscountApiRequestFactory, CategoryDiscountApiResponseProcessor} from "../apis/CategoryDiscountApi";
export class PromiseCategoryDiscountApi {
    private api: ObservableCategoryDiscountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryDiscountApiRequestFactory,
        responseProcessor?: CategoryDiscountApiResponseProcessor
    ) {
        this.api = new ObservableCategoryDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE(discountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDiscountUsingDELETE(discountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        const result = this.api.getDiscountUsingGETWithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET(discountId: string, _options?: Configuration): Promise<CategoryDiscount> {
        const result = this.api.getDiscountUsingGET(discountId, _options);
        return result.toPromise();
    }


}



import { ObservableCompanyApi } from './ObservableAPI';

import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";
export class PromiseCompanyApi {
    private api: ObservableCompanyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyApiRequestFactory,
        responseProcessor?: CompanyApiResponseProcessor
    ) {
        this.api = new ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [company] company
     */
    public createCompanyUsingPOST1WithHttpInfo(company?: CreateCompanyRequest, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.createCompanyUsingPOST1WithHttpInfo(company, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [company] company
     */
    public createCompanyUsingPOST1(company?: CreateCompanyRequest, _options?: Configuration): Promise<Company> {
        const result = this.api.createCompanyUsingPOST1(company, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETEWithHttpInfo(companyId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETE(companyId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCompanyUsingDELETE(companyId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1WithHttpInfo(companyId: string, fields?: Array<string>, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.getCompanyUsingGET1WithHttpInfo(companyId, fields, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: Configuration): Promise<Company> {
        const result = this.api.getCompanyUsingGET1(companyId, fields, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListCompaniesResponse>> {
        const result = this.api.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Companies
     * List Companies
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Fields such as &#x60;notes&#x60;, &#x60;fax_number&#x60; and &#x60;custom_fields&#x60; aren\&#39;t included, by default.)
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListCompaniesResponse> {
        const result = this.api.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [company] company
     */
    public patchCompanyUsingPATCHWithHttpInfo(companyId: string, updateMask?: Array<string>, company?: PatchCompanyRequest, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.patchCompanyUsingPATCHWithHttpInfo(companyId, updateMask, company, _options);
        return result.toPromise();
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [company] company
     */
    public patchCompanyUsingPATCH(companyId: string, updateMask?: Array<string>, company?: PatchCompanyRequest, _options?: Configuration): Promise<Company> {
        const result = this.api.patchCompanyUsingPATCH(companyId, updateMask, company, _options);
        return result.toPromise();
    }


}



import { ObservableContactApi } from './ObservableAPI';

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class PromiseContactApi {
    private api: ObservableContactApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param request request
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(request: CreateContactLinkTypeRequest, _options?: Configuration): Promise<HttpInfo<ContactLinkType>> {
        const result = this.api.createContactLinkTypeUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param request request
     */
    public createContactLinkTypeUsingPOST(request: CreateContactLinkTypeRequest, _options?: Configuration): Promise<ContactLinkType> {
        const result = this.api.createContactLinkTypeUsingPOST(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [contact] contact
     */
    public createContactUsingPOST1WithHttpInfo(contact?: CreatePatchContactRequest, _options?: Configuration): Promise<HttpInfo<Contact>> {
        const result = this.api.createContactUsingPOST1WithHttpInfo(contact, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [contact] contact
     */
    public createContactUsingPOST1(contact?: CreatePatchContactRequest, _options?: Configuration): Promise<Contact> {
        const result = this.api.createContactUsingPOST1(contact, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1WithHttpInfo(contactId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteContactUsingDELETE1WithHttpInfo(contactId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1(contactId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteContactUsingDELETE1(contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     */
    public getContactUsingGET1WithHttpInfo(contactId: string, fields?: Array<string>, _options?: Configuration): Promise<HttpInfo<Contact>> {
        const result = this.api.getContactUsingGET1WithHttpInfo(contactId, fields, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     */
    public getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: Configuration): Promise<Contact> {
        const result = this.api.getContactUsingGET1(contactId, fields, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(searchParam: string, _options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>> {
        const result = this.api.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Promise<ListBasicContactResponse> {
        const result = this.api.getContactsBySearchTermUsingGET(searchParam, _options);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<HttpInfo<ContactLink>> {
        const result = this.api.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options);
        return result.toPromise();
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<ContactLink> {
        const result = this.api.linkContactsUsingPOST(linkContactsRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGETWithHttpInfo(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListContactLinkTypesResponse>> {
        const result = this.api.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListContactLinkTypesResponse> {
        const result = this.api.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGETWithHttpInfo(contactId: string, _options?: Configuration): Promise<HttpInfo<ListContactLinksResponse>> {
        const result = this.api.listContactLinksUsingGETWithHttpInfo(contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGET(contactId: string, _options?: Configuration): Promise<ListContactLinksResponse> {
        const result = this.api.listContactLinksUsingGET(contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * @param [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123;family_name&#x3D;Smith&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListContactsResponse>> {
        const result = this.api.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * @param [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123;family_name&#x3D;Smith&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListContactsResponse> {
        const result = this.api.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGETWithHttpInfo(contactId: number, _options?: Configuration): Promise<HttpInfo<PaymentMethodList>> {
        const result = this.api.listPaymentMethodsUsingGETWithHttpInfo(contactId, _options);
        return result.toPromise();
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGET(contactId: number, _options?: Configuration): Promise<PaymentMethodList> {
        const result = this.api.listPaymentMethodsUsingGET(contactId, _options);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [contact] contact
     */
    public patchContactUsingPATCHWithHttpInfo(contactId: string, updateMask?: Array<string>, contact?: CreatePatchContactRequest, _options?: Configuration): Promise<HttpInfo<Contact>> {
        const result = this.api.patchContactUsingPATCHWithHttpInfo(contactId, updateMask, contact, _options);
        return result.toPromise();
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [contact] contact
     */
    public patchContactUsingPATCH(contactId: string, updateMask?: Array<string>, contact?: CreatePatchContactRequest, _options?: Configuration): Promise<Contact> {
        const result = this.api.patchContactUsingPATCH(contactId, updateMask, contact, _options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveContactModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveContactModelUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.unlinkContactsUsingPOST(linkContactsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableEmailApi } from './ObservableAPI';

import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";
export class PromiseEmailApi {
    private api: ObservableEmailApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailApiRequestFactory,
        responseProcessor?: EmailApiResponseProcessor
    ) {
        this.api = new ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param emailWithContent emailWithContent
     */
    public createEmailUsingPOST1WithHttpInfo(emailWithContent: CreateEmailSentRequest, _options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        const result = this.api.createEmailUsingPOST1WithHttpInfo(emailWithContent, _options);
        return result.toPromise();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param emailWithContent emailWithContent
     */
    public createEmailUsingPOST1(emailWithContent: CreateEmailSentRequest, _options?: Configuration): Promise<EmailSentWithContent> {
        const result = this.api.createEmailUsingPOST1(emailWithContent, _options);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Promise<HttpInfo<EmailsSentList>> {
        const result = this.api.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Promise<EmailsSentList> {
        const result = this.api.createEmailsUsingPOST1(createEmailsSentRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1WithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEmailUsingDELETE1WithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailUsingDELETE1(id, _options);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Promise<HttpInfo<DeleteEmailsResponse>> {
        const result = this.api.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Promise<DeleteEmailsResponse> {
        const result = this.api.deleteEmailsUsingPOST1(deleteEmailsRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1WithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<EmailSentWithContent>> {
        const result = this.api.getEmailUsingGET1WithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1(id: string, _options?: Configuration): Promise<EmailSentWithContent> {
        const result = this.api.getEmailUsingGET1(id, _options);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1WithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options);
        return result.toPromise();
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: Configuration): Promise<void> {
        const result = this.api.sendEmailUsingPOST1(emailSendRequest, _options);
        return result.toPromise();
    }


}



import { ObservableEmailAddressApi } from './ObservableAPI';

import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";
export class PromiseEmailAddressApi {
    private api: ObservableEmailAddressApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressApiRequestFactory,
        responseProcessor?: EmailAddressApiResponseProcessor
    ) {
        this.api = new ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGETWithHttpInfo(email: string, _options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        const result = this.api.getEmailAddressStatusUsingGETWithHttpInfo(email, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGET(email: string, _options?: Configuration): Promise<RestEmailAddress> {
        const result = this.api.getEmailAddressStatusUsingGET(email, _options);
        return result.toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUTWithHttpInfo(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Promise<HttpInfo<RestEmailAddress>> {
        const result = this.api.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress, _options);
        return result.toPromise();
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUT(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Promise<RestEmailAddress> {
        const result = this.api.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress, _options);
        return result.toPromise();
    }


}



import { ObservableFreeTrialDiscountApi } from './ObservableAPI';

import { FreeTrialDiscountApiRequestFactory, FreeTrialDiscountApiResponseProcessor} from "../apis/FreeTrialDiscountApi";
export class PromiseFreeTrialDiscountApi {
    private api: ObservableFreeTrialDiscountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FreeTrialDiscountApiRequestFactory,
        responseProcessor?: FreeTrialDiscountApiResponseProcessor
    ) {
        this.api = new ObservableFreeTrialDiscountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDiscountUsingDELETE1(discountId, _options);
        return result.toPromise();
    }


}



import { ObservableFunnelIntegrationApi } from './ObservableAPI';

import { FunnelIntegrationApiRequestFactory, FunnelIntegrationApiResponseProcessor} from "../apis/FunnelIntegrationApi";
export class PromiseFunnelIntegrationApi {
    private api: ObservableFunnelIntegrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunnelIntegrationApiRequestFactory,
        responseProcessor?: FunnelIntegrationApiResponseProcessor
    ) {
        this.api = new ObservableFunnelIntegrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        const result = this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>> {
        const result = this.api.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    }


}



import { ObservableLandingPagesApi } from './ObservableAPI';

import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";
export class PromiseLandingPagesApi {
    private api: ObservableLandingPagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LandingPagesApiRequestFactory,
        responseProcessor?: LandingPagesApiResponseProcessor
    ) {
        this.api = new ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>> {
        const result = this.api.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListLandingPagesResponse> {
        const result = this.api.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableLeadSourcesApi } from './ObservableAPI';

import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";
export class PromiseLeadSourcesApi {
    private api: ObservableLeadSourcesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourcesApiRequestFactory,
        responseProcessor?: LeadSourcesApiResponseProcessor
    ) {
        this.api = new ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [leadsource] leadsource
     */
    public createLeadSourceUsingPOSTWithHttpInfo(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<HttpInfo<LeadSource>> {
        const result = this.api.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [leadsource] leadsource
     */
    public createLeadSourceUsingPOST(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<LeadSource> {
        const result = this.api.createLeadSourceUsingPOST(leadsource, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>> {
        const result = this.api.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListLeadSourcesResponse> {
        const result = this.api.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableLocaleApi } from './ObservableAPI';

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class PromiseLocaleApi {
    private api: ObservableLocaleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.api = new ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListCountriesResponse>> {
        const result = this.api.listCountriesUsingGET2WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2(_options?: Configuration): Promise<ListCountriesResponse> {
        const result = this.api.listCountriesUsingGET2(_options);
        return result.toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGETWithHttpInfo(countryCode: string, _options?: Configuration): Promise<HttpInfo<ListProvincesResponse>> {
        const result = this.api.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options);
        return result.toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Promise<ListProvincesResponse> {
        const result = this.api.listProvincesForCountryUsingGET(countryCode, _options);
        return result.toPromise();
    }


}



import { ObservableMerchantApi } from './ObservableAPI';

import { MerchantApiRequestFactory, MerchantApiResponseProcessor} from "../apis/MerchantApi";
export class PromiseMerchantApi {
    private api: ObservableMerchantApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MerchantApiRequestFactory,
        responseProcessor?: MerchantApiResponseProcessor
    ) {
        this.api = new ObservableMerchantApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>> {
        const result = this.api.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListRestMerchantResponse> {
        const result = this.api.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableNoteApi } from './ObservableAPI';

import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";
export class PromiseNoteApi {
    private api: ObservableNoteApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NoteApiRequestFactory,
        responseProcessor?: NoteApiResponseProcessor
    ) {
        this.api = new ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param customField customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param customField customField
     */
    public createNoteCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createNoteCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param request request
     */
    public createNoteUsingPOST1WithHttpInfo(contactId: string, request: CreateNoteRequest, _options?: Configuration): Promise<HttpInfo<Note>> {
        const result = this.api.createNoteUsingPOST1WithHttpInfo(contactId, request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param request request
     */
    public createNoteUsingPOST1(contactId: string, request: CreateNoteRequest, _options?: Configuration): Promise<Note> {
        const result = this.api.createNoteUsingPOST1(contactId, request, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteNoteUsingDELETE1(contactId, noteId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Promise<HttpInfo<GetNoteResponse>> {
        const result = this.api.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1(contactId: string, noteId: string, _options?: Configuration): Promise<GetNoteResponse> {
        const result = this.api.getNoteUsingGET1(contactId, noteId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotesUsingGET1WithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListNotesResponse>> {
        const result = this.api.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Notes
     * List Notes
     * @param contactId contact_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListNotesResponse> {
        const result = this.api.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveNoteModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveNoteModelUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCHWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<UpdateNoteResponse>> {
        const result = this.api.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Promise<UpdateNoteResponse> {
        const result = this.api.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservableOpportunityApi } from './ObservableAPI';

import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";
export class PromiseOpportunityApi {
    private api: ObservableOpportunityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunityApiRequestFactory,
        responseProcessor?: OpportunityApiResponseProcessor
    ) {
        this.api = new ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param customField customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param customField customField
     */
    public createOpportunityCustomFieldsUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createOpportunityCustomFieldsUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [opportunityStage] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        const result = this.api.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [opportunityStage] opportunity
     */
    public createOpportunityStageUsingPOST(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<RestOpportunityStage> {
        const result = this.api.createOpportunityStageUsingPOST(opportunityStage, _options);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [opportunity] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [opportunity] opportunity
     */
    public createOpportunityUsingPOST1(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.createOpportunityUsingPOST1(opportunity, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOpportunityStageUsingDELETE(stageId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOpportunityUsingDELETE(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        const result = this.api.getOpportunityStageUsingGETWithHttpInfo(stageId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Promise<RestOpportunityStage> {
        const result = this.api.getOpportunityStageUsingGET(stageId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.getOpportunityUsingGET1(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>> {
        const result = this.api.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOpportunitiesResponse> {
        const result = this.api.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        const result = this.api.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOpportunityStagesResponse> {
        const result = this.api.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservableOrdersApi } from './ObservableAPI';

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class PromiseOrdersApi {
    private api: ObservableOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param customField customField
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param customField customField
     */
    public createOrderCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createOrderCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<HttpInfo<RestV2OrderItem>> {
        const result = this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<RestV2OrderItem> {
        const result = this.api.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param createOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1WithHttpInfo(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param createOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.createOrderUsingPOST1(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param orderId order_id
     * @param createPaymentRequest createPaymentRequest
     */
    public createPaymentOnOrderUsingPOST1WithHttpInfo(orderId: string, createPaymentRequest: CreatePaymentRequest, _options?: Configuration): Promise<HttpInfo<PaymentResult>> {
        const result = this.api.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param orderId order_id
     * @param createPaymentRequest createPaymentRequest
     */
    public createPaymentOnOrderUsingPOST1(orderId: string, createPaymentRequest: CreatePaymentRequest, _options?: Configuration): Promise<PaymentResult> {
        const result = this.api.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest, _options);
        return result.toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1WithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrderUsingDELETE1(orderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1WithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.getOrderUsingGET1WithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1(orderId: string, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.getOrderUsingGET1(orderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOrders>> {
        const result = this.api.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOrders> {
        const result = this.api.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [order] order
     */
    public patchOrderUsingPATCHWithHttpInfo(orderId: string, updateMask?: Array<string>, order?: RestV2PatchOrderRequest, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options);
        return result.toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [order] order
     */
    public patchOrderUsingPATCH(orderId: string, updateMask?: Array<string>, order?: RestV2PatchOrderRequest, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveOrderCustomFieldModelUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentMethodConfigApi } from './ObservableAPI';

import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor} from "../apis/PaymentMethodConfigApi";
export class PromisePaymentMethodConfigApi {
    private api: ObservablePaymentMethodConfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodConfigApiRequestFactory,
        responseProcessor?: PaymentMethodConfigApiResponseProcessor
    ) {
        this.api = new ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param request request
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(request: CreatePaymentMethodConfigRequest, _options?: Configuration): Promise<HttpInfo<PaymentMethodConfig>> {
        const result = this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param request request
     */
    public createPaymentMethodConfigUsingPOST(request: CreatePaymentMethodConfigRequest, _options?: Configuration): Promise<PaymentMethodConfig> {
        const result = this.api.createPaymentMethodConfigUsingPOST(request, _options);
        return result.toPromise();
    }


}



import { ObservablePreReleaseApi } from './ObservableAPI';

import { PreReleaseApiRequestFactory, PreReleaseApiResponseProcessor} from "../apis/PreReleaseApi";
export class PromisePreReleaseApi {
    private api: ObservablePreReleaseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PreReleaseApiRequestFactory,
        responseProcessor?: PreReleaseApiResponseProcessor
    ) {
        this.api = new ObservablePreReleaseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Promise<void> {
        const result = this.api.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [insertCommissionProgram] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram?: CreateCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>> {
        const result = this.api.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [insertCommissionProgram] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(insertCommissionProgram?: CreateCommissionProgramRequest, _options?: Configuration): Promise<AffiliateCommissionProgramResponse> {
        const result = this.api.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [productCommissionProgram] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, productCommissionProgram?: CreateProductCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        const result = this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [productCommissionProgram] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, productCommissionProgram?: CreateProductCommissionProgramRequest, _options?: Configuration): Promise<ProductCommissionProgram> {
        const result = this.api.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [subscriptionCommissionProgram] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const result = this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [subscriptionCommissionProgram] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<SubscriptionCommissionProgram> {
        const result = this.api.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param customField customField
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param customField customField
     */
    public createAffiliateCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createAffiliateCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const result = this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        const result = this.api.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        const result = this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>> {
        const result = this.api.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [leadsource] leadsource
     */
    public createLeadSourceUsingPOSTWithHttpInfo(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<HttpInfo<LeadSource>> {
        const result = this.api.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [leadsource] leadsource
     */
    public createLeadSourceUsingPOST(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<LeadSource> {
        const result = this.api.createLeadSourceUsingPOST(leadsource, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param customField customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param customField customField
     */
    public createNoteCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createNoteCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param customField customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param customField customField
     */
    public createOpportunityCustomFieldsUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createOpportunityCustomFieldsUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [opportunityStage] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        const result = this.api.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [opportunityStage] opportunity
     */
    public createOpportunityStageUsingPOST(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<RestOpportunityStage> {
        const result = this.api.createOpportunityStageUsingPOST(opportunityStage, _options);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [opportunity] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options);
        return result.toPromise();
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [opportunity] opportunity
     */
    public createOpportunityUsingPOST1(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.createOpportunityUsingPOST1(opportunity, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param customField customField
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param customField customField
     */
    public createOrderCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createOrderCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<HttpInfo<RestV2OrderItem>> {
        const result = this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<RestV2OrderItem> {
        const result = this.api.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param createOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1WithHttpInfo(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param createOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.createOrderUsingPOST1(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param request request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.createRedirectLinkUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param request request
     */
    public createRedirectLinkUsingPOST(request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.createRedirectLinkUsingPOST(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param request request
     */
    public createReferralUsingPOSTWithHttpInfo(request: CreateReferralRequest, _options?: Configuration): Promise<HttpInfo<Referral>> {
        const result = this.api.createReferralUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param request request
     */
    public createReferralUsingPOST(request: CreateReferralRequest, _options?: Configuration): Promise<Referral> {
        const result = this.api.createReferralUsingPOST(request, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param customField customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param customField customField
     */
    public createSubscriptionCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createSubscriptionCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param customField customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const result = this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param customField customField
     */
    public createTaskCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CreateCustomFieldResponse> {
        const result = this.api.createTaskCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [task] task
     */
    public createTaskUsingPOST1WithHttpInfo(task?: CreateTaskRequest, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.createTaskUsingPOST1WithHttpInfo(task, _options);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [task] task
     */
    public createTaskUsingPOST1(task?: CreateTaskRequest, _options?: Configuration): Promise<Task> {
        const result = this.api.createTaskUsingPOST1(task, _options);
        return result.toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [user] user
     */
    public createUserUsingPOST1WithHttpInfo(user?: CreateUserRequestV2, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.createUserUsingPOST1WithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [user] user
     */
    public createUserUsingPOST1(user?: CreateUserRequestV2, _options?: Configuration): Promise<User> {
        const result = this.api.createUserUsingPOST1(user, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAffiliateUsingDELETEWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAffiliateUsingDELETE(id, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE(discountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDiscountUsingDELETE(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDiscountUsingDELETE1(discountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOpportunityStageUsingDELETE(stageId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOpportunityUsingDELETE(opportunityId, _options);
        return result.toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1WithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrderUsingDELETE1(orderId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteRedirectLinkUsingDELETE(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTaskUsingDELETE1(taskId, _options);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>> {
        const result = this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options);
        return result.toPromise();
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: Configuration): Promise<AffiliateCommissionEarned> {
        const result = this.api.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>> {
        const result = this.api.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate\'s Commissions and Clawbacks
     * Retrieve Affiliate Commission and Clawbacks
     * @param affiliateId affiliate_id
     * @param [filter] Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateCommissionResponse> {
        const result = this.api.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.getAffiliateCustomFieldsUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>> {
        const result = this.api.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: Configuration): Promise<AffiliateProgramV2> {
        const result = this.api.getCommissionProgramUsingGET(commissionProgramId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(searchParam: string, _options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>> {
        const result = this.api.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Promise<ListBasicContactResponse> {
        const result = this.api.getContactsBySearchTermUsingGET(searchParam, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Promise<HttpInfo<CategoryDiscount>> {
        const result = this.api.getDiscountUsingGETWithHttpInfo(discountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET(discountId: string, _options?: Configuration): Promise<CategoryDiscount> {
        const result = this.api.getDiscountUsingGET(discountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: Configuration): Promise<HttpInfo<RestOpportunityStage>> {
        const result = this.api.getOpportunityStageUsingGETWithHttpInfo(stageId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Promise<RestOpportunityStage> {
        const result = this.api.getOpportunityStageUsingGET(stageId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.getOpportunityUsingGET1(opportunityId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1WithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.getOrderUsingGET1WithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1(orderId: string, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.getOrderUsingGET1(orderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.getRedirectLinkUsingGET(redirectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.getTaskUsingGET1WithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: Configuration): Promise<Task> {
        const result = this.api.getTaskUsingGET1(taskId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGETWithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.getUserByIdUsingGETWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGET(userId: string, _options?: Configuration): Promise<User> {
        const result = this.api.getUserByIdUsingGET(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>> {
        const result = this.api.getUserInfoUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1(_options?: Configuration): Promise<GetUserInfoResponse> {
        const result = this.api.getUserInfoUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1WithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getUserSignatureUsingGET1WithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1(userId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getUserSignatureUsingGET1(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const result = this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse> {
        const result = this.api.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>> {
        const result = this.api.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateLinksResponse> {
        const result = this.api.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListCountriesResponse>> {
        const result = this.api.listCountriesUsingGET2WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2(_options?: Configuration): Promise<ListCountriesResponse> {
        const result = this.api.listCountriesUsingGET2(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>> {
        const result = this.api.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListLandingPagesResponse> {
        const result = this.api.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>> {
        const result = this.api.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListLeadSourcesResponse> {
        const result = this.api.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>> {
        const result = this.api.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123;account_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListRestMerchantResponse> {
        const result = this.api.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>> {
        const result = this.api.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of all Opportunities.
     * List Opportunities
     * @param [fields] fields
     * @param [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOpportunitiesResponse> {
        const result = this.api.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>> {
        const result = this.api.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOpportunityStagesResponse> {
        const result = this.api.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListOrders>> {
        const result = this.api.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123;contact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListOrders> {
        const result = this.api.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListProductsResponse>> {
        const result = this.api.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListProductsResponse> {
        const result = this.api.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGETWithHttpInfo(countryCode: string, _options?: Configuration): Promise<HttpInfo<ListProvincesResponse>> {
        const result = this.api.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options);
        return result.toPromise();
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Promise<ListProvincesResponse> {
        const result = this.api.listProvincesForCountryUsingGET(countryCode, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        const result = this.api.listShippingMethodsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGET(_options?: Configuration): Promise<ListRestShippingMethodsResponse> {
        const result = this.api.listShippingMethodsUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        const result = this.api.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListSubscriptionPlansResponse> {
        const result = this.api.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>> {
        const result = this.api.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListAffiliateSummariesResponse> {
        const result = this.api.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<HttpInfo<ListTasksResponse>> {
        const result = this.api.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<ListTasksResponse> {
        const result = this.api.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, _options?: Configuration): Promise<HttpInfo<ListUserResponse>> {
        const result = this.api.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Promise<ListUserResponse> {
        const result = this.api.listUsersUsingGET1(filter, orderBy, _options);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const result = this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Promise<SetDefaultCommissionProgramResponse> {
        const result = this.api.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [order] order
     */
    public patchOrderUsingPATCHWithHttpInfo(orderId: string, updateMask?: Array<string>, order?: RestV2PatchOrderRequest, _options?: Configuration): Promise<HttpInfo<RestV2Order>> {
        const result = this.api.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options);
        return result.toPromise();
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [order] order
     */
    public patchOrderUsingPATCH(orderId: string, updateMask?: Array<string>, order?: RestV2PatchOrderRequest, _options?: Configuration): Promise<RestV2Order> {
        const result = this.api.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>> {
        const result = this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Promise<ProductCommissionProgram> {
        const result = this.api.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>> {
        const result = this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<SubscriptionCommissionProgram> {
        const result = this.api.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [task] task
     */
    public patchTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>> {
        const result = this.api.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [task] task
     */
    public patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<UpdateTaskResponse> {
        const result = this.api.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param [user] user
     */
    public patchUserUsingPATCHWithHttpInfo(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param [user] user
     */
    public patchUserUsingPATCH(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<User> {
        const result = this.api.patchUserUsingPATCH(userId, updateMask, user, _options);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param removeFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, removeFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param removeFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, removeFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveNoteModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveNoteModelUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveOrderCustomFieldModelUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveTaskModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveTaskModelUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<RestV2Opportunity>> {
        const result = this.api.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RestV2Opportunity> {
        const result = this.api.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param request request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<HttpInfo<AffiliateLink>> {
        const result = this.api.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param request request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<AffiliateLink> {
        const result = this.api.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservableProductApi } from './ObservableAPI';

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class PromiseProductApi {
    private api: ObservableProductApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListProductsResponse>> {
        const result = this.api.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListProductsResponse> {
        const result = this.api.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableReferralApi } from './ObservableAPI';

import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";
export class PromiseReferralApi {
    private api: ObservableReferralApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralApiRequestFactory,
        responseProcessor?: ReferralApiResponseProcessor
    ) {
        this.api = new ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param request request
     */
    public createReferralUsingPOSTWithHttpInfo(request: CreateReferralRequest, _options?: Configuration): Promise<HttpInfo<Referral>> {
        const result = this.api.createReferralUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param request request
     */
    public createReferralUsingPOST(request: CreateReferralRequest, _options?: Configuration): Promise<Referral> {
        const result = this.api.createReferralUsingPOST(request, _options);
        return result.toPromise();
    }


}



import { ObservableReportingApi } from './ObservableAPI';

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class PromiseReportingApi {
    private api: ObservableReportingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.api = new ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     */
    public runReportUsingPOSTWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ReportExecutionResult>> {
        const result = this.api.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style=\'color:red\'>Deprecated as of v2</span>
     * Run a Report
     * @param reportId The unique identifier of the report (Saved Search) to execute
     * @param [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     */
    public runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ReportExecutionResult> {
        const result = this.api.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableSalesApi } from './ObservableAPI';

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class PromiseSalesApi {
    private api: ObservableSalesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOST(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.setMerchantGatewayAsDefaultUsingPOST(id, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGETWithHttpInfo(fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>, _options?: Configuration): Promise<HttpInfo<GetSettingsResponse>> {
        const result = this.api.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options);
        return result.toPromise();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGET(fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>, _options?: Configuration): Promise<GetSettingsResponse> {
        const result = this.api.getApplicationConfigurationsUsingGET(fields, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetContactOptionTypesResponse>> {
        const result = this.api.getContactOptionTypesUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1(_options?: Configuration): Promise<GetContactOptionTypesResponse> {
        const result = this.api.getContactOptionTypesUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const result = this.api.isApplicationEnabledUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGET(_options?: Configuration): Promise<GetApplicationEnabledStatusResponse> {
        const result = this.api.isApplicationEnabledUsingGET(_options);
        return result.toPromise();
    }


}



import { ObservableShippingApi } from './ObservableAPI';

import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";
export class PromiseShippingApi {
    private api: ObservableShippingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingApiRequestFactory,
        responseProcessor?: ShippingApiResponseProcessor
    ) {
        this.api = new ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>> {
        const result = this.api.listShippingMethodsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGET(_options?: Configuration): Promise<ListRestShippingMethodsResponse> {
        const result = this.api.listShippingMethodsUsingGET(_options);
        return result.toPromise();
    }


}



import { ObservableSubscriptionPlansApi } from './ObservableAPI';

import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";
export class PromiseSubscriptionPlansApi {
    private api: ObservableSubscriptionPlansApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionPlansApiRequestFactory,
        responseProcessor?: SubscriptionPlansApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>> {
        const result = this.api.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListSubscriptionPlansResponse> {
        const result = this.api.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }


}



import { ObservableSubscriptionsApi } from './ObservableAPI';

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class PromiseSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param customField customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param customField customField
     */
    public createSubscriptionCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.createSubscriptionCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Promise<HttpInfo<RestSubscriptionV2>> {
        const result = this.api.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options);
        return result.toPromise();
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Promise<RestSubscriptionV2> {
        const result = this.api.createSubscriptionV2UsingPOST(createSubscriptionV2, _options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<HttpInfo<ApplyTagsResponse>> {
        const result = this.api.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<ApplyTagsResponse> {
        const result = this.api.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param request request
     */
    public createTagCategoryUsingPOST1WithHttpInfo(request: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.createTagCategoryUsingPOST1WithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param request request
     */
    public createTagCategoryUsingPOST1(request: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<Tag> {
        const result = this.api.createTagCategoryUsingPOST1(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param tag tag
     */
    public createTagUsingPOST1WithHttpInfo(tag: CreateUpdateTagRequest, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.createTagUsingPOST1WithHttpInfo(tag, _options);
        return result.toPromise();
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param tag tag
     */
    public createTagUsingPOST1(tag: CreateUpdateTagRequest, _options?: Configuration): Promise<Tag> {
        const result = this.api.createTagUsingPOST1(tag, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTagCategoryUsingDELETE(tagCategoryId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETEWithHttpInfo(tagId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTagUsingDELETEWithHttpInfo(tagId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETE(tagId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTagUsingDELETE(tagId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGETWithHttpInfo(tagCategoryId: string, _options?: Configuration): Promise<HttpInfo<GetTagCategoryResponse>> {
        const result = this.api.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGET(tagCategoryId: string, _options?: Configuration): Promise<GetTagCategoryResponse> {
        const result = this.api.getCategoryUsingGET(tagCategoryId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1WithHttpInfo(tagId: string, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.getTagUsingGET1WithHttpInfo(tagId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1(tagId: string, _options?: Configuration): Promise<Tag> {
        const result = this.api.getTagUsingGET1(tagId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagIdUsingGET1WithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListTaggedCompaniesResponse>> {
        const result = this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Companies
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListTaggedCompaniesResponse> {
        const result = this.api.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagIdUsingGETWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListTaggedContactsResponse>> {
        const result = this.api.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * List Tagged Contacts
     * @param tagId tag_id
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListTaggedContactsResponse> {
        const result = this.api.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListTagCategoriesResponse>> {
        const result = this.api.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListTagCategoriesResponse> {
        const result = this.api.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<ListTagsResponse>> {
        const result = this.api.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<ListTagsResponse> {
        const result = this.api.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [tagCategory] tagCategory
     */
    public patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, tagCategory?: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<HttpInfo<UpdateTagCategoryResponse>> {
        const result = this.api.patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, tagCategory, _options);
        return result.toPromise();
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [tagCategory] tagCategory
     */
    public patchTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, tagCategory?: CreateUpdateTagCategoryRequest, _options?: Configuration): Promise<UpdateTagCategoryResponse> {
        const result = this.api.patchTagCategoryUsingPATCH(tagCategoryId, updateMask, tagCategory, _options);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [tag] tag
     */
    public patchTagUsingPATCHWithHttpInfo(tagId: string, updateMask?: Array<string>, tag?: CreateUpdateTagRequest, _options?: Configuration): Promise<HttpInfo<UpdateTagResponse>> {
        const result = this.api.patchTagUsingPATCHWithHttpInfo(tagId, updateMask, tag, _options);
        return result.toPromise();
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param [tag] tag
     */
    public patchTagUsingPATCH(tagId: string, updateMask?: Array<string>, tag?: CreateUpdateTagRequest, _options?: Configuration): Promise<UpdateTagResponse> {
        const result = this.api.patchTagUsingPATCH(tagId, updateMask, tag, _options);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param customField customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>> {
        const result = this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param customField customField
     */
    public createTaskCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<CreateCustomFieldResponse> {
        const result = this.api.createTaskCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [task] task
     */
    public createTaskUsingPOST1WithHttpInfo(task?: CreateTaskRequest, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.createTaskUsingPOST1WithHttpInfo(task, _options);
        return result.toPromise();
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [task] task
     */
    public createTaskUsingPOST1(task?: CreateTaskRequest, _options?: Configuration): Promise<Task> {
        const result = this.api.createTaskUsingPOST1(task, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTaskUsingDELETE1(taskId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.getTaskUsingGET1WithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: Configuration): Promise<Task> {
        const result = this.api.getTaskUsingGET1(taskId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<HttpInfo<ListTasksResponse>> {
        const result = this.api.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * List Tasks
     * @param [endDueTime]
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     * @param [startDueTime]
     */
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<ListTasksResponse> {
        const result = this.api.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [task] task
     */
    public patchTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>> {
        const result = this.api.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options);
        return result.toPromise();
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [task] task
     */
    public patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<UpdateTaskResponse> {
        const result = this.api.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<ObjectModel>> {
        const result = this.api.retrieveTaskModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: Configuration): Promise<ObjectModel> {
        const result = this.api.retrieveTaskModelUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>> {
        const result = this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param request request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<CustomFieldMetaData> {
        const result = this.api.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [user] user
     */
    public createUserUsingPOST1WithHttpInfo(user?: CreateUserRequestV2, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.createUserUsingPOST1WithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [user] user
     */
    public createUserUsingPOST1(user?: CreateUserRequestV2, _options?: Configuration): Promise<User> {
        const result = this.api.createUserUsingPOST1(user, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGETWithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.getUserByIdUsingGETWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGET(userId: string, _options?: Configuration): Promise<User> {
        const result = this.api.getUserByIdUsingGET(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1WithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>> {
        const result = this.api.getUserInfoUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1(_options?: Configuration): Promise<GetUserInfoResponse> {
        const result = this.api.getUserInfoUsingGET1(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1WithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.getUserSignatureUsingGET1WithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1(userId: string, _options?: Configuration): Promise<string> {
        const result = this.api.getUserSignatureUsingGET1(userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, _options?: Configuration): Promise<HttpInfo<ListUserResponse>> {
        const result = this.api.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Promise<ListUserResponse> {
        const result = this.api.listUsersUsingGET1(filter, orderBy, _options);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param [user] user
     */
    public patchUserUsingPATCHWithHttpInfo(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options);
        return result.toPromise();
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param [user] user
     */
    public patchUserUsingPATCH(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<User> {
        const result = this.api.patchUserUsingPATCH(userId, updateMask, user, _options);
        return result.toPromise();
    }


}



