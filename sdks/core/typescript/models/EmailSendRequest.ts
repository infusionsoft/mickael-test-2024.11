/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmailSendRequestAttachment } from '../models/EmailSendRequestAttachment';
import { HttpFile } from '../http/http';

export class EmailSendRequest {
    /**
    * Email field of each Contact record to address the email to, such as \'Email\', \'EmailAddress2\', \'EmailAddress3\' or \'_CustomFieldName\', defaulting to the contact\'s primary email
    */
    'addressField'?: string;
    /**
    * Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each
    */
    'attachments'?: Array<EmailSendRequestAttachment>;
    /**
    * An array of Contact Ids to receive the email
    */
    'contacts': Array<string>;
    /**
    * The HTML-formatted content of the email, encoded in Base64
    */
    'htmlContent'?: string;
    /**
    * The plain-text content of the email, encoded in Base64
    */
    'plainContent'?: string;
    /**
    * The subject line of the email
    */
    'subject': string;
    /**
    * The infusionsoft user to send the email on behalf of
    */
    'userId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressField",
            "baseName": "address_field",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<EmailSendRequestAttachment>",
            "format": ""
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "htmlContent",
            "baseName": "html_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "plainContent",
            "baseName": "plain_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailSendRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
