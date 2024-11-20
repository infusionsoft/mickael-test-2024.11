"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicUser = void 0;
var BasicUser = (function () {
    function BasicUser() {
    }
    BasicUser.getAttributeTypeMap = function () {
        return BasicUser.attributeTypeMap;
    };
    BasicUser.discriminator = undefined;
    BasicUser.mapping = undefined;
    BasicUser.attributeTypeMap = [
        {
            "name": "emailAddress",
            "baseName": "email_address",
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
    return BasicUser;
}());
exports.BasicUser = BasicUser;
//# sourceMappingURL=BasicUser.js.map