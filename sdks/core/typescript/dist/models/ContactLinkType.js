"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLinkType = void 0;
var ContactLinkType = (function () {
    function ContactLinkType() {
    }
    ContactLinkType.getAttributeTypeMap = function () {
        return ContactLinkType.attributeTypeMap;
    };
    ContactLinkType.discriminator = undefined;
    ContactLinkType.mapping = undefined;
    ContactLinkType.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
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
    return ContactLinkType;
}());
exports.ContactLinkType = ContactLinkType;
//# sourceMappingURL=ContactLinkType.js.map