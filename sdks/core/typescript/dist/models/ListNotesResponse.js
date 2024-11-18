"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNotesResponse = void 0;
var ListNotesResponse = (function () {
    function ListNotesResponse() {
    }
    ListNotesResponse.getAttributeTypeMap = function () {
        return ListNotesResponse.attributeTypeMap;
    };
    ListNotesResponse.discriminator = undefined;
    ListNotesResponse.mapping = undefined;
    ListNotesResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "Array<Note>",
            "format": ""
        }
    ];
    return ListNotesResponse;
}());
exports.ListNotesResponse = ListNotesResponse;
//# sourceMappingURL=ListNotesResponse.js.map