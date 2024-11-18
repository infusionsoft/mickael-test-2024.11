"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricalCounts = void 0;
var HistoricalCounts = (function () {
    function HistoricalCounts() {
    }
    HistoricalCounts.getAttributeTypeMap = function () {
        return HistoricalCounts.attributeTypeMap;
    };
    HistoricalCounts.discriminator = undefined;
    HistoricalCounts.mapping = undefined;
    HistoricalCounts.attributeTypeMap = [
        {
            "name": "_24hours",
            "baseName": "24_hours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "_30days",
            "baseName": "30_days",
            "type": "number",
            "format": "int32"
        }
    ];
    return HistoricalCounts;
}());
exports.HistoricalCounts = HistoricalCounts;
//# sourceMappingURL=HistoricalCounts.js.map