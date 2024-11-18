"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodList = void 0;
var PaymentMethodList = (function () {
    function PaymentMethodList() {
    }
    PaymentMethodList.getAttributeTypeMap = function () {
        return PaymentMethodList.attributeTypeMap;
    };
    PaymentMethodList.discriminator = undefined;
    PaymentMethodList.mapping = undefined;
    PaymentMethodList.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "records",
            "baseName": "records",
            "type": "Array<RestPaymentMethod>",
            "format": ""
        }
    ];
    return PaymentMethodList;
}());
exports.PaymentMethodList = PaymentMethodList;
//# sourceMappingURL=PaymentMethodList.js.map