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

export class FileMetadata {
    'category'?: FileMetadataCategoryEnum;
    'contactId'?: string;
    'createdById'?: string;
    'createdTime'?: string;
    'fileBoxType'?: FileMetadataFileBoxTypeEnum;
    'fileName'?: string;
    'fileSize'?: number;
    'id'?: string;
    'isPublic'?: boolean;
    'remoteFileKey'?: string;
    'updatedTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "FileMetadataCategoryEnum",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdById",
            "baseName": "created_by_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "created_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileBoxType",
            "baseName": "file_box_type",
            "type": "FileMetadataFileBoxTypeEnum",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "file_size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "is_public",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "remoteFileKey",
            "baseName": "remote_file_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedTime",
            "baseName": "updated_time",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FileMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum FileMetadataCategoryEnum {
    Attachments = 'ATTACHMENTS',
    Cart = 'CART',
    Documents = 'DOCUMENTS',
    Hidden = 'HIDDEN',
    Invoice = 'INVOICE',
    Logo = 'LOGO',
    Tickets = 'TICKETS',
    WebForm = 'WEB_FORM',
    Funnel = 'FUNNEL'
}
export enum FileMetadataFileBoxTypeEnum {
    Application = 'APPLICATION',
    Image = 'IMAGE',
    Fax = 'FAX',
    Attachment = 'ATTACHMENT',
    Ticket = 'TICKET',
    Contact = 'CONTACT',
    DigitalProduct = 'DIGITAL_PRODUCT',
    Import = 'IMPORT',
    Hidden = 'HIDDEN',
    WebForm = 'WEB_FORM',
    StyledCart = 'STYLED_CART',
    ResampledImage = 'RESAMPLED_IMAGE',
    TemplateThumbnail = 'TEMPLATE_THUMBNAIL',
    Funnel = 'FUNNEL',
    LogoThumbnail = 'LOGO_THUMBNAIL',
    Unlayer = 'UNLAYER',
    BrandingCenterLogo = 'BRANDING_CENTER_LOGO'
}

