import { CheckListItemDetails } from '../models/CheckListItemDetails';
export declare class StageDetails {
    'checkListItems'?: Array<CheckListItemDetails>;
    'probability'?: number;
    'stageOrder'?: number;
    'targetNumDays'?: number;
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
