"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFieldResponse = void 0;
var CreateCustomFieldResponse = (function () {
    function CreateCustomFieldResponse() {
    }
    CreateCustomFieldResponse.getAttributeTypeMap = function () {
        return CreateCustomFieldResponse.attributeTypeMap;
    };
    CreateCustomFieldResponse.discriminator = undefined;
    CreateCustomFieldResponse.mapping = undefined;
    CreateCustomFieldResponse.attributeTypeMap = [
        {
            "name": "customField",
            "baseName": "custom_field",
            "type": "CustomFieldMetaData",
            "format": ""
        }
    ];
    return CreateCustomFieldResponse;
}());
exports.CreateCustomFieldResponse = CreateCustomFieldResponse;
//# sourceMappingURL=CreateCustomFieldResponse.js.map