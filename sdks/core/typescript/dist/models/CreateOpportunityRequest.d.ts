import { CustomField } from '../models/CustomField';
export declare class CreateOpportunityRequest {
    'affiliateId'?: string;
    'contactId'?: string;
    'customFields'?: Array<CustomField>;
    'estimatedCloseTime'?: string;
    'includeInForecast'?: boolean;
    'nextActionNotes'?: string;
    'nextActionTime'?: string;
    'opportunityNotes'?: string;
    'opportunityTitle': string;
    'projectedRevenueHigh'?: number;
    'projectedRevenueLow'?: number;
    'stageId'?: string;
    'userId'?: string;
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
