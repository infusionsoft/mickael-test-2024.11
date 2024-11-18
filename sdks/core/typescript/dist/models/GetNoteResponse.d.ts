import { BasicUser } from '../models/BasicUser';
export declare class GetNoteResponse {
    'assignedToUser'?: BasicUser;
    'contactId'?: string;
    'createTime'?: string;
    'id'?: string;
    'lastUpdatedByUserId'?: string;
    'text'?: string;
    'title'?: string;
    'type'?: string;
    'updateTime'?: string;
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
