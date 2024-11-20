"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactLink = void 0;
var ContactLink = (function () {
    function ContactLink() {
    }
    ContactLink.getAttributeTypeMap = function () {
        return ContactLink.attributeTypeMap;
    };
    ContactLink.discriminator = undefined;
    ContactLink.mapping = undefined;
    ContactLink.attributeTypeMap = [
        {
            "name": "contact1Id",
            "baseName": "contact1_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact2Id",
            "baseName": "contact2_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeId",
            "baseName": "link_type_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeName",
            "baseName": "link_type_name",
            "type": "string",
            "format": ""
        }
    ];
    return ContactLink;
}());
exports.ContactLink = ContactLink;
//# sourceMappingURL=ContactLink.js.map