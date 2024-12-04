"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackTraceElement = void 0;
var StackTraceElement = (function () {
    function StackTraceElement() {
    }
    StackTraceElement.getAttributeTypeMap = function () {
        return StackTraceElement.attributeTypeMap;
    };
    StackTraceElement.discriminator = undefined;
    StackTraceElement.mapping = undefined;
    StackTraceElement.attributeTypeMap = [
        {
            "name": "classLoaderName",
            "baseName": "classLoaderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "className",
            "baseName": "className",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lineNumber",
            "baseName": "lineNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "methodName",
            "baseName": "methodName",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleName",
            "baseName": "moduleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleVersion",
            "baseName": "moduleVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "nativeMethod",
            "baseName": "nativeMethod",
            "type": "boolean",
            "format": ""
        }
    ];
    return StackTraceElement;
}());
exports.StackTraceElement = StackTraceElement;
//# sourceMappingURL=StackTraceElement.js.map