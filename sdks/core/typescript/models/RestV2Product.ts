/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CurrencyValue } from '../models/CurrencyValue';
import { ProductInventory } from '../models/ProductInventory';
import { ProductOptions } from '../models/ProductOptions';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { HttpFile } from '../http/http';

export class RestV2Product {
    /**
    * True means active, False means inactive
    */
    'active'?: boolean;
    /**
    * List of category ids to indicate which categories this product will belong to. Can be empty.
    */
    'categories'?: Array<string>;
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
    * The product ID
    */
    'id'?: string;
    'inventory'?: ProductInventory;
    /**
    * Product name
    */
    'name'?: string;
    /**
    * List of product options. Can be empty.
    */
    'options'?: Array<ProductOptions>;
    'price'?: CurrencyValue;
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
    * List of subscription plans associated with the product. Can be empty.
    */
    'subscriptionPlans'?: Array<SubscriptionPlan>;
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
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "inventory",
            "baseName": "inventory",
            "type": "ProductInventory",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<ProductOptions>",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "CurrencyValue",
            "format": ""
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
            "name": "subscriptionPlans",
            "baseName": "subscription_plans",
            "type": "Array<SubscriptionPlan>",
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
        return RestV2Product.attributeTypeMap;
    }

    public constructor() {
    }
}
