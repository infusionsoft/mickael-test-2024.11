"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRestOrderItemRequestProductTypeEnum = exports.CreateRestOrderItemRequest = void 0;
var CreateRestOrderItemRequest = (function () {
    function CreateRestOrderItemRequest() {
    }
    CreateRestOrderItemRequest.getAttributeTypeMap = function () {
        return CreateRestOrderItemRequest.attributeTypeMap;
    };
    CreateRestOrderItemRequest.discriminator = undefined;
    CreateRestOrderItemRequest.mapping = undefined;
    CreateRestOrderItemRequest.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
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
            "name": "productType",
            "baseName": "product_type",
            "type": "CreateRestOrderItemRequestProductTypeEnum",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        }
    ];
    return CreateRestOrderItemRequest;
}());
exports.CreateRestOrderItemRequest = CreateRestOrderItemRequest;
var CreateRestOrderItemRequestProductTypeEnum;
(function (CreateRestOrderItemRequestProductTypeEnum) {
    CreateRestOrderItemRequestProductTypeEnum["Product"] = "PRODUCT";
    CreateRestOrderItemRequestProductTypeEnum["Digital"] = "DIGITAL";
})(CreateRestOrderItemRequestProductTypeEnum = exports.CreateRestOrderItemRequestProductTypeEnum || (exports.CreateRestOrderItemRequestProductTypeEnum = {}));
//# sourceMappingURL=CreateRestOrderItemRequest.js.map