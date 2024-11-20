"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemTax = void 0;
var OrderItemTax = (function () {
    function OrderItemTax() {
    }
    OrderItemTax.getAttributeTypeMap = function () {
        return OrderItemTax.attributeTypeMap;
    };
    OrderItemTax.discriminator = undefined;
    OrderItemTax.mapping = undefined;
    OrderItemTax.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderItemId",
            "baseName": "orderItemId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "taxTemplateId",
            "baseName": "taxTemplateId",
            "type": "number",
            "format": "int64"
        }
    ];
    return OrderItemTax;
}());
exports.OrderItemTax = OrderItemTax;
//# sourceMappingURL=OrderItemTax.js.map