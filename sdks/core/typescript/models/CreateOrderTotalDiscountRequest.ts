/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DiscountCriteria } from '../models/DiscountCriteria';
import { HttpFile } from '../http/http';

export class CreateOrderTotalDiscountRequest {
    'applyToCommissions'?: boolean;
    'criteria'?: Array<DiscountCriteria>;
    'description'?: string;
    'discountStrategy'?: CreateOrderTotalDiscountRequestDiscountStrategyEnum;
    'discountType': CreateOrderTotalDiscountRequestDiscountTypeEnum;
    'discountValue': number;
    'name': string;

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
            "name": "discountStrategy",
            "baseName": "discount_strategy",
            "type": "CreateOrderTotalDiscountRequestDiscountStrategyEnum",
            "format": ""
        },
        {
            "name": "discountType",
            "baseName": "discount_type",
            "type": "CreateOrderTotalDiscountRequestDiscountTypeEnum",
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
        return CreateOrderTotalDiscountRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateOrderTotalDiscountRequestDiscountStrategyEnum {
    Gross = 'GROSS',
    Net = 'NET'
}
export enum CreateOrderTotalDiscountRequestDiscountTypeEnum {
    Amount = 'AMOUNT',
    Percent = 'PERCENT'
}

