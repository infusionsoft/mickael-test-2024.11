/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DiscountCriteria } from '../models/DiscountCriteria';
import { HttpFile } from '../http/http';

export class CreateCategoryDiscountRequest {
    'applyToCommissions': boolean;
    'criteria'?: Array<DiscountCriteria>;
    'description'?: string;
    'discountPercent': number;
    'name': string;
    'productCategoryIds': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applyToCommissions",
            "baseName": "apply_to_commissions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "Array<DiscountCriteria>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "discountPercent",
            "baseName": "discount_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCategoryIds",
            "baseName": "product_category_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateCategoryDiscountRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
