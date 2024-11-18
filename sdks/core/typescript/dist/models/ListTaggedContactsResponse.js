"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTaggedContactsResponse = void 0;
var ListTaggedContactsResponse = (function () {
    function ListTaggedContactsResponse() {
    }
    ListTaggedContactsResponse.getAttributeTypeMap = function () {
        return ListTaggedContactsResponse.attributeTypeMap;
    };
    ListTaggedContactsResponse.discriminator = undefined;
    ListTaggedContactsResponse.mapping = undefined;
    ListTaggedContactsResponse.attributeTypeMap = [
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<BasicContact>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListTaggedContactsResponse;
}());
exports.ListTaggedContactsResponse = ListTaggedContactsResponse;
//# sourceMappingURL=ListTaggedContactsResponse.js.map