"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelIntegrationTriggerEventDTO = void 0;
var FunnelIntegrationTriggerEventDTO = (function () {
    function FunnelIntegrationTriggerEventDTO() {
    }
    FunnelIntegrationTriggerEventDTO.getAttributeTypeMap = function () {
        return FunnelIntegrationTriggerEventDTO.attributeTypeMap;
    };
    FunnelIntegrationTriggerEventDTO.discriminator = undefined;
    FunnelIntegrationTriggerEventDTO.mapping = undefined;
    FunnelIntegrationTriggerEventDTO.attributeTypeMap = [
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "oracleId",
            "baseName": "oracle_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaData",
            "baseName": "schema_data",
            "type": "string",
            "format": ""
        }
    ];
    return FunnelIntegrationTriggerEventDTO;
}());
exports.FunnelIntegrationTriggerEventDTO = FunnelIntegrationTriggerEventDTO;
//# sourceMappingURL=FunnelIntegrationTriggerEventDTO.js.map