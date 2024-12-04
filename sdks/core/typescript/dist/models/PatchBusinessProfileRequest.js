"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchBusinessProfileRequest = void 0;
var PatchBusinessProfileRequest = (function () {
    function PatchBusinessProfileRequest() {
    }
    PatchBusinessProfileRequest.getAttributeTypeMap = function () {
        return PatchBusinessProfileRequest.attributeTypeMap;
    };
    PatchBusinessProfileRequest.discriminator = undefined;
    PatchBusinessProfileRequest.mapping = undefined;
    PatchBusinessProfileRequest.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BusinessProfileAddressRequest",
            "format": ""
        },
        {
            "name": "businessGoals",
            "baseName": "business_goals",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "businessPrimaryColor",
            "baseName": "business_primary_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessSecondaryColor",
            "baseName": "business_secondary_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return PatchBusinessProfileRequest;
}());
exports.PatchBusinessProfileRequest = PatchBusinessProfileRequest;
//# sourceMappingURL=PatchBusinessProfileRequest.js.map