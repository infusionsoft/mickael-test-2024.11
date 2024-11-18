import { HistoricalCounts } from '../models/HistoricalCounts';
import { SequencePath } from '../models/SequencePath';
export declare class Sequence {
    'activeContactCount'?: number;
    'activeContactCountCompleted'?: number;
    'historicalContactCount'?: HistoricalCounts;
    'id'?: string;
    'name'?: string;
    'paths'?: Array<SequencePath>;
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
