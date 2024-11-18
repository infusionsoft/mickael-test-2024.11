import { AutomationLockStatus } from '../models/AutomationLockStatus';
export declare class Automation {
    'activeContacts'?: number;
    'categories'?: Array<string>;
    'currentEditLockStatus'?: AutomationLockStatus;
    'errorMessage'?: string;
    'id'?: string;
    'locked'?: boolean;
    'publishedBy'?: string;
    'publishedDate'?: Date;
    'publishedTimezone'?: string;
    'status'?: string;
    'title'?: string;
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
