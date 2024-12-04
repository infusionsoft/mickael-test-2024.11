import { Address } from '../models/Address';
import { BasicCompany } from '../models/BasicCompany';
import { PhoneNumber } from '../models/PhoneNumber';
export declare class ShippingInformation {
    'addresses'?: Array<Address>;
    'company'?: BasicCompany;
    'familyName'?: string;
    'givenName'?: string;
    'id'?: string;
    'invoiceToCompany'?: boolean;
    'phoneNumbers'?: Array<PhoneNumber>;
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
