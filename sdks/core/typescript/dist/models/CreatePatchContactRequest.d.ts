import { Address } from '../models/Address';
import { BasicCompany } from '../models/BasicCompany';
import { CreateContactUtmPropertiesRequest } from '../models/CreateContactUtmPropertiesRequest';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { FaxNumber } from '../models/FaxNumber';
import { OriginRequest } from '../models/OriginRequest';
import { PhoneNumber } from '../models/PhoneNumber';
import { SocialAccount } from '../models/SocialAccount';
export declare class CreatePatchContactRequest {
    'addresses'?: Array<Address>;
    'anniversaryDate'?: string;
    'birthDate'?: string;
    'company'?: BasicCompany;
    'contactType'?: string;
    'customFields'?: Array<CustomFieldValue>;
    'emailAddresses'?: Array<EmailAddressRequest>;
    'familyName'?: string;
    'faxNumbers'?: Array<FaxNumber>;
    'givenName'?: string;
    'jobTitle'?: string;
    'leadsourceId'?: string;
    'middleName'?: string;
    'origin'?: OriginRequest;
    'ownerId'?: string;
    'phoneNumbers'?: Array<PhoneNumber>;
    'preferredLocale'?: string;
    'preferredName'?: string;
    'prefix'?: string;
    'referralCode'?: string;
    'socialAccounts'?: Array<SocialAccount>;
    'sourceType'?: CreatePatchContactRequestSourceTypeEnum;
    'spouseName'?: string;
    'suffix'?: string;
    'timeZone'?: string;
    'utmParameters'?: CreateContactUtmPropertiesRequest;
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
export declare enum CreatePatchContactRequestSourceTypeEnum {
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
