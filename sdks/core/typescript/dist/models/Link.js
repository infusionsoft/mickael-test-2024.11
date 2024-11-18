"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var Link = (function () {
    function Link() {
    }
    Link.getAttributeTypeMap = function () {
        return Link.attributeTypeMap;
    };
    Link.discriminator = undefined;
    Link.mapping = undefined;
    Link.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
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
        },
        {
            "name": "linkedContactId",
            "baseName": "linked_contact_id",
            "type": "string",
            "format": ""
        }
    ];
    return Link;
}());
exports.Link = Link;
//# sourceMappingURL=Link.js.map