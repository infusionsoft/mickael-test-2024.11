"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAffiliateSummariesResponse = void 0;
var ListAffiliateSummariesResponse = (function () {
    function ListAffiliateSummariesResponse() {
    }
    ListAffiliateSummariesResponse.getAttributeTypeMap = function () {
        return ListAffiliateSummariesResponse.attributeTypeMap;
    };
    ListAffiliateSummariesResponse.discriminator = undefined;
    ListAffiliateSummariesResponse.mapping = undefined;
    ListAffiliateSummariesResponse.attributeTypeMap = [
        {
            "name": "affiliateSummaries",
            "baseName": "affiliate_summaries",
            "type": "Array<AffiliateSummaryRecord>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListAffiliateSummariesResponse;
}());
exports.ListAffiliateSummariesResponse = ListAffiliateSummariesResponse;
//# sourceMappingURL=ListAffiliateSummariesResponse.js.map