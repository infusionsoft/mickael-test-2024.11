"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestPaymentMethod = void 0;
var RestPaymentMethod = (function () {
    function RestPaymentMethod() {
    }
    RestPaymentMethod.getAttributeTypeMap = function () {
        return RestPaymentMethod.attributeTypeMap;
    };
    RestPaymentMethod.discriminator = undefined;
    RestPaymentMethod.mapping = undefined;
    RestPaymentMethod.attributeTypeMap = [
        {
            "name": "cardInfo",
            "baseName": "cardInfo",
            "type": "CardInfo",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string",
            "format": ""
        },
        {
            "name": "processorId",
            "baseName": "processorId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "processorType",
            "baseName": "processorType",
            "type": "string",
            "format": ""
        }
    ];
    return RestPaymentMethod;
}());
exports.RestPaymentMethod = RestPaymentMethod;
//# sourceMappingURL=RestPaymentMethod.js.map