"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAffiliateLinksResponse = void 0;
var ListAffiliateLinksResponse = (function () {
    function ListAffiliateLinksResponse() {
    }
    ListAffiliateLinksResponse.getAttributeTypeMap = function () {
        return ListAffiliateLinksResponse.attributeTypeMap;
    };
    ListAffiliateLinksResponse.discriminator = undefined;
    ListAffiliateLinksResponse.mapping = undefined;
    ListAffiliateLinksResponse.attributeTypeMap = [
        {
            "name": "affiliateLinks",
            "baseName": "affiliate_links",
            "type": "Array<AffiliateLink>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListAffiliateLinksResponse;
}());
exports.ListAffiliateLinksResponse = ListAffiliateLinksResponse;
//# sourceMappingURL=ListAffiliateLinksResponse.js.map