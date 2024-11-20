"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddressFieldEnum = exports.EmailAddressEmailOptStatusEnum = exports.EmailAddress = void 0;
var EmailAddress = (function () {
    function EmailAddress() {
    }
    EmailAddress.getAttributeTypeMap = function () {
        return EmailAddress.attributeTypeMap;
    };
    EmailAddress.discriminator = undefined;
    EmailAddress.mapping = undefined;
    EmailAddress.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailOptStatus",
            "baseName": "email_opt_status",
            "type": "EmailAddressEmailOptStatusEnum",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "EmailAddressFieldEnum",
            "format": ""
        },
        {
            "name": "isOptIn",
            "baseName": "is_opt_in",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "optInReason",
            "baseName": "opt_in_reason",
            "type": "string",
            "format": ""
        }
    ];
    return EmailAddress;
}());
exports.EmailAddress = EmailAddress;
var EmailAddressEmailOptStatusEnum;
(function (EmailAddressEmailOptStatusEnum) {
    EmailAddressEmailOptStatusEnum["UnengagedMarketable"] = "UNENGAGED_MARKETABLE";
    EmailAddressEmailOptStatusEnum["SingleOptIn"] = "SINGLE_OPT_IN";
    EmailAddressEmailOptStatusEnum["DoubleOptIn"] = "DOUBLE_OPT_IN";
    EmailAddressEmailOptStatusEnum["Confirmed"] = "CONFIRMED";
    EmailAddressEmailOptStatusEnum["UnengagedNonMarketable"] = "UNENGAGED_NON_MARKETABLE";
    EmailAddressEmailOptStatusEnum["NonMarketable"] = "NON_MARKETABLE";
    EmailAddressEmailOptStatusEnum["Lockdown"] = "LOCKDOWN";
    EmailAddressEmailOptStatusEnum["Bounce"] = "BOUNCE";
    EmailAddressEmailOptStatusEnum["HardBounce"] = "HARD_BOUNCE";
    EmailAddressEmailOptStatusEnum["Manual"] = "MANUAL";
    EmailAddressEmailOptStatusEnum["Admin"] = "ADMIN";
    EmailAddressEmailOptStatusEnum["System"] = "SYSTEM";
    EmailAddressEmailOptStatusEnum["ListUnsubscribe"] = "LIST_UNSUBSCRIBE";
    EmailAddressEmailOptStatusEnum["Feedback"] = "FEEDBACK";
    EmailAddressEmailOptStatusEnum["Spam"] = "SPAM";
    EmailAddressEmailOptStatusEnum["Invalid"] = "INVALID";
    EmailAddressEmailOptStatusEnum["Deactivated"] = "DEACTIVATED";
})(EmailAddressEmailOptStatusEnum = exports.EmailAddressEmailOptStatusEnum || (exports.EmailAddressEmailOptStatusEnum = {}));
var EmailAddressFieldEnum;
(function (EmailAddressFieldEnum) {
    EmailAddressFieldEnum["EmailFieldUnspecified"] = "EMAIL_FIELD_UNSPECIFIED";
    EmailAddressFieldEnum["Email1"] = "EMAIL1";
    EmailAddressFieldEnum["Email2"] = "EMAIL2";
    EmailAddressFieldEnum["Email3"] = "EMAIL3";
})(EmailAddressFieldEnum = exports.EmailAddressFieldEnum || (exports.EmailAddressFieldEnum = {}));
//# sourceMappingURL=EmailAddress.js.map