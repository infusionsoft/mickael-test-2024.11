"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleOpportunityStates = void 0;
var ApplicationConfigurationModuleOpportunityStates = (function () {
    function ApplicationConfigurationModuleOpportunityStates() {
    }
    ApplicationConfigurationModuleOpportunityStates.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleOpportunityStates.attributeTypeMap;
    };
    ApplicationConfigurationModuleOpportunityStates.discriminator = undefined;
    ApplicationConfigurationModuleOpportunityStates.mapping = undefined;
    ApplicationConfigurationModuleOpportunityStates.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "ApplicationConfigurationModuleOpportunityStatesActive",
            "format": ""
        },
        {
            "name": "loss",
            "baseName": "loss",
            "type": "ApplicationConfigurationModuleOpportunityStatesLoss",
            "format": ""
        },
        {
            "name": "win",
            "baseName": "win",
            "type": "ApplicationConfigurationModuleOpportunityStatesWin",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleOpportunityStates;
}());
exports.ApplicationConfigurationModuleOpportunityStates = ApplicationConfigurationModuleOpportunityStates;
//# sourceMappingURL=ApplicationConfigurationModuleOpportunityStates.js.map