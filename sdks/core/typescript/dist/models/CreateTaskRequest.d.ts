export declare class CreateTaskRequest {
    'assignedToUserId': string;
    'completed'?: boolean;
    'completionTime'?: string;
    'contactId'?: string;
    'description'?: string;
    'dueTime'?: string;
    'priority'?: CreateTaskRequestPriorityEnum;
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: CreateTaskRequestTypeEnum;
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
export declare enum CreateTaskRequestPriorityEnum {
    Critical = "CRITICAL",
    Essential = "ESSENTIAL",
    Nonessential = "NONESSENTIAL"
}
export declare enum CreateTaskRequestTypeEnum {
    Email = "EMAIL",
    Call = "CALL",
    Appointment = "APPOINTMENT",
    Fax = "FAX",
    Letter = "LETTER",
    Other = "OTHER"
}
