"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateProgramV2 = void 0;
var AffiliateProgramV2 = (function () {
    function AffiliateProgramV2() {
    }
    AffiliateProgramV2.getAttributeTypeMap = function () {
        return AffiliateProgramV2.attributeTypeMap;
    };
    AffiliateProgramV2.discriminator = undefined;
    AffiliateProgramV2.mapping = undefined;
    AffiliateProgramV2.attributeTypeMap = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "defaultCommission",
            "baseName": "default_commission",
            "type": "DefaultCommission",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCommissions",
            "baseName": "product_commissions",
            "type": "Array<ProductCommission>",
            "format": ""
        },
        {
            "name": "subscriptionCommissions",
            "baseName": "subscription_commissions",
            "type": "Array<SubscriptionCommission>",
            "format": ""
        }
    ];
    return AffiliateProgramV2;
}());
exports.AffiliateProgramV2 = AffiliateProgramV2;
//# sourceMappingURL=AffiliateProgramV2.js.map