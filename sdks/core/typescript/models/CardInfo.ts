/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CardInfo {
    'brand'?: string;
    'cardType'?: string;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'lastFour'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "cardType",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationMonth",
            "baseName": "expirationMonth",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationYear",
            "baseName": "expirationYear",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFour",
            "baseName": "lastFour",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
