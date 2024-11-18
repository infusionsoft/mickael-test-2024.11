"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserRequestV2 = void 0;
var PatchUserRequestV2 = (function () {
    function PatchUserRequestV2() {
    }
    PatchUserRequestV2.getAttributeTypeMap = function () {
        return PatchUserRequestV2.attributeTypeMap;
    };
    PatchUserRequestV2.discriminator = undefined;
    PatchUserRequestV2.mapping = undefined;
    PatchUserRequestV2.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "EmailAddressRequest",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "faxNumbers",
            "baseName": "fax_numbers",
            "type": "Array<FaxNumber>",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
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
    return PatchUserRequestV2;
}());
exports.PatchUserRequestV2 = PatchUserRequestV2;
//# sourceMappingURL=PatchUserRequestV2.js.map