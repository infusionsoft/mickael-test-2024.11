"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = void 0;
var Sequence = (function () {
    function Sequence() {
    }
    Sequence.getAttributeTypeMap = function () {
        return Sequence.attributeTypeMap;
    };
    Sequence.discriminator = undefined;
    Sequence.mapping = undefined;
    Sequence.attributeTypeMap = [
        {
            "name": "activeContactCount",
            "baseName": "active_contact_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "activeContactCountCompleted",
            "baseName": "active_contact_count_completed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "historicalContactCount",
            "baseName": "historical_contact_count",
            "type": "HistoricalCounts",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<SequencePath>",
            "format": ""
        }
    ];
    return Sequence;
}());
exports.Sequence = Sequence;
//# sourceMappingURL=Sequence.js.map