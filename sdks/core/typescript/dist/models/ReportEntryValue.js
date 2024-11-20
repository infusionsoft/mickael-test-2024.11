"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportEntryValue = void 0;
var ReportEntryValue = (function () {
    function ReportEntryValue() {
    }
    ReportEntryValue.getAttributeTypeMap = function () {
        return ReportEntryValue.attributeTypeMap;
    };
    ReportEntryValue.discriminator = undefined;
    ReportEntryValue.mapping = undefined;
    ReportEntryValue.attributeTypeMap = [
        {
            "name": "fieldName",
            "baseName": "field_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    return ReportEntryValue;
}());
exports.ReportEntryValue = ReportEntryValue;
//# sourceMappingURL=ReportEntryValue.js.map