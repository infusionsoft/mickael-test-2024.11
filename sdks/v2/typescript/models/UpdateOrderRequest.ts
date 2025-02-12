/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AddressInformation } from '../models/AddressInformation';
import { HttpFile } from '../http/http';

export class UpdateOrderRequest {
    'contactId'?: string;
    'leadAffiliateId'?: string;
    'orderTime'?: string;
    'orderTitle'?: string;
    'orderType'?: UpdateOrderRequestOrderTypeEnum;
    /**
    * Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
    */
    'promoCodes'?: Array<string>;
    'salesAffiliateId'?: string;
    'shippingAddress'?: AddressInformation;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadAffiliateId",
            "baseName": "lead_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderTime",
            "baseName": "order_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderTitle",
            "baseName": "order_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderType",
            "baseName": "order_type",
            "type": "UpdateOrderRequestOrderTypeEnum",
            "format": ""
        },
        {
            "name": "promoCodes",
            "baseName": "promo_codes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "salesAffiliateId",
            "baseName": "sales_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "AddressInformation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateOrderRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateOrderRequestOrderTypeEnum {
    Offline = 'OFFLINE',
    Online = 'ONLINE'
}

