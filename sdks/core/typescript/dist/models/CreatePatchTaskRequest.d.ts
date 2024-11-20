export declare class CreatePatchTaskRequest {
    'assignedToUserId'?: string;
    'completed'?: boolean;
    'completionTime'?: string;
    'contactId'?: string;
    'description'?: string;
    'dueTime'?: string;
    'priority'?: CreatePatchTaskRequestPriorityEnum;
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: CreatePatchTaskRequestTypeEnum;
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
export declare enum CreatePatchTaskRequestPriorityEnum {
    Critical = "CRITICAL",
    Essential = "ESSENTIAL",
    Nonessential = "NONESSENTIAL"
}
export declare enum CreatePatchTaskRequestTypeEnum {
    Email = "EMAIL",
    Call = "CALL",
    Appointment = "APPOINTMENT",
    Fax = "FAX",
    Letter = "LETTER",
    Other = "OTHER"
}
