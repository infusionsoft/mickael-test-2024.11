"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2OrderItemTypeEnum = exports.RestV2OrderItemCycleEnum = exports.RestV2OrderItem = void 0;
var RestV2OrderItem = (function () {
    function RestV2OrderItem() {
    }
    RestV2OrderItem.getAttributeTypeMap = function () {
        return RestV2OrderItem.attributeTypeMap;
    };
    RestV2OrderItem.discriminator = undefined;
    RestV2OrderItem.mapping = undefined;
    RestV2OrderItem.attributeTypeMap = [
        {
            "name": "billingCycle",
            "baseName": "billing_cycle",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "double"
        },
        {
            "name": "cycle",
            "baseName": "cycle",
            "type": "RestV2OrderItemCycleEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "number",
            "format": "double"
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
            "name": "numberOfPayments",
            "baseName": "number_of_payments",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderItemTaxes",
            "baseName": "order_item_taxes",
            "type": "Array<OrderItemTax>",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "RestProduct",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "special",
            "baseName": "special",
            "type": "Discount",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "RestV2Subscription",
            "format": ""
        },
        {
            "name": "subscriptionBased",
            "baseName": "subscription_based",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlan",
            "baseName": "subscription_plan",
            "type": "RestSubscriptionPlan",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RestV2OrderItemTypeEnum",
            "format": ""
        }
    ];
    return RestV2OrderItem;
}());
exports.RestV2OrderItem = RestV2OrderItem;
var RestV2OrderItemCycleEnum;
(function (RestV2OrderItemCycleEnum) {
    RestV2OrderItemCycleEnum["Year"] = "YEAR";
    RestV2OrderItemCycleEnum["Month"] = "MONTH";
    RestV2OrderItemCycleEnum["Week"] = "WEEK";
    RestV2OrderItemCycleEnum["DayOfYear"] = "DAY_OF_YEAR";
})(RestV2OrderItemCycleEnum = exports.RestV2OrderItemCycleEnum || (exports.RestV2OrderItemCycleEnum = {}));
var RestV2OrderItemTypeEnum;
(function (RestV2OrderItemTypeEnum) {
    RestV2OrderItemTypeEnum["Unknown"] = "UNKNOWN";
    RestV2OrderItemTypeEnum["Shipping"] = "SHIPPING";
    RestV2OrderItemTypeEnum["Tax"] = "TAX";
    RestV2OrderItemTypeEnum["Service"] = "SERVICE";
    RestV2OrderItemTypeEnum["Product"] = "PRODUCT";
    RestV2OrderItemTypeEnum["Upsell"] = "UPSELL";
    RestV2OrderItemTypeEnum["Financecharge"] = "FINANCECHARGE";
    RestV2OrderItemTypeEnum["Special"] = "SPECIAL";
    RestV2OrderItemTypeEnum["Program"] = "PROGRAM";
    RestV2OrderItemTypeEnum["Subscription"] = "SUBSCRIPTION";
    RestV2OrderItemTypeEnum["SpecialFreeTrailDays"] = "SPECIAL_FREE_TRAIL_DAYS";
    RestV2OrderItemTypeEnum["SpecialOrderTotal"] = "SPECIAL_ORDER_TOTAL";
    RestV2OrderItemTypeEnum["SpecialProduct"] = "SPECIAL_PRODUCT";
    RestV2OrderItemTypeEnum["SpecialCategory"] = "SPECIAL_CATEGORY";
    RestV2OrderItemTypeEnum["SpecialShipping"] = "SPECIAL_SHIPPING";
    RestV2OrderItemTypeEnum["Tip"] = "TIP";
    RestV2OrderItemTypeEnum["Other"] = "OTHER";
})(RestV2OrderItemTypeEnum = exports.RestV2OrderItemTypeEnum || (exports.RestV2OrderItemTypeEnum = {}));
//# sourceMappingURL=RestV2OrderItem.js.map