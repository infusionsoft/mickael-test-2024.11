"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCompany = void 0;
var ApplicationCompany = (function () {
    function ApplicationCompany() {
    }
    ApplicationCompany.getAttributeTypeMap = function () {
        return ApplicationCompany.attributeTypeMap;
    };
    ApplicationCompany.discriminator = undefined;
    ApplicationCompany.mapping = undefined;
    ApplicationCompany.attributeTypeMap = [
        {
            "name": "callerIdNumber",
            "baseName": "caller_id_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
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
            "name": "phoneExt",
            "baseName": "phone_ext",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress1",
            "baseName": "street_address_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "streetAddress2",
            "baseName": "street_address_2",
            "type": "string",
            "format": ""
        },
        {
            "name": "webLogoUrl",
            "baseName": "web_logo_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationCompany;
}());
exports.ApplicationCompany = ApplicationCompany;
//# sourceMappingURL=ApplicationCompany.js.map