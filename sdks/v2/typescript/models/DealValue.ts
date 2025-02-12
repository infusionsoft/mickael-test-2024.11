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

import { HttpFile } from '../http/http';

/**
* The monetary value of the deal. This field is required and must be valid.
*/
export class DealValue {
    /**
    * The amount of money. This field is required.
    */
    'amount': number;
    /**
    * The currency of the money. This field is required.
    */
    'currency': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DealValue.attributeTypeMap;
    }

    public constructor() {
    }
}
