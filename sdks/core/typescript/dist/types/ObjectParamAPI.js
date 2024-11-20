"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectTaskApi = exports.ObjectTagsApi = exports.ObjectSubscriptionsApi = exports.ObjectSubscriptionPlansApi = exports.ObjectShippingApi = exports.ObjectSettingsApi = exports.ObjectSalesApi = exports.ObjectReportingApi = exports.ObjectReferralApi = exports.ObjectProductApi = exports.ObjectPreReleaseApi = exports.ObjectPaymentMethodConfigApi = exports.ObjectOrdersApi = exports.ObjectOpportunityApi = exports.ObjectNoteApi = exports.ObjectMerchantApi = exports.ObjectLocaleApi = exports.ObjectLeadSourcesApi = exports.ObjectLandingPagesApi = exports.ObjectFunnelIntegrationApi = exports.ObjectFreeTrialDiscountApi = exports.ObjectEmailAddressApi = exports.ObjectEmailApi = exports.ObjectContactApi = exports.ObjectCompanyApi = exports.ObjectCategoryDiscountApi = exports.ObjectCampaignApi = exports.ObjectBusinessProfileApi = exports.ObjectAutomationCategoryApi = exports.ObjectAutomationApi = exports.ObjectAffiliateApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAffiliateApi = (function () {
    function ObjectAffiliateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAffiliateApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(param.id, param.affiliateAddToProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.addAffiliateToProgramUsingPOST = function (param, options) {
        return this.api.addAffiliateToProgramUsingPOST(param.id, param.affiliateAddToProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.addAffiliateUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addAffiliateUsingPOSTWithHttpInfo(param.insertAffiliate, options).toPromise();
    };
    ObjectAffiliateApi.prototype.addAffiliateUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addAffiliateUsingPOST(param.insertAffiliate, options).toPromise();
    };
    ObjectAffiliateApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addCommissionProgramUsingPOSTWithHttpInfo(param.insertCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.addCommissionProgramUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addCommissionProgramUsingPOST(param.insertCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.productCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.assignProductCommissionProgramUsingPOST = function (param, options) {
        return this.api.assignProductCommissionProgramUsingPOST(param.commissionProgramId, param.productCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.subscriptionCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (param, options) {
        return this.api.assignSubscriptionCommissionProgramUsingPOST(param.commissionProgramId, param.subscriptionCommissionProgram, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createAffiliateCustomFieldUsingPOST = function (param, options) {
        return this.api.createAffiliateCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createDefaultCommissionProgramUsingPOST = function (param, options) {
        return this.api.createDefaultCommissionProgramUsingPOST(param.commissionProgramId, param.createDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createRedirectLinkUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectAffiliateApi.prototype.createRedirectLinkUsingPOST = function (param, options) {
        return this.api.createRedirectLinkUsingPOST(param.request, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param.commissionProgramId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (param, options) {
        return this.api.deleteAffiliateCommissionProgramUsingDELETE(param.commissionProgramId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteAffiliateUsingDELETEWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteAffiliateUsingDELETE = function (param, options) {
        return this.api.deleteAffiliateUsingDELETE(param.id, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(param.redirectId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.deleteRedirectLinkUsingDELETE = function (param, options) {
        return this.api.deleteRedirectLinkUsingDELETE(param.redirectId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (param, options) {
        return this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(param.affiliateId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCommissionTotalUsingGET = function (param, options) {
        return this.api.getAffiliateCommissionTotalUsingGET(param.affiliateId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (param, options) {
        return this.api.getAffiliateCommissionsUsingGETWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCommissionsUsingGET = function (param, options) {
        return this.api.getAffiliateCommissionsUsingGET(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateCustomFieldsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAffiliateCustomFieldsUsingGET(options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getAffiliateUsingGET1WithHttpInfo(param.id, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getAffiliateUsingGET1 = function (param, options) {
        return this.api.getAffiliateUsingGET1(param.id, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (param, options) {
        return this.api.getCommissionProgramUsingGETWithHttpInfo(param.commissionProgramId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getCommissionProgramUsingGET = function (param, options) {
        return this.api.getCommissionProgramUsingGET(param.commissionProgramId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (param, options) {
        return this.api.getRedirectLinkUsingGETWithHttpInfo(param.redirectId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.getRedirectLinkUsingGET = function (param, options) {
        return this.api.getRedirectLinkUsingGET(param.redirectId, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateCommissionProgramsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateLinksUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listAffiliateLinksUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateLinksUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listSummariesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSummariesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.listSummariesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSummariesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.patchCommissionProgramRequest, param.updateMask, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchCommissionProgramUsingPATCH(param.commissionProgramId, param.patchCommissionProgramRequest, param.updateMask, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchDefaultCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchProductCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchProductCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchSubscriptionCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(param.id, param.removeFromProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.removeAffiliateFromProgramUsingPOST = function (param, options) {
        return this.api.removeAffiliateFromProgramUsingPOST(param.id, param.removeFromProgramRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (param, options) {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteSubscriptionPlanCommissionRequest, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateAffiliateCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateAffiliateUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateAffiliateUsingPATCHWithHttpInfo(param.id, param.patchAffiliate, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateAffiliateUsingPATCH = function (param, options) {
        return this.api.updateAffiliateUsingPATCH(param.id, param.patchAffiliate, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateRedirectLinkUsingPATCHWithHttpInfo(param.redirectId, param.request, options).toPromise();
    };
    ObjectAffiliateApi.prototype.updateRedirectLinkUsingPATCH = function (param, options) {
        return this.api.updateRedirectLinkUsingPATCH(param.redirectId, param.request, options).toPromise();
    };
    return ObjectAffiliateApi;
}());
exports.ObjectAffiliateApi = ObjectAffiliateApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectAutomationApi = (function () {
    function ObjectAutomationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAutomationApi.prototype.addContactsToAutomationSequenceUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest, options).toPromise();
    };
    ObjectAutomationApi.prototype.addContactsToAutomationSequenceUsingPOST = function (param, options) {
        return this.api.addContactsToAutomationSequenceUsingPOST(param.automationId, param.sequenceId, param.addToAutomationSequenceRequest, options).toPromise();
    };
    ObjectAutomationApi.prototype.deleteAutomationUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteAutomationUsingDELETEWithHttpInfo(param.automationIds, options).toPromise();
    };
    ObjectAutomationApi.prototype.deleteAutomationUsingDELETE = function (param, options) {
        return this.api.deleteAutomationUsingDELETE(param.automationIds, options).toPromise();
    };
    ObjectAutomationApi.prototype.getAutomationUsingGETWithHttpInfo = function (param, options) {
        return this.api.getAutomationUsingGETWithHttpInfo(param.automationId, options).toPromise();
    };
    ObjectAutomationApi.prototype.getAutomationUsingGET = function (param, options) {
        return this.api.getAutomationUsingGET(param.automationId, options).toPromise();
    };
    ObjectAutomationApi.prototype.listAllAutomationIdsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAllAutomationIdsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectAutomationApi.prototype.listAllAutomationIdsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAllAutomationIdsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectAutomationApi.prototype.listAutomationsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAutomationsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectAutomationApi.prototype.listAutomationsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAutomationsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectAutomationApi.prototype.updateAutomationCategoryUsingPUTWithHttpInfo = function (param, options) {
        return this.api.updateAutomationCategoryUsingPUTWithHttpInfo(param.updateAutomationCategoryRequest, options).toPromise();
    };
    ObjectAutomationApi.prototype.updateAutomationCategoryUsingPUT = function (param, options) {
        return this.api.updateAutomationCategoryUsingPUT(param.updateAutomationCategoryRequest, options).toPromise();
    };
    return ObjectAutomationApi;
}());
exports.ObjectAutomationApi = ObjectAutomationApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectAutomationCategoryApi = (function () {
    function ObjectAutomationCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAutomationCategoryApi.prototype.createCategoryUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createCategoryUsingPOSTWithHttpInfo(param.createAutomationCategoryRequest, options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.createCategoryUsingPOST = function (param, options) {
        return this.api.createCategoryUsingPOST(param.createAutomationCategoryRequest, options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.deleteCategoriesUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteCategoriesUsingDELETEWithHttpInfo(param.ids, options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.deleteCategoriesUsingDELETE = function (param, options) {
        return this.api.deleteCategoriesUsingDELETE(param.ids, options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.listCategoriesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCategoriesUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.listCategoriesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCategoriesUsingGET(options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.saveCategoryUsingPUTWithHttpInfo = function (param, options) {
        return this.api.saveCategoryUsingPUTWithHttpInfo(param.saveAutomationCategoryRequest, options).toPromise();
    };
    ObjectAutomationCategoryApi.prototype.saveCategoryUsingPUT = function (param, options) {
        return this.api.saveCategoryUsingPUT(param.saveAutomationCategoryRequest, options).toPromise();
    };
    return ObjectAutomationCategoryApi;
}());
exports.ObjectAutomationCategoryApi = ObjectAutomationCategoryApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectBusinessProfileApi = (function () {
    function ObjectBusinessProfileApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }
    ObjectBusinessProfileApi.prototype.getBusinessProfileUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getBusinessProfileUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectBusinessProfileApi.prototype.getBusinessProfileUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getBusinessProfileUsingGET(options).toPromise();
    };
    ObjectBusinessProfileApi.prototype.patchBusinessProfileUsingPATCHWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.patchBusinessProfileUsingPATCHWithHttpInfo(param.updateMask, param.businessProfile, options).toPromise();
    };
    ObjectBusinessProfileApi.prototype.patchBusinessProfileUsingPATCH = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.patchBusinessProfileUsingPATCH(param.updateMask, param.businessProfile, options).toPromise();
    };
    return ObjectBusinessProfileApi;
}());
exports.ObjectBusinessProfileApi = ObjectBusinessProfileApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectCampaignApi = (function () {
    function ObjectCampaignApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest, options).toPromise();
    };
    ObjectCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1 = function (param, options) {
        return this.api.addContactsToCampaignSequenceUsingPOST1(param.campaignId, param.sequenceId, param.addContactsToSequenceRequest, options).toPromise();
    };
    ObjectCampaignApi.prototype.getCampaignUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getCampaignUsingGET1WithHttpInfo(param.campaignId, options).toPromise();
    };
    ObjectCampaignApi.prototype.getCampaignUsingGET1 = function (param, options) {
        return this.api.getCampaignUsingGET1(param.campaignId, options).toPromise();
    };
    ObjectCampaignApi.prototype.listCampaignsUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCampaignsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectCampaignApi.prototype.listCampaignsUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCampaignsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, param.stats, options).toPromise();
    };
    ObjectCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest, options).toPromise();
    };
    ObjectCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOST = function (param, options) {
        return this.api.removeContactsFromCampaignSequenceUsingPOST(param.campaignId, param.sequenceId, param.removeContactsFromSequenceRequest, options).toPromise();
    };
    return ObjectCampaignApi;
}());
exports.ObjectCampaignApi = ObjectCampaignApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectCategoryDiscountApi = (function () {
    function ObjectCategoryDiscountApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableCategoryDiscountApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCategoryDiscountApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteDiscountUsingDELETEWithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectCategoryDiscountApi.prototype.deleteDiscountUsingDELETE = function (param, options) {
        return this.api.deleteDiscountUsingDELETE(param.discountId, options).toPromise();
    };
    ObjectCategoryDiscountApi.prototype.getDiscountUsingGETWithHttpInfo = function (param, options) {
        return this.api.getDiscountUsingGETWithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectCategoryDiscountApi.prototype.getDiscountUsingGET = function (param, options) {
        return this.api.getDiscountUsingGET(param.discountId, options).toPromise();
    };
    return ObjectCategoryDiscountApi;
}());
exports.ObjectCategoryDiscountApi = ObjectCategoryDiscountApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectCompanyApi = (function () {
    function ObjectCompanyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCompanyApi.prototype.createCompanyUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createCompanyUsingPOST1WithHttpInfo(param.company, options).toPromise();
    };
    ObjectCompanyApi.prototype.createCompanyUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createCompanyUsingPOST1(param.company, options).toPromise();
    };
    ObjectCompanyApi.prototype.deleteCompanyUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteCompanyUsingDELETEWithHttpInfo(param.companyId, options).toPromise();
    };
    ObjectCompanyApi.prototype.deleteCompanyUsingDELETE = function (param, options) {
        return this.api.deleteCompanyUsingDELETE(param.companyId, options).toPromise();
    };
    ObjectCompanyApi.prototype.getCompanyUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getCompanyUsingGET1WithHttpInfo(param.companyId, param.fields, options).toPromise();
    };
    ObjectCompanyApi.prototype.getCompanyUsingGET1 = function (param, options) {
        return this.api.getCompanyUsingGET1(param.companyId, param.fields, options).toPromise();
    };
    ObjectCompanyApi.prototype.listCompaniesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCompaniesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectCompanyApi.prototype.listCompaniesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCompaniesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectCompanyApi.prototype.patchCompanyUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchCompanyUsingPATCHWithHttpInfo(param.companyId, param.updateMask, param.company, options).toPromise();
    };
    ObjectCompanyApi.prototype.patchCompanyUsingPATCH = function (param, options) {
        return this.api.patchCompanyUsingPATCH(param.companyId, param.updateMask, param.company, options).toPromise();
    };
    return ObjectCompanyApi;
}());
exports.ObjectCompanyApi = ObjectCompanyApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectContactApi = (function () {
    function ObjectContactApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableContactApi(configuration, requestFactory, responseProcessor);
    }
    ObjectContactApi.prototype.createContactLinkTypeUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createContactLinkTypeUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectContactApi.prototype.createContactLinkTypeUsingPOST = function (param, options) {
        return this.api.createContactLinkTypeUsingPOST(param.request, options).toPromise();
    };
    ObjectContactApi.prototype.createContactUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createContactUsingPOST1WithHttpInfo(param.contact, options).toPromise();
    };
    ObjectContactApi.prototype.createContactUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createContactUsingPOST1(param.contact, options).toPromise();
    };
    ObjectContactApi.prototype.deleteContactUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteContactUsingDELETE1WithHttpInfo(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.deleteContactUsingDELETE1 = function (param, options) {
        return this.api.deleteContactUsingDELETE1(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.getContactUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getContactUsingGET1WithHttpInfo(param.contactId, param.fields, options).toPromise();
    };
    ObjectContactApi.prototype.getContactUsingGET1 = function (param, options) {
        return this.api.getContactUsingGET1(param.contactId, param.fields, options).toPromise();
    };
    ObjectContactApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (param, options) {
        return this.api.getContactsBySearchTermUsingGETWithHttpInfo(param.searchParam, options).toPromise();
    };
    ObjectContactApi.prototype.getContactsBySearchTermUsingGET = function (param, options) {
        return this.api.getContactsBySearchTermUsingGET(param.searchParam, options).toPromise();
    };
    ObjectContactApi.prototype.linkContactsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.linkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest, options).toPromise();
    };
    ObjectContactApi.prototype.linkContactsUsingPOST = function (param, options) {
        return this.api.linkContactsUsingPOST(param.linkContactsRequest, options).toPromise();
    };
    ObjectContactApi.prototype.listContactLinkTypesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listContactLinkTypesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectContactApi.prototype.listContactLinkTypesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listContactLinkTypesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectContactApi.prototype.listContactLinksUsingGETWithHttpInfo = function (param, options) {
        return this.api.listContactLinksUsingGETWithHttpInfo(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.listContactLinksUsingGET = function (param, options) {
        return this.api.listContactLinksUsingGET(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.listContactsUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listContactsUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectContactApi.prototype.listContactsUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listContactsUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectContactApi.prototype.listPaymentMethodsUsingGETWithHttpInfo = function (param, options) {
        return this.api.listPaymentMethodsUsingGETWithHttpInfo(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.listPaymentMethodsUsingGET = function (param, options) {
        return this.api.listPaymentMethodsUsingGET(param.contactId, options).toPromise();
    };
    ObjectContactApi.prototype.patchContactUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchContactUsingPATCHWithHttpInfo(param.contactId, param.updateMask, param.contact, options).toPromise();
    };
    ObjectContactApi.prototype.patchContactUsingPATCH = function (param, options) {
        return this.api.patchContactUsingPATCH(param.contactId, param.updateMask, param.contact, options).toPromise();
    };
    ObjectContactApi.prototype.retrieveContactModelUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveContactModelUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectContactApi.prototype.retrieveContactModelUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveContactModelUsingGET1(options).toPromise();
    };
    ObjectContactApi.prototype.unlinkContactsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.unlinkContactsUsingPOSTWithHttpInfo(param.linkContactsRequest, options).toPromise();
    };
    ObjectContactApi.prototype.unlinkContactsUsingPOST = function (param, options) {
        return this.api.unlinkContactsUsingPOST(param.linkContactsRequest, options).toPromise();
    };
    return ObjectContactApi;
}());
exports.ObjectContactApi = ObjectContactApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectEmailApi = (function () {
    function ObjectEmailApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEmailApi.prototype.createEmailUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createEmailUsingPOST1WithHttpInfo(param.emailWithContent, options).toPromise();
    };
    ObjectEmailApi.prototype.createEmailUsingPOST1 = function (param, options) {
        return this.api.createEmailUsingPOST1(param.emailWithContent, options).toPromise();
    };
    ObjectEmailApi.prototype.createEmailsUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createEmailsUsingPOST1WithHttpInfo(param.createEmailsSentRequest, options).toPromise();
    };
    ObjectEmailApi.prototype.createEmailsUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createEmailsUsingPOST1(param.createEmailsSentRequest, options).toPromise();
    };
    ObjectEmailApi.prototype.deleteEmailUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteEmailUsingDELETE1WithHttpInfo(param.id, options).toPromise();
    };
    ObjectEmailApi.prototype.deleteEmailUsingDELETE1 = function (param, options) {
        return this.api.deleteEmailUsingDELETE1(param.id, options).toPromise();
    };
    ObjectEmailApi.prototype.deleteEmailsUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.deleteEmailsUsingPOST1WithHttpInfo(param.deleteEmailsRequest, options).toPromise();
    };
    ObjectEmailApi.prototype.deleteEmailsUsingPOST1 = function (param, options) {
        return this.api.deleteEmailsUsingPOST1(param.deleteEmailsRequest, options).toPromise();
    };
    ObjectEmailApi.prototype.getEmailUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getEmailUsingGET1WithHttpInfo(param.id, options).toPromise();
    };
    ObjectEmailApi.prototype.getEmailUsingGET1 = function (param, options) {
        return this.api.getEmailUsingGET1(param.id, options).toPromise();
    };
    ObjectEmailApi.prototype.sendEmailUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.sendEmailUsingPOST1WithHttpInfo(param.emailSendRequest, options).toPromise();
    };
    ObjectEmailApi.prototype.sendEmailUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.sendEmailUsingPOST1(param.emailSendRequest, options).toPromise();
    };
    return ObjectEmailApi;
}());
exports.ObjectEmailApi = ObjectEmailApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectEmailAddressApi = (function () {
    function ObjectEmailAddressApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }
    ObjectEmailAddressApi.prototype.getEmailAddressStatusUsingGETWithHttpInfo = function (param, options) {
        return this.api.getEmailAddressStatusUsingGETWithHttpInfo(param.email, options).toPromise();
    };
    ObjectEmailAddressApi.prototype.getEmailAddressStatusUsingGET = function (param, options) {
        return this.api.getEmailAddressStatusUsingGET(param.email, options).toPromise();
    };
    ObjectEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUTWithHttpInfo = function (param, options) {
        return this.api.updateEmailAddressOptStatusUsingPUTWithHttpInfo(param.email, param.updateEmailAddress, options).toPromise();
    };
    ObjectEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUT = function (param, options) {
        return this.api.updateEmailAddressOptStatusUsingPUT(param.email, param.updateEmailAddress, options).toPromise();
    };
    return ObjectEmailAddressApi;
}());
exports.ObjectEmailAddressApi = ObjectEmailAddressApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectFreeTrialDiscountApi = (function () {
    function ObjectFreeTrialDiscountApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableFreeTrialDiscountApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteDiscountUsingDELETE1WithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1 = function (param, options) {
        return this.api.deleteDiscountUsingDELETE1(param.discountId, options).toPromise();
    };
    return ObjectFreeTrialDiscountApi;
}());
exports.ObjectFreeTrialDiscountApi = ObjectFreeTrialDiscountApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectFunnelIntegrationApi = (function () {
    function ObjectFunnelIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableFunnelIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    ObjectFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(param.createFunnelIntegrationRequest, options).toPromise();
    };
    ObjectFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOST = function (param, options) {
        return this.api.createFunnelIntegrationUsingPOST(param.createFunnelIntegrationRequest, options).toPromise();
    };
    ObjectFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(param.createFunnelIntegrationTriggerEvents, options).toPromise();
    };
    ObjectFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOST = function (param, options) {
        return this.api.createIntegrationTriggerEventUsingPOST(param.createFunnelIntegrationTriggerEvents, options).toPromise();
    };
    ObjectFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(param.deleteFunnelIntegrationRequest, options).toPromise();
    };
    ObjectFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOST = function (param, options) {
        return this.api.deleteFunnelIntegrationUsingPOST(param.deleteFunnelIntegrationRequest, options).toPromise();
    };
    return ObjectFunnelIntegrationApi;
}());
exports.ObjectFunnelIntegrationApi = ObjectFunnelIntegrationApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectLandingPagesApi = (function () {
    function ObjectLandingPagesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLandingPagesApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLandingPagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectLandingPagesApi.prototype.listLandingPagesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLandingPagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectLandingPagesApi;
}());
exports.ObjectLandingPagesApi = ObjectLandingPagesApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectLeadSourcesApi = (function () {
    function ObjectLeadSourcesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLeadSourcesApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createLeadSourceUsingPOSTWithHttpInfo(param.leadsource, options).toPromise();
    };
    ObjectLeadSourcesApi.prototype.createLeadSourceUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createLeadSourceUsingPOST(param.leadsource, options).toPromise();
    };
    ObjectLeadSourcesApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLeadSourcesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectLeadSourcesApi.prototype.listLeadSourcesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLeadSourcesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectLeadSourcesApi;
}());
exports.ObjectLeadSourcesApi = ObjectLeadSourcesApi;
var ObservableAPI_15 = require("./ObservableAPI");
var ObjectLocaleApi = (function () {
    function ObjectLocaleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLocaleApi.prototype.listCountriesUsingGET2WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCountriesUsingGET2WithHttpInfo(options).toPromise();
    };
    ObjectLocaleApi.prototype.listCountriesUsingGET2 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCountriesUsingGET2(options).toPromise();
    };
    ObjectLocaleApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (param, options) {
        return this.api.listProvincesForCountryUsingGETWithHttpInfo(param.countryCode, options).toPromise();
    };
    ObjectLocaleApi.prototype.listProvincesForCountryUsingGET = function (param, options) {
        return this.api.listProvincesForCountryUsingGET(param.countryCode, options).toPromise();
    };
    return ObjectLocaleApi;
}());
exports.ObjectLocaleApi = ObjectLocaleApi;
var ObservableAPI_16 = require("./ObservableAPI");
var ObjectMerchantApi = (function () {
    function ObjectMerchantApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableMerchantApi(configuration, requestFactory, responseProcessor);
    }
    ObjectMerchantApi.prototype.listMerchantsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listMerchantsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectMerchantApi.prototype.listMerchantsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listMerchantsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectMerchantApi;
}());
exports.ObjectMerchantApi = ObjectMerchantApi;
var ObservableAPI_17 = require("./ObservableAPI");
var ObjectNoteApi = (function () {
    function ObjectNoteApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }
    ObjectNoteApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(param.customField, options).toPromise();
    };
    ObjectNoteApi.prototype.createNoteCustomFieldUsingPOST1 = function (param, options) {
        return this.api.createNoteCustomFieldUsingPOST1(param.customField, options).toPromise();
    };
    ObjectNoteApi.prototype.createNoteUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createNoteUsingPOST1WithHttpInfo(param.contactId, param.request, options).toPromise();
    };
    ObjectNoteApi.prototype.createNoteUsingPOST1 = function (param, options) {
        return this.api.createNoteUsingPOST1(param.contactId, param.request, options).toPromise();
    };
    ObjectNoteApi.prototype.deleteNoteUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteNoteUsingDELETE1WithHttpInfo(param.contactId, param.noteId, options).toPromise();
    };
    ObjectNoteApi.prototype.deleteNoteUsingDELETE1 = function (param, options) {
        return this.api.deleteNoteUsingDELETE1(param.contactId, param.noteId, options).toPromise();
    };
    ObjectNoteApi.prototype.getNoteUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getNoteUsingGET1WithHttpInfo(param.contactId, param.noteId, options).toPromise();
    };
    ObjectNoteApi.prototype.getNoteUsingGET1 = function (param, options) {
        return this.api.getNoteUsingGET1(param.contactId, param.noteId, options).toPromise();
    };
    ObjectNoteApi.prototype.listNotesUsingGET1WithHttpInfo = function (param, options) {
        return this.api.listNotesUsingGET1WithHttpInfo(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectNoteApi.prototype.listNotesUsingGET1 = function (param, options) {
        return this.api.listNotesUsingGET1(param.contactId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectNoteApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveNoteModelUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectNoteApi.prototype.retrieveNoteModelUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveNoteModelUsingGET1(options).toPromise();
    };
    ObjectNoteApi.prototype.updateNoteUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateNoteUsingPATCHWithHttpInfo(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask, options).toPromise();
    };
    ObjectNoteApi.prototype.updateNoteUsingPATCH = function (param, options) {
        return this.api.updateNoteUsingPATCH(param.contactId, param.noteId, param.updateNoteRequest, param.updateMask, options).toPromise();
    };
    ObjectNoteApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectNoteApi.prototype.updateNotesCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateNotesCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectNoteApi;
}());
exports.ObjectNoteApi = ObjectNoteApi;
var ObservableAPI_18 = require("./ObservableAPI");
var ObjectOpportunityApi = (function () {
    function ObjectOpportunityApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }
    ObjectOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOST = function (param, options) {
        return this.api.createOpportunityCustomFieldsUsingPOST(param.customField, options).toPromise();
    };
    ObjectOpportunityApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityStageUsingPOSTWithHttpInfo(param.opportunityStage, options).toPromise();
    };
    ObjectOpportunityApi.prototype.createOpportunityStageUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityStageUsingPOST(param.opportunityStage, options).toPromise();
    };
    ObjectOpportunityApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityUsingPOST1WithHttpInfo(param.opportunity, options).toPromise();
    };
    ObjectOpportunityApi.prototype.createOpportunityUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityUsingPOST1(param.opportunity, options).toPromise();
    };
    ObjectOpportunityApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(param.stageId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.deleteOpportunityStageUsingDELETE = function (param, options) {
        return this.api.deleteOpportunityStageUsingDELETE(param.stageId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteOpportunityUsingDELETEWithHttpInfo(param.opportunityId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.deleteOpportunityUsingDELETE = function (param, options) {
        return this.api.deleteOpportunityUsingDELETE(param.opportunityId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (param, options) {
        return this.api.getOpportunityStageUsingGETWithHttpInfo(param.stageId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.getOpportunityStageUsingGET = function (param, options) {
        return this.api.getOpportunityStageUsingGET(param.stageId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getOpportunityUsingGET1WithHttpInfo(param.opportunityId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.getOpportunityUsingGET1 = function (param, options) {
        return this.api.getOpportunityUsingGET1(param.opportunityId, options).toPromise();
    };
    ObjectOpportunityApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunitiesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOpportunityApi.prototype.listOpportunitiesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunitiesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOpportunityApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunityStagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOpportunityApi.prototype.listOpportunityStagesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunityStagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateOpportunityCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectOpportunityApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOpportunityUsingPATCHWithHttpInfo(param.opportunityId, param.request, param.updateMask, options).toPromise();
    };
    ObjectOpportunityApi.prototype.updateOpportunityUsingPATCH = function (param, options) {
        return this.api.updateOpportunityUsingPATCH(param.opportunityId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectOpportunityApi;
}());
exports.ObjectOpportunityApi = ObjectOpportunityApi;
var ObservableAPI_19 = require("./ObservableAPI");
var ObjectOrdersApi = (function () {
    function ObjectOrdersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectOrdersApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectOrdersApi.prototype.createOrderCustomFieldUsingPOST = function (param, options) {
        return this.api.createOrderCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createRestOrderItemRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (param, options) {
        return this.api.createOrderItemsOnOrderUsingPOST1(param.orderId, param.createRestOrderItemRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.createOrderUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createOrderUsingPOST1WithHttpInfo(param.createOrderRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.createOrderUsingPOST1 = function (param, options) {
        return this.api.createOrderUsingPOST1(param.createOrderRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.createPaymentOnOrderUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createPaymentOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createPaymentRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.createPaymentOnOrderUsingPOST1 = function (param, options) {
        return this.api.createPaymentOnOrderUsingPOST1(param.orderId, param.createPaymentRequest, options).toPromise();
    };
    ObjectOrdersApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteOrderUsingDELETE1WithHttpInfo(param.orderId, options).toPromise();
    };
    ObjectOrdersApi.prototype.deleteOrderUsingDELETE1 = function (param, options) {
        return this.api.deleteOrderUsingDELETE1(param.orderId, options).toPromise();
    };
    ObjectOrdersApi.prototype.getOrderUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getOrderUsingGET1WithHttpInfo(param.orderId, options).toPromise();
    };
    ObjectOrdersApi.prototype.getOrderUsingGET1 = function (param, options) {
        return this.api.getOrderUsingGET1(param.orderId, options).toPromise();
    };
    ObjectOrdersApi.prototype.listOrdersUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOrdersUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOrdersApi.prototype.listOrdersUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOrdersUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectOrdersApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchOrderUsingPATCHWithHttpInfo(param.orderId, param.updateMask, param.order, options).toPromise();
    };
    ObjectOrdersApi.prototype.patchOrderUsingPATCH = function (param, options) {
        return this.api.patchOrderUsingPATCH(param.orderId, param.updateMask, param.order, options).toPromise();
    };
    ObjectOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveOrderCustomFieldModelUsingGET(options).toPromise();
    };
    ObjectOrdersApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectOrdersApi.prototype.updateOrderCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateOrderCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectOrdersApi;
}());
exports.ObjectOrdersApi = ObjectOrdersApi;
var ObservableAPI_20 = require("./ObservableAPI");
var ObjectPaymentMethodConfigApi = (function () {
    function ObjectPaymentMethodConfigApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectPaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOST = function (param, options) {
        return this.api.createPaymentMethodConfigUsingPOST(param.request, options).toPromise();
    };
    return ObjectPaymentMethodConfigApi;
}());
exports.ObjectPaymentMethodConfigApi = ObjectPaymentMethodConfigApi;
var ObservableAPI_21 = require("./ObservableAPI");
var ObjectPreReleaseApi = (function () {
    function ObjectPreReleaseApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservablePreReleaseApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPreReleaseApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(param.id, param.affiliateAddToProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.addAffiliateToProgramUsingPOST = function (param, options) {
        return this.api.addAffiliateToProgramUsingPOST(param.id, param.affiliateAddToProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addCommissionProgramUsingPOSTWithHttpInfo(param.insertCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.addCommissionProgramUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addCommissionProgramUsingPOST(param.insertCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.productCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.assignProductCommissionProgramUsingPOST = function (param, options) {
        return this.api.assignProductCommissionProgramUsingPOST(param.commissionProgramId, param.productCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.subscriptionCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (param, options) {
        return this.api.assignSubscriptionCommissionProgramUsingPOST(param.commissionProgramId, param.subscriptionCommissionProgram, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.cancelSubscriptionUsingPOSTWithHttpInfo(param.subscriptionId, param.cancelSubscriptionsRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.cancelSubscriptionUsingPOST = function (param, options) {
        return this.api.cancelSubscriptionUsingPOST(param.subscriptionId, param.cancelSubscriptionsRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createAffiliateCustomFieldUsingPOST = function (param, options) {
        return this.api.createAffiliateCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(param.commissionProgramId, param.createDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createDefaultCommissionProgramUsingPOST = function (param, options) {
        return this.api.createDefaultCommissionProgramUsingPOST(param.commissionProgramId, param.createDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(param.createFunnelIntegrationRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createFunnelIntegrationUsingPOST = function (param, options) {
        return this.api.createFunnelIntegrationUsingPOST(param.createFunnelIntegrationRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(param.createFunnelIntegrationTriggerEvents, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createIntegrationTriggerEventUsingPOST = function (param, options) {
        return this.api.createIntegrationTriggerEventUsingPOST(param.createFunnelIntegrationTriggerEvents, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createLeadSourceUsingPOSTWithHttpInfo(param.leadsource, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createLeadSourceUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createLeadSourceUsingPOST(param.leadsource, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createNoteCustomFieldUsingPOST1 = function (param, options) {
        return this.api.createNoteCustomFieldUsingPOST1(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOST = function (param, options) {
        return this.api.createOpportunityCustomFieldsUsingPOST(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityStageUsingPOSTWithHttpInfo(param.opportunityStage, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityStageUsingPOST = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityStageUsingPOST(param.opportunityStage, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityUsingPOST1WithHttpInfo(param.opportunity, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOpportunityUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createOpportunityUsingPOST1(param.opportunity, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderCustomFieldUsingPOST = function (param, options) {
        return this.api.createOrderCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(param.orderId, param.createRestOrderItemRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (param, options) {
        return this.api.createOrderItemsOnOrderUsingPOST1(param.orderId, param.createRestOrderItemRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createOrderUsingPOST1WithHttpInfo(param.createOrderRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createOrderUsingPOST1 = function (param, options) {
        return this.api.createOrderUsingPOST1(param.createOrderRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createRedirectLinkUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createRedirectLinkUsingPOST = function (param, options) {
        return this.api.createRedirectLinkUsingPOST(param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createReferralUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createReferralUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createReferralUsingPOST = function (param, options) {
        return this.api.createReferralUsingPOST(param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOST = function (param, options) {
        return this.api.createSubscriptionCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createTaskCustomFieldUsingPOST1 = function (param, options) {
        return this.api.createTaskCustomFieldUsingPOST1(param.customField, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createTaskUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createTaskUsingPOST1WithHttpInfo(param.task, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createTaskUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createTaskUsingPOST1(param.task, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createUserUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createUserUsingPOST1WithHttpInfo(param.user, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.createUserUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createUserUsingPOST1(param.user, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(param.commissionProgramId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (param, options) {
        return this.api.deleteAffiliateCommissionProgramUsingDELETE(param.commissionProgramId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteAffiliateUsingDELETEWithHttpInfo(param.id, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteAffiliateUsingDELETE = function (param, options) {
        return this.api.deleteAffiliateUsingDELETE(param.id, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteDiscountUsingDELETEWithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteDiscountUsingDELETE = function (param, options) {
        return this.api.deleteDiscountUsingDELETE(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteDiscountUsingDELETE1WithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteDiscountUsingDELETE1 = function (param, options) {
        return this.api.deleteDiscountUsingDELETE1(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(param.deleteFunnelIntegrationRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteFunnelIntegrationUsingPOST = function (param, options) {
        return this.api.deleteFunnelIntegrationUsingPOST(param.deleteFunnelIntegrationRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(param.stageId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOpportunityStageUsingDELETE = function (param, options) {
        return this.api.deleteOpportunityStageUsingDELETE(param.stageId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteOpportunityUsingDELETEWithHttpInfo(param.opportunityId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOpportunityUsingDELETE = function (param, options) {
        return this.api.deleteOpportunityUsingDELETE(param.opportunityId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteOrderUsingDELETE1WithHttpInfo(param.orderId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteOrderUsingDELETE1 = function (param, options) {
        return this.api.deleteOrderUsingDELETE1(param.orderId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(param.redirectId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteRedirectLinkUsingDELETE = function (param, options) {
        return this.api.deleteRedirectLinkUsingDELETE(param.redirectId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(param.customFieldId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETE = function (param, options) {
        return this.api.deleteTaskCustomFieldUsingDELETE(param.customFieldId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteTaskUsingDELETE1WithHttpInfo(param.taskId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.deleteTaskUsingDELETE1 = function (param, options) {
        return this.api.deleteTaskUsingDELETE1(param.taskId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (param, options) {
        return this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(param.affiliateId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCommissionTotalUsingGET = function (param, options) {
        return this.api.getAffiliateCommissionTotalUsingGET(param.affiliateId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (param, options) {
        return this.api.getAffiliateCommissionsUsingGETWithHttpInfo(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCommissionsUsingGET = function (param, options) {
        return this.api.getAffiliateCommissionsUsingGET(param.affiliateId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getAffiliateCustomFieldsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAffiliateCustomFieldsUsingGET(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (param, options) {
        return this.api.getCommissionProgramUsingGETWithHttpInfo(param.commissionProgramId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getCommissionProgramUsingGET = function (param, options) {
        return this.api.getCommissionProgramUsingGET(param.commissionProgramId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (param, options) {
        return this.api.getContactsBySearchTermUsingGETWithHttpInfo(param.searchParam, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getContactsBySearchTermUsingGET = function (param, options) {
        return this.api.getContactsBySearchTermUsingGET(param.searchParam, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getDiscountUsingGETWithHttpInfo = function (param, options) {
        return this.api.getDiscountUsingGETWithHttpInfo(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getDiscountUsingGET = function (param, options) {
        return this.api.getDiscountUsingGET(param.discountId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (param, options) {
        return this.api.getOpportunityStageUsingGETWithHttpInfo(param.stageId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOpportunityStageUsingGET = function (param, options) {
        return this.api.getOpportunityStageUsingGET(param.stageId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getOpportunityUsingGET1WithHttpInfo(param.opportunityId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOpportunityUsingGET1 = function (param, options) {
        return this.api.getOpportunityUsingGET1(param.opportunityId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOrderUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getOrderUsingGET1WithHttpInfo(param.orderId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getOrderUsingGET1 = function (param, options) {
        return this.api.getOrderUsingGET1(param.orderId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (param, options) {
        return this.api.getRedirectLinkUsingGETWithHttpInfo(param.redirectId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getRedirectLinkUsingGET = function (param, options) {
        return this.api.getRedirectLinkUsingGET(param.redirectId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getTaskUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getTaskUsingGET1WithHttpInfo(param.taskId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getTaskUsingGET1 = function (param, options) {
        return this.api.getTaskUsingGET1(param.taskId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserByIdUsingGETWithHttpInfo = function (param, options) {
        return this.api.getUserByIdUsingGETWithHttpInfo(param.userId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserByIdUsingGET = function (param, options) {
        return this.api.getUserByIdUsingGET(param.userId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getUserInfoUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserInfoUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getUserInfoUsingGET1(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getUserSignatureUsingGET1WithHttpInfo(param.userId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.getUserSignatureUsingGET1 = function (param, options) {
        return this.api.getUserSignatureUsingGET1(param.userId, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateCommissionProgramsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateLinksUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listAffiliateLinksUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAffiliateLinksUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listCountriesUsingGET2WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCountriesUsingGET2WithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listCountriesUsingGET2 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCountriesUsingGET2(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLandingPagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listLandingPagesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLandingPagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLeadSourcesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listLeadSourcesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listLeadSourcesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listMerchantsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listMerchantsUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listMerchantsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listMerchantsUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunitiesUsingGET1WithHttpInfo(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOpportunitiesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunitiesUsingGET1(param.fields, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunityStagesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOpportunityStagesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOpportunityStagesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOrdersUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOrdersUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listOrdersUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listOrdersUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listProductsUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listProductsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listProductsUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listProductsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (param, options) {
        return this.api.listProvincesForCountryUsingGETWithHttpInfo(param.countryCode, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listProvincesForCountryUsingGET = function (param, options) {
        return this.api.listProvincesForCountryUsingGET(param.countryCode, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listShippingMethodsUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listShippingMethodsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listShippingMethodsUsingGET(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSubscriptionPlansUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listSubscriptionPlansUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSubscriptionPlansUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listSummariesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSummariesUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listSummariesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSummariesUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listTasksUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTasksUsingGET1WithHttpInfo(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listTasksUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTasksUsingGET1(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listUsersUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listUsersUsingGET1WithHttpInfo(param.filter, param.orderBy, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.listUsersUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listUsersUsingGET1(param.filter, param.orderBy, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchDefaultCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchDefaultCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchOrderUsingPATCHWithHttpInfo(param.orderId, param.updateMask, param.order, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchOrderUsingPATCH = function (param, options) {
        return this.api.patchOrderUsingPATCH(param.orderId, param.updateMask, param.order, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchProductCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchProductCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchProductCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (param, options) {
        return this.api.patchSubscriptionCommissionProgramUsingPATCH(param.commissionProgramId, param.updateMask, param.patchSubscriptionCommissionProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchTaskUsingPATCHWithHttpInfo(param.taskId, param.updateMask, param.task, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchTaskUsingPATCH = function (param, options) {
        return this.api.patchTaskUsingPATCH(param.taskId, param.updateMask, param.task, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchUserUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchUserUsingPATCHWithHttpInfo(param.userId, param.updateMask, param.user, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.patchUserUsingPATCH = function (param, options) {
        return this.api.patchUserUsingPATCH(param.userId, param.updateMask, param.user, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(param.id, param.removeFromProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.removeAffiliateFromProgramUsingPOST = function (param, options) {
        return this.api.removeAffiliateFromProgramUsingPOST(param.id, param.removeFromProgramRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(param.commissionId, param.deleteSubscriptionPlanCommissionRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (param, options) {
        return this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(param.commissionId, param.deleteSubscriptionPlanCommissionRequest, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveNoteModelUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveNoteModelUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveNoteModelUsingGET1(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveOrderCustomFieldModelUsingGET(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveSubscriptionCustomFieldModelUsingGET(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveTaskModelUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.retrieveTaskModelUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveTaskModelUsingGET1(options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateAffiliateCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateNotesCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateNotesCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateOpportunityCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOpportunityUsingPATCHWithHttpInfo(param.opportunityId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOpportunityUsingPATCH = function (param, options) {
        return this.api.updateOpportunityUsingPATCH(param.opportunityId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateOrderCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateOrderCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateRedirectLinkUsingPATCHWithHttpInfo(param.redirectId, param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateRedirectLinkUsingPATCH = function (param, options) {
        return this.api.updateRedirectLinkUsingPATCH(param.redirectId, param.request, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateSubscriptionCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectPreReleaseApi.prototype.updateTaskCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateTaskCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectPreReleaseApi;
}());
exports.ObjectPreReleaseApi = ObjectPreReleaseApi;
var ObservableAPI_22 = require("./ObservableAPI");
var ObjectProductApi = (function () {
    function ObjectProductApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableProductApi(configuration, requestFactory, responseProcessor);
    }
    ObjectProductApi.prototype.listProductsUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listProductsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectProductApi.prototype.listProductsUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listProductsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectProductApi;
}());
exports.ObjectProductApi = ObjectProductApi;
var ObservableAPI_23 = require("./ObservableAPI");
var ObjectReferralApi = (function () {
    function ObjectReferralApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }
    ObjectReferralApi.prototype.createReferralUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createReferralUsingPOSTWithHttpInfo(param.request, options).toPromise();
    };
    ObjectReferralApi.prototype.createReferralUsingPOST = function (param, options) {
        return this.api.createReferralUsingPOST(param.request, options).toPromise();
    };
    return ObjectReferralApi;
}());
exports.ObjectReferralApi = ObjectReferralApi;
var ObservableAPI_24 = require("./ObservableAPI");
var ObjectReportingApi = (function () {
    function ObjectReportingApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }
    ObjectReportingApi.prototype.runReportUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.runReportUsingPOSTWithHttpInfo(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectReportingApi.prototype.runReportUsingPOST = function (param, options) {
        return this.api.runReportUsingPOST(param.reportId, param.fields, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectReportingApi;
}());
exports.ObjectReportingApi = ObjectReportingApi;
var ObservableAPI_25 = require("./ObservableAPI");
var ObjectSalesApi = (function () {
    function ObjectSalesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(param.id, options).toPromise();
    };
    ObjectSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOST = function (param, options) {
        return this.api.setMerchantGatewayAsDefaultUsingPOST(param.id, options).toPromise();
    };
    return ObjectSalesApi;
}());
exports.ObjectSalesApi = ObjectSalesApi;
var ObservableAPI_26 = require("./ObservableAPI");
var ObjectSettingsApi = (function () {
    function ObjectSettingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSettingsApi.prototype.getApplicationConfigurationsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getApplicationConfigurationsUsingGETWithHttpInfo(param.fields, options).toPromise();
    };
    ObjectSettingsApi.prototype.getApplicationConfigurationsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getApplicationConfigurationsUsingGET(param.fields, options).toPromise();
    };
    ObjectSettingsApi.prototype.getContactOptionTypesUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getContactOptionTypesUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectSettingsApi.prototype.getContactOptionTypesUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getContactOptionTypesUsingGET1(options).toPromise();
    };
    ObjectSettingsApi.prototype.isApplicationEnabledUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.isApplicationEnabledUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectSettingsApi.prototype.isApplicationEnabledUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.isApplicationEnabledUsingGET(options).toPromise();
    };
    return ObjectSettingsApi;
}());
exports.ObjectSettingsApi = ObjectSettingsApi;
var ObservableAPI_27 = require("./ObservableAPI");
var ObjectShippingApi = (function () {
    function ObjectShippingApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }
    ObjectShippingApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listShippingMethodsUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectShippingApi.prototype.listShippingMethodsUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listShippingMethodsUsingGET(options).toPromise();
    };
    return ObjectShippingApi;
}());
exports.ObjectShippingApi = ObjectShippingApi;
var ObservableAPI_28 = require("./ObservableAPI");
var ObjectSubscriptionPlansApi = (function () {
    function ObjectSubscriptionPlansApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSubscriptionPlansUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listSubscriptionPlansUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    return ObjectSubscriptionPlansApi;
}());
exports.ObjectSubscriptionPlansApi = ObjectSubscriptionPlansApi;
var ObservableAPI_29 = require("./ObservableAPI");
var ObjectSubscriptionsApi = (function () {
    function ObjectSubscriptionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectSubscriptionsApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.cancelSubscriptionUsingPOSTWithHttpInfo(param.subscriptionId, param.cancelSubscriptionsRequest, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.cancelSubscriptionUsingPOST = function (param, options) {
        return this.api.cancelSubscriptionUsingPOST(param.subscriptionId, param.cancelSubscriptionsRequest, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(param.customField, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOST = function (param, options) {
        return this.api.createSubscriptionCustomFieldUsingPOST(param.customField, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.createSubscriptionV2UsingPOSTWithHttpInfo = function (param, options) {
        return this.api.createSubscriptionV2UsingPOSTWithHttpInfo(param.createSubscriptionV2, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.createSubscriptionV2UsingPOST = function (param, options) {
        return this.api.createSubscriptionV2UsingPOST(param.createSubscriptionV2, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveSubscriptionCustomFieldModelUsingGET(options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateSubscriptionCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectSubscriptionsApi;
}());
exports.ObjectSubscriptionsApi = ObjectSubscriptionsApi;
var ObservableAPI_30 = require("./ObservableAPI");
var ObjectTagsApi = (function () {
    function ObjectTagsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectTagsApi.prototype.applyTagsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.applyTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest, options).toPromise();
    };
    ObjectTagsApi.prototype.applyTagsUsingPOST = function (param, options) {
        return this.api.applyTagsUsingPOST(param.tagId, param.applyRemoveTagRequest, options).toPromise();
    };
    ObjectTagsApi.prototype.createTagCategoryUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createTagCategoryUsingPOST1WithHttpInfo(param.request, options).toPromise();
    };
    ObjectTagsApi.prototype.createTagCategoryUsingPOST1 = function (param, options) {
        return this.api.createTagCategoryUsingPOST1(param.request, options).toPromise();
    };
    ObjectTagsApi.prototype.createTagUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createTagUsingPOST1WithHttpInfo(param.tag, options).toPromise();
    };
    ObjectTagsApi.prototype.createTagUsingPOST1 = function (param, options) {
        return this.api.createTagUsingPOST1(param.tag, options).toPromise();
    };
    ObjectTagsApi.prototype.deleteTagCategoryUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteTagCategoryUsingDELETEWithHttpInfo(param.tagCategoryId, options).toPromise();
    };
    ObjectTagsApi.prototype.deleteTagCategoryUsingDELETE = function (param, options) {
        return this.api.deleteTagCategoryUsingDELETE(param.tagCategoryId, options).toPromise();
    };
    ObjectTagsApi.prototype.deleteTagUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteTagUsingDELETEWithHttpInfo(param.tagId, options).toPromise();
    };
    ObjectTagsApi.prototype.deleteTagUsingDELETE = function (param, options) {
        return this.api.deleteTagUsingDELETE(param.tagId, options).toPromise();
    };
    ObjectTagsApi.prototype.getCategoryUsingGETWithHttpInfo = function (param, options) {
        return this.api.getCategoryUsingGETWithHttpInfo(param.tagCategoryId, options).toPromise();
    };
    ObjectTagsApi.prototype.getCategoryUsingGET = function (param, options) {
        return this.api.getCategoryUsingGET(param.tagCategoryId, options).toPromise();
    };
    ObjectTagsApi.prototype.getTagUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getTagUsingGET1WithHttpInfo(param.tagId, options).toPromise();
    };
    ObjectTagsApi.prototype.getTagUsingGET1 = function (param, options) {
        return this.api.getTagUsingGET1(param.tagId, options).toPromise();
    };
    ObjectTagsApi.prototype.listCompaniesForTagIdUsingGET1WithHttpInfo = function (param, options) {
        return this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listCompaniesForTagIdUsingGET1 = function (param, options) {
        return this.api.listCompaniesForTagIdUsingGET1(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listContactsWithTagIdUsingGETWithHttpInfo = function (param, options) {
        return this.api.listContactsWithTagIdUsingGETWithHttpInfo(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listContactsWithTagIdUsingGET = function (param, options) {
        return this.api.listContactsWithTagIdUsingGET(param.tagId, param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listTagCategoriesUsingGETWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTagCategoriesUsingGETWithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listTagCategoriesUsingGET = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTagCategoriesUsingGET(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listTagsUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTagsUsingGET1WithHttpInfo(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.listTagsUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTagsUsingGET1(param.filter, param.orderBy, param.pageSize, param.pageToken, options).toPromise();
    };
    ObjectTagsApi.prototype.patchTagCategoryUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchTagCategoryUsingPATCHWithHttpInfo(param.tagCategoryId, param.updateMask, param.tagCategory, options).toPromise();
    };
    ObjectTagsApi.prototype.patchTagCategoryUsingPATCH = function (param, options) {
        return this.api.patchTagCategoryUsingPATCH(param.tagCategoryId, param.updateMask, param.tagCategory, options).toPromise();
    };
    ObjectTagsApi.prototype.patchTagUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchTagUsingPATCHWithHttpInfo(param.tagId, param.updateMask, param.tag, options).toPromise();
    };
    ObjectTagsApi.prototype.patchTagUsingPATCH = function (param, options) {
        return this.api.patchTagUsingPATCH(param.tagId, param.updateMask, param.tag, options).toPromise();
    };
    ObjectTagsApi.prototype.removeTagsUsingPOSTWithHttpInfo = function (param, options) {
        return this.api.removeTagsUsingPOSTWithHttpInfo(param.tagId, param.applyRemoveTagRequest, options).toPromise();
    };
    ObjectTagsApi.prototype.removeTagsUsingPOST = function (param, options) {
        return this.api.removeTagsUsingPOST(param.tagId, param.applyRemoveTagRequest, options).toPromise();
    };
    return ObjectTagsApi;
}());
exports.ObjectTagsApi = ObjectTagsApi;
var ObservableAPI_31 = require("./ObservableAPI");
var ObjectTaskApi = (function () {
    function ObjectTaskApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }
    ObjectTaskApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (param, options) {
        return this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(param.customField, options).toPromise();
    };
    ObjectTaskApi.prototype.createTaskCustomFieldUsingPOST1 = function (param, options) {
        return this.api.createTaskCustomFieldUsingPOST1(param.customField, options).toPromise();
    };
    ObjectTaskApi.prototype.createTaskUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createTaskUsingPOST1WithHttpInfo(param.task, options).toPromise();
    };
    ObjectTaskApi.prototype.createTaskUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createTaskUsingPOST1(param.task, options).toPromise();
    };
    ObjectTaskApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (param, options) {
        return this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(param.customFieldId, options).toPromise();
    };
    ObjectTaskApi.prototype.deleteTaskCustomFieldUsingDELETE = function (param, options) {
        return this.api.deleteTaskCustomFieldUsingDELETE(param.customFieldId, options).toPromise();
    };
    ObjectTaskApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (param, options) {
        return this.api.deleteTaskUsingDELETE1WithHttpInfo(param.taskId, options).toPromise();
    };
    ObjectTaskApi.prototype.deleteTaskUsingDELETE1 = function (param, options) {
        return this.api.deleteTaskUsingDELETE1(param.taskId, options).toPromise();
    };
    ObjectTaskApi.prototype.getTaskUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getTaskUsingGET1WithHttpInfo(param.taskId, options).toPromise();
    };
    ObjectTaskApi.prototype.getTaskUsingGET1 = function (param, options) {
        return this.api.getTaskUsingGET1(param.taskId, options).toPromise();
    };
    ObjectTaskApi.prototype.listTasksUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTasksUsingGET1WithHttpInfo(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime, options).toPromise();
    };
    ObjectTaskApi.prototype.listTasksUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listTasksUsingGET1(param.endDueTime, param.filter, param.orderBy, param.pageSize, param.pageToken, param.startDueTime, options).toPromise();
    };
    ObjectTaskApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchTaskUsingPATCHWithHttpInfo(param.taskId, param.updateMask, param.task, options).toPromise();
    };
    ObjectTaskApi.prototype.patchTaskUsingPATCH = function (param, options) {
        return this.api.patchTaskUsingPATCH(param.taskId, param.updateMask, param.task, options).toPromise();
    };
    ObjectTaskApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveTaskModelUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectTaskApi.prototype.retrieveTaskModelUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.retrieveTaskModelUsingGET1(options).toPromise();
    };
    ObjectTaskApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    ObjectTaskApi.prototype.updateTaskCustomFieldUsingPATCH = function (param, options) {
        return this.api.updateTaskCustomFieldUsingPATCH(param.customFieldId, param.request, param.updateMask, options).toPromise();
    };
    return ObjectTaskApi;
}());
exports.ObjectTaskApi = ObjectTaskApi;
var ObservableAPI_32 = require("./ObservableAPI");
var ObjectUsersApi = (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsersApi.prototype.createUserUsingPOST1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createUserUsingPOST1WithHttpInfo(param.user, options).toPromise();
    };
    ObjectUsersApi.prototype.createUserUsingPOST1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.createUserUsingPOST1(param.user, options).toPromise();
    };
    ObjectUsersApi.prototype.getUserByIdUsingGETWithHttpInfo = function (param, options) {
        return this.api.getUserByIdUsingGETWithHttpInfo(param.userId, options).toPromise();
    };
    ObjectUsersApi.prototype.getUserByIdUsingGET = function (param, options) {
        return this.api.getUserByIdUsingGET(param.userId, options).toPromise();
    };
    ObjectUsersApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getUserInfoUsingGET1WithHttpInfo(options).toPromise();
    };
    ObjectUsersApi.prototype.getUserInfoUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getUserInfoUsingGET1(options).toPromise();
    };
    ObjectUsersApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (param, options) {
        return this.api.getUserSignatureUsingGET1WithHttpInfo(param.userId, options).toPromise();
    };
    ObjectUsersApi.prototype.getUserSignatureUsingGET1 = function (param, options) {
        return this.api.getUserSignatureUsingGET1(param.userId, options).toPromise();
    };
    ObjectUsersApi.prototype.listUsersUsingGET1WithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listUsersUsingGET1WithHttpInfo(param.filter, param.orderBy, options).toPromise();
    };
    ObjectUsersApi.prototype.listUsersUsingGET1 = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listUsersUsingGET1(param.filter, param.orderBy, options).toPromise();
    };
    ObjectUsersApi.prototype.patchUserUsingPATCHWithHttpInfo = function (param, options) {
        return this.api.patchUserUsingPATCHWithHttpInfo(param.userId, param.updateMask, param.user, options).toPromise();
    };
    ObjectUsersApi.prototype.patchUserUsingPATCH = function (param, options) {
        return this.api.patchUserUsingPATCH(param.userId, param.updateMask, param.user, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map