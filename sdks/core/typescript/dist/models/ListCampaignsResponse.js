"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCampaignsResponse = void 0;
var ListCampaignsResponse = (function () {
    function ListCampaignsResponse() {
    }
    ListCampaignsResponse.getAttributeTypeMap = function () {
        return ListCampaignsResponse.attributeTypeMap;
    };
    ListCampaignsResponse.discriminator = undefined;
    ListCampaignsResponse.mapping = undefined;
    ListCampaignsResponse.attributeTypeMap = [
        {
            "name": "campaigns",
            "baseName": "campaigns",
            "type": "Array<Campaign>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListCampaignsResponse;
}());
exports.ListCampaignsResponse = ListCampaignsResponse;
//# sourceMappingURL=ListCampaignsResponse.js.map