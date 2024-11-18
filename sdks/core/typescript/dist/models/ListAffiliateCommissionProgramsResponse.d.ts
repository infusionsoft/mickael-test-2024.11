import { AffiliateProgramV2 } from '../models/AffiliateProgramV2';
export declare class ListAffiliateCommissionProgramsResponse {
    'commissionPrograms'?: Array<AffiliateProgramV2>;
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
