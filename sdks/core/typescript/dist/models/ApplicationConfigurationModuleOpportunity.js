"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleOpportunity = void 0;
var ApplicationConfigurationModuleOpportunity = (function () {
    function ApplicationConfigurationModuleOpportunity() {
    }
    ApplicationConfigurationModuleOpportunity.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleOpportunity.attributeTypeMap;
    };
    ApplicationConfigurationModuleOpportunity.discriminator = undefined;
    ApplicationConfigurationModuleOpportunity.mapping = undefined;
    ApplicationConfigurationModuleOpportunity.attributeTypeMap = [
        {
            "name": "defaultStage",
            "baseName": "default_stage",
            "type": "string",
            "format": ""
        },
        {
            "name": "states",
            "baseName": "states",
            "type": "ApplicationConfigurationModuleOpportunityStates",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleOpportunity;
}());
exports.ApplicationConfigurationModuleOpportunity = ApplicationConfigurationModuleOpportunity;
//# sourceMappingURL=ApplicationConfigurationModuleOpportunity.js.map