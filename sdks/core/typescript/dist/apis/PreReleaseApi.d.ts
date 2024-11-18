import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { AffiliateAddToProgramRequest } from '../models/AffiliateAddToProgramRequest';
import { AffiliateCommissionEarned } from '../models/AffiliateCommissionEarned';
import { AffiliateCommissionProgramResponse } from '../models/AffiliateCommissionProgramResponse';
import { AffiliateLink } from '../models/AffiliateLink';
import { AffiliateProgramV2 } from '../models/AffiliateProgramV2';
import { AffiliateRemoveFromProgramRequest } from '../models/AffiliateRemoveFromProgramRequest';
import { CancelSubscriptionsRequest } from '../models/CancelSubscriptionsRequest';
import { CategoryDiscount } from '../models/CategoryDiscount';
import { CreateCommissionProgramRequest } from '../models/CreateCommissionProgramRequest';
import { CreateCustomFieldRequest } from '../models/CreateCustomFieldRequest';
import { CreateCustomFieldResponse } from '../models/CreateCustomFieldResponse';
import { CreateDefaultCommissionProgramRequest } from '../models/CreateDefaultCommissionProgramRequest';
import { CreateFunnelIntegrationRequest } from '../models/CreateFunnelIntegrationRequest';
import { CreateFunnelIntegrationTriggerEvents } from '../models/CreateFunnelIntegrationTriggerEvents';
import { CreateLeadSourceRequest } from '../models/CreateLeadSourceRequest';
import { CreateOpportunityRequest } from '../models/CreateOpportunityRequest';
import { CreateOpportunityStageRequest } from '../models/CreateOpportunityStageRequest';
import { CreateOrPatchAffiliateLinkRequest } from '../models/CreateOrPatchAffiliateLinkRequest';
import { CreatePatchTaskRequest } from '../models/CreatePatchTaskRequest';
import { CreateProductCommissionProgramRequest } from '../models/CreateProductCommissionProgramRequest';
import { CreateReferralRequest } from '../models/CreateReferralRequest';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
import { CreateSubscriptionCommissionProgramRequest } from '../models/CreateSubscriptionCommissionProgramRequest';
import { CreateTaskRequest } from '../models/CreateTaskRequest';
import { CreateUserRequestV2 } from '../models/CreateUserRequestV2';
import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { DeleteFunnelIntegrationRequest } from '../models/DeleteFunnelIntegrationRequest';
import { DeleteSubscriptionPlanCommissionRequest } from '../models/DeleteSubscriptionPlanCommissionRequest';
import { FunnelIntegrationTriggerResultDTO } from '../models/FunnelIntegrationTriggerResultDTO';
import { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import { LeadSource } from '../models/LeadSource';
import { ListAffiliateCommissionProgramsResponse } from '../models/ListAffiliateCommissionProgramsResponse';
import { ListAffiliateCommissionResponse } from '../models/ListAffiliateCommissionResponse';
import { ListAffiliateLinksResponse } from '../models/ListAffiliateLinksResponse';
import { ListAffiliateSummariesResponse } from '../models/ListAffiliateSummariesResponse';
import { ListBasicContactResponse } from '../models/ListBasicContactResponse';
import { ListCountriesResponse } from '../models/ListCountriesResponse';
import { ListLandingPagesResponse } from '../models/ListLandingPagesResponse';
import { ListLeadSourcesResponse } from '../models/ListLeadSourcesResponse';
import { ListOpportunitiesResponse } from '../models/ListOpportunitiesResponse';
import { ListOpportunityStagesResponse } from '../models/ListOpportunityStagesResponse';
import { ListOrders } from '../models/ListOrders';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListProvincesResponse } from '../models/ListProvincesResponse';
import { ListRestMerchantResponse } from '../models/ListRestMerchantResponse';
import { ListRestShippingMethodsResponse } from '../models/ListRestShippingMethodsResponse';
import { ListSubscriptionPlansResponse } from '../models/ListSubscriptionPlansResponse';
import { ListTasksResponse } from '../models/ListTasksResponse';
import { ListUserResponse } from '../models/ListUserResponse';
import { ObjectModel } from '../models/ObjectModel';
import { PatchDefaultCommissionProgramRequest } from '../models/PatchDefaultCommissionProgramRequest';
import { PatchOpportunityRequest } from '../models/PatchOpportunityRequest';
import { PatchProductCommissionProgramRequest } from '../models/PatchProductCommissionProgramRequest';
import { PatchSubscriptionCommissionProgramRequest } from '../models/PatchSubscriptionCommissionProgramRequest';
import { PatchUserRequestV2 } from '../models/PatchUserRequestV2';
import { ProductCommissionProgram } from '../models/ProductCommissionProgram';
import { Referral } from '../models/Referral';
import { RestCreateOrderRequest } from '../models/RestCreateOrderRequest';
import { RestOpportunityStage } from '../models/RestOpportunityStage';
import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { RestV2Order } from '../models/RestV2Order';
import { RestV2OrderItem } from '../models/RestV2OrderItem';
import { SetDefaultCommissionProgramResponse } from '../models/SetDefaultCommissionProgramResponse';
import { SubscriptionCommissionProgram } from '../models/SubscriptionCommissionProgram';
import { Task } from '../models/Task';
import { UpdateCustomFieldMetaDataRequest } from '../models/UpdateCustomFieldMetaDataRequest';
import { UpdateTaskResponse } from '../models/UpdateTaskResponse';
import { User } from '../models/User';
export declare class PreReleaseApiRequestFactory extends BaseAPIRequestFactory {
    addAffiliateToProgramUsingPOST(id: string, affiliateAddToProgramRequest: AffiliateAddToProgramRequest, _options?: Configuration): Promise<RequestContext>;
    addCommissionProgramUsingPOST(insertCommissionProgram?: CreateCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    assignProductCommissionProgramUsingPOST(commissionProgramId: string, productCommissionProgram?: CreateProductCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    assignSubscriptionCommissionProgramUsingPOST(commissionProgramId: string, subscriptionCommissionProgram?: CreateSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    cancelSubscriptionUsingPOST(subscriptionId: string, cancelSubscriptionsRequest: CancelSubscriptionsRequest, _options?: Configuration): Promise<RequestContext>;
    createAffiliateCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createDefaultCommissionProgramUsingPOST(commissionProgramId: string, createDefaultCommissionProgramRequest?: CreateDefaultCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest: CreateFunnelIntegrationRequest, _options?: Configuration): Promise<RequestContext>;
    createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents: CreateFunnelIntegrationTriggerEvents, _options?: Configuration): Promise<RequestContext>;
    createLeadSourceUsingPOST(leadsource?: CreateLeadSourceRequest, _options?: Configuration): Promise<RequestContext>;
    createNoteCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createOpportunityCustomFieldsUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createOpportunityStageUsingPOST(opportunityStage?: CreateOpportunityStageRequest, _options?: Configuration): Promise<RequestContext>;
    createOpportunityUsingPOST1(opportunity?: CreateOpportunityRequest, _options?: Configuration): Promise<RequestContext>;
    createOrderCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createOrderItemsOnOrderUsingPOST1(orderId: string, createRestOrderItemRequest: CreateRestOrderItemRequest, _options?: Configuration): Promise<RequestContext>;
    createOrderUsingPOST1(createOrderRequest: RestCreateOrderRequest, _options?: Configuration): Promise<RequestContext>;
    createRedirectLinkUsingPOST(request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<RequestContext>;
    createReferralUsingPOST(request: CreateReferralRequest, _options?: Configuration): Promise<RequestContext>;
    createSubscriptionCustomFieldUsingPOST(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createTaskCustomFieldUsingPOST1(customField: CreateCustomFieldRequest, _options?: Configuration): Promise<RequestContext>;
    createTaskUsingPOST1(task?: CreateTaskRequest, _options?: Configuration): Promise<RequestContext>;
    createUserUsingPOST1(user?: CreateUserRequestV2, _options?: Configuration): Promise<RequestContext>;
    deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId: string, _options?: Configuration): Promise<RequestContext>;
    deleteAffiliateUsingDELETE(id: string, _options?: Configuration): Promise<RequestContext>;
    deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest: DeleteFunnelIntegrationRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOpportunityStageUsingDELETE(stageId: string, _options?: Configuration): Promise<RequestContext>;
    deleteOpportunityUsingDELETE(opportunityId: string, _options?: Configuration): Promise<RequestContext>;
    deleteOrderUsingDELETE1(orderId: string, _options?: Configuration): Promise<RequestContext>;
    deleteRedirectLinkUsingDELETE(redirectId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTaskCustomFieldUsingDELETE(customFieldId: string, _options?: Configuration): Promise<RequestContext>;
    deleteTaskUsingDELETE1(taskId: string, _options?: Configuration): Promise<RequestContext>;
    getAffiliateCommissionTotalUsingGET(affiliateId: string, _options?: Configuration): Promise<RequestContext>;
    getAffiliateCommissionsUsingGET(affiliateId: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    getAffiliateCustomFieldsUsingGET(_options?: Configuration): Promise<RequestContext>;
    getCategoryDiscountUsingGET(discountId: string, _options?: Configuration): Promise<RequestContext>;
    getCommissionProgramUsingGET(commissionProgramId: string, _options?: Configuration): Promise<RequestContext>;
    getContactsBySearchTermUsingGET(searchParam: string, _options?: Configuration): Promise<RequestContext>;
    getOpportunityStageUsingGET(stageId: string, _options?: Configuration): Promise<RequestContext>;
    getOpportunityUsingGET1(opportunityId: string, _options?: Configuration): Promise<RequestContext>;
    getOrderUsingGET1(orderId: string, _options?: Configuration): Promise<RequestContext>;
    getRedirectLinkUsingGET(redirectId: string, _options?: Configuration): Promise<RequestContext>;
    getTaskUsingGET1(taskId: string, _options?: Configuration): Promise<RequestContext>;
    getUserByIdUsingGET(userId: string, _options?: Configuration): Promise<RequestContext>;
    getUserInfoUsingGET1(_options?: Configuration): Promise<RequestContext>;
    getUserSignatureUsingGET1(userId: string, _options?: Configuration): Promise<RequestContext>;
    listAffiliateCommissionProgramsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listAffiliateLinksUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listCountriesUsingGET2(_options?: Configuration): Promise<RequestContext>;
    listLandingPagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listLeadSourcesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listMerchantsUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listOpportunitiesUsingGET1(fields?: Array<string>, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listOpportunityStagesUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listOrdersUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listProductsUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listProvincesForCountryUsingGET(countryCode: string, _options?: Configuration): Promise<RequestContext>;
    listShippingMethodsUsingGET(_options?: Configuration): Promise<RequestContext>;
    listSubscriptionPlansUsingGET(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listSummariesUsingGET1(filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, _options?: Configuration): Promise<RequestContext>;
    listTasksUsingGET1(endDueTime?: string, filter?: string, orderBy?: string, pageSize?: number, pageToken?: string, startDueTime?: string, _options?: Configuration): Promise<RequestContext>;
    listUsersUsingGET1(filter?: string, orderBy?: string, _options?: Configuration): Promise<RequestContext>;
    patchDefaultCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchDefaultCommissionProgramRequest?: PatchDefaultCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    patchProductCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchProductCommissionProgramRequest?: PatchProductCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId: string, updateMask?: Array<string>, patchSubscriptionCommissionProgramRequest?: PatchSubscriptionCommissionProgramRequest, _options?: Configuration): Promise<RequestContext>;
    patchTaskUsingPATCH(taskId: string, updateMask?: Array<string>, task?: CreatePatchTaskRequest, _options?: Configuration): Promise<RequestContext>;
    patchUserUsingPATCH(userId: string, updateMask?: Array<string>, user?: PatchUserRequestV2, _options?: Configuration): Promise<RequestContext>;
    removeAffiliateFromProgramUsingPOST(id: string, removeFromProgramRequest: AffiliateRemoveFromProgramRequest, _options?: Configuration): Promise<RequestContext>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId: string, deleteSubscriptionPlanCommissionRequest: DeleteSubscriptionPlanCommissionRequest, _options?: Configuration): Promise<RequestContext>;
    retrieveNoteModelUsingGET1(_options?: Configuration): Promise<RequestContext>;
    retrieveOrderCustomFieldModelUsingGET(_options?: Configuration): Promise<RequestContext>;
    retrieveSubscriptionCustomFieldModelUsingGET(_options?: Configuration): Promise<RequestContext>;
    retrieveTaskModelUsingGET1(_options?: Configuration): Promise<RequestContext>;
    updateAffiliateCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateNotesCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateOpportunityCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateOpportunityUsingPATCH(opportunityId: string, request: PatchOpportunityRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateOrderCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateRedirectLinkUsingPATCH(redirectId: string, request: CreateOrPatchAffiliateLinkRequest, _options?: Configuration): Promise<RequestContext>;
    updateSubscriptionCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    updateTaskCustomFieldUsingPATCH(customFieldId: string, request: UpdateCustomFieldMetaDataRequest, updateMask?: Array<string>, _options?: Configuration): Promise<RequestContext>;
}
export declare class PreReleaseApiResponseProcessor {
    addAffiliateToProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    addCommissionProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateCommissionProgramResponse>>;
    assignProductCommissionProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCommissionProgram>>;
    assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    cancelSubscriptionUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createAffiliateCustomFieldUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createDefaultCommissionProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    createFunnelIntegrationUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    createIntegrationTriggerEventUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FunnelIntegrationTriggerResultDTO>>>;
    createLeadSourceUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LeadSource>>;
    createNoteCustomFieldUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createOpportunityCustomFieldsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createOpportunityStageUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestOpportunityStage>>;
    createOpportunityUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
    createOrderCustomFieldUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createOrderItemsOnOrderUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2OrderItem>>;
    createOrderUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Order>>;
    createRedirectLinkUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateLink>>;
    createReferralUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Referral>>;
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    createTaskCustomFieldUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateCustomFieldResponse>>;
    createTaskUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Task>>;
    createUserUsingPOST1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteAffiliateUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteFunnelIntegrationUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteOpportunityStageUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteOpportunityUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteOrderUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteRedirectLinkUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteTaskCustomFieldUsingDELETEWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    deleteTaskUsingDELETE1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    getAffiliateCommissionTotalUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateCommissionEarned>>;
    getAffiliateCommissionsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAffiliateCommissionResponse>>;
    getAffiliateCustomFieldsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    getCategoryDiscountUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryDiscount>>;
    getCommissionProgramUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateProgramV2>>;
    getContactsBySearchTermUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListBasicContactResponse>>;
    getOpportunityStageUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestOpportunityStage>>;
    getOpportunityUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
    getOrderUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Order>>;
    getRedirectLinkUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateLink>>;
    getTaskUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Task>>;
    getUserByIdUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    getUserInfoUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetUserInfoResponse>>;
    getUserSignatureUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<string>>;
    listAffiliateCommissionProgramsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAffiliateCommissionProgramsResponse>>;
    listAffiliateLinksUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAffiliateLinksResponse>>;
    listCountriesUsingGET2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListCountriesResponse>>;
    listLandingPagesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLandingPagesResponse>>;
    listLeadSourcesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListLeadSourcesResponse>>;
    listMerchantsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRestMerchantResponse>>;
    listOpportunitiesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOpportunitiesResponse>>;
    listOpportunityStagesUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOpportunityStagesResponse>>;
    listOrdersUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListOrders>>;
    listProductsUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListProductsResponse>>;
    listProvincesForCountryUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListProvincesResponse>>;
    listShippingMethodsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListRestShippingMethodsResponse>>;
    listSubscriptionPlansUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListSubscriptionPlansResponse>>;
    listSummariesUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListAffiliateSummariesResponse>>;
    listTasksUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListTasksResponse>>;
    listUsersUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListUserResponse>>;
    patchDefaultCommissionProgramUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SetDefaultCommissionProgramResponse>>;
    patchProductCommissionProgramUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCommissionProgram>>;
    patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionCommissionProgram>>;
    patchTaskUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateTaskResponse>>;
    patchUserUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<User>>;
    removeAffiliateFromProgramUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void>>;
    retrieveNoteModelUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    retrieveOrderCustomFieldModelUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    retrieveTaskModelUsingGET1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ObjectModel>>;
    updateAffiliateCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateNotesCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOpportunityCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateOpportunityUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RestV2Opportunity>>;
    updateOrderCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateRedirectLinkUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AffiliateLink>>;
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
    updateTaskCustomFieldUsingPATCHWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFieldMetaData>>;
}
