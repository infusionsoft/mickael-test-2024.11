import { HttpInfo } from '../http/http';
import { Configuration } from '../configuration';
import { AddContactsToSequenceRequest } from '../models/AddContactsToSequenceRequest';
import { AddContactsToSequenceResponse } from '../models/AddContactsToSequenceResponse';
import { AddToAutomationSequenceRequest } from '../models/AddToAutomationSequenceRequest';
import { AddToAutomationSequenceResponse } from '../models/AddToAutomationSequenceResponse';
import { AffiliateAddToProgramRequest } from '../models/AffiliateAddToProgramRequest';
import { AffiliateCommissionEarned } from '../models/AffiliateCommissionEarned';
import { AffiliateCommissionProgramResponse } from '../models/AffiliateCommissionProgramResponse';
import { AffiliateLink } from '../models/AffiliateLink';
import { AffiliateProgramV2 } from '../models/AffiliateProgramV2';
import { AffiliateRemoveFromProgramRequest } from '../models/AffiliateRemoveFromProgramRequest';
import { ApplyRemoveTagRequest } from '../models/ApplyRemoveTagRequest';
import { ApplyTagsResponse } from '../models/ApplyTagsResponse';
import { Automation } from '../models/Automation';
import { AutomationCategory } from '../models/AutomationCategory';
import { Campaign } from '../models/Campaign';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
import { CategoryDiscount } from '../models/CategoryDiscount';
import { Company } from '../models/Company';
import { Contact } from '../models/Contact';
import { ContactLink } from '../models/ContactLink';
import { ContactLinkType } from '../models/ContactLinkType';
import { CreateAffiliateRequest } from '../models/CreateAffiliateRequest';
import { CreateAutomationCategoryRequest } from '../models/CreateAutomationCategoryRequest';
import { CreateCommissionProgramRequest } from '../models/CreateCommissionProgramRequest';
import { CreateCompanyRequest } from '../models/CreateCompanyRequest';
import { CreateContactLinkTypeRequest } from '../models/CreateContactLinkTypeRequest';
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
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { DeleteEmailsRequest } from '../models/DeleteEmailsRequest';
import { DeleteEmailsResponse } from '../models/DeleteEmailsResponse';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { EmailSendRequest } from '../models/EmailSendRequest';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { EmailsSentList } from '../models/EmailsSentList';
import { FunnelIntegrationTriggerResultDTO } from '../models/FunnelIntegrationTriggerResultDTO';
import { GetApplicationEnabledStatusResponse } from '../models/GetApplicationEnabledStatusResponse';
import { GetBusinessProfileResponse } from '../models/GetBusinessProfileResponse';
import { GetContactOptionTypesResponse } from '../models/GetContactOptionTypesResponse';
import { GetNoteResponse } from '../models/GetNoteResponse';
import { GetSettingsResponse } from '../models/GetSettingsResponse';
import { GetTagCategoryResponse } from '../models/GetTagCategoryResponse';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { LeadSource } from '../models/LeadSource';
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
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListTagCategoriesResponse } from '../models/ListTagCategoriesResponse';
import { ListTaggedCompaniesResponse } from '../models/ListTaggedCompaniesResponse';
import { ListTaggedContactsResponse } from '../models/ListTaggedContactsResponse';
import { ListTagsResponse } from '../models/ListTagsResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { Note } from '../models/Note';
import { ObjectModel } from '../models/ObjectModel';
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
import { PaymentResult } from '../models/PaymentResult';
import { ProductCommissionProgram } from '../models/ProductCommissionProgram';
import { Referral } from '../models/Referral';
import { RemoveContactsFromSequenceRequest } from '../models/RemoveContactsFromSequenceRequest';
import { RemoveContactsFromSequenceResponse } from '../models/RemoveContactsFromSequenceResponse';
import { ReportExecutionResult } from '../models/ReportExecutionResult';
import { RestAffiliate } from '../models/RestAffiliate';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestEmailAddress } from '../models/RestEmailAddress';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestSubscriptionV2 } from '../models/RestSubscriptionV2';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { SaveAutomationCategoryRequest } from '../models/SaveAutomationCategoryRequest';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { Tag } from '../models/Tag';
import { Task } from '../models/Task';
import { UpdateAutomationCategoryRequest } from '../models/UpdateAutomationCategoryRequest';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateEmailAddress } from '../models/UpdateEmailAddress';
import { UpdateNoteRequest } from '../models/UpdateNoteRequest';
import { UpdateNoteResponse } from '../models/UpdateNoteResponse';
import { UpdateTagCategoryResponse } from '../models/UpdateTagCategoryResponse';
import { UpdateTagResponse } from '../models/UpdateTagResponse';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { User } from '../models/User';
import { AffiliateApiRequestFactory, AffiliateApiResponseProcessor } from "../apis/AffiliateApi";
export interface AffiliateApiAddAffiliateToProgramUsingPOST0Request {
    id: string;
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest;
}
export interface AffiliateApiAddAffiliateUsingPOSTRequest {
    insertAffiliate?: CreateAffiliateRequest;
}
export interface AffiliateApiAddCommissionProgramUsingPOST0Request {
    insertCommissionProgram?: CreateCommissionProgramRequest;
}
export interface AffiliateApiAssignProductCommissionProgramUsingPOST0Request {
    commissionProgramId: string;
    productCommissionProgram?: CreateProductCommissionProgramRequest;
}
export interface AffiliateApiAssignSubscriptionCommissionProgramUsingPOST0Request {
    commissionProgramId: string;
    subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest;
}
export interface AffiliateApiCreateAffiliateCustomFieldUsingPOST0Request {
    customField: CreateCustomFieldRequest;
}
export interface AffiliateApiCreateDefaultCommissionProgramUsingPOST0Request {
    commissionProgramId: string;
    createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest;
}
export interface AffiliateApiCreateRedirectLinkUsingPOST0Request {
    request: CreateOrPatchAffiliateLinkRequest;
}
export interface AffiliateApiDeleteAffiliateCommissionProgramUsingDELETE0Request {
    commissionProgramId: string;
}
export interface AffiliateApiDeleteAffiliateUsingDELETE0Request {
    id: string;
}
export interface AffiliateApiDeleteRedirectLinkUsingDELETE0Request {
    redirectId: string;
}
export interface AffiliateApiGetAffiliateCommissionTotalUsingGET0Request {
    affiliateId: string;
}
export interface AffiliateApiGetAffiliateCommissionsUsingGET0Request {
    affiliateId: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface AffiliateApiGetAffiliateCustomFieldsUsingGET0Request {
}
export interface AffiliateApiGetAffiliateUsingGET1Request {
    id: string;
}
export interface AffiliateApiGetCommissionProgramUsingGET0Request {
    commissionProgramId: string;
}
export interface AffiliateApiGetRedirectLinkUsingGET0Request {
    redirectId: string;
}
export interface AffiliateApiListAffiliateCommissionProgramsUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface AffiliateApiListAffiliateLinksUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface AffiliateApiListSummariesUsingGET10Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface AffiliateApiPatchCommissionProgramUsingPATCHRequest {
    commissionProgramId: string;
    patchCommissionProgramRequest: PatchCommissionProgramRequest;
    updateMask?: Array<string>;
}
export interface AffiliateApiPatchDefaultCommissionProgramUsingPATCH0Request {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest;
}
export interface AffiliateApiPatchProductCommissionProgramUsingPATCH0Request {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest;
}
export interface AffiliateApiPatchSubscriptionCommissionProgramUsingPATCH0Request {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest;
}
export interface AffiliateApiRemoveAffiliateFromProgramUsingPOST0Request {
    id: string;
    removeFromProgramRequest: AffiliateRemoveFromProgramRequest;
}
export interface AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOST0Request {
    commissionId: string;
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest;
}
export interface AffiliateApiUpdateAffiliateCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface AffiliateApiUpdateAffiliateUsingPATCHRequest {
    id: string;
    patchAffiliate?: PatchAffiliateRequest;
}
export interface AffiliateApiUpdateRedirectLinkUsingPATCH0Request {
    redirectId: string;
    request: CreateOrPatchAffiliateLinkRequest;
}
export declare class ObjectAffiliateApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AffiliateApiRequestFactory, responseProcessor?: AffiliateApiResponseProcessor);
    addAffiliateToProgramUsingPOSTWithHttpInfo(param: AffiliateApiAddAffiliateToProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    addAffiliateToProgramUsingPOST(param: AffiliateApiAddAffiliateToProgramUsingPOST0Request, options?: Configuration): Promise<void>;
    addAffiliateUsingPOSTWithHttpInfo(param?: AffiliateApiAddAffiliateUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestAffiliate>>;
    addAffiliateUsingPOST(param?: AffiliateApiAddAffiliateUsingPOSTRequest, options?: Configuration): Promise<RestAffiliate>;
    addCommissionProgramUsingPOSTWithHttpInfo(param?: AffiliateApiAddCommissionProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>>;
    addCommissionProgramUsingPOST(param?: AffiliateApiAddCommissionProgramUsingPOST0Request, options?: Configuration): Promise<AffiliateCommissionProgramResponse>;
    assignProductCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignProductCommissionProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>>;
    assignProductCommissionProgramUsingPOST(param: AffiliateApiAssignProductCommissionProgramUsingPOST0Request, options?: Configuration): Promise<ProductCommissionProgram>;
    assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    assignSubscriptionCommissionProgramUsingPOST(param: AffiliateApiAssignSubscriptionCommissionProgramUsingPOST0Request, options?: Configuration): Promise<SubscriptionCommissionProgram>;
    createAffiliateCustomFieldUsingPOSTWithHttpInfo(param: AffiliateApiCreateAffiliateCustomFieldUsingPOST0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createAffiliateCustomFieldUsingPOST(param: AffiliateApiCreateAffiliateCustomFieldUsingPOST0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    createDefaultCommissionProgramUsingPOSTWithHttpInfo(param: AffiliateApiCreateDefaultCommissionProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    createDefaultCommissionProgramUsingPOST(param: AffiliateApiCreateDefaultCommissionProgramUsingPOST0Request, options?: Configuration): Promise<SetDefaultCommissionProgramResponse>;
    createRedirectLinkUsingPOSTWithHttpInfo(param: AffiliateApiCreateRedirectLinkUsingPOST0Request, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    createRedirectLinkUsingPOST(param: AffiliateApiCreateRedirectLinkUsingPOST0Request, options?: Configuration): Promise<AffiliateLink>;
    deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteAffiliateCommissionProgramUsingDELETE(param: AffiliateApiDeleteAffiliateCommissionProgramUsingDELETE0Request, options?: Configuration): Promise<void>;
    deleteAffiliateUsingDELETEWithHttpInfo(param: AffiliateApiDeleteAffiliateUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteAffiliateUsingDELETE(param: AffiliateApiDeleteAffiliateUsingDELETE0Request, options?: Configuration): Promise<void>;
    deleteRedirectLinkUsingDELETEWithHttpInfo(param: AffiliateApiDeleteRedirectLinkUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteRedirectLinkUsingDELETE(param: AffiliateApiDeleteRedirectLinkUsingDELETE0Request, options?: Configuration): Promise<void>;
    getAffiliateCommissionTotalUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionTotalUsingGET0Request, options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>>;
    getAffiliateCommissionTotalUsingGET(param: AffiliateApiGetAffiliateCommissionTotalUsingGET0Request, options?: Configuration): Promise<AffiliateCommissionEarned>;
    getAffiliateCommissionsUsingGETWithHttpInfo(param: AffiliateApiGetAffiliateCommissionsUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>>;
    getAffiliateCommissionsUsingGET(param: AffiliateApiGetAffiliateCommissionsUsingGET0Request, options?: Configuration): Promise<ListAffiliateCommissionResponse>;
    getAffiliateCustomFieldsUsingGETWithHttpInfo(param?: AffiliateApiGetAffiliateCustomFieldsUsingGET0Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    getAffiliateCustomFieldsUsingGET(param?: AffiliateApiGetAffiliateCustomFieldsUsingGET0Request, options?: Configuration): Promise<ObjectModel>;
    getAffiliateUsingGET1WithHttpInfo(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestAffiliate>>;
    getAffiliateUsingGET1(param: AffiliateApiGetAffiliateUsingGET1Request, options?: Configuration): Promise<RestAffiliate>;
    getCommissionProgramUsingGETWithHttpInfo(param: AffiliateApiGetCommissionProgramUsingGET0Request, options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>>;
    getCommissionProgramUsingGET(param: AffiliateApiGetCommissionProgramUsingGET0Request, options?: Configuration): Promise<AffiliateProgramV2>;
    getRedirectLinkUsingGETWithHttpInfo(param: AffiliateApiGetRedirectLinkUsingGET0Request, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    getRedirectLinkUsingGET(param: AffiliateApiGetRedirectLinkUsingGET0Request, options?: Configuration): Promise<AffiliateLink>;
    listAffiliateCommissionProgramsUsingGETWithHttpInfo(param?: AffiliateApiListAffiliateCommissionProgramsUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>>;
    listAffiliateCommissionProgramsUsingGET(param?: AffiliateApiListAffiliateCommissionProgramsUsingGET0Request, options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse>;
    listAffiliateLinksUsingGETWithHttpInfo(param?: AffiliateApiListAffiliateLinksUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>>;
    listAffiliateLinksUsingGET(param?: AffiliateApiListAffiliateLinksUsingGET0Request, options?: Configuration): Promise<ListAffiliateLinksResponse>;
    listSummariesUsingGET1WithHttpInfo(param?: AffiliateApiListSummariesUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>>;
    listSummariesUsingGET1(param?: AffiliateApiListSummariesUsingGET10Request, options?: Configuration): Promise<ListAffiliateSummariesResponse>;
    patchCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>>;
    patchCommissionProgramUsingPATCH(param: AffiliateApiPatchCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<AffiliateCommissionProgramResponse>;
    patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchDefaultCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    patchDefaultCommissionProgramUsingPATCH(param: AffiliateApiPatchDefaultCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<SetDefaultCommissionProgramResponse>;
    patchProductCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchProductCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>>;
    patchProductCommissionProgramUsingPATCH(param: AffiliateApiPatchProductCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<ProductCommissionProgram>;
    patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    patchSubscriptionCommissionProgramUsingPATCH(param: AffiliateApiPatchSubscriptionCommissionProgramUsingPATCH0Request, options?: Configuration): Promise<SubscriptionCommissionProgram>;
    removeAffiliateFromProgramUsingPOSTWithHttpInfo(param: AffiliateApiRemoveAffiliateFromProgramUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    removeAffiliateFromProgramUsingPOST(param: AffiliateApiRemoveAffiliateFromProgramUsingPOST0Request, options?: Configuration): Promise<void>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param: AffiliateApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOST0Request, options?: Configuration): Promise<void>;
    updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateAffiliateCustomFieldUsingPATCH(param: AffiliateApiUpdateAffiliateCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    updateAffiliateUsingPATCHWithHttpInfo(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestAffiliate>>;
    updateAffiliateUsingPATCH(param: AffiliateApiUpdateAffiliateUsingPATCHRequest, options?: Configuration): Promise<RestAffiliate>;
    updateRedirectLinkUsingPATCHWithHttpInfo(param: AffiliateApiUpdateRedirectLinkUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    updateRedirectLinkUsingPATCH(param: AffiliateApiUpdateRedirectLinkUsingPATCH0Request, options?: Configuration): Promise<AffiliateLink>;
}
import { AutomationApiRequestFactory, AutomationApiResponseProcessor } from "../apis/AutomationApi";
export interface AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest {
    automationId: string;
    sequenceId: string;
    addToAutomationSequenceRequest: AddToAutomationSequenceRequest;
}
export interface AutomationApiDeleteAutomationUsingDELETERequest {
    automationIds: Array<number>;
}
export interface AutomationApiGetAutomationUsingGETRequest {
    automationId: string;
}
export interface AutomationApiListAllAutomationIdsUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    stats?: boolean;
}
export interface AutomationApiListAutomationsUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    stats?: boolean;
}
export interface AutomationApiUpdateAutomationCategoryUsingPUTRequest {
    updateAutomationCategoryRequest: UpdateAutomationCategoryRequest;
}
export declare class ObjectAutomationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AutomationApiRequestFactory, responseProcessor?: AutomationApiResponseProcessor);
    addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AddToAutomationSequenceResponse>>;
    addContactsToAutomationSequenceUsingPOST(param: AutomationApiAddContactsToAutomationSequenceUsingPOSTRequest, options?: Configuration): Promise<AddToAutomationSequenceResponse>;
    deleteAutomationUsingDELETEWithHttpInfo(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteAutomationUsingDELETE(param: AutomationApiDeleteAutomationUsingDELETERequest, options?: Configuration): Promise<void>;
    getAutomationUsingGETWithHttpInfo(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<HttpInfo<Automation>>;
    getAutomationUsingGET(param: AutomationApiGetAutomationUsingGETRequest, options?: Configuration): Promise<Automation>;
    listAllAutomationIdsUsingGETWithHttpInfo(param?: AutomationApiListAllAutomationIdsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAutomationIdsResponse>>;
    listAllAutomationIdsUsingGET(param?: AutomationApiListAllAutomationIdsUsingGETRequest, options?: Configuration): Promise<ListAutomationIdsResponse>;
    listAutomationsUsingGETWithHttpInfo(param?: AutomationApiListAutomationsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAutomationResponse>>;
    listAutomationsUsingGET(param?: AutomationApiListAutomationsUsingGETRequest, options?: Configuration): Promise<ListAutomationResponse>;
    updateAutomationCategoryUsingPUTWithHttpInfo(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    updateAutomationCategoryUsingPUT(param: AutomationApiUpdateAutomationCategoryUsingPUTRequest, options?: Configuration): Promise<void>;
}
import { AutomationCategoryApiRequestFactory, AutomationCategoryApiResponseProcessor } from "../apis/AutomationCategoryApi";
export interface AutomationCategoryApiCreateCategoryUsingPOSTRequest {
    createAutomationCategoryRequest: CreateAutomationCategoryRequest;
}
export interface AutomationCategoryApiDeleteCategoriesUsingDELETERequest {
    ids: Array<number>;
}
export interface AutomationCategoryApiListCategoriesUsingGETRequest {
}
export interface AutomationCategoryApiSaveCategoryUsingPUTRequest {
    saveAutomationCategoryRequest: SaveAutomationCategoryRequest;
}
export declare class ObjectAutomationCategoryApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AutomationCategoryApiRequestFactory, responseProcessor?: AutomationCategoryApiResponseProcessor);
    createCategoryUsingPOSTWithHttpInfo(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>>;
    createCategoryUsingPOST(param: AutomationCategoryApiCreateCategoryUsingPOSTRequest, options?: Configuration): Promise<AutomationCategory>;
    deleteCategoriesUsingDELETEWithHttpInfo(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteCategoriesUsingDELETE(param: AutomationCategoryApiDeleteCategoriesUsingDELETERequest, options?: Configuration): Promise<void>;
    listCategoriesUsingGETWithHttpInfo(param?: AutomationCategoryApiListCategoriesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAutomationCategoryResponse>>;
    listCategoriesUsingGET(param?: AutomationCategoryApiListCategoriesUsingGETRequest, options?: Configuration): Promise<ListAutomationCategoryResponse>;
    saveCategoryUsingPUTWithHttpInfo(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<HttpInfo<AutomationCategory>>;
    saveCategoryUsingPUT(param: AutomationCategoryApiSaveCategoryUsingPUTRequest, options?: Configuration): Promise<AutomationCategory>;
}
import { BusinessProfileApiRequestFactory, BusinessProfileApiResponseProcessor } from "../apis/BusinessProfileApi";
export interface BusinessProfileApiGetBusinessProfileUsingGETRequest {
}
export interface BusinessProfileApiPatchBusinessProfileUsingPATCHRequest {
    updateMask?: Array<string>;
    businessProfile?: PatchBusinessProfileRequest;
}
export declare class ObjectBusinessProfileApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BusinessProfileApiRequestFactory, responseProcessor?: BusinessProfileApiResponseProcessor);
    getBusinessProfileUsingGETWithHttpInfo(param?: BusinessProfileApiGetBusinessProfileUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>>;
    getBusinessProfileUsingGET(param?: BusinessProfileApiGetBusinessProfileUsingGETRequest, options?: Configuration): Promise<GetBusinessProfileResponse>;
    patchBusinessProfileUsingPATCHWithHttpInfo(param?: BusinessProfileApiPatchBusinessProfileUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<GetBusinessProfileResponse>>;
    patchBusinessProfileUsingPATCH(param?: BusinessProfileApiPatchBusinessProfileUsingPATCHRequest, options?: Configuration): Promise<GetBusinessProfileResponse>;
}
import { CampaignApiRequestFactory, CampaignApiResponseProcessor } from "../apis/CampaignApi";
export interface CampaignApiAddContactsToCampaignSequenceUsingPOST1Request {
    campaignId: string;
    sequenceId: string;
    addContactsToSequenceRequest: AddContactsToSequenceRequest;
}
export interface CampaignApiGetCampaignUsingGET1Request {
    campaignId: string;
}
export interface CampaignApiListCampaignsUsingGET1Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    stats?: boolean;
}
export interface CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest {
    campaignId: string;
    sequenceId: string;
    removeContactsFromSequenceRequest: RemoveContactsFromSequenceRequest;
}
export declare class ObjectCampaignApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CampaignApiRequestFactory, responseProcessor?: CampaignApiResponseProcessor);
    addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<HttpInfo<AddContactsToSequenceResponse>>;
    addContactsToCampaignSequenceUsingPOST1(param: CampaignApiAddContactsToCampaignSequenceUsingPOST1Request, options?: Configuration): Promise<AddContactsToSequenceResponse>;
    getCampaignUsingGET1WithHttpInfo(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<HttpInfo<Campaign>>;
    getCampaignUsingGET1(param: CampaignApiGetCampaignUsingGET1Request, options?: Configuration): Promise<Campaign>;
    listCampaignsUsingGET1WithHttpInfo(param?: CampaignApiListCampaignsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListCampaignsResponse>>;
    listCampaignsUsingGET1(param?: CampaignApiListCampaignsUsingGET1Request, options?: Configuration): Promise<ListCampaignsResponse>;
    removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RemoveContactsFromSequenceResponse>>;
    removeContactsFromCampaignSequenceUsingPOST(param: CampaignApiRemoveContactsFromCampaignSequenceUsingPOSTRequest, options?: Configuration): Promise<RemoveContactsFromSequenceResponse>;
}
import { CompanyApiRequestFactory, CompanyApiResponseProcessor } from "../apis/CompanyApi";
export interface CompanyApiCreateCompanyUsingPOST1Request {
    company?: CreateCompanyRequest;
}
export interface CompanyApiDeleteCompanyUsingDELETERequest {
    companyId: string;
}
export interface CompanyApiGetCompanyUsingGET1Request {
    companyId: string;
    fields?: Array<string>;
}
export interface CompanyApiListCompaniesUsingGET1Request {
    fields?: Array<string>;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface CompanyApiPatchCompanyUsingPATCHRequest {
    companyId: string;
    updateMask?: Array<string>;
    company?: PatchCompanyRequest;
}
export declare class ObjectCompanyApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CompanyApiRequestFactory, responseProcessor?: CompanyApiResponseProcessor);
    createCompanyUsingPOST1WithHttpInfo(param?: CompanyApiCreateCompanyUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Company>>;
    createCompanyUsingPOST1(param?: CompanyApiCreateCompanyUsingPOST1Request, options?: Configuration): Promise<Company>;
    deleteCompanyUsingDELETEWithHttpInfo(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteCompanyUsingDELETE(param: CompanyApiDeleteCompanyUsingDELETERequest, options?: Configuration): Promise<void>;
    getCompanyUsingGET1WithHttpInfo(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<HttpInfo<Company>>;
    getCompanyUsingGET1(param: CompanyApiGetCompanyUsingGET1Request, options?: Configuration): Promise<Company>;
    listCompaniesUsingGET1WithHttpInfo(param?: CompanyApiListCompaniesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListCompaniesResponse>>;
    listCompaniesUsingGET1(param?: CompanyApiListCompaniesUsingGET1Request, options?: Configuration): Promise<ListCompaniesResponse>;
    patchCompanyUsingPATCHWithHttpInfo(param: CompanyApiPatchCompanyUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<Company>>;
    patchCompanyUsingPATCH(param: CompanyApiPatchCompanyUsingPATCHRequest, options?: Configuration): Promise<Company>;
}
import { ContactApiRequestFactory, ContactApiResponseProcessor } from "../apis/ContactApi";
export interface ContactApiCreateContactLinkTypeUsingPOSTRequest {
    request: CreateContactLinkTypeRequest;
}
export interface ContactApiCreateContactUsingPOST1Request {
    contact?: CreatePatchContactRequest;
}
export interface ContactApiDeleteContactUsingDELETE1Request {
    contactId: string;
}
export interface ContactApiGetContactUsingGET1Request {
    contactId: string;
    fields?: Array<string>;
}
export interface ContactApiGetContactsBySearchTermUsingGET0Request {
    searchParam: string;
}
export interface ContactApiLinkContactsUsingPOSTRequest {
    linkContactsRequest: LinkContactsRequest;
}
export interface ContactApiListContactLinkTypesUsingGETRequest {
    filter?: 'name';
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface ContactApiListContactLinksUsingGETRequest {
    contactId: string;
}
export interface ContactApiListContactsUsingGET1Request {
    fields?: Array<string>;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface ContactApiListPaymentMethodsUsingGETRequest {
    contactId: number;
}
export interface ContactApiPatchContactUsingPATCHRequest {
    contactId: string;
    updateMask?: Array<string>;
    contact?: CreatePatchContactRequest;
}
export interface ContactApiRetrieveContactModelUsingGET1Request {
}
export interface ContactApiUnlinkContactsUsingPOSTRequest {
    linkContactsRequest: LinkContactsRequest;
}
export declare class ObjectContactApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor);
    createContactLinkTypeUsingPOSTWithHttpInfo(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLinkType>>;
    createContactLinkTypeUsingPOST(param: ContactApiCreateContactLinkTypeUsingPOSTRequest, options?: Configuration): Promise<ContactLinkType>;
    createContactUsingPOST1WithHttpInfo(param?: ContactApiCreateContactUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Contact>>;
    createContactUsingPOST1(param?: ContactApiCreateContactUsingPOST1Request, options?: Configuration): Promise<Contact>;
    deleteContactUsingDELETE1WithHttpInfo(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteContactUsingDELETE1(param: ContactApiDeleteContactUsingDELETE1Request, options?: Configuration): Promise<void>;
    getContactUsingGET1WithHttpInfo(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<HttpInfo<Contact>>;
    getContactUsingGET1(param: ContactApiGetContactUsingGET1Request, options?: Configuration): Promise<Contact>;
    getContactsBySearchTermUsingGETWithHttpInfo(param: ContactApiGetContactsBySearchTermUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>>;
    getContactsBySearchTermUsingGET(param: ContactApiGetContactsBySearchTermUsingGET0Request, options?: Configuration): Promise<ListBasicContactResponse>;
    linkContactsUsingPOSTWithHttpInfo(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ContactLink>>;
    linkContactsUsingPOST(param: ContactApiLinkContactsUsingPOSTRequest, options?: Configuration): Promise<ContactLink>;
    listContactLinkTypesUsingGETWithHttpInfo(param?: ContactApiListContactLinkTypesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListContactLinkTypesResponse>>;
    listContactLinkTypesUsingGET(param?: ContactApiListContactLinkTypesUsingGETRequest, options?: Configuration): Promise<ListContactLinkTypesResponse>;
    listContactLinksUsingGETWithHttpInfo(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListContactLinksResponse>>;
    listContactLinksUsingGET(param: ContactApiListContactLinksUsingGETRequest, options?: Configuration): Promise<ListContactLinksResponse>;
    listContactsUsingGET1WithHttpInfo(param?: ContactApiListContactsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListContactsResponse>>;
    listContactsUsingGET1(param?: ContactApiListContactsUsingGET1Request, options?: Configuration): Promise<ListContactsResponse>;
    listPaymentMethodsUsingGETWithHttpInfo(param: ContactApiListPaymentMethodsUsingGETRequest, options?: Configuration): Promise<HttpInfo<PaymentMethodList>>;
    listPaymentMethodsUsingGET(param: ContactApiListPaymentMethodsUsingGETRequest, options?: Configuration): Promise<PaymentMethodList>;
    patchContactUsingPATCHWithHttpInfo(param: ContactApiPatchContactUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<Contact>>;
    patchContactUsingPATCH(param: ContactApiPatchContactUsingPATCHRequest, options?: Configuration): Promise<Contact>;
    retrieveContactModelUsingGET1WithHttpInfo(param?: ContactApiRetrieveContactModelUsingGET1Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveContactModelUsingGET1(param?: ContactApiRetrieveContactModelUsingGET1Request, options?: Configuration): Promise<ObjectModel>;
    unlinkContactsUsingPOSTWithHttpInfo(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    unlinkContactsUsingPOST(param: ContactApiUnlinkContactsUsingPOSTRequest, options?: Configuration): Promise<void>;
}
import { DiscountApiRequestFactory, DiscountApiResponseProcessor } from "../apis/DiscountApi";
export interface DiscountApiGetCategoryDiscountUsingGET0Request {
    discountId: string;
}
export declare class ObjectDiscountApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DiscountApiRequestFactory, responseProcessor?: DiscountApiResponseProcessor);
    getCategoryDiscountUsingGETWithHttpInfo(param: DiscountApiGetCategoryDiscountUsingGET0Request, options?: Configuration): Promise<HttpInfo<CategoryDiscount>>;
    getCategoryDiscountUsingGET(param: DiscountApiGetCategoryDiscountUsingGET0Request, options?: Configuration): Promise<CategoryDiscount>;
}
import { EmailApiRequestFactory, EmailApiResponseProcessor } from "../apis/EmailApi";
export interface EmailApiCreateEmailUsingPOST1Request {
    emailWithContent: CreateEmailSentRequest;
}
export interface EmailApiCreateEmailsUsingPOST1Request {
    createEmailsSentRequest?: CreateEmailsSentRequest;
}
export interface EmailApiDeleteEmailUsingDELETE1Request {
    id: string;
}
export interface EmailApiDeleteEmailsUsingPOST1Request {
    deleteEmailsRequest: DeleteEmailsRequest;
}
export interface EmailApiGetEmailUsingGET1Request {
    id: string;
}
export interface EmailApiSendEmailUsingPOST1Request {
    emailSendRequest?: EmailSendRequest;
}
export declare class ObjectEmailApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EmailApiRequestFactory, responseProcessor?: EmailApiResponseProcessor);
    createEmailUsingPOST1WithHttpInfo(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>>;
    createEmailUsingPOST1(param: EmailApiCreateEmailUsingPOST1Request, options?: Configuration): Promise<EmailSentWithContent>;
    createEmailsUsingPOST1WithHttpInfo(param?: EmailApiCreateEmailsUsingPOST1Request, options?: Configuration): Promise<HttpInfo<EmailsSentList>>;
    createEmailsUsingPOST1(param?: EmailApiCreateEmailsUsingPOST1Request, options?: Configuration): Promise<EmailsSentList>;
    deleteEmailUsingDELETE1WithHttpInfo(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteEmailUsingDELETE1(param: EmailApiDeleteEmailUsingDELETE1Request, options?: Configuration): Promise<void>;
    deleteEmailsUsingPOST1WithHttpInfo(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<HttpInfo<DeleteEmailsResponse>>;
    deleteEmailsUsingPOST1(param: EmailApiDeleteEmailsUsingPOST1Request, options?: Configuration): Promise<DeleteEmailsResponse>;
    getEmailUsingGET1WithHttpInfo(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<HttpInfo<EmailSentWithContent>>;
    getEmailUsingGET1(param: EmailApiGetEmailUsingGET1Request, options?: Configuration): Promise<EmailSentWithContent>;
    sendEmailUsingPOST1WithHttpInfo(param?: EmailApiSendEmailUsingPOST1Request, options?: Configuration): Promise<HttpInfo<void>>;
    sendEmailUsingPOST1(param?: EmailApiSendEmailUsingPOST1Request, options?: Configuration): Promise<void>;
}
import { EmailAddressApiRequestFactory, EmailAddressApiResponseProcessor } from "../apis/EmailAddressApi";
export interface EmailAddressApiGetEmailAddressStatusUsingGETRequest {
    email: string;
}
export interface EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest {
    email: string;
    updateEmailAddress: UpdateEmailAddress;
}
export declare class ObjectEmailAddressApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EmailAddressApiRequestFactory, responseProcessor?: EmailAddressApiResponseProcessor);
    getEmailAddressStatusUsingGETWithHttpInfo(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>>;
    getEmailAddressStatusUsingGET(param: EmailAddressApiGetEmailAddressStatusUsingGETRequest, options?: Configuration): Promise<RestEmailAddress>;
    updateEmailAddressOptStatusUsingPUTWithHttpInfo(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<HttpInfo<RestEmailAddress>>;
    updateEmailAddressOptStatusUsingPUT(param: EmailAddressApiUpdateEmailAddressOptStatusUsingPUTRequest, options?: Configuration): Promise<RestEmailAddress>;
}
import { FunnelIntegrationApiRequestFactory, FunnelIntegrationApiResponseProcessor } from "../apis/FunnelIntegrationApi";
export interface FunnelIntegrationApiCreateFunnelIntegrationUsingPOST0Request {
    createFunnelIntegrationRequest: CreateFunnelIntegrationRequest;
}
export interface FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOST0Request {
    createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents;
}
export interface FunnelIntegrationApiDeleteFunnelIntegrationUsingPOST0Request {
    deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest;
}
export declare class ObjectFunnelIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FunnelIntegrationApiRequestFactory, responseProcessor?: FunnelIntegrationApiResponseProcessor);
    createFunnelIntegrationUsingPOSTWithHttpInfo(param: FunnelIntegrationApiCreateFunnelIntegrationUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    createFunnelIntegrationUsingPOST(param: FunnelIntegrationApiCreateFunnelIntegrationUsingPOST0Request, options?: Configuration): Promise<void>;
    createIntegrationTriggerEventUsingPOSTWithHttpInfo(param: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOST0Request, options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>>;
    createIntegrationTriggerEventUsingPOST(param: FunnelIntegrationApiCreateIntegrationTriggerEventUsingPOST0Request, options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>>;
    deleteFunnelIntegrationUsingPOSTWithHttpInfo(param: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteFunnelIntegrationUsingPOST(param: FunnelIntegrationApiDeleteFunnelIntegrationUsingPOST0Request, options?: Configuration): Promise<void>;
}
import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor } from "../apis/LandingPagesApi";
export interface LandingPagesApiListLandingPagesUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectLandingPagesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LandingPagesApiRequestFactory, responseProcessor?: LandingPagesApiResponseProcessor);
    listLandingPagesUsingGETWithHttpInfo(param?: LandingPagesApiListLandingPagesUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>>;
    listLandingPagesUsingGET(param?: LandingPagesApiListLandingPagesUsingGET0Request, options?: Configuration): Promise<ListLandingPagesResponse>;
}
import { LeadSourcesApiRequestFactory, LeadSourcesApiResponseProcessor } from "../apis/LeadSourcesApi";
export interface LeadSourcesApiCreateLeadSourceUsingPOST0Request {
    leadsource?: CreateLeadSourceRequest;
}
export interface LeadSourcesApiListLeadSourcesUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectLeadSourcesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LeadSourcesApiRequestFactory, responseProcessor?: LeadSourcesApiResponseProcessor);
    createLeadSourceUsingPOSTWithHttpInfo(param?: LeadSourcesApiCreateLeadSourceUsingPOST0Request, options?: Configuration): Promise<HttpInfo<LeadSource>>;
    createLeadSourceUsingPOST(param?: LeadSourcesApiCreateLeadSourceUsingPOST0Request, options?: Configuration): Promise<LeadSource>;
    listLeadSourcesUsingGETWithHttpInfo(param?: LeadSourcesApiListLeadSourcesUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>>;
    listLeadSourcesUsingGET(param?: LeadSourcesApiListLeadSourcesUsingGET0Request, options?: Configuration): Promise<ListLeadSourcesResponse>;
}
import { LocaleApiRequestFactory, LocaleApiResponseProcessor } from "../apis/LocaleApi";
export interface LocaleApiListCountriesUsingGET20Request {
}
export interface LocaleApiListProvincesForCountryUsingGET0Request {
    countryCode: string;
}
export declare class ObjectLocaleApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LocaleApiRequestFactory, responseProcessor?: LocaleApiResponseProcessor);
    listCountriesUsingGET2WithHttpInfo(param?: LocaleApiListCountriesUsingGET20Request, options?: Configuration): Promise<HttpInfo<ListCountriesResponse>>;
    listCountriesUsingGET2(param?: LocaleApiListCountriesUsingGET20Request, options?: Configuration): Promise<ListCountriesResponse>;
    listProvincesForCountryUsingGETWithHttpInfo(param: LocaleApiListProvincesForCountryUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListProvincesResponse>>;
    listProvincesForCountryUsingGET(param: LocaleApiListProvincesForCountryUsingGET0Request, options?: Configuration): Promise<ListProvincesResponse>;
}
import { MerchantApiRequestFactory, MerchantApiResponseProcessor } from "../apis/MerchantApi";
export interface MerchantApiListMerchantsUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectMerchantApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MerchantApiRequestFactory, responseProcessor?: MerchantApiResponseProcessor);
    listMerchantsUsingGETWithHttpInfo(param?: MerchantApiListMerchantsUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>>;
    listMerchantsUsingGET(param?: MerchantApiListMerchantsUsingGET0Request, options?: Configuration): Promise<ListRestMerchantResponse>;
}
import { NoteApiRequestFactory, NoteApiResponseProcessor } from "../apis/NoteApi";
export interface NoteApiCreateNoteCustomFieldUsingPOST10Request {
    customField: CreateCustomFieldRequest;
}
export interface NoteApiCreateNoteUsingPOST1Request {
    contactId: string;
    request: CreateNoteRequest;
}
export interface NoteApiDeleteNoteUsingDELETE1Request {
    contactId: string;
    noteId: string;
}
export interface NoteApiGetNoteUsingGET1Request {
    contactId: string;
    noteId: string;
}
export interface NoteApiListNotesUsingGET1Request {
    contactId: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface NoteApiRetrieveNoteModelUsingGET10Request {
}
export interface NoteApiUpdateNoteUsingPATCHRequest {
    contactId: string;
    noteId: string;
    updateNoteRequest: UpdateNoteRequest;
    updateMask?: Array<string>;
}
export interface NoteApiUpdateNotesCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export declare class ObjectNoteApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NoteApiRequestFactory, responseProcessor?: NoteApiResponseProcessor);
    createNoteCustomFieldUsingPOST1WithHttpInfo(param: NoteApiCreateNoteCustomFieldUsingPOST10Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createNoteCustomFieldUsingPOST1(param: NoteApiCreateNoteCustomFieldUsingPOST10Request, options?: Configuration): Promise<CustomFieldMetaData>;
    createNoteUsingPOST1WithHttpInfo(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Note>>;
    createNoteUsingPOST1(param: NoteApiCreateNoteUsingPOST1Request, options?: Configuration): Promise<Note>;
    deleteNoteUsingDELETE1WithHttpInfo(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteNoteUsingDELETE1(param: NoteApiDeleteNoteUsingDELETE1Request, options?: Configuration): Promise<void>;
    getNoteUsingGET1WithHttpInfo(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<HttpInfo<GetNoteResponse>>;
    getNoteUsingGET1(param: NoteApiGetNoteUsingGET1Request, options?: Configuration): Promise<GetNoteResponse>;
    listNotesUsingGET1WithHttpInfo(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListNotesResponse>>;
    listNotesUsingGET1(param: NoteApiListNotesUsingGET1Request, options?: Configuration): Promise<ListNotesResponse>;
    retrieveNoteModelUsingGET1WithHttpInfo(param?: NoteApiRetrieveNoteModelUsingGET10Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveNoteModelUsingGET1(param?: NoteApiRetrieveNoteModelUsingGET10Request, options?: Configuration): Promise<ObjectModel>;
    updateNoteUsingPATCHWithHttpInfo(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateNoteResponse>>;
    updateNoteUsingPATCH(param: NoteApiUpdateNoteUsingPATCHRequest, options?: Configuration): Promise<UpdateNoteResponse>;
    updateNotesCustomFieldUsingPATCHWithHttpInfo(param: NoteApiUpdateNotesCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateNotesCustomFieldUsingPATCH(param: NoteApiUpdateNotesCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
}
import { OpportunityApiRequestFactory, OpportunityApiResponseProcessor } from "../apis/OpportunityApi";
export interface OpportunityApiCreateOpportunityCustomFieldsUsingPOST0Request {
    customField: CreateCustomFieldRequest;
}
export interface OpportunityApiCreateOpportunityStageUsingPOST0Request {
    opportunityStage?: CreateOpportunityStageRequest;
}
export interface OpportunityApiCreateOpportunityUsingPOST10Request {
    opportunity?: CreateOpportunityRequest;
}
export interface OpportunityApiDeleteOpportunityStageUsingDELETE0Request {
    stageId: string;
}
export interface OpportunityApiDeleteOpportunityUsingDELETE0Request {
    opportunityId: string;
}
export interface OpportunityApiGetOpportunityStageUsingGET0Request {
    stageId: string;
}
export interface OpportunityApiGetOpportunityUsingGET10Request {
    opportunityId: string;
}
export interface OpportunityApiListOpportunitiesUsingGET10Request {
    fields?: Array<string>;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface OpportunityApiListOpportunityStagesUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface OpportunityApiUpdateOpportunityCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface OpportunityApiUpdateOpportunityUsingPATCH0Request {
    opportunityId: string;
    request: PatchOpportunityRequest;
    updateMask?: Array<string>;
}
export declare class ObjectOpportunityApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: OpportunityApiRequestFactory, responseProcessor?: OpportunityApiResponseProcessor);
    createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param: OpportunityApiCreateOpportunityCustomFieldsUsingPOST0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createOpportunityCustomFieldsUsingPOST(param: OpportunityApiCreateOpportunityCustomFieldsUsingPOST0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    createOpportunityStageUsingPOSTWithHttpInfo(param?: OpportunityApiCreateOpportunityStageUsingPOST0Request, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>>;
    createOpportunityStageUsingPOST(param?: OpportunityApiCreateOpportunityStageUsingPOST0Request, options?: Configuration): Promise<RestOpportunityStage>;
    createOpportunityUsingPOST1WithHttpInfo(param?: OpportunityApiCreateOpportunityUsingPOST10Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    createOpportunityUsingPOST1(param?: OpportunityApiCreateOpportunityUsingPOST10Request, options?: Configuration): Promise<RestV2Opportunity>;
    deleteOpportunityStageUsingDELETEWithHttpInfo(param: OpportunityApiDeleteOpportunityStageUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOpportunityStageUsingDELETE(param: OpportunityApiDeleteOpportunityStageUsingDELETE0Request, options?: Configuration): Promise<void>;
    deleteOpportunityUsingDELETEWithHttpInfo(param: OpportunityApiDeleteOpportunityUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOpportunityUsingDELETE(param: OpportunityApiDeleteOpportunityUsingDELETE0Request, options?: Configuration): Promise<void>;
    getOpportunityStageUsingGETWithHttpInfo(param: OpportunityApiGetOpportunityStageUsingGET0Request, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>>;
    getOpportunityStageUsingGET(param: OpportunityApiGetOpportunityStageUsingGET0Request, options?: Configuration): Promise<RestOpportunityStage>;
    getOpportunityUsingGET1WithHttpInfo(param: OpportunityApiGetOpportunityUsingGET10Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    getOpportunityUsingGET1(param: OpportunityApiGetOpportunityUsingGET10Request, options?: Configuration): Promise<RestV2Opportunity>;
    listOpportunitiesUsingGET1WithHttpInfo(param?: OpportunityApiListOpportunitiesUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>>;
    listOpportunitiesUsingGET1(param?: OpportunityApiListOpportunitiesUsingGET10Request, options?: Configuration): Promise<ListOpportunitiesResponse>;
    listOpportunityStagesUsingGETWithHttpInfo(param?: OpportunityApiListOpportunityStagesUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>>;
    listOpportunityStagesUsingGET(param?: OpportunityApiListOpportunityStagesUsingGET0Request, options?: Configuration): Promise<ListOpportunityStagesResponse>;
    updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param: OpportunityApiUpdateOpportunityCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOpportunityCustomFieldUsingPATCH(param: OpportunityApiUpdateOpportunityCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    updateOpportunityUsingPATCHWithHttpInfo(param: OpportunityApiUpdateOpportunityUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    updateOpportunityUsingPATCH(param: OpportunityApiUpdateOpportunityUsingPATCH0Request, options?: Configuration): Promise<RestV2Opportunity>;
}
import { OrdersApiRequestFactory, OrdersApiResponseProcessor } from "../apis/OrdersApi";
export interface OrdersApiCreateOrderCustomFieldUsingPOST0Request {
    customField: CreateCustomFieldRequest;
}
export interface OrdersApiCreateOrderItemsOnOrderUsingPOST10Request {
    orderId: string;
    createRestOrderItemRequest: CreateRestOrderItemRequest;
}
export interface OrdersApiCreateOrderUsingPOST10Request {
    createOrderRequest: RestCreateOrderRequest;
}
export interface OrdersApiCreatePaymentOnOrderUsingPOST1Request {
    orderId: string;
    createPaymentRequest: CreatePaymentRequest;
}
export interface OrdersApiDeleteOrderUsingDELETE10Request {
    orderId: string;
}
export interface OrdersApiGetOrderUsingGET10Request {
    orderId: string;
}
export interface OrdersApiListOrdersUsingGET10Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface OrdersApiRetrieveOrderCustomFieldModelUsingGET0Request {
}
export interface OrdersApiUpdateOrderCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export declare class ObjectOrdersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: OrdersApiRequestFactory, responseProcessor?: OrdersApiResponseProcessor);
    createOrderCustomFieldUsingPOSTWithHttpInfo(param: OrdersApiCreateOrderCustomFieldUsingPOST0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createOrderCustomFieldUsingPOST(param: OrdersApiCreateOrderCustomFieldUsingPOST0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    createOrderItemsOnOrderUsingPOST1WithHttpInfo(param: OrdersApiCreateOrderItemsOnOrderUsingPOST10Request, options?: Configuration): Promise<HttpInfo<RestV2OrderItem>>;
    createOrderItemsOnOrderUsingPOST1(param: OrdersApiCreateOrderItemsOnOrderUsingPOST10Request, options?: Configuration): Promise<RestV2OrderItem>;
    createOrderUsingPOST1WithHttpInfo(param: OrdersApiCreateOrderUsingPOST10Request, options?: Configuration): Promise<HttpInfo<RestV2Order>>;
    createOrderUsingPOST1(param: OrdersApiCreateOrderUsingPOST10Request, options?: Configuration): Promise<RestV2Order>;
    createPaymentOnOrderUsingPOST1WithHttpInfo(param: OrdersApiCreatePaymentOnOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<PaymentResult>>;
    createPaymentOnOrderUsingPOST1(param: OrdersApiCreatePaymentOnOrderUsingPOST1Request, options?: Configuration): Promise<PaymentResult>;
    deleteOrderUsingDELETE1WithHttpInfo(param: OrdersApiDeleteOrderUsingDELETE10Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOrderUsingDELETE1(param: OrdersApiDeleteOrderUsingDELETE10Request, options?: Configuration): Promise<void>;
    getOrderUsingGET1WithHttpInfo(param: OrdersApiGetOrderUsingGET10Request, options?: Configuration): Promise<HttpInfo<RestV2Order>>;
    getOrderUsingGET1(param: OrdersApiGetOrderUsingGET10Request, options?: Configuration): Promise<RestV2Order>;
    listOrdersUsingGET1WithHttpInfo(param?: OrdersApiListOrdersUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListOrders>>;
    listOrdersUsingGET1(param?: OrdersApiListOrdersUsingGET10Request, options?: Configuration): Promise<ListOrders>;
    retrieveOrderCustomFieldModelUsingGETWithHttpInfo(param?: OrdersApiRetrieveOrderCustomFieldModelUsingGET0Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveOrderCustomFieldModelUsingGET(param?: OrdersApiRetrieveOrderCustomFieldModelUsingGET0Request, options?: Configuration): Promise<ObjectModel>;
    updateOrderCustomFieldUsingPATCHWithHttpInfo(param: OrdersApiUpdateOrderCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOrderCustomFieldUsingPATCH(param: OrdersApiUpdateOrderCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
}
import { PaymentMethodConfigApiRequestFactory, PaymentMethodConfigApiResponseProcessor } from "../apis/PaymentMethodConfigApi";
export interface PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest {
    request: CreatePaymentMethodConfigRequest;
}
export declare class ObjectPaymentMethodConfigApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentMethodConfigApiRequestFactory, responseProcessor?: PaymentMethodConfigApiResponseProcessor);
    createPaymentMethodConfigUsingPOSTWithHttpInfo(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<PaymentMethodConfig>>;
    createPaymentMethodConfigUsingPOST(param: PaymentMethodConfigApiCreatePaymentMethodConfigUsingPOSTRequest, options?: Configuration): Promise<PaymentMethodConfig>;
}
import { PreReleaseApiRequestFactory, PreReleaseApiResponseProcessor } from "../apis/PreReleaseApi";
export interface PreReleaseApiAddAffiliateToProgramUsingPOSTRequest {
    id: string;
    affiliateAddToProgramRequest: AffiliateAddToProgramRequest;
}
export interface PreReleaseApiAddCommissionProgramUsingPOSTRequest {
    insertCommissionProgram?: CreateCommissionProgramRequest;
}
export interface PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest {
    commissionProgramId: string;
    productCommissionProgram?: CreateProductCommissionProgramRequest;
}
export interface PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest {
    commissionProgramId: string;
    subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest;
}
export interface PreReleaseApiCancelSubscriptionUsingPOSTRequest {
    subscriptionId: string;
    cancelSubscriptionsRequest: CancelSubscriptionsRequest;
}
export interface PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest {
    commissionProgramId: string;
    createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest;
}
export interface PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest {
    createFunnelIntegrationRequest: CreateFunnelIntegrationRequest;
}
export interface PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest {
    createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents;
}
export interface PreReleaseApiCreateLeadSourceUsingPOSTRequest {
    leadsource?: CreateLeadSourceRequest;
}
export interface PreReleaseApiCreateNoteCustomFieldUsingPOST1Request {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateOpportunityStageUsingPOSTRequest {
    opportunityStage?: CreateOpportunityStageRequest;
}
export interface PreReleaseApiCreateOpportunityUsingPOST1Request {
    opportunity?: CreateOpportunityRequest;
}
export interface PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request {
    orderId: string;
    createRestOrderItemRequest: CreateRestOrderItemRequest;
}
export interface PreReleaseApiCreateOrderUsingPOST1Request {
    createOrderRequest: RestCreateOrderRequest;
}
export interface PreReleaseApiCreateRedirectLinkUsingPOSTRequest {
    request: CreateOrPatchAffiliateLinkRequest;
}
export interface PreReleaseApiCreateReferralUsingPOSTRequest {
    request: CreateReferralRequest;
}
export interface PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateTaskCustomFieldUsingPOST1Request {
    customField: CreateCustomFieldRequest;
}
export interface PreReleaseApiCreateTaskUsingPOST1Request {
    task?: CreateTaskRequest;
}
export interface PreReleaseApiCreateUserUsingPOST1Request {
    user?: CreateUserRequestV2;
}
export interface PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest {
    commissionProgramId: string;
}
export interface PreReleaseApiDeleteAffiliateUsingDELETERequest {
    id: string;
}
export interface PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest {
    deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest;
}
export interface PreReleaseApiDeleteOpportunityStageUsingDELETERequest {
    stageId: string;
}
export interface PreReleaseApiDeleteOpportunityUsingDELETERequest {
    opportunityId: string;
}
export interface PreReleaseApiDeleteOrderUsingDELETE1Request {
    orderId: string;
}
export interface PreReleaseApiDeleteRedirectLinkUsingDELETERequest {
    redirectId: string;
}
export interface PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest {
    customFieldId: string;
}
export interface PreReleaseApiDeleteTaskUsingDELETE1Request {
    taskId: string;
}
export interface PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest {
    affiliateId: string;
}
export interface PreReleaseApiGetAffiliateCommissionsUsingGETRequest {
    affiliateId: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest {
}
export interface PreReleaseApiGetCategoryDiscountUsingGETRequest {
    discountId: string;
}
export interface PreReleaseApiGetCommissionProgramUsingGETRequest {
    commissionProgramId: string;
}
export interface PreReleaseApiGetContactsBySearchTermUsingGETRequest {
    searchParam: string;
}
export interface PreReleaseApiGetOpportunityStageUsingGETRequest {
    stageId: string;
}
export interface PreReleaseApiGetOpportunityUsingGET1Request {
    opportunityId: string;
}
export interface PreReleaseApiGetOrderUsingGET1Request {
    orderId: string;
}
export interface PreReleaseApiGetRedirectLinkUsingGETRequest {
    redirectId: string;
}
export interface PreReleaseApiGetTaskUsingGET1Request {
    taskId: string;
}
export interface PreReleaseApiGetUserByIdUsingGETRequest {
    userId: string;
}
export interface PreReleaseApiGetUserInfoUsingGET1Request {
}
export interface PreReleaseApiGetUserSignatureUsingGET1Request {
    userId: string;
}
export interface PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListAffiliateLinksUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListCountriesUsingGET2Request {
}
export interface PreReleaseApiListLandingPagesUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListLeadSourcesUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListMerchantsUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListOpportunitiesUsingGET1Request {
    fields?: Array<string>;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListOpportunityStagesUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListOrdersUsingGET1Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListProductsUsingGET1Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListProvincesForCountryUsingGETRequest {
    countryCode: string;
}
export interface PreReleaseApiListShippingMethodsUsingGETRequest {
}
export interface PreReleaseApiListSubscriptionPlansUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListSummariesUsingGET1Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface PreReleaseApiListTasksUsingGET1Request {
    endDueTime?: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    startDueTime?: string;
}
export interface PreReleaseApiListUsersUsingGET1Request {
    filter?: string;
    orderBy?: string;
}
export interface PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest;
}
export interface PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest;
}
export interface PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest {
    commissionProgramId: string;
    updateMask?: Array<string>;
    patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest;
}
export interface PreReleaseApiPatchTaskUsingPATCHRequest {
    taskId: string;
    updateMask?: Array<string>;
    task?: CreatePatchTaskRequest;
}
export interface PreReleaseApiPatchUserUsingPATCHRequest {
    userId: string;
    updateMask?: Array<string>;
    user?: PatchUserRequestV2;
}
export interface PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest {
    id: string;
    removeFromProgramRequest: AffiliateRemoveFromProgramRequest;
}
export interface PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest {
    commissionId: string;
    deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest;
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
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateOpportunityUsingPATCHRequest {
    opportunityId: string;
    request: PatchOpportunityRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateRedirectLinkUsingPATCHRequest {
    redirectId: string;
    request: CreateOrPatchAffiliateLinkRequest;
}
export interface PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export interface PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export declare class ObjectPreReleaseApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PreReleaseApiRequestFactory, responseProcessor?: PreReleaseApiResponseProcessor);
    addAffiliateToProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    addAffiliateToProgramUsingPOST(param: PreReleaseApiAddAffiliateToProgramUsingPOSTRequest, options?: Configuration): Promise<void>;
    addCommissionProgramUsingPOSTWithHttpInfo(param?: PreReleaseApiAddCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionProgramResponse>>;
    addCommissionProgramUsingPOST(param?: PreReleaseApiAddCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<AffiliateCommissionProgramResponse>;
    assignProductCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>>;
    assignProductCommissionProgramUsingPOST(param: PreReleaseApiAssignProductCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<ProductCommissionProgram>;
    assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    assignSubscriptionCommissionProgramUsingPOST(param: PreReleaseApiAssignSubscriptionCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SubscriptionCommissionProgram>;
    cancelSubscriptionUsingPOSTWithHttpInfo(param: PreReleaseApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    cancelSubscriptionUsingPOST(param: PreReleaseApiCancelSubscriptionUsingPOSTRequest, options?: Configuration): Promise<void>;
    createAffiliateCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createAffiliateCustomFieldUsingPOST(param: PreReleaseApiCreateAffiliateCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    createDefaultCommissionProgramUsingPOSTWithHttpInfo(param: PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    createDefaultCommissionProgramUsingPOST(param: PreReleaseApiCreateDefaultCommissionProgramUsingPOSTRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse>;
    createFunnelIntegrationUsingPOSTWithHttpInfo(param: PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    createFunnelIntegrationUsingPOST(param: PreReleaseApiCreateFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void>;
    createIntegrationTriggerEventUsingPOSTWithHttpInfo(param: PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>>;
    createIntegrationTriggerEventUsingPOST(param: PreReleaseApiCreateIntegrationTriggerEventUsingPOSTRequest, options?: Configuration): Promise<Array<FunnelIntegrationTriggerResultDTO>>;
    createLeadSourceUsingPOSTWithHttpInfo(param?: PreReleaseApiCreateLeadSourceUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<LeadSource>>;
    createLeadSourceUsingPOST(param?: PreReleaseApiCreateLeadSourceUsingPOSTRequest, options?: Configuration): Promise<LeadSource>;
    createNoteCustomFieldUsingPOST1WithHttpInfo(param: PreReleaseApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createNoteCustomFieldUsingPOST1(param: PreReleaseApiCreateNoteCustomFieldUsingPOST1Request, options?: Configuration): Promise<CustomFieldMetaData>;
    createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createOpportunityCustomFieldsUsingPOST(param: PreReleaseApiCreateOpportunityCustomFieldsUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    createOpportunityStageUsingPOSTWithHttpInfo(param?: PreReleaseApiCreateOpportunityStageUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>>;
    createOpportunityStageUsingPOST(param?: PreReleaseApiCreateOpportunityStageUsingPOSTRequest, options?: Configuration): Promise<RestOpportunityStage>;
    createOpportunityUsingPOST1WithHttpInfo(param?: PreReleaseApiCreateOpportunityUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    createOpportunityUsingPOST1(param?: PreReleaseApiCreateOpportunityUsingPOST1Request, options?: Configuration): Promise<RestV2Opportunity>;
    createOrderCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createOrderCustomFieldUsingPOST(param: PreReleaseApiCreateOrderCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    createOrderItemsOnOrderUsingPOST1WithHttpInfo(param: PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2OrderItem>>;
    createOrderItemsOnOrderUsingPOST1(param: PreReleaseApiCreateOrderItemsOnOrderUsingPOST1Request, options?: Configuration): Promise<RestV2OrderItem>;
    createOrderUsingPOST1WithHttpInfo(param: PreReleaseApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>>;
    createOrderUsingPOST1(param: PreReleaseApiCreateOrderUsingPOST1Request, options?: Configuration): Promise<RestV2Order>;
    createRedirectLinkUsingPOSTWithHttpInfo(param: PreReleaseApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    createRedirectLinkUsingPOST(param: PreReleaseApiCreateRedirectLinkUsingPOSTRequest, options?: Configuration): Promise<AffiliateLink>;
    createReferralUsingPOSTWithHttpInfo(param: PreReleaseApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<Referral>>;
    createReferralUsingPOST(param: PreReleaseApiCreateReferralUsingPOSTRequest, options?: Configuration): Promise<Referral>;
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param: PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createSubscriptionCustomFieldUsingPOST(param: PreReleaseApiCreateSubscriptionCustomFieldUsingPOSTRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    createTaskCustomFieldUsingPOST1WithHttpInfo(param: PreReleaseApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>>;
    createTaskCustomFieldUsingPOST1(param: PreReleaseApiCreateTaskCustomFieldUsingPOST1Request, options?: Configuration): Promise<CreateCustomFieldResponse>;
    createTaskUsingPOST1WithHttpInfo(param?: PreReleaseApiCreateTaskUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Task>>;
    createTaskUsingPOST1(param?: PreReleaseApiCreateTaskUsingPOST1Request, options?: Configuration): Promise<Task>;
    createUserUsingPOST1WithHttpInfo(param?: PreReleaseApiCreateUserUsingPOST1Request, options?: Configuration): Promise<HttpInfo<User>>;
    createUserUsingPOST1(param?: PreReleaseApiCreateUserUsingPOST1Request, options?: Configuration): Promise<User>;
    deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteAffiliateCommissionProgramUsingDELETE(param: PreReleaseApiDeleteAffiliateCommissionProgramUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteAffiliateUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteAffiliateUsingDELETE(param: PreReleaseApiDeleteAffiliateUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteFunnelIntegrationUsingPOSTWithHttpInfo(param: PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteFunnelIntegrationUsingPOST(param: PreReleaseApiDeleteFunnelIntegrationUsingPOSTRequest, options?: Configuration): Promise<void>;
    deleteOpportunityStageUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOpportunityStageUsingDELETE(param: PreReleaseApiDeleteOpportunityStageUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteOpportunityUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOpportunityUsingDELETE(param: PreReleaseApiDeleteOpportunityUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteOrderUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteOrderUsingDELETE1(param: PreReleaseApiDeleteOrderUsingDELETE1Request, options?: Configuration): Promise<void>;
    deleteRedirectLinkUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteRedirectLinkUsingDELETE(param: PreReleaseApiDeleteRedirectLinkUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteTaskCustomFieldUsingDELETEWithHttpInfo(param: PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTaskCustomFieldUsingDELETE(param: PreReleaseApiDeleteTaskCustomFieldUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteTaskUsingDELETE1WithHttpInfo(param: PreReleaseApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTaskUsingDELETE1(param: PreReleaseApiDeleteTaskUsingDELETE1Request, options?: Configuration): Promise<void>;
    getAffiliateCommissionTotalUsingGETWithHttpInfo(param: PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateCommissionEarned>>;
    getAffiliateCommissionTotalUsingGET(param: PreReleaseApiGetAffiliateCommissionTotalUsingGETRequest, options?: Configuration): Promise<AffiliateCommissionEarned>;
    getAffiliateCommissionsUsingGETWithHttpInfo(param: PreReleaseApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionResponse>>;
    getAffiliateCommissionsUsingGET(param: PreReleaseApiGetAffiliateCommissionsUsingGETRequest, options?: Configuration): Promise<ListAffiliateCommissionResponse>;
    getAffiliateCustomFieldsUsingGETWithHttpInfo(param?: PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    getAffiliateCustomFieldsUsingGET(param?: PreReleaseApiGetAffiliateCustomFieldsUsingGETRequest, options?: Configuration): Promise<ObjectModel>;
    getCategoryDiscountUsingGETWithHttpInfo(param: PreReleaseApiGetCategoryDiscountUsingGETRequest, options?: Configuration): Promise<HttpInfo<CategoryDiscount>>;
    getCategoryDiscountUsingGET(param: PreReleaseApiGetCategoryDiscountUsingGETRequest, options?: Configuration): Promise<CategoryDiscount>;
    getCommissionProgramUsingGETWithHttpInfo(param: PreReleaseApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateProgramV2>>;
    getCommissionProgramUsingGET(param: PreReleaseApiGetCommissionProgramUsingGETRequest, options?: Configuration): Promise<AffiliateProgramV2>;
    getContactsBySearchTermUsingGETWithHttpInfo(param: PreReleaseApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListBasicContactResponse>>;
    getContactsBySearchTermUsingGET(param: PreReleaseApiGetContactsBySearchTermUsingGETRequest, options?: Configuration): Promise<ListBasicContactResponse>;
    getOpportunityStageUsingGETWithHttpInfo(param: PreReleaseApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<HttpInfo<RestOpportunityStage>>;
    getOpportunityStageUsingGET(param: PreReleaseApiGetOpportunityStageUsingGETRequest, options?: Configuration): Promise<RestOpportunityStage>;
    getOpportunityUsingGET1WithHttpInfo(param: PreReleaseApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    getOpportunityUsingGET1(param: PreReleaseApiGetOpportunityUsingGET1Request, options?: Configuration): Promise<RestV2Opportunity>;
    getOrderUsingGET1WithHttpInfo(param: PreReleaseApiGetOrderUsingGET1Request, options?: Configuration): Promise<HttpInfo<RestV2Order>>;
    getOrderUsingGET1(param: PreReleaseApiGetOrderUsingGET1Request, options?: Configuration): Promise<RestV2Order>;
    getRedirectLinkUsingGETWithHttpInfo(param: PreReleaseApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    getRedirectLinkUsingGET(param: PreReleaseApiGetRedirectLinkUsingGETRequest, options?: Configuration): Promise<AffiliateLink>;
    getTaskUsingGET1WithHttpInfo(param: PreReleaseApiGetTaskUsingGET1Request, options?: Configuration): Promise<HttpInfo<Task>>;
    getTaskUsingGET1(param: PreReleaseApiGetTaskUsingGET1Request, options?: Configuration): Promise<Task>;
    getUserByIdUsingGETWithHttpInfo(param: PreReleaseApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<User>>;
    getUserByIdUsingGET(param: PreReleaseApiGetUserByIdUsingGETRequest, options?: Configuration): Promise<User>;
    getUserInfoUsingGET1WithHttpInfo(param?: PreReleaseApiGetUserInfoUsingGET1Request, options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>>;
    getUserInfoUsingGET1(param?: PreReleaseApiGetUserInfoUsingGET1Request, options?: Configuration): Promise<GetUserInfoResponse>;
    getUserSignatureUsingGET1WithHttpInfo(param: PreReleaseApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<HttpInfo<string>>;
    getUserSignatureUsingGET1(param: PreReleaseApiGetUserSignatureUsingGET1Request, options?: Configuration): Promise<string>;
    listAffiliateCommissionProgramsUsingGETWithHttpInfo(param?: PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>>;
    listAffiliateCommissionProgramsUsingGET(param?: PreReleaseApiListAffiliateCommissionProgramsUsingGETRequest, options?: Configuration): Promise<ListAffiliateCommissionProgramsResponse>;
    listAffiliateLinksUsingGETWithHttpInfo(param?: PreReleaseApiListAffiliateLinksUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListAffiliateLinksResponse>>;
    listAffiliateLinksUsingGET(param?: PreReleaseApiListAffiliateLinksUsingGETRequest, options?: Configuration): Promise<ListAffiliateLinksResponse>;
    listCountriesUsingGET2WithHttpInfo(param?: PreReleaseApiListCountriesUsingGET2Request, options?: Configuration): Promise<HttpInfo<ListCountriesResponse>>;
    listCountriesUsingGET2(param?: PreReleaseApiListCountriesUsingGET2Request, options?: Configuration): Promise<ListCountriesResponse>;
    listLandingPagesUsingGETWithHttpInfo(param?: PreReleaseApiListLandingPagesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListLandingPagesResponse>>;
    listLandingPagesUsingGET(param?: PreReleaseApiListLandingPagesUsingGETRequest, options?: Configuration): Promise<ListLandingPagesResponse>;
    listLeadSourcesUsingGETWithHttpInfo(param?: PreReleaseApiListLeadSourcesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListLeadSourcesResponse>>;
    listLeadSourcesUsingGET(param?: PreReleaseApiListLeadSourcesUsingGETRequest, options?: Configuration): Promise<ListLeadSourcesResponse>;
    listMerchantsUsingGETWithHttpInfo(param?: PreReleaseApiListMerchantsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListRestMerchantResponse>>;
    listMerchantsUsingGET(param?: PreReleaseApiListMerchantsUsingGETRequest, options?: Configuration): Promise<ListRestMerchantResponse>;
    listOpportunitiesUsingGET1WithHttpInfo(param?: PreReleaseApiListOpportunitiesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListOpportunitiesResponse>>;
    listOpportunitiesUsingGET1(param?: PreReleaseApiListOpportunitiesUsingGET1Request, options?: Configuration): Promise<ListOpportunitiesResponse>;
    listOpportunityStagesUsingGETWithHttpInfo(param?: PreReleaseApiListOpportunityStagesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListOpportunityStagesResponse>>;
    listOpportunityStagesUsingGET(param?: PreReleaseApiListOpportunityStagesUsingGETRequest, options?: Configuration): Promise<ListOpportunityStagesResponse>;
    listOrdersUsingGET1WithHttpInfo(param?: PreReleaseApiListOrdersUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListOrders>>;
    listOrdersUsingGET1(param?: PreReleaseApiListOrdersUsingGET1Request, options?: Configuration): Promise<ListOrders>;
    listProductsUsingGET1WithHttpInfo(param?: PreReleaseApiListProductsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListProductsResponse>>;
    listProductsUsingGET1(param?: PreReleaseApiListProductsUsingGET1Request, options?: Configuration): Promise<ListProductsResponse>;
    listProvincesForCountryUsingGETWithHttpInfo(param: PreReleaseApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListProvincesResponse>>;
    listProvincesForCountryUsingGET(param: PreReleaseApiListProvincesForCountryUsingGETRequest, options?: Configuration): Promise<ListProvincesResponse>;
    listShippingMethodsUsingGETWithHttpInfo(param?: PreReleaseApiListShippingMethodsUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>>;
    listShippingMethodsUsingGET(param?: PreReleaseApiListShippingMethodsUsingGETRequest, options?: Configuration): Promise<ListRestShippingMethodsResponse>;
    listSubscriptionPlansUsingGETWithHttpInfo(param?: PreReleaseApiListSubscriptionPlansUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>>;
    listSubscriptionPlansUsingGET(param?: PreReleaseApiListSubscriptionPlansUsingGETRequest, options?: Configuration): Promise<ListSubscriptionPlansResponse>;
    listSummariesUsingGET1WithHttpInfo(param?: PreReleaseApiListSummariesUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListAffiliateSummariesResponse>>;
    listSummariesUsingGET1(param?: PreReleaseApiListSummariesUsingGET1Request, options?: Configuration): Promise<ListAffiliateSummariesResponse>;
    listTasksUsingGET1WithHttpInfo(param?: PreReleaseApiListTasksUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListTasksResponse>>;
    listTasksUsingGET1(param?: PreReleaseApiListTasksUsingGET1Request, options?: Configuration): Promise<ListTasksResponse>;
    listUsersUsingGET1WithHttpInfo(param?: PreReleaseApiListUsersUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListUserResponse>>;
    listUsersUsingGET1(param?: PreReleaseApiListUsersUsingGET1Request, options?: Configuration): Promise<ListUserResponse>;
    patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    patchDefaultCommissionProgramUsingPATCH(param: PreReleaseApiPatchDefaultCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SetDefaultCommissionProgramResponse>;
    patchProductCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<ProductCommissionProgram>>;
    patchProductCommissionProgramUsingPATCH(param: PreReleaseApiPatchProductCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<ProductCommissionProgram>;
    patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param: PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    patchSubscriptionCommissionProgramUsingPATCH(param: PreReleaseApiPatchSubscriptionCommissionProgramUsingPATCHRequest, options?: Configuration): Promise<SubscriptionCommissionProgram>;
    patchTaskUsingPATCHWithHttpInfo(param: PreReleaseApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>>;
    patchTaskUsingPATCH(param: PreReleaseApiPatchTaskUsingPATCHRequest, options?: Configuration): Promise<UpdateTaskResponse>;
    patchUserUsingPATCHWithHttpInfo(param: PreReleaseApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<User>>;
    patchUserUsingPATCH(param: PreReleaseApiPatchUserUsingPATCHRequest, options?: Configuration): Promise<User>;
    removeAffiliateFromProgramUsingPOSTWithHttpInfo(param: PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    removeAffiliateFromProgramUsingPOST(param: PreReleaseApiRemoveAffiliateFromProgramUsingPOSTRequest, options?: Configuration): Promise<void>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param: PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param: PreReleaseApiRemoveSubscriptionPlanCommissionFromCommissionsUsingPOSTRequest, options?: Configuration): Promise<void>;
    retrieveNoteModelUsingGET1WithHttpInfo(param?: PreReleaseApiRetrieveNoteModelUsingGET1Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveNoteModelUsingGET1(param?: PreReleaseApiRetrieveNoteModelUsingGET1Request, options?: Configuration): Promise<ObjectModel>;
    retrieveOrderCustomFieldModelUsingGETWithHttpInfo(param?: PreReleaseApiRetrieveOrderCustomFieldModelUsingGETRequest, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveOrderCustomFieldModelUsingGET(param?: PreReleaseApiRetrieveOrderCustomFieldModelUsingGETRequest, options?: Configuration): Promise<ObjectModel>;
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(param?: PreReleaseApiRetrieveSubscriptionCustomFieldModelUsingGETRequest, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveSubscriptionCustomFieldModelUsingGET(param?: PreReleaseApiRetrieveSubscriptionCustomFieldModelUsingGETRequest, options?: Configuration): Promise<ObjectModel>;
    retrieveTaskModelUsingGET1WithHttpInfo(param?: PreReleaseApiRetrieveTaskModelUsingGET1Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveTaskModelUsingGET1(param?: PreReleaseApiRetrieveTaskModelUsingGET1Request, options?: Configuration): Promise<ObjectModel>;
    updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateAffiliateCustomFieldUsingPATCH(param: PreReleaseApiUpdateAffiliateCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    updateNotesCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateNotesCustomFieldUsingPATCH(param: PreReleaseApiUpdateNotesCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOpportunityCustomFieldUsingPATCH(param: PreReleaseApiUpdateOpportunityCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    updateOpportunityUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<RestV2Opportunity>>;
    updateOpportunityUsingPATCH(param: PreReleaseApiUpdateOpportunityUsingPATCHRequest, options?: Configuration): Promise<RestV2Opportunity>;
    updateOrderCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOrderCustomFieldUsingPATCH(param: PreReleaseApiUpdateOrderCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    updateRedirectLinkUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<AffiliateLink>>;
    updateRedirectLinkUsingPATCH(param: PreReleaseApiUpdateRedirectLinkUsingPATCHRequest, options?: Configuration): Promise<AffiliateLink>;
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateSubscriptionCustomFieldUsingPATCH(param: PreReleaseApiUpdateSubscriptionCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
    updateTaskCustomFieldUsingPATCHWithHttpInfo(param: PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateTaskCustomFieldUsingPATCH(param: PreReleaseApiUpdateTaskCustomFieldUsingPATCHRequest, options?: Configuration): Promise<CustomFieldMetaData>;
}
import { ProductApiRequestFactory, ProductApiResponseProcessor } from "../apis/ProductApi";
export interface ProductApiListProductsUsingGET10Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectProductApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor);
    listProductsUsingGET1WithHttpInfo(param?: ProductApiListProductsUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListProductsResponse>>;
    listProductsUsingGET1(param?: ProductApiListProductsUsingGET10Request, options?: Configuration): Promise<ListProductsResponse>;
}
import { ReferralApiRequestFactory, ReferralApiResponseProcessor } from "../apis/ReferralApi";
export interface ReferralApiCreateReferralUsingPOST0Request {
    request: CreateReferralRequest;
}
export declare class ObjectReferralApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ReferralApiRequestFactory, responseProcessor?: ReferralApiResponseProcessor);
    createReferralUsingPOSTWithHttpInfo(param: ReferralApiCreateReferralUsingPOST0Request, options?: Configuration): Promise<HttpInfo<Referral>>;
    createReferralUsingPOST(param: ReferralApiCreateReferralUsingPOST0Request, options?: Configuration): Promise<Referral>;
}
import { ReportingApiRequestFactory, ReportingApiResponseProcessor } from "../apis/ReportingApi";
export interface ReportingApiRunReportUsingPOSTRequest {
    reportId: string;
    fields?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectReportingApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ReportingApiRequestFactory, responseProcessor?: ReportingApiResponseProcessor);
    runReportUsingPOSTWithHttpInfo(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ReportExecutionResult>>;
    runReportUsingPOST(param: ReportingApiRunReportUsingPOSTRequest, options?: Configuration): Promise<ReportExecutionResult>;
}
import { SalesApiRequestFactory, SalesApiResponseProcessor } from "../apis/SalesApi";
export interface SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest {
    id: number;
}
export declare class ObjectSalesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SalesApiRequestFactory, responseProcessor?: SalesApiResponseProcessor);
    setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    setMerchantGatewayAsDefaultUsingPOST(param: SalesApiSetMerchantGatewayAsDefaultUsingPOSTRequest, options?: Configuration): Promise<void>;
}
import { SettingsApiRequestFactory, SettingsApiResponseProcessor } from "../apis/SettingsApi";
export interface SettingsApiGetApplicationConfigurationsUsingGETRequest {
    fields?: Array<'affiliate' | 'appointment' | 'contact' | 'ecommerce' | 'email' | 'forms' | 'fulfillment' | 'invoice' | 'note' | 'opportunity' | 'task' | 'template'>;
}
export interface SettingsApiGetContactOptionTypesUsingGET1Request {
}
export interface SettingsApiIsApplicationEnabledUsingGETRequest {
}
export declare class ObjectSettingsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor);
    getApplicationConfigurationsUsingGETWithHttpInfo(param?: SettingsApiGetApplicationConfigurationsUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetSettingsResponse>>;
    getApplicationConfigurationsUsingGET(param?: SettingsApiGetApplicationConfigurationsUsingGETRequest, options?: Configuration): Promise<GetSettingsResponse>;
    getContactOptionTypesUsingGET1WithHttpInfo(param?: SettingsApiGetContactOptionTypesUsingGET1Request, options?: Configuration): Promise<HttpInfo<GetContactOptionTypesResponse>>;
    getContactOptionTypesUsingGET1(param?: SettingsApiGetContactOptionTypesUsingGET1Request, options?: Configuration): Promise<GetContactOptionTypesResponse>;
    isApplicationEnabledUsingGETWithHttpInfo(param?: SettingsApiIsApplicationEnabledUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetApplicationEnabledStatusResponse>>;
    isApplicationEnabledUsingGET(param?: SettingsApiIsApplicationEnabledUsingGETRequest, options?: Configuration): Promise<GetApplicationEnabledStatusResponse>;
}
import { ShippingApiRequestFactory, ShippingApiResponseProcessor } from "../apis/ShippingApi";
export interface ShippingApiListShippingMethodsUsingGET0Request {
}
export declare class ObjectShippingApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ShippingApiRequestFactory, responseProcessor?: ShippingApiResponseProcessor);
    listShippingMethodsUsingGETWithHttpInfo(param?: ShippingApiListShippingMethodsUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListRestShippingMethodsResponse>>;
    listShippingMethodsUsingGET(param?: ShippingApiListShippingMethodsUsingGET0Request, options?: Configuration): Promise<ListRestShippingMethodsResponse>;
}
import { SubscriptionPlansApiRequestFactory, SubscriptionPlansApiResponseProcessor } from "../apis/SubscriptionPlansApi";
export interface SubscriptionPlansApiCreateSubscriptionV2UsingPOSTRequest {
    createSubscriptionV2: CreateSubscriptionV2;
}
export interface SubscriptionPlansApiListSubscriptionPlansUsingGET0Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export declare class ObjectSubscriptionPlansApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SubscriptionPlansApiRequestFactory, responseProcessor?: SubscriptionPlansApiResponseProcessor);
    createSubscriptionV2UsingPOSTWithHttpInfo(param: SubscriptionPlansApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<HttpInfo<RestSubscriptionV2>>;
    createSubscriptionV2UsingPOST(param: SubscriptionPlansApiCreateSubscriptionV2UsingPOSTRequest, options?: Configuration): Promise<RestSubscriptionV2>;
    listSubscriptionPlansUsingGETWithHttpInfo(param?: SubscriptionPlansApiListSubscriptionPlansUsingGET0Request, options?: Configuration): Promise<HttpInfo<ListSubscriptionPlansResponse>>;
    listSubscriptionPlansUsingGET(param?: SubscriptionPlansApiListSubscriptionPlansUsingGET0Request, options?: Configuration): Promise<ListSubscriptionPlansResponse>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export interface SubscriptionsApiCancelSubscriptionUsingPOST0Request {
    subscriptionId: string;
    cancelSubscriptionsRequest: CancelSubscriptionsRequest;
}
export interface SubscriptionsApiCreateSubscriptionCustomFieldUsingPOST0Request {
    customField: CreateCustomFieldRequest;
}
export interface SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGET0Request {
}
export interface SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export declare class ObjectSubscriptionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    cancelSubscriptionUsingPOSTWithHttpInfo(param: SubscriptionsApiCancelSubscriptionUsingPOST0Request, options?: Configuration): Promise<HttpInfo<void>>;
    cancelSubscriptionUsingPOST(param: SubscriptionsApiCancelSubscriptionUsingPOST0Request, options?: Configuration): Promise<void>;
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOST0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    createSubscriptionCustomFieldUsingPOST(param: SubscriptionsApiCreateSubscriptionCustomFieldUsingPOST0Request, options?: Configuration): Promise<CustomFieldMetaData>;
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(param?: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGET0Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveSubscriptionCustomFieldModelUsingGET(param?: SubscriptionsApiRetrieveSubscriptionCustomFieldModelUsingGET0Request, options?: Configuration): Promise<ObjectModel>;
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateSubscriptionCustomFieldUsingPATCH(param: SubscriptionsApiUpdateSubscriptionCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
}
import { TagsApiRequestFactory, TagsApiResponseProcessor } from "../apis/TagsApi";
export interface TagsApiApplyTagsUsingPOSTRequest {
    tagId: string;
    applyRemoveTagRequest: ApplyRemoveTagRequest;
}
export interface TagsApiCreateTagCategoryUsingPOST1Request {
    request: CreateUpdateTagCategoryRequest;
}
export interface TagsApiCreateTagUsingPOST1Request {
    tag: CreateUpdateTagRequest;
}
export interface TagsApiDeleteTagCategoryUsingDELETERequest {
    tagCategoryId: string;
}
export interface TagsApiDeleteTagUsingDELETERequest {
    tagId: string;
}
export interface TagsApiGetCategoryUsingGETRequest {
    tagCategoryId: string;
}
export interface TagsApiGetTagUsingGET1Request {
    tagId: string;
}
export interface TagsApiListCompaniesForTagIdUsingGET1Request {
    tagId: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface TagsApiListContactsWithTagIdUsingGETRequest {
    tagId: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface TagsApiListTagCategoriesUsingGETRequest {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface TagsApiListTagsUsingGET1Request {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
}
export interface TagsApiPatchTagCategoryUsingPATCHRequest {
    tagCategoryId: string;
    updateMask?: Array<string>;
    tagCategory?: CreateUpdateTagCategoryRequest;
}
export interface TagsApiPatchTagUsingPATCHRequest {
    tagId: string;
    updateMask?: Array<string>;
    tag?: CreateUpdateTagRequest;
}
export interface TagsApiRemoveTagsUsingPOSTRequest {
    tagId: string;
    applyRemoveTagRequest: ApplyRemoveTagRequest;
}
export declare class ObjectTagsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor);
    applyTagsUsingPOSTWithHttpInfo(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<ApplyTagsResponse>>;
    applyTagsUsingPOST(param: TagsApiApplyTagsUsingPOSTRequest, options?: Configuration): Promise<ApplyTagsResponse>;
    createTagCategoryUsingPOST1WithHttpInfo(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>>;
    createTagCategoryUsingPOST1(param: TagsApiCreateTagCategoryUsingPOST1Request, options?: Configuration): Promise<Tag>;
    createTagUsingPOST1WithHttpInfo(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<HttpInfo<Tag>>;
    createTagUsingPOST1(param: TagsApiCreateTagUsingPOST1Request, options?: Configuration): Promise<Tag>;
    deleteTagCategoryUsingDELETEWithHttpInfo(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTagCategoryUsingDELETE(param: TagsApiDeleteTagCategoryUsingDELETERequest, options?: Configuration): Promise<void>;
    deleteTagUsingDELETEWithHttpInfo(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTagUsingDELETE(param: TagsApiDeleteTagUsingDELETERequest, options?: Configuration): Promise<void>;
    getCategoryUsingGETWithHttpInfo(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<HttpInfo<GetTagCategoryResponse>>;
    getCategoryUsingGET(param: TagsApiGetCategoryUsingGETRequest, options?: Configuration): Promise<GetTagCategoryResponse>;
    getTagUsingGET1WithHttpInfo(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<HttpInfo<Tag>>;
    getTagUsingGET1(param: TagsApiGetTagUsingGET1Request, options?: Configuration): Promise<Tag>;
    listCompaniesForTagIdUsingGET1WithHttpInfo(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListTaggedCompaniesResponse>>;
    listCompaniesForTagIdUsingGET1(param: TagsApiListCompaniesForTagIdUsingGET1Request, options?: Configuration): Promise<ListTaggedCompaniesResponse>;
    listContactsWithTagIdUsingGETWithHttpInfo(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListTaggedContactsResponse>>;
    listContactsWithTagIdUsingGET(param: TagsApiListContactsWithTagIdUsingGETRequest, options?: Configuration): Promise<ListTaggedContactsResponse>;
    listTagCategoriesUsingGETWithHttpInfo(param?: TagsApiListTagCategoriesUsingGETRequest, options?: Configuration): Promise<HttpInfo<ListTagCategoriesResponse>>;
    listTagCategoriesUsingGET(param?: TagsApiListTagCategoriesUsingGETRequest, options?: Configuration): Promise<ListTagCategoriesResponse>;
    listTagsUsingGET1WithHttpInfo(param?: TagsApiListTagsUsingGET1Request, options?: Configuration): Promise<HttpInfo<ListTagsResponse>>;
    listTagsUsingGET1(param?: TagsApiListTagsUsingGET1Request, options?: Configuration): Promise<ListTagsResponse>;
    patchTagCategoryUsingPATCHWithHttpInfo(param: TagsApiPatchTagCategoryUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagCategoryResponse>>;
    patchTagCategoryUsingPATCH(param: TagsApiPatchTagCategoryUsingPATCHRequest, options?: Configuration): Promise<UpdateTagCategoryResponse>;
    patchTagUsingPATCHWithHttpInfo(param: TagsApiPatchTagUsingPATCHRequest, options?: Configuration): Promise<HttpInfo<UpdateTagResponse>>;
    patchTagUsingPATCH(param: TagsApiPatchTagUsingPATCHRequest, options?: Configuration): Promise<UpdateTagResponse>;
    removeTagsUsingPOSTWithHttpInfo(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<void>>;
    removeTagsUsingPOST(param: TagsApiRemoveTagsUsingPOSTRequest, options?: Configuration): Promise<void>;
}
import { TaskApiRequestFactory, TaskApiResponseProcessor } from "../apis/TaskApi";
export interface TaskApiCreateTaskCustomFieldUsingPOST10Request {
    customField: CreateCustomFieldRequest;
}
export interface TaskApiCreateTaskUsingPOST10Request {
    task?: CreateTaskRequest;
}
export interface TaskApiDeleteTaskCustomFieldUsingDELETE0Request {
    customFieldId: string;
}
export interface TaskApiDeleteTaskUsingDELETE10Request {
    taskId: string;
}
export interface TaskApiGetTaskUsingGET10Request {
    taskId: string;
}
export interface TaskApiListTasksUsingGET10Request {
    endDueTime?: string;
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    startDueTime?: string;
}
export interface TaskApiPatchTaskUsingPATCH0Request {
    taskId: string;
    updateMask?: Array<string>;
    task?: CreatePatchTaskRequest;
}
export interface TaskApiRetrieveTaskModelUsingGET10Request {
}
export interface TaskApiUpdateTaskCustomFieldUsingPATCH0Request {
    customFieldId: string;
    request: UpdateCustomFieldMetaDataRequest;
    updateMask?: Array<string>;
}
export declare class ObjectTaskApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor);
    createTaskCustomFieldUsingPOST1WithHttpInfo(param: TaskApiCreateTaskCustomFieldUsingPOST10Request, options?: Configuration): Promise<HttpInfo<CreateCustomFieldResponse>>;
    createTaskCustomFieldUsingPOST1(param: TaskApiCreateTaskCustomFieldUsingPOST10Request, options?: Configuration): Promise<CreateCustomFieldResponse>;
    createTaskUsingPOST1WithHttpInfo(param?: TaskApiCreateTaskUsingPOST10Request, options?: Configuration): Promise<HttpInfo<Task>>;
    createTaskUsingPOST1(param?: TaskApiCreateTaskUsingPOST10Request, options?: Configuration): Promise<Task>;
    deleteTaskCustomFieldUsingDELETEWithHttpInfo(param: TaskApiDeleteTaskCustomFieldUsingDELETE0Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTaskCustomFieldUsingDELETE(param: TaskApiDeleteTaskCustomFieldUsingDELETE0Request, options?: Configuration): Promise<void>;
    deleteTaskUsingDELETE1WithHttpInfo(param: TaskApiDeleteTaskUsingDELETE10Request, options?: Configuration): Promise<HttpInfo<void>>;
    deleteTaskUsingDELETE1(param: TaskApiDeleteTaskUsingDELETE10Request, options?: Configuration): Promise<void>;
    getTaskUsingGET1WithHttpInfo(param: TaskApiGetTaskUsingGET10Request, options?: Configuration): Promise<HttpInfo<Task>>;
    getTaskUsingGET1(param: TaskApiGetTaskUsingGET10Request, options?: Configuration): Promise<Task>;
    listTasksUsingGET1WithHttpInfo(param?: TaskApiListTasksUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListTasksResponse>>;
    listTasksUsingGET1(param?: TaskApiListTasksUsingGET10Request, options?: Configuration): Promise<ListTasksResponse>;
    patchTaskUsingPATCHWithHttpInfo(param: TaskApiPatchTaskUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<UpdateTaskResponse>>;
    patchTaskUsingPATCH(param: TaskApiPatchTaskUsingPATCH0Request, options?: Configuration): Promise<UpdateTaskResponse>;
    retrieveTaskModelUsingGET1WithHttpInfo(param?: TaskApiRetrieveTaskModelUsingGET10Request, options?: Configuration): Promise<HttpInfo<ObjectModel>>;
    retrieveTaskModelUsingGET1(param?: TaskApiRetrieveTaskModelUsingGET10Request, options?: Configuration): Promise<ObjectModel>;
    updateTaskCustomFieldUsingPATCHWithHttpInfo(param: TaskApiUpdateTaskCustomFieldUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<CustomFieldMetaData>>;
    updateTaskCustomFieldUsingPATCH(param: TaskApiUpdateTaskCustomFieldUsingPATCH0Request, options?: Configuration): Promise<CustomFieldMetaData>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiCreateUserUsingPOST10Request {
    user?: CreateUserRequestV2;
}
export interface UsersApiGetUserByIdUsingGET0Request {
    userId: string;
}
export interface UsersApiGetUserInfoUsingGET10Request {
}
export interface UsersApiGetUserSignatureUsingGET10Request {
    userId: string;
}
export interface UsersApiListUsersUsingGET10Request {
    filter?: string;
    orderBy?: string;
}
export interface UsersApiPatchUserUsingPATCH0Request {
    userId: string;
    updateMask?: Array<string>;
    user?: PatchUserRequestV2;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    createUserUsingPOST1WithHttpInfo(param?: UsersApiCreateUserUsingPOST10Request, options?: Configuration): Promise<HttpInfo<User>>;
    createUserUsingPOST1(param?: UsersApiCreateUserUsingPOST10Request, options?: Configuration): Promise<User>;
    getUserByIdUsingGETWithHttpInfo(param: UsersApiGetUserByIdUsingGET0Request, options?: Configuration): Promise<HttpInfo<User>>;
    getUserByIdUsingGET(param: UsersApiGetUserByIdUsingGET0Request, options?: Configuration): Promise<User>;
    getUserInfoUsingGET1WithHttpInfo(param?: UsersApiGetUserInfoUsingGET10Request, options?: Configuration): Promise<HttpInfo<GetUserInfoResponse>>;
    getUserInfoUsingGET1(param?: UsersApiGetUserInfoUsingGET10Request, options?: Configuration): Promise<GetUserInfoResponse>;
    getUserSignatureUsingGET1WithHttpInfo(param: UsersApiGetUserSignatureUsingGET10Request, options?: Configuration): Promise<HttpInfo<string>>;
    getUserSignatureUsingGET1(param: UsersApiGetUserSignatureUsingGET10Request, options?: Configuration): Promise<string>;
    listUsersUsingGET1WithHttpInfo(param?: UsersApiListUsersUsingGET10Request, options?: Configuration): Promise<HttpInfo<ListUserResponse>>;
    listUsersUsingGET1(param?: UsersApiListUsersUsingGET10Request, options?: Configuration): Promise<ListUserResponse>;
    patchUserUsingPATCHWithHttpInfo(param: UsersApiPatchUserUsingPATCH0Request, options?: Configuration): Promise<HttpInfo<User>>;
    patchUserUsingPATCH(param: UsersApiPatchUserUsingPATCH0Request, options?: Configuration): Promise<User>;
}
