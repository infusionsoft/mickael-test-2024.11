import { Address } from '../models/Address';
import { CustomFieldValue } from '../models/CustomFieldValue';
import { EmailAddress } from '../models/EmailAddress';
import { FaxNumber } from '../models/FaxNumber';
import { PhoneNumber } from '../models/PhoneNumber';
export declare class PatchCompanyRequest {
    'address'?: Address;
    'companyName'?: string;
    'customFields'?: Array<CustomFieldValue>;
    'emailAddress'?: EmailAddress;
    'faxNumber'?: FaxNumber;
    'notes'?: string;
    'phoneNumber'?: PhoneNumber;
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
