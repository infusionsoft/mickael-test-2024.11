"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleTemplate = void 0;
var ApplicationConfigurationModuleTemplate = (function () {
    function ApplicationConfigurationModuleTemplate() {
    }
    ApplicationConfigurationModuleTemplate.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleTemplate.attributeTypeMap;
    };
    ApplicationConfigurationModuleTemplate.discriminator = undefined;
    ApplicationConfigurationModuleTemplate.mapping = undefined;
    ApplicationConfigurationModuleTemplate.attributeTypeMap = [
        {
            "name": "defaultCountryCode",
            "baseName": "default_country_code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultUserId",
            "baseName": "default_user_id",
            "type": "number",
            "format": "int64"
        }
    ];
    return ApplicationConfigurationModuleTemplate;
}());
exports.ApplicationConfigurationModuleTemplate = ApplicationConfigurationModuleTemplate;
//# sourceMappingURL=ApplicationConfigurationModuleTemplate.js.map