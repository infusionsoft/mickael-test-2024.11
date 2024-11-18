import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
export declare class PatchBusinessProfileRequest {
    'address'?: BusinessProfileAddressRequest;
    'businessGoals'?: Array<string>;
    'businessPrimaryColor'?: string;
    'businessSecondaryColor'?: string;
    'currencyCode'?: string;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
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
