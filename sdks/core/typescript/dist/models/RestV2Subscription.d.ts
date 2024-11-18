export declare class RestV2Subscription {
    'subscriptionActive'?: boolean;
    'subscriptionCyclesCompleted'?: number;
    'subscriptionEndDate'?: string;
    'subscriptionId'?: string;
    'subscriptionNextBillDate'?: string;
    'subscriptionStartDate'?: string;
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
