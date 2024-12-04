"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContactLinkTypesResponse = void 0;
var ListContactLinkTypesResponse = (function () {
    function ListContactLinkTypesResponse() {
    }
    ListContactLinkTypesResponse.getAttributeTypeMap = function () {
        return ListContactLinkTypesResponse.attributeTypeMap;
    };
    ListContactLinkTypesResponse.discriminator = undefined;
    ListContactLinkTypesResponse.mapping = undefined;
    ListContactLinkTypesResponse.attributeTypeMap = [
        {
            "name": "contactLinkTypes",
            "baseName": "contact_link_types",
            "type": "Array<ContactLinkType>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListContactLinkTypesResponse;
}());
exports.ListContactLinkTypesResponse = ListContactLinkTypesResponse;
//# sourceMappingURL=ListContactLinkTypesResponse.js.map