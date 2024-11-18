"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSubscriptionPlanCommissionRequest = void 0;
var DeleteSubscriptionPlanCommissionRequest = (function () {
    function DeleteSubscriptionPlanCommissionRequest() {
    }
    DeleteSubscriptionPlanCommissionRequest.getAttributeTypeMap = function () {
        return DeleteSubscriptionPlanCommissionRequest.attributeTypeMap;
    };
    DeleteSubscriptionPlanCommissionRequest.discriminator = undefined;
    DeleteSubscriptionPlanCommissionRequest.mapping = undefined;
    DeleteSubscriptionPlanCommissionRequest.attributeTypeMap = [
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlanId",
            "baseName": "subscription_plan_id",
            "type": "string",
            "format": ""
        }
    ];
    return DeleteSubscriptionPlanCommissionRequest;
}());
exports.DeleteSubscriptionPlanCommissionRequest = DeleteSubscriptionPlanCommissionRequest;
//# sourceMappingURL=DeleteSubscriptionPlanCommissionRequest.js.map