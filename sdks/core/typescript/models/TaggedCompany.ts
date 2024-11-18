/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Company } from '../models/Company';
import { HttpFile } from '../http/http';

export class TaggedCompany {
    'appliedTime'?: string;
    'company'?: Company;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appliedTime",
            "baseName": "applied_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaggedCompany.attributeTypeMap;
    }

    public constructor() {
    }
}
