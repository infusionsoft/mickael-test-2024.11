"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectModel = void 0;
var ObjectModel = (function () {
    function ObjectModel() {
    }
    ObjectModel.getAttributeTypeMap = function () {
        return ObjectModel.attributeTypeMap;
    };
    ObjectModel.discriminator = undefined;
    ObjectModel.mapping = undefined;
    ObjectModel.attributeTypeMap = [
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldMetaData>",
            "format": ""
        },
        {
            "name": "optionalProperties",
            "baseName": "optional_properties",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return ObjectModel;
}());
exports.ObjectModel = ObjectModel;
//# sourceMappingURL=ObjectModel.js.map