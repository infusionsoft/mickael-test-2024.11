"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunnelIntegrationRequest = void 0;
var CreateFunnelIntegrationRequest = (function () {
    function CreateFunnelIntegrationRequest() {
    }
    CreateFunnelIntegrationRequest.getAttributeTypeMap = function () {
        return CreateFunnelIntegrationRequest.attributeTypeMap;
    };
    CreateFunnelIntegrationRequest.discriminator = undefined;
    CreateFunnelIntegrationRequest.mapping = undefined;
    CreateFunnelIntegrationRequest.attributeTypeMap = [
        {
            "name": "baseUrl",
            "baseName": "base_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "funnelIntegrationActions",
            "baseName": "funnel_integration_actions",
            "type": "Array<FunnelIntegrationAction>",
            "format": ""
        },
        {
            "name": "funnelIntegrationTriggers",
            "baseName": "funnel_integration_triggers",
            "type": "Array<FunnelIntegrationAction>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return CreateFunnelIntegrationRequest;
}());
exports.CreateFunnelIntegrationRequest = CreateFunnelIntegrationRequest;
//# sourceMappingURL=CreateFunnelIntegrationRequest.js.map