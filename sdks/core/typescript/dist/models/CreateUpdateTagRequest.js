"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateTagRequest = void 0;
var CreateUpdateTagRequest = (function () {
    function CreateUpdateTagRequest() {
    }
    CreateUpdateTagRequest.getAttributeTypeMap = function () {
        return CreateUpdateTagRequest.attributeTypeMap;
    };
    CreateUpdateTagRequest.discriminator = undefined;
    CreateUpdateTagRequest.mapping = undefined;
    CreateUpdateTagRequest.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryReference",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return CreateUpdateTagRequest;
}());
exports.CreateUpdateTagRequest = CreateUpdateTagRequest;
//# sourceMappingURL=CreateUpdateTagRequest.js.map