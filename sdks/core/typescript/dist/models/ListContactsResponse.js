"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContactsResponse = void 0;
var ListContactsResponse = (function () {
    function ListContactsResponse() {
    }
    ListContactsResponse.getAttributeTypeMap = function () {
        return ListContactsResponse.attributeTypeMap;
    };
    ListContactsResponse.discriminator = undefined;
    ListContactsResponse.mapping = undefined;
    ListContactsResponse.attributeTypeMap = [
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListContactsResponse;
}());
exports.ListContactsResponse = ListContactsResponse;
//# sourceMappingURL=ListContactsResponse.js.map