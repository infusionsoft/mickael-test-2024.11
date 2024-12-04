export declare class CreateEmailSentRequest {
    'clickedTime'?: string;
    'contactId'?: string;
    'headers'?: string;
    'htmlContent'?: string;
    'openedTime'?: string;
    'originalProvider'?: CreateEmailSentRequestOriginalProviderEnum;
    'originalProviderId'?: string;
    'plainContent'?: string;
    'providerSourceId'?: string;
    'receivedTime'?: string;
    'sentFromAddress'?: string;
    'sentFromReplyAddress'?: string;
    'sentTime'?: string;
    'sentToAddress': string;
    'sentToBccAddressList'?: Array<string>;
    'sentToCcAddressList'?: Array<string>;
    'subject'?: string;
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
export declare enum CreateEmailSentRequestOriginalProviderEnum {
    Unknown = "UNKNOWN",
    Infusionsoft = "INFUSIONSOFT",
    Microsoft = "MICROSOFT",
    Google = "GOOGLE"
}
