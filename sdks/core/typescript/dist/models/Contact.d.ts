import { Address } from '../models/Address';
import { BasicCompany } from '../models/BasicCompany';
import { ContactUtmResponse } from '../models/ContactUtmResponse';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { EmailAddress } from '../models/EmailAddress';
import { FaxNumber } from '../models/FaxNumber';
import { Link } from '../models/Link';
import { Origin } from '../models/Origin';
import { PhoneNumber } from '../models/PhoneNumber';
import { SocialAccount } from '../models/SocialAccount';
export declare class Contact {
    'addresses'?: Array<Address>;
    'anniversaryDate'?: string;
    'birthDate'?: string;
    'company'?: BasicCompany;
    'contactType'?: string;
    'createTime'?: string;
    'customFields'?: Array<CustomFieldValue>;
    'emailAddresses'?: Array<EmailAddress>;
    'familyName'?: string;
    'faxNumbers'?: Array<FaxNumber>;
    'givenName'?: string;
    'id'?: string;
    'jobTitle'?: string;
    'leadsourceId'?: string;
    'links'?: Array<Link>;
    'middleName'?: string;
    'origin'?: Origin;
    'ownerId'?: string;
    'phoneNumbers'?: Array<PhoneNumber>;
    'preferredLocale'?: string;
    'preferredName'?: string;
    'prefix'?: string;
    'referralCode'?: string;
    'scoreValue'?: string;
    'socialAccounts'?: Array<SocialAccount>;
    'sourceType'?: ContactSourceTypeEnum;
    'spouseName'?: string;
    'suffix'?: string;
    'tagIds'?: Array<string>;
    'timeZone'?: string;
    'updateTime'?: string;
    'utmParameters'?: Array<ContactUtmResponse>;
    'website'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum ContactSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    Api = "API",
    Appointment = "APPOINTMENT",
    FormApiHosted = "FORM_API_HOSTED",
    FormApiInternal = "FORM_API_INTERNAL",
    Import = "IMPORT",
    InternalForm = "INTERNAL_FORM",
    LandingPage = "LANDING_PAGE",
    Manual = "MANUAL",
    Other = "OTHER",
    Unknown = "UNKNOWN",
    Webform = "WEBFORM"
}
