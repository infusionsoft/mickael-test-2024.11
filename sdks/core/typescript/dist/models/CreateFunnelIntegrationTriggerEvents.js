"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFunnelIntegrationTriggerEvents = void 0;
var CreateFunnelIntegrationTriggerEvents = (function () {
    function CreateFunnelIntegrationTriggerEvents() {
    }
    CreateFunnelIntegrationTriggerEvents.getAttributeTypeMap = function () {
        return CreateFunnelIntegrationTriggerEvents.attributeTypeMap;
    };
    CreateFunnelIntegrationTriggerEvents.discriminator = undefined;
    CreateFunnelIntegrationTriggerEvents.mapping = undefined;
    CreateFunnelIntegrationTriggerEvents.attributeTypeMap = [
        {
            "name": "funnelIntegrationTriggerEvents",
            "baseName": "funnel_integration_trigger_events",
            "type": "Array<FunnelIntegrationTriggerEventDTO>",
            "format": ""
        }
    ];
    return CreateFunnelIntegrationTriggerEvents;
}());
exports.CreateFunnelIntegrationTriggerEvents = CreateFunnelIntegrationTriggerEvents;
//# sourceMappingURL=CreateFunnelIntegrationTriggerEvents.js.map