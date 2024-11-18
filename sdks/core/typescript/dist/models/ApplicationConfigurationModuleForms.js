"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleForms = void 0;
var ApplicationConfigurationModuleForms = (function () {
    function ApplicationConfigurationModuleForms() {
    }
    ApplicationConfigurationModuleForms.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleForms.attributeTypeMap;
    };
    ApplicationConfigurationModuleForms.discriminator = undefined;
    ApplicationConfigurationModuleForms.mapping = undefined;
    ApplicationConfigurationModuleForms.attributeTypeMap = [
        {
            "name": "spamFiltersEnabled",
            "baseName": "spam_filters_enabled",
            "type": "boolean",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleForms;
}());
exports.ApplicationConfigurationModuleForms = ApplicationConfigurationModuleForms;
//# sourceMappingURL=ApplicationConfigurationModuleForms.js.map