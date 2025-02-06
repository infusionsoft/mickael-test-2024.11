/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LandingPage {
    'htmlPreviewUrl'?: string;
    'htmlUrl'?: string;
    'id'?: string;
    'templateGroupStatus'?: string;
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "htmlPreviewUrl",
            "baseName": "html_preview_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "htmlUrl",
            "baseName": "html_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateGroupStatus",
            "baseName": "template_group_status",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LandingPage.attributeTypeMap;
    }

    public constructor() {
    }
}
