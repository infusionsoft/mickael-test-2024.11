"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestProduct = void 0;
var RestProduct = (function () {
    function RestProduct() {
    }
    RestProduct.getAttributeTypeMap = function () {
        return RestProduct.attributeTypeMap;
    };
    RestProduct.discriminator = undefined;
    RestProduct.mapping = undefined;
    RestProduct.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "double"
        }
    ];
    return RestProduct;
}());
exports.RestProduct = RestProduct;
//# sourceMappingURL=RestProduct.js.map