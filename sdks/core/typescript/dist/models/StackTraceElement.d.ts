export declare class StackTraceElement {
    'classLoaderName'?: string;
    'className'?: string;
    'fileName'?: string;
    'lineNumber'?: number;
    'methodName'?: string;
    'moduleName'?: string;
    'moduleVersion'?: string;
    'nativeMethod'?: boolean;
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
