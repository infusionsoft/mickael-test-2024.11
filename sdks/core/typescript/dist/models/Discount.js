"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountDiscountMethodEnum = exports.Discount = void 0;
var Discount = (function () {
    function Discount() {
    }
    Discount.getAttributeTypeMap = function () {
        return Discount.attributeTypeMap;
    };
    Discount.discriminator = undefined;
    Discount.mapping = undefined;
    Discount.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "discountMethod",
            "baseName": "discount_method",
            "type": "DiscountDiscountMethodEnum",
            "format": ""
        },
        {
            "name": "lineItemId",
            "baseName": "line_item_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "specialItemId",
            "baseName": "special_item_id",
            "type": "string",
            "format": ""
        }
    ];
    return Discount;
}());
exports.Discount = Discount;
var DiscountDiscountMethodEnum;
(function (DiscountDiscountMethodEnum) {
    DiscountDiscountMethodEnum["Amount"] = "AMOUNT";
    DiscountDiscountMethodEnum["Percent"] = "PERCENT";
})(DiscountDiscountMethodEnum = exports.DiscountDiscountMethodEnum || (exports.DiscountDiscountMethodEnum = {}));
//# sourceMappingURL=Discount.js.map