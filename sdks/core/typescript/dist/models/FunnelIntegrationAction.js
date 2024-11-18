"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelIntegrationAction = void 0;
var FunnelIntegrationAction = (function () {
    function FunnelIntegrationAction() {
    }
    FunnelIntegrationAction.getAttributeTypeMap = function () {
        return FunnelIntegrationAction.attributeTypeMap;
    };
    FunnelIntegrationAction.discriminator = undefined;
    FunnelIntegrationAction.mapping = undefined;
    FunnelIntegrationAction.attributeTypeMap = [
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
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaFields",
            "baseName": "schema_fields",
            "type": "Array<FunnelIntegrationSchemaField>",
            "format": ""
        }
    ];
    return FunnelIntegrationAction;
}());
exports.FunnelIntegrationAction = FunnelIntegrationAction;
//# sourceMappingURL=FunnelIntegrationAction.js.map