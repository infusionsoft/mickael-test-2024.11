import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
export declare class ListSubscriptionPlansResponse {
    'nextPageToken'?: string;
    'subscriptions'?: Array<RestSubscriptionPlan>;
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
