"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelIntegrationTriggerResultDTO = void 0;
var FunnelIntegrationTriggerResultDTO = (function () {
    function FunnelIntegrationTriggerResultDTO() {
    }
    FunnelIntegrationTriggerResultDTO.getAttributeTypeMap = function () {
        return FunnelIntegrationTriggerResultDTO.attributeTypeMap;
    };
    FunnelIntegrationTriggerResultDTO.discriminator = undefined;
    FunnelIntegrationTriggerResultDTO.mapping = undefined;
    FunnelIntegrationTriggerResultDTO.attributeTypeMap = [
        {
            "name": "automationId",
            "baseName": "automation_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "goalId",
            "baseName": "goal_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaData",
            "baseName": "schema_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }
    ];
    return FunnelIntegrationTriggerResultDTO;
}());
exports.FunnelIntegrationTriggerResultDTO = FunnelIntegrationTriggerResultDTO;
//# sourceMappingURL=FunnelIntegrationTriggerResultDTO.js.map