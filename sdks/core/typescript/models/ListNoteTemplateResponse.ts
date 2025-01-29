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

import { NoteTemplate } from '../models/NoteTemplate';
import { HttpFile } from '../http/http';

export class ListNoteTemplateResponse {
    'nextPageToken'?: string;
    'noteTemplates'?: Array<NoteTemplate>;

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
            "name": "noteTemplates",
            "baseName": "note_templates",
            "type": "Array<NoteTemplate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListNoteTemplateResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
