"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResult = void 0;
var PaymentResult = (function () {
    function PaymentResult() {
    }
    PaymentResult.getAttributeTypeMap = function () {
        return PaymentResult.attributeTypeMap;
    };
    PaymentResult.discriminator = undefined;
    PaymentResult.mapping = undefined;
    PaymentResult.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceId",
            "baseName": "invoice_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentAmount",
            "baseName": "payment_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "paymentStatusMessage",
            "baseName": "payment_status_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string",
            "format": ""
        }
    ];
    return PaymentResult;
}());
exports.PaymentResult = PaymentResult;
//# sourceMappingURL=PaymentResult.js.map