"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTaggedCompaniesResponse = void 0;
var ListTaggedCompaniesResponse = (function () {
    function ListTaggedCompaniesResponse() {
    }
    ListTaggedCompaniesResponse.getAttributeTypeMap = function () {
        return ListTaggedCompaniesResponse.attributeTypeMap;
    };
    ListTaggedCompaniesResponse.discriminator = undefined;
    ListTaggedCompaniesResponse.mapping = undefined;
    ListTaggedCompaniesResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "taggedCompanies",
            "baseName": "tagged_companies",
            "type": "Array<TaggedCompany>",
            "format": ""
        }
    ];
    return ListTaggedCompaniesResponse;
}());
exports.ListTaggedCompaniesResponse = ListTaggedCompaniesResponse;
//# sourceMappingURL=ListTaggedCompaniesResponse.js.map