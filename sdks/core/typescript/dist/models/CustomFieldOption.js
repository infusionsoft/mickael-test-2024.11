"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldOption = void 0;
var CustomFieldOption = (function () {
    function CustomFieldOption() {
    }
    CustomFieldOption.getAttributeTypeMap = function () {
        return CustomFieldOption.attributeTypeMap;
    };
    CustomFieldOption.discriminator = undefined;
    CustomFieldOption.mapping = undefined;
    CustomFieldOption.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CustomFieldOption>",
            "format": ""
        }
    ];
    return CustomFieldOption;
}());
exports.CustomFieldOption = CustomFieldOption;
//# sourceMappingURL=CustomFieldOption.js.map