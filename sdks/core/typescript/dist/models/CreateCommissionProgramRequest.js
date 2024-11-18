"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommissionProgramRequest = void 0;
var CreateCommissionProgramRequest = (function () {
    function CreateCommissionProgramRequest() {
    }
    CreateCommissionProgramRequest.getAttributeTypeMap = function () {
        return CreateCommissionProgramRequest.attributeTypeMap;
    };
    CreateCommissionProgramRequest.discriminator = undefined;
    CreateCommissionProgramRequest.mapping = undefined;
    CreateCommissionProgramRequest.attributeTypeMap = [
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
    return CreateCommissionProgramRequest;
}());
exports.CreateCommissionProgramRequest = CreateCommissionProgramRequest;
//# sourceMappingURL=CreateCommissionProgramRequest.js.map