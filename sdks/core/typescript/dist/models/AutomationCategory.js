"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationCategory = void 0;
var AutomationCategory = (function () {
    function AutomationCategory() {
    }
    AutomationCategory.getAttributeTypeMap = function () {
        return AutomationCategory.attributeTypeMap;
    };
    AutomationCategory.discriminator = undefined;
    AutomationCategory.mapping = undefined;
    AutomationCategory.attributeTypeMap = [
        {
            "name": "automationCount",
            "baseName": "automation_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
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
    return AutomationCategory;
}());
exports.AutomationCategory = AutomationCategory;
//# sourceMappingURL=AutomationCategory.js.map