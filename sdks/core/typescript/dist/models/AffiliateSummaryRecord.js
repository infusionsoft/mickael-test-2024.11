"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSummaryRecord = void 0;
var AffiliateSummaryRecord = (function () {
    function AffiliateSummaryRecord() {
    }
    AffiliateSummaryRecord.getAttributeTypeMap = function () {
        return AffiliateSummaryRecord.attributeTypeMap;
    };
    AffiliateSummaryRecord.discriminator = undefined;
    AffiliateSummaryRecord.mapping = undefined;
    AffiliateSummaryRecord.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliateId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "amountEarned",
            "baseName": "amountEarned",
            "type": "number",
            "format": "double"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": "double"
        },
        {
            "name": "clawbacks",
            "baseName": "clawbacks",
            "type": "number",
            "format": "double"
        }
    ];
    return AffiliateSummaryRecord;
}());
exports.AffiliateSummaryRecord = AffiliateSummaryRecord;
//# sourceMappingURL=AffiliateSummaryRecord.js.map