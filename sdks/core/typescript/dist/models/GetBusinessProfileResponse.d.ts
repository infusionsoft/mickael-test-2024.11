import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
export declare class GetBusinessProfileResponse {
    'address'?: BusinessProfileAddressResponse;
    'businessGoals'?: Array<string>;
    'businessPrimaryColor'?: string;
    'businessSecondaryColor'?: string;
    'businessType'?: string;
    'currencyCode'?: string;
    'email'?: string;
    'languageTag'?: string;
    'logoUrl'?: string;
    'name'?: string;
    'phone'?: string;
    'timeZone'?: string;
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
