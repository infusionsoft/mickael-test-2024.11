"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFieldOptionRequest = void 0;
var CreateCustomFieldOptionRequest = (function () {
    function CreateCustomFieldOptionRequest() {
    }
    CreateCustomFieldOptionRequest.getAttributeTypeMap = function () {
        return CreateCustomFieldOptionRequest.attributeTypeMap;
    };
    CreateCustomFieldOptionRequest.discriminator = undefined;
    CreateCustomFieldOptionRequest.mapping = undefined;
    CreateCustomFieldOptionRequest.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CreateCustomFieldOptionRequest>",
            "format": ""
        }
    ];
    return CreateCustomFieldOptionRequest;
}());
exports.CreateCustomFieldOptionRequest = CreateCustomFieldOptionRequest;
//# sourceMappingURL=CreateCustomFieldOptionRequest.js.map