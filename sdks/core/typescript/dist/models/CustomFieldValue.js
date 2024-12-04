"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldValue = void 0;
var CustomFieldValue = (function () {
    function CustomFieldValue() {
    }
    CustomFieldValue.getAttributeTypeMap = function () {
        return CustomFieldValue.attributeTypeMap;
    };
    CustomFieldValue.discriminator = undefined;
    CustomFieldValue.mapping = undefined;
    CustomFieldValue.attributeTypeMap = [
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
    return CustomFieldValue;
}());
exports.CustomFieldValue = CustomFieldValue;
//# sourceMappingURL=CustomFieldValue.js.map