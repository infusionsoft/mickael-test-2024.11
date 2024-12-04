"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactLinkTypeRequest = void 0;
var CreateContactLinkTypeRequest = (function () {
    function CreateContactLinkTypeRequest() {
    }
    CreateContactLinkTypeRequest.getAttributeTypeMap = function () {
        return CreateContactLinkTypeRequest.attributeTypeMap;
    };
    CreateContactLinkTypeRequest.discriminator = undefined;
    CreateContactLinkTypeRequest.mapping = undefined;
    CreateContactLinkTypeRequest.attributeTypeMap = [
        {
            "name": "maxLinks",
            "baseName": "max_links",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return CreateContactLinkTypeRequest;
}());
exports.CreateContactLinkTypeRequest = CreateContactLinkTypeRequest;
//# sourceMappingURL=CreateContactLinkTypeRequest.js.map