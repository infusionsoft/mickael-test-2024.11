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

export class AddressInformation {
    'company'?: string;
    'countryCode'?: string;
    'firstName'?: string;
    'isInvoiceToCompany'?: boolean;
    'lastName'?: string;
    'line1'?: string;
    'line2'?: string;
    'locality'?: string;
    'middleName'?: string;
    'phone'?: string;
    'region'?: string;
    'zipCode'?: string;
    'zipFour'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "isInvoiceToCompany",
            "baseName": "is_invoice_to_company",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipFour",
            "baseName": "zip_four",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressInformation.attributeTypeMap;
    }

    public constructor() {
    }
}
