"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyRequest = void 0;
var CreateCompanyRequest = (function () {
    function CreateCompanyRequest() {
    }
    CreateCompanyRequest.getAttributeTypeMap = function () {
        return CreateCompanyRequest.attributeTypeMap;
    };
    CreateCompanyRequest.discriminator = undefined;
    CreateCompanyRequest.mapping = undefined;
    CreateCompanyRequest.attributeTypeMap = [
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
    return CreateCompanyRequest;
}());
exports.CreateCompanyRequest = CreateCompanyRequest;
//# sourceMappingURL=CreateCompanyRequest.js.map