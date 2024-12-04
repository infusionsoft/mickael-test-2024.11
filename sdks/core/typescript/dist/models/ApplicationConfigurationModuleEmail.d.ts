export declare class ApplicationConfigurationModuleEmail {
    'appendContactKeyToLinks'?: boolean;
    'defaultOptInLink'?: string;
    'defaultOptOutLink'?: string;
    'hideEmailsToAndFromDomains'?: string;
    'whitelistedDomains'?: string;
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
