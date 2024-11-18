"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAutomationCategoryResponse = void 0;
var ListAutomationCategoryResponse = (function () {
    function ListAutomationCategoryResponse() {
    }
    ListAutomationCategoryResponse.getAttributeTypeMap = function () {
        return ListAutomationCategoryResponse.attributeTypeMap;
    };
    ListAutomationCategoryResponse.discriminator = undefined;
    ListAutomationCategoryResponse.mapping = undefined;
    ListAutomationCategoryResponse.attributeTypeMap = [
        {
            "name": "automationCategories",
            "baseName": "automation_categories",
            "type": "Array<AutomationCategory>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListAutomationCategoryResponse;
}());
exports.ListAutomationCategoryResponse = ListAutomationCategoryResponse;
//# sourceMappingURL=ListAutomationCategoryResponse.js.map