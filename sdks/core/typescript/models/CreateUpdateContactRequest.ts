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

import { Address } from '../models/Address';
import { BasicCompany } from '../models/BasicCompany';
import { CreateContactUtmPropertiesRequest } from '../models/CreateContactUtmPropertiesRequest';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { FaxNumber } from '../models/FaxNumber';
import { OriginRequest } from '../models/OriginRequest';
import { PhoneNumber } from '../models/PhoneNumber';
import { SocialAccount } from '../models/SocialAccount';
import { HttpFile } from '../http/http';

export class CreateUpdateContactRequest {
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'addresses'?: Array<Address>;
    'anniversaryDate'?: string;
    'birthDate'?: string;
    'company'?: BasicCompany;
    'contactType'?: string;
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'customFields'?: Array<CustomFieldValue>;
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'emailAddresses'?: Array<EmailAddressRequest>;
    'familyName'?: string;
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'faxNumbers'?: Array<FaxNumber>;
    'givenName'?: string;
    'jobTitle'?: string;
    'leadsourceId'?: string;
    'middleName'?: string;
    'origin'?: OriginRequest;
    'ownerId'?: string;
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'phoneNumbers'?: Array<PhoneNumber>;
    'preferredLocale'?: string;
    'preferredName'?: string;
    'prefix'?: string;
    'referralCode'?: string;
    /**
    * Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed.
    */
    'socialAccounts'?: Array<SocialAccount>;
    'sourceType'?: CreateUpdateContactRequestSourceTypeEnum;
    'spouseName'?: string;
    'suffix'?: string;
    'timeZone'?: string;
    'utmParameters'?: CreateContactUtmPropertiesRequest;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<Address>",
            "format": ""
        },
        {
            "name": "anniversaryDate",
            "baseName": "anniversary_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthDate",
            "baseName": "birth_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "BasicCompany",
            "format": ""
        },
        {
            "name": "contactType",
            "baseName": "contact_type",
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
            "name": "emailAddresses",
            "baseName": "email_addresses",
            "type": "Array<EmailAddressRequest>",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "faxNumbers",
            "baseName": "fax_numbers",
            "type": "Array<FaxNumber>",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobTitle",
            "baseName": "job_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadsourceId",
            "baseName": "leadsource_id",
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
            "name": "origin",
            "baseName": "origin",
            "type": "OriginRequest",
            "format": ""
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>",
            "format": ""
        },
        {
            "name": "preferredLocale",
            "baseName": "preferred_locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredName",
            "baseName": "preferred_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralCode",
            "baseName": "referral_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "socialAccounts",
            "baseName": "social_accounts",
            "type": "Array<SocialAccount>",
            "format": ""
        },
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "CreateUpdateContactRequestSourceTypeEnum",
            "format": ""
        },
        {
            "name": "spouseName",
            "baseName": "spouse_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "suffix",
            "baseName": "suffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmParameters",
            "baseName": "utm_parameters",
            "type": "CreateContactUtmPropertiesRequest",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUpdateContactRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateUpdateContactRequestSourceTypeEnum {
    SourceTypeUnspecified = 'SOURCE_TYPE_UNSPECIFIED',
    Api = 'API',
    Appointment = 'APPOINTMENT',
    FormApiHosted = 'FORM_API_HOSTED',
    FormApiInternal = 'FORM_API_INTERNAL',
    Import = 'IMPORT',
    InternalForm = 'INTERNAL_FORM',
    LandingPage = 'LANDING_PAGE',
    Manual = 'MANUAL',
    Other = 'OTHER',
    Unknown = 'UNKNOWN',
    Webform = 'WEBFORM'
}

