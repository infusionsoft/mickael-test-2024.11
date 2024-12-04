"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsersApi = exports.PromiseTaskApi = exports.PromiseTagsApi = exports.PromiseSubscriptionsApi = exports.PromiseSubscriptionPlansApi = exports.PromiseShippingApi = exports.PromiseSettingsApi = exports.PromiseSalesApi = exports.PromiseReportingApi = exports.PromiseReferralApi = exports.PromiseProductApi = exports.PromisePreReleaseApi = exports.PromisePaymentMethodConfigApi = exports.PromiseOrdersApi = exports.PromiseOpportunityApi = exports.PromiseNoteApi = exports.PromiseMerchantApi = exports.PromiseLocaleApi = exports.PromiseLeadSourcesApi = exports.PromiseLandingPagesApi = exports.PromiseFunnelIntegrationApi = exports.PromiseFreeTrialDiscountApi = exports.PromiseEmailAddressApi = exports.PromiseEmailApi = exports.PromiseContactApi = exports.PromiseCompanyApi = exports.PromiseCategoryDiscountApi = exports.PromiseCampaignApi = exports.PromiseBusinessProfileApi = exports.PromiseAutomationCategoryApi = exports.PromiseAutomationApi = exports.PromiseAffiliateApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAffiliateApi = (function () {
    function PromiseAffiliateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAffiliateApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAffiliateApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (id, affiliateAddToProgramRequest, _options) {
        var result = this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.addAffiliateToProgramUsingPOST = function (id, affiliateAddToProgramRequest, _options) {
        var result = this.api.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.addAffiliateUsingPOSTWithHttpInfo = function (insertAffiliate, _options) {
        var result = this.api.addAffiliateUsingPOSTWithHttpInfo(insertAffiliate, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.addAffiliateUsingPOST = function (insertAffiliate, _options) {
        var result = this.api.addAffiliateUsingPOST(insertAffiliate, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (insertCommissionProgram, _options) {
        var result = this.api.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.addCommissionProgramUsingPOST = function (insertCommissionProgram, _options) {
        var result = this.api.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, productCommissionProgram, _options) {
        var result = this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.assignProductCommissionProgramUsingPOST = function (commissionProgramId, productCommissionProgram, _options) {
        var result = this.api.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var result = this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var result = this.api.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createAffiliateCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createAffiliateCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var result = this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createDefaultCommissionProgramUsingPOST = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var result = this.api.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createRedirectLinkUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.createRedirectLinkUsingPOST = function (request, _options) {
        var result = this.api.createRedirectLinkUsingPOST(request, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (commissionProgramId, _options) {
        var result = this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (commissionProgramId, _options) {
        var result = this.api.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (id, _options) {
        var result = this.api.deleteAffiliateUsingDELETEWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteAffiliateUsingDELETE = function (id, _options) {
        var result = this.api.deleteAffiliateUsingDELETE(id, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (redirectId, _options) {
        var result = this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.deleteRedirectLinkUsingDELETE = function (redirectId, _options) {
        var result = this.api.deleteRedirectLinkUsingDELETE(redirectId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (affiliateId, _options) {
        var result = this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCommissionTotalUsingGET = function (affiliateId, _options) {
        var result = this.api.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCommissionsUsingGET = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (_options) {
        var result = this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateCustomFieldsUsingGET = function (_options) {
        var result = this.api.getAffiliateCustomFieldsUsingGET(_options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateUsingGET1WithHttpInfo = function (id, _options) {
        var result = this.api.getAffiliateUsingGET1WithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getAffiliateUsingGET1 = function (id, _options) {
        var result = this.api.getAffiliateUsingGET1(id, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (commissionProgramId, _options) {
        var result = this.api.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getCommissionProgramUsingGET = function (commissionProgramId, _options) {
        var result = this.api.getCommissionProgramUsingGET(commissionProgramId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (redirectId, _options) {
        var result = this.api.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.getRedirectLinkUsingGET = function (redirectId, _options) {
        var result = this.api.getRedirectLinkUsingGET(redirectId, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listAffiliateCommissionProgramsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listAffiliateLinksUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listSummariesUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.listSummariesUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, patchCommissionProgramRequest, updateMask, _options) {
        var result = this.api.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchCommissionProgramUsingPATCH = function (commissionProgramId, patchCommissionProgramRequest, updateMask, _options) {
        var result = this.api.patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, updateMask, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var result = this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var result = this.api.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var result = this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchProductCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var result = this.api.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var result = this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var result = this.api.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (id, removeFromProgramRequest, _options) {
        var result = this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.removeAffiliateFromProgramUsingPOST = function (id, removeFromProgramRequest, _options) {
        var result = this.api.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateAffiliateUsingPATCHWithHttpInfo = function (id, patchAffiliate, _options) {
        var result = this.api.updateAffiliateUsingPATCHWithHttpInfo(id, patchAffiliate, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateAffiliateUsingPATCH = function (id, patchAffiliate, _options) {
        var result = this.api.updateAffiliateUsingPATCH(id, patchAffiliate, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (redirectId, request, _options) {
        var result = this.api.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options);
        return result.toPromise();
    };
    PromiseAffiliateApi.prototype.updateRedirectLinkUsingPATCH = function (redirectId, request, _options) {
        var result = this.api.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        return result.toPromise();
    };
    return PromiseAffiliateApi;
}());
exports.PromiseAffiliateApi = PromiseAffiliateApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseAutomationApi = (function () {
    function PromiseAutomationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAutomationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAutomationApi.prototype.addContactsToAutomationSequenceUsingPOSTWithHttpInfo = function (automationId, sequenceId, addToAutomationSequenceRequest, _options) {
        var result = this.api.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.addContactsToAutomationSequenceUsingPOST = function (automationId, sequenceId, addToAutomationSequenceRequest, _options) {
        var result = this.api.addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.deleteAutomationUsingDELETEWithHttpInfo = function (automationIds, _options) {
        var result = this.api.deleteAutomationUsingDELETEWithHttpInfo(automationIds, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.deleteAutomationUsingDELETE = function (automationIds, _options) {
        var result = this.api.deleteAutomationUsingDELETE(automationIds, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.getAutomationUsingGETWithHttpInfo = function (automationId, _options) {
        var result = this.api.getAutomationUsingGETWithHttpInfo(automationId, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.getAutomationUsingGET = function (automationId, _options) {
        var result = this.api.getAutomationUsingGET(automationId, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.listAllAutomationIdsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listAllAutomationIdsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.listAllAutomationIdsUsingGET = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listAllAutomationIdsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.listAutomationsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listAutomationsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.listAutomationsUsingGET = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listAutomationsUsingGET(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.updateAutomationCategoryUsingPUTWithHttpInfo = function (updateAutomationCategoryRequest, _options) {
        var result = this.api.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationApi.prototype.updateAutomationCategoryUsingPUT = function (updateAutomationCategoryRequest, _options) {
        var result = this.api.updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    return PromiseAutomationApi;
}());
exports.PromiseAutomationApi = PromiseAutomationApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseAutomationCategoryApi = (function () {
    function PromiseAutomationCategoryApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableAutomationCategoryApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAutomationCategoryApi.prototype.createCategoryUsingPOSTWithHttpInfo = function (createAutomationCategoryRequest, _options) {
        var result = this.api.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.createCategoryUsingPOST = function (createAutomationCategoryRequest, _options) {
        var result = this.api.createCategoryUsingPOST(createAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.deleteCategoriesUsingDELETEWithHttpInfo = function (ids, _options) {
        var result = this.api.deleteCategoriesUsingDELETEWithHttpInfo(ids, _options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.deleteCategoriesUsingDELETE = function (ids, _options) {
        var result = this.api.deleteCategoriesUsingDELETE(ids, _options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.listCategoriesUsingGETWithHttpInfo = function (_options) {
        var result = this.api.listCategoriesUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.listCategoriesUsingGET = function (_options) {
        var result = this.api.listCategoriesUsingGET(_options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.saveCategoryUsingPUTWithHttpInfo = function (saveAutomationCategoryRequest, _options) {
        var result = this.api.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    PromiseAutomationCategoryApi.prototype.saveCategoryUsingPUT = function (saveAutomationCategoryRequest, _options) {
        var result = this.api.saveCategoryUsingPUT(saveAutomationCategoryRequest, _options);
        return result.toPromise();
    };
    return PromiseAutomationCategoryApi;
}());
exports.PromiseAutomationCategoryApi = PromiseAutomationCategoryApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseBusinessProfileApi = (function () {
    function PromiseBusinessProfileApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableBusinessProfileApi(configuration, requestFactory, responseProcessor);
    }
    PromiseBusinessProfileApi.prototype.getBusinessProfileUsingGETWithHttpInfo = function (_options) {
        var result = this.api.getBusinessProfileUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseBusinessProfileApi.prototype.getBusinessProfileUsingGET = function (_options) {
        var result = this.api.getBusinessProfileUsingGET(_options);
        return result.toPromise();
    };
    PromiseBusinessProfileApi.prototype.patchBusinessProfileUsingPATCHWithHttpInfo = function (updateMask, businessProfile, _options) {
        var result = this.api.patchBusinessProfileUsingPATCHWithHttpInfo(updateMask, businessProfile, _options);
        return result.toPromise();
    };
    PromiseBusinessProfileApi.prototype.patchBusinessProfileUsingPATCH = function (updateMask, businessProfile, _options) {
        var result = this.api.patchBusinessProfileUsingPATCH(updateMask, businessProfile, _options);
        return result.toPromise();
    };
    return PromiseBusinessProfileApi;
}());
exports.PromiseBusinessProfileApi = PromiseBusinessProfileApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseCampaignApi = (function () {
    function PromiseCampaignApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCampaignApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1WithHttpInfo = function (campaignId, sequenceId, addContactsToSequenceRequest, _options) {
        var result = this.api.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.addContactsToCampaignSequenceUsingPOST1 = function (campaignId, sequenceId, addContactsToSequenceRequest, _options) {
        var result = this.api.addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.getCampaignUsingGET1WithHttpInfo = function (campaignId, _options) {
        var result = this.api.getCampaignUsingGET1WithHttpInfo(campaignId, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.getCampaignUsingGET1 = function (campaignId, _options) {
        var result = this.api.getCampaignUsingGET1(campaignId, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.listCampaignsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listCampaignsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.listCampaignsUsingGET1 = function (filter, orderBy, pageSize, pageToken, stats, _options) {
        var result = this.api.listCampaignsUsingGET1(filter, orderBy, pageSize, pageToken, stats, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo = function (campaignId, sequenceId, removeContactsFromSequenceRequest, _options) {
        var result = this.api.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);
        return result.toPromise();
    };
    PromiseCampaignApi.prototype.removeContactsFromCampaignSequenceUsingPOST = function (campaignId, sequenceId, removeContactsFromSequenceRequest, _options) {
        var result = this.api.removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest, _options);
        return result.toPromise();
    };
    return PromiseCampaignApi;
}());
exports.PromiseCampaignApi = PromiseCampaignApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseCategoryDiscountApi = (function () {
    function PromiseCategoryDiscountApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableCategoryDiscountApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCategoryDiscountApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromiseCategoryDiscountApi.prototype.deleteDiscountUsingDELETE = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE(discountId, _options);
        return result.toPromise();
    };
    PromiseCategoryDiscountApi.prototype.getDiscountUsingGETWithHttpInfo = function (discountId, _options) {
        var result = this.api.getDiscountUsingGETWithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromiseCategoryDiscountApi.prototype.getDiscountUsingGET = function (discountId, _options) {
        var result = this.api.getDiscountUsingGET(discountId, _options);
        return result.toPromise();
    };
    return PromiseCategoryDiscountApi;
}());
exports.PromiseCategoryDiscountApi = PromiseCategoryDiscountApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseCompanyApi = (function () {
    function PromiseCompanyApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCompanyApi.prototype.createCompanyUsingPOST1WithHttpInfo = function (company, _options) {
        var result = this.api.createCompanyUsingPOST1WithHttpInfo(company, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.createCompanyUsingPOST1 = function (company, _options) {
        var result = this.api.createCompanyUsingPOST1(company, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.deleteCompanyUsingDELETEWithHttpInfo = function (companyId, _options) {
        var result = this.api.deleteCompanyUsingDELETEWithHttpInfo(companyId, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.deleteCompanyUsingDELETE = function (companyId, _options) {
        var result = this.api.deleteCompanyUsingDELETE(companyId, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.getCompanyUsingGET1WithHttpInfo = function (companyId, fields, _options) {
        var result = this.api.getCompanyUsingGET1WithHttpInfo(companyId, fields, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.getCompanyUsingGET1 = function (companyId, fields, _options) {
        var result = this.api.getCompanyUsingGET1(companyId, fields, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.listCompaniesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listCompaniesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.listCompaniesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listCompaniesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.patchCompanyUsingPATCHWithHttpInfo = function (companyId, updateMask, company, _options) {
        var result = this.api.patchCompanyUsingPATCHWithHttpInfo(companyId, updateMask, company, _options);
        return result.toPromise();
    };
    PromiseCompanyApi.prototype.patchCompanyUsingPATCH = function (companyId, updateMask, company, _options) {
        var result = this.api.patchCompanyUsingPATCH(companyId, updateMask, company, _options);
        return result.toPromise();
    };
    return PromiseCompanyApi;
}());
exports.PromiseCompanyApi = PromiseCompanyApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseContactApi = (function () {
    function PromiseContactApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableContactApi(configuration, requestFactory, responseProcessor);
    }
    PromiseContactApi.prototype.createContactLinkTypeUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createContactLinkTypeUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.createContactLinkTypeUsingPOST = function (request, _options) {
        var result = this.api.createContactLinkTypeUsingPOST(request, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.createContactUsingPOST1WithHttpInfo = function (contact, _options) {
        var result = this.api.createContactUsingPOST1WithHttpInfo(contact, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.createContactUsingPOST1 = function (contact, _options) {
        var result = this.api.createContactUsingPOST1(contact, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.deleteContactUsingDELETE1WithHttpInfo = function (contactId, _options) {
        var result = this.api.deleteContactUsingDELETE1WithHttpInfo(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.deleteContactUsingDELETE1 = function (contactId, _options) {
        var result = this.api.deleteContactUsingDELETE1(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.getContactUsingGET1WithHttpInfo = function (contactId, fields, _options) {
        var result = this.api.getContactUsingGET1WithHttpInfo(contactId, fields, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.getContactUsingGET1 = function (contactId, fields, _options) {
        var result = this.api.getContactUsingGET1(contactId, fields, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (searchParam, _options) {
        var result = this.api.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.getContactsBySearchTermUsingGET = function (searchParam, _options) {
        var result = this.api.getContactsBySearchTermUsingGET(searchParam, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.linkContactsUsingPOSTWithHttpInfo = function (linkContactsRequest, _options) {
        var result = this.api.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.linkContactsUsingPOST = function (linkContactsRequest, _options) {
        var result = this.api.linkContactsUsingPOST(linkContactsRequest, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactLinkTypesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactLinkTypesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactLinkTypesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactLinkTypesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactLinksUsingGETWithHttpInfo = function (contactId, _options) {
        var result = this.api.listContactLinksUsingGETWithHttpInfo(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactLinksUsingGET = function (contactId, _options) {
        var result = this.api.listContactLinksUsingGET(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactsUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactsUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listContactsUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactsUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listPaymentMethodsUsingGETWithHttpInfo = function (contactId, _options) {
        var result = this.api.listPaymentMethodsUsingGETWithHttpInfo(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.listPaymentMethodsUsingGET = function (contactId, _options) {
        var result = this.api.listPaymentMethodsUsingGET(contactId, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.patchContactUsingPATCHWithHttpInfo = function (contactId, updateMask, contact, _options) {
        var result = this.api.patchContactUsingPATCHWithHttpInfo(contactId, updateMask, contact, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.patchContactUsingPATCH = function (contactId, updateMask, contact, _options) {
        var result = this.api.patchContactUsingPATCH(contactId, updateMask, contact, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.retrieveContactModelUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.retrieveContactModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.retrieveContactModelUsingGET1 = function (_options) {
        var result = this.api.retrieveContactModelUsingGET1(_options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.unlinkContactsUsingPOSTWithHttpInfo = function (linkContactsRequest, _options) {
        var result = this.api.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest, _options);
        return result.toPromise();
    };
    PromiseContactApi.prototype.unlinkContactsUsingPOST = function (linkContactsRequest, _options) {
        var result = this.api.unlinkContactsUsingPOST(linkContactsRequest, _options);
        return result.toPromise();
    };
    return PromiseContactApi;
}());
exports.PromiseContactApi = PromiseContactApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseEmailApi = (function () {
    function PromiseEmailApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableEmailApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEmailApi.prototype.createEmailUsingPOST1WithHttpInfo = function (emailWithContent, _options) {
        var result = this.api.createEmailUsingPOST1WithHttpInfo(emailWithContent, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.createEmailUsingPOST1 = function (emailWithContent, _options) {
        var result = this.api.createEmailUsingPOST1(emailWithContent, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.createEmailsUsingPOST1WithHttpInfo = function (createEmailsSentRequest, _options) {
        var result = this.api.createEmailsUsingPOST1WithHttpInfo(createEmailsSentRequest, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.createEmailsUsingPOST1 = function (createEmailsSentRequest, _options) {
        var result = this.api.createEmailsUsingPOST1(createEmailsSentRequest, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.deleteEmailUsingDELETE1WithHttpInfo = function (id, _options) {
        var result = this.api.deleteEmailUsingDELETE1WithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.deleteEmailUsingDELETE1 = function (id, _options) {
        var result = this.api.deleteEmailUsingDELETE1(id, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.deleteEmailsUsingPOST1WithHttpInfo = function (deleteEmailsRequest, _options) {
        var result = this.api.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.deleteEmailsUsingPOST1 = function (deleteEmailsRequest, _options) {
        var result = this.api.deleteEmailsUsingPOST1(deleteEmailsRequest, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.getEmailUsingGET1WithHttpInfo = function (id, _options) {
        var result = this.api.getEmailUsingGET1WithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.getEmailUsingGET1 = function (id, _options) {
        var result = this.api.getEmailUsingGET1(id, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.sendEmailUsingPOST1WithHttpInfo = function (emailSendRequest, _options) {
        var result = this.api.sendEmailUsingPOST1WithHttpInfo(emailSendRequest, _options);
        return result.toPromise();
    };
    PromiseEmailApi.prototype.sendEmailUsingPOST1 = function (emailSendRequest, _options) {
        var result = this.api.sendEmailUsingPOST1(emailSendRequest, _options);
        return result.toPromise();
    };
    return PromiseEmailApi;
}());
exports.PromiseEmailApi = PromiseEmailApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseEmailAddressApi = (function () {
    function PromiseEmailAddressApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableEmailAddressApi(configuration, requestFactory, responseProcessor);
    }
    PromiseEmailAddressApi.prototype.getEmailAddressStatusUsingGETWithHttpInfo = function (email, _options) {
        var result = this.api.getEmailAddressStatusUsingGETWithHttpInfo(email, _options);
        return result.toPromise();
    };
    PromiseEmailAddressApi.prototype.getEmailAddressStatusUsingGET = function (email, _options) {
        var result = this.api.getEmailAddressStatusUsingGET(email, _options);
        return result.toPromise();
    };
    PromiseEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUTWithHttpInfo = function (email, updateEmailAddress, _options) {
        var result = this.api.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress, _options);
        return result.toPromise();
    };
    PromiseEmailAddressApi.prototype.updateEmailAddressOptStatusUsingPUT = function (email, updateEmailAddress, _options) {
        var result = this.api.updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress, _options);
        return result.toPromise();
    };
    return PromiseEmailAddressApi;
}());
exports.PromiseEmailAddressApi = PromiseEmailAddressApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseFreeTrialDiscountApi = (function () {
    function PromiseFreeTrialDiscountApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableFreeTrialDiscountApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromiseFreeTrialDiscountApi.prototype.deleteDiscountUsingDELETE1 = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE1(discountId, _options);
        return result.toPromise();
    };
    return PromiseFreeTrialDiscountApi;
}());
exports.PromiseFreeTrialDiscountApi = PromiseFreeTrialDiscountApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseFunnelIntegrationApi = (function () {
    function PromiseFunnelIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableFunnelIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    PromiseFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (createFunnelIntegrationRequest, _options) {
        var result = this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromiseFunnelIntegrationApi.prototype.createFunnelIntegrationUsingPOST = function (createFunnelIntegrationRequest, _options) {
        var result = this.api.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromiseFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (createFunnelIntegrationTriggerEvents, _options) {
        var result = this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    };
    PromiseFunnelIntegrationApi.prototype.createIntegrationTriggerEventUsingPOST = function (createFunnelIntegrationTriggerEvents, _options) {
        var result = this.api.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    };
    PromiseFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (deleteFunnelIntegrationRequest, _options) {
        var result = this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromiseFunnelIntegrationApi.prototype.deleteFunnelIntegrationUsingPOST = function (deleteFunnelIntegrationRequest, _options) {
        var result = this.api.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    return PromiseFunnelIntegrationApi;
}());
exports.PromiseFunnelIntegrationApi = PromiseFunnelIntegrationApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromiseLandingPagesApi = (function () {
    function PromiseLandingPagesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLandingPagesApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseLandingPagesApi.prototype.listLandingPagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseLandingPagesApi;
}());
exports.PromiseLandingPagesApi = PromiseLandingPagesApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromiseLeadSourcesApi = (function () {
    function PromiseLeadSourcesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableLeadSourcesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLeadSourcesApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (leadsource, _options) {
        var result = this.api.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options);
        return result.toPromise();
    };
    PromiseLeadSourcesApi.prototype.createLeadSourceUsingPOST = function (leadsource, _options) {
        var result = this.api.createLeadSourceUsingPOST(leadsource, _options);
        return result.toPromise();
    };
    PromiseLeadSourcesApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseLeadSourcesApi.prototype.listLeadSourcesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseLeadSourcesApi;
}());
exports.PromiseLeadSourcesApi = PromiseLeadSourcesApi;
var ObservableAPI_15 = require("./ObservableAPI");
var PromiseLocaleApi = (function () {
    function PromiseLocaleApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableLocaleApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLocaleApi.prototype.listCountriesUsingGET2WithHttpInfo = function (_options) {
        var result = this.api.listCountriesUsingGET2WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseLocaleApi.prototype.listCountriesUsingGET2 = function (_options) {
        var result = this.api.listCountriesUsingGET2(_options);
        return result.toPromise();
    };
    PromiseLocaleApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (countryCode, _options) {
        var result = this.api.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options);
        return result.toPromise();
    };
    PromiseLocaleApi.prototype.listProvincesForCountryUsingGET = function (countryCode, _options) {
        var result = this.api.listProvincesForCountryUsingGET(countryCode, _options);
        return result.toPromise();
    };
    return PromiseLocaleApi;
}());
exports.PromiseLocaleApi = PromiseLocaleApi;
var ObservableAPI_16 = require("./ObservableAPI");
var PromiseMerchantApi = (function () {
    function PromiseMerchantApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableMerchantApi(configuration, requestFactory, responseProcessor);
    }
    PromiseMerchantApi.prototype.listMerchantsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseMerchantApi.prototype.listMerchantsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseMerchantApi;
}());
exports.PromiseMerchantApi = PromiseMerchantApi;
var ObservableAPI_17 = require("./ObservableAPI");
var PromiseNoteApi = (function () {
    function PromiseNoteApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableNoteApi(configuration, requestFactory, responseProcessor);
    }
    PromiseNoteApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var result = this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.createNoteCustomFieldUsingPOST1 = function (customField, _options) {
        var result = this.api.createNoteCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.createNoteUsingPOST1WithHttpInfo = function (contactId, request, _options) {
        var result = this.api.createNoteUsingPOST1WithHttpInfo(contactId, request, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.createNoteUsingPOST1 = function (contactId, request, _options) {
        var result = this.api.createNoteUsingPOST1(contactId, request, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.deleteNoteUsingDELETE1WithHttpInfo = function (contactId, noteId, _options) {
        var result = this.api.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.deleteNoteUsingDELETE1 = function (contactId, noteId, _options) {
        var result = this.api.deleteNoteUsingDELETE1(contactId, noteId, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.getNoteUsingGET1WithHttpInfo = function (contactId, noteId, _options) {
        var result = this.api.getNoteUsingGET1WithHttpInfo(contactId, noteId, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.getNoteUsingGET1 = function (contactId, noteId, _options) {
        var result = this.api.getNoteUsingGET1(contactId, noteId, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.listNotesUsingGET1WithHttpInfo = function (contactId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listNotesUsingGET1WithHttpInfo(contactId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.listNotesUsingGET1 = function (contactId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listNotesUsingGET1(contactId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.retrieveNoteModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.retrieveNoteModelUsingGET1 = function (_options) {
        var result = this.api.retrieveNoteModelUsingGET1(_options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.updateNoteUsingPATCHWithHttpInfo = function (contactId, noteId, updateNoteRequest, updateMask, _options) {
        var result = this.api.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, updateMask, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.updateNoteUsingPATCH = function (contactId, noteId, updateNoteRequest, updateMask, _options) {
        var result = this.api.updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, updateMask, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseNoteApi.prototype.updateNotesCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromiseNoteApi;
}());
exports.PromiseNoteApi = PromiseNoteApi;
var ObservableAPI_18 = require("./ObservableAPI");
var PromiseOpportunityApi = (function () {
    function PromiseOpportunityApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableOpportunityApi(configuration, requestFactory, responseProcessor);
    }
    PromiseOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.createOpportunityCustomFieldsUsingPOST = function (customField, _options) {
        var result = this.api.createOpportunityCustomFieldsUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (opportunityStage, _options) {
        var result = this.api.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.createOpportunityStageUsingPOST = function (opportunityStage, _options) {
        var result = this.api.createOpportunityStageUsingPOST(opportunityStage, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (opportunity, _options) {
        var result = this.api.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.createOpportunityUsingPOST1 = function (opportunity, _options) {
        var result = this.api.createOpportunityUsingPOST1(opportunity, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (stageId, _options) {
        var result = this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.deleteOpportunityStageUsingDELETE = function (stageId, _options) {
        var result = this.api.deleteOpportunityStageUsingDELETE(stageId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (opportunityId, _options) {
        var result = this.api.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.deleteOpportunityUsingDELETE = function (opportunityId, _options) {
        var result = this.api.deleteOpportunityUsingDELETE(opportunityId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (stageId, _options) {
        var result = this.api.getOpportunityStageUsingGETWithHttpInfo(stageId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.getOpportunityStageUsingGET = function (stageId, _options) {
        var result = this.api.getOpportunityStageUsingGET(stageId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (opportunityId, _options) {
        var result = this.api.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.getOpportunityUsingGET1 = function (opportunityId, _options) {
        var result = this.api.getOpportunityUsingGET1(opportunityId, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.listOpportunitiesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.listOpportunityStagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (opportunityId, request, updateMask, _options) {
        var result = this.api.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseOpportunityApi.prototype.updateOpportunityUsingPATCH = function (opportunityId, request, updateMask, _options) {
        var result = this.api.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromiseOpportunityApi;
}());
exports.PromiseOpportunityApi = PromiseOpportunityApi;
var ObservableAPI_19 = require("./ObservableAPI");
var PromiseOrdersApi = (function () {
    function PromiseOrdersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseOrdersApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createOrderCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createOrderCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (orderId, createRestOrderItemRequest, _options) {
        var result = this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (orderId, createRestOrderItemRequest, _options) {
        var result = this.api.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createOrderUsingPOST1WithHttpInfo = function (createOrderRequest, _options) {
        var result = this.api.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createOrderUsingPOST1 = function (createOrderRequest, _options) {
        var result = this.api.createOrderUsingPOST1(createOrderRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createPaymentOnOrderUsingPOST1WithHttpInfo = function (orderId, createPaymentRequest, _options) {
        var result = this.api.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.createPaymentOnOrderUsingPOST1 = function (orderId, createPaymentRequest, _options) {
        var result = this.api.createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (orderId, _options) {
        var result = this.api.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.deleteOrderUsingDELETE1 = function (orderId, _options) {
        var result = this.api.deleteOrderUsingDELETE1(orderId, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.getOrderUsingGET1WithHttpInfo = function (orderId, _options) {
        var result = this.api.getOrderUsingGET1WithHttpInfo(orderId, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.getOrderUsingGET1 = function (orderId, _options) {
        var result = this.api.getOrderUsingGET1(orderId, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.listOrdersUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.listOrdersUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (orderId, updateMask, order, _options) {
        var result = this.api.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.patchOrderUsingPATCH = function (orderId, updateMask, order, _options) {
        var result = this.api.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var result = this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (_options) {
        var result = this.api.retrieveOrderCustomFieldModelUsingGET(_options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseOrdersApi.prototype.updateOrderCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromiseOrdersApi;
}());
exports.PromiseOrdersApi = PromiseOrdersApi;
var ObservableAPI_20 = require("./ObservableAPI");
var PromisePaymentMethodConfigApi = (function () {
    function PromisePaymentMethodConfigApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservablePaymentMethodConfigApi(configuration, requestFactory, responseProcessor);
    }
    PromisePaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createPaymentMethodConfigUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromisePaymentMethodConfigApi.prototype.createPaymentMethodConfigUsingPOST = function (request, _options) {
        var result = this.api.createPaymentMethodConfigUsingPOST(request, _options);
        return result.toPromise();
    };
    return PromisePaymentMethodConfigApi;
}());
exports.PromisePaymentMethodConfigApi = PromisePaymentMethodConfigApi;
var ObservableAPI_21 = require("./ObservableAPI");
var PromisePreReleaseApi = (function () {
    function PromisePreReleaseApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservablePreReleaseApi(configuration, requestFactory, responseProcessor);
    }
    PromisePreReleaseApi.prototype.addAffiliateToProgramUsingPOSTWithHttpInfo = function (id, affiliateAddToProgramRequest, _options) {
        var result = this.api.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.addAffiliateToProgramUsingPOST = function (id, affiliateAddToProgramRequest, _options) {
        var result = this.api.addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.addCommissionProgramUsingPOSTWithHttpInfo = function (insertCommissionProgram, _options) {
        var result = this.api.addCommissionProgramUsingPOSTWithHttpInfo(insertCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.addCommissionProgramUsingPOST = function (insertCommissionProgram, _options) {
        var result = this.api.addCommissionProgramUsingPOST(insertCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.assignProductCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, productCommissionProgram, _options) {
        var result = this.api.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.assignProductCommissionProgramUsingPOST = function (commissionProgramId, productCommissionProgram, _options) {
        var result = this.api.assignProductCommissionProgramUsingPOST(commissionProgramId, productCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var result = this.api.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.assignSubscriptionCommissionProgramUsingPOST = function (commissionProgramId, subscriptionCommissionProgram, _options) {
        var result = this.api.assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, subscriptionCommissionProgram, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var result = this.api.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.cancelSubscriptionUsingPOST = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var result = this.api.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createAffiliateCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createAffiliateCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createAffiliateCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createDefaultCommissionProgramUsingPOSTWithHttpInfo = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var result = this.api.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createDefaultCommissionProgramUsingPOST = function (commissionProgramId, createDefaultCommissionProgramRequest, _options) {
        var result = this.api.createDefaultCommissionProgramUsingPOST(commissionProgramId, createDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createFunnelIntegrationUsingPOSTWithHttpInfo = function (createFunnelIntegrationRequest, _options) {
        var result = this.api.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createFunnelIntegrationUsingPOST = function (createFunnelIntegrationRequest, _options) {
        var result = this.api.createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createIntegrationTriggerEventUsingPOSTWithHttpInfo = function (createFunnelIntegrationTriggerEvents, _options) {
        var result = this.api.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createIntegrationTriggerEventUsingPOST = function (createFunnelIntegrationTriggerEvents, _options) {
        var result = this.api.createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createLeadSourceUsingPOSTWithHttpInfo = function (leadsource, _options) {
        var result = this.api.createLeadSourceUsingPOSTWithHttpInfo(leadsource, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createLeadSourceUsingPOST = function (leadsource, _options) {
        var result = this.api.createLeadSourceUsingPOST(leadsource, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createNoteCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var result = this.api.createNoteCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createNoteCustomFieldUsingPOST1 = function (customField, _options) {
        var result = this.api.createNoteCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityCustomFieldsUsingPOST = function (customField, _options) {
        var result = this.api.createOpportunityCustomFieldsUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityStageUsingPOSTWithHttpInfo = function (opportunityStage, _options) {
        var result = this.api.createOpportunityStageUsingPOSTWithHttpInfo(opportunityStage, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityStageUsingPOST = function (opportunityStage, _options) {
        var result = this.api.createOpportunityStageUsingPOST(opportunityStage, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityUsingPOST1WithHttpInfo = function (opportunity, _options) {
        var result = this.api.createOpportunityUsingPOST1WithHttpInfo(opportunity, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOpportunityUsingPOST1 = function (opportunity, _options) {
        var result = this.api.createOpportunityUsingPOST1(opportunity, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createOrderCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createOrderCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1WithHttpInfo = function (orderId, createRestOrderItemRequest, _options) {
        var result = this.api.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderItemsOnOrderUsingPOST1 = function (orderId, createRestOrderItemRequest, _options) {
        var result = this.api.createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderUsingPOST1WithHttpInfo = function (createOrderRequest, _options) {
        var result = this.api.createOrderUsingPOST1WithHttpInfo(createOrderRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createOrderUsingPOST1 = function (createOrderRequest, _options) {
        var result = this.api.createOrderUsingPOST1(createOrderRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createRedirectLinkUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createRedirectLinkUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createRedirectLinkUsingPOST = function (request, _options) {
        var result = this.api.createRedirectLinkUsingPOST(request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createReferralUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createReferralUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createReferralUsingPOST = function (request, _options) {
        var result = this.api.createReferralUsingPOST(request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createSubscriptionCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createSubscriptionCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var result = this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createTaskCustomFieldUsingPOST1 = function (customField, _options) {
        var result = this.api.createTaskCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createTaskUsingPOST1WithHttpInfo = function (task, _options) {
        var result = this.api.createTaskUsingPOST1WithHttpInfo(task, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createTaskUsingPOST1 = function (task, _options) {
        var result = this.api.createTaskUsingPOST1(task, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createUserUsingPOST1WithHttpInfo = function (user, _options) {
        var result = this.api.createUserUsingPOST1WithHttpInfo(user, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.createUserUsingPOST1 = function (user, _options) {
        var result = this.api.createUserUsingPOST1(user, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo = function (commissionProgramId, _options) {
        var result = this.api.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteAffiliateCommissionProgramUsingDELETE = function (commissionProgramId, _options) {
        var result = this.api.deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteAffiliateUsingDELETEWithHttpInfo = function (id, _options) {
        var result = this.api.deleteAffiliateUsingDELETEWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteAffiliateUsingDELETE = function (id, _options) {
        var result = this.api.deleteAffiliateUsingDELETE(id, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteDiscountUsingDELETEWithHttpInfo = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETEWithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteDiscountUsingDELETE = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteDiscountUsingDELETE1WithHttpInfo = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE1WithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteDiscountUsingDELETE1 = function (discountId, _options) {
        var result = this.api.deleteDiscountUsingDELETE1(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteFunnelIntegrationUsingPOSTWithHttpInfo = function (deleteFunnelIntegrationRequest, _options) {
        var result = this.api.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteFunnelIntegrationUsingPOST = function (deleteFunnelIntegrationRequest, _options) {
        var result = this.api.deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOpportunityStageUsingDELETEWithHttpInfo = function (stageId, _options) {
        var result = this.api.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOpportunityStageUsingDELETE = function (stageId, _options) {
        var result = this.api.deleteOpportunityStageUsingDELETE(stageId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOpportunityUsingDELETEWithHttpInfo = function (opportunityId, _options) {
        var result = this.api.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOpportunityUsingDELETE = function (opportunityId, _options) {
        var result = this.api.deleteOpportunityUsingDELETE(opportunityId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOrderUsingDELETE1WithHttpInfo = function (orderId, _options) {
        var result = this.api.deleteOrderUsingDELETE1WithHttpInfo(orderId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteOrderUsingDELETE1 = function (orderId, _options) {
        var result = this.api.deleteOrderUsingDELETE1(orderId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteRedirectLinkUsingDELETEWithHttpInfo = function (redirectId, _options) {
        var result = this.api.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteRedirectLinkUsingDELETE = function (redirectId, _options) {
        var result = this.api.deleteRedirectLinkUsingDELETE(redirectId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (customFieldId, _options) {
        var result = this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteTaskCustomFieldUsingDELETE = function (customFieldId, _options) {
        var result = this.api.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (taskId, _options) {
        var result = this.api.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.deleteTaskUsingDELETE1 = function (taskId, _options) {
        var result = this.api.deleteTaskUsingDELETE1(taskId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCommissionTotalUsingGETWithHttpInfo = function (affiliateId, _options) {
        var result = this.api.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCommissionTotalUsingGET = function (affiliateId, _options) {
        var result = this.api.getAffiliateCommissionTotalUsingGET(affiliateId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCommissionsUsingGETWithHttpInfo = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCommissionsUsingGET = function (affiliateId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.getAffiliateCommissionsUsingGET(affiliateId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCustomFieldsUsingGETWithHttpInfo = function (_options) {
        var result = this.api.getAffiliateCustomFieldsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getAffiliateCustomFieldsUsingGET = function (_options) {
        var result = this.api.getAffiliateCustomFieldsUsingGET(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getCommissionProgramUsingGETWithHttpInfo = function (commissionProgramId, _options) {
        var result = this.api.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getCommissionProgramUsingGET = function (commissionProgramId, _options) {
        var result = this.api.getCommissionProgramUsingGET(commissionProgramId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getContactsBySearchTermUsingGETWithHttpInfo = function (searchParam, _options) {
        var result = this.api.getContactsBySearchTermUsingGETWithHttpInfo(searchParam, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getContactsBySearchTermUsingGET = function (searchParam, _options) {
        var result = this.api.getContactsBySearchTermUsingGET(searchParam, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getDiscountUsingGETWithHttpInfo = function (discountId, _options) {
        var result = this.api.getDiscountUsingGETWithHttpInfo(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getDiscountUsingGET = function (discountId, _options) {
        var result = this.api.getDiscountUsingGET(discountId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOpportunityStageUsingGETWithHttpInfo = function (stageId, _options) {
        var result = this.api.getOpportunityStageUsingGETWithHttpInfo(stageId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOpportunityStageUsingGET = function (stageId, _options) {
        var result = this.api.getOpportunityStageUsingGET(stageId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOpportunityUsingGET1WithHttpInfo = function (opportunityId, _options) {
        var result = this.api.getOpportunityUsingGET1WithHttpInfo(opportunityId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOpportunityUsingGET1 = function (opportunityId, _options) {
        var result = this.api.getOpportunityUsingGET1(opportunityId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOrderUsingGET1WithHttpInfo = function (orderId, _options) {
        var result = this.api.getOrderUsingGET1WithHttpInfo(orderId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getOrderUsingGET1 = function (orderId, _options) {
        var result = this.api.getOrderUsingGET1(orderId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getRedirectLinkUsingGETWithHttpInfo = function (redirectId, _options) {
        var result = this.api.getRedirectLinkUsingGETWithHttpInfo(redirectId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getRedirectLinkUsingGET = function (redirectId, _options) {
        var result = this.api.getRedirectLinkUsingGET(redirectId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getTaskUsingGET1WithHttpInfo = function (taskId, _options) {
        var result = this.api.getTaskUsingGET1WithHttpInfo(taskId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getTaskUsingGET1 = function (taskId, _options) {
        var result = this.api.getTaskUsingGET1(taskId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserByIdUsingGETWithHttpInfo = function (userId, _options) {
        var result = this.api.getUserByIdUsingGETWithHttpInfo(userId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserByIdUsingGET = function (userId, _options) {
        var result = this.api.getUserByIdUsingGET(userId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.getUserInfoUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserInfoUsingGET1 = function (_options) {
        var result = this.api.getUserInfoUsingGET1(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (userId, _options) {
        var result = this.api.getUserSignatureUsingGET1WithHttpInfo(userId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.getUserSignatureUsingGET1 = function (userId, _options) {
        var result = this.api.getUserSignatureUsingGET1(userId, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateCommissionProgramsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listAffiliateCommissionProgramsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateCommissionProgramsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listAffiliateLinksUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateLinksUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listAffiliateLinksUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listAffiliateLinksUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listCountriesUsingGET2WithHttpInfo = function (_options) {
        var result = this.api.listCountriesUsingGET2WithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listCountriesUsingGET2 = function (_options) {
        var result = this.api.listCountriesUsingGET2(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listLandingPagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLandingPagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listLandingPagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLandingPagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listLeadSourcesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLeadSourcesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listLeadSourcesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listLeadSourcesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listMerchantsUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listMerchantsUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listMerchantsUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOpportunitiesUsingGET1WithHttpInfo = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunitiesUsingGET1WithHttpInfo(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOpportunitiesUsingGET1 = function (fields, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunitiesUsingGET1(fields, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOpportunityStagesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunityStagesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOpportunityStagesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOpportunityStagesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOrdersUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOrdersUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listOrdersUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listOrdersUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listProductsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listProductsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listProvincesForCountryUsingGETWithHttpInfo = function (countryCode, _options) {
        var result = this.api.listProvincesForCountryUsingGETWithHttpInfo(countryCode, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listProvincesForCountryUsingGET = function (countryCode, _options) {
        var result = this.api.listProvincesForCountryUsingGET(countryCode, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (_options) {
        var result = this.api.listShippingMethodsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listShippingMethodsUsingGET = function (_options) {
        var result = this.api.listShippingMethodsUsingGET(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listSubscriptionPlansUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listSummariesUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSummariesUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listSummariesUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSummariesUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listTasksUsingGET1WithHttpInfo = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var result = this.api.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listTasksUsingGET1 = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var result = this.api.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listUsersUsingGET1WithHttpInfo = function (filter, orderBy, _options) {
        var result = this.api.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.listUsersUsingGET1 = function (filter, orderBy, _options) {
        var result = this.api.listUsersUsingGET1(filter, orderBy, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var result = this.api.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchDefaultCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options) {
        var result = this.api.patchDefaultCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchDefaultCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchOrderUsingPATCHWithHttpInfo = function (orderId, updateMask, order, _options) {
        var result = this.api.patchOrderUsingPATCHWithHttpInfo(orderId, updateMask, order, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchOrderUsingPATCH = function (orderId, updateMask, order, _options) {
        var result = this.api.patchOrderUsingPATCH(orderId, updateMask, order, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchProductCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var result = this.api.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchProductCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options) {
        var result = this.api.patchProductCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchProductCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var result = this.api.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchSubscriptionCommissionProgramUsingPATCH = function (commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options) {
        var result = this.api.patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, updateMask, patchSubscriptionCommissionProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (taskId, updateMask, task, _options) {
        var result = this.api.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchTaskUsingPATCH = function (taskId, updateMask, task, _options) {
        var result = this.api.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchUserUsingPATCHWithHttpInfo = function (userId, updateMask, user, _options) {
        var result = this.api.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.patchUserUsingPATCH = function (userId, updateMask, user, _options) {
        var result = this.api.patchUserUsingPATCH(userId, updateMask, user, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.removeAffiliateFromProgramUsingPOSTWithHttpInfo = function (id, removeFromProgramRequest, _options) {
        var result = this.api.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.removeAffiliateFromProgramUsingPOST = function (id, removeFromProgramRequest, _options) {
        var result = this.api.removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.removeSubscriptionPlanCommissionFromCommissionsUsingPOST = function (commissionId, deleteSubscriptionPlanCommissionRequest, _options) {
        var result = this.api.removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveNoteModelUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.retrieveNoteModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveNoteModelUsingGET1 = function (_options) {
        var result = this.api.retrieveNoteModelUsingGET1(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var result = this.api.retrieveOrderCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveOrderCustomFieldModelUsingGET = function (_options) {
        var result = this.api.retrieveOrderCustomFieldModelUsingGET(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var result = this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (_options) {
        var result = this.api.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.retrieveTaskModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.retrieveTaskModelUsingGET1 = function (_options) {
        var result = this.api.retrieveTaskModelUsingGET1(_options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateAffiliateCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateAffiliateCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateNotesCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateNotesCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateNotesCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOpportunityCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOpportunityCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOpportunityUsingPATCHWithHttpInfo = function (opportunityId, request, updateMask, _options) {
        var result = this.api.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOpportunityUsingPATCH = function (opportunityId, request, updateMask, _options) {
        var result = this.api.updateOpportunityUsingPATCH(opportunityId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOrderCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateOrderCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateOrderCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateRedirectLinkUsingPATCHWithHttpInfo = function (redirectId, request, _options) {
        var result = this.api.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateRedirectLinkUsingPATCH = function (redirectId, request, _options) {
        var result = this.api.updateRedirectLinkUsingPATCH(redirectId, request, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromisePreReleaseApi.prototype.updateTaskCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromisePreReleaseApi;
}());
exports.PromisePreReleaseApi = PromisePreReleaseApi;
var ObservableAPI_22 = require("./ObservableAPI");
var PromiseProductApi = (function () {
    function PromiseProductApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableProductApi(configuration, requestFactory, responseProcessor);
    }
    PromiseProductApi.prototype.listProductsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listProductsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseProductApi.prototype.listProductsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listProductsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseProductApi;
}());
exports.PromiseProductApi = PromiseProductApi;
var ObservableAPI_23 = require("./ObservableAPI");
var PromiseReferralApi = (function () {
    function PromiseReferralApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableReferralApi(configuration, requestFactory, responseProcessor);
    }
    PromiseReferralApi.prototype.createReferralUsingPOSTWithHttpInfo = function (request, _options) {
        var result = this.api.createReferralUsingPOSTWithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromiseReferralApi.prototype.createReferralUsingPOST = function (request, _options) {
        var result = this.api.createReferralUsingPOST(request, _options);
        return result.toPromise();
    };
    return PromiseReferralApi;
}());
exports.PromiseReferralApi = PromiseReferralApi;
var ObservableAPI_24 = require("./ObservableAPI");
var PromiseReportingApi = (function () {
    function PromiseReportingApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableReportingApi(configuration, requestFactory, responseProcessor);
    }
    PromiseReportingApi.prototype.runReportUsingPOSTWithHttpInfo = function (reportId, fields, orderBy, pageSize, pageToken, _options) {
        var result = this.api.runReportUsingPOSTWithHttpInfo(reportId, fields, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseReportingApi.prototype.runReportUsingPOST = function (reportId, fields, orderBy, pageSize, pageToken, _options) {
        var result = this.api.runReportUsingPOST(reportId, fields, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseReportingApi;
}());
exports.PromiseReportingApi = PromiseReportingApi;
var ObservableAPI_25 = require("./ObservableAPI");
var PromiseSalesApi = (function () {
    function PromiseSalesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo = function (id, _options) {
        var result = this.api.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseSalesApi.prototype.setMerchantGatewayAsDefaultUsingPOST = function (id, _options) {
        var result = this.api.setMerchantGatewayAsDefaultUsingPOST(id, _options);
        return result.toPromise();
    };
    return PromiseSalesApi;
}());
exports.PromiseSalesApi = PromiseSalesApi;
var ObservableAPI_26 = require("./ObservableAPI");
var PromiseSettingsApi = (function () {
    function PromiseSettingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSettingsApi.prototype.getApplicationConfigurationsUsingGETWithHttpInfo = function (fields, _options) {
        var result = this.api.getApplicationConfigurationsUsingGETWithHttpInfo(fields, _options);
        return result.toPromise();
    };
    PromiseSettingsApi.prototype.getApplicationConfigurationsUsingGET = function (fields, _options) {
        var result = this.api.getApplicationConfigurationsUsingGET(fields, _options);
        return result.toPromise();
    };
    PromiseSettingsApi.prototype.getContactOptionTypesUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.getContactOptionTypesUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseSettingsApi.prototype.getContactOptionTypesUsingGET1 = function (_options) {
        var result = this.api.getContactOptionTypesUsingGET1(_options);
        return result.toPromise();
    };
    PromiseSettingsApi.prototype.isApplicationEnabledUsingGETWithHttpInfo = function (_options) {
        var result = this.api.isApplicationEnabledUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseSettingsApi.prototype.isApplicationEnabledUsingGET = function (_options) {
        var result = this.api.isApplicationEnabledUsingGET(_options);
        return result.toPromise();
    };
    return PromiseSettingsApi;
}());
exports.PromiseSettingsApi = PromiseSettingsApi;
var ObservableAPI_27 = require("./ObservableAPI");
var PromiseShippingApi = (function () {
    function PromiseShippingApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableShippingApi(configuration, requestFactory, responseProcessor);
    }
    PromiseShippingApi.prototype.listShippingMethodsUsingGETWithHttpInfo = function (_options) {
        var result = this.api.listShippingMethodsUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseShippingApi.prototype.listShippingMethodsUsingGET = function (_options) {
        var result = this.api.listShippingMethodsUsingGET(_options);
        return result.toPromise();
    };
    return PromiseShippingApi;
}());
exports.PromiseShippingApi = PromiseShippingApi;
var ObservableAPI_28 = require("./ObservableAPI");
var PromiseSubscriptionPlansApi = (function () {
    function PromiseSubscriptionPlansApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableSubscriptionPlansApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSubscriptionPlansUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseSubscriptionPlansApi.prototype.listSubscriptionPlansUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listSubscriptionPlansUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    return PromiseSubscriptionPlansApi;
}());
exports.PromiseSubscriptionPlansApi = PromiseSubscriptionPlansApi;
var ObservableAPI_29 = require("./ObservableAPI");
var PromiseSubscriptionsApi = (function () {
    function PromiseSubscriptionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseSubscriptionsApi.prototype.cancelSubscriptionUsingPOSTWithHttpInfo = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var result = this.api.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.cancelSubscriptionUsingPOST = function (subscriptionId, cancelSubscriptionsRequest, _options) {
        var result = this.api.cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOSTWithHttpInfo = function (customField, _options) {
        var result = this.api.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.createSubscriptionCustomFieldUsingPOST = function (customField, _options) {
        var result = this.api.createSubscriptionCustomFieldUsingPOST(customField, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.createSubscriptionV2UsingPOSTWithHttpInfo = function (createSubscriptionV2, _options) {
        var result = this.api.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.createSubscriptionV2UsingPOST = function (createSubscriptionV2, _options) {
        var result = this.api.createSubscriptionV2UsingPOST(createSubscriptionV2, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo = function (_options) {
        var result = this.api.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.retrieveSubscriptionCustomFieldModelUsingGET = function (_options) {
        var result = this.api.retrieveSubscriptionCustomFieldModelUsingGET(_options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseSubscriptionsApi.prototype.updateSubscriptionCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromiseSubscriptionsApi;
}());
exports.PromiseSubscriptionsApi = PromiseSubscriptionsApi;
var ObservableAPI_30 = require("./ObservableAPI");
var PromiseTagsApi = (function () {
    function PromiseTagsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseTagsApi.prototype.applyTagsUsingPOSTWithHttpInfo = function (tagId, applyRemoveTagRequest, _options) {
        var result = this.api.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.applyTagsUsingPOST = function (tagId, applyRemoveTagRequest, _options) {
        var result = this.api.applyTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.createTagCategoryUsingPOST1WithHttpInfo = function (request, _options) {
        var result = this.api.createTagCategoryUsingPOST1WithHttpInfo(request, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.createTagCategoryUsingPOST1 = function (request, _options) {
        var result = this.api.createTagCategoryUsingPOST1(request, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.createTagUsingPOST1WithHttpInfo = function (tag, _options) {
        var result = this.api.createTagUsingPOST1WithHttpInfo(tag, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.createTagUsingPOST1 = function (tag, _options) {
        var result = this.api.createTagUsingPOST1(tag, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.deleteTagCategoryUsingDELETEWithHttpInfo = function (tagCategoryId, _options) {
        var result = this.api.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.deleteTagCategoryUsingDELETE = function (tagCategoryId, _options) {
        var result = this.api.deleteTagCategoryUsingDELETE(tagCategoryId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.deleteTagUsingDELETEWithHttpInfo = function (tagId, _options) {
        var result = this.api.deleteTagUsingDELETEWithHttpInfo(tagId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.deleteTagUsingDELETE = function (tagId, _options) {
        var result = this.api.deleteTagUsingDELETE(tagId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.getCategoryUsingGETWithHttpInfo = function (tagCategoryId, _options) {
        var result = this.api.getCategoryUsingGETWithHttpInfo(tagCategoryId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.getCategoryUsingGET = function (tagCategoryId, _options) {
        var result = this.api.getCategoryUsingGET(tagCategoryId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.getTagUsingGET1WithHttpInfo = function (tagId, _options) {
        var result = this.api.getTagUsingGET1WithHttpInfo(tagId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.getTagUsingGET1 = function (tagId, _options) {
        var result = this.api.getTagUsingGET1(tagId, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listCompaniesForTagIdUsingGET1WithHttpInfo = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listCompaniesForTagIdUsingGET1 = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listCompaniesForTagIdUsingGET1(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listContactsWithTagIdUsingGETWithHttpInfo = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactsWithTagIdUsingGETWithHttpInfo(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listContactsWithTagIdUsingGET = function (tagId, filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listContactsWithTagIdUsingGET(tagId, filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listTagCategoriesUsingGETWithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listTagCategoriesUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listTagCategoriesUsingGET = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listTagCategoriesUsingGET(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listTagsUsingGET1WithHttpInfo = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listTagsUsingGET1WithHttpInfo(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.listTagsUsingGET1 = function (filter, orderBy, pageSize, pageToken, _options) {
        var result = this.api.listTagsUsingGET1(filter, orderBy, pageSize, pageToken, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.patchTagCategoryUsingPATCHWithHttpInfo = function (tagCategoryId, updateMask, tagCategory, _options) {
        var result = this.api.patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, updateMask, tagCategory, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.patchTagCategoryUsingPATCH = function (tagCategoryId, updateMask, tagCategory, _options) {
        var result = this.api.patchTagCategoryUsingPATCH(tagCategoryId, updateMask, tagCategory, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.patchTagUsingPATCHWithHttpInfo = function (tagId, updateMask, tag, _options) {
        var result = this.api.patchTagUsingPATCHWithHttpInfo(tagId, updateMask, tag, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.patchTagUsingPATCH = function (tagId, updateMask, tag, _options) {
        var result = this.api.patchTagUsingPATCH(tagId, updateMask, tag, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.removeTagsUsingPOSTWithHttpInfo = function (tagId, applyRemoveTagRequest, _options) {
        var result = this.api.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    };
    PromiseTagsApi.prototype.removeTagsUsingPOST = function (tagId, applyRemoveTagRequest, _options) {
        var result = this.api.removeTagsUsingPOST(tagId, applyRemoveTagRequest, _options);
        return result.toPromise();
    };
    return PromiseTagsApi;
}());
exports.PromiseTagsApi = PromiseTagsApi;
var ObservableAPI_31 = require("./ObservableAPI");
var PromiseTaskApi = (function () {
    function PromiseTaskApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }
    PromiseTaskApi.prototype.createTaskCustomFieldUsingPOST1WithHttpInfo = function (customField, _options) {
        var result = this.api.createTaskCustomFieldUsingPOST1WithHttpInfo(customField, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.createTaskCustomFieldUsingPOST1 = function (customField, _options) {
        var result = this.api.createTaskCustomFieldUsingPOST1(customField, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.createTaskUsingPOST1WithHttpInfo = function (task, _options) {
        var result = this.api.createTaskUsingPOST1WithHttpInfo(task, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.createTaskUsingPOST1 = function (task, _options) {
        var result = this.api.createTaskUsingPOST1(task, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.deleteTaskCustomFieldUsingDELETEWithHttpInfo = function (customFieldId, _options) {
        var result = this.api.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.deleteTaskCustomFieldUsingDELETE = function (customFieldId, _options) {
        var result = this.api.deleteTaskCustomFieldUsingDELETE(customFieldId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.deleteTaskUsingDELETE1WithHttpInfo = function (taskId, _options) {
        var result = this.api.deleteTaskUsingDELETE1WithHttpInfo(taskId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.deleteTaskUsingDELETE1 = function (taskId, _options) {
        var result = this.api.deleteTaskUsingDELETE1(taskId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.getTaskUsingGET1WithHttpInfo = function (taskId, _options) {
        var result = this.api.getTaskUsingGET1WithHttpInfo(taskId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.getTaskUsingGET1 = function (taskId, _options) {
        var result = this.api.getTaskUsingGET1(taskId, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.listTasksUsingGET1WithHttpInfo = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var result = this.api.listTasksUsingGET1WithHttpInfo(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.listTasksUsingGET1 = function (endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options) {
        var result = this.api.listTasksUsingGET1(endDueTime, filter, orderBy, pageSize, pageToken, startDueTime, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.patchTaskUsingPATCHWithHttpInfo = function (taskId, updateMask, task, _options) {
        var result = this.api.patchTaskUsingPATCHWithHttpInfo(taskId, updateMask, task, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.patchTaskUsingPATCH = function (taskId, updateMask, task, _options) {
        var result = this.api.patchTaskUsingPATCH(taskId, updateMask, task, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.retrieveTaskModelUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.retrieveTaskModelUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.retrieveTaskModelUsingGET1 = function (_options) {
        var result = this.api.retrieveTaskModelUsingGET1(_options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.updateTaskCustomFieldUsingPATCHWithHttpInfo = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    PromiseTaskApi.prototype.updateTaskCustomFieldUsingPATCH = function (customFieldId, request, updateMask, _options) {
        var result = this.api.updateTaskCustomFieldUsingPATCH(customFieldId, request, updateMask, _options);
        return result.toPromise();
    };
    return PromiseTaskApi;
}());
exports.PromiseTaskApi = PromiseTaskApi;
var ObservableAPI_32 = require("./ObservableAPI");
var PromiseUsersApi = (function () {
    function PromiseUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUsersApi.prototype.createUserUsingPOST1WithHttpInfo = function (user, _options) {
        var result = this.api.createUserUsingPOST1WithHttpInfo(user, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.createUserUsingPOST1 = function (user, _options) {
        var result = this.api.createUserUsingPOST1(user, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserByIdUsingGETWithHttpInfo = function (userId, _options) {
        var result = this.api.getUserByIdUsingGETWithHttpInfo(userId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserByIdUsingGET = function (userId, _options) {
        var result = this.api.getUserByIdUsingGET(userId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserInfoUsingGET1WithHttpInfo = function (_options) {
        var result = this.api.getUserInfoUsingGET1WithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserInfoUsingGET1 = function (_options) {
        var result = this.api.getUserInfoUsingGET1(_options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserSignatureUsingGET1WithHttpInfo = function (userId, _options) {
        var result = this.api.getUserSignatureUsingGET1WithHttpInfo(userId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.getUserSignatureUsingGET1 = function (userId, _options) {
        var result = this.api.getUserSignatureUsingGET1(userId, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.listUsersUsingGET1WithHttpInfo = function (filter, orderBy, _options) {
        var result = this.api.listUsersUsingGET1WithHttpInfo(filter, orderBy, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.listUsersUsingGET1 = function (filter, orderBy, _options) {
        var result = this.api.listUsersUsingGET1(filter, orderBy, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.patchUserUsingPATCHWithHttpInfo = function (userId, updateMask, user, _options) {
        var result = this.api.patchUserUsingPATCHWithHttpInfo(userId, updateMask, user, _options);
        return result.toPromise();
    };
    PromiseUsersApi.prototype.patchUserUsingPATCH = function (userId, updateMask, user, _options) {
        var result = this.api.patchUserUsingPATCH(userId, updateMask, user, _options);
        return result.toPromise();
    };
    return PromiseUsersApi;
}());
exports.PromiseUsersApi = PromiseUsersApi;
//# sourceMappingURL=PromiseAPI.js.map