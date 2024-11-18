import { FunnelIntegrationSchemaField } from '../models/FunnelIntegrationSchemaField';
export declare class FunnelIntegrationAction {
    'baseUrl'?: string;
    'context'?: string;
    'enabled'?: boolean;
    'iconUrl'?: string;
    'name'?: string;
    'schemaFields'?: Array<FunnelIntegrationSchemaField>;
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
