"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAutomationIdsResponse = void 0;
var ListAutomationIdsResponse = (function () {
    function ListAutomationIdsResponse() {
    }
    ListAutomationIdsResponse.getAttributeTypeMap = function () {
        return ListAutomationIdsResponse.attributeTypeMap;
    };
    ListAutomationIdsResponse.discriminator = undefined;
    ListAutomationIdsResponse.mapping = undefined;
    ListAutomationIdsResponse.attributeTypeMap = [
        {
            "name": "automationIds",
            "baseName": "automation_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "lockedAutomationIds",
            "baseName": "locked_automation_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ListAutomationIdsResponse;
}());
exports.ListAutomationIdsResponse = ListAutomationIdsResponse;
//# sourceMappingURL=ListAutomationIdsResponse.js.map