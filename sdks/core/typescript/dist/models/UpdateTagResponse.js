"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagResponse = void 0;
var UpdateTagResponse = (function () {
    function UpdateTagResponse() {
    }
    UpdateTagResponse.getAttributeTypeMap = function () {
        return UpdateTagResponse.attributeTypeMap;
    };
    UpdateTagResponse.discriminator = undefined;
    UpdateTagResponse.mapping = undefined;
    UpdateTagResponse.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "CategoryReference",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return UpdateTagResponse;
}());
exports.UpdateTagResponse = UpdateTagResponse;
//# sourceMappingURL=UpdateTagResponse.js.map