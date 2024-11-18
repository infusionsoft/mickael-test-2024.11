"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFieldEnum = exports.Address = void 0;
var Address = (function () {
    function Address() {
    }
    Address.getAttributeTypeMap = function () {
        return Address.attributeTypeMap;
    };
    Address.discriminator = undefined;
    Address.mapping = undefined;
    Address.attributeTypeMap = [
        {
            "name": "country",
            "baseName": "country",
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
            "name": "field",
            "baseName": "field",
            "type": "AddressFieldEnum",
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
            "name": "postalCode",
            "baseName": "postal_code",
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
            "name": "regionCode",
            "baseName": "region_code",
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
    return Address;
}());
exports.Address = Address;
var AddressFieldEnum;
(function (AddressFieldEnum) {
    AddressFieldEnum["AddressFieldUnspecified"] = "ADDRESS_FIELD_UNSPECIFIED";
    AddressFieldEnum["Billing"] = "BILLING";
    AddressFieldEnum["Shipping"] = "SHIPPING";
    AddressFieldEnum["Other"] = "OTHER";
})(AddressFieldEnum = exports.AddressFieldEnum || (exports.AddressFieldEnum = {}));
//# sourceMappingURL=Address.js.map