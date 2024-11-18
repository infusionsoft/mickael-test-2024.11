"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskResponseTypeEnum = exports.UpdateTaskResponsePriorityEnum = exports.UpdateTaskResponse = void 0;
var UpdateTaskResponse = (function () {
    function UpdateTaskResponse() {
    }
    UpdateTaskResponse.getAttributeTypeMap = function () {
        return UpdateTaskResponse.attributeTypeMap;
    };
    UpdateTaskResponse.discriminator = undefined;
    UpdateTaskResponse.mapping = undefined;
    UpdateTaskResponse.attributeTypeMap = [
        {
            "name": "assignedToUserId",
            "baseName": "assigned_to_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "completed",
            "baseName": "completed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "completionTime",
            "baseName": "completion_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdByUserId",
            "baseName": "created_by_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "dueTime",
            "baseName": "due_time",
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
            "name": "modificationTime",
            "baseName": "modification_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "UpdateTaskResponsePriorityEnum",
            "format": ""
        },
        {
            "name": "remindTimeMins",
            "baseName": "remind_time_mins",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpdateTaskResponseTypeEnum",
            "format": ""
        }
    ];
    return UpdateTaskResponse;
}());
exports.UpdateTaskResponse = UpdateTaskResponse;
var UpdateTaskResponsePriorityEnum;
(function (UpdateTaskResponsePriorityEnum) {
    UpdateTaskResponsePriorityEnum["Critical"] = "CRITICAL";
    UpdateTaskResponsePriorityEnum["Essential"] = "ESSENTIAL";
    UpdateTaskResponsePriorityEnum["Nonessential"] = "NONESSENTIAL";
})(UpdateTaskResponsePriorityEnum = exports.UpdateTaskResponsePriorityEnum || (exports.UpdateTaskResponsePriorityEnum = {}));
var UpdateTaskResponseTypeEnum;
(function (UpdateTaskResponseTypeEnum) {
    UpdateTaskResponseTypeEnum["Email"] = "EMAIL";
    UpdateTaskResponseTypeEnum["Call"] = "CALL";
    UpdateTaskResponseTypeEnum["Appointment"] = "APPOINTMENT";
    UpdateTaskResponseTypeEnum["Fax"] = "FAX";
    UpdateTaskResponseTypeEnum["Letter"] = "LETTER";
    UpdateTaskResponseTypeEnum["Other"] = "OTHER";
})(UpdateTaskResponseTypeEnum = exports.UpdateTaskResponseTypeEnum || (exports.UpdateTaskResponseTypeEnum = {}));
//# sourceMappingURL=UpdateTaskResponse.js.map