import { RestProductOptionValue } from '../models/RestProductOptionValue';
export declare class RestProductOption {
    'allowSpaces'?: boolean;
    'canContainCharacter'?: boolean;
    'canContainNumber'?: boolean;
    'canEndWithCharacter'?: boolean;
    'canEndWithNumber'?: boolean;
    'canStartWithCharacter'?: boolean;
    'canStartWithNumber'?: boolean;
    'displayIndex'?: number;
    'id'?: string;
    'label'?: string;
    'maxChars'?: number;
    'minChars'?: number;
    'name'?: string;
    'required'?: boolean;
    'textMessage'?: string;
    'type'?: RestProductOptionTypeEnum;
    'values'?: Array<RestProductOptionValue>;
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
export declare enum RestProductOptionTypeEnum {
    FixedList = "FIXED_LIST",
    Variable = "VARIABLE"
}
