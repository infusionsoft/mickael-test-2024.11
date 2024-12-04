"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBasicContactResponse = void 0;
var ListBasicContactResponse = (function () {
    function ListBasicContactResponse() {
    }
    ListBasicContactResponse.getAttributeTypeMap = function () {
        return ListBasicContactResponse.attributeTypeMap;
    };
    ListBasicContactResponse.discriminator = undefined;
    ListBasicContactResponse.mapping = undefined;
    ListBasicContactResponse.attributeTypeMap = [
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
    return ListBasicContactResponse;
}());
exports.ListBasicContactResponse = ListBasicContactResponse;
//# sourceMappingURL=ListBasicContactResponse.js.map