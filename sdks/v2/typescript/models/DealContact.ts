/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Represents a contact entity in the system.
*/
export class DealContact {
    /**
    * Unique identifier for the model.
    */
    'id'?: string;
    /**
    * Indicates if this contact is the primary contact. This field is required.
    */
    'primaryContact': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryContact",
            "baseName": "primary_contact",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DealContact.attributeTypeMap;
    }

    public constructor() {
    }
}
