"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDefaultCommissionProgramRequest = void 0;
var CreateDefaultCommissionProgramRequest = (function () {
    function CreateDefaultCommissionProgramRequest() {
    }
    CreateDefaultCommissionProgramRequest.getAttributeTypeMap = function () {
        return CreateDefaultCommissionProgramRequest.attributeTypeMap;
    };
    CreateDefaultCommissionProgramRequest.discriminator = undefined;
    CreateDefaultCommissionProgramRequest.mapping = undefined;
    CreateDefaultCommissionProgramRequest.attributeTypeMap = [
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
    return CreateDefaultCommissionProgramRequest;
}());
exports.CreateDefaultCommissionProgramRequest = CreateDefaultCommissionProgramRequest;
//# sourceMappingURL=CreateDefaultCommissionProgramRequest.js.map