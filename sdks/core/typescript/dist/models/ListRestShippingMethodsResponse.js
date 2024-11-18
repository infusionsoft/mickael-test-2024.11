"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRestShippingMethodsResponse = void 0;
var ListRestShippingMethodsResponse = (function () {
    function ListRestShippingMethodsResponse() {
    }
    ListRestShippingMethodsResponse.getAttributeTypeMap = function () {
        return ListRestShippingMethodsResponse.attributeTypeMap;
    };
    ListRestShippingMethodsResponse.discriminator = undefined;
    ListRestShippingMethodsResponse.mapping = undefined;
    ListRestShippingMethodsResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingMethods",
            "baseName": "shipping_methods",
            "type": "Array<ShippingMethod>",
            "format": ""
        }
    ];
    return ListRestShippingMethodsResponse;
}());
exports.ListRestShippingMethodsResponse = ListRestShippingMethodsResponse;
//# sourceMappingURL=ListRestShippingMethodsResponse.js.map