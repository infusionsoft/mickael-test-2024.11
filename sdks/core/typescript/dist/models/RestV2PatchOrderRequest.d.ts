import { AddressInformation } from '../models/AddressInformation';
export declare class RestV2PatchOrderRequest {
    'contactId'?: string;
    'leadAffiliateId'?: string;
    'orderTime'?: string;
    'orderTitle'?: string;
    'orderType'?: RestV2PatchOrderRequestOrderTypeEnum;
    'promoCodes'?: Array<string>;
    'salesAffiliateId'?: string;
    'shippingAddress'?: AddressInformation;
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
export declare enum RestV2PatchOrderRequestOrderTypeEnum {
    Offline = "OFFLINE",
    Online = "ONLINE"
}
