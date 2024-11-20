"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveAutomationCategoryRequest = void 0;
var SaveAutomationCategoryRequest = (function () {
    function SaveAutomationCategoryRequest() {
    }
    SaveAutomationCategoryRequest.getAttributeTypeMap = function () {
        return SaveAutomationCategoryRequest.attributeTypeMap;
    };
    SaveAutomationCategoryRequest.discriminator = undefined;
    SaveAutomationCategoryRequest.mapping = undefined;
    SaveAutomationCategoryRequest.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return SaveAutomationCategoryRequest;
}());
exports.SaveAutomationCategoryRequest = SaveAutomationCategoryRequest;
//# sourceMappingURL=SaveAutomationCategoryRequest.js.map