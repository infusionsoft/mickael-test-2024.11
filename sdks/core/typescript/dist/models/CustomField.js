"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomField = void 0;
var CustomField = (function () {
    function CustomField() {
    }
    CustomField.getAttributeTypeMap = function () {
        return CustomField.attributeTypeMap;
    };
    CustomField.discriminator = undefined;
    CustomField.mapping = undefined;
    CustomField.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return CustomField;
}());
exports.CustomField = CustomField;
//# sourceMappingURL=CustomField.js.map