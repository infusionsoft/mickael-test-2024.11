"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleFulfillment = void 0;
var ApplicationConfigurationModuleFulfillment = (function () {
    function ApplicationConfigurationModuleFulfillment() {
    }
    ApplicationConfigurationModuleFulfillment.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleFulfillment.attributeTypeMap;
    };
    ApplicationConfigurationModuleFulfillment.discriminator = undefined;
    ApplicationConfigurationModuleFulfillment.mapping = undefined;
    ApplicationConfigurationModuleFulfillment.attributeTypeMap = [
        {
            "name": "defaultMessageFields",
            "baseName": "default_message_fields",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultMessageTo",
            "baseName": "default_message_to",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleFulfillment;
}());
exports.ApplicationConfigurationModuleFulfillment = ApplicationConfigurationModuleFulfillment;
//# sourceMappingURL=ApplicationConfigurationModuleFulfillment.js.map