"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionV2 = void 0;
var CreateSubscriptionV2 = (function () {
    function CreateSubscriptionV2() {
    }
    CreateSubscriptionV2.getAttributeTypeMap = function () {
        return CreateSubscriptionV2.attributeTypeMap;
    };
    CreateSubscriptionV2.discriminator = undefined;
    CreateSubscriptionV2.mapping = undefined;
    CreateSubscriptionV2.attributeTypeMap = [
        {
            "name": "allowDuplicate",
            "baseName": "allow_duplicate",
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
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstBillDate",
            "baseName": "first_bill_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "saleAffiliateId",
            "baseName": "sale_affiliate_id",
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
    return CreateSubscriptionV2;
}());
exports.CreateSubscriptionV2 = CreateSubscriptionV2;
//# sourceMappingURL=CreateSubscriptionV2.js.map