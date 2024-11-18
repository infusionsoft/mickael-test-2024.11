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

import { EmailSentCreateError } from '../models/EmailSentCreateError';
import { EmailSentWithContent } from '../models/EmailSentWithContent';
import { HttpFile } from '../http/http';

export class EmailsSentList {
    'emails'?: Array<EmailSentWithContent>;
    'errors'?: Array<EmailSentCreateError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<EmailSentWithContent>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<EmailSentCreateError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailsSentList.attributeTypeMap;
    }

    public constructor() {
    }
}
