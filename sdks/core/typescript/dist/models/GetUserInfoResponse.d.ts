export declare class GetUserInfoResponse {
    'email'?: string;
    'familyName'?: string;
    'givenName'?: string;
    'id'?: number;
    'isAdmin'?: boolean;
    'keapId'?: string;
    'middleName'?: string;
    'preferredName'?: string;
    'sub'?: string;
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
