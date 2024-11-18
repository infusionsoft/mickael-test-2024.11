export declare class ShippingMethod {
    'description'?: string;
    'id'?: string;
    'international'?: boolean;
    'name'?: string;
    'settings'?: any;
    'status'?: string;
    'type'?: string;
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
