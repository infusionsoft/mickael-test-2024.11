import { HistoricalCounts } from '../models/HistoricalCounts';
export declare class Goal {
    'historicalContactCounts'?: HistoricalCounts;
    'id'?: string;
    'name'?: string;
    'nextSequenceIds'?: Array<string>;
    'previousSequenceIds'?: Array<string>;
    'type'?: GoalTypeEnum;
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
export declare enum GoalTypeEnum {
    WebForm = "WebForm",
    LandingPage = "LandingPage",
    Survey = "Survey",
    LinkClick = "LinkClick",
    EmailOpened = "EmailOpened",
    Score = "Score",
    Purchase = "Purchase",
    FailedPurchase = "FailedPurchase",
    Quote = "Quote",
    WebsiteTrigger = "WebsiteTrigger",
    InternalForm = "InternalForm",
    SmartForm = "SmartForm",
    AppointmentEvent = "AppointmentEvent",
    Task = "Task",
    StageMove = "StageMove",
    Note = "Note",
    Tag = "Tag",
    PipelineStageMove = "PipelineStageMove",
    UnlayerLandingPage = "UnlayerLandingPage",
    GroSocial = "GroSocial",
    TwitterForm = "TwitterForm",
    Api = "API",
    WordPress = "WordPress",
    NewLandingPage = "NewLandingPage",
    IntegrationTrigger = "IntegrationTrigger"
}
