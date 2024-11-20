"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCompaniesResponse = void 0;
var ListCompaniesResponse = (function () {
    function ListCompaniesResponse() {
    }
    ListCompaniesResponse.getAttributeTypeMap = function () {
        return ListCompaniesResponse.attributeTypeMap;
    };
    ListCompaniesResponse.discriminator = undefined;
    ListCompaniesResponse.mapping = undefined;
    ListCompaniesResponse.attributeTypeMap = [
        {
            "name": "companies",
            "baseName": "companies",
            "type": "Array<Company>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListCompaniesResponse;
}());
exports.ListCompaniesResponse = ListCompaniesResponse;
//# sourceMappingURL=ListCompaniesResponse.js.map