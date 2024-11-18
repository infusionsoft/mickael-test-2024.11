"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Throwable = void 0;
var Throwable = (function () {
    function Throwable() {
    }
    Throwable.getAttributeTypeMap = function () {
        return Throwable.attributeTypeMap;
    };
    Throwable.discriminator = undefined;
    Throwable.mapping = undefined;
    Throwable.attributeTypeMap = [
        {
            "name": "cause",
            "baseName": "cause",
            "type": "Throwable",
            "format": ""
        },
        {
            "name": "localizedMessage",
            "baseName": "localizedMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "stackTrace",
            "baseName": "stackTrace",
            "type": "Array<StackTraceElement>",
            "format": ""
        },
        {
            "name": "suppressed",
            "baseName": "suppressed",
            "type": "Array<Throwable>",
            "format": ""
        }
    ];
    return Throwable;
}());
exports.Throwable = Throwable;
//# sourceMappingURL=Throwable.js.map