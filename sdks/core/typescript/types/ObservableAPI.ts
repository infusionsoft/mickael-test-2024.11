import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor} from "../apis/AffiliateApi";
export class ObservableAffiliateApi {
    private requestFactory: AffiliateApiRequestFactory;
    private responseProcessor: AffiliateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AffiliateApiRequestFactory,
        responseProcessor?: AffiliateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AffiliateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AffiliateApiResponseProcessor();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateToProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Observable<void> {
        return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest?: CreateAffiliateRequest, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.addAffiliateUsingPOST(createAffiliateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate
     * Create an Affiliate
     * @param [createAffiliateRequest] Affiliate request to insert
     */
    public addAffiliateUsingPOST(createAffiliateRequest?: CreateAffiliateRequest, _options?: Configuration): Observable<RestAffiliate> {
        return this.addAffiliateUsingPOSTWithHttpInfo(createAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.addCommissionProgramUsingPOST(createCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: Configuration): Observable<AffiliateCommissionProgramResponse> {
        return this.addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<ProductCommissionProgram>> {
        const requestContextPromise = this.requestFactory.assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignProductCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: Configuration): Observable<ProductCommissionProgram> {
        return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<SubscriptionCommissionProgram> {
        return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest customField
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createAffiliateCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAffiliateCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest customField
     */
    public createAffiliateCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createAffiliateCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Observable<SetDefaultCommissionProgramResponse> {
        return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrPatchAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRedirectLinkUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrPatchAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<AffiliateLink> {
        return this.createRedirectLinkUsingPOSTWithHttpInfo(createOrPatchAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: Configuration): Observable<void> {
        return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAffiliateUsingDELETE(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: Configuration): Observable<void> {
        return this.deleteAffiliateUsingDELETEWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteRedirectLinkUsingDELETE(redirectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRedirectLinkUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: Configuration): Observable<void> {
        return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionEarned>> {
        const requestContextPromise = this.requestFactory.getAffiliateCommissionTotalUsingGET(affiliateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionTotalUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: Configuration): Observable<AffiliateCommissionEarned> {
        return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionEarned>) => apiResponse.data));
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
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateCommissionResponse>> {
        const requestContextPromise = this.requestFactory.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionsUsingGETWithHttpInfo(rsp)));
            }));
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
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateCommissionResponse> {
        return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.getAffiliateCustomFieldsUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCustomFieldsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.getAffiliateUsingGET1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Affiliate
     * Retrieve an Affiliate
     * @param id id
     */
    public getAffiliateUsingGET1(id: string, _options?: Configuration): Observable<RestAffiliate> {
        return this.getAffiliateUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: Configuration): Observable<HttpInfo<AffiliateProgramV2>> {
        const requestContextPromise = this.requestFactory.getCommissionProgramUsingGET(commissionProgramId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommissionProgramUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: Configuration): Observable<AffiliateProgramV2> {
        return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<AffiliateProgramV2>) => apiResponse.data));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.getRedirectLinkUsingGET(redirectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRedirectLinkUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: Configuration): Observable<AffiliateLink> {
        return this.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const requestContextPromise = this.requestFactory.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateCommissionProgramsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateCommissionProgramsResponse> {
        return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionProgramsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateLinksResponse>> {
        const requestContextPromise = this.requestFactory.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateLinksUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateLinksResponse> {
        return this.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateLinksResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateSummariesResponse>> {
        const requestContextPromise = this.requestFactory.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSummariesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateSummariesResponse> {
        return this.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateSummariesResponse>) => apiResponse.data));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param patchCommissionProgramRequest patchCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, patchCommissionProgramRequest: PatchCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the properties of an Affiliate Commission Program
     * Update a Affiliate Commission Program
     * @param commissionProgramId commission_program_id
     * @param patchCommissionProgramRequest patchCommissionProgramRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public patchCommissionProgramUsingPATCH(commissionProgramId: string, patchCommissionProgramRequest: PatchCommissionProgramRequest, updateMask?: Array<string>, _options?: Configuration): Observable<AffiliateCommissionProgramResponse> {
        return this.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Observable<SetDefaultCommissionProgramResponse> {
        return this.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<ProductCommissionProgram>> {
        const requestContextPromise = this.requestFactory.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchProductCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Observable<ProductCommissionProgram> {
        return this.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const requestContextPromise = this.requestFactory.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<SubscriptionCommissionProgram> {
        return this.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAffiliateFromProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Observable<void> {
        return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Observable<void> {
        return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [patchAffiliateRequest] Affiliate request to patch
     */
    public updateAffiliateUsingPATCHWithHttpInfo(id: string, patchAffiliateRequest?: PatchAffiliateRequest, _options?: Configuration): Observable<HttpInfo<RestAffiliate>> {
        const requestContextPromise = this.requestFactory.updateAffiliateUsingPATCH(id, patchAffiliateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a single Affiliate
     * Update an Affiliate
     * @param id id
     * @param [patchAffiliateRequest] Affiliate request to patch
     */
    public updateAffiliateUsingPATCH(id: string, patchAffiliateRequest?: PatchAffiliateRequest, _options?: Configuration): Observable<RestAffiliate> {
        return this.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliateRequest, _options).pipe(map((apiResponse: HttpInfo<RestAffiliate>) => apiResponse.data));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrPatchAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRedirectLinkUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrPatchAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<AffiliateLink> {
        return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrPatchAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

}

import { AutomationApiRequestFactory, AutomationApiResponseProcessor} from "../apis/AutomationApi";
export class ObservableAutomationApi {
    private requestFactory: AutomationApiRequestFactory;
    private responseProcessor: AutomationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationApiRequestFactory,
        responseProcessor?: AutomationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationApiResponseProcessor();
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Observable<HttpInfo<AddToAutomationSequenceResponse>> {
        const requestContextPromise = this.requestFactory.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * Add Contacts to an Automation Sequence
     * @param automationId automation_id
     * @param sequenceId sequence_id
     * @param addToAutomationSequenceRequest addToAutomationSequenceRequest
     */
    public addContactsToAutomationSequenceUsingPOST(automationId: string, sequenceId: string, addToAutomationSequenceRequest: AddToAutomationSequenceRequest, _options?: Configuration): Observable<AddToAutomationSequenceResponse> {
        return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddToAutomationSequenceResponse>) => apiResponse.data));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETEWithHttpInfo(automationIds: Array<number>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAutomationUsingDELETE(automationIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAutomationUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single automation
     * Delete an Automation
     * @param automationIds automation_ids
     */
    public deleteAutomationUsingDELETE(automationIds: Array<number>, _options?: Configuration): Observable<void> {
        return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGETWithHttpInfo(automationId: string, _options?: Configuration): Observable<HttpInfo<Automation>> {
        const requestContextPromise = this.requestFactory.getAutomationUsingGET(automationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAutomationUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single automation
     * Retrieve an Automation
     * @param automationId automation_id
     */
    public getAutomationUsingGET(automationId: string, _options?: Configuration): Observable<Automation> {
        return this.getAutomationUsingGETWithHttpInfo(automationId, _options).pipe(map((apiResponse: HttpInfo<Automation>) => apiResponse.data));
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
    public listAllAutomationIdsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListAutomationIdsResponse>> {
        const requestContextPromise = this.requestFactory.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAutomationIdsUsingGETWithHttpInfo(rsp)));
            }));
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
    public listAllAutomationIdsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListAutomationIdsResponse> {
        return this.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListAutomationIdsResponse>) => apiResponse.data));
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
    public listAutomationsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListAutomationResponse>> {
        const requestContextPromise = this.requestFactory.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAutomationsUsingGETWithHttpInfo(rsp)));
            }));
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
    public listAutomationsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListAutomationResponse> {
        return this.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListAutomationResponse>) => apiResponse.data));
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAutomationCategoryUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the category of one or more automations
     * Update an Automation\'s Category
     * @param updateAutomationCategoryRequest updateAutomationCategoryRequest
     */
    public updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest: UpdateAutomationCategoryRequest, _options?: Configuration): Observable<void> {
        return this.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor} from "../apis/AutomationCategoryApi";
export class ObservableAutomationCategoryApi {
    private requestFactory: AutomationCategoryApiRequestFactory;
    private responseProcessor: AutomationCategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutomationCategoryApiRequestFactory,
        responseProcessor?: AutomationCategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutomationCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutomationCategoryApiResponseProcessor();
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<AutomationCategory>> {
        const requestContextPromise = this.requestFactory.createCategoryUsingPOST(createAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single automation category
     * Create automation category
     * @param createAutomationCategoryRequest createAutomationCategoryRequest
     */
    public createCategoryUsingPOST(createAutomationCategoryRequest: CreateAutomationCategoryRequest, _options?: Configuration): Observable<AutomationCategory> {
        return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETEWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCategoriesUsingDELETE(ids, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoriesUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes one or more automation categories based on the request parameters
     * Delete automation category
     * @param ids ids
     */
    public deleteCategoriesUsingDELETE(ids: Array<number>, _options?: Configuration): Observable<void> {
        return this.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     */
    public listCategoriesUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListAutomationCategoryResponse>> {
        const requestContextPromise = this.requestFactory.listCategoriesUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists all automation categories based on the request parameters
     * List automation categories
     */
    public listCategoriesUsingGET(_options?: Configuration): Observable<ListAutomationCategoryResponse> {
        return this.listCategoriesUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListAutomationCategoryResponse>) => apiResponse.data));
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Observable<HttpInfo<AutomationCategory>> {
        const requestContextPromise = this.requestFactory.saveCategoryUsingPUT(saveAutomationCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveCategoryUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates or updates a single automation category
     * Save automation category
     * @param saveAutomationCategoryRequest saveAutomationCategoryRequest
     */
    public saveCategoryUsingPUT(saveAutomationCategoryRequest: SaveAutomationCategoryRequest, _options?: Configuration): Observable<AutomationCategory> {
        return this.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<AutomationCategory>) => apiResponse.data));
    }

}

import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor} from "../apis/BusinessProfileApi";
export class ObservableBusinessProfileApi {
    private requestFactory: BusinessProfileApiRequestFactory;
    private responseProcessor: BusinessProfileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessProfileApiRequestFactory,
        responseProcessor?: BusinessProfileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessProfileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessProfileApiResponseProcessor();
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const requestContextPromise = this.requestFactory.getBusinessProfileUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBusinessProfileUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves Business Profile information.
     * Retrieve Business Profile
     */
    public getBusinessProfileUsingGET(_options?: Configuration): Observable<GetBusinessProfileResponse> {
        return this.getBusinessProfileUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchBusinessProfileRequest] businessProfile
     */
    public patchBusinessProfileUsingPATCHWithHttpInfo(updateMask?: Array<string>, patchBusinessProfileRequest?: PatchBusinessProfileRequest, _options?: Configuration): Observable<HttpInfo<GetBusinessProfileResponse>> {
        const requestContextPromise = this.requestFactory.patchBusinessProfileUsingPATCH(updateMask, patchBusinessProfileRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchBusinessProfileUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates Business Profile information.
     * Update Business Profile
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchBusinessProfileRequest] businessProfile
     */
    public patchBusinessProfileUsingPATCH(updateMask?: Array<string>, patchBusinessProfileRequest?: PatchBusinessProfileRequest, _options?: Configuration): Observable<GetBusinessProfileResponse> {
        return this.patchBusinessProfileUsingPATCHWithHttpInfo(updateMask, patchBusinessProfileRequest, _options).pipe(map((apiResponse: HttpInfo<GetBusinessProfileResponse>) => apiResponse.data));
    }

}

import { CampaignApiRequestFactory, CampaignApiResponseProcessor} from "../apis/CampaignApi";
export class ObservableCampaignApi {
    private requestFactory: CampaignApiRequestFactory;
    private responseProcessor: CampaignApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignApiRequestFactory,
        responseProcessor?: CampaignApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CampaignApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CampaignApiResponseProcessor();
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Observable<HttpInfo<AddContactsToSequenceResponse>> {
        const requestContextPromise = this.requestFactory.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Add Contacts to Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param addContactsToSequenceRequest addContactsToSequenceRequest
     */
    public addContactsToCampaignSequenceUsingPOST1(campaignId: string, sequenceId: string, addContactsToSequenceRequest: AddContactsToSequenceRequest, _options?: Configuration): Observable<AddContactsToSequenceResponse> {
        return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<AddContactsToSequenceResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1WithHttpInfo(campaignId: string, _options?: Configuration): Observable<HttpInfo<Campaign>> {
        const requestContextPromise = this.requestFactory.getCampaignUsingGET1(campaignId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCampaignUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single campaign
     * Retrieve a Campaign
     * @param campaignId campaign_id
     */
    public getCampaignUsingGET1(campaignId: string, _options?: Configuration): Observable<Campaign> {
        return this.getCampaignUsingGET1WithHttpInfo(campaignId, _options).pipe(map((apiResponse: HttpInfo<Campaign>) => apiResponse.data));
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
    public listCampaignsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<HttpInfo<ListCampaignsResponse>> {
        const requestContextPromise = this.requestFactory.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCampaignsUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCampaignsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, stats?: boolean, _options?: Configuration): Observable<ListCampaignsResponse> {
        return this.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options).pipe(map((apiResponse: HttpInfo<ListCampaignsResponse>) => apiResponse.data));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Observable<HttpInfo<RemoveContactsFromSequenceResponse>> {
        const requestContextPromise = this.requestFactory.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * Remove Contacts from Campaign Sequence
     * @param campaignId campaign_id
     * @param sequenceId sequence_id
     * @param removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     */
    public removeContactsFromCampaignSequenceUsingPOST(campaignId: string, sequenceId: string, removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest, _options?: Configuration): Observable<RemoveContactsFromSequenceResponse> {
        return this.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options).pipe(map((apiResponse: HttpInfo<RemoveContactsFromSequenceResponse>) => apiResponse.data));
    }

}

import { CategoryDiscountApiRequestFactory, CategoryDiscountApiResponseProcessor} from "../apis/CategoryDiscountApi";
export class ObservableCategoryDiscountApi {
    private requestFactory: CategoryDiscountApiRequestFactory;
    private responseProcessor: CategoryDiscountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryDiscountApiRequestFactory,
        responseProcessor?: CategoryDiscountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryDiscountApiResponseProcessor();
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param createUpdateDiscountRequest request
     */
    public createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest: CreateUpdateDiscountRequest, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.createDiscountUsingPOST(createUpdateDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param createUpdateDiscountRequest request
     */
    public createDiscountUsingPOST(createUpdateDiscountRequest: CreateUpdateDiscountRequest, _options?: Configuration): Observable<CategoryDiscount> {
        return this.createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.getDiscountUsingGET(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET(discountId: string, _options?: Configuration): Observable<CategoryDiscount> {
        return this.getDiscountUsingGETWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListCategoryDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listCategoryDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoryDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListCategoryDiscountsResponse> {
        return this.listCategoryDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCategoryDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param discountId discount_id
     * @param createUpdateDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCHWithHttpInfo(discountId: string, createUpdateDiscountRequest: CreateUpdateDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param discountId discount_id
     * @param createUpdateDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH(discountId: string, createUpdateDiscountRequest: CreateUpdateDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CategoryDiscount> {
        return this.updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

}

import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";
export class ObservableCompanyApi {
    private requestFactory: CompanyApiRequestFactory;
    private responseProcessor: CompanyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyApiRequestFactory,
        responseProcessor?: CompanyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompanyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompanyApiResponseProcessor();
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyUsingPOST1WithHttpInfo(createCompanyRequest?: CreateCompanyRequest, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.createCompanyUsingPOST1(createCompanyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCompanyUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Company.`country_code` is required if `region` is specified.
     * Create a Company
     * @param [createCompanyRequest] company
     */
    public createCompanyUsingPOST1(createCompanyRequest?: CreateCompanyRequest, _options?: Configuration): Observable<Company> {
        return this.createCompanyUsingPOST1WithHttpInfo(createCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETEWithHttpInfo(companyId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCompanyUsingDELETE(companyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCompanyUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Company
     * Delete a Company
     * @param companyId company_id
     */
    public deleteCompanyUsingDELETE(companyId: string, _options?: Configuration): Observable<void> {
        return this.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1WithHttpInfo(companyId: string, fields?: Array<string>, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.getCompanyUsingGET1(companyId, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Company
     * Retrieve a Company
     * @param companyId company_id
     * @param [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: &#x60;company_name&#x60;, &#x60;address&#x60;, &#x60;custom_fields&#x60;, &#x60;email_address&#x60;, &#x60;fax_number&#x60;, &#x60;phone_number&#x60;, &#x60;website&#x60;, &#x60;notes&#x60;)
     */
    public getCompanyUsingGET1(companyId: string, fields?: Array<string>, _options?: Configuration): Observable<Company> {
        return this.getCompanyUsingGET1WithHttpInfo(companyId, fields, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
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
    public listCompaniesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListCompaniesResponse>> {
        const requestContextPromise = this.requestFactory.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCompaniesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListCompaniesResponse> {
        return this.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCompaniesResponse>) => apiResponse.data));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchCompanyRequest] company
     */
    public patchCompanyUsingPATCHWithHttpInfo(companyId: string, updateMask?: Array<string>, patchCompanyRequest?: PatchCompanyRequest, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.patchCompanyUsingPATCH(companyId, updateMask, patchCompanyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCompanyUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Company with the values provided in the request
     * Update a Company
     * @param companyId company_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchCompanyRequest] company
     */
    public patchCompanyUsingPATCH(companyId: string, updateMask?: Array<string>, patchCompanyRequest?: PatchCompanyRequest, _options?: Configuration): Observable<Company> {
        return this.patchCompanyUsingPATCHWithHttpInfo(companyId, updateMask, patchCompanyRequest, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

}

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class ObservableContactApi {
    private requestFactory: ContactApiRequestFactory;
    private responseProcessor: ContactApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactApiResponseProcessor();
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: Configuration): Observable<HttpInfo<ContactLinkType>> {
        const requestContextPromise = this.requestFactory.createContactLinkTypeUsingPOST(createContactLinkTypeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactLinkTypeUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new type of Contact Link.
     * Create a Contact Link type
     * @param createContactLinkTypeRequest request
     */
    public createContactLinkTypeUsingPOST(createContactLinkTypeRequest: CreateContactLinkTypeRequest, _options?: Configuration): Observable<ContactLinkType> {
        return this.createContactLinkTypeUsingPOSTWithHttpInfo(createContactLinkTypeRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLinkType>) => apiResponse.data));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createPatchContactRequest] contact
     */
    public createContactUsingPOST1WithHttpInfo(createPatchContactRequest?: CreatePatchContactRequest, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.createContactUsingPOST1(createPatchContactRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * Create a Contact
     * @param [createPatchContactRequest] contact
     */
    public createContactUsingPOST1(createPatchContactRequest?: CreatePatchContactRequest, _options?: Configuration): Observable<Contact> {
        return this.createContactUsingPOST1WithHttpInfo(createPatchContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1WithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteContactUsingDELETE1(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContactUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Contact.
     * Delete a Contact
     * @param contactId contact_id
     */
    public deleteContactUsingDELETE1(contactId: string, _options?: Configuration): Observable<void> {
        return this.deleteContactUsingDELETE1WithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     */
    public getContactUsingGET1WithHttpInfo(contactId: string, fields?: Array<string>, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.getContactUsingGET1(contactId, fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Contact
     * Retrieve a Contact
     * @param contactId contact_id
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     */
    public getContactUsingGET1(contactId: string, fields?: Array<string>, _options?: Configuration): Observable<Contact> {
        return this.getContactUsingGET1WithHttpInfo(contactId, fields, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(searchParam: string, _options?: Configuration): Observable<HttpInfo<ListBasicContactResponse>> {
        const requestContextPromise = this.requestFactory.getContactsBySearchTermUsingGET(searchParam, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactsBySearchTermUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Observable<ListBasicContactResponse> {
        return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options).pipe(map((apiResponse: HttpInfo<ListBasicContactResponse>) => apiResponse.data));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<HttpInfo<ContactLink>> {
        const requestContextPromise = this.requestFactory.linkContactsUsingPOST(linkContactsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkContactsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Links two Contacts together using the provided Link type
     * Link Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public linkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<ContactLink> {
        return this.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<ContactLink>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGETWithHttpInfo(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListContactLinkTypesResponse>> {
        const requestContextPromise = this.requestFactory.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinkTypesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Contact Link types.
     * List Contact Link types
     * @param [filter] Search filter to apply to results. Formatted as (unencoded) ?filter&#x3D;name&#x3D;&#x3D;expectedValue
     * @param [orderBy]
     * @param [pageSize]
     * @param [pageToken]
     */
    public listContactLinkTypesUsingGET(filter?: 'name', orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListContactLinkTypesResponse> {
        return this.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactLinkTypesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGETWithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<ListContactLinksResponse>> {
        const requestContextPromise = this.requestFactory.listContactLinksUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactLinksUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Linked Contacts for a given Contact
     * List Linked Contacts
     * @param contactId contact_id
     */
    public listContactLinksUsingGET(contactId: string, _options?: Configuration): Observable<ListContactLinksResponse> {
        return this.listContactLinksUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<ListContactLinksResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * @param [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListContactsResponse>> {
        const requestContextPromise = this.requestFactory.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Contacts
     * List Contacts
     * @param [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: &#x60;score_value&#x60;, &#x60;addresses&#x60;, &#x60;anniversary&#x60;, &#x60;birthday&#x60;, &#x60;company&#x60;, &#x60;contact_type&#x60;, &#x60;custom_fields&#x60;, &#x60;create_time&#x60;, &#x60;email_addresses&#x60;, &#x60;fax_numbers&#x60;, &#x60;job_title&#x60;, &#x60;update_time&#x60;, &#x60;create_time&#x60;, &#x60;leadsource_id&#x60;,&#x60;middle_name&#x60;, &#x60;origin&#x60;, &#x60;owner_id&#x60;, &#x60;phone_numbers&#x60;, &#x60;preferred_locale&#x60;, &#x60;preferred_name&#x60;,&#x60;prefix&#x60;, &#x60;relationships&#x60;, &#x60;social_accounts&#x60;, &#x60;source_type&#x60;, &#x60;spouse_name&#x60;, &#x60;suffix&#x60;, &#x60;time_zone&#x60;,&#x60;website&#x60;, &#x60;tag_ids&#x60;, &#x60;utm_parameters&#x60;)
     * @param [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:   - &#x60;filter&#x3D;given_name%3D%3DMary&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123&#x60;  - &#x60;filter&#x3D;company_id%3D%3D123%3Bfamily_name%3D%3DSmith&#x60;  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listContactsUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListContactsResponse> {
        return this.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListContactsResponse>) => apiResponse.data));
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGETWithHttpInfo(contactId: number, _options?: Configuration): Observable<HttpInfo<PaymentMethodList>> {
        const requestContextPromise = this.requestFactory.listPaymentMethodsUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPaymentMethodsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all Payment Methods for a Contact.
     * Retrieve Payment Methods
     * @param contactId contact_id
     */
    public listPaymentMethodsUsingGET(contactId: number, _options?: Configuration): Observable<PaymentMethodList> {
        return this.listPaymentMethodsUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<PaymentMethodList>) => apiResponse.data));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchContactRequest] contact
     */
    public patchContactUsingPATCHWithHttpInfo(contactId: string, updateMask?: Array<string>, createPatchContactRequest?: CreatePatchContactRequest, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.patchContactUsingPATCH(contactId, updateMask, createPatchContactRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchContactUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Contact
     * Update a Contact
     * @param contactId contact_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchContactRequest] contact
     */
    public patchContactUsingPATCH(contactId: string, updateMask?: Array<string>, createPatchContactRequest?: CreatePatchContactRequest, _options?: Configuration): Observable<Contact> {
        return this.patchContactUsingPATCHWithHttpInfo(contactId, updateMask, createPatchContactRequest, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveContactModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveContactModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Contact object
     * Retrieve Contact Model
     */
    public retrieveContactModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveContactModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unlinkContactsUsingPOST(linkContactsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkContactsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes Link between two Contacts
     * Delete Link between two Contacts
     * @param linkContactsRequest linkContactsRequest
     */
    public unlinkContactsUsingPOST(linkContactsRequest: LinkContactsRequest, _options?: Configuration): Observable<void> {
        return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { EmailApiRequestFactory, EmailApiResponseProcessor} from "../apis/EmailApi";
export class ObservableEmailApi {
    private requestFactory: EmailApiRequestFactory;
    private responseProcessor: EmailApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailApiRequestFactory,
        responseProcessor?: EmailApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailApiResponseProcessor();
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailUsingPOST1WithHttpInfo(createEmailSentRequest: CreateEmailSentRequest, _options?: Configuration): Observable<HttpInfo<EmailSentWithContent>> {
        const requestContextPromise = this.requestFactory.createEmailUsingPOST1(createEmailSentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Record of an Email sent to a Contact
     * Create an Email Record
     * @param createEmailSentRequest emailWithContent
     */
    public createEmailUsingPOST1(createEmailSentRequest: CreateEmailSentRequest, _options?: Configuration): Observable<EmailSentWithContent> {
        return this.createEmailUsingPOST1WithHttpInfo(createEmailSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Observable<HttpInfo<EmailsSentList>> {
        const requestContextPromise = this.requestFactory.createEmailsUsingPOST1(createEmailsSentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmailsUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * Create a set of Email Records
     * @param [createEmailsSentRequest] Email records to persist, with content.
     */
    public createEmailsUsingPOST1(createEmailsSentRequest?: CreateEmailsSentRequest, _options?: Configuration): Observable<EmailsSentList> {
        return this.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options).pipe(map((apiResponse: HttpInfo<EmailsSentList>) => apiResponse.data));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEmailUsingDELETE1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specific Email Record
     * Delete an Email Record
     * @param id id
     */
    public deleteEmailUsingDELETE1(id: string, _options?: Configuration): Observable<void> {
        return this.deleteEmailUsingDELETE1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Observable<HttpInfo<DeleteEmailsResponse>> {
        const requestContextPromise = this.requestFactory.deleteEmailsUsingPOST1(deleteEmailsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailsUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a set of Email Records
     * Remove a set of Email Records
     * @param deleteEmailsRequest deleteEmailsRequest
     */
    public deleteEmailsUsingPOST1(deleteEmailsRequest: DeleteEmailsRequest, _options?: Configuration): Observable<DeleteEmailsResponse> {
        return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options).pipe(map((apiResponse: HttpInfo<DeleteEmailsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1WithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<EmailSentWithContent>> {
        const requestContextPromise = this.requestFactory.getEmailUsingGET1(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Email that has been sent
     * Retrieve an Email
     * @param id id
     */
    public getEmailUsingGET1(id: string, _options?: Configuration): Observable<EmailSentWithContent> {
        return this.getEmailUsingGET1WithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<EmailSentWithContent>) => apiResponse.data));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1WithHttpInfo(emailSendRequest?: EmailSendRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.sendEmailUsingPOST1(emailSendRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends an Email to a list of Contacts
     * Send an Email
     * @param [emailSendRequest] emailSendRequest
     */
    public sendEmailUsingPOST1(emailSendRequest?: EmailSendRequest, _options?: Configuration): Observable<void> {
        return this.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor} from "../apis/EmailAddressApi";
export class ObservableEmailAddressApi {
    private requestFactory: EmailAddressApiRequestFactory;
    private responseProcessor: EmailAddressApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAddressApiRequestFactory,
        responseProcessor?: EmailAddressApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailAddressApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailAddressApiResponseProcessor();
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGETWithHttpInfo(email: string, _options?: Configuration): Observable<HttpInfo<RestEmailAddress>> {
        const requestContextPromise = this.requestFactory.getEmailAddressStatusUsingGET(email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailAddressStatusUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the opt-in status for given Email Address
     * Retrieve an Email Address status
     * @param email email
     */
    public getEmailAddressStatusUsingGET(email: string, _options?: Configuration): Observable<RestEmailAddress> {
        return this.getEmailAddressStatusUsingGETWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddress>) => apiResponse.data));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUTWithHttpInfo(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Observable<HttpInfo<RestEmailAddress>> {
        const requestContextPromise = this.requestFactory.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmailAddressOptStatusUsingPUTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * Update an Email Address opt-in status
     * @param email email
     * @param updateEmailAddress updateEmailAddress
     */
    public updateEmailAddressOptStatusUsingPUT(email: string, updateEmailAddress: UpdateEmailAddress, _options?: Configuration): Observable<RestEmailAddress> {
        return this.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress, _options).pipe(map((apiResponse: HttpInfo<RestEmailAddress>) => apiResponse.data));
    }

}

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param createFileRequest request
     */
    public createFileUsingPOST1WithHttpInfo(createFileRequest: CreateFileRequest, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.createFileUsingPOST1(createFileRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFileUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param createFileRequest request
     */
    public createFileUsingPOST1(createFileRequest: CreateFileRequest, _options?: Configuration): Observable<FileMetadata> {
        return this.createFileUsingPOST1WithHttpInfo(createFileRequest, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1WithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFileUsingDELETE1(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1(fileId: string, _options?: Configuration): Observable<void> {
        return this.deleteFileUsingDELETE1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGETWithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getFileDataUsingGET(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileDataUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGET(fileId: string, _options?: Configuration): Observable<string> {
        return this.getFileDataUsingGETWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1WithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.getFileUsingGET1(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1(fileId: string, _options?: Configuration): Observable<FileMetadata> {
        return this.getFileUsingGET1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Retrieves all files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListFilesResponse>> {
        const requestContextPromise = this.requestFactory.listFilesUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFilesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListFilesResponse> {
        return this.listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFilesResponse>) => apiResponse.data));
    }

    /**
     * Updates a file
     * Update a file
     * @param fileId file_id
     * @param updateFileRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFileUsingPATCHWithHttpInfo(fileId: string, updateFileRequest: UpdateFileRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.updateFileUsingPATCH(fileId, updateFileRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFileUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a file
     * Update a file
     * @param fileId file_id
     * @param updateFileRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFileUsingPATCH(fileId: string, updateFileRequest: UpdateFileRequest, updateMask?: Array<string>, _options?: Configuration): Observable<FileMetadata> {
        return this.updateFileUsingPATCHWithHttpInfo(fileId, updateFileRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

}

import { FreeTrialDiscountApiRequestFactory, FreeTrialDiscountApiResponseProcessor} from "../apis/FreeTrialDiscountApi";
export class ObservableFreeTrialDiscountApi {
    private requestFactory: FreeTrialDiscountApiRequestFactory;
    private responseProcessor: FreeTrialDiscountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FreeTrialDiscountApiRequestFactory,
        responseProcessor?: FreeTrialDiscountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FreeTrialDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FreeTrialDiscountApiResponseProcessor();
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE1(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FunnelIntegrationApiRequestFactory, FunnelIntegrationApiResponseProcessor} from "../apis/FunnelIntegrationApi";
export class ObservableFunnelIntegrationApi {
    private requestFactory: FunnelIntegrationApiRequestFactory;
    private responseProcessor: FunnelIntegrationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunnelIntegrationApiRequestFactory,
        responseProcessor?: FunnelIntegrationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunnelIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunnelIntegrationApiResponseProcessor();
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFunnelIntegrationUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Observable<void> {
        return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Observable<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        const requestContextPromise = this.requestFactory.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIntegrationTriggerEventUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Observable<Array<FunnelIntegrationTriggerResultDTO>> {
        return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options).pipe(map((apiResponse: HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>) => apiResponse.data));
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFunnelIntegrationUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Observable<void> {
        return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";
export class ObservableLandingPagesApi {
    private requestFactory: LandingPagesApiRequestFactory;
    private responseProcessor: LandingPagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LandingPagesApiRequestFactory,
        responseProcessor?: LandingPagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LandingPagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LandingPagesApiResponseProcessor();
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListLandingPagesResponse>> {
        const requestContextPromise = this.requestFactory.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLandingPagesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListLandingPagesResponse> {
        return this.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLandingPagesResponse>) => apiResponse.data));
    }

}

import { LeadScoreApiRequestFactory, LeadScoreApiResponseProcessor} from "../apis/LeadScoreApi";
export class ObservableLeadScoreApi {
    private requestFactory: LeadScoreApiRequestFactory;
    private responseProcessor: LeadScoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadScoreApiRequestFactory,
        responseProcessor?: LeadScoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadScoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadScoreApiResponseProcessor();
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId contact_id
     */
    public getLeadScoreDetailsUsingGETWithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<LeadScore>> {
        const requestContextPromise = this.requestFactory.getLeadScoreDetailsUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadScoreDetailsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId contact_id
     */
    public getLeadScoreDetailsUsingGET(contactId: string, _options?: Configuration): Observable<LeadScore> {
        return this.getLeadScoreDetailsUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<LeadScore>) => apiResponse.data));
    }

}

import { LeadSourceCategoriesApiRequestFactory, LeadSourceCategoriesApiResponseProcessor} from "../apis/LeadSourceCategoriesApi";
export class ObservableLeadSourceCategoriesApi {
    private requestFactory: LeadSourceCategoriesApiRequestFactory;
    private responseProcessor: LeadSourceCategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourceCategoriesApiRequestFactory,
        responseProcessor?: LeadSourceCategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourceCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourceCategoriesApiResponseProcessor();
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param [createUpdateLeadSourceCategoryRequest] leadSourceCategory
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest, _options?: Configuration): Observable<HttpInfo<LeadSourceCategory>> {
        const requestContextPromise = this.requestFactory.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceCategoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param [createUpdateLeadSourceCategoryRequest] leadSourceCategory
     */
    public createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest, _options?: Configuration): Observable<LeadSourceCategory> {
        return this.createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param categoryId category_id
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteLeadSourceCategoryUsingDELETE(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param categoryId category_id
     */
    public deleteLeadSourceCategoryUsingDELETE(categoryId: string, _options?: Configuration): Observable<void> {
        return this.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param categoryId category_id
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(categoryId: string, _options?: Configuration): Observable<HttpInfo<LeadSourceCategory>> {
        const requestContextPromise = this.requestFactory.getLeadSourceCategoryUsingGET(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceCategoryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param categoryId category_id
     */
    public getLeadSourceCategoryUsingGET(categoryId: string, _options?: Configuration): Observable<LeadSourceCategory> {
        return this.getLeadSourceCategoryUsingGETWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

}

import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor} from "../apis/LeadSourcesApi";
export class ObservableLeadSourcesApi {
    private requestFactory: LeadSourcesApiRequestFactory;
    private responseProcessor: LeadSourcesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeadSourcesApiRequestFactory,
        responseProcessor?: LeadSourcesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeadSourcesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeadSourcesApiResponseProcessor();
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [createLeadSourceRequest] leadsource
     */
    public createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest?: CreateLeadSourceRequest, _options?: Configuration): Observable<HttpInfo<LeadSource>> {
        const requestContextPromise = this.requestFactory.createLeadSourceUsingPOST(createLeadSourceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [createLeadSourceRequest] leadsource
     */
    public createLeadSourceUsingPOST(createLeadSourceRequest?: CreateLeadSourceRequest, _options?: Configuration): Observable<LeadSource> {
        return this.createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListLeadSourcesResponse>> {
        const requestContextPromise = this.requestFactory.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourcesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListLeadSourcesResponse> {
        return this.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourcesResponse>) => apiResponse.data));
    }

}

import { LocaleApiRequestFactory, LocaleApiResponseProcessor} from "../apis/LocaleApi";
export class ObservableLocaleApi {
    private requestFactory: LocaleApiRequestFactory;
    private responseProcessor: LocaleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocaleApiRequestFactory,
        responseProcessor?: LocaleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocaleApiResponseProcessor();
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListCountriesResponse>> {
        const requestContextPromise = this.requestFactory.listCountriesUsingGET2(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCountriesUsingGET2WithHttpInfo(rsp)));
            }));
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2(_options?: Configuration): Observable<ListCountriesResponse> {
        return this.listCountriesUsingGET2WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListCountriesResponse>) => apiResponse.data));
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGETWithHttpInfo(countryCode: string, _options?: Configuration): Observable<HttpInfo<ListProvincesResponse>> {
        const requestContextPromise = this.requestFactory.listProvincesForCountryUsingGET(countryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProvincesForCountryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Observable<ListProvincesResponse> {
        return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options).pipe(map((apiResponse: HttpInfo<ListProvincesResponse>) => apiResponse.data));
    }

}

import { MerchantApiRequestFactory, MerchantApiResponseProcessor} from "../apis/MerchantApi";
export class ObservableMerchantApi {
    private requestFactory: MerchantApiRequestFactory;
    private responseProcessor: MerchantApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MerchantApiRequestFactory,
        responseProcessor?: MerchantApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MerchantApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MerchantApiResponseProcessor();
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListRestMerchantResponse>> {
        const requestContextPromise = this.requestFactory.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMerchantsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListRestMerchantResponse> {
        return this.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListRestMerchantResponse>) => apiResponse.data));
    }

}

import { NoteApiRequestFactory, NoteApiResponseProcessor} from "../apis/NoteApi";
export class ObservableNoteApi {
    private requestFactory: NoteApiRequestFactory;
    private responseProcessor: NoteApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NoteApiRequestFactory,
        responseProcessor?: NoteApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NoteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NoteApiResponseProcessor();
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createNoteCustomFieldUsingPOST1(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1WithHttpInfo(contactId: string, createNoteRequest: CreateNoteRequest, _options?: Configuration): Observable<HttpInfo<Note>> {
        const requestContextPromise = this.requestFactory.createNoteUsingPOST1(contactId, createNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Note.
     * Create a Note
     * @param contactId contact_id
     * @param createNoteRequest request
     */
    public createNoteUsingPOST1(contactId: string, createNoteRequest: CreateNoteRequest, _options?: Configuration): Observable<Note> {
        return this.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest, _options).pipe(map((apiResponse: HttpInfo<Note>) => apiResponse.data));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteNoteUsingDELETE1(contactId, noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteNoteUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Note
     * Delete a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public deleteNoteUsingDELETE1(contactId: string, noteId: string, _options?: Configuration): Observable<void> {
        return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1WithHttpInfo(contactId: string, noteId: string, _options?: Configuration): Observable<HttpInfo<GetNoteResponse>> {
        const requestContextPromise = this.requestFactory.getNoteUsingGET1(contactId, noteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNoteUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Note
     * Retrieve a Note
     * @param contactId contact_id
     * @param noteId note_id
     */
    public getNoteUsingGET1(contactId: string, noteId: string, _options?: Configuration): Observable<GetNoteResponse> {
        return this.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options).pipe(map((apiResponse: HttpInfo<GetNoteResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListNoteTemplateResponse>> {
        const requestContextPromise = this.requestFactory.listNoteTemplatesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNoteTemplatesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListNoteTemplateResponse> {
        return this.listNoteTemplatesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNoteTemplateResponse>) => apiResponse.data));
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
    public listNotesUsingGET1WithHttpInfo(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListNotesResponse>> {
        const requestContextPromise = this.requestFactory.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNotesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listNotesUsingGET1(contactId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListNotesResponse> {
        return this.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNotesResponse>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveNoteModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveNoteModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveNoteModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCHWithHttpInfo(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<UpdateNoteResponse>> {
        const requestContextPromise = this.requestFactory.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNoteUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Note for a Contact
     * Update a Note
     * @param contactId contact_id
     * @param noteId note_id
     * @param updateNoteRequest updateNoteRequest
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNoteUsingPATCH(contactId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, updateMask?: Array<string>, _options?: Configuration): Observable<UpdateNoteResponse> {
        return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<UpdateNoteResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNotesCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor} from "../apis/OpportunityApi";
export class ObservableOpportunityApi {
    private requestFactory: OpportunityApiRequestFactory;
    private responseProcessor: OpportunityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OpportunityApiRequestFactory,
        responseProcessor?: OpportunityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpportunityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpportunityApiResponseProcessor();
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.createOpportunityStageUsingPOST(createOpportunityStageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityStageUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOST(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest?: CreateOpportunityRequest, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.createOpportunityUsingPOST1(createOpportunityRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1(createOpportunityRequest?: CreateOpportunityRequest, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOpportunityStageUsingDELETE(stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityStageUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Observable<void> {
        return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOpportunityUsingDELETE(opportunityId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Observable<void> {
        return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.getOpportunityStageUsingGET(stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityStageUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.getOpportunityStageUsingGETWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.getOpportunityUsingGET1(opportunityId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
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
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOpportunitiesResponse>> {
        const requestContextPromise = this.requestFactory.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunitiesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOpportunitiesResponse> {
        return this.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunitiesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOpportunityStagesResponse>> {
        const requestContextPromise = this.requestFactory.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunityStagesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOpportunityStagesResponse> {
        return this.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunityStagesResponse>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityStageUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCH(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param patchOpportunityRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, patchOpportunityRequest: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param patchOpportunityRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, patchOpportunityRequest: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, patchOpportunityRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

}

import { OrderTotalDiscountApiRequestFactory, OrderTotalDiscountApiResponseProcessor} from "../apis/OrderTotalDiscountApi";
export class ObservableOrderTotalDiscountApi {
    private requestFactory: OrderTotalDiscountApiRequestFactory;
    private responseProcessor: OrderTotalDiscountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderTotalDiscountApiRequestFactory,
        responseProcessor?: OrderTotalDiscountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderTotalDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderTotalDiscountApiResponseProcessor();
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderTotalDiscountUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderTotalDiscountUsingDELETE(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETE(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.getOrderTotalDiscountUsingGET(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderTotalDiscountUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGET(discountId: string, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.getOrderTotalDiscountUsingGETWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderTotalDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrderTotalDiscountsResponse> {
        return this.listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderTotalDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderTotalDiscountUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCH(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

}

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class ObservableOrdersApi {
    private requestFactory: OrdersApiRequestFactory;
    private responseProcessor: OrdersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrdersApiResponseProcessor();
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createOrderCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Observable<HttpInfo<RestV2OrderItem>> {
        const requestContextPromise = this.requestFactory.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderItemsOnOrderUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Observable<RestV2OrderItem> {
        return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2OrderItem>) => apiResponse.data));
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param restCreateOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1WithHttpInfo(restCreateOrderRequest: RestCreateOrderRequest, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.createOrderUsingPOST1(restCreateOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param restCreateOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1(restCreateOrderRequest: RestCreateOrderRequest, _options?: Configuration): Observable<RestV2Order> {
        return this.createOrderUsingPOST1WithHttpInfo(restCreateOrderRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param orderId order_id
     * @param createPaymentRequest createPaymentRequest
     */
    public createPaymentOnOrderUsingPOST1WithHttpInfo(orderId: string, createPaymentRequest: CreatePaymentRequest, _options?: Configuration): Observable<HttpInfo<PaymentResult>> {
        const requestContextPromise = this.requestFactory.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentOnOrderUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * Create a Payment
     * @param orderId order_id
     * @param createPaymentRequest createPaymentRequest
     */
    public createPaymentOnOrderUsingPOST1(orderId: string, createPaymentRequest: CreatePaymentRequest, _options?: Configuration): Observable<PaymentResult> {
        return this.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest, _options).pipe(map((apiResponse: HttpInfo<PaymentResult>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderCustomFieldUsingDELETE(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1WithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderUsingDELETE1(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1WithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.getOrderUsingGET1(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1(orderId: string, _options?: Configuration): Observable<RestV2Order> {
        return this.getOrderUsingGET1WithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param orderId order_id
     * @param [filter] Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPaymentsUsingGET1WithHttpInfo(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrderPaymentsResponse>> {
        const requestContextPromise = this.requestFactory.listOrderPaymentsUsingGET1(orderId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderPaymentsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param orderId order_id
     * @param [filter] Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPaymentsUsingGET1(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrderPaymentsResponse> {
        return this.listOrderPaymentsUsingGET1WithHttpInfo(orderId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderPaymentsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrders>> {
        const requestContextPromise = this.requestFactory.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrders> {
        return this.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrders>) => apiResponse.data));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [restV2PatchOrderRequest] order
     */
    public patchOrderUsingPATCHWithHttpInfo(orderId: string, updateMask?: Array<string>, restV2PatchOrderRequest?: RestV2PatchOrderRequest, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.patchOrderUsingPATCH(orderId, updateMask, restV2PatchOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchOrderUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [restV2PatchOrderRequest] order
     */
    public patchOrderUsingPATCH(orderId: string, updateMask?: Array<string>, restV2PatchOrderRequest?: RestV2PatchOrderRequest, _options?: Configuration): Observable<RestV2Order> {
        return this.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, restV2PatchOrderRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModelUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor} from "../apis/PaymentMethodConfigApi";
export class ObservablePaymentMethodConfigApi {
    private requestFactory: PaymentMethodConfigApiRequestFactory;
    private responseProcessor: PaymentMethodConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentMethodConfigApiRequestFactory,
        responseProcessor?: PaymentMethodConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentMethodConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentMethodConfigApiResponseProcessor();
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: Configuration): Observable<HttpInfo<PaymentMethodConfig>> {
        const requestContextPromise = this.requestFactory.createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentMethodConfigUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates configuration details for rendering payment method components
     * Create Payment Method Configuration
     * @param createPaymentMethodConfigRequest request
     */
    public createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest: CreatePaymentMethodConfigRequest, _options?: Configuration): Observable<PaymentMethodConfig> {
        return this.createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest, _options).pipe(map((apiResponse: HttpInfo<PaymentMethodConfig>) => apiResponse.data));
    }

}

import { PreReleaseApiRequestFactory, PreReleaseApiResponseProcessor} from "../apis/PreReleaseApi";
export class ObservablePreReleaseApi {
    private requestFactory: PreReleaseApiRequestFactory;
    private responseProcessor: PreReleaseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PreReleaseApiRequestFactory,
        responseProcessor?: PreReleaseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PreReleaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PreReleaseApiResponseProcessor();
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOSTWithHttpInfo(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAffiliateToProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns an Affiliate to Commission Program
     * Assign Affiliate to Commission program
     * @param id id
     * @param affiliateAddToProgramRequest affiliateAddToProgramRequest
     */
    public addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Observable<void> {
        return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.addCommissionProgramUsingPOST(createCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Affiliate Commission Program
     * Create an Affiliate Commission Program
     * @param [createCommissionProgramRequest] Commission Program to insert
     */
    public addCommissionProgramUsingPOST(createCommissionProgramRequest?: CreateCommissionProgramRequest, _options?: Configuration): Observable<AffiliateCommissionProgramResponse> {
        return this.addCommissionProgramUsingPOSTWithHttpInfo(createCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventoryUsingPOSTWithHttpInfo(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.adjustInventoryUsingPOST(productId, updateProductInventoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adjustInventoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventoryUsingPOST(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: Configuration): Observable<RestV2Product> {
        return this.adjustInventoryUsingPOSTWithHttpInfo(productId, updateProductInventoryRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<ProductCommissionProgram>> {
        const requestContextPromise = this.requestFactory.assignProductCommissionProgramUsingPOST(commissionProgramId, createProductCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignProductCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Product Commission Program to a Product
     * Assign a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createProductCommissionProgramRequest] Product Commission Program
     */
    public assignProductCommissionProgramUsingPOST(commissionProgramId: string, createProductCommissionProgramRequest?: CreateProductCommissionProgramRequest, _options?: Configuration): Observable<ProductCommissionProgram> {
        return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const requestContextPromise = this.requestFactory.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, createSubscriptionCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assigns a Subscription Commission Program to a Subscription
     * Assign a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createSubscriptionCommissionProgramRequest] Subscription Commission Program
     */
    public assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, createSubscriptionCommissionProgramRequest?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<SubscriptionCommissionProgram> {
        return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSubscriptionUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Observable<void> {
        return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest customField
     */
    public createAffiliateCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createAffiliateCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAffiliateCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Custom Field
     * Create an Affiliate Custom Field
     * @param createCustomFieldRequest customField
     */
    public createAffiliateCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createAffiliateCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultCommissionProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Default Commission Program
     * Create a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     */
    public createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Observable<SetDefaultCommissionProgramResponse> {
        return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param createUpdateDiscountRequest request
     */
    public createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest: CreateUpdateDiscountRequest, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.createDiscountUsingPOST(createUpdateDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Category Discount.
     * Create a Category Discount
     * @param createUpdateDiscountRequest request
     */
    public createDiscountUsingPOST(createUpdateDiscountRequest: CreateUpdateDiscountRequest, _options?: Configuration): Observable<CategoryDiscount> {
        return this.createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.createDiscountUsingPOST1(createShippingDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST1(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: Configuration): Observable<ShippingDiscount> {
        return this.createDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param createFileRequest request
     */
    public createFileUsingPOST1WithHttpInfo(createFileRequest: CreateFileRequest, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.createFileUsingPOST1(createFileRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFileUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a file and uploads it
     * Create a file
     * @param createFileRequest request
     */
    public createFileUsingPOST1(createFileRequest: CreateFileRequest, _options?: Configuration): Observable<FileMetadata> {
        return this.createFileUsingPOST1WithHttpInfo(createFileRequest, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFunnelIntegrationUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * Create Funnel Integrations into the app.
     * @param createFunnelIntegrationRequest createFunnelIntegrationRequest
     */
    public createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Observable<void> {
        return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Observable<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>> {
        const requestContextPromise = this.requestFactory.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIntegrationTriggerEventUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     */
    public createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Observable<Array<FunnelIntegrationTriggerResultDTO>> {
        return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options).pipe(map((apiResponse: HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>) => apiResponse.data));
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param [createUpdateLeadSourceCategoryRequest] leadSourceCategory
     */
    public createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest, _options?: Configuration): Observable<HttpInfo<LeadSourceCategory>> {
        const requestContextPromise = this.requestFactory.createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceCategoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Lead Source Category.
     * Create a Lead Source Category
     * @param [createUpdateLeadSourceCategoryRequest] leadSourceCategory
     */
    public createLeadSourceCategoryUsingPOST(createUpdateLeadSourceCategoryRequest?: CreateUpdateLeadSourceCategoryRequest, _options?: Configuration): Observable<LeadSourceCategory> {
        return this.createLeadSourceCategoryUsingPOSTWithHttpInfo(createUpdateLeadSourceCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [createLeadSourceRequest] leadsource
     */
    public createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest?: CreateLeadSourceRequest, _options?: Configuration): Observable<HttpInfo<LeadSource>> {
        const requestContextPromise = this.requestFactory.createLeadSourceUsingPOST(createLeadSourceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLeadSourceUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Lead Source
     * Create a Lead Source
     * @param [createLeadSourceRequest] leadsource
     */
    public createLeadSourceUsingPOST(createLeadSourceRequest?: CreateLeadSourceRequest, _options?: Configuration): Observable<LeadSource> {
        return this.createLeadSourceUsingPOSTWithHttpInfo(createLeadSourceRequest, _options).pipe(map((apiResponse: HttpInfo<LeadSource>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createNoteCustomFieldUsingPOST1(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNoteCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Note object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createNoteCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createNoteCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Opportunity object.
     * Create an Opportunity Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOpportunityCustomFieldsUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.createOpportunityStageUsingPOST(createOpportunityStageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityStageUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Opportunity Stage
     * Create an Opportunity Stage
     * @param [createOpportunityStageRequest] opportunity
     */
    public createOpportunityStageUsingPOST(createOpportunityStageRequest?: CreateOpportunityStageRequest, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.createOpportunityStageUsingPOSTWithHttpInfo(createOpportunityStageRequest, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest?: CreateOpportunityRequest, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.createOpportunityUsingPOST1(createOpportunityRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpportunityUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new opportunity as the authenticated user.
     * Create an Opportunity
     * @param [createOpportunityRequest] opportunity
     */
    public createOpportunityUsingPOST1(createOpportunityRequest?: CreateOpportunityRequest, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.createOpportunityUsingPOST1WithHttpInfo(createOpportunityRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createOrderCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Order object.
     * Create an Order\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createOrderCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createOrderCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Observable<HttpInfo<RestV2OrderItem>> {
        const requestContextPromise = this.requestFactory.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderItemsOnOrderUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order item on an existing order.
     * Create an Order Item
     * @param orderId order_id
     * @param createRestOrderItemRequest createRestOrderItemRequest
     */
    public createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Observable<RestV2OrderItem> {
        return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2OrderItem>) => apiResponse.data));
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderTotalDiscountUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an Order Total Discount
     * Create an Order Total Discount
     * @param createOrderTotalDiscountRequest request
     */
    public createOrderTotalDiscountUsingPOST(createOrderTotalDiscountRequest: CreateOrderTotalDiscountRequest, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.createOrderTotalDiscountUsingPOSTWithHttpInfo(createOrderTotalDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param restCreateOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1WithHttpInfo(restCreateOrderRequest: RestCreateOrderRequest, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.createOrderUsingPOST1(restCreateOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a one time Order with Order items.
     * Create an Order
     * @param restCreateOrderRequest createOrderRequest
     */
    public createOrderUsingPOST1(restCreateOrderRequest: RestCreateOrderRequest, _options?: Configuration): Observable<RestV2Order> {
        return this.createOrderUsingPOST1WithHttpInfo(restCreateOrderRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProductUsingPOST1WithHttpInfo(createProductRequest: CreateProductRequest, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.createProductUsingPOST1(createProductRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProductUsingPOST1(createProductRequest: CreateProductRequest, _options?: Configuration): Observable<RestV2Product> {
        return this.createProductUsingPOST1WithHttpInfo(createProductRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrPatchAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOSTWithHttpInfo(createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRedirectLinkUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a single Affiliate Link
     * Create an Affiliate Link
     * @param createOrPatchAffiliateLinkRequest request
     */
    public createRedirectLinkUsingPOST(createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<AffiliateLink> {
        return this.createRedirectLinkUsingPOSTWithHttpInfo(createOrPatchAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest request
     */
    public createReferralUsingPOSTWithHttpInfo(createReferralRequest: CreateReferralRequest, _options?: Configuration): Observable<HttpInfo<Referral>> {
        const requestContextPromise = this.requestFactory.createReferralUsingPOST(createReferralRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReferralUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest request
     */
    public createReferralUsingPOST(createReferralRequest: CreateReferralRequest, _options?: Configuration): Observable<Referral> {
        return this.createReferralUsingPOSTWithHttpInfo(createReferralRequest, _options).pipe(map((apiResponse: HttpInfo<Referral>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CreateCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.createTaskCustomFieldUsingPOST1(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CreateCustomFieldResponse> {
        return this.createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1WithHttpInfo(createTaskRequest?: CreateTaskRequest, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.createTaskUsingPOST1(createTaskRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1(createTaskRequest?: CreateTaskRequest, _options?: Configuration): Observable<Task> {
        return this.createTaskUsingPOST1WithHttpInfo(createTaskRequest, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [createUserRequestV2] user
     */
    public createUserUsingPOST1WithHttpInfo(createUserRequestV2?: CreateUserRequestV2, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.createUserUsingPOST1(createUserRequestV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [createUserRequestV2] user
     */
    public createUserUsingPOST1(createUserRequestV2?: CreateUserRequestV2, _options?: Configuration): Observable<User> {
        return this.createUserUsingPOST1WithHttpInfo(createUserRequestV2, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Commission Program
     * Delete a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: Configuration): Observable<void> {
        return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETEWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAffiliateUsingDELETE(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAffiliateUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Affiliate
     * Delete Affiliate
     * @param id id
     */
    public deleteAffiliateUsingDELETE(id: string, _options?: Configuration): Observable<void> {
        return this.deleteAffiliateUsingDELETEWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Category Discount
     * Delete a Category Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE1(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Free Trial Discount
     * Delete a Free Trial Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE1(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE2(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETE2WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1WithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFileUsingDELETE1(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified file
     * Delete a file
     * @param fileId file_id
     */
    public deleteFileUsingDELETE1(fileId: string, _options?: Configuration): Observable<void> {
        return this.deleteFileUsingDELETE1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFunnelIntegrationUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * Deletes Funnel Integrations from the app.
     * @param deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     */
    public deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Observable<void> {
        return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param categoryId category_id
     */
    public deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteLeadSourceCategoryUsingDELETE(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Lead Source Category.
     * Delete a Lead Source Category
     * @param categoryId category_id
     */
    public deleteLeadSourceCategoryUsingDELETE(categoryId: string, _options?: Configuration): Observable<void> {
        return this.deleteLeadSourceCategoryUsingDELETEWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETEWithHttpInfo(stageId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOpportunityStageUsingDELETE(stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityStageUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity Stage
     * Delete an Opportunity Stage
     * @param stageId stage_id
     */
    public deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Observable<void> {
        return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETEWithHttpInfo(opportunityId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOpportunityUsingDELETE(opportunityId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOpportunityUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Opportunity
     * Delete an Opportunity
     * @param opportunityId opportunity_id
     */
    public deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Observable<void> {
        return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderCustomFieldUsingDELETE(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from Order.
     * Delete an Order\'s Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteOrderCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderTotalDiscountUsingDELETE(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Order Total Discount
     * Delete an Order Total Discount
     * @param discountId discount_id
     */
    public deleteOrderTotalDiscountUsingDELETE(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1WithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderUsingDELETE1(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * Delete an Order
     * @param orderId order_id
     */
    public deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Observable<void> {
        return this.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductUsingDELETE1WithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProductUsingDELETE1(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductUsingDELETE1(productId: string, _options?: Configuration): Observable<void> {
        return this.deleteProductUsingDELETE1WithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteRedirectLinkUsingDELETE(redirectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRedirectLinkUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an Affiliate Link
     * Delete an Affiliate Link
     * @param redirectId redirect_id
     */
    public deleteRedirectLinkUsingDELETE(redirectId: string, _options?: Configuration): Observable<void> {
        return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Observable<void> {
        return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTaskUsingDELETE1(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Observable<void> {
        return this.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId: string, _options?: Configuration): Observable<HttpInfo<AffiliateCommissionEarned>> {
        const requestContextPromise = this.requestFactory.getAffiliateCommissionTotalUsingGET(affiliateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionTotalUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * @param affiliateId affiliate_id
     */
    public getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: Configuration): Observable<AffiliateCommissionEarned> {
        return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options).pipe(map((apiResponse: HttpInfo<AffiliateCommissionEarned>) => apiResponse.data));
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
    public getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateCommissionResponse>> {
        const requestContextPromise = this.requestFactory.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCommissionsUsingGETWithHttpInfo(rsp)));
            }));
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
    public getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateCommissionResponse> {
        return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.getAffiliateCustomFieldsUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAffiliateCustomFieldsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields and optional properties for the Affiliate object
     * Retrieve Affiliate Model
     */
    public getAffiliateCustomFieldsUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGETWithHttpInfo(commissionProgramId: string, _options?: Configuration): Observable<HttpInfo<AffiliateProgramV2>> {
        const requestContextPromise = this.requestFactory.getCommissionProgramUsingGET(commissionProgramId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommissionProgramUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Commission Program
     * Retrieve a Commission Program
     * @param commissionProgramId commission_program_id
     */
    public getCommissionProgramUsingGET(commissionProgramId: string, _options?: Configuration): Observable<AffiliateProgramV2> {
        return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options).pipe(map((apiResponse: HttpInfo<AffiliateProgramV2>) => apiResponse.data));
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGETWithHttpInfo(searchParam: string, _options?: Configuration): Observable<HttpInfo<ListBasicContactResponse>> {
        const requestContextPromise = this.requestFactory.getContactsBySearchTermUsingGET(searchParam, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactsBySearchTermUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of Contacts based search parameters.
     * Search for Contacts
     * @param searchParam searchParam
     */
    public getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Observable<ListBasicContactResponse> {
        return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options).pipe(map((apiResponse: HttpInfo<ListBasicContactResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.getDiscountUsingGET(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Category Discount
     * Retrieve a Category Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET(discountId: string, _options?: Configuration): Observable<CategoryDiscount> {
        return this.getDiscountUsingGETWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.getDiscountUsingGET1(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1(discountId: string, _options?: Configuration): Observable<ShippingDiscount> {
        return this.getDiscountUsingGET1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGETWithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getFileDataUsingGET(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileDataUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file\'s data
     * Retrieve a file\'s data
     * @param fileId file_id
     */
    public getFileDataUsingGET(fileId: string, _options?: Configuration): Observable<string> {
        return this.getFileDataUsingGETWithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1WithHttpInfo(fileId: string, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.getFileUsingGET1(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a file
     * Retrieve a file
     * @param fileId file_id
     */
    public getFileUsingGET1(fileId: string, _options?: Configuration): Observable<FileMetadata> {
        return this.getFileUsingGET1WithHttpInfo(fileId, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId contact_id
     */
    public getLeadScoreDetailsUsingGETWithHttpInfo(contactId: string, _options?: Configuration): Observable<HttpInfo<LeadScore>> {
        const requestContextPromise = this.requestFactory.getLeadScoreDetailsUsingGET(contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadScoreDetailsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the Lead Score of a Contact
     * Retrieve Lead Score of a Contact
     * @param contactId contact_id
     */
    public getLeadScoreDetailsUsingGET(contactId: string, _options?: Configuration): Observable<LeadScore> {
        return this.getLeadScoreDetailsUsingGETWithHttpInfo(contactId, _options).pipe(map((apiResponse: HttpInfo<LeadScore>) => apiResponse.data));
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param categoryId category_id
     */
    public getLeadSourceCategoryUsingGETWithHttpInfo(categoryId: string, _options?: Configuration): Observable<HttpInfo<LeadSourceCategory>> {
        const requestContextPromise = this.requestFactory.getLeadSourceCategoryUsingGET(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLeadSourceCategoryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Lead Source Category for a given id
     * Retrieve a Lead Source Category
     * @param categoryId category_id
     */
    public getLeadSourceCategoryUsingGET(categoryId: string, _options?: Configuration): Observable<LeadSourceCategory> {
        return this.getLeadSourceCategoryUsingGETWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<LeadSourceCategory>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGETWithHttpInfo(stageId: string, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.getOpportunityStageUsingGET(stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityStageUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity Stage
     * Retrieve an Opportunity Stage
     * @param stageId stage_id
     */
    public getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.getOpportunityStageUsingGETWithHttpInfo(stageId, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1WithHttpInfo(opportunityId: string, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.getOpportunityUsingGET1(opportunityId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpportunityUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified Opportunity
     * Retrieve a Opportunity
     * @param opportunityId opportunity_id
     */
    public getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGETWithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.getOrderTotalDiscountUsingGET(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderTotalDiscountUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an Order Total Discount
     * Retrieve an Order Total Discount
     * @param discountId discount_id
     */
    public getOrderTotalDiscountUsingGET(discountId: string, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.getOrderTotalDiscountUsingGETWithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1WithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.getOrderUsingGET1(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single Order for a given order id
     * Retrieve an Order
     * @param orderId order_id
     */
    public getOrderUsingGET1(orderId: string, _options?: Configuration): Observable<RestV2Order> {
        return this.getOrderUsingGET1WithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductUsingGETWithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.getProductUsingGET(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductUsingGET(productId: string, _options?: Configuration): Observable<RestV2Product> {
        return this.getProductUsingGETWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGETWithHttpInfo(redirectId: string, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.getRedirectLinkUsingGET(redirectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRedirectLinkUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a single Affiliate Link
     * Retrieve an Affiliate Link
     * @param redirectId redirect_id
     */
    public getRedirectLinkUsingGET(redirectId: string, _options?: Configuration): Observable<AffiliateLink> {
        return this.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.getTaskUsingGET1(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: Configuration): Observable<Task> {
        return this.getTaskUsingGET1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGETWithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.getUserByIdUsingGET(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserByIdUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGET(userId: string, _options?: Configuration): Observable<User> {
        return this.getUserByIdUsingGETWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetUserInfoResponse>> {
        const requestContextPromise = this.requestFactory.getUserInfoUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserInfoUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1(_options?: Configuration): Observable<GetUserInfoResponse> {
        return this.getUserInfoUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetUserInfoResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1WithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getUserSignatureUsingGET1(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSignatureUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1(userId: string, _options?: Configuration): Observable<string> {
        return this.getUserSignatureUsingGET1WithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateCommissionProgramsResponse>> {
        const requestContextPromise = this.requestFactory.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateCommissionProgramsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Commission Programs
     * List Affiliate Commission Programs
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateCommissionProgramsResponse> {
        return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateCommissionProgramsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateLinksResponse>> {
        const requestContextPromise = this.requestFactory.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAffiliateLinksUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Affiliate Links
     * List Affiliate Links
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateLinksResponse> {
        return this.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateLinksResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListCategoryDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listCategoryDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoryDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of Category Discounts.
     * List Category Discounts
     * @param [filter] Filter to apply, the allowed field is: - (String) product_category_id You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of the filter with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_category_id%3D%3D4&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - name One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listCategoryDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListCategoryDiscountsResponse> {
        return this.listCategoryDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListCategoryDiscountsResponse>) => apiResponse.data));
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListCountriesResponse>> {
        const requestContextPromise = this.requestFactory.listCountriesUsingGET2(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCountriesUsingGET2WithHttpInfo(rsp)));
            }));
    }

    /**
     * List Countries
     */
    public listCountriesUsingGET2(_options?: Configuration): Observable<ListCountriesResponse> {
        return this.listCountriesUsingGET2WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListCountriesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param [fields] TODO: PAPI-1449
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGETWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListShippingDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listDiscountsUsingGET(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param [fields] TODO: PAPI-1449
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListShippingDiscountsResponse> {
        return this.listDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListShippingDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves all files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListFilesResponse>> {
        const requestContextPromise = this.requestFactory.listFilesUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFilesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all files
     * List all files
     * @param [filter] Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;category%3D%3DATTACHMENTS&#x60; - &#x60;filter&#x3D;file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listFilesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListFilesResponse> {
        return this.listFilesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListFilesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListLandingPagesResponse>> {
        const requestContextPromise = this.requestFactory.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLandingPagesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of all landing pages
     * List Landing Pages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListLandingPagesResponse> {
        return this.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLandingPagesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListLeadSourcesResponse>> {
        const requestContextPromise = this.requestFactory.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLeadSourcesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of lead sources
     * List Lead Sources
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListLeadSourcesResponse> {
        return this.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListLeadSourcesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListRestMerchantResponse>> {
        const requestContextPromise = this.requestFactory.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMerchantsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Merchant accounts
     * List Merchant accounts
     * @param [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListRestMerchantResponse> {
        return this.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListRestMerchantResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListNoteTemplateResponse>> {
        const requestContextPromise = this.requestFactory.listNoteTemplatesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNoteTemplatesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Note Templates
     * Retrieve Note Templates
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listNoteTemplatesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListNoteTemplateResponse> {
        return this.listNoteTemplatesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListNoteTemplateResponse>) => apiResponse.data));
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
    public listOpportunitiesUsingGET1WithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOpportunitiesResponse>> {
        const requestContextPromise = this.requestFactory.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunitiesUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOpportunitiesResponse> {
        return this.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunitiesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOpportunityStagesResponse>> {
        const requestContextPromise = this.requestFactory.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOpportunityStagesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Opportunity Stages.
     * List of Opportunity Stages
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOpportunityStagesResponse> {
        return this.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOpportunityStagesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param orderId order_id
     * @param [filter] Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPaymentsUsingGET1WithHttpInfo(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrderPaymentsResponse>> {
        const requestContextPromise = this.requestFactory.listOrderPaymentsUsingGET1(orderId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderPaymentsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of payments made against a given order, including historical or external payments of cash or credit card.
     * Retrieve Order Payments
     * @param orderId order_id
     * @param [filter] Filter to apply, allowed fields are: - (String) invoice_id - (String) payment_id - (String) amount - (String) pay_status - (Boolean) skip_commission  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;payment_id%3D%3D123&#x60; - &#x60;filter&#x3D;pay_status%3D%3DAPPROVED&#x60; - &#x60;filter&#x3D;invoice_id%3D%3D456%3Bskip_commission&#x3D;true&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - invoice_id - payment_id - amount - pay_time - pay_status - skip_commission - last_updated_time One of the following directions: - asc - desc 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderPaymentsUsingGET1(orderId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrderPaymentsResponse> {
        return this.listOrderPaymentsUsingGET1WithHttpInfo(orderId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderPaymentsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrderTotalDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listOrderTotalDiscountsUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrderTotalDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all Order Total Discounts
     * List all Order Total Discounts
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;applyToCommissions%3D%3DTrue&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrderTotalDiscountsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrderTotalDiscountsResponse> {
        return this.listOrderTotalDiscountsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrderTotalDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListOrders>> {
        const requestContextPromise = this.requestFactory.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of orders
     * List orders
     * @param [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;product_id%3D%3D123&#x60; - &#x60;filter&#x3D;contact_id%3D%3D567&#x60; - &#x60;filter&#x3D;product_id%3D%3D123%3Bcontact_id%3D%3D567&#x60;
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListOrders> {
        return this.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListOrders>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListProductsResponse>> {
        const requestContextPromise = this.requestFactory.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListProductsResponse> {
        return this.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductsResponse>) => apiResponse.data));
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGETWithHttpInfo(countryCode: string, _options?: Configuration): Observable<HttpInfo<ListProvincesResponse>> {
        const requestContextPromise = this.requestFactory.listProvincesForCountryUsingGET(countryCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProvincesForCountryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * List a Country\'s Provinces
     * @param countryCode country_code
     */
    public listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Observable<ListProvincesResponse> {
        return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options).pipe(map((apiResponse: HttpInfo<ListProvincesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListRestShippingMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listShippingMethodsUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShippingMethodsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGET(_options?: Configuration): Observable<ListRestShippingMethodsResponse> {
        return this.listShippingMethodsUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListRestShippingMethodsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListSubscriptionPlansResponse>> {
        const requestContextPromise = this.requestFactory.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionPlansUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListSubscriptionPlansResponse> {
        return this.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionPlansResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListSubscriptionsResponse>> {
        const requestContextPromise = this.requestFactory.listSubscriptionsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListSubscriptionsResponse> {
        return this.listSubscriptionsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListAffiliateSummariesResponse>> {
        const requestContextPromise = this.requestFactory.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSummariesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of Affiliate Summaries
     * List Affiliate Summaries
     * @param [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched  word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples:  - &#x60;filter&#x3D;since_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;until_time%3D%3D2024-09-17T-15:50+00&#x60;  - &#x60;filter&#x3D;affiliate_ids%3D%3D123,456,789&#x60; 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListAffiliateSummariesResponse> {
        return this.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListAffiliateSummariesResponse>) => apiResponse.data));
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
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Observable<HttpInfo<ListTasksResponse>> {
        const requestContextPromise = this.requestFactory.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTasksUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Observable<ListTasksResponse> {
        return this.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options).pipe(map((apiResponse: HttpInfo<ListTasksResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, _options?: Configuration): Observable<HttpInfo<ListUserResponse>> {
        const requestContextPromise = this.requestFactory.listUsersUsingGET1(filter, orderBy, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsersUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Observable<ListUserResponse> {
        return this.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options).pipe(map((apiResponse: HttpInfo<ListUserResponse>) => apiResponse.data));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SetDefaultCommissionProgramResponse>> {
        const requestContextPromise = this.requestFactory.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Default Commission Program
     * Update a Default Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     */
    public patchDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Observable<SetDefaultCommissionProgramResponse> {
        return this.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SetDefaultCommissionProgramResponse>) => apiResponse.data));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [restV2PatchOrderRequest] order
     */
    public patchOrderUsingPATCHWithHttpInfo(orderId: string, updateMask?: Array<string>, restV2PatchOrderRequest?: RestV2PatchOrderRequest, _options?: Configuration): Observable<HttpInfo<RestV2Order>> {
        const requestContextPromise = this.requestFactory.patchOrderUsingPATCH(orderId, updateMask, restV2PatchOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchOrderUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order
     * Update an Order
     * @param orderId order_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [restV2PatchOrderRequest] order
     */
    public patchOrderUsingPATCH(orderId: string, updateMask?: Array<string>, restV2PatchOrderRequest?: RestV2PatchOrderRequest, _options?: Configuration): Observable<RestV2Order> {
        return this.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, restV2PatchOrderRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Order>) => apiResponse.data));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<ProductCommissionProgram>> {
        const requestContextPromise = this.requestFactory.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchProductCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Product Commission Program
     * Update a Product Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchProductCommissionProgramRequest] Values of the product Commission Program
     */
    public patchProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Observable<ProductCommissionProgram> {
        return this.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<ProductCommissionProgram>) => apiResponse.data));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionCommissionProgram>> {
        const requestContextPromise = this.requestFactory.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Subscription Commission Program
     * Update a Subscription Commission Program
     * @param commissionProgramId commission_program_id
     * @param [updateMask] update_mask
     * @param [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     */
    public patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Observable<SubscriptionCommissionProgram> {
        return this.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionCommissionProgram>) => apiResponse.data));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchTaskRequest] task
     */
    public patchTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, createPatchTaskRequest?: CreatePatchTaskRequest, _options?: Configuration): Observable<HttpInfo<UpdateTaskResponse>> {
        const requestContextPromise = this.requestFactory.patchTaskUsingPATCH(taskId, updateMask, createPatchTaskRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchTaskUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchTaskRequest] task
     */
    public patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, createPatchTaskRequest?: CreatePatchTaskRequest, _options?: Configuration): Observable<UpdateTaskResponse> {
        return this.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, createPatchTaskRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTaskResponse>) => apiResponse.data));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchUserRequestV2] user
     */
    public patchUserUsingPATCHWithHttpInfo(userId: string, updateMask?: Array<string>, patchUserRequestV2?: PatchUserRequestV2, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.patchUserUsingPATCH(userId, updateMask, patchUserRequestV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchUserUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchUserRequestV2] user
     */
    public patchUserUsingPATCH(userId: string, updateMask?: Array<string>, patchUserRequestV2?: PatchUserRequestV2, _options?: Configuration): Observable<User> {
        return this.patchUserUsingPATCHWithHttpInfo(userId, updateMask, patchUserRequestV2, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOSTWithHttpInfo(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeAffiliateFromProgramUsingPOST(id, affiliateRemoveFromProgramRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAffiliateFromProgramUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an Affiliate from a Commission Program
     * Remove an Affiliate from a Commission Program
     * @param id id
     * @param affiliateRemoveFromProgramRequest removeFromProgramRequest
     */
    public removeAffiliateFromProgramUsingPOST(id: string, affiliateRemoveFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Observable<void> {
        return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, affiliateRemoveFromProgramRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Subscription from a Commission Program
     * Remove a Subscription from a Commission Program
     * @param commissionId commission_id
     * @param deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     */
    public removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Observable<void> {
        return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveNoteModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveNoteModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom fields for the Note object
     * Retrieve Note Model
     */
    public retrieveNoteModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveNoteModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveOrderCustomFieldModelUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom field\'s model for the Order object
     * Retrieve an Order\'s Custom Field Model
     */
    public retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModelUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveTaskModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveTaskModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveTaskModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateAffiliateCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Affiliate object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateAffiliateCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param discountId discount_id
     * @param createUpdateDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCHWithHttpInfo(discountId: string, createUpdateDiscountRequest: CreateUpdateDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CategoryDiscount>> {
        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Category Discount.
     * Update a Category Discount
     * @param discountId discount_id
     * @param createUpdateDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH(discountId: string, createUpdateDiscountRequest: CreateUpdateDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CategoryDiscount> {
        return this.updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CategoryDiscount>) => apiResponse.data));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1WithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCH1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<ShippingDiscount> {
        return this.updateDiscountUsingPATCH1WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Updates a file
     * Update a file
     * @param fileId file_id
     * @param updateFileRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFileUsingPATCHWithHttpInfo(fileId: string, updateFileRequest: UpdateFileRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<FileMetadata>> {
        const requestContextPromise = this.requestFactory.updateFileUsingPATCH(fileId, updateFileRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFileUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a file
     * Update a file
     * @param fileId file_id
     * @param updateFileRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateFileUsingPATCH(fileId: string, updateFileRequest: UpdateFileRequest, updateMask?: Array<string>, _options?: Configuration): Observable<FileMetadata> {
        return this.updateFileUsingPATCHWithHttpInfo(fileId, updateFileRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<FileMetadata>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateNotesCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNotesCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Note object.
     * Update a Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateNotesCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateOpportunityCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Opportunity object.
     * Update a Opportunity\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCHWithHttpInfo(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<RestOpportunityStage>> {
        const requestContextPromise = this.requestFactory.updateOpportunityStageUsingPATCH(stageId, updateOpportunityStageRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityStageUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given Opportunity Stage
     * Update an Opportunity Stage
     * @param stageId stage_id
     * @param updateOpportunityStageRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityStageUsingPATCH(stageId: string, updateOpportunityStageRequest: UpdateOpportunityStageRequest, updateMask?: Array<string>, _options?: Configuration): Observable<RestOpportunityStage> {
        return this.updateOpportunityStageUsingPATCHWithHttpInfo(stageId, updateOpportunityStageRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestOpportunityStage>) => apiResponse.data));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param patchOpportunityRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCHWithHttpInfo(opportunityId: string, patchOpportunityRequest: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<RestV2Opportunity>> {
        const requestContextPromise = this.requestFactory.updateOpportunityUsingPATCH(opportunityId, patchOpportunityRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOpportunityUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates specified values of a given opportunity
     * Update an opportunity
     * @param opportunityId opportunity_id
     * @param patchOpportunityRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOpportunityUsingPATCH(opportunityId: string, patchOpportunityRequest: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Observable<RestV2Opportunity> {
        return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, patchOpportunityRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<RestV2Opportunity>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateOrderCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Order object.
     * Update an Order\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<OrderTotalDiscount>> {
        const requestContextPromise = this.requestFactory.updateOrderTotalDiscountUsingPATCH(discountId, updateOrderTotalDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderTotalDiscountUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Order Total Discount
     * Update an Order Total Discount
     * @param discountId discount_id
     * @param updateOrderTotalDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateOrderTotalDiscountUsingPATCH(discountId: string, updateOrderTotalDiscountRequest: UpdateOrderTotalDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<OrderTotalDiscount> {
        return this.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, updateOrderTotalDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<OrderTotalDiscount>) => apiResponse.data));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrPatchAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCHWithHttpInfo(redirectId: string, createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<HttpInfo<AffiliateLink>> {
        const requestContextPromise = this.requestFactory.updateRedirectLinkUsingPATCH(redirectId, createOrPatchAffiliateLinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRedirectLinkUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Affiliate Link
     * Update an Affiliate Link
     * @param redirectId redirect_id
     * @param createOrPatchAffiliateLinkRequest request
     */
    public updateRedirectLinkUsingPATCH(redirectId: string, createOrPatchAffiliateLinkRequest: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Observable<AffiliateLink> {
        return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, createOrPatchAffiliateLinkRequest, _options).pipe(map((apiResponse: HttpInfo<AffiliateLink>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class ObservableProductApi {
    private requestFactory: ProductApiRequestFactory;
    private responseProcessor: ProductApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApiResponseProcessor();
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventoryUsingPOSTWithHttpInfo(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.adjustInventoryUsingPOST(productId, updateProductInventoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.adjustInventoryUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Increase or decrease the quantity of the Product
     * Adjust Inventory of a Product
     * @param productId product_id
     * @param updateProductInventoryRequest updateProductInventoryRequest
     */
    public adjustInventoryUsingPOST(productId: string, updateProductInventoryRequest: UpdateProductInventoryRequest, _options?: Configuration): Observable<RestV2Product> {
        return this.adjustInventoryUsingPOSTWithHttpInfo(productId, updateProductInventoryRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProductUsingPOST1WithHttpInfo(createProductRequest: CreateProductRequest, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.createProductUsingPOST1(createProductRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new product
     * Create a Product
     * @param createProductRequest createProductRequest
     */
    public createProductUsingPOST1(createProductRequest: CreateProductRequest, _options?: Configuration): Observable<RestV2Product> {
        return this.createProductUsingPOST1WithHttpInfo(createProductRequest, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductUsingDELETE1WithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProductUsingDELETE1(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single product
     * Delete a Product
     * @param productId product_id
     */
    public deleteProductUsingDELETE1(productId: string, _options?: Configuration): Observable<void> {
        return this.deleteProductUsingDELETE1WithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductUsingGETWithHttpInfo(productId: string, _options?: Configuration): Observable<HttpInfo<RestV2Product>> {
        const requestContextPromise = this.requestFactory.getProductUsingGET(productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a single Product
     * Get a Product
     * @param productId product_id
     */
    public getProductUsingGET(productId: string, _options?: Configuration): Observable<RestV2Product> {
        return this.getProductUsingGETWithHttpInfo(productId, _options).pipe(map((apiResponse: HttpInfo<RestV2Product>) => apiResponse.data));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListProductsResponse>> {
        const requestContextPromise = this.requestFactory.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Products
     * List Products
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListProductsResponse> {
        return this.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListProductsResponse>) => apiResponse.data));
    }

}

import { ReferralApiRequestFactory, ReferralApiResponseProcessor} from "../apis/ReferralApi";
export class ObservableReferralApi {
    private requestFactory: ReferralApiRequestFactory;
    private responseProcessor: ReferralApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralApiRequestFactory,
        responseProcessor?: ReferralApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralApiResponseProcessor();
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest request
     */
    public createReferralUsingPOSTWithHttpInfo(createReferralRequest: CreateReferralRequest, _options?: Configuration): Observable<HttpInfo<Referral>> {
        const requestContextPromise = this.requestFactory.createReferralUsingPOST(createReferralRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReferralUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new referral partner referral on the provided contact
     * Create a Referral
     * @param createReferralRequest request
     */
    public createReferralUsingPOST(createReferralRequest: CreateReferralRequest, _options?: Configuration): Observable<Referral> {
        return this.createReferralUsingPOSTWithHttpInfo(createReferralRequest, _options).pipe(map((apiResponse: HttpInfo<Referral>) => apiResponse.data));
    }

}

import { ReportingApiRequestFactory, ReportingApiResponseProcessor} from "../apis/ReportingApi";
export class ObservableReportingApi {
    private requestFactory: ReportingApiRequestFactory;
    private responseProcessor: ReportingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportingApiRequestFactory,
        responseProcessor?: ReportingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportingApiResponseProcessor();
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
    public runReportUsingPOSTWithHttpInfo(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ReportExecutionResult>> {
        const requestContextPromise = this.requestFactory.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.runReportUsingPOSTWithHttpInfo(rsp)));
            }));
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
    public runReportUsingPOST(reportId: string, fields?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ReportExecutionResult> {
        return this.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ReportExecutionResult>) => apiResponse.data));
    }

}

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class ObservableSalesApi {
    private requestFactory: SalesApiRequestFactory;
    private responseProcessor: SalesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SalesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SalesApiResponseProcessor();
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setMerchantGatewayAsDefaultUsingPOST(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the specified Merchant Account as the default Merchant Account.
     * Set default Merchant Account
     * @param id id
     */
    public setMerchantGatewayAsDefaultUsingPOST(id: number, _options?: Configuration): Observable<void> {
        return this.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGETWithHttpInfo(fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>, _options?: Configuration): Observable<HttpInfo<GetSettingsResponse>> {
        const requestContextPromise = this.requestFactory.getApplicationConfigurationsUsingGET(fields, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationConfigurationsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get configuration values for the application instance.
     * Get Application Configuration
     * @param [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     */
    public getApplicationConfigurationsUsingGET(fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>, _options?: Configuration): Observable<GetSettingsResponse> {
        return this.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options).pipe(map((apiResponse: HttpInfo<GetSettingsResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetContactOptionTypesResponse>> {
        const requestContextPromise = this.requestFactory.getContactOptionTypesUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactOptionTypesUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of Contact Option types.
     * Get Contact Option types
     */
    public getContactOptionTypesUsingGET1(_options?: Configuration): Observable<GetContactOptionTypesResponse> {
        return this.getContactOptionTypesUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetContactOptionTypesResponse>) => apiResponse.data));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetApplicationEnabledStatusResponse>> {
        const requestContextPromise = this.requestFactory.isApplicationEnabledUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.isApplicationEnabledUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if the application is enabled or not
     * Get Application Status
     */
    public isApplicationEnabledUsingGET(_options?: Configuration): Observable<GetApplicationEnabledStatusResponse> {
        return this.isApplicationEnabledUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetApplicationEnabledStatusResponse>) => apiResponse.data));
    }

}

import { ShippingApiRequestFactory, ShippingApiResponseProcessor} from "../apis/ShippingApi";
export class ObservableShippingApi {
    private requestFactory: ShippingApiRequestFactory;
    private responseProcessor: ShippingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingApiRequestFactory,
        responseProcessor?: ShippingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShippingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShippingApiResponseProcessor();
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ListRestShippingMethodsResponse>> {
        const requestContextPromise = this.requestFactory.listShippingMethodsUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShippingMethodsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Shipping methods
     * List Shipping methods
     */
    public listShippingMethodsUsingGET(_options?: Configuration): Observable<ListRestShippingMethodsResponse> {
        return this.listShippingMethodsUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ListRestShippingMethodsResponse>) => apiResponse.data));
    }

}

import { ShippingDiscountApiRequestFactory, ShippingDiscountApiResponseProcessor} from "../apis/ShippingDiscountApi";
export class ObservableShippingDiscountApi {
    private requestFactory: ShippingDiscountApiRequestFactory;
    private responseProcessor: ShippingDiscountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ShippingDiscountApiRequestFactory,
        responseProcessor?: ShippingDiscountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ShippingDiscountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ShippingDiscountApiResponseProcessor();
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.createDiscountUsingPOST1(createShippingDiscountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiscountUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a Shipping Discount
     * Create a Shipping Discount
     * @param createShippingDiscountRequest request
     */
    public createDiscountUsingPOST1(createShippingDiscountRequest: CreateShippingDiscountRequest, _options?: Configuration): Observable<ShippingDiscount> {
        return this.createDiscountUsingPOST1WithHttpInfo(createShippingDiscountRequest, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDiscountUsingDELETE2(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiscountUsingDELETE2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a specified Shipping Discount
     * Delete a Shipping Discount
     * @param discountId discount_id
     */
    public deleteDiscountUsingDELETE2(discountId: string, _options?: Configuration): Observable<void> {
        return this.deleteDiscountUsingDELETE2WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1WithHttpInfo(discountId: string, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.getDiscountUsingGET1(discountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDiscountUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a Shipping Discount
     * Retrieve a Shipping Discount
     * @param discountId discount_id
     */
    public getDiscountUsingGET1(discountId: string, _options?: Configuration): Observable<ShippingDiscount> {
        return this.getDiscountUsingGET1WithHttpInfo(discountId, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param [fields] TODO: PAPI-1449
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGETWithHttpInfo(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListShippingDiscountsResponse>> {
        const requestContextPromise = this.requestFactory.listDiscountsUsingGET(fields, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDiscountsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all Shipping Discounts
     * List all Shipping Discounts
     * @param [fields] TODO: PAPI-1449
     * @param [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (DiscountType) discount_type: AMOUNT or PERCENT  You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;name%3D%3DMary&#x60; - &#x60;filter&#x3D;description%3D%3DHello+World&#x60; - &#x60;filter&#x3D;discount_type%3D%3DAMOUNT%3Bdescription%3D%3DHello%2BWorld&#x60; 
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listDiscountsUsingGET(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListShippingDiscountsResponse> {
        return this.listDiscountsUsingGETWithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListShippingDiscountsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1WithHttpInfo(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<ShippingDiscount>> {
        const requestContextPromise = this.requestFactory.updateDiscountUsingPATCH1(discountId, updateShippingDiscountRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDiscountUsingPATCH1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Shipping Discount
     * Update a Shipping Discount
     * @param discountId discount_id
     * @param updateShippingDiscountRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateDiscountUsingPATCH1(discountId: string, updateShippingDiscountRequest: UpdateShippingDiscountRequest, updateMask?: Array<string>, _options?: Configuration): Observable<ShippingDiscount> {
        return this.updateDiscountUsingPATCH1WithHttpInfo(discountId, updateShippingDiscountRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<ShippingDiscount>) => apiResponse.data));
    }

}

import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor} from "../apis/SubscriptionPlansApi";
export class ObservableSubscriptionPlansApi {
    private requestFactory: SubscriptionPlansApiRequestFactory;
    private responseProcessor: SubscriptionPlansApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionPlansApiRequestFactory,
        responseProcessor?: SubscriptionPlansApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionPlansApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionPlansApiResponseProcessor();
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListSubscriptionPlansResponse>> {
        const requestContextPromise = this.requestFactory.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionPlansUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of Subscription Plans
     * List Subscription Plans
     * @param [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListSubscriptionPlansResponse> {
        return this.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionPlansResponse>) => apiResponse.data));
    }

}

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class ObservableSubscriptionsApi {
    private requestFactory: SubscriptionsApiRequestFactory;
    private responseProcessor: SubscriptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApiResponseProcessor();
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSubscriptionUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancels the specified subscription
     * Cancel Subscription
     * @param subscriptionId subscription_id
     * @param cancelSubscriptionsRequest cancelSubscriptionsRequest
     */
    public cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Observable<void> {
        return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Subscription object.
     * Create a Subscription\'s Custom Field
     * @param createCustomFieldRequest customField
     */
    public createSubscriptionCustomFieldUsingPOST(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Observable<HttpInfo<RestSubscriptionV2>> {
        const requestContextPromise = this.requestFactory.createSubscriptionV2UsingPOST(createSubscriptionV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSubscriptionV2UsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a subscription with the specified product and product subscription id.
     * Create Subscription
     * @param createSubscriptionV2 createSubscriptionV2
     */
    public createSubscriptionV2UsingPOST(createSubscriptionV2: CreateSubscriptionV2, _options?: Configuration): Observable<RestSubscriptionV2> {
        return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options).pipe(map((apiResponse: HttpInfo<RestSubscriptionV2>) => apiResponse.data));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListSubscriptionsResponse>> {
        const requestContextPromise = this.requestFactory.listSubscriptionsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSubscriptionsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of subscriptions using the specified search criteria.
     * List Subscriptions
     * @param [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param [orderBy] Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listSubscriptionsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListSubscriptionsResponse> {
        return this.listSubscriptionsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListSubscriptionsResponse>) => apiResponse.data));
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveSubscriptionCustomFieldModelUsingGET(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the custom field\'s model for the Subscription object
     * Retrieve Subscription\'s Custom Field Model
     */
    public retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateSubscriptionCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Subscription object.
     * Update a Subscription\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<HttpInfo<ApplyTagsResponse>> {
        const requestContextPromise = this.requestFactory.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyTagsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a Tag to a list of Contacts.
     * Apply Tag
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public applyTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<ApplyTagsResponse> {
        return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<ApplyTagsResponse>) => apiResponse.data));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.createTagCategoryUsingPOST1(createUpdateTagCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagCategoryUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag Category.
     * Create Tag Category
     * @param createUpdateTagCategoryRequest request
     */
    public createTagCategoryUsingPOST1(createUpdateTagCategoryRequest: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<Tag> {
        return this.createTagCategoryUsingPOST1WithHttpInfo(createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1WithHttpInfo(createUpdateTagRequest: CreateUpdateTagRequest, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.createTagUsingPOST1(createUpdateTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new Tag
     * Create Tag
     * @param createUpdateTagRequest tag
     */
    public createTagUsingPOST1(createUpdateTagRequest: CreateUpdateTagRequest, _options?: Configuration): Observable<Tag> {
        return this.createTagUsingPOST1WithHttpInfo(createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTagCategoryUsingDELETE(tagCategoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagCategoryUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the specified Tag Category
     * Delete Tag Category
     * @param tagCategoryId tag_category_id
     */
    public deleteTagCategoryUsingDELETE(tagCategoryId: string, _options?: Configuration): Observable<void> {
        return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETEWithHttpInfo(tagId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTagUsingDELETE(tagId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Tag.
     * Delete Tag
     * @param tagId tag_id
     */
    public deleteTagUsingDELETE(tagId: string, _options?: Configuration): Observable<void> {
        return this.deleteTagUsingDELETEWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGETWithHttpInfo(tagCategoryId: string, _options?: Configuration): Observable<HttpInfo<GetTagCategoryResponse>> {
        const requestContextPromise = this.requestFactory.getCategoryUsingGET(tagCategoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the specified Tag Category
     * Retrieve a Tag Category
     * @param tagCategoryId tag_category_id
     */
    public getCategoryUsingGET(tagCategoryId: string, _options?: Configuration): Observable<GetTagCategoryResponse> {
        return this.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options).pipe(map((apiResponse: HttpInfo<GetTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1WithHttpInfo(tagId: string, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.getTagUsingGET1(tagId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about the specified Tag
     * Retrieve a Tag
     * @param tagId tag_id
     */
    public getTagUsingGET1(tagId: string, _options?: Configuration): Observable<Tag> {
        return this.getTagUsingGET1WithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
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
    public listCompaniesForTagIdUsingGET1WithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTaggedCompaniesResponse>> {
        const requestContextPromise = this.requestFactory.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCompaniesForTagIdUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listCompaniesForTagIdUsingGET1(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTaggedCompaniesResponse> {
        return this.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedCompaniesResponse>) => apiResponse.data));
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
    public listContactsWithTagIdUsingGETWithHttpInfo(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTaggedContactsResponse>> {
        const requestContextPromise = this.requestFactory.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContactsWithTagIdUsingGETWithHttpInfo(rsp)));
            }));
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
    public listContactsWithTagIdUsingGET(tagId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTaggedContactsResponse> {
        return this.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTaggedContactsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGETWithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTagCategoriesResponse>> {
        const requestContextPromise = this.requestFactory.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagCategoriesUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * List Tag Categories
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagCategoriesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTagCategoriesResponse> {
        return this.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagCategoriesResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1WithHttpInfo(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<ListTagsResponse>> {
        const requestContextPromise = this.requestFactory.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagsUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * List Tags
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. &#x60;given_name desc&#x60;
     * @param [pageSize] Total number of items to return per page
     * @param [pageToken] Page token
     */
    public listTagsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Observable<ListTagsResponse> {
        return this.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options).pipe(map((apiResponse: HttpInfo<ListTagsResponse>) => apiResponse.data));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<HttpInfo<UpdateTagCategoryResponse>> {
        const requestContextPromise = this.requestFactory.patchTagCategoryUsingPATCH(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchTagCategoryUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag Category with only the values provided in the request
     * Update a Tag Category
     * @param tagCategoryId tag_category_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagCategoryRequest] tagCategory
     */
    public patchTagCategoryUsingPATCH(tagCategoryId: string, updateMask?: Array<string>, createUpdateTagCategoryRequest?: CreateUpdateTagCategoryRequest, _options?: Configuration): Observable<UpdateTagCategoryResponse> {
        return this.patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, createUpdateTagCategoryRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagCategoryResponse>) => apiResponse.data));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public patchTagUsingPATCHWithHttpInfo(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: Configuration): Observable<HttpInfo<UpdateTagResponse>> {
        const requestContextPromise = this.requestFactory.patchTagUsingPATCH(tagId, updateMask, createUpdateTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchTagUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a Tag with only the values provided in the request
     * Update a Tag
     * @param tagId tag_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createUpdateTagRequest] tag
     */
    public patchTagUsingPATCH(tagId: string, updateMask?: Array<string>, createUpdateTagRequest?: CreateUpdateTagRequest, _options?: Configuration): Observable<UpdateTagResponse> {
        return this.patchTagUsingPATCHWithHttpInfo(tagId, updateMask, createUpdateTagRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTagResponse>) => apiResponse.data));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOSTWithHttpInfo(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTagsUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a Tag from a list of Contacts.
     * Remove Tags
     * @param tagId tag_id
     * @param applyRemoveTagRequest applyRemoveTagRequest
     */
    public removeTagsUsingPOST(tagId: string, applyRemoveTagRequest: ApplyRemoveTagRequest, _options?: Configuration): Observable<void> {
        return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class ObservableTaskApi {
    private requestFactory: TaskApiRequestFactory;
    private responseProcessor: TaskApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TaskApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TaskApiResponseProcessor();
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<HttpInfo<CreateCustomFieldResponse>> {
        const requestContextPromise = this.requestFactory.createTaskCustomFieldUsingPOST1(createCustomFieldRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskCustomFieldUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a custom field of the specified type and options to the Task object.
     * Create a Custom Field
     * @param createCustomFieldRequest customField
     */
    public createTaskCustomFieldUsingPOST1(createCustomFieldRequest: CreateCustomFieldRequest, _options?: Configuration): Observable<CreateCustomFieldResponse> {
        return this.createTaskCustomFieldUsingPOST1WithHttpInfo(createCustomFieldRequest, _options).pipe(map((apiResponse: HttpInfo<CreateCustomFieldResponse>) => apiResponse.data));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1WithHttpInfo(createTaskRequest?: CreateTaskRequest, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.createTaskUsingPOST1(createTaskRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * Create a Task
     * @param [createTaskRequest] task
     */
    public createTaskUsingPOST1(createTaskRequest?: CreateTaskRequest, _options?: Configuration): Observable<Task> {
        return this.createTaskUsingPOST1WithHttpInfo(createTaskRequest, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskCustomFieldUsingDELETEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a Custom Field from Task.
     * Delete a Custom Field
     * @param customFieldId custom_field_id
     */
    public deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Observable<void> {
        return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1WithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTaskUsingDELETE1(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskUsingDELETE1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a single task
     * Delete a Task
     * @param taskId task_id
     */
    public deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Observable<void> {
        return this.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1WithHttpInfo(taskId: string, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.getTaskUsingGET1(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a single task
     * Retrieve a Task
     * @param taskId task_id
     */
    public getTaskUsingGET1(taskId: string, _options?: Configuration): Observable<Task> {
        return this.getTaskUsingGET1WithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
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
    public listTasksUsingGET1WithHttpInfo(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Observable<HttpInfo<ListTasksResponse>> {
        const requestContextPromise = this.requestFactory.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTasksUsingGET1WithHttpInfo(rsp)));
            }));
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
    public listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Observable<ListTasksResponse> {
        return this.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options).pipe(map((apiResponse: HttpInfo<ListTasksResponse>) => apiResponse.data));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchTaskRequest] task
     */
    public patchTaskUsingPATCHWithHttpInfo(taskId: string, updateMask?: Array<string>, createPatchTaskRequest?: CreatePatchTaskRequest, _options?: Configuration): Observable<HttpInfo<UpdateTaskResponse>> {
        const requestContextPromise = this.requestFactory.patchTaskUsingPATCH(taskId, updateMask, createPatchTaskRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchTaskUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * Update a Task
     * @param taskId task_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [createPatchTaskRequest] task
     */
    public patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, createPatchTaskRequest?: CreatePatchTaskRequest, _options?: Configuration): Observable<UpdateTaskResponse> {
        return this.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, createPatchTaskRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTaskResponse>) => apiResponse.data));
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<ObjectModel>> {
        const requestContextPromise = this.requestFactory.retrieveTaskModelUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieveTaskModelUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the custom fields for the Task object
     * Retrieve Task Model
     */
    public retrieveTaskModelUsingGET1(_options?: Configuration): Observable<ObjectModel> {
        return this.retrieveTaskModelUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ObjectModel>) => apiResponse.data));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<HttpInfo<CustomFieldMetaData>> {
        const requestContextPromise = this.requestFactory.updateTaskCustomFieldUsingPATCH(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskCustomFieldUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a custom field of the specified type and options to the Task object.
     * Update a Task\'s Custom Field
     * @param customFieldId custom_field_id
     * @param updateCustomFieldMetaDataRequest request
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     */
    public updateTaskCustomFieldUsingPATCH(customFieldId: string, updateCustomFieldMetaDataRequest: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Observable<CustomFieldMetaData> {
        return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, updateCustomFieldMetaDataRequest, updateMask, _options).pipe(map((apiResponse: HttpInfo<CustomFieldMetaData>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [createUserRequestV2] user
     */
    public createUserUsingPOST1WithHttpInfo(createUserRequestV2?: CreateUserRequestV2, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.createUserUsingPOST1(createUserRequestV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserUsingPOST1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * Create a User
     * @param [createUserRequestV2] user
     */
    public createUserUsingPOST1(createUserRequestV2?: CreateUserRequestV2, _options?: Configuration): Observable<User> {
        return this.createUserUsingPOST1WithHttpInfo(createUserRequestV2, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGETWithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.getUserByIdUsingGET(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserByIdUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a specific User
     * Get User
     * @param userId user_id
     */
    public getUserByIdUsingGET(userId: string, _options?: Configuration): Observable<User> {
        return this.getUserByIdUsingGETWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1WithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetUserInfoResponse>> {
        const requestContextPromise = this.requestFactory.getUserInfoUsingGET1(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserInfoUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * Retrieve User Info
     */
    public getUserInfoUsingGET1(_options?: Configuration): Observable<GetUserInfoResponse> {
        return this.getUserInfoUsingGET1WithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetUserInfoResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1WithHttpInfo(userId: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getUserSignatureUsingGET1(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSignatureUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a HTML snippet that contains the user\'s email signature.
     * Get User email signature
     * @param userId user_id
     */
    public getUserSignatureUsingGET1(userId: string, _options?: Configuration): Observable<string> {
        return this.getUserSignatureUsingGET1WithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1WithHttpInfo(filter?: string, orderBy?: string, _options?: Configuration): Observable<HttpInfo<ListUserResponse>> {
        const requestContextPromise = this.requestFactory.listUsersUsingGET1(filter, orderBy, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsersUsingGET1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of users
     * List Users
     * @param [filter] Search filter to apply to results
     * @param [orderBy] Attribute and direction to order items by. E.g. \&#39;given_name desc\&#39;
     */
    public listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Observable<ListUserResponse> {
        return this.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options).pipe(map((apiResponse: HttpInfo<ListUserResponse>) => apiResponse.data));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchUserRequestV2] user
     */
    public patchUserUsingPATCHWithHttpInfo(userId: string, updateMask?: Array<string>, patchUserRequestV2?: PatchUserRequestV2, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.patchUserUsingPATCH(userId, updateMask, patchUserRequestV2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchUserUsingPATCHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates information on a specific User
     * Update User
     * @param userId user_id
     * @param [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param [patchUserRequestV2] user
     */
    public patchUserUsingPATCH(userId: string, updateMask?: Array<string>, patchUserRequestV2?: PatchUserRequestV2, _options?: Configuration): Observable<User> {
        return this.patchUserUsingPATCHWithHttpInfo(userId, updateMask, patchUserRequestV2, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
