"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrders = void 0;
var ListOrders = (function () {
    function ListOrders() {
    }
    ListOrders.getAttributeTypeMap = function () {
        return ListOrders.attributeTypeMap;
    };
    ListOrders.discriminator = undefined;
    ListOrders.mapping = undefined;
    ListOrders.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "orders",
            "baseName": "orders",
            "type": "Array<RestV2Order>",
            "format": ""
        }
    ];
    return ListOrders;
}());
exports.ListOrders = ListOrders;
//# sourceMappingURL=ListOrders.js.map