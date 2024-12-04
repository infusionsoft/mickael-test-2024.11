"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCommission = void 0;
var AffiliateCommission = (function () {
    function AffiliateCommission() {
    }
    AffiliateCommission.getAttributeTypeMap = function () {
        return AffiliateCommission.attributeTypeMap;
    };
    AffiliateCommission.discriminator = undefined;
    AffiliateCommission.mapping = undefined;
    AffiliateCommission.attributeTypeMap = [
        {
            "name": "affOwedId",
            "baseName": "aff_owed_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "amountEarned",
            "baseName": "amount_earned",
            "type": "number",
            "format": "float"
        },
        {
            "name": "contactFirstName",
            "baseName": "contact_first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "contactLastName",
            "baseName": "contact_last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateEarned",
            "baseName": "date_earned",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceId",
            "baseName": "invoice_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "salesAffiliateId",
            "baseName": "sales_affiliate_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "soldByFirstName",
            "baseName": "sold_by_first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "soldByLastName",
            "baseName": "sold_by_last_name",
            "type": "string",
            "format": ""
        }
    ];
    return AffiliateCommission;
}());
exports.AffiliateCommission = AffiliateCommission;
//# sourceMappingURL=AffiliateCommission.js.map