import { CreateOpportunityStageCheckListItem } from '../models/CreateOpportunityStageCheckListItem';
export declare class CreateOpportunityStageRequest {
    'checkListItems'?: Array<CreateOpportunityStageCheckListItem>;
    'name': string;
    'order': number;
    'probability': number;
    'targetNumberDays': number;
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
