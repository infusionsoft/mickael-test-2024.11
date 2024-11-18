"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlan = void 0;
var PaymentPlan = (function () {
    function PaymentPlan() {
    }
    PaymentPlan.getAttributeTypeMap = function () {
        return PaymentPlan.attributeTypeMap;
    };
    PaymentPlan.discriminator = undefined;
    PaymentPlan.mapping = undefined;
    PaymentPlan.attributeTypeMap = [
        {
            "name": "autoCharge",
            "baseName": "auto_charge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "creditCardId",
            "baseName": "credit_card_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "daysBetweenPayments",
            "baseName": "days_between_payments",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "initialPaymentAmount",
            "baseName": "initial_payment_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "initialPaymentDate",
            "baseName": "initial_payment_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialPaymentPercent",
            "baseName": "initial_payment_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "numberOfPayments",
            "baseName": "number_of_payments",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "paymentGateway",
            "baseName": "payment_gateway",
            "type": "RestPaymentGateway",
            "format": ""
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "planStartDate",
            "baseName": "plan_start_date",
            "type": "string",
            "format": ""
        }
    ];
    return PaymentPlan;
}());
exports.PaymentPlan = PaymentPlan;
//# sourceMappingURL=PaymentPlan.js.map