"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchSubscriptionCommissionProgramRequest = void 0;
var PatchSubscriptionCommissionProgramRequest = (function () {
    function PatchSubscriptionCommissionProgramRequest() {
    }
    PatchSubscriptionCommissionProgramRequest.getAttributeTypeMap = function () {
        return PatchSubscriptionCommissionProgramRequest.attributeTypeMap;
    };
    PatchSubscriptionCommissionProgramRequest.discriminator = undefined;
    PatchSubscriptionCommissionProgramRequest.mapping = undefined;
    PatchSubscriptionCommissionProgramRequest.attributeTypeMap = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }
    ];
    return PatchSubscriptionCommissionProgramRequest;
}());
exports.PatchSubscriptionCommissionProgramRequest = PatchSubscriptionCommissionProgramRequest;
//# sourceMappingURL=PatchSubscriptionCommissionProgramRequest.js.map