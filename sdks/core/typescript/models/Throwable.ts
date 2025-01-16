/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StackTraceElement } from '../models/StackTraceElement';
import { HttpFile } from '../http/http';

export class Throwable {
    'cause'?: Throwable;
    'localizedMessage'?: string;
    'message'?: string;
    'stackTrace'?: Array<StackTraceElement>;
    'suppressed'?: Array<Throwable>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cause",
            "baseName": "cause",
            "type": "Throwable",
            "format": ""
        },
        {
            "name": "localizedMessage",
            "baseName": "localizedMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "stackTrace",
            "baseName": "stackTrace",
            "type": "Array<StackTraceElement>",
            "format": ""
        },
        {
            "name": "suppressed",
            "baseName": "suppressed",
            "type": "Array<Throwable>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Throwable.attributeTypeMap;
    }

    public constructor() {
    }
}
