"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicContact = void 0;
var BasicContact = (function () {
    function BasicContact() {
    }
    BasicContact.getAttributeTypeMap = function () {
        return BasicContact.attributeTypeMap;
    };
    BasicContact.discriminator = undefined;
    BasicContact.mapping = undefined;
    BasicContact.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return BasicContact;
}());
exports.BasicContact = BasicContact;
//# sourceMappingURL=BasicContact.js.map