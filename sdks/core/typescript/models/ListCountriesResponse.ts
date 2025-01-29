/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Country } from '../models/Country';
import { HttpFile } from '../http/http';

export class ListCountriesResponse {
    /**
    * A key-value pair of country code and country name.
    */
    'countries': Array<Country>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<Country>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCountriesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
