"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2Subscription = void 0;
var RestV2Subscription = (function () {
    function RestV2Subscription() {
    }
    RestV2Subscription.getAttributeTypeMap = function () {
        return RestV2Subscription.attributeTypeMap;
    };
    RestV2Subscription.discriminator = undefined;
    RestV2Subscription.mapping = undefined;
    RestV2Subscription.attributeTypeMap = [
        {
            "name": "subscriptionActive",
            "baseName": "subscription_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionCyclesCompleted",
            "baseName": "subscription_cycles_completed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "subscriptionEndDate",
            "baseName": "subscription_end_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionNextBillDate",
            "baseName": "subscription_next_bill_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionStartDate",
            "baseName": "subscription_start_date",
            "type": "string",
            "format": ""
        }
    ];
    return RestV2Subscription;
}());
exports.RestV2Subscription = RestV2Subscription;
//# sourceMappingURL=RestV2Subscription.js.map