"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provinces = void 0;
var Provinces = (function () {
    function Provinces() {
    }
    Provinces.getAttributeTypeMap = function () {
        return Provinces.attributeTypeMap;
    };
    Provinces.discriminator = undefined;
    Provinces.mapping = undefined;
    Provinces.attributeTypeMap = [
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
    return Provinces;
}());
exports.Provinces = Provinces;
//# sourceMappingURL=Provinces.js.map