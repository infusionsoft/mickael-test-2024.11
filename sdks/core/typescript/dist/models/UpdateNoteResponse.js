"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNoteResponse = void 0;
var UpdateNoteResponse = (function () {
    function UpdateNoteResponse() {
    }
    UpdateNoteResponse.getAttributeTypeMap = function () {
        return UpdateNoteResponse.attributeTypeMap;
    };
    UpdateNoteResponse.discriminator = undefined;
    UpdateNoteResponse.mapping = undefined;
    UpdateNoteResponse.attributeTypeMap = [
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
    return UpdateNoteResponse;
}());
exports.UpdateNoteResponse = UpdateNoteResponse;
//# sourceMappingURL=UpdateNoteResponse.js.map