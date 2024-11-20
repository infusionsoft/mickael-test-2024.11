export declare class Task {
    'assignedToUserId'?: string;
    'completed'?: boolean;
    'completionTime'?: string;
    'contactId'?: string;
    'createTime'?: string;
    'createdByUserId'?: string;
    'description'?: string;
    'dueTime'?: string;
    'id'?: string;
    'modificationTime'?: string;
    'priority'?: TaskPriorityEnum;
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: TaskTypeEnum;
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
export declare enum TaskPriorityEnum {
    Critical = "CRITICAL",
    Essential = "ESSENTIAL",
    Nonessential = "NONESSENTIAL"
}
export declare enum TaskTypeEnum {
    Email = "EMAIL",
    Call = "CALL",
    Appointment = "APPOINTMENT",
    Fax = "FAX",
    Letter = "LETTER",
    Other = "OTHER"
}
