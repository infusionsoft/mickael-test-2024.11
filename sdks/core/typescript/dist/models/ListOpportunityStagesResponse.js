"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOpportunityStagesResponse = void 0;
var ListOpportunityStagesResponse = (function () {
    function ListOpportunityStagesResponse() {
    }
    ListOpportunityStagesResponse.getAttributeTypeMap = function () {
        return ListOpportunityStagesResponse.attributeTypeMap;
    };
    ListOpportunityStagesResponse.discriminator = undefined;
    ListOpportunityStagesResponse.mapping = undefined;
    ListOpportunityStagesResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<RestOpportunityStage>",
            "format": ""
        }
    ];
    return ListOpportunityStagesResponse;
}());
exports.ListOpportunityStagesResponse = ListOpportunityStagesResponse;
//# sourceMappingURL=ListOpportunityStagesResponse.js.map