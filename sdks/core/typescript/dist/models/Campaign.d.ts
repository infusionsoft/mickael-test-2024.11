import { Goal } from '../models/Goal';
import { Sequence } from '../models/Sequence';
export declare class Campaign {
    'activeContactCount'?: number;
    'completedContactCount'?: number;
    'createdByGlobalId'?: string;
    'dateCreated'?: string;
    'errorMessage'?: string;
    'goals'?: Array<Goal>;
    'id'?: string;
    'locked'?: boolean;
    'name'?: string;
    'publishedDate'?: Date;
    'publishedStatus'?: boolean;
    'publishedTimeZone'?: string;
    'sequences'?: Array<Sequence>;
    'timeZone'?: string;
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
