"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2OrderSourceTypeEnum = exports.RestV2Order = void 0;
var RestV2Order = (function () {
    function RestV2Order() {
    }
    RestV2Order.getAttributeTypeMap = function () {
        return RestV2Order.attributeTypeMap;
    };
    RestV2Order.discriminator = undefined;
    RestV2Order.mapping = undefined;
    RestV2Order.attributeTypeMap = [
        {
            "name": "allowPayment",
            "baseName": "allow_payment",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowPaypal",
            "baseName": "allow_paypal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "BasicContact",
            "format": ""
        },
        {
            "name": "creationTime",
            "baseName": "creation_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceNumber",
            "baseName": "invoice_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadAffiliateId",
            "baseName": "lead_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "modificationTime",
            "baseName": "modification_time",
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
            "name": "orderItems",
            "baseName": "order_items",
            "type": "Array<RestV2OrderItem>",
            "format": ""
        },
        {
            "name": "orderTime",
            "baseName": "order_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderType",
            "baseName": "order_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentPlan",
            "baseName": "payment_plan",
            "type": "PaymentPlan",
            "format": ""
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "refundTotal",
            "baseName": "refund_total",
            "type": "number",
            "format": "double"
        },
        {
            "name": "salesAffiliateId",
            "baseName": "sales_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingInformation",
            "baseName": "shipping_information",
            "type": "ShippingInformation",
            "format": ""
        },
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "RestV2OrderSourceTypeEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "terms",
            "baseName": "terms",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalDue",
            "baseName": "total_due",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalPaid",
            "baseName": "total_paid",
            "type": "number",
            "format": "double"
        }
    ];
    return RestV2Order;
}());
exports.RestV2Order = RestV2Order;
var RestV2OrderSourceTypeEnum;
(function (RestV2OrderSourceTypeEnum) {
    RestV2OrderSourceTypeEnum["Invoice"] = "INVOICE";
    RestV2OrderSourceTypeEnum["Api"] = "API";
    RestV2OrderSourceTypeEnum["CheckoutForm"] = "CHECKOUT_FORM";
    RestV2OrderSourceTypeEnum["ManualPayment"] = "MANUAL_PAYMENT";
    RestV2OrderSourceTypeEnum["Unknown"] = "UNKNOWN";
    RestV2OrderSourceTypeEnum["QboSync"] = "QBO_SYNC";
})(RestV2OrderSourceTypeEnum = exports.RestV2OrderSourceTypeEnum || (exports.RestV2OrderSourceTypeEnum = {}));
//# sourceMappingURL=RestV2Order.js.map