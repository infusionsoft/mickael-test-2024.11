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

import { CustomFieldOption } from '../models/CustomFieldOption';
import { HttpFile } from '../http/http';

export class UpdateCustomFieldMetaDataRequest {
    'groupId': string;
    'label'?: string;
    'options'?: Array<CustomFieldOption>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupId",
            "baseName": "group_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CustomFieldOption>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCustomFieldMetaDataRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
