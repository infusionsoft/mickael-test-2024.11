"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleAffiliate = void 0;
var ApplicationConfigurationModuleAffiliate = (function () {
    function ApplicationConfigurationModuleAffiliate() {
    }
    ApplicationConfigurationModuleAffiliate.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleAffiliate.attributeTypeMap;
    };
    ApplicationConfigurationModuleAffiliate.discriminator = undefined;
    ApplicationConfigurationModuleAffiliate.mapping = undefined;
    ApplicationConfigurationModuleAffiliate.attributeTypeMap = [
        {
            "name": "chooseAffiliate",
            "baseName": "choose_affiliate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "ApplicationConfigurationModuleAffiliateCommission",
            "format": ""
        },
        {
            "name": "customAffiliateUrl",
            "baseName": "custom_affiliate_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayAffiliateIpAddress",
            "baseName": "display_affiliate_ip_address",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "doNotNotifyAffiliate",
            "baseName": "do_not_notify_affiliate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "skipPayIfUnused",
            "baseName": "skip_pay_if_unused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useReferralHistoryIfNoTrackingCookie",
            "baseName": "use_referral_history_if_no_tracking_cookie",
            "type": "boolean",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleAffiliate;
}());
exports.ApplicationConfigurationModuleAffiliate = ApplicationConfigurationModuleAffiliate;
//# sourceMappingURL=ApplicationConfigurationModuleAffiliate.js.map