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

export class ApplicationConfigurationModuleEmail {
    'appendContactKeyToLinks'?: boolean;
    'defaultOptInLink'?: string;
    'defaultOptOutLink'?: string;
    'hideEmailsToAndFromDomains'?: string;
    'whitelistedDomains'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appendContactKeyToLinks",
            "baseName": "append_contact_key_to_links",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "defaultOptInLink",
            "baseName": "default_opt_in_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultOptOutLink",
            "baseName": "default_opt_out_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "hideEmailsToAndFromDomains",
            "baseName": "hide_emails_to_and_from_domains",
            "type": "string",
            "format": ""
        },
        {
            "name": "whitelistedDomains",
            "baseName": "whitelisted_domains",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleEmail.attributeTypeMap;
    }

    public constructor() {
    }
}
