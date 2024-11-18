"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestV2User = void 0;
var RestV2User = (function () {
    function RestV2User() {
    }
    RestV2User.getAttributeTypeMap = function () {
        return RestV2User.attributeTypeMap;
    };
    RestV2User.discriminator = undefined;
    RestV2User.mapping = undefined;
    RestV2User.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        }
    ];
    return RestV2User;
}());
exports.RestV2User = RestV2User;
//# sourceMappingURL=RestV2User.js.map