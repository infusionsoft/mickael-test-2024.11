"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelIntegrationHttpRequest = void 0;
var FunnelIntegrationHttpRequest = (function () {
    function FunnelIntegrationHttpRequest() {
    }
    FunnelIntegrationHttpRequest.getAttributeTypeMap = function () {
        return FunnelIntegrationHttpRequest.attributeTypeMap;
    };
    FunnelIntegrationHttpRequest.discriminator = undefined;
    FunnelIntegrationHttpRequest.mapping = undefined;
    FunnelIntegrationHttpRequest.attributeTypeMap = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "callType",
            "baseName": "call_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "headerParameters",
            "baseName": "header_parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "_queryParameters",
            "baseName": "query_parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return FunnelIntegrationHttpRequest;
}());
exports.FunnelIntegrationHttpRequest = FunnelIntegrationHttpRequest;
//# sourceMappingURL=FunnelIntegrationHttpRequest.js.map