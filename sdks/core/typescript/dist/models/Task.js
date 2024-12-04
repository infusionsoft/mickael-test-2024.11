"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypeEnum = exports.TaskPriorityEnum = exports.Task = void 0;
var Task = (function () {
    function Task() {
    }
    Task.getAttributeTypeMap = function () {
        return Task.attributeTypeMap;
    };
    Task.discriminator = undefined;
    Task.mapping = undefined;
    Task.attributeTypeMap = [
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
            "type": "TaskPriorityEnum",
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
            "type": "TaskTypeEnum",
            "format": ""
        }
    ];
    return Task;
}());
exports.Task = Task;
var TaskPriorityEnum;
(function (TaskPriorityEnum) {
    TaskPriorityEnum["Critical"] = "CRITICAL";
    TaskPriorityEnum["Essential"] = "ESSENTIAL";
    TaskPriorityEnum["Nonessential"] = "NONESSENTIAL";
})(TaskPriorityEnum = exports.TaskPriorityEnum || (exports.TaskPriorityEnum = {}));
var TaskTypeEnum;
(function (TaskTypeEnum) {
    TaskTypeEnum["Email"] = "EMAIL";
    TaskTypeEnum["Call"] = "CALL";
    TaskTypeEnum["Appointment"] = "APPOINTMENT";
    TaskTypeEnum["Fax"] = "FAX";
    TaskTypeEnum["Letter"] = "LETTER";
    TaskTypeEnum["Other"] = "OTHER";
})(TaskTypeEnum = exports.TaskTypeEnum || (exports.TaskTypeEnum = {}));
//# sourceMappingURL=Task.js.map