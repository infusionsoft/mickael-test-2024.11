"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomationCategoryRequest = void 0;
var UpdateAutomationCategoryRequest = (function () {
    function UpdateAutomationCategoryRequest() {
    }
    UpdateAutomationCategoryRequest.getAttributeTypeMap = function () {
        return UpdateAutomationCategoryRequest.attributeTypeMap;
    };
    UpdateAutomationCategoryRequest.discriminator = undefined;
    UpdateAutomationCategoryRequest.mapping = undefined;
    UpdateAutomationCategoryRequest.attributeTypeMap = [
        {
            "name": "applyCategory",
            "baseName": "apply_category",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "automationIds",
            "baseName": "automation_ids",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "categoryIds",
            "baseName": "category_ids",
            "type": "Array<number>",
            "format": "int64"
        }
    ];
    return UpdateAutomationCategoryRequest;
}());
exports.UpdateAutomationCategoryRequest = UpdateAutomationCategoryRequest;
//# sourceMappingURL=UpdateAutomationCategoryRequest.js.map