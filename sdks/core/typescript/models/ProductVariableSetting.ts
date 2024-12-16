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

import { HttpFile } from '../http/http';

export class ProductVariableSetting {
    /**
    * If spaces are allowed for the option
    */
    'containSpaces'?: boolean;
    /**
    * Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.
    */
    'contains'?: string;
    /**
    * Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.
    */
    'endWith'?: string;
    /**
    * Max allowable chars. Its value must be greater than min_chars
    */
    'maxChars'?: number;
    /**
    * Minimum allowable characters
    */
    'minChars'?: number;
    /**
    * Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.
    */
    'startWith'?: string;
    /**
    * Customized validation message to display when option criteria aren’t met
    */
    'validationMsg'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containSpaces",
            "baseName": "contain_spaces",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contains",
            "baseName": "contains",
            "type": "string",
            "format": ""
        },
        {
            "name": "endWith",
            "baseName": "end_with",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxChars",
            "baseName": "max_chars",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "minChars",
            "baseName": "min_chars",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startWith",
            "baseName": "start_with",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationMsg",
            "baseName": "validation_msg",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductVariableSetting.attributeTypeMap;
    }

    public constructor() {
    }
}
