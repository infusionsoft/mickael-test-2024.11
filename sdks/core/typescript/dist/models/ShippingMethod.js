"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethod = void 0;
var ShippingMethod = (function () {
    function ShippingMethod() {
    }
    ShippingMethod.getAttributeTypeMap = function () {
        return ShippingMethod.attributeTypeMap;
    };
    ShippingMethod.discriminator = undefined;
    ShippingMethod.mapping = undefined;
    ShippingMethod.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
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
            "name": "international",
            "baseName": "international",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "any",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
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
    return ShippingMethod;
}());
exports.ShippingMethod = ShippingMethod;
//# sourceMappingURL=ShippingMethod.js.map