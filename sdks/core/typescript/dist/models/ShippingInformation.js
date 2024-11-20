"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingInformation = void 0;
var ShippingInformation = (function () {
    function ShippingInformation() {
    }
    ShippingInformation.getAttributeTypeMap = function () {
        return ShippingInformation.attributeTypeMap;
    };
    ShippingInformation.discriminator = undefined;
    ShippingInformation.mapping = undefined;
    ShippingInformation.attributeTypeMap = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<Address>",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "BasicCompany",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
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
            "name": "invoiceToCompany",
            "baseName": "invoice_to_company",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>",
            "format": ""
        }
    ];
    return ShippingInformation;
}());
exports.ShippingInformation = ShippingInformation;
//# sourceMappingURL=ShippingInformation.js.map