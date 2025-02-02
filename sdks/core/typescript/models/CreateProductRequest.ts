/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateProductRequest {
    /**
    * True means active, False means inactive
    */
    'active'?: boolean;
    /**
    * If city-based taxes should be applied to this product
    */
    'cityTaxable'?: boolean;
    /**
    * If country-based taxes should be applied to this product
    */
    'countryTaxable'?: boolean;
    /**
    * Product long description
    */
    'description'?: string;
    /**
    * Product name
    */
    'name'?: string;
    /**
    * The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250.
    */
    'price'?: number;
    /**
    * Product short description
    */
    'shortDescription'?: string;
    /**
    * Product SKU
    */
    'sku'?: string;
    /**
    * If state-based taxes should be applied to this product
    */
    'stateTaxable'?: boolean;
    /**
    * If the product should not be shown in the storefront
    */
    'storefrontHidden'?: boolean;
    /**
    * If the product is a subscription-only product
    */
    'subscriptionOnly'?: boolean;
    /**
    * Whether or not the product should be taxed
    */
    'taxable'?: boolean;
    /**
    * Product weight
    */
    'weight'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cityTaxable",
            "baseName": "city_taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "countryTaxable",
            "baseName": "country_taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "shortDescription",
            "baseName": "short_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateTaxable",
            "baseName": "state_taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "storefrontHidden",
            "baseName": "storefront_hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionOnly",
            "baseName": "subscription_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "taxable",
            "baseName": "taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return CreateProductRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
