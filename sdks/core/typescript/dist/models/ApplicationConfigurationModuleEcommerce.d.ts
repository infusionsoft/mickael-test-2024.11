export declare class ApplicationConfigurationModuleEcommerce {
    'creditCardTypes'?: string;
    'currency'?: string;
    'defaultChargeMaxRetryAttempts'?: number;
    'defaultCountry'?: string;
    'defaultMerchant'?: string;
    'defaultNumberOfDaysBetweenChargeAttempts'?: number;
    'defaultTax'?: string;
    'defaultToAutoCharge'?: boolean;
    'merchantAccountMaxRetryAttempts'?: number;
    'paymentTypes'?: string;
    'promoCodes'?: string;
    'trackCostPerUnit'?: boolean;
    'trackInventory'?: boolean;
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
