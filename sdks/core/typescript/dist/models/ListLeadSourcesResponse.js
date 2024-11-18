"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLeadSourcesResponse = void 0;
var ListLeadSourcesResponse = (function () {
    function ListLeadSourcesResponse() {
    }
    ListLeadSourcesResponse.getAttributeTypeMap = function () {
        return ListLeadSourcesResponse.attributeTypeMap;
    };
    ListLeadSourcesResponse.discriminator = undefined;
    ListLeadSourcesResponse.mapping = undefined;
    ListLeadSourcesResponse.attributeTypeMap = [
        {
            "name": "leadsources",
            "baseName": "leadsources",
            "type": "Array<LeadSource>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListLeadSourcesResponse;
}());
exports.ListLeadSourcesResponse = ListLeadSourcesResponse;
//# sourceMappingURL=ListLeadSourcesResponse.js.map