"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestSubscriptionV2BillingCycleEnum = exports.RestSubscriptionV2 = void 0;
var RestSubscriptionV2 = (function () {
    function RestSubscriptionV2() {
    }
    RestSubscriptionV2.getAttributeTypeMap = function () {
        return RestSubscriptionV2.attributeTypeMap;
    };
    RestSubscriptionV2.discriminator = undefined;
    RestSubscriptionV2.mapping = undefined;
    RestSubscriptionV2.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowTax",
            "baseName": "allow_tax",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "autoCharge",
            "baseName": "auto_charge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "billingAmount",
            "baseName": "billing_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "billingCycle",
            "baseName": "billing_cycle",
            "type": "RestSubscriptionV2BillingCycleEnum",
            "format": ""
        },
        {
            "name": "billingFrequency",
            "baseName": "billing_frequency",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextBillDate",
            "baseName": "next_bill_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "paymentGatewayId",
            "baseName": "payment_gateway_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "saleAffiliateId",
            "baseName": "sale_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "subscriptionPlanId",
            "baseName": "subscription_plan_id",
            "type": "string",
            "format": ""
        }
    ];
    return RestSubscriptionV2;
}());
exports.RestSubscriptionV2 = RestSubscriptionV2;
var RestSubscriptionV2BillingCycleEnum;
(function (RestSubscriptionV2BillingCycleEnum) {
    RestSubscriptionV2BillingCycleEnum["Year"] = "YEAR";
    RestSubscriptionV2BillingCycleEnum["Month"] = "MONTH";
    RestSubscriptionV2BillingCycleEnum["Week"] = "WEEK";
    RestSubscriptionV2BillingCycleEnum["Day"] = "DAY";
})(RestSubscriptionV2BillingCycleEnum = exports.RestSubscriptionV2BillingCycleEnum || (exports.RestSubscriptionV2BillingCycleEnum = {}));
//# sourceMappingURL=RestSubscriptionV2.js.map