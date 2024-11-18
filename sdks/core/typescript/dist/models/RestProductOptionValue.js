"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestProductOptionValue = void 0;
var RestProductOptionValue = (function () {
    function RestProductOptionValue() {
    }
    RestProductOptionValue.getAttributeTypeMap = function () {
        return RestProductOptionValue.attributeTypeMap;
    };
    RestProductOptionValue.discriminator = undefined;
    RestProductOptionValue.mapping = undefined;
    RestProductOptionValue.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "priceAdjustment",
            "baseName": "price_adjustment",
            "type": "number",
            "format": "double"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        }
    ];
    return RestProductOptionValue;
}());
exports.RestProductOptionValue = RestProductOptionValue;
//# sourceMappingURL=RestProductOptionValue.js.map