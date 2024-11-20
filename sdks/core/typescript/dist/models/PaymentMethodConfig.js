"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodConfig = void 0;
var PaymentMethodConfig = (function () {
    function PaymentMethodConfig() {
    }
    PaymentMethodConfig.getAttributeTypeMap = function () {
        return PaymentMethodConfig.attributeTypeMap;
    };
    PaymentMethodConfig.discriminator = undefined;
    PaymentMethodConfig.mapping = undefined;
    PaymentMethodConfig.attributeTypeMap = [
        {
            "name": "sessionKey",
            "baseName": "session_key",
            "type": "string",
            "format": ""
        }
    ];
    return PaymentMethodConfig;
}());
exports.PaymentMethodConfig = PaymentMethodConfig;
//# sourceMappingURL=PaymentMethodConfig.js.map