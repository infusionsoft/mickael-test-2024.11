"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportExecutionResult = void 0;
var ReportExecutionResult = (function () {
    function ReportExecutionResult() {
    }
    ReportExecutionResult.getAttributeTypeMap = function () {
        return ReportExecutionResult.attributeTypeMap;
    };
    ReportExecutionResult.discriminator = undefined;
    ReportExecutionResult.mapping = undefined;
    ReportExecutionResult.attributeTypeMap = [
        {
            "name": "pageToken",
            "baseName": "page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ReportEntryRecord>",
            "format": ""
        }
    ];
    return ReportExecutionResult;
}());
exports.ReportExecutionResult = ReportExecutionResult;
//# sourceMappingURL=ReportExecutionResult.js.map