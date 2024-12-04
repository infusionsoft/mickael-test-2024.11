"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsResponse = void 0;
var ListTagsResponse = (function () {
    function ListTagsResponse() {
    }
    ListTagsResponse.getAttributeTypeMap = function () {
        return ListTagsResponse.attributeTypeMap;
    };
    ListTagsResponse.discriminator = undefined;
    ListTagsResponse.mapping = undefined;
    ListTagsResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>",
            "format": ""
        }
    ];
    return ListTagsResponse;
}());
exports.ListTagsResponse = ListTagsResponse;
//# sourceMappingURL=ListTagsResponse.js.map