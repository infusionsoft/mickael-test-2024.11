"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskRequestTypeEnum = exports.CreateTaskRequestPriorityEnum = exports.CreateTaskRequest = void 0;
var CreateTaskRequest = (function () {
    function CreateTaskRequest() {
    }
    CreateTaskRequest.getAttributeTypeMap = function () {
        return CreateTaskRequest.attributeTypeMap;
    };
    CreateTaskRequest.discriminator = undefined;
    CreateTaskRequest.mapping = undefined;
    CreateTaskRequest.attributeTypeMap = [
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
            "name": "priority",
            "baseName": "priority",
            "type": "CreateTaskRequestPriorityEnum",
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
            "type": "CreateTaskRequestTypeEnum",
            "format": ""
        }
    ];
    return CreateTaskRequest;
}());
exports.CreateTaskRequest = CreateTaskRequest;
var CreateTaskRequestPriorityEnum;
(function (CreateTaskRequestPriorityEnum) {
    CreateTaskRequestPriorityEnum["Critical"] = "CRITICAL";
    CreateTaskRequestPriorityEnum["Essential"] = "ESSENTIAL";
    CreateTaskRequestPriorityEnum["Nonessential"] = "NONESSENTIAL";
})(CreateTaskRequestPriorityEnum = exports.CreateTaskRequestPriorityEnum || (exports.CreateTaskRequestPriorityEnum = {}));
var CreateTaskRequestTypeEnum;
(function (CreateTaskRequestTypeEnum) {
    CreateTaskRequestTypeEnum["Email"] = "EMAIL";
    CreateTaskRequestTypeEnum["Call"] = "CALL";
    CreateTaskRequestTypeEnum["Appointment"] = "APPOINTMENT";
    CreateTaskRequestTypeEnum["Fax"] = "FAX";
    CreateTaskRequestTypeEnum["Letter"] = "LETTER";
    CreateTaskRequestTypeEnum["Other"] = "OTHER";
})(CreateTaskRequestTypeEnum = exports.CreateTaskRequestTypeEnum || (exports.CreateTaskRequestTypeEnum = {}));
//# sourceMappingURL=CreateTaskRequest.js.map