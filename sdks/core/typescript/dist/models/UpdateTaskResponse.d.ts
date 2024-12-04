export declare class UpdateTaskResponse {
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
    'priority'?: UpdateTaskResponsePriorityEnum;
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: UpdateTaskResponseTypeEnum;
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
export declare enum UpdateTaskResponsePriorityEnum {
    Critical = "CRITICAL",
    Essential = "ESSENTIAL",
    Nonessential = "NONESSENTIAL"
}
export declare enum UpdateTaskResponseTypeEnum {
    Email = "EMAIL",
    Call = "CALL",
    Appointment = "APPOINTMENT",
    Fax = "FAX",
    Letter = "LETTER",
    Other = "OTHER"
}
