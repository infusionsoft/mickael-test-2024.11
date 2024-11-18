"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOpportunitiesResponse = void 0;
var ListOpportunitiesResponse = (function () {
    function ListOpportunitiesResponse() {
    }
    ListOpportunitiesResponse.getAttributeTypeMap = function () {
        return ListOpportunitiesResponse.attributeTypeMap;
    };
    ListOpportunitiesResponse.discriminator = undefined;
    ListOpportunitiesResponse.mapping = undefined;
    ListOpportunitiesResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "opportunities",
            "baseName": "opportunities",
            "type": "Array<RestV2Opportunity>",
            "format": ""
        }
    ];
    return ListOpportunitiesResponse;
}());
exports.ListOpportunitiesResponse = ListOpportunitiesResponse;
//# sourceMappingURL=ListOpportunitiesResponse.js.map