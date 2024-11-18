import { CardInfo } from '../models/CardInfo';
export declare class RestPaymentMethod {
    'cardInfo'?: CardInfo;
    'dateCreated'?: Date;
    'id'?: string;
    'paymentMethodType'?: string;
    'processorId'?: string;
    'processorType'?: string;
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
