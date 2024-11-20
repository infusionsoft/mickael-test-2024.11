"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionPlansResponse = void 0;
var ListSubscriptionPlansResponse = (function () {
    function ListSubscriptionPlansResponse() {
    }
    ListSubscriptionPlansResponse.getAttributeTypeMap = function () {
        return ListSubscriptionPlansResponse.attributeTypeMap;
    };
    ListSubscriptionPlansResponse.discriminator = undefined;
    ListSubscriptionPlansResponse.mapping = undefined;
    ListSubscriptionPlansResponse.attributeTypeMap = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<RestSubscriptionPlan>",
            "format": ""
        }
    ];
    return ListSubscriptionPlansResponse;
}());
exports.ListSubscriptionPlansResponse = ListSubscriptionPlansResponse;
//# sourceMappingURL=ListSubscriptionPlansResponse.js.map