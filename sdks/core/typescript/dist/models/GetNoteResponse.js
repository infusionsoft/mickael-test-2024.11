"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNoteResponse = void 0;
var GetNoteResponse = (function () {
    function GetNoteResponse() {
    }
    GetNoteResponse.getAttributeTypeMap = function () {
        return GetNoteResponse.attributeTypeMap;
    };
    GetNoteResponse.discriminator = undefined;
    GetNoteResponse.mapping = undefined;
    GetNoteResponse.attributeTypeMap = [
        {
            "name": "assignedToUser",
            "baseName": "assigned_to_user",
            "type": "BasicUser",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdatedByUserId",
            "baseName": "last_updated_by_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
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
            "type": "string",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string",
            "format": ""
        }
    ];
    return GetNoteResponse;
}());
exports.GetNoteResponse = GetNoteResponse;
//# sourceMappingURL=GetNoteResponse.js.map