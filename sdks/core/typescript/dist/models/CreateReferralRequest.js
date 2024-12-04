"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReferralRequestReferralTypeEnum = exports.CreateReferralRequest = void 0;
var CreateReferralRequest = (function () {
    function CreateReferralRequest() {
    }
    CreateReferralRequest.getAttributeTypeMap = function () {
        return CreateReferralRequest.attributeTypeMap;
    };
    CreateReferralRequest.discriminator = undefined;
    CreateReferralRequest.mapping = undefined;
    CreateReferralRequest.attributeTypeMap = [
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
            "type": "CreateReferralRequestReferralTypeEnum",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        }
    ];
    return CreateReferralRequest;
}());
exports.CreateReferralRequest = CreateReferralRequest;
var CreateReferralRequestReferralTypeEnum;
(function (CreateReferralRequestReferralTypeEnum) {
    CreateReferralRequestReferralTypeEnum["Cookie"] = "COOKIE";
    CreateReferralRequestReferralTypeEnum["Permanent"] = "PERMANENT";
    CreateReferralRequestReferralTypeEnum["Manual"] = "MANUAL";
})(CreateReferralRequestReferralTypeEnum = exports.CreateReferralRequestReferralTypeEnum || (exports.CreateReferralRequestReferralTypeEnum = {}));
//# sourceMappingURL=CreateReferralRequest.js.map