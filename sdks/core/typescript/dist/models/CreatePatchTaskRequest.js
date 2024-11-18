"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatchTaskRequestTypeEnum = exports.CreatePatchTaskRequestPriorityEnum = exports.CreatePatchTaskRequest = void 0;
var CreatePatchTaskRequest = (function () {
    function CreatePatchTaskRequest() {
    }
    CreatePatchTaskRequest.getAttributeTypeMap = function () {
        return CreatePatchTaskRequest.attributeTypeMap;
    };
    CreatePatchTaskRequest.discriminator = undefined;
    CreatePatchTaskRequest.mapping = undefined;
    CreatePatchTaskRequest.attributeTypeMap = [
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
            "type": "CreatePatchTaskRequestPriorityEnum",
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
            "type": "CreatePatchTaskRequestTypeEnum",
            "format": ""
        }
    ];
    return CreatePatchTaskRequest;
}());
exports.CreatePatchTaskRequest = CreatePatchTaskRequest;
var CreatePatchTaskRequestPriorityEnum;
(function (CreatePatchTaskRequestPriorityEnum) {
    CreatePatchTaskRequestPriorityEnum["Critical"] = "CRITICAL";
    CreatePatchTaskRequestPriorityEnum["Essential"] = "ESSENTIAL";
    CreatePatchTaskRequestPriorityEnum["Nonessential"] = "NONESSENTIAL";
})(CreatePatchTaskRequestPriorityEnum = exports.CreatePatchTaskRequestPriorityEnum || (exports.CreatePatchTaskRequestPriorityEnum = {}));
var CreatePatchTaskRequestTypeEnum;
(function (CreatePatchTaskRequestTypeEnum) {
    CreatePatchTaskRequestTypeEnum["Email"] = "EMAIL";
    CreatePatchTaskRequestTypeEnum["Call"] = "CALL";
    CreatePatchTaskRequestTypeEnum["Appointment"] = "APPOINTMENT";
    CreatePatchTaskRequestTypeEnum["Fax"] = "FAX";
    CreatePatchTaskRequestTypeEnum["Letter"] = "LETTER";
    CreatePatchTaskRequestTypeEnum["Other"] = "OTHER";
})(CreatePatchTaskRequestTypeEnum = exports.CreatePatchTaskRequestTypeEnum || (exports.CreatePatchTaskRequestTypeEnum = {}));
//# sourceMappingURL=CreatePatchTaskRequest.js.map