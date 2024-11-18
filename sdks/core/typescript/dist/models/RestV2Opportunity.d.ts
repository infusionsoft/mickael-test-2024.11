import { CustomField } from '../models/CustomField';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { RestV2User } from '../models/RestV2User';
export declare class RestV2Opportunity {
    'affiliateId'?: string;
    'contact': OpportunityContact;
    'createdTime'?: string;
    'customFields'?: Array<CustomField>;
    'estimatedCloseTime'?: string;
    'id'?: string;
    'includeInForecast'?: boolean;
    'lastUpdatedTime'?: string;
    'nextActionNotes'?: string;
    'nextActionTime'?: string;
    'opportunityNotes'?: string;
    'opportunityTitle': string;
    'projectedRevenueHigh'?: number;
    'projectedRevenueLow'?: number;
    'stage': OpportunityStage;
    'user'?: RestV2User;
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
