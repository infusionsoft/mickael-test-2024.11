import { StackTraceElement } from '../models/StackTraceElement';
import { Throwable } from '../models/Throwable';
export declare class ModelError {
    'cause'?: Throwable;
    'localizedMessage'?: string;
    'message'?: string;
    'stackTrace'?: Array<StackTraceElement>;
    'suppressed'?: Array<Throwable>;
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
