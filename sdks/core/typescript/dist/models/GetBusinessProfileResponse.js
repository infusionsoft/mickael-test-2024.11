"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBusinessProfileResponse = void 0;
var GetBusinessProfileResponse = (function () {
    function GetBusinessProfileResponse() {
    }
    GetBusinessProfileResponse.getAttributeTypeMap = function () {
        return GetBusinessProfileResponse.attributeTypeMap;
    };
    GetBusinessProfileResponse.discriminator = undefined;
    GetBusinessProfileResponse.mapping = undefined;
    GetBusinessProfileResponse.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BusinessProfileAddressResponse",
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
            "name": "businessType",
            "baseName": "business_type",
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
            "name": "languageTag",
            "baseName": "language_tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logo_url",
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
            "name": "timeZone",
            "baseName": "time_zone",
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
    return GetBusinessProfileResponse;
}());
exports.GetBusinessProfileResponse = GetBusinessProfileResponse;
//# sourceMappingURL=GetBusinessProfileResponse.js.map