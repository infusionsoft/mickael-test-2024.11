"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequencePath = void 0;
var SequencePath = (function () {
    function SequencePath() {
    }
    SequencePath.getAttributeTypeMap = function () {
        return SequencePath.attributeTypeMap;
    };
    SequencePath.discriminator = undefined;
    SequencePath.mapping = undefined;
    SequencePath.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        }
    ];
    return SequencePath;
}());
exports.SequencePath = SequencePath;
//# sourceMappingURL=SequencePath.js.map