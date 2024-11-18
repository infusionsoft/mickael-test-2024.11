export declare class FunnelIntegrationTriggerResultDTO {
    'automationId'?: number;
    'goalId'?: number;
    'message'?: string;
    'schemaData'?: string;
    'success'?: boolean;
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
