/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Referral {
    'contactId'?: string;
    'description'?: string;
    'expirationTime'?: string;
    'id'?: string;
    'ipAddress'?: string;
    'referralPartnerId'?: string;
    'referralTime'?: string;
    'referralType'?: ReferralReferralTypeEnum;
    'source'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationTime",
            "baseName": "expiration_time",
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
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralPartnerId",
            "baseName": "referral_partner_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralTime",
            "baseName": "referral_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralType",
            "baseName": "referral_type",
            "type": "ReferralReferralTypeEnum",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Referral.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ReferralReferralTypeEnum {
    Cookie = 'COOKIE',
    Permanent = 'PERMANENT',
    Manual = 'MANUAL'
}

