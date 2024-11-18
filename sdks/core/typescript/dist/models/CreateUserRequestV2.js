"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequestV2 = void 0;
var CreateUserRequestV2 = (function () {
    function CreateUserRequestV2() {
    }
    CreateUserRequestV2.getAttributeTypeMap = function () {
        return CreateUserRequestV2.attributeTypeMap;
    };
    CreateUserRequestV2.discriminator = undefined;
    CreateUserRequestV2.mapping = undefined;
    CreateUserRequestV2.attributeTypeMap = [
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "EmailAddressRequest",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "boolean",
            "format": ""
        }
    ];
    return CreateUserRequestV2;
}());
exports.CreateUserRequestV2 = CreateUserRequestV2;
//# sourceMappingURL=CreateUserRequestV2.js.map