export declare class CheckListItemDetails {
    'description'?: string;
    'doneDate'?: Date;
    'id'?: number;
    'instanceId'?: number;
    'itemOrder'?: number;
    'required'?: boolean;
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
