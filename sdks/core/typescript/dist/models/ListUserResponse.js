"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserResponse = void 0;
var ListUserResponse = (function () {
    function ListUserResponse() {
    }
    ListUserResponse.getAttributeTypeMap = function () {
        return ListUserResponse.attributeTypeMap;
    };
    ListUserResponse.discriminator = undefined;
    ListUserResponse.mapping = undefined;
    ListUserResponse.attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>",
            "format": ""
        }
    ];
    return ListUserResponse;
}());
exports.ListUserResponse = ListUserResponse;
//# sourceMappingURL=ListUserResponse.js.map