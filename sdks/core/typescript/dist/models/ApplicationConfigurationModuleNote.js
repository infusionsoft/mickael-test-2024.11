"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleNote = void 0;
var ApplicationConfigurationModuleNote = (function () {
    function ApplicationConfigurationModuleNote() {
    }
    ApplicationConfigurationModuleNote.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleNote.attributeTypeMap;
    };
    ApplicationConfigurationModuleNote.discriminator = undefined;
    ApplicationConfigurationModuleNote.mapping = undefined;
    ApplicationConfigurationModuleNote.attributeTypeMap = [
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
    return ApplicationConfigurationModuleNote;
}());
exports.ApplicationConfigurationModuleNote = ApplicationConfigurationModuleNote;
//# sourceMappingURL=ApplicationConfigurationModuleNote.js.map