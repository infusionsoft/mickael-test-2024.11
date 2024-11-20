"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFunnelIntegrationRequest = void 0;
var DeleteFunnelIntegrationRequest = (function () {
    function DeleteFunnelIntegrationRequest() {
    }
    DeleteFunnelIntegrationRequest.getAttributeTypeMap = function () {
        return DeleteFunnelIntegrationRequest.attributeTypeMap;
    };
    DeleteFunnelIntegrationRequest.discriminator = undefined;
    DeleteFunnelIntegrationRequest.mapping = undefined;
    DeleteFunnelIntegrationRequest.attributeTypeMap = [
        {
            "name": "actionNames",
            "baseName": "action_names",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "integrationNames",
            "baseName": "integration_names",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "triggerNames",
            "baseName": "trigger_names",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return DeleteFunnelIntegrationRequest;
}());
exports.DeleteFunnelIntegrationRequest = DeleteFunnelIntegrationRequest;
//# sourceMappingURL=DeleteFunnelIntegrationRequest.js.map