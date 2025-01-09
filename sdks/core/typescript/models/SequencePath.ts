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

import { Item } from '../models/Item';
import { HttpFile } from '../http/http';

export class SequencePath {
    'id'?: string;
    'items'?: Array<Item>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SequencePath.attributeTypeMap;
    }

    public constructor() {
    }
}
