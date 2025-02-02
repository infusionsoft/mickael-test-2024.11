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

import { Provinces } from '../models/Provinces';
import { HttpFile } from '../http/http';

export class ListProvincesResponse {
    /**
    * A key-value pair of province code and province name.
    */
    'provinces': Array<Provinces>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provinces",
            "baseName": "provinces",
            "type": "Array<Provinces>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListProvincesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
