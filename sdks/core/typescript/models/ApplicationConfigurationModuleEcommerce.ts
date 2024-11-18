/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleEcommerce {
    'creditCardTypes'?: string;
    'currency'?: string;
    'defaultChargeMaxRetryAttempts'?: number;
    'defaultCountry'?: string;
    'defaultMerchant'?: string;
    'defaultNumberOfDaysBetweenChargeAttempts'?: number;
    'defaultTax'?: string;
    'defaultToAutoCharge'?: boolean;
    'merchantAccountMaxRetryAttempts'?: number;
    'paymentTypes'?: string;
    'promoCodes'?: string;
    'trackCostPerUnit'?: boolean;
    'trackInventory'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleEcommerce.attributeTypeMap;
    }

    public constructor() {
    }
}
