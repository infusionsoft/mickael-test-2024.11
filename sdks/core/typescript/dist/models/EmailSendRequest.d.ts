import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
export declare class EmailSendRequest {
    'addressField'?: string;
    'attachments'?: Array<EmailSendRequestAttachment>;
    'contacts': Array<string>;
    'htmlContent'?: string;
    'plainContent'?: string;
    'subject': string;
    'userId': string;
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
