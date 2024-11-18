"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportEntryRecord = void 0;
var ReportEntryRecord = (function () {
    function ReportEntryRecord() {
    }
    ReportEntryRecord.getAttributeTypeMap = function () {
        return ReportEntryRecord.attributeTypeMap;
    };
    ReportEntryRecord.discriminator = undefined;
    ReportEntryRecord.mapping = undefined;
    ReportEntryRecord.attributeTypeMap = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ReportEntryValue>",
            "format": ""
        }
    ];
    return ReportEntryRecord;
}());
exports.ReportEntryRecord = ReportEntryRecord;
//# sourceMappingURL=ReportEntryRecord.js.map