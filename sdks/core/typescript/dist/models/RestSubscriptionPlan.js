"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestSubscriptionPlan = void 0;
var RestSubscriptionPlan = (function () {
    function RestSubscriptionPlan() {
    }
    RestSubscriptionPlan.getAttributeTypeMap = function () {
        return RestSubscriptionPlan.attributeTypeMap;
    };
    RestSubscriptionPlan.discriminator = undefined;
    RestSubscriptionPlan.mapping = undefined;
    RestSubscriptionPlan.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cycle",
            "baseName": "cycle",
            "type": "string",
            "format": ""
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlanIndex",
            "baseName": "subscription_plan_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "subscriptionPlanName",
            "baseName": "subscription_plan_name",
            "type": "string",
            "format": ""
        }
    ];
    return RestSubscriptionPlan;
}());
exports.RestSubscriptionPlan = RestSubscriptionPlan;
//# sourceMappingURL=RestSubscriptionPlan.js.map