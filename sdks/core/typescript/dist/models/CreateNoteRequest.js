"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteRequest = void 0;
var CreateNoteRequest = (function () {
    function CreateNoteRequest() {
    }
    CreateNoteRequest.getAttributeTypeMap = function () {
        return CreateNoteRequest.attributeTypeMap;
    };
    CreateNoteRequest.discriminator = undefined;
    CreateNoteRequest.mapping = undefined;
    CreateNoteRequest.attributeTypeMap = [
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
    return CreateNoteRequest;
}());
exports.CreateNoteRequest = CreateNoteRequest;
//# sourceMappingURL=CreateNoteRequest.js.map