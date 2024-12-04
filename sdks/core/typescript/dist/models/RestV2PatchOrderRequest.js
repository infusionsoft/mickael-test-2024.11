"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2PatchOrderRequestOrderTypeEnum = exports.RestV2PatchOrderRequest = void 0;
var RestV2PatchOrderRequest = (function () {
    function RestV2PatchOrderRequest() {
    }
    RestV2PatchOrderRequest.getAttributeTypeMap = function () {
        return RestV2PatchOrderRequest.attributeTypeMap;
    };
    RestV2PatchOrderRequest.discriminator = undefined;
    RestV2PatchOrderRequest.mapping = undefined;
    RestV2PatchOrderRequest.attributeTypeMap = [
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
            "type": "RestV2PatchOrderRequestOrderTypeEnum",
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
    return RestV2PatchOrderRequest;
}());
exports.RestV2PatchOrderRequest = RestV2PatchOrderRequest;
var RestV2PatchOrderRequestOrderTypeEnum;
(function (RestV2PatchOrderRequestOrderTypeEnum) {
    RestV2PatchOrderRequestOrderTypeEnum["Offline"] = "OFFLINE";
    RestV2PatchOrderRequestOrderTypeEnum["Online"] = "ONLINE";
})(RestV2PatchOrderRequestOrderTypeEnum = exports.RestV2PatchOrderRequestOrderTypeEnum || (exports.RestV2PatchOrderRequestOrderTypeEnum = {}));
//# sourceMappingURL=RestV2PatchOrderRequest.js.map