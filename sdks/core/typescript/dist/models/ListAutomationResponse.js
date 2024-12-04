"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAutomationResponse = void 0;
var ListAutomationResponse = (function () {
    function ListAutomationResponse() {
    }
    ListAutomationResponse.getAttributeTypeMap = function () {
        return ListAutomationResponse.attributeTypeMap;
    };
    ListAutomationResponse.discriminator = undefined;
    ListAutomationResponse.mapping = undefined;
    ListAutomationResponse.attributeTypeMap = [
        {
            "name": "automationCount",
            "baseName": "automation_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "automations",
            "baseName": "automations",
            "type": "Array<Automation>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListAutomationResponse;
}());
exports.ListAutomationResponse = ListAutomationResponse;
//# sourceMappingURL=ListAutomationResponse.js.map