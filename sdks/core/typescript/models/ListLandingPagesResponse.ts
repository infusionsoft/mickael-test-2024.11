/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LandingPage } from '../models/LandingPage';
import { HttpFile } from '../http/http';

export class ListLandingPagesResponse {
    'landingpages'?: Array<LandingPage>;
    'nextPageToken'?: string;
    'pageSize'?: string;
    'pages'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "landingpages",
            "baseName": "landingpages",
            "type": "Array<LandingPage>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListLandingPagesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
