import { FunnelIntegrationAction } from '../models/FunnelIntegrationAction';
export declare class CreateFunnelIntegrationRequest {
    'baseUrl'?: string;
    'context'?: string;
    'enabled'?: boolean;
    'funnelIntegrationActions'?: Array<FunnelIntegrationAction>;
    'funnelIntegrationTriggers'?: Array<FunnelIntegrationAction>;
    'name'?: string;
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
