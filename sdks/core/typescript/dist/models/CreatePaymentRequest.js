"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentRequest = void 0;
var CreatePaymentRequest = (function () {
    function CreatePaymentRequest() {
    }
    CreatePaymentRequest.getAttributeTypeMap = function () {
        return CreatePaymentRequest.attributeTypeMap;
    };
    CreatePaymentRequest.discriminator = undefined;
    CreatePaymentRequest.mapping = undefined;
    CreatePaymentRequest.attributeTypeMap = [
        {
            "name": "applyToCommissions",
            "baseName": "apply_to_commissions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentAmount",
            "baseName": "payment_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "number",
            "format": "int64"
        }
    ];
    return CreatePaymentRequest;
}());
exports.CreatePaymentRequest = CreatePaymentRequest;
//# sourceMappingURL=CreatePaymentRequest.js.map