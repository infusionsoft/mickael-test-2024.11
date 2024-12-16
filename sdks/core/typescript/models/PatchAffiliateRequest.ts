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

export class PatchAffiliateRequest {
    /**
    * The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length
    */
    'code': string;
    /**
    * The contactId identifier , Must be a positive number
    */
    'contactId'?: string;
    /**
    * The Affiliate name will be derived from the Contact, when not explicitly provided
    */
    'name'?: string;
    /**
    * The Affiliate Status
    */
    'status': PatchAffiliateRequestStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PatchAffiliateRequestStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PatchAffiliateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PatchAffiliateRequestStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE'
}

