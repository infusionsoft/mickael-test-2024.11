/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class EmailAddress {
    'email'?: string;
    'emailOptStatus'?: EmailAddressEmailOptStatusEnum;
    'field'?: EmailAddressFieldEnum;
    'isOptIn'?: boolean;
    'optInReason'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailOptStatus",
            "baseName": "email_opt_status",
            "type": "EmailAddressEmailOptStatusEnum",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "EmailAddressFieldEnum",
            "format": ""
        },
        {
            "name": "isOptIn",
            "baseName": "is_opt_in",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "optInReason",
            "baseName": "opt_in_reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum EmailAddressEmailOptStatusEnum {
    UnengagedMarketable = 'UNENGAGED_MARKETABLE',
    SingleOptIn = 'SINGLE_OPT_IN',
    DoubleOptIn = 'DOUBLE_OPT_IN',
    Confirmed = 'CONFIRMED',
    UnengagedNonMarketable = 'UNENGAGED_NON_MARKETABLE',
    NonMarketable = 'NON_MARKETABLE',
    Lockdown = 'LOCKDOWN',
    Bounce = 'BOUNCE',
    HardBounce = 'HARD_BOUNCE',
    Manual = 'MANUAL',
    Admin = 'ADMIN',
    System = 'SYSTEM',
    ListUnsubscribe = 'LIST_UNSUBSCRIBE',
    Feedback = 'FEEDBACK',
    Spam = 'SPAM',
    Invalid = 'INVALID',
    Deactivated = 'DEACTIVATED'
}
export enum EmailAddressFieldEnum {
    EmailFieldUnspecified = 'EMAIL_FIELD_UNSPECIFIED',
    Email1 = 'EMAIL1',
    Email2 = 'EMAIL2',
    Email3 = 'EMAIL3'
}

