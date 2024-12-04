"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLandingPagesResponse = void 0;
var ListLandingPagesResponse = (function () {
    function ListLandingPagesResponse() {
    }
    ListLandingPagesResponse.getAttributeTypeMap = function () {
        return ListLandingPagesResponse.attributeTypeMap;
    };
    ListLandingPagesResponse.discriminator = undefined;
    ListLandingPagesResponse.mapping = undefined;
    ListLandingPagesResponse.attributeTypeMap = [
        {
            "name": "landingpages",
            "baseName": "landingpages",
            "type": "Array<LandingPage>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "string",
            "format": ""
        }
    ];
    return ListLandingPagesResponse;
}());
exports.ListLandingPagesResponse = ListLandingPagesResponse;
//# sourceMappingURL=ListLandingPagesResponse.js.map