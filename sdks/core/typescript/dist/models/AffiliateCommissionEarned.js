"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCommissionEarned = void 0;
var AffiliateCommissionEarned = (function () {
    function AffiliateCommissionEarned() {
    }
    AffiliateCommissionEarned.getAttributeTypeMap = function () {
        return AffiliateCommissionEarned.attributeTypeMap;
    };
    AffiliateCommissionEarned.discriminator = undefined;
    AffiliateCommissionEarned.mapping = undefined;
    AffiliateCommissionEarned.attributeTypeMap = [
        {
            "name": "affiliateCommissionTotal",
            "baseName": "affiliate_commission_total",
            "type": "number",
            "format": "double"
        },
        {
            "name": "viewLedgerUrl",
            "baseName": "view_ledger_url",
            "type": "string",
            "format": ""
        }
    ];
    return AffiliateCommissionEarned;
}());
exports.AffiliateCommissionEarned = AffiliateCommissionEarned;
//# sourceMappingURL=AffiliateCommissionEarned.js.map