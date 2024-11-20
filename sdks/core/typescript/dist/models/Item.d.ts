export declare class Item {
    'id'?: string;
    'name'?: string;
    'nextItemId'?: string;
    'previousItemId'?: string;
    'type'?: ItemTypeEnum;
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
export declare enum ItemTypeEnum {
    Null = "NULL",
    Start = "Start",
    Wait = "Wait",
    DelayTimer = "DelayTimer",
    ContactTimer = "ContactTimer",
    DateTimer = "DateTimer",
    AppointmentTimer = "AppointmentTimer",
    Email = "Email",
    BardEmail = "BardEmail",
    UnlayerEmail = "UnlayerEmail",
    EmailConfirm = "EmailConfirm",
    Voice = "Voice",
    Fax = "Fax",
    Letter = "Letter",
    AutomatedSms = "AutomatedSms",
    Tag = "Tag",
    Opportunity = "Opportunity",
    Note = "Note",
    Task = "Task",
    CompleteTasks = "CompleteTasks",
    Appointment = "Appointment",
    AssignOwner = "AssignOwner",
    FieldValue = "FieldValue",
    Fulfillment = "Fulfillment",
    CreateOrder = "CreateOrder",
    Deal = "Deal",
    AddToSequence = "AddToSequence",
    CancelSubscription = "CancelSubscription",
    MoveOpportunity = "MoveOpportunity",
    Http = "Http",
    CustomerHub = "CustomerHub",
    HttpRequest = "HttpRequest",
    IntegrationAction = "IntegrationAction",
    ActionSet = "ActionSet"
}
