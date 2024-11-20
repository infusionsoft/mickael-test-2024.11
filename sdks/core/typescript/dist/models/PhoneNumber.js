"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberFieldEnum = exports.PhoneNumber = void 0;
var PhoneNumber = (function () {
    function PhoneNumber() {
    }
    PhoneNumber.getAttributeTypeMap = function () {
        return PhoneNumber.attributeTypeMap;
    };
    PhoneNumber.discriminator = undefined;
    PhoneNumber.mapping = undefined;
    PhoneNumber.attributeTypeMap = [
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "PhoneNumberFieldEnum",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
var PhoneNumberFieldEnum;
(function (PhoneNumberFieldEnum) {
    PhoneNumberFieldEnum["PhoneNumberFieldUnspecified"] = "PHONE_NUMBER_FIELD_UNSPECIFIED";
    PhoneNumberFieldEnum["Phone1"] = "PHONE1";
    PhoneNumberFieldEnum["Phone2"] = "PHONE2";
    PhoneNumberFieldEnum["Phone3"] = "PHONE3";
    PhoneNumberFieldEnum["Phone4"] = "PHONE4";
    PhoneNumberFieldEnum["Phone5"] = "PHONE5";
})(PhoneNumberFieldEnum = exports.PhoneNumberFieldEnum || (exports.PhoneNumberFieldEnum = {}));
//# sourceMappingURL=PhoneNumber.js.map