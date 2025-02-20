/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProductInterest } from '../models/ProductInterest';
import { SubscriptionPlanInterest } from '../models/SubscriptionPlanInterest';
import { HttpFile } from '../http/http';

export class ProductInterestBundle {
    /**
    * Product interest bundle description
    */
    'description'?: string;
    /**
    * The product interest bundle ID
    */
    'id'?: string;
    /**
    * Product interest bundle name
    */
    'name'?: string;
    /**
    * Product interests
    */
    'productInterests'?: Array<ProductInterest>;
    /**
    * Subscription plan interests
    */
    'subscriptionPlanInterests'?: Array<SubscriptionPlanInterest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productInterests",
            "baseName": "product_interests",
            "type": "Array<ProductInterest>",
            "format": ""
        },
        {
            "name": "subscriptionPlanInterests",
            "baseName": "subscription_plan_interests",
            "type": "Array<SubscriptionPlanInterest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductInterestBundle.attributeTypeMap;
    }

    public constructor() {
    }
}
