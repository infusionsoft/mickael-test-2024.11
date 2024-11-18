"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressInformation = void 0;
var AddressInformation = (function () {
    function AddressInformation() {
    }
    AddressInformation.getAttributeTypeMap = function () {
        return AddressInformation.attributeTypeMap;
    };
    AddressInformation.discriminator = undefined;
    AddressInformation.mapping = undefined;
    AddressInformation.attributeTypeMap = [
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isInvoiceToCompany",
            "baseName": "is_invoice_to_company",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
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
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipFour",
            "baseName": "zip_four",
            "type": "string",
            "format": ""
        }
    ];
    return AddressInformation;
}());
exports.AddressInformation = AddressInformation;
//# sourceMappingURL=AddressInformation.js.map