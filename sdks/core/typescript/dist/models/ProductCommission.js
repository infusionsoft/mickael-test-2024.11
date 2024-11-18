"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCommission = void 0;
var ProductCommission = (function () {
    function ProductCommission() {
    }
    ProductCommission.getAttributeTypeMap = function () {
        return ProductCommission.attributeTypeMap;
    };
    ProductCommission.discriminator = undefined;
    ProductCommission.mapping = undefined;
    ProductCommission.attributeTypeMap = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productPrice",
            "baseName": "product_price",
            "type": "number",
            "format": "double"
        }
    ];
    return ProductCommission;
}());
exports.ProductCommission = ProductCommission;
//# sourceMappingURL=ProductCommission.js.map