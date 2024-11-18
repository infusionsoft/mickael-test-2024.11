import { AffiliateCommission } from '../models/AffiliateCommission';
export declare class ListAffiliateCommissionResponse {
    'affiliateCommissions'?: Array<AffiliateCommission>;
    'nextPageToken'?: string;
    'totalAffCommEarned'?: number;
    'totalClawBack'?: number;
    'totalCommEarned'?: number;
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
