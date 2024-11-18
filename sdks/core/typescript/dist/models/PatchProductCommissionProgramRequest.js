"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchProductCommissionProgramRequest = void 0;
var PatchProductCommissionProgramRequest = (function () {
    function PatchProductCommissionProgramRequest() {
    }
    PatchProductCommissionProgramRequest.getAttributeTypeMap = function () {
        return PatchProductCommissionProgramRequest.attributeTypeMap;
    };
    PatchProductCommissionProgramRequest.discriminator = undefined;
    PatchProductCommissionProgramRequest.mapping = undefined;
    PatchProductCommissionProgramRequest.attributeTypeMap = [
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
    return PatchProductCommissionProgramRequest;
}());
exports.PatchProductCommissionProgramRequest = PatchProductCommissionProgramRequest;
//# sourceMappingURL=PatchProductCommissionProgramRequest.js.map