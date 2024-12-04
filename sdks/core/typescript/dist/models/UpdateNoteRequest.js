"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNoteRequest = void 0;
var UpdateNoteRequest = (function () {
    function UpdateNoteRequest() {
    }
    UpdateNoteRequest.getAttributeTypeMap = function () {
        return UpdateNoteRequest.attributeTypeMap;
    };
    UpdateNoteRequest.discriminator = undefined;
    UpdateNoteRequest.mapping = undefined;
    UpdateNoteRequest.attributeTypeMap = [
        {
            "name": "contactId",
            "baseName": "contact_id",
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
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return UpdateNoteRequest;
}());
exports.UpdateNoteRequest = UpdateNoteRequest;
//# sourceMappingURL=UpdateNoteRequest.js.map