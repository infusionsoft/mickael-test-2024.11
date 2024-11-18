import { RestOpportunityStage } from '../models/RestOpportunityStage';
export declare class ListOpportunityStagesResponse {
    'nextPageToken'?: string;
    'stages'?: Array<RestOpportunityStage>;
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
