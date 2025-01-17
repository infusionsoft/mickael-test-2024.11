/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Tag } from '../models/Tag';
import { HttpFile } from '../http/http';

export class ListTagCategoriesResponse {
    'nextPageToken'?: string;
    'tagCategories'?: Array<Tag>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagCategories",
            "baseName": "tag_categories",
            "type": "Array<Tag>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListTagCategoriesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
