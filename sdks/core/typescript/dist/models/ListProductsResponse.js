"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsResponse = void 0;
var ListProductsResponse = (function () {
    function ListProductsResponse() {
    }
    ListProductsResponse.getAttributeTypeMap = function () {
        return ListProductsResponse.attributeTypeMap;
    };
    ListProductsResponse.discriminator = undefined;
    ListProductsResponse.mapping = undefined;
    ListProductsResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<RestProduct>",
            "format": ""
        }
    ];
    return ListProductsResponse;
}());
exports.ListProductsResponse = ListProductsResponse;
//# sourceMappingURL=ListProductsResponse.js.map