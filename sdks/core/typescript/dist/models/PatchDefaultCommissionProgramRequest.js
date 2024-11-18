"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDefaultCommissionProgramRequest = void 0;
var PatchDefaultCommissionProgramRequest = (function () {
    function PatchDefaultCommissionProgramRequest() {
    }
    PatchDefaultCommissionProgramRequest.getAttributeTypeMap = function () {
        return PatchDefaultCommissionProgramRequest.attributeTypeMap;
    };
    PatchDefaultCommissionProgramRequest.discriminator = undefined;
    PatchDefaultCommissionProgramRequest.mapping = undefined;
    PatchDefaultCommissionProgramRequest.attributeTypeMap = [
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
        }
    ];
    return PatchDefaultCommissionProgramRequest;
}());
exports.PatchDefaultCommissionProgramRequest = PatchDefaultCommissionProgramRequest;
//# sourceMappingURL=PatchDefaultCommissionProgramRequest.js.map