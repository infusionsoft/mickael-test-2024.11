"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContactLinksResponse = void 0;
var ListContactLinksResponse = (function () {
    function ListContactLinksResponse() {
    }
    ListContactLinksResponse.getAttributeTypeMap = function () {
        return ListContactLinksResponse.attributeTypeMap;
    };
    ListContactLinksResponse.discriminator = undefined;
    ListContactLinksResponse.mapping = undefined;
    ListContactLinksResponse.attributeTypeMap = [
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<ContactLink>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListContactLinksResponse;
}());
exports.ListContactLinksResponse = ListContactLinksResponse;
//# sourceMappingURL=ListContactLinksResponse.js.map