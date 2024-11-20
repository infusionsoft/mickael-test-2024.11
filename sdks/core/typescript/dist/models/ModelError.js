"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelError = void 0;
var ModelError = (function () {
    function ModelError() {
    }
    ModelError.getAttributeTypeMap = function () {
        return ModelError.attributeTypeMap;
    };
    ModelError.discriminator = undefined;
    ModelError.mapping = undefined;
    ModelError.attributeTypeMap = [
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
    return ModelError;
}());
exports.ModelError = ModelError;
//# sourceMappingURL=ModelError.js.map