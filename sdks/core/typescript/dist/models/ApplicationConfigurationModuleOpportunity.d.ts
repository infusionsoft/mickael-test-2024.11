import { ApplicationConfigurationModuleOpportunityStates } from '../models/ApplicationConfigurationModuleOpportunityStates';
export declare class ApplicationConfigurationModuleOpportunity {
    'defaultStage'?: string;
    'states'?: ApplicationConfigurationModuleOpportunityStates;
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
