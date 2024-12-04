"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomFieldMetaDataRequest = void 0;
var UpdateCustomFieldMetaDataRequest = (function () {
    function UpdateCustomFieldMetaDataRequest() {
    }
    UpdateCustomFieldMetaDataRequest.getAttributeTypeMap = function () {
        return UpdateCustomFieldMetaDataRequest.attributeTypeMap;
    };
    UpdateCustomFieldMetaDataRequest.discriminator = undefined;
    UpdateCustomFieldMetaDataRequest.mapping = undefined;
    UpdateCustomFieldMetaDataRequest.attributeTypeMap = [
        {
            "name": "groupId",
            "baseName": "group_id",
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
    return UpdateCustomFieldMetaDataRequest;
}());
exports.UpdateCustomFieldMetaDataRequest = UpdateCustomFieldMetaDataRequest;
//# sourceMappingURL=UpdateCustomFieldMetaDataRequest.js.map