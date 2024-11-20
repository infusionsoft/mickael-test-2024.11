import { CustomFieldMetaData } from '../models/CustomFieldMetaData';
export declare class ObjectModel {
    'customFields'?: Array<CustomFieldMetaData>;
    'optionalProperties'?: Array<string>;
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
