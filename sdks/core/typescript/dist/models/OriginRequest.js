"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginRequest = void 0;
var OriginRequest = (function () {
    function OriginRequest() {
    }
    OriginRequest.getAttributeTypeMap = function () {
        return OriginRequest.attributeTypeMap;
    };
    OriginRequest.discriminator = undefined;
    OriginRequest.mapping = undefined;
    OriginRequest.attributeTypeMap = [
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        }
    ];
    return OriginRequest;
}());
exports.OriginRequest = OriginRequest;
//# sourceMappingURL=OriginRequest.js.map