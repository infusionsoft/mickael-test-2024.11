/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationConfigurationModuleContactAddressLabels } from '../models/ApplicationConfigurationModuleContactAddressLabels';
import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleContact {
    'addressLabels'?: ApplicationConfigurationModuleContactAddressLabels;
    'contactTypes'?: string;
    'defaultNewContactForm'?: string;
    'disableContactEditInClientLogin'?: boolean;
    'faxTypes'?: string;
    'phoneTypes'?: string;
    'suffixTypes'?: string;
    'titleTypes'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLabels",
            "baseName": "address_labels",
            "type": "ApplicationConfigurationModuleContactAddressLabels",
            "format": ""
        },
        {
            "name": "contactTypes",
            "baseName": "contact_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultNewContactForm",
            "baseName": "default_new_contact_form",
            "type": "string",
            "format": ""
        },
        {
            "name": "disableContactEditInClientLogin",
            "baseName": "disable_contact_edit_in_client_login",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "faxTypes",
            "baseName": "fax_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneTypes",
            "baseName": "phone_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "suffixTypes",
            "baseName": "suffix_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleTypes",
            "baseName": "title_types",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleContact.attributeTypeMap;
    }

    public constructor() {
    }
}
