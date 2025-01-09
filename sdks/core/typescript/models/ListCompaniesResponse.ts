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

import { Company } from '../models/Company';
import { HttpFile } from '../http/http';

export class ListCompaniesResponse {
    'companies'?: Array<Company>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "companies",
            "baseName": "companies",
            "type": "Array<Company>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCompaniesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
