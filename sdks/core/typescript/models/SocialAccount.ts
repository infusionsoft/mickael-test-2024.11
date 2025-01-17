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

import { HttpFile } from '../http/http';

export class SocialAccount {
    'name'?: string;
    'type': SocialAccountTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SocialAccountTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SocialAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SocialAccountTypeEnum {
    SocialAccountTypeUnspecified = 'SOCIAL_ACCOUNT_TYPE_UNSPECIFIED',
    Facebook = 'FACEBOOK',
    LinkedIn = 'LINKED_IN',
    Twitter = 'TWITTER',
    Instagram = 'INSTAGRAM',
    Snapchat = 'SNAPCHAT',
    Youtube = 'YOUTUBE',
    Pinterest = 'PINTEREST'
}

