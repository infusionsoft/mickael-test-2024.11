import { LeadSourceCategory } from '../models/LeadSourceCategory';
export declare class CreateLeadSourceRequest {
    'category'?: LeadSourceCategory;
    'description'?: string;
    'endTime'?: string;
    'medium'?: string;
    'message'?: string;
    'name'?: string;
    'startTime'?: string;
    'statusIsActive'?: boolean;
    'vendor'?: string;
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
