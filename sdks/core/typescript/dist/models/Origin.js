"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Origin = void 0;
var Origin = (function () {
    function Origin() {
    }
    Origin.getAttributeTypeMap = function () {
        return Origin.attributeTypeMap;
    };
    Origin.discriminator = undefined;
    Origin.mapping = undefined;
    Origin.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        }
    ];
    return Origin;
}());
exports.Origin = Origin;
//# sourceMappingURL=Origin.js.map