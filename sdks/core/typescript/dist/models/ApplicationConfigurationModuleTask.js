"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleTask = void 0;
var ApplicationConfigurationModuleTask = (function () {
    function ApplicationConfigurationModuleTask() {
    }
    ApplicationConfigurationModuleTask.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleTask.attributeTypeMap;
    };
    ApplicationConfigurationModuleTask.discriminator = undefined;
    ApplicationConfigurationModuleTask.mapping = undefined;
    ApplicationConfigurationModuleTask.attributeTypeMap = [
        {
            "name": "appointmentTypes",
            "baseName": "appointment_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareOpportunityWithRelatedUser",
            "baseName": "share_opportunity_with_related_user",
            "type": "boolean",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleTask;
}());
exports.ApplicationConfigurationModuleTask = ApplicationConfigurationModuleTask;
//# sourceMappingURL=ApplicationConfigurationModuleTask.js.map