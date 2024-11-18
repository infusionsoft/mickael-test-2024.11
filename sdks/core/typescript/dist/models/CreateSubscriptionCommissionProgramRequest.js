"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionCommissionProgramRequest = void 0;
var CreateSubscriptionCommissionProgramRequest = (function () {
    function CreateSubscriptionCommissionProgramRequest() {
    }
    CreateSubscriptionCommissionProgramRequest.getAttributeTypeMap = function () {
        return CreateSubscriptionCommissionProgramRequest.attributeTypeMap;
    };
    CreateSubscriptionCommissionProgramRequest.discriminator = undefined;
    CreateSubscriptionCommissionProgramRequest.mapping = undefined;
    CreateSubscriptionCommissionProgramRequest.attributeTypeMap = [
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
    return CreateSubscriptionCommissionProgramRequest;
}());
exports.CreateSubscriptionCommissionProgramRequest = CreateSubscriptionCommissionProgramRequest;
//# sourceMappingURL=CreateSubscriptionCommissionProgramRequest.js.map