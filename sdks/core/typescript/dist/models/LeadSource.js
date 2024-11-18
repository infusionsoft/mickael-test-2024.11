"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSource = void 0;
var LeadSource = (function () {
    function LeadSource() {
    }
    LeadSource.getAttributeTypeMap = function () {
        return LeadSource.attributeTypeMap;
    };
    LeadSource.discriminator = undefined;
    LeadSource.mapping = undefined;
    LeadSource.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "LeadSourceCategory",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "end_time",
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
            "name": "medium",
            "baseName": "medium",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusIsActive",
            "baseName": "status_is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string",
            "format": ""
        }
    ];
    return LeadSource;
}());
exports.LeadSource = LeadSource;
//# sourceMappingURL=LeadSource.js.map