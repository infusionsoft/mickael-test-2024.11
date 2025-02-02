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

import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
import { HttpFile } from '../http/http';

export class ObjectModel {
    'customFields'?: Array<CustomFieldMetaData>;
    /**
    * These fields are not transmitted by default on this model, but can be requested by specifying them in a comma-separated list in the optional_properties query parameter.
    */
    'optionalProperties'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldMetaData>",
            "format": ""
        },
        {
            "name": "optionalProperties",
            "baseName": "optional_properties",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectModel.attributeTypeMap;
    }

    public constructor() {
    }
}
