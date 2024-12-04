"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleAppointment = void 0;
var ApplicationConfigurationModuleAppointment = (function () {
    function ApplicationConfigurationModuleAppointment() {
    }
    ApplicationConfigurationModuleAppointment.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleAppointment.attributeTypeMap;
    };
    ApplicationConfigurationModuleAppointment.discriminator = undefined;
    ApplicationConfigurationModuleAppointment.mapping = undefined;
    ApplicationConfigurationModuleAppointment.attributeTypeMap = [
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
    return ApplicationConfigurationModuleAppointment;
}());
exports.ApplicationConfigurationModuleAppointment = ApplicationConfigurationModuleAppointment;
//# sourceMappingURL=ApplicationConfigurationModuleAppointment.js.map