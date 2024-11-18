import { EmailAddressRequest } from '../models/EmailAddressRequest';
export declare class CreateUserRequestV2 {
    'admin'?: boolean;
    'emailAddress': EmailAddressRequest;
    'givenName': string;
    'partner'?: boolean;
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
