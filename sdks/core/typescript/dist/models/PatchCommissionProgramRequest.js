"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchCommissionProgramRequest = void 0;
var PatchCommissionProgramRequest = (function () {
    function PatchCommissionProgramRequest() {
    }
    PatchCommissionProgramRequest.getAttributeTypeMap = function () {
        return PatchCommissionProgramRequest.attributeTypeMap;
    };
    PatchCommissionProgramRequest.discriminator = undefined;
    PatchCommissionProgramRequest.mapping = undefined;
    PatchCommissionProgramRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        }
    ];
    return PatchCommissionProgramRequest;
}());
exports.PatchCommissionProgramRequest = PatchCommissionProgramRequest;
//# sourceMappingURL=PatchCommissionProgramRequest.js.map