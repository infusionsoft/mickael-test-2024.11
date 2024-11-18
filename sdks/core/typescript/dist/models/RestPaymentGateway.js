"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestPaymentGateway = void 0;
var RestPaymentGateway = (function () {
    function RestPaymentGateway() {
    }
    RestPaymentGateway.getAttributeTypeMap = function () {
        return RestPaymentGateway.attributeTypeMap;
    };
    RestPaymentGateway.discriminator = undefined;
    RestPaymentGateway.mapping = undefined;
    RestPaymentGateway.attributeTypeMap = [
        {
            "name": "merchantAccountId",
            "baseName": "merchant_account_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantAccountName",
            "baseName": "merchant_account_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "useDefault",
            "baseName": "use_default",
            "type": "boolean",
            "format": ""
        }
    ];
    return RestPaymentGateway;
}());
exports.RestPaymentGateway = RestPaymentGateway;
//# sourceMappingURL=RestPaymentGateway.js.map