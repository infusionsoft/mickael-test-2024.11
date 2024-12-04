import { Address } from '../models/Address';
import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { FaxNumber } from '../models/FaxNumber';
import { PhoneNumber } from '../models/PhoneNumber';
export declare class PatchUserRequestV2 {
    'address'?: Address;
    'companyName'?: string;
    'emailAddress'?: EmailAddressRequest;
    'familyName'?: string;
    'faxNumbers'?: Array<FaxNumber>;
    'givenName'?: string;
    'phoneNumbers'?: Array<PhoneNumber>;
    'timeZone'?: string;
    'title'?: string;
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
