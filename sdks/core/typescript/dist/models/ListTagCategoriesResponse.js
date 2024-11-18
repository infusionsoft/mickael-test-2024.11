"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagCategoriesResponse = void 0;
var ListTagCategoriesResponse = (function () {
    function ListTagCategoriesResponse() {
    }
    ListTagCategoriesResponse.getAttributeTypeMap = function () {
        return ListTagCategoriesResponse.attributeTypeMap;
    };
    ListTagCategoriesResponse.discriminator = undefined;
    ListTagCategoriesResponse.mapping = undefined;
    ListTagCategoriesResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagCategories",
            "baseName": "tag_categories",
            "type": "Array<Tag>",
            "format": ""
        }
    ];
    return ListTagCategoriesResponse;
}());
exports.ListTagCategoriesResponse = ListTagCategoriesResponse;
//# sourceMappingURL=ListTagCategoriesResponse.js.map