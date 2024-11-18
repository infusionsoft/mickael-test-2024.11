"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationLockStatus = void 0;
var AutomationLockStatus = (function () {
    function AutomationLockStatus() {
    }
    AutomationLockStatus.getAttributeTypeMap = function () {
        return AutomationLockStatus.attributeTypeMap;
    };
    AutomationLockStatus.discriminator = undefined;
    AutomationLockStatus.mapping = undefined;
    AutomationLockStatus.attributeTypeMap = [
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userFirstname",
            "baseName": "user_firstname",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "user_name",
            "type": "string",
            "format": ""
        }
    ];
    return AutomationLockStatus;
}());
exports.AutomationLockStatus = AutomationLockStatus;
//# sourceMappingURL=AutomationLockStatus.js.map