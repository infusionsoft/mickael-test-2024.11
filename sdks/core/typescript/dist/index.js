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
exports.UsersApi = exports.TaskApi = exports.TagsApi = exports.SubscriptionsApi = exports.SubscriptionPlansApi = exports.ShippingApi = exports.SettingsApi = exports.SalesApi = exports.ReportingApi = exports.ReferralApi = exports.ProductApi = exports.PreReleaseApi = exports.PaymentMethodConfigApi = exports.OrdersApi = exports.OpportunityApi = exports.NoteApi = exports.MerchantApi = exports.LocaleApi = exports.LeadSourcesApi = exports.LandingPagesApi = exports.FunnelIntegrationApi = exports.FreeTrialDiscountApi = exports.EmailAddressApi = exports.EmailApi = exports.ContactApi = exports.CompanyApi = exports.CategoryDiscountApi = exports.CampaignApi = exports.BusinessProfileApi = exports.AutomationCategoryApi = exports.AutomationApi = exports.AffiliateApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
__exportStar(require("./models/all"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var baseapi_1 = require("./apis/baseapi");
Object.defineProperty(exports, "RequiredError", { enumerable: true, get: function () { return baseapi_1.RequiredError; } });
var PromiseAPI_1 = require("./types/PromiseAPI");
Object.defineProperty(exports, "AffiliateApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAffiliateApi; } });
Object.defineProperty(exports, "AutomationApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAutomationApi; } });
Object.defineProperty(exports, "AutomationCategoryApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAutomationCategoryApi; } });
Object.defineProperty(exports, "BusinessProfileApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseBusinessProfileApi; } });
Object.defineProperty(exports, "CampaignApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseCampaignApi; } });
Object.defineProperty(exports, "CategoryDiscountApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseCategoryDiscountApi; } });
Object.defineProperty(exports, "CompanyApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseCompanyApi; } });
Object.defineProperty(exports, "ContactApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseContactApi; } });
Object.defineProperty(exports, "EmailApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseEmailApi; } });
Object.defineProperty(exports, "EmailAddressApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseEmailAddressApi; } });
Object.defineProperty(exports, "FreeTrialDiscountApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseFreeTrialDiscountApi; } });
Object.defineProperty(exports, "FunnelIntegrationApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseFunnelIntegrationApi; } });
Object.defineProperty(exports, "LandingPagesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLandingPagesApi; } });
Object.defineProperty(exports, "LeadSourcesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLeadSourcesApi; } });
Object.defineProperty(exports, "LocaleApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLocaleApi; } });
Object.defineProperty(exports, "MerchantApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseMerchantApi; } });
Object.defineProperty(exports, "NoteApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseNoteApi; } });
Object.defineProperty(exports, "OpportunityApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseOpportunityApi; } });
Object.defineProperty(exports, "OrdersApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseOrdersApi; } });
Object.defineProperty(exports, "PaymentMethodConfigApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePaymentMethodConfigApi; } });
Object.defineProperty(exports, "PreReleaseApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePreReleaseApi; } });
Object.defineProperty(exports, "ProductApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseProductApi; } });
Object.defineProperty(exports, "ReferralApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseReferralApi; } });
Object.defineProperty(exports, "ReportingApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseReportingApi; } });
Object.defineProperty(exports, "SalesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseSalesApi; } });
Object.defineProperty(exports, "SettingsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseSettingsApi; } });
Object.defineProperty(exports, "ShippingApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseShippingApi; } });
Object.defineProperty(exports, "SubscriptionPlansApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseSubscriptionPlansApi; } });
Object.defineProperty(exports, "SubscriptionsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseSubscriptionsApi; } });
Object.defineProperty(exports, "TagsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTagsApi; } });
Object.defineProperty(exports, "TaskApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTaskApi; } });
Object.defineProperty(exports, "UsersApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseUsersApi; } });
//# sourceMappingURL=index.js.map