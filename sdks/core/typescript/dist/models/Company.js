"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company = (function () {
    function Company() {
    }
    Company.getAttributeTypeMap = function () {
        return Company.attributeTypeMap;
    };
    Company.discriminator = undefined;
    Company.mapping = undefined;
    Company.attributeTypeMap = [
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
            "name": "createTime",
            "baseName": "create_time",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
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
            "name": "updateTime",
            "baseName": "update_time",
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
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=Company.js.map