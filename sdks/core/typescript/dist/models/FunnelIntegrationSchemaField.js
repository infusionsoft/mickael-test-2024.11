"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunnelIntegrationSchemaField = void 0;
var FunnelIntegrationSchemaField = (function () {
    function FunnelIntegrationSchemaField() {
    }
    FunnelIntegrationSchemaField.getAttributeTypeMap = function () {
        return FunnelIntegrationSchemaField.attributeTypeMap;
    };
    FunnelIntegrationSchemaField.discriminator = undefined;
    FunnelIntegrationSchemaField.mapping = undefined;
    FunnelIntegrationSchemaField.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }
    ];
    return FunnelIntegrationSchemaField;
}());
exports.FunnelIntegrationSchemaField = FunnelIntegrationSchemaField;
//# sourceMappingURL=FunnelIntegrationSchemaField.js.map