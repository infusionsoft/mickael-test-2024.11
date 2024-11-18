"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSettingsResponse = void 0;
var GetSettingsResponse = (function () {
    function GetSettingsResponse() {
    }
    GetSettingsResponse.getAttributeTypeMap = function () {
        return GetSettingsResponse.attributeTypeMap;
    };
    GetSettingsResponse.discriminator = undefined;
    GetSettingsResponse.mapping = undefined;
    GetSettingsResponse.attributeTypeMap = [
        {
            "name": "affiliate",
            "baseName": "affiliate",
            "type": "ApplicationConfigurationModuleAffiliate",
            "format": ""
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "ApplicationConfigurationModuleApplication",
            "format": ""
        },
        {
            "name": "appointment",
            "baseName": "appointment",
            "type": "ApplicationConfigurationModuleAppointment",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "ApplicationConfigurationModuleContact",
            "format": ""
        },
        {
            "name": "ecommerce",
            "baseName": "ecommerce",
            "type": "ApplicationConfigurationModuleEcommerce",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "ApplicationConfigurationModuleEmail",
            "format": ""
        },
        {
            "name": "forms",
            "baseName": "forms",
            "type": "ApplicationConfigurationModuleForms",
            "format": ""
        },
        {
            "name": "fulfillment",
            "baseName": "fulfillment",
            "type": "ApplicationConfigurationModuleFulfillment",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "ApplicationConfigurationModuleInvoice",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "ApplicationConfigurationModuleNote",
            "format": ""
        },
        {
            "name": "opportunity",
            "baseName": "opportunity",
            "type": "ApplicationConfigurationModuleOpportunity",
            "format": ""
        },
        {
            "name": "task",
            "baseName": "task",
            "type": "ApplicationConfigurationModuleTask",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ApplicationConfigurationModuleTemplate",
            "format": ""
        }
    ];
    return GetSettingsResponse;
}());
exports.GetSettingsResponse = GetSettingsResponse;
//# sourceMappingURL=GetSettingsResponse.js.map