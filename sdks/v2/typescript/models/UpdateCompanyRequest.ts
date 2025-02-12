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

import { Address } from '../models/Address';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { EmailAddress } from '../models/EmailAddress';
import { FaxNumber } from '../models/FaxNumber';
import { PhoneNumber } from '../models/PhoneNumber';
import { HttpFile } from '../http/http';

export class UpdateCompanyRequest {
    'address'?: Address;
    'companyName'?: string;
    'customFields'?: Array<CustomFieldValue>;
    'emailAddress'?: EmailAddress;
    'faxNumber'?: FaxNumber;
    'notes'?: string;
    'phoneNumber'?: PhoneNumber;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValue>",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "EmailAddress",
            "format": ""
        },
        {
            "name": "faxNumber",
            "baseName": "fax_number",
            "type": "FaxNumber",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "PhoneNumber",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCompanyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
