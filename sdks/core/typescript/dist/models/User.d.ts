import { Address } from '../models/Address';
import { EmailAddress } from '../models/EmailAddress';
import { FaxNumber } from '../models/FaxNumber';
import { PhoneNumber } from '../models/PhoneNumber';
import { SocialAccount } from '../models/SocialAccount';
export declare class User {
    'address'?: Address;
    'admin'?: boolean;
    'companyName'?: string;
    'createTime'?: string;
    'createdBy'?: number;
    'emailAddresses'?: Array<EmailAddress>;
    'familyName'?: string;
    'faxNumbers'?: Array<FaxNumber>;
    'givenName'?: string;
    'globalUserId'?: number;
    'id'?: number;
    'keapId'?: string;
    'partner'?: boolean;
    'phoneNumbers'?: Array<PhoneNumber>;
    'socialAccounts'?: Array<SocialAccount>;
    'status'?: UserStatusEnum;
    'timeZone'?: string;
    'title'?: string;
    'updateTime'?: string;
    'updatedBy'?: number;
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
export declare enum UserStatusEnum {
    Active = "Active",
    Invited = "Invited",
    Inactive = "Inactive",
    NotAUser = "NotAUser"
}
