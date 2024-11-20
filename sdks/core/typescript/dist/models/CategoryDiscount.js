"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDiscount = void 0;
var CategoryDiscount = (function () {
    function CategoryDiscount() {
    }
    CategoryDiscount.getAttributeTypeMap = function () {
        return CategoryDiscount.attributeTypeMap;
    };
    CategoryDiscount.discriminator = undefined;
    CategoryDiscount.mapping = undefined;
    CategoryDiscount.attributeTypeMap = [
        {
            "name": "applyToCommissions",
            "baseName": "apply_to_commissions",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "Array<Criteria>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "discountPercent",
            "baseName": "discount_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCategories",
            "baseName": "product_categories",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return CategoryDiscount;
}());
exports.CategoryDiscount = CategoryDiscount;
//# sourceMappingURL=CategoryDiscount.js.map