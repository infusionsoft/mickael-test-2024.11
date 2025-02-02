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

import { RestProductOption } from '../models/RestProductOption';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { HttpFile } from '../http/http';

export class OrderItemProduct {
    'createdTime'?: string;
    'description'?: string;
    'id'?: string;
    'lastUpdatedTime'?: string;
    'name'?: string;
    'productOptions'?: Array<RestProductOption>;
    'productPrice'?: number;
    'productShortDescription'?: string;
    'shippable'?: boolean;
    'sku'?: string;
    'status'?: OrderItemProductStatusEnum;
    'subscriptionOnly'?: boolean;
    'subscriptionPlans'?: Array<RestSubscriptionPlan>;
    'taxable'?: boolean;
    /**
    * The url is the permalink to the resource
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdTime",
            "baseName": "created_time",
            "type": "string",
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
            "name": "lastUpdatedTime",
            "baseName": "last_updated_time",
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
            "name": "productOptions",
            "baseName": "product_options",
            "type": "Array<RestProductOption>",
            "format": ""
        },
        {
            "name": "productPrice",
            "baseName": "product_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "productShortDescription",
            "baseName": "product_short_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippable",
            "baseName": "shippable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderItemProductStatusEnum",
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
            "type": "Array<RestSubscriptionPlan>",
            "format": ""
        },
        {
            "name": "taxable",
            "baseName": "taxable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderItemProduct.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum OrderItemProductStatusEnum {
    Inactive = 'INACTIVE',
    Active = 'ACTIVE'
}

