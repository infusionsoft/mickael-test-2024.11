"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCommissionProgramRequest = void 0;
var CreateProductCommissionProgramRequest = (function () {
    function CreateProductCommissionProgramRequest() {
    }
    CreateProductCommissionProgramRequest.getAttributeTypeMap = function () {
        return CreateProductCommissionProgramRequest.attributeTypeMap;
    };
    CreateProductCommissionProgramRequest.discriminator = undefined;
    CreateProductCommissionProgramRequest.mapping = undefined;
    CreateProductCommissionProgramRequest.attributeTypeMap = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        }
    ];
    return CreateProductCommissionProgramRequest;
}());
exports.CreateProductCommissionProgramRequest = CreateProductCommissionProgramRequest;
//# sourceMappingURL=CreateProductCommissionProgramRequest.js.map