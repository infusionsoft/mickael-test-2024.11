"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAffiliateCommissionResponse = void 0;
var ListAffiliateCommissionResponse = (function () {
    function ListAffiliateCommissionResponse() {
    }
    ListAffiliateCommissionResponse.getAttributeTypeMap = function () {
        return ListAffiliateCommissionResponse.attributeTypeMap;
    };
    ListAffiliateCommissionResponse.discriminator = undefined;
    ListAffiliateCommissionResponse.mapping = undefined;
    ListAffiliateCommissionResponse.attributeTypeMap = [
        {
            "name": "affiliateCommissions",
            "baseName": "AffiliateCommissions",
            "type": "Array<AffiliateCommission>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalAffCommEarned",
            "baseName": "total_aff_comm_earned",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalClawBack",
            "baseName": "total_claw_back",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalCommEarned",
            "baseName": "total_comm_earned",
            "type": "number",
            "format": "double"
        }
    ];
    return ListAffiliateCommissionResponse;
}());
exports.ListAffiliateCommissionResponse = ListAffiliateCommissionResponse;
//# sourceMappingURL=ListAffiliateCommissionResponse.js.map