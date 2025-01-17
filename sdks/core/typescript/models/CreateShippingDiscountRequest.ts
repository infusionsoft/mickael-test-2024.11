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

export class CreateShippingDiscountRequest {
    'criteria'?: Array<DiscountCriteria>;
    'description'?: string;
    'discountType': CreateShippingDiscountRequestDiscountTypeEnum;
    'discountValue': number;
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "discountType",
            "baseName": "discount_type",
            "type": "CreateShippingDiscountRequestDiscountTypeEnum",
            "format": ""
        },
        {
            "name": "discountValue",
            "baseName": "discount_value",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateShippingDiscountRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateShippingDiscountRequestDiscountTypeEnum {
    Amount = 'AMOUNT',
    Percent = 'PERCENT'
}

