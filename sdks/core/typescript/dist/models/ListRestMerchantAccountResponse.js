"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRestMerchantAccountResponseTypeEnum = exports.ListRestMerchantAccountResponse = void 0;
var ListRestMerchantAccountResponse = (function () {
    function ListRestMerchantAccountResponse() {
    }
    ListRestMerchantAccountResponse.getAttributeTypeMap = function () {
        return ListRestMerchantAccountResponse.attributeTypeMap;
    };
    ListRestMerchantAccountResponse.discriminator = undefined;
    ListRestMerchantAccountResponse.mapping = undefined;
    ListRestMerchantAccountResponse.attributeTypeMap = [
        {
            "name": "accountName",
            "baseName": "account_name",
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
            "name": "isTest",
            "baseName": "is_test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ListRestMerchantAccountResponseTypeEnum",
            "format": ""
        }
    ];
    return ListRestMerchantAccountResponse;
}());
exports.ListRestMerchantAccountResponse = ListRestMerchantAccountResponse;
var ListRestMerchantAccountResponseTypeEnum;
(function (ListRestMerchantAccountResponseTypeEnum) {
    ListRestMerchantAccountResponseTypeEnum["UseDefault"] = "USE_DEFAULT";
    ListRestMerchantAccountResponseTypeEnum["PayPal"] = "PAY_PAL";
    ListRestMerchantAccountResponseTypeEnum["PayPalPayflowPro"] = "PAY_PAL_PAYFLOW_PRO";
    ListRestMerchantAccountResponseTypeEnum["PaypalCommerce"] = "PAYPAL_COMMERCE";
    ListRestMerchantAccountResponseTypeEnum["PaypalCommerceUcc"] = "PAYPAL_COMMERCE_UCC";
    ListRestMerchantAccountResponseTypeEnum["GatewayPayflowPro"] = "GATEWAY_PAYFLOW_PRO";
    ListRestMerchantAccountResponseTypeEnum["Authorize"] = "AUTHORIZE";
    ListRestMerchantAccountResponseTypeEnum["AuthorizeCardPresent"] = "AUTHORIZE_CARD_PRESENT";
    ListRestMerchantAccountResponseTypeEnum["PowerPay"] = "POWER_PAY";
    ListRestMerchantAccountResponseTypeEnum["CartConnect"] = "CART_CONNECT";
    ListRestMerchantAccountResponseTypeEnum["SagePay"] = "SAGE_PAY";
    ListRestMerchantAccountResponseTypeEnum["EWay"] = "E_WAY";
    ListRestMerchantAccountResponseTypeEnum["UsaEPay"] = "USA_E_PAY";
    ListRestMerchantAccountResponseTypeEnum["Moneris"] = "MONERIS";
    ListRestMerchantAccountResponseTypeEnum["Dps"] = "DPS";
    ListRestMerchantAccountResponseTypeEnum["Dummy"] = "DUMMY";
    ListRestMerchantAccountResponseTypeEnum["InternetSecure"] = "INTERNET_SECURE";
    ListRestMerchantAccountResponseTypeEnum["EasyPayDirect"] = "EASY_PAY_DIRECT";
    ListRestMerchantAccountResponseTypeEnum["Nexus"] = "NEXUS";
    ListRestMerchantAccountResponseTypeEnum["InfPay"] = "INF_PAY";
    ListRestMerchantAccountResponseTypeEnum["Flexpay"] = "FLEXPAY";
    ListRestMerchantAccountResponseTypeEnum["Stripe"] = "STRIPE";
    ListRestMerchantAccountResponseTypeEnum["StripeElements"] = "STRIPE_ELEMENTS";
    ListRestMerchantAccountResponseTypeEnum["WorldPay"] = "WORLD_PAY";
    ListRestMerchantAccountResponseTypeEnum["Rainforest"] = "RAINFOREST";
    ListRestMerchantAccountResponseTypeEnum["Wepay"] = "WEPAY";
    ListRestMerchantAccountResponseTypeEnum["Keappay"] = "KEAPPAY";
    ListRestMerchantAccountResponseTypeEnum["Manual"] = "MANUAL";
})(ListRestMerchantAccountResponseTypeEnum = exports.ListRestMerchantAccountResponseTypeEnum || (exports.ListRestMerchantAccountResponseTypeEnum = {}));
//# sourceMappingURL=ListRestMerchantAccountResponse.js.map