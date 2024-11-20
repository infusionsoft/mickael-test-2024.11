"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAffiliateCommissionProgramsResponse = void 0;
var ListAffiliateCommissionProgramsResponse = (function () {
    function ListAffiliateCommissionProgramsResponse() {
    }
    ListAffiliateCommissionProgramsResponse.getAttributeTypeMap = function () {
        return ListAffiliateCommissionProgramsResponse.attributeTypeMap;
    };
    ListAffiliateCommissionProgramsResponse.discriminator = undefined;
    ListAffiliateCommissionProgramsResponse.mapping = undefined;
    ListAffiliateCommissionProgramsResponse.attributeTypeMap = [
        {
            "name": "commissionPrograms",
            "baseName": "commission_programs",
            "type": "Array<AffiliateProgramV2>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }
    ];
    return ListAffiliateCommissionProgramsResponse;
}());
exports.ListAffiliateCommissionProgramsResponse = ListAffiliateCommissionProgramsResponse;
//# sourceMappingURL=ListAffiliateCommissionProgramsResponse.js.map