/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CardInfo } from '../models/CardInfo';
import { HttpFile } from '../http/http';

export class RestPaymentMethod {
    'cardInfo'?: CardInfo;
    'dateCreated'?: Date;
    'id'?: string;
    'paymentMethodType'?: string;
    'processorId'?: string;
    'processorType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardInfo",
            "baseName": "cardInfo",
            "type": "CardInfo",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string",
            "format": ""
        },
        {
            "name": "processorId",
            "baseName": "processorId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "processorType",
            "baseName": "processorType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestPaymentMethod.attributeTypeMap;
    }

    public constructor() {
    }
}
