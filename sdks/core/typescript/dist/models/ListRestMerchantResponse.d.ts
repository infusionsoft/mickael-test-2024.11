import { ListRestMerchantAccountResponse } from '../models/ListRestMerchantAccountResponse';
export declare class ListRestMerchantResponse {
    'defaultMerchantAccountId'?: string;
    'merchantAccounts'?: Array<ListRestMerchantAccountResponse>;
    'nextPageToken'?: string;
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
