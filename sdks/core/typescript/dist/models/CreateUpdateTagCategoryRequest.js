"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateTagCategoryRequest = void 0;
var CreateUpdateTagCategoryRequest = (function () {
    function CreateUpdateTagCategoryRequest() {
    }
    CreateUpdateTagCategoryRequest.getAttributeTypeMap = function () {
        return CreateUpdateTagCategoryRequest.attributeTypeMap;
    };
    CreateUpdateTagCategoryRequest.discriminator = undefined;
    CreateUpdateTagCategoryRequest.mapping = undefined;
    CreateUpdateTagCategoryRequest.attributeTypeMap = [
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
    return CreateUpdateTagCategoryRequest;
}());
exports.CreateUpdateTagCategoryRequest = CreateUpdateTagCategoryRequest;
//# sourceMappingURL=CreateUpdateTagCategoryRequest.js.map