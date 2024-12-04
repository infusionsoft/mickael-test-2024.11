"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchCompanyRequest = void 0;
var PatchCompanyRequest = (function () {
    function PatchCompanyRequest() {
    }
    PatchCompanyRequest.getAttributeTypeMap = function () {
        return PatchCompanyRequest.attributeTypeMap;
    };
    PatchCompanyRequest.discriminator = undefined;
    PatchCompanyRequest.mapping = undefined;
    PatchCompanyRequest.attributeTypeMap = [
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
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValue>",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "EmailAddress",
            "format": ""
        },
        {
            "name": "faxNumber",
            "baseName": "fax_number",
            "type": "FaxNumber",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "PhoneNumber",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return PatchCompanyRequest;
}());
exports.PatchCompanyRequest = PatchCompanyRequest;
//# sourceMappingURL=PatchCompanyRequest.js.map