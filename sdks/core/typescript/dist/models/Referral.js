"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralReferralTypeEnum = exports.Referral = void 0;
var Referral = (function () {
    function Referral() {
    }
    Referral.getAttributeTypeMap = function () {
        return Referral.attributeTypeMap;
    };
    Referral.discriminator = undefined;
    Referral.mapping = undefined;
    Referral.attributeTypeMap = [
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationTime",
            "baseName": "expiration_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralPartnerId",
            "baseName": "referral_partner_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralTime",
            "baseName": "referral_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralType",
            "baseName": "referral_type",
            "type": "ReferralReferralTypeEnum",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        }
    ];
    return Referral;
}());
exports.Referral = Referral;
var ReferralReferralTypeEnum;
(function (ReferralReferralTypeEnum) {
    ReferralReferralTypeEnum["Cookie"] = "COOKIE";
    ReferralReferralTypeEnum["Permanent"] = "PERMANENT";
    ReferralReferralTypeEnum["Manual"] = "MANUAL";
})(ReferralReferralTypeEnum = exports.ReferralReferralTypeEnum || (exports.ReferralReferralTypeEnum = {}));
//# sourceMappingURL=Referral.js.map