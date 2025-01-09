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

import { HttpFile } from '../http/http';

export class RestAffiliate {
    /**
    * The Affiliate Code
    */
    'code'?: string;
    /**
    * The ContactID
    */
    'contactId'?: string;
    /**
    * The AffiliateId
    */
    'id'?: string;
    /**
    * The Affiliate Name
    */
    'name'?: string;
    /**
    * The Affiliate Status
    */
    'status'?: RestAffiliateStatusEnum;
    /**
    * The Affiliate PortalSite Id
    */
    'uniqueSiteId'?: string;

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
            "name": "id",
            "baseName": "id",
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
            "type": "RestAffiliateStatusEnum",
            "format": ""
        },
        {
            "name": "uniqueSiteId",
            "baseName": "unique_site_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestAffiliate.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RestAffiliateStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE'
}

