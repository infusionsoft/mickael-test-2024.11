"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCreateOrderRequestOrderTypeEnum = exports.RestCreateOrderRequest = void 0;
var RestCreateOrderRequest = (function () {
    function RestCreateOrderRequest() {
    }
    RestCreateOrderRequest.getAttributeTypeMap = function () {
        return RestCreateOrderRequest.attributeTypeMap;
    };
    RestCreateOrderRequest.discriminator = undefined;
    RestCreateOrderRequest.mapping = undefined;
    RestCreateOrderRequest.attributeTypeMap = [
        {
            "name": "contactId",
            "baseName": "contact_id",
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
            "name": "orderItems",
            "baseName": "order_items",
            "type": "Array<CreateRestOrderItemRequest>",
            "format": ""
        },
        {
            "name": "orderTime",
            "baseName": "order_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderTitle",
            "baseName": "order_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderType",
            "baseName": "order_type",
            "type": "RestCreateOrderRequestOrderTypeEnum",
            "format": ""
        },
        {
            "name": "promoCodes",
            "baseName": "promo_codes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "salesAffiliateId",
            "baseName": "sales_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "AddressInformation",
            "format": ""
        }
    ];
    return RestCreateOrderRequest;
}());
exports.RestCreateOrderRequest = RestCreateOrderRequest;
var RestCreateOrderRequestOrderTypeEnum;
(function (RestCreateOrderRequestOrderTypeEnum) {
    RestCreateOrderRequestOrderTypeEnum["Offline"] = "OFFLINE";
    RestCreateOrderRequestOrderTypeEnum["Online"] = "ONLINE";
})(RestCreateOrderRequestOrderTypeEnum = exports.RestCreateOrderRequestOrderTypeEnum || (exports.RestCreateOrderRequestOrderTypeEnum = {}));
//# sourceMappingURL=RestCreateOrderRequest.js.map