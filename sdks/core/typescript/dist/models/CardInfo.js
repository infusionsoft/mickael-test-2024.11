"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInfo = void 0;
var CardInfo = (function () {
    function CardInfo() {
    }
    CardInfo.getAttributeTypeMap = function () {
        return CardInfo.attributeTypeMap;
    };
    CardInfo.discriminator = undefined;
    CardInfo.mapping = undefined;
    CardInfo.attributeTypeMap = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "cardType",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationMonth",
            "baseName": "expirationMonth",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationYear",
            "baseName": "expirationYear",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFour",
            "baseName": "lastFour",
            "type": "string",
            "format": ""
        }
    ];
    return CardInfo;
}());
exports.CardInfo = CardInfo;
//# sourceMappingURL=CardInfo.js.map