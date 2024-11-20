export declare class FunnelIntegrationHttpRequest {
    'body'?: string;
    'callType'?: string;
    'headerParameters'?: {
        [key: string]: string;
    };
    '_queryParameters'?: {
        [key: string]: string;
    };
    'url'?: string;
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
