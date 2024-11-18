export declare class SocialAccount {
    'name'?: string;
    'type': SocialAccountTypeEnum;
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
export declare enum SocialAccountTypeEnum {
    SocialAccountTypeUnspecified = "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED",
    Facebook = "FACEBOOK",
    LinkedIn = "LINKED_IN",
    Twitter = "TWITTER",
    Instagram = "INSTAGRAM",
    Snapchat = "SNAPCHAT",
    Youtube = "YOUTUBE",
    Pinterest = "PINTEREST"
}
