"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automation = void 0;
var Automation = (function () {
    function Automation() {
    }
    Automation.getAttributeTypeMap = function () {
        return Automation.attributeTypeMap;
    };
    Automation.discriminator = undefined;
    Automation.mapping = undefined;
    Automation.attributeTypeMap = [
        {
            "name": "activeContacts",
            "baseName": "active_contacts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "currentEditLockStatus",
            "baseName": "current_edit_lock_status",
            "type": "AutomationLockStatus",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "locked",
            "baseName": "locked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publishedBy",
            "baseName": "published_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "publishedDate",
            "baseName": "published_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publishedTimezone",
            "baseName": "published_timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }
    ];
    return Automation;
}());
exports.Automation = Automation;
//# sourceMappingURL=Automation.js.map