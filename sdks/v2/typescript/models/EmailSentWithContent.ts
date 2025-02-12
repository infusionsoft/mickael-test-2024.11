/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class EmailSentWithContent {
    'clickedTime'?: string;
    'contactId'?: string;
    'headers'?: string;
    /**
    * Base64 encoded HTML
    */
    'htmlContent'?: string;
    'id'?: string;
    'openedTime'?: string;
    'originalProvider'?: EmailSentWithContentOriginalProviderEnum;
    'originalProviderId'?: string;
    /**
    * Base64 encoded plain text
    */
    'plainContent'?: string;
    'providerSourceId'?: string;
    'receivedTime'?: string;
    'sentFromAddress'?: string;
    'sentFromReplyAddress'?: string;
    'sentTime'?: string;
    'sentToAddress'?: string;
    'sentToBccAddressList'?: Array<string>;
    'sentToCcAddressList'?: Array<string>;
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clickedTime",
            "baseName": "clicked_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "string",
            "format": ""
        },
        {
            "name": "htmlContent",
            "baseName": "html_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "openedTime",
            "baseName": "opened_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalProvider",
            "baseName": "original_provider",
            "type": "EmailSentWithContentOriginalProviderEnum",
            "format": ""
        },
        {
            "name": "originalProviderId",
            "baseName": "original_provider_id",
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
            "name": "providerSourceId",
            "baseName": "provider_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "receivedTime",
            "baseName": "received_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentFromAddress",
            "baseName": "sent_from_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentFromReplyAddress",
            "baseName": "sent_from_reply_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentTime",
            "baseName": "sent_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentToAddress",
            "baseName": "sent_to_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentToBccAddressList",
            "baseName": "sent_to_bcc_address_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sentToCcAddressList",
            "baseName": "sent_to_cc_address_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailSentWithContent.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum EmailSentWithContentOriginalProviderEnum {
    Unknown = 'UNKNOWN',
    Infusionsoft = 'INFUSIONSOFT',
    Microsoft = 'MICROSOFT',
    Google = 'GOOGLE'
}

