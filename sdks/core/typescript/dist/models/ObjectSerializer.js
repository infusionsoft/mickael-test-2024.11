"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AddContactsToSequenceRequest"), exports);
__exportStar(require("../models/AddContactsToSequenceResponse"), exports);
__exportStar(require("../models/AddToAutomationSequenceRequest"), exports);
__exportStar(require("../models/AddToAutomationSequenceResponse"), exports);
__exportStar(require("../models/Address"), exports);
__exportStar(require("../models/AddressInformation"), exports);
__exportStar(require("../models/AffiliateAddToProgramRequest"), exports);
__exportStar(require("../models/AffiliateCommission"), exports);
__exportStar(require("../models/AffiliateCommissionEarned"), exports);
__exportStar(require("../models/AffiliateCommissionProgramResponse"), exports);
__exportStar(require("../models/AffiliateLink"), exports);
__exportStar(require("../models/AffiliateProgramV2"), exports);
__exportStar(require("../models/AffiliateRemoveFromProgramRequest"), exports);
__exportStar(require("../models/AffiliateSummaryRecord"), exports);
__exportStar(require("../models/ApplicationCompany"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleAffiliate"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleAffiliateCommission"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleApplication"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleAppointment"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleContact"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleContactAddressLabels"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleEcommerce"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleEmail"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleForms"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleFulfillment"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleInvoice"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleNote"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleOpportunity"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleOpportunityStates"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleOpportunityStatesActive"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleOpportunityStatesLoss"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleOpportunityStatesWin"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleTask"), exports);
__exportStar(require("../models/ApplicationConfigurationModuleTemplate"), exports);
__exportStar(require("../models/ApplicationFeaturesEnabled"), exports);
__exportStar(require("../models/ApplyRemoveTagRequest"), exports);
__exportStar(require("../models/ApplyTagsResponse"), exports);
__exportStar(require("../models/Automation"), exports);
__exportStar(require("../models/AutomationCategory"), exports);
__exportStar(require("../models/AutomationLockStatus"), exports);
__exportStar(require("../models/BasicCompany"), exports);
__exportStar(require("../models/BasicContact"), exports);
__exportStar(require("../models/BasicUser"), exports);
__exportStar(require("../models/BusinessProfileAddressRequest"), exports);
__exportStar(require("../models/BusinessProfileAddressResponse"), exports);
__exportStar(require("../models/Campaign"), exports);
__exportStar(require("../models/CancelSubscriptionsRequest"), exports);
__exportStar(require("../models/CardInfo"), exports);
__exportStar(require("../models/CategoryDiscount"), exports);
__exportStar(require("../models/CategoryReference"), exports);
__exportStar(require("../models/CheckListItem"), exports);
__exportStar(require("../models/CheckListItemDetails"), exports);
__exportStar(require("../models/Company"), exports);
__exportStar(require("../models/Contact"), exports);
__exportStar(require("../models/ContactLink"), exports);
__exportStar(require("../models/ContactLinkType"), exports);
__exportStar(require("../models/ContactUtmResponse"), exports);
__exportStar(require("../models/Country"), exports);
__exportStar(require("../models/CreateAffiliateRequest"), exports);
__exportStar(require("../models/CreateAutomationCategoryRequest"), exports);
__exportStar(require("../models/CreateCommissionProgramRequest"), exports);
__exportStar(require("../models/CreateCompanyRequest"), exports);
__exportStar(require("../models/CreateContactLinkTypeRequest"), exports);
__exportStar(require("../models/CreateContactUtmPropertiesRequest"), exports);
__exportStar(require("../models/CreateCustomFieldOptionRequest"), exports);
__exportStar(require("../models/CreateCustomFieldRequest"), exports);
__exportStar(require("../models/CreateCustomFieldResponse"), exports);
__exportStar(require("../models/CreateDefaultCommissionProgramRequest"), exports);
__exportStar(require("../models/CreateEmailSentRequest"), exports);
__exportStar(require("../models/CreateEmailsSentRequest"), exports);
__exportStar(require("../models/CreateFunnelIntegrationRequest"), exports);
__exportStar(require("../models/CreateFunnelIntegrationTriggerEvents"), exports);
__exportStar(require("../models/CreateLeadSourceRequest"), exports);
__exportStar(require("../models/CreateNoteRequest"), exports);
__exportStar(require("../models/CreateOpportunityRequest"), exports);
__exportStar(require("../models/CreateOpportunityStageCheckListItem"), exports);
__exportStar(require("../models/CreateOpportunityStageRequest"), exports);
__exportStar(require("../models/CreateOrPatchAffiliateLinkRequest"), exports);
__exportStar(require("../models/CreatePatchContactRequest"), exports);
__exportStar(require("../models/CreatePatchTaskRequest"), exports);
__exportStar(require("../models/CreatePaymentMethodConfigRequest"), exports);
__exportStar(require("../models/CreatePaymentRequest"), exports);
__exportStar(require("../models/CreateProductCommissionProgramRequest"), exports);
__exportStar(require("../models/CreateReferralRequest"), exports);
__exportStar(require("../models/CreateRestOrderItemRequest"), exports);
__exportStar(require("../models/CreateSubscriptionCommissionProgramRequest"), exports);
__exportStar(require("../models/CreateSubscriptionV2"), exports);
__exportStar(require("../models/CreateTaskRequest"), exports);
__exportStar(require("../models/CreateUpdateTagCategoryRequest"), exports);
__exportStar(require("../models/CreateUpdateTagRequest"), exports);
__exportStar(require("../models/CreateUserRequestV2"), exports);
__exportStar(require("../models/Criteria"), exports);
__exportStar(require("../models/CustomField"), exports);
__exportStar(require("../models/CustomFieldMetaData"), exports);
__exportStar(require("../models/CustomFieldOption"), exports);
__exportStar(require("../models/CustomFieldValue"), exports);
__exportStar(require("../models/DefaultCommission"), exports);
__exportStar(require("../models/DeleteEmailsRequest"), exports);
__exportStar(require("../models/DeleteEmailsResponse"), exports);
__exportStar(require("../models/DeleteFunnelIntegrationRequest"), exports);
__exportStar(require("../models/DeleteSubscriptionPlanCommissionRequest"), exports);
__exportStar(require("../models/Discount"), exports);
__exportStar(require("../models/EmailAddress"), exports);
__exportStar(require("../models/EmailAddressRequest"), exports);
__exportStar(require("../models/EmailSendRequest"), exports);
__exportStar(require("../models/EmailSendRequestAttachment"), exports);
__exportStar(require("../models/EmailSentCreateError"), exports);
__exportStar(require("../models/EmailSentWithContent"), exports);
__exportStar(require("../models/EmailsSentList"), exports);
__exportStar(require("../models/FaxNumber"), exports);
__exportStar(require("../models/FunnelIntegrationAction"), exports);
__exportStar(require("../models/FunnelIntegrationHttpRequest"), exports);
__exportStar(require("../models/FunnelIntegrationSchemaField"), exports);
__exportStar(require("../models/FunnelIntegrationTriggerEventDTO"), exports);
__exportStar(require("../models/FunnelIntegrationTriggerResultDTO"), exports);
__exportStar(require("../models/GetApplicationEnabledStatusResponse"), exports);
__exportStar(require("../models/GetBusinessProfileResponse"), exports);
__exportStar(require("../models/GetContactOptionTypesResponse"), exports);
__exportStar(require("../models/GetNoteResponse"), exports);
__exportStar(require("../models/GetSettingsResponse"), exports);
__exportStar(require("../models/GetTagCategoryResponse"), exports);
__exportStar(require("../models/GetUserInfoResponse"), exports);
__exportStar(require("../models/Goal"), exports);
__exportStar(require("../models/HistoricalCounts"), exports);
__exportStar(require("../models/Item"), exports);
__exportStar(require("../models/LandingPage"), exports);
__exportStar(require("../models/LeadSource"), exports);
__exportStar(require("../models/LeadSourceCategory"), exports);
__exportStar(require("../models/Link"), exports);
__exportStar(require("../models/LinkContactsRequest"), exports);
__exportStar(require("../models/ListAffiliateCommissionProgramsResponse"), exports);
__exportStar(require("../models/ListAffiliateCommissionResponse"), exports);
__exportStar(require("../models/ListAffiliateLinksResponse"), exports);
__exportStar(require("../models/ListAffiliateSummariesResponse"), exports);
__exportStar(require("../models/ListAutomationCategoryResponse"), exports);
__exportStar(require("../models/ListAutomationIdsResponse"), exports);
__exportStar(require("../models/ListAutomationResponse"), exports);
__exportStar(require("../models/ListBasicContactResponse"), exports);
__exportStar(require("../models/ListCampaignsResponse"), exports);
__exportStar(require("../models/ListCompaniesResponse"), exports);
__exportStar(require("../models/ListContactLinkTypesResponse"), exports);
__exportStar(require("../models/ListContactLinksResponse"), exports);
__exportStar(require("../models/ListContactsResponse"), exports);
__exportStar(require("../models/ListCountriesResponse"), exports);
__exportStar(require("../models/ListLandingPagesResponse"), exports);
__exportStar(require("../models/ListLeadSourcesResponse"), exports);
__exportStar(require("../models/ListNotesResponse"), exports);
__exportStar(require("../models/ListOpportunitiesResponse"), exports);
__exportStar(require("../models/ListOpportunityStagesResponse"), exports);
__exportStar(require("../models/ListOrders"), exports);
__exportStar(require("../models/ListProductsResponse"), exports);
__exportStar(require("../models/ListProvincesResponse"), exports);
__exportStar(require("../models/ListRestMerchantAccountResponse"), exports);
__exportStar(require("../models/ListRestMerchantResponse"), exports);
__exportStar(require("../models/ListRestShippingMethodsResponse"), exports);
__exportStar(require("../models/ListSubscriptionPlansResponse"), exports);
__exportStar(require("../models/ListTagCategoriesResponse"), exports);
__exportStar(require("../models/ListTaggedCompaniesResponse"), exports);
__exportStar(require("../models/ListTaggedContactsResponse"), exports);
__exportStar(require("../models/ListTagsResponse"), exports);
__exportStar(require("../models/ListTasksResponse"), exports);
__exportStar(require("../models/ListUserResponse"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/Note"), exports);
__exportStar(require("../models/ObjectModel"), exports);
__exportStar(require("../models/OpportunityContact"), exports);
__exportStar(require("../models/OpportunityStage"), exports);
__exportStar(require("../models/OrderItemTax"), exports);
__exportStar(require("../models/Origin"), exports);
__exportStar(require("../models/OriginRequest"), exports);
__exportStar(require("../models/PatchAffiliateRequest"), exports);
__exportStar(require("../models/PatchBusinessProfileRequest"), exports);
__exportStar(require("../models/PatchCommissionProgramRequest"), exports);
__exportStar(require("../models/PatchCompanyRequest"), exports);
__exportStar(require("../models/PatchDefaultCommissionProgramRequest"), exports);
__exportStar(require("../models/PatchOpportunityRequest"), exports);
__exportStar(require("../models/PatchProductCommissionProgramRequest"), exports);
__exportStar(require("../models/PatchSubscriptionCommissionProgramRequest"), exports);
__exportStar(require("../models/PatchUserRequestV2"), exports);
__exportStar(require("../models/PaymentMethodConfig"), exports);
__exportStar(require("../models/PaymentMethodList"), exports);
__exportStar(require("../models/PaymentPlan"), exports);
__exportStar(require("../models/PaymentResult"), exports);
__exportStar(require("../models/PhoneNumber"), exports);
__exportStar(require("../models/ProductCommission"), exports);
__exportStar(require("../models/ProductCommissionProgram"), exports);
__exportStar(require("../models/Provinces"), exports);
__exportStar(require("../models/Referral"), exports);
__exportStar(require("../models/RemoveContactsFromSequenceRequest"), exports);
__exportStar(require("../models/RemoveContactsFromSequenceResponse"), exports);
__exportStar(require("../models/ReportEntryRecord"), exports);
__exportStar(require("../models/ReportEntryValue"), exports);
__exportStar(require("../models/ReportExecutionResult"), exports);
__exportStar(require("../models/RestAffiliate"), exports);
__exportStar(require("../models/RestCreateOrderRequest"), exports);
__exportStar(require("../models/RestEmailAddress"), exports);
__exportStar(require("../models/RestOpportunityStage"), exports);
__exportStar(require("../models/RestPaymentGateway"), exports);
__exportStar(require("../models/RestPaymentMethod"), exports);
__exportStar(require("../models/RestProduct"), exports);
__exportStar(require("../models/RestProductOption"), exports);
__exportStar(require("../models/RestProductOptionValue"), exports);
__exportStar(require("../models/RestSubscriptionPlan"), exports);
__exportStar(require("../models/RestSubscriptionV2"), exports);
__exportStar(require("../models/RestV2Opportunity"), exports);
__exportStar(require("../models/RestV2Order"), exports);
__exportStar(require("../models/RestV2OrderItem"), exports);
__exportStar(require("../models/RestV2Subscription"), exports);
__exportStar(require("../models/RestV2User"), exports);
__exportStar(require("../models/SaveAutomationCategoryRequest"), exports);
__exportStar(require("../models/Sequence"), exports);
__exportStar(require("../models/SequencePath"), exports);
__exportStar(require("../models/SetDefaultCommissionProgramResponse"), exports);
__exportStar(require("../models/ShippingInformation"), exports);
__exportStar(require("../models/ShippingMethod"), exports);
__exportStar(require("../models/SocialAccount"), exports);
__exportStar(require("../models/StackTraceElement"), exports);
__exportStar(require("../models/StageDetails"), exports);
__exportStar(require("../models/SubscriptionCommission"), exports);
__exportStar(require("../models/SubscriptionCommissionProgram"), exports);
__exportStar(require("../models/Tag"), exports);
__exportStar(require("../models/TaggedCompany"), exports);
__exportStar(require("../models/Task"), exports);
__exportStar(require("../models/Throwable"), exports);
__exportStar(require("../models/UpdateAutomationCategoryRequest"), exports);
__exportStar(require("../models/UpdateCustomFieldMetaDataRequest"), exports);
__exportStar(require("../models/UpdateEmailAddress"), exports);
__exportStar(require("../models/UpdateNoteRequest"), exports);
__exportStar(require("../models/UpdateNoteResponse"), exports);
__exportStar(require("../models/UpdateTagCategoryResponse"), exports);
__exportStar(require("../models/UpdateTagResponse"), exports);
__exportStar(require("../models/UpdateTaskResponse"), exports);
__exportStar(require("../models/User"), exports);
var AddContactsToSequenceRequest_1 = require("../models/AddContactsToSequenceRequest");
var AddContactsToSequenceResponse_1 = require("../models/AddContactsToSequenceResponse");
var AddToAutomationSequenceRequest_1 = require("../models/AddToAutomationSequenceRequest");
var AddToAutomationSequenceResponse_1 = require("../models/AddToAutomationSequenceResponse");
var Address_1 = require("../models/Address");
var AddressInformation_1 = require("../models/AddressInformation");
var AffiliateAddToProgramRequest_1 = require("../models/AffiliateAddToProgramRequest");
var AffiliateCommission_1 = require("../models/AffiliateCommission");
var AffiliateCommissionEarned_1 = require("../models/AffiliateCommissionEarned");
var AffiliateCommissionProgramResponse_1 = require("../models/AffiliateCommissionProgramResponse");
var AffiliateLink_1 = require("../models/AffiliateLink");
var AffiliateProgramV2_1 = require("../models/AffiliateProgramV2");
var AffiliateRemoveFromProgramRequest_1 = require("../models/AffiliateRemoveFromProgramRequest");
var AffiliateSummaryRecord_1 = require("../models/AffiliateSummaryRecord");
var ApplicationCompany_1 = require("../models/ApplicationCompany");
var ApplicationConfigurationModuleAffiliate_1 = require("../models/ApplicationConfigurationModuleAffiliate");
var ApplicationConfigurationModuleAffiliateCommission_1 = require("../models/ApplicationConfigurationModuleAffiliateCommission");
var ApplicationConfigurationModuleApplication_1 = require("../models/ApplicationConfigurationModuleApplication");
var ApplicationConfigurationModuleAppointment_1 = require("../models/ApplicationConfigurationModuleAppointment");
var ApplicationConfigurationModuleContact_1 = require("../models/ApplicationConfigurationModuleContact");
var ApplicationConfigurationModuleContactAddressLabels_1 = require("../models/ApplicationConfigurationModuleContactAddressLabels");
var ApplicationConfigurationModuleEcommerce_1 = require("../models/ApplicationConfigurationModuleEcommerce");
var ApplicationConfigurationModuleEmail_1 = require("../models/ApplicationConfigurationModuleEmail");
var ApplicationConfigurationModuleForms_1 = require("../models/ApplicationConfigurationModuleForms");
var ApplicationConfigurationModuleFulfillment_1 = require("../models/ApplicationConfigurationModuleFulfillment");
var ApplicationConfigurationModuleInvoice_1 = require("../models/ApplicationConfigurationModuleInvoice");
var ApplicationConfigurationModuleNote_1 = require("../models/ApplicationConfigurationModuleNote");
var ApplicationConfigurationModuleOpportunity_1 = require("../models/ApplicationConfigurationModuleOpportunity");
var ApplicationConfigurationModuleOpportunityStates_1 = require("../models/ApplicationConfigurationModuleOpportunityStates");
var ApplicationConfigurationModuleOpportunityStatesActive_1 = require("../models/ApplicationConfigurationModuleOpportunityStatesActive");
var ApplicationConfigurationModuleOpportunityStatesLoss_1 = require("../models/ApplicationConfigurationModuleOpportunityStatesLoss");
var ApplicationConfigurationModuleOpportunityStatesWin_1 = require("../models/ApplicationConfigurationModuleOpportunityStatesWin");
var ApplicationConfigurationModuleTask_1 = require("../models/ApplicationConfigurationModuleTask");
var ApplicationConfigurationModuleTemplate_1 = require("../models/ApplicationConfigurationModuleTemplate");
var ApplicationFeaturesEnabled_1 = require("../models/ApplicationFeaturesEnabled");
var ApplyRemoveTagRequest_1 = require("../models/ApplyRemoveTagRequest");
var ApplyTagsResponse_1 = require("../models/ApplyTagsResponse");
var Automation_1 = require("../models/Automation");
var AutomationCategory_1 = require("../models/AutomationCategory");
var AutomationLockStatus_1 = require("../models/AutomationLockStatus");
var BasicCompany_1 = require("../models/BasicCompany");
var BasicContact_1 = require("../models/BasicContact");
var BasicUser_1 = require("../models/BasicUser");
var BusinessProfileAddressRequest_1 = require("../models/BusinessProfileAddressRequest");
var BusinessProfileAddressResponse_1 = require("../models/BusinessProfileAddressResponse");
var Campaign_1 = require("../models/Campaign");
var CancelSubscriptionsRequest_1 = require("../models/CancelSubscriptionsRequest");
var CardInfo_1 = require("../models/CardInfo");
var CategoryDiscount_1 = require("../models/CategoryDiscount");
var CategoryReference_1 = require("../models/CategoryReference");
var CheckListItem_1 = require("../models/CheckListItem");
var CheckListItemDetails_1 = require("../models/CheckListItemDetails");
var Company_1 = require("../models/Company");
var Contact_1 = require("../models/Contact");
var ContactLink_1 = require("../models/ContactLink");
var ContactLinkType_1 = require("../models/ContactLinkType");
var ContactUtmResponse_1 = require("../models/ContactUtmResponse");
var Country_1 = require("../models/Country");
var CreateAffiliateRequest_1 = require("../models/CreateAffiliateRequest");
var CreateAutomationCategoryRequest_1 = require("../models/CreateAutomationCategoryRequest");
var CreateCommissionProgramRequest_1 = require("../models/CreateCommissionProgramRequest");
var CreateCompanyRequest_1 = require("../models/CreateCompanyRequest");
var CreateContactLinkTypeRequest_1 = require("../models/CreateContactLinkTypeRequest");
var CreateContactUtmPropertiesRequest_1 = require("../models/CreateContactUtmPropertiesRequest");
var CreateCustomFieldOptionRequest_1 = require("../models/CreateCustomFieldOptionRequest");
var CreateCustomFieldRequest_1 = require("../models/CreateCustomFieldRequest");
var CreateCustomFieldResponse_1 = require("../models/CreateCustomFieldResponse");
var CreateDefaultCommissionProgramRequest_1 = require("../models/CreateDefaultCommissionProgramRequest");
var CreateEmailSentRequest_1 = require("../models/CreateEmailSentRequest");
var CreateEmailsSentRequest_1 = require("../models/CreateEmailsSentRequest");
var CreateFunnelIntegrationRequest_1 = require("../models/CreateFunnelIntegrationRequest");
var CreateFunnelIntegrationTriggerEvents_1 = require("../models/CreateFunnelIntegrationTriggerEvents");
var CreateLeadSourceRequest_1 = require("../models/CreateLeadSourceRequest");
var CreateNoteRequest_1 = require("../models/CreateNoteRequest");
var CreateOpportunityRequest_1 = require("../models/CreateOpportunityRequest");
var CreateOpportunityStageCheckListItem_1 = require("../models/CreateOpportunityStageCheckListItem");
var CreateOpportunityStageRequest_1 = require("../models/CreateOpportunityStageRequest");
var CreateOrPatchAffiliateLinkRequest_1 = require("../models/CreateOrPatchAffiliateLinkRequest");
var CreatePatchContactRequest_1 = require("../models/CreatePatchContactRequest");
var CreatePatchTaskRequest_1 = require("../models/CreatePatchTaskRequest");
var CreatePaymentMethodConfigRequest_1 = require("../models/CreatePaymentMethodConfigRequest");
var CreatePaymentRequest_1 = require("../models/CreatePaymentRequest");
var CreateProductCommissionProgramRequest_1 = require("../models/CreateProductCommissionProgramRequest");
var CreateReferralRequest_1 = require("../models/CreateReferralRequest");
var CreateRestOrderItemRequest_1 = require("../models/CreateRestOrderItemRequest");
var CreateSubscriptionCommissionProgramRequest_1 = require("../models/CreateSubscriptionCommissionProgramRequest");
var CreateSubscriptionV2_1 = require("../models/CreateSubscriptionV2");
var CreateTaskRequest_1 = require("../models/CreateTaskRequest");
var CreateUpdateTagCategoryRequest_1 = require("../models/CreateUpdateTagCategoryRequest");
var CreateUpdateTagRequest_1 = require("../models/CreateUpdateTagRequest");
var CreateUserRequestV2_1 = require("../models/CreateUserRequestV2");
var Criteria_1 = require("../models/Criteria");
var CustomField_1 = require("../models/CustomField");
var CustomFieldMetaData_1 = require("../models/CustomFieldMetaData");
var CustomFieldOption_1 = require("../models/CustomFieldOption");
var CustomFieldValue_1 = require("../models/CustomFieldValue");
var DefaultCommission_1 = require("../models/DefaultCommission");
var DeleteEmailsRequest_1 = require("../models/DeleteEmailsRequest");
var DeleteEmailsResponse_1 = require("../models/DeleteEmailsResponse");
var DeleteFunnelIntegrationRequest_1 = require("../models/DeleteFunnelIntegrationRequest");
var DeleteSubscriptionPlanCommissionRequest_1 = require("../models/DeleteSubscriptionPlanCommissionRequest");
var Discount_1 = require("../models/Discount");
var EmailAddress_1 = require("../models/EmailAddress");
var EmailAddressRequest_1 = require("../models/EmailAddressRequest");
var EmailSendRequest_1 = require("../models/EmailSendRequest");
var EmailSendRequestAttachment_1 = require("../models/EmailSendRequestAttachment");
var EmailSentCreateError_1 = require("../models/EmailSentCreateError");
var EmailSentWithContent_1 = require("../models/EmailSentWithContent");
var EmailsSentList_1 = require("../models/EmailsSentList");
var FaxNumber_1 = require("../models/FaxNumber");
var FunnelIntegrationAction_1 = require("../models/FunnelIntegrationAction");
var FunnelIntegrationHttpRequest_1 = require("../models/FunnelIntegrationHttpRequest");
var FunnelIntegrationSchemaField_1 = require("../models/FunnelIntegrationSchemaField");
var FunnelIntegrationTriggerEventDTO_1 = require("../models/FunnelIntegrationTriggerEventDTO");
var FunnelIntegrationTriggerResultDTO_1 = require("../models/FunnelIntegrationTriggerResultDTO");
var GetApplicationEnabledStatusResponse_1 = require("../models/GetApplicationEnabledStatusResponse");
var GetBusinessProfileResponse_1 = require("../models/GetBusinessProfileResponse");
var GetContactOptionTypesResponse_1 = require("../models/GetContactOptionTypesResponse");
var GetNoteResponse_1 = require("../models/GetNoteResponse");
var GetSettingsResponse_1 = require("../models/GetSettingsResponse");
var GetTagCategoryResponse_1 = require("../models/GetTagCategoryResponse");
var GetUserInfoResponse_1 = require("../models/GetUserInfoResponse");
var Goal_1 = require("../models/Goal");
var HistoricalCounts_1 = require("../models/HistoricalCounts");
var Item_1 = require("../models/Item");
var LandingPage_1 = require("../models/LandingPage");
var LeadSource_1 = require("../models/LeadSource");
var LeadSourceCategory_1 = require("../models/LeadSourceCategory");
var Link_1 = require("../models/Link");
var LinkContactsRequest_1 = require("../models/LinkContactsRequest");
var ListAffiliateCommissionProgramsResponse_1 = require("../models/ListAffiliateCommissionProgramsResponse");
var ListAffiliateCommissionResponse_1 = require("../models/ListAffiliateCommissionResponse");
var ListAffiliateLinksResponse_1 = require("../models/ListAffiliateLinksResponse");
var ListAffiliateSummariesResponse_1 = require("../models/ListAffiliateSummariesResponse");
var ListAutomationCategoryResponse_1 = require("../models/ListAutomationCategoryResponse");
var ListAutomationIdsResponse_1 = require("../models/ListAutomationIdsResponse");
var ListAutomationResponse_1 = require("../models/ListAutomationResponse");
var ListBasicContactResponse_1 = require("../models/ListBasicContactResponse");
var ListCampaignsResponse_1 = require("../models/ListCampaignsResponse");
var ListCompaniesResponse_1 = require("../models/ListCompaniesResponse");
var ListContactLinkTypesResponse_1 = require("../models/ListContactLinkTypesResponse");
var ListContactLinksResponse_1 = require("../models/ListContactLinksResponse");
var ListContactsResponse_1 = require("../models/ListContactsResponse");
var ListCountriesResponse_1 = require("../models/ListCountriesResponse");
var ListLandingPagesResponse_1 = require("../models/ListLandingPagesResponse");
var ListLeadSourcesResponse_1 = require("../models/ListLeadSourcesResponse");
var ListNotesResponse_1 = require("../models/ListNotesResponse");
var ListOpportunitiesResponse_1 = require("../models/ListOpportunitiesResponse");
var ListOpportunityStagesResponse_1 = require("../models/ListOpportunityStagesResponse");
var ListOrders_1 = require("../models/ListOrders");
var ListProductsResponse_1 = require("../models/ListProductsResponse");
var ListProvincesResponse_1 = require("../models/ListProvincesResponse");
var ListRestMerchantAccountResponse_1 = require("../models/ListRestMerchantAccountResponse");
var ListRestMerchantResponse_1 = require("../models/ListRestMerchantResponse");
var ListRestShippingMethodsResponse_1 = require("../models/ListRestShippingMethodsResponse");
var ListSubscriptionPlansResponse_1 = require("../models/ListSubscriptionPlansResponse");
var ListTagCategoriesResponse_1 = require("../models/ListTagCategoriesResponse");
var ListTaggedCompaniesResponse_1 = require("../models/ListTaggedCompaniesResponse");
var ListTaggedContactsResponse_1 = require("../models/ListTaggedContactsResponse");
var ListTagsResponse_1 = require("../models/ListTagsResponse");
var ListTasksResponse_1 = require("../models/ListTasksResponse");
var ListUserResponse_1 = require("../models/ListUserResponse");
var ModelError_1 = require("../models/ModelError");
var Note_1 = require("../models/Note");
var ObjectModel_1 = require("../models/ObjectModel");
var OpportunityContact_1 = require("../models/OpportunityContact");
var OpportunityStage_1 = require("../models/OpportunityStage");
var OrderItemTax_1 = require("../models/OrderItemTax");
var Origin_1 = require("../models/Origin");
var OriginRequest_1 = require("../models/OriginRequest");
var PatchAffiliateRequest_1 = require("../models/PatchAffiliateRequest");
var PatchBusinessProfileRequest_1 = require("../models/PatchBusinessProfileRequest");
var PatchCommissionProgramRequest_1 = require("../models/PatchCommissionProgramRequest");
var PatchCompanyRequest_1 = require("../models/PatchCompanyRequest");
var PatchDefaultCommissionProgramRequest_1 = require("../models/PatchDefaultCommissionProgramRequest");
var PatchOpportunityRequest_1 = require("../models/PatchOpportunityRequest");
var PatchProductCommissionProgramRequest_1 = require("../models/PatchProductCommissionProgramRequest");
var PatchSubscriptionCommissionProgramRequest_1 = require("../models/PatchSubscriptionCommissionProgramRequest");
var PatchUserRequestV2_1 = require("../models/PatchUserRequestV2");
var PaymentMethodConfig_1 = require("../models/PaymentMethodConfig");
var PaymentMethodList_1 = require("../models/PaymentMethodList");
var PaymentPlan_1 = require("../models/PaymentPlan");
var PaymentResult_1 = require("../models/PaymentResult");
var PhoneNumber_1 = require("../models/PhoneNumber");
var ProductCommission_1 = require("../models/ProductCommission");
var ProductCommissionProgram_1 = require("../models/ProductCommissionProgram");
var Provinces_1 = require("../models/Provinces");
var Referral_1 = require("../models/Referral");
var RemoveContactsFromSequenceRequest_1 = require("../models/RemoveContactsFromSequenceRequest");
var RemoveContactsFromSequenceResponse_1 = require("../models/RemoveContactsFromSequenceResponse");
var ReportEntryRecord_1 = require("../models/ReportEntryRecord");
var ReportEntryValue_1 = require("../models/ReportEntryValue");
var ReportExecutionResult_1 = require("../models/ReportExecutionResult");
var RestAffiliate_1 = require("../models/RestAffiliate");
var RestCreateOrderRequest_1 = require("../models/RestCreateOrderRequest");
var RestEmailAddress_1 = require("../models/RestEmailAddress");
var RestOpportunityStage_1 = require("../models/RestOpportunityStage");
var RestPaymentGateway_1 = require("../models/RestPaymentGateway");
var RestPaymentMethod_1 = require("../models/RestPaymentMethod");
var RestProduct_1 = require("../models/RestProduct");
var RestProductOption_1 = require("../models/RestProductOption");
var RestProductOptionValue_1 = require("../models/RestProductOptionValue");
var RestSubscriptionPlan_1 = require("../models/RestSubscriptionPlan");
var RestSubscriptionV2_1 = require("../models/RestSubscriptionV2");
var RestV2Opportunity_1 = require("../models/RestV2Opportunity");
var RestV2Order_1 = require("../models/RestV2Order");
var RestV2OrderItem_1 = require("../models/RestV2OrderItem");
var RestV2Subscription_1 = require("../models/RestV2Subscription");
var RestV2User_1 = require("../models/RestV2User");
var SaveAutomationCategoryRequest_1 = require("../models/SaveAutomationCategoryRequest");
var Sequence_1 = require("../models/Sequence");
var SequencePath_1 = require("../models/SequencePath");
var SetDefaultCommissionProgramResponse_1 = require("../models/SetDefaultCommissionProgramResponse");
var ShippingInformation_1 = require("../models/ShippingInformation");
var ShippingMethod_1 = require("../models/ShippingMethod");
var SocialAccount_1 = require("../models/SocialAccount");
var StackTraceElement_1 = require("../models/StackTraceElement");
var StageDetails_1 = require("../models/StageDetails");
var SubscriptionCommission_1 = require("../models/SubscriptionCommission");
var SubscriptionCommissionProgram_1 = require("../models/SubscriptionCommissionProgram");
var Tag_1 = require("../models/Tag");
var TaggedCompany_1 = require("../models/TaggedCompany");
var Task_1 = require("../models/Task");
var Throwable_1 = require("../models/Throwable");
var UpdateAutomationCategoryRequest_1 = require("../models/UpdateAutomationCategoryRequest");
var UpdateCustomFieldMetaDataRequest_1 = require("../models/UpdateCustomFieldMetaDataRequest");
var UpdateEmailAddress_1 = require("../models/UpdateEmailAddress");
var UpdateNoteRequest_1 = require("../models/UpdateNoteRequest");
var UpdateNoteResponse_1 = require("../models/UpdateNoteResponse");
var UpdateTagCategoryResponse_1 = require("../models/UpdateTagCategoryResponse");
var UpdateTagResponse_1 = require("../models/UpdateTagResponse");
var UpdateTaskResponse_1 = require("../models/UpdateTaskResponse");
var User_1 = require("../models/User");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([
    "AddressFieldEnum",
    "ContactSourceTypeEnum",
    "CreateAffiliateRequestStatusEnum",
    "CreateCustomFieldRequestFieldTypeEnum",
    "CreateEmailSentRequestOriginalProviderEnum",
    "CreatePatchContactRequestSourceTypeEnum",
    "CreatePatchTaskRequestPriorityEnum",
    "CreatePatchTaskRequestTypeEnum",
    "CreateReferralRequestReferralTypeEnum",
    "CreateRestOrderItemRequestProductTypeEnum",
    "CreateTaskRequestPriorityEnum",
    "CreateTaskRequestTypeEnum",
    "CriteriaTypeEnum",
    "CustomFieldMetaDataFieldTypeEnum",
    "CustomFieldMetaDataRecordTypeEnum",
    "DiscountDiscountMethodEnum",
    "EmailAddressEmailOptStatusEnum",
    "EmailAddressFieldEnum",
    "EmailAddressRequestFieldEnum",
    "EmailSentWithContentOriginalProviderEnum",
    "FaxNumberFieldEnum",
    "GoalTypeEnum",
    "ItemTypeEnum",
    "ListRestMerchantAccountResponseTypeEnum",
    "PatchAffiliateRequestStatusEnum",
    "PhoneNumberFieldEnum",
    "ReferralReferralTypeEnum",
    "RestCreateOrderRequestOrderTypeEnum",
    "RestEmailAddressStatusEnum",
    "RestProductOptionTypeEnum",
    "RestSubscriptionV2BillingCycleEnum",
    "RestV2OrderSourceTypeEnum",
    "RestV2OrderItemCycleEnum",
    "RestV2OrderItemTypeEnum",
    "SocialAccountTypeEnum",
    "TaskPriorityEnum",
    "TaskTypeEnum",
    "UpdateTaskResponsePriorityEnum",
    "UpdateTaskResponseTypeEnum",
    "UserStatusEnum",
]);
var typeMap = {
    "AddContactsToSequenceRequest": AddContactsToSequenceRequest_1.AddContactsToSequenceRequest,
    "AddContactsToSequenceResponse": AddContactsToSequenceResponse_1.AddContactsToSequenceResponse,
    "AddToAutomationSequenceRequest": AddToAutomationSequenceRequest_1.AddToAutomationSequenceRequest,
    "AddToAutomationSequenceResponse": AddToAutomationSequenceResponse_1.AddToAutomationSequenceResponse,
    "Address": Address_1.Address,
    "AddressInformation": AddressInformation_1.AddressInformation,
    "AffiliateAddToProgramRequest": AffiliateAddToProgramRequest_1.AffiliateAddToProgramRequest,
    "AffiliateCommission": AffiliateCommission_1.AffiliateCommission,
    "AffiliateCommissionEarned": AffiliateCommissionEarned_1.AffiliateCommissionEarned,
    "AffiliateCommissionProgramResponse": AffiliateCommissionProgramResponse_1.AffiliateCommissionProgramResponse,
    "AffiliateLink": AffiliateLink_1.AffiliateLink,
    "AffiliateProgramV2": AffiliateProgramV2_1.AffiliateProgramV2,
    "AffiliateRemoveFromProgramRequest": AffiliateRemoveFromProgramRequest_1.AffiliateRemoveFromProgramRequest,
    "AffiliateSummaryRecord": AffiliateSummaryRecord_1.AffiliateSummaryRecord,
    "ApplicationCompany": ApplicationCompany_1.ApplicationCompany,
    "ApplicationConfigurationModuleAffiliate": ApplicationConfigurationModuleAffiliate_1.ApplicationConfigurationModuleAffiliate,
    "ApplicationConfigurationModuleAffiliateCommission": ApplicationConfigurationModuleAffiliateCommission_1.ApplicationConfigurationModuleAffiliateCommission,
    "ApplicationConfigurationModuleApplication": ApplicationConfigurationModuleApplication_1.ApplicationConfigurationModuleApplication,
    "ApplicationConfigurationModuleAppointment": ApplicationConfigurationModuleAppointment_1.ApplicationConfigurationModuleAppointment,
    "ApplicationConfigurationModuleContact": ApplicationConfigurationModuleContact_1.ApplicationConfigurationModuleContact,
    "ApplicationConfigurationModuleContactAddressLabels": ApplicationConfigurationModuleContactAddressLabels_1.ApplicationConfigurationModuleContactAddressLabels,
    "ApplicationConfigurationModuleEcommerce": ApplicationConfigurationModuleEcommerce_1.ApplicationConfigurationModuleEcommerce,
    "ApplicationConfigurationModuleEmail": ApplicationConfigurationModuleEmail_1.ApplicationConfigurationModuleEmail,
    "ApplicationConfigurationModuleForms": ApplicationConfigurationModuleForms_1.ApplicationConfigurationModuleForms,
    "ApplicationConfigurationModuleFulfillment": ApplicationConfigurationModuleFulfillment_1.ApplicationConfigurationModuleFulfillment,
    "ApplicationConfigurationModuleInvoice": ApplicationConfigurationModuleInvoice_1.ApplicationConfigurationModuleInvoice,
    "ApplicationConfigurationModuleNote": ApplicationConfigurationModuleNote_1.ApplicationConfigurationModuleNote,
    "ApplicationConfigurationModuleOpportunity": ApplicationConfigurationModuleOpportunity_1.ApplicationConfigurationModuleOpportunity,
    "ApplicationConfigurationModuleOpportunityStates": ApplicationConfigurationModuleOpportunityStates_1.ApplicationConfigurationModuleOpportunityStates,
    "ApplicationConfigurationModuleOpportunityStatesActive": ApplicationConfigurationModuleOpportunityStatesActive_1.ApplicationConfigurationModuleOpportunityStatesActive,
    "ApplicationConfigurationModuleOpportunityStatesLoss": ApplicationConfigurationModuleOpportunityStatesLoss_1.ApplicationConfigurationModuleOpportunityStatesLoss,
    "ApplicationConfigurationModuleOpportunityStatesWin": ApplicationConfigurationModuleOpportunityStatesWin_1.ApplicationConfigurationModuleOpportunityStatesWin,
    "ApplicationConfigurationModuleTask": ApplicationConfigurationModuleTask_1.ApplicationConfigurationModuleTask,
    "ApplicationConfigurationModuleTemplate": ApplicationConfigurationModuleTemplate_1.ApplicationConfigurationModuleTemplate,
    "ApplicationFeaturesEnabled": ApplicationFeaturesEnabled_1.ApplicationFeaturesEnabled,
    "ApplyRemoveTagRequest": ApplyRemoveTagRequest_1.ApplyRemoveTagRequest,
    "ApplyTagsResponse": ApplyTagsResponse_1.ApplyTagsResponse,
    "Automation": Automation_1.Automation,
    "AutomationCategory": AutomationCategory_1.AutomationCategory,
    "AutomationLockStatus": AutomationLockStatus_1.AutomationLockStatus,
    "BasicCompany": BasicCompany_1.BasicCompany,
    "BasicContact": BasicContact_1.BasicContact,
    "BasicUser": BasicUser_1.BasicUser,
    "BusinessProfileAddressRequest": BusinessProfileAddressRequest_1.BusinessProfileAddressRequest,
    "BusinessProfileAddressResponse": BusinessProfileAddressResponse_1.BusinessProfileAddressResponse,
    "Campaign": Campaign_1.Campaign,
    "CancelSubscriptionsRequest": CancelSubscriptionsRequest_1.CancelSubscriptionsRequest,
    "CardInfo": CardInfo_1.CardInfo,
    "CategoryDiscount": CategoryDiscount_1.CategoryDiscount,
    "CategoryReference": CategoryReference_1.CategoryReference,
    "CheckListItem": CheckListItem_1.CheckListItem,
    "CheckListItemDetails": CheckListItemDetails_1.CheckListItemDetails,
    "Company": Company_1.Company,
    "Contact": Contact_1.Contact,
    "ContactLink": ContactLink_1.ContactLink,
    "ContactLinkType": ContactLinkType_1.ContactLinkType,
    "ContactUtmResponse": ContactUtmResponse_1.ContactUtmResponse,
    "Country": Country_1.Country,
    "CreateAffiliateRequest": CreateAffiliateRequest_1.CreateAffiliateRequest,
    "CreateAutomationCategoryRequest": CreateAutomationCategoryRequest_1.CreateAutomationCategoryRequest,
    "CreateCommissionProgramRequest": CreateCommissionProgramRequest_1.CreateCommissionProgramRequest,
    "CreateCompanyRequest": CreateCompanyRequest_1.CreateCompanyRequest,
    "CreateContactLinkTypeRequest": CreateContactLinkTypeRequest_1.CreateContactLinkTypeRequest,
    "CreateContactUtmPropertiesRequest": CreateContactUtmPropertiesRequest_1.CreateContactUtmPropertiesRequest,
    "CreateCustomFieldOptionRequest": CreateCustomFieldOptionRequest_1.CreateCustomFieldOptionRequest,
    "CreateCustomFieldRequest": CreateCustomFieldRequest_1.CreateCustomFieldRequest,
    "CreateCustomFieldResponse": CreateCustomFieldResponse_1.CreateCustomFieldResponse,
    "CreateDefaultCommissionProgramRequest": CreateDefaultCommissionProgramRequest_1.CreateDefaultCommissionProgramRequest,
    "CreateEmailSentRequest": CreateEmailSentRequest_1.CreateEmailSentRequest,
    "CreateEmailsSentRequest": CreateEmailsSentRequest_1.CreateEmailsSentRequest,
    "CreateFunnelIntegrationRequest": CreateFunnelIntegrationRequest_1.CreateFunnelIntegrationRequest,
    "CreateFunnelIntegrationTriggerEvents": CreateFunnelIntegrationTriggerEvents_1.CreateFunnelIntegrationTriggerEvents,
    "CreateLeadSourceRequest": CreateLeadSourceRequest_1.CreateLeadSourceRequest,
    "CreateNoteRequest": CreateNoteRequest_1.CreateNoteRequest,
    "CreateOpportunityRequest": CreateOpportunityRequest_1.CreateOpportunityRequest,
    "CreateOpportunityStageCheckListItem": CreateOpportunityStageCheckListItem_1.CreateOpportunityStageCheckListItem,
    "CreateOpportunityStageRequest": CreateOpportunityStageRequest_1.CreateOpportunityStageRequest,
    "CreateOrPatchAffiliateLinkRequest": CreateOrPatchAffiliateLinkRequest_1.CreateOrPatchAffiliateLinkRequest,
    "CreatePatchContactRequest": CreatePatchContactRequest_1.CreatePatchContactRequest,
    "CreatePatchTaskRequest": CreatePatchTaskRequest_1.CreatePatchTaskRequest,
    "CreatePaymentMethodConfigRequest": CreatePaymentMethodConfigRequest_1.CreatePaymentMethodConfigRequest,
    "CreatePaymentRequest": CreatePaymentRequest_1.CreatePaymentRequest,
    "CreateProductCommissionProgramRequest": CreateProductCommissionProgramRequest_1.CreateProductCommissionProgramRequest,
    "CreateReferralRequest": CreateReferralRequest_1.CreateReferralRequest,
    "CreateRestOrderItemRequest": CreateRestOrderItemRequest_1.CreateRestOrderItemRequest,
    "CreateSubscriptionCommissionProgramRequest": CreateSubscriptionCommissionProgramRequest_1.CreateSubscriptionCommissionProgramRequest,
    "CreateSubscriptionV2": CreateSubscriptionV2_1.CreateSubscriptionV2,
    "CreateTaskRequest": CreateTaskRequest_1.CreateTaskRequest,
    "CreateUpdateTagCategoryRequest": CreateUpdateTagCategoryRequest_1.CreateUpdateTagCategoryRequest,
    "CreateUpdateTagRequest": CreateUpdateTagRequest_1.CreateUpdateTagRequest,
    "CreateUserRequestV2": CreateUserRequestV2_1.CreateUserRequestV2,
    "Criteria": Criteria_1.Criteria,
    "CustomField": CustomField_1.CustomField,
    "CustomFieldMetaData": CustomFieldMetaData_1.CustomFieldMetaData,
    "CustomFieldOption": CustomFieldOption_1.CustomFieldOption,
    "CustomFieldValue": CustomFieldValue_1.CustomFieldValue,
    "DefaultCommission": DefaultCommission_1.DefaultCommission,
    "DeleteEmailsRequest": DeleteEmailsRequest_1.DeleteEmailsRequest,
    "DeleteEmailsResponse": DeleteEmailsResponse_1.DeleteEmailsResponse,
    "DeleteFunnelIntegrationRequest": DeleteFunnelIntegrationRequest_1.DeleteFunnelIntegrationRequest,
    "DeleteSubscriptionPlanCommissionRequest": DeleteSubscriptionPlanCommissionRequest_1.DeleteSubscriptionPlanCommissionRequest,
    "Discount": Discount_1.Discount,
    "EmailAddress": EmailAddress_1.EmailAddress,
    "EmailAddressRequest": EmailAddressRequest_1.EmailAddressRequest,
    "EmailSendRequest": EmailSendRequest_1.EmailSendRequest,
    "EmailSendRequestAttachment": EmailSendRequestAttachment_1.EmailSendRequestAttachment,
    "EmailSentCreateError": EmailSentCreateError_1.EmailSentCreateError,
    "EmailSentWithContent": EmailSentWithContent_1.EmailSentWithContent,
    "EmailsSentList": EmailsSentList_1.EmailsSentList,
    "FaxNumber": FaxNumber_1.FaxNumber,
    "FunnelIntegrationAction": FunnelIntegrationAction_1.FunnelIntegrationAction,
    "FunnelIntegrationHttpRequest": FunnelIntegrationHttpRequest_1.FunnelIntegrationHttpRequest,
    "FunnelIntegrationSchemaField": FunnelIntegrationSchemaField_1.FunnelIntegrationSchemaField,
    "FunnelIntegrationTriggerEventDTO": FunnelIntegrationTriggerEventDTO_1.FunnelIntegrationTriggerEventDTO,
    "FunnelIntegrationTriggerResultDTO": FunnelIntegrationTriggerResultDTO_1.FunnelIntegrationTriggerResultDTO,
    "GetApplicationEnabledStatusResponse": GetApplicationEnabledStatusResponse_1.GetApplicationEnabledStatusResponse,
    "GetBusinessProfileResponse": GetBusinessProfileResponse_1.GetBusinessProfileResponse,
    "GetContactOptionTypesResponse": GetContactOptionTypesResponse_1.GetContactOptionTypesResponse,
    "GetNoteResponse": GetNoteResponse_1.GetNoteResponse,
    "GetSettingsResponse": GetSettingsResponse_1.GetSettingsResponse,
    "GetTagCategoryResponse": GetTagCategoryResponse_1.GetTagCategoryResponse,
    "GetUserInfoResponse": GetUserInfoResponse_1.GetUserInfoResponse,
    "Goal": Goal_1.Goal,
    "HistoricalCounts": HistoricalCounts_1.HistoricalCounts,
    "Item": Item_1.Item,
    "LandingPage": LandingPage_1.LandingPage,
    "LeadSource": LeadSource_1.LeadSource,
    "LeadSourceCategory": LeadSourceCategory_1.LeadSourceCategory,
    "Link": Link_1.Link,
    "LinkContactsRequest": LinkContactsRequest_1.LinkContactsRequest,
    "ListAffiliateCommissionProgramsResponse": ListAffiliateCommissionProgramsResponse_1.ListAffiliateCommissionProgramsResponse,
    "ListAffiliateCommissionResponse": ListAffiliateCommissionResponse_1.ListAffiliateCommissionResponse,
    "ListAffiliateLinksResponse": ListAffiliateLinksResponse_1.ListAffiliateLinksResponse,
    "ListAffiliateSummariesResponse": ListAffiliateSummariesResponse_1.ListAffiliateSummariesResponse,
    "ListAutomationCategoryResponse": ListAutomationCategoryResponse_1.ListAutomationCategoryResponse,
    "ListAutomationIdsResponse": ListAutomationIdsResponse_1.ListAutomationIdsResponse,
    "ListAutomationResponse": ListAutomationResponse_1.ListAutomationResponse,
    "ListBasicContactResponse": ListBasicContactResponse_1.ListBasicContactResponse,
    "ListCampaignsResponse": ListCampaignsResponse_1.ListCampaignsResponse,
    "ListCompaniesResponse": ListCompaniesResponse_1.ListCompaniesResponse,
    "ListContactLinkTypesResponse": ListContactLinkTypesResponse_1.ListContactLinkTypesResponse,
    "ListContactLinksResponse": ListContactLinksResponse_1.ListContactLinksResponse,
    "ListContactsResponse": ListContactsResponse_1.ListContactsResponse,
    "ListCountriesResponse": ListCountriesResponse_1.ListCountriesResponse,
    "ListLandingPagesResponse": ListLandingPagesResponse_1.ListLandingPagesResponse,
    "ListLeadSourcesResponse": ListLeadSourcesResponse_1.ListLeadSourcesResponse,
    "ListNotesResponse": ListNotesResponse_1.ListNotesResponse,
    "ListOpportunitiesResponse": ListOpportunitiesResponse_1.ListOpportunitiesResponse,
    "ListOpportunityStagesResponse": ListOpportunityStagesResponse_1.ListOpportunityStagesResponse,
    "ListOrders": ListOrders_1.ListOrders,
    "ListProductsResponse": ListProductsResponse_1.ListProductsResponse,
    "ListProvincesResponse": ListProvincesResponse_1.ListProvincesResponse,
    "ListRestMerchantAccountResponse": ListRestMerchantAccountResponse_1.ListRestMerchantAccountResponse,
    "ListRestMerchantResponse": ListRestMerchantResponse_1.ListRestMerchantResponse,
    "ListRestShippingMethodsResponse": ListRestShippingMethodsResponse_1.ListRestShippingMethodsResponse,
    "ListSubscriptionPlansResponse": ListSubscriptionPlansResponse_1.ListSubscriptionPlansResponse,
    "ListTagCategoriesResponse": ListTagCategoriesResponse_1.ListTagCategoriesResponse,
    "ListTaggedCompaniesResponse": ListTaggedCompaniesResponse_1.ListTaggedCompaniesResponse,
    "ListTaggedContactsResponse": ListTaggedContactsResponse_1.ListTaggedContactsResponse,
    "ListTagsResponse": ListTagsResponse_1.ListTagsResponse,
    "ListTasksResponse": ListTasksResponse_1.ListTasksResponse,
    "ListUserResponse": ListUserResponse_1.ListUserResponse,
    "ModelError": ModelError_1.ModelError,
    "Note": Note_1.Note,
    "ObjectModel": ObjectModel_1.ObjectModel,
    "OpportunityContact": OpportunityContact_1.OpportunityContact,
    "OpportunityStage": OpportunityStage_1.OpportunityStage,
    "OrderItemTax": OrderItemTax_1.OrderItemTax,
    "Origin": Origin_1.Origin,
    "OriginRequest": OriginRequest_1.OriginRequest,
    "PatchAffiliateRequest": PatchAffiliateRequest_1.PatchAffiliateRequest,
    "PatchBusinessProfileRequest": PatchBusinessProfileRequest_1.PatchBusinessProfileRequest,
    "PatchCommissionProgramRequest": PatchCommissionProgramRequest_1.PatchCommissionProgramRequest,
    "PatchCompanyRequest": PatchCompanyRequest_1.PatchCompanyRequest,
    "PatchDefaultCommissionProgramRequest": PatchDefaultCommissionProgramRequest_1.PatchDefaultCommissionProgramRequest,
    "PatchOpportunityRequest": PatchOpportunityRequest_1.PatchOpportunityRequest,
    "PatchProductCommissionProgramRequest": PatchProductCommissionProgramRequest_1.PatchProductCommissionProgramRequest,
    "PatchSubscriptionCommissionProgramRequest": PatchSubscriptionCommissionProgramRequest_1.PatchSubscriptionCommissionProgramRequest,
    "PatchUserRequestV2": PatchUserRequestV2_1.PatchUserRequestV2,
    "PaymentMethodConfig": PaymentMethodConfig_1.PaymentMethodConfig,
    "PaymentMethodList": PaymentMethodList_1.PaymentMethodList,
    "PaymentPlan": PaymentPlan_1.PaymentPlan,
    "PaymentResult": PaymentResult_1.PaymentResult,
    "PhoneNumber": PhoneNumber_1.PhoneNumber,
    "ProductCommission": ProductCommission_1.ProductCommission,
    "ProductCommissionProgram": ProductCommissionProgram_1.ProductCommissionProgram,
    "Provinces": Provinces_1.Provinces,
    "Referral": Referral_1.Referral,
    "RemoveContactsFromSequenceRequest": RemoveContactsFromSequenceRequest_1.RemoveContactsFromSequenceRequest,
    "RemoveContactsFromSequenceResponse": RemoveContactsFromSequenceResponse_1.RemoveContactsFromSequenceResponse,
    "ReportEntryRecord": ReportEntryRecord_1.ReportEntryRecord,
    "ReportEntryValue": ReportEntryValue_1.ReportEntryValue,
    "ReportExecutionResult": ReportExecutionResult_1.ReportExecutionResult,
    "RestAffiliate": RestAffiliate_1.RestAffiliate,
    "RestCreateOrderRequest": RestCreateOrderRequest_1.RestCreateOrderRequest,
    "RestEmailAddress": RestEmailAddress_1.RestEmailAddress,
    "RestOpportunityStage": RestOpportunityStage_1.RestOpportunityStage,
    "RestPaymentGateway": RestPaymentGateway_1.RestPaymentGateway,
    "RestPaymentMethod": RestPaymentMethod_1.RestPaymentMethod,
    "RestProduct": RestProduct_1.RestProduct,
    "RestProductOption": RestProductOption_1.RestProductOption,
    "RestProductOptionValue": RestProductOptionValue_1.RestProductOptionValue,
    "RestSubscriptionPlan": RestSubscriptionPlan_1.RestSubscriptionPlan,
    "RestSubscriptionV2": RestSubscriptionV2_1.RestSubscriptionV2,
    "RestV2Opportunity": RestV2Opportunity_1.RestV2Opportunity,
    "RestV2Order": RestV2Order_1.RestV2Order,
    "RestV2OrderItem": RestV2OrderItem_1.RestV2OrderItem,
    "RestV2Subscription": RestV2Subscription_1.RestV2Subscription,
    "RestV2User": RestV2User_1.RestV2User,
    "SaveAutomationCategoryRequest": SaveAutomationCategoryRequest_1.SaveAutomationCategoryRequest,
    "Sequence": Sequence_1.Sequence,
    "SequencePath": SequencePath_1.SequencePath,
    "SetDefaultCommissionProgramResponse": SetDefaultCommissionProgramResponse_1.SetDefaultCommissionProgramResponse,
    "ShippingInformation": ShippingInformation_1.ShippingInformation,
    "ShippingMethod": ShippingMethod_1.ShippingMethod,
    "SocialAccount": SocialAccount_1.SocialAccount,
    "StackTraceElement": StackTraceElement_1.StackTraceElement,
    "StageDetails": StageDetails_1.StageDetails,
    "SubscriptionCommission": SubscriptionCommission_1.SubscriptionCommission,
    "SubscriptionCommissionProgram": SubscriptionCommissionProgram_1.SubscriptionCommissionProgram,
    "Tag": Tag_1.Tag,
    "TaggedCompany": TaggedCompany_1.TaggedCompany,
    "Task": Task_1.Task,
    "Throwable": Throwable_1.Throwable,
    "UpdateAutomationCategoryRequest": UpdateAutomationCategoryRequest_1.UpdateAutomationCategoryRequest,
    "UpdateCustomFieldMetaDataRequest": UpdateCustomFieldMetaDataRequest_1.UpdateCustomFieldMetaDataRequest,
    "UpdateEmailAddress": UpdateEmailAddress_1.UpdateEmailAddress,
    "UpdateNoteRequest": UpdateNoteRequest_1.UpdateNoteRequest,
    "UpdateNoteResponse": UpdateNoteResponse_1.UpdateNoteResponse,
    "UpdateTagCategoryResponse": UpdateTagCategoryResponse_1.UpdateTagCategoryResponse,
    "UpdateTagResponse": UpdateTagResponse_1.UpdateTagResponse,
    "UpdateTaskResponse": UpdateTaskResponse_1.UpdateTaskResponse,
    "User": User_1.User,
};
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var nullableSuffix = " | null";
var optionalSuffix = " | undefined";
var arrayPrefix = "Array<";
var arraySuffix = ">";
var mapPrefix = "{ [key: string]: ";
var mapSuffix = "; }";
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    var mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType];
                    }
                    else if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.endsWith(nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.serialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.endsWith(nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.endsWith(optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.deserialize(data, subType, format);
        }
        else if (type.startsWith(arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map