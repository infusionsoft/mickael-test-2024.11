"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var Country = (function () {
    function Country() {
    }
    Country.getAttributeTypeMap = function () {
        return Country.attributeTypeMap;
    };
    Country.discriminator = undefined;
    Country.mapping = undefined;
    Country.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=Country.js.map