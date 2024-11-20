"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLeadSourceRequest = void 0;
var CreateLeadSourceRequest = (function () {
    function CreateLeadSourceRequest() {
    }
    CreateLeadSourceRequest.getAttributeTypeMap = function () {
        return CreateLeadSourceRequest.attributeTypeMap;
    };
    CreateLeadSourceRequest.discriminator = undefined;
    CreateLeadSourceRequest.mapping = undefined;
    CreateLeadSourceRequest.attributeTypeMap = [
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
    return CreateLeadSourceRequest;
}());
exports.CreateLeadSourceRequest = CreateLeadSourceRequest;
//# sourceMappingURL=CreateLeadSourceRequest.js.map