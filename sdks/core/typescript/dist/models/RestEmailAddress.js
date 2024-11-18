"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestEmailAddressStatusEnum = exports.RestEmailAddress = void 0;
var RestEmailAddress = (function () {
    function RestEmailAddress() {
    }
    RestEmailAddress.getAttributeTypeMap = function () {
        return RestEmailAddress.attributeTypeMap;
    };
    RestEmailAddress.discriminator = undefined;
    RestEmailAddress.mapping = undefined;
    RestEmailAddress.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "optedIn",
            "baseName": "opted_in",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RestEmailAddressStatusEnum",
            "format": ""
        }
    ];
    return RestEmailAddress;
}());
exports.RestEmailAddress = RestEmailAddress;
var RestEmailAddressStatusEnum;
(function (RestEmailAddressStatusEnum) {
    RestEmailAddressStatusEnum["UnengagedMarketable"] = "Unengaged Marketable";
    RestEmailAddressStatusEnum["Unconfirmed"] = "Unconfirmed";
    RestEmailAddressStatusEnum["ConfirmedLegacy"] = "Confirmed (Legacy)";
    RestEmailAddressStatusEnum["Confirmed"] = "Confirmed";
    RestEmailAddressStatusEnum["UnengagedNonMarketable"] = "Unengaged NonMarketable";
    RestEmailAddressStatusEnum["NonMarketable"] = "Non-marketable";
    RestEmailAddressStatusEnum["Lockdown"] = "Lockdown";
    RestEmailAddressStatusEnum["SoftBounce"] = "Soft Bounce";
    RestEmailAddressStatusEnum["HardBounce"] = "Hard Bounce";
    RestEmailAddressStatusEnum["OptOut"] = "Opt-Out";
    RestEmailAddressStatusEnum["OptOutAdmin"] = "Opt-Out: Admin";
    RestEmailAddressStatusEnum["OptOutSystem"] = "Opt-Out: System";
    RestEmailAddressStatusEnum["ListUnsubscribe"] = "List Unsubscribe";
    RestEmailAddressStatusEnum["ProvidedFeedback"] = "Provided Feedback";
    RestEmailAddressStatusEnum["ReportedSpam"] = "Reported Spam";
    RestEmailAddressStatusEnum["InvalidEmail"] = "Invalid Email";
    RestEmailAddressStatusEnum["DeactivatedDelinquentMailbox"] = "Deactivated/Delinquent Mailbox";
})(RestEmailAddressStatusEnum = exports.RestEmailAddressStatusEnum || (exports.RestEmailAddressStatusEnum = {}));
//# sourceMappingURL=RestEmailAddress.js.map