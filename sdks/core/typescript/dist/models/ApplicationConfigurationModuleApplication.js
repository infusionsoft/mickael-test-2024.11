"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleApplication = void 0;
var ApplicationConfigurationModuleApplication = (function () {
    function ApplicationConfigurationModuleApplication() {
    }
    ApplicationConfigurationModuleApplication.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleApplication.attributeTypeMap;
    };
    ApplicationConfigurationModuleApplication.discriminator = undefined;
    ApplicationConfigurationModuleApplication.mapping = undefined;
    ApplicationConfigurationModuleApplication.attributeTypeMap = [
        {
            "name": "company",
            "baseName": "company",
            "type": "ApplicationCompany",
            "format": ""
        },
        {
            "name": "defaultViewLocale",
            "baseName": "default_view_locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "featuresEnabled",
            "baseName": "features_enabled",
            "type": "ApplicationFeaturesEnabled",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleApplication;
}());
exports.ApplicationConfigurationModuleApplication = ApplicationConfigurationModuleApplication;
//# sourceMappingURL=ApplicationConfigurationModuleApplication.js.map