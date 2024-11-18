"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserInfoResponse = void 0;
var GetUserInfoResponse = (function () {
    function GetUserInfoResponse() {
    }
    GetUserInfoResponse.getAttributeTypeMap = function () {
        return GetUserInfoResponse.attributeTypeMap;
    };
    GetUserInfoResponse.discriminator = undefined;
    GetUserInfoResponse.mapping = undefined;
    GetUserInfoResponse.attributeTypeMap = [
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
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isAdmin",
            "baseName": "is_admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keapId",
            "baseName": "keap_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredName",
            "baseName": "preferred_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sub",
            "baseName": "sub",
            "type": "string",
            "format": ""
        }
    ];
    return GetUserInfoResponse;
}());
exports.GetUserInfoResponse = GetUserInfoResponse;
//# sourceMappingURL=GetUserInfoResponse.js.map