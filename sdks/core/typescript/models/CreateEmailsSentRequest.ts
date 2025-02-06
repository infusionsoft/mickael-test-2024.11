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

import { CreateEmailSentRequest } from '../models/CreateEmailSentRequest';
import { HttpFile } from '../http/http';

export class CreateEmailsSentRequest {
    'emails'?: Array<CreateEmailSentRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<CreateEmailSentRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEmailsSentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
