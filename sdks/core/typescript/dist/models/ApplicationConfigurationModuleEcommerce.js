"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleEcommerce = void 0;
var ApplicationConfigurationModuleEcommerce = (function () {
    function ApplicationConfigurationModuleEcommerce() {
    }
    ApplicationConfigurationModuleEcommerce.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleEcommerce.attributeTypeMap;
    };
    ApplicationConfigurationModuleEcommerce.discriminator = undefined;
    ApplicationConfigurationModuleEcommerce.mapping = undefined;
    ApplicationConfigurationModuleEcommerce.attributeTypeMap = [
        {
            "name": "creditCardTypes",
            "baseName": "credit_card_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultChargeMaxRetryAttempts",
            "baseName": "default_charge_max_retry_attempts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultCountry",
            "baseName": "default_country",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultMerchant",
            "baseName": "default_merchant",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultNumberOfDaysBetweenChargeAttempts",
            "baseName": "default_number_of_days_between_charge_attempts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultTax",
            "baseName": "default_tax",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultToAutoCharge",
            "baseName": "default_to_auto_charge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "merchantAccountMaxRetryAttempts",
            "baseName": "merchant_account_max_retry_attempts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paymentTypes",
            "baseName": "payment_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "promoCodes",
            "baseName": "promo_codes",
            "type": "string",
            "format": ""
        },
        {
            "name": "trackCostPerUnit",
            "baseName": "track_cost_per_unit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "trackInventory",
            "baseName": "track_inventory",
            "type": "boolean",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleEcommerce;
}());
exports.ApplicationConfigurationModuleEcommerce = ApplicationConfigurationModuleEcommerce;
//# sourceMappingURL=ApplicationConfigurationModuleEcommerce.js.map