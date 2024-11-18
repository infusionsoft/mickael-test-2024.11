"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaxNumberFieldEnum = exports.FaxNumber = void 0;
var FaxNumber = (function () {
    function FaxNumber() {
    }
    FaxNumber.getAttributeTypeMap = function () {
        return FaxNumber.attributeTypeMap;
    };
    FaxNumber.discriminator = undefined;
    FaxNumber.mapping = undefined;
    FaxNumber.attributeTypeMap = [
        {
            "name": "field",
            "baseName": "field",
            "type": "FaxNumberFieldEnum",
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
    return FaxNumber;
}());
exports.FaxNumber = FaxNumber;
var FaxNumberFieldEnum;
(function (FaxNumberFieldEnum) {
    FaxNumberFieldEnum["FaxNumberFieldUnspecified"] = "FAX_NUMBER_FIELD_UNSPECIFIED";
    FaxNumberFieldEnum["Fax1"] = "FAX1";
    FaxNumberFieldEnum["Fax2"] = "FAX2";
})(FaxNumberFieldEnum = exports.FaxNumberFieldEnum || (exports.FaxNumberFieldEnum = {}));
//# sourceMappingURL=FaxNumber.js.map