"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionCommission = void 0;
var SubscriptionCommission = (function () {
    function SubscriptionCommission() {
    }
    SubscriptionCommission.getAttributeTypeMap = function () {
        return SubscriptionCommission.attributeTypeMap;
    };
    SubscriptionCommission.discriminator = undefined;
    SubscriptionCommission.mapping = undefined;
    SubscriptionCommission.attributeTypeMap = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "planPrice",
            "baseName": "plan_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }
    ];
    return SubscriptionCommission;
}());
exports.SubscriptionCommission = SubscriptionCommission;
//# sourceMappingURL=SubscriptionCommission.js.map