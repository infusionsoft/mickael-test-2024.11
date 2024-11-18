import { AddressInformation } from '../models/AddressInformation';
import { CreateRestOrderItemRequest } from '../models/CreateRestOrderItemRequest';
export declare class RestCreateOrderRequest {
    'contactId': string;
    'leadAffiliateId'?: string;
    'orderItems': Array<CreateRestOrderItemRequest>;
    'orderTime': string;
    'orderTitle': string;
    'orderType': RestCreateOrderRequestOrderTypeEnum;
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
export declare enum RestCreateOrderRequestOrderTypeEnum {
    Offline = "OFFLINE",
    Online = "ONLINE"
}
