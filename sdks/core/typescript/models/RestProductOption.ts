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

import { RestProductOptionValue } from '../models/RestProductOptionValue';
import { HttpFile } from '../http/http';

export class RestProductOption {
    'allowSpaces'?: boolean;
    'canContainCharacter'?: boolean;
    'canContainNumber'?: boolean;
    'canEndWithCharacter'?: boolean;
    'canEndWithNumber'?: boolean;
    'canStartWithCharacter'?: boolean;
    'canStartWithNumber'?: boolean;
    'displayIndex'?: number;
    'id'?: string;
    'label'?: string;
    'maxChars'?: number;
    'minChars'?: number;
    'name'?: string;
    'required'?: boolean;
    'textMessage'?: string;
    'type'?: RestProductOptionTypeEnum;
    'values'?: Array<RestProductOptionValue>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowSpaces",
            "baseName": "allow_spaces",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canContainCharacter",
            "baseName": "can_contain_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canContainNumber",
            "baseName": "can_contain_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canEndWithCharacter",
            "baseName": "can_end_with_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canEndWithNumber",
            "baseName": "can_end_with_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canStartWithCharacter",
            "baseName": "can_start_with_character",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canStartWithNumber",
            "baseName": "can_start_with_number",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "displayIndex",
            "baseName": "display_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "textMessage",
            "baseName": "text_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RestProductOptionTypeEnum",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<RestProductOptionValue>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestProductOption.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RestProductOptionTypeEnum {
    Fixed = 'FIXED',
    Variable = 'VARIABLE'
}

