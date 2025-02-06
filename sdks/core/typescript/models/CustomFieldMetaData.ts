/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CustomFieldOption } from '../models/CustomFieldOption';
import { HttpFile } from '../http/http';

export class CustomFieldMetaData {
    'defaultValue'?: string;
    'fieldName'?: string;
    'fieldType'?: CustomFieldMetaDataFieldTypeEnum;
    'groupId'?: string;
    'id'?: string;
    'label'?: string;
    'options'?: Array<CustomFieldOption>;
    'recordType'?: CustomFieldMetaDataRecordTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultValue",
            "baseName": "default_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldName",
            "baseName": "field_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "field_type",
            "type": "CustomFieldMetaDataFieldTypeEnum",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "group_id",
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
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CustomFieldOption>",
            "format": ""
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "CustomFieldMetaDataRecordTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomFieldMetaData.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CustomFieldMetaDataFieldTypeEnum {
    Currency = 'CURRENCY',
    Date = 'DATE',
    DateTime = 'DATE_TIME',
    DayOfWeek = 'DAY_OF_WEEK',
    DecimalNumber = 'DECIMAL_NUMBER',
    Drilldown = 'DRILLDOWN',
    Dropdown = 'DROPDOWN',
    Email = 'EMAIL',
    ListBox = 'LIST_BOX',
    Month = 'MONTH',
    Name = 'NAME',
    Percent = 'PERCENT',
    PhoneNumber = 'PHONE_NUMBER',
    Radio = 'RADIO',
    SocialSecurityNumber = 'SOCIAL_SECURITY_NUMBER',
    State = 'STATE',
    Text = 'TEXT',
    TextArea = 'TEXT_AREA',
    User = 'USER',
    UserListBox = 'USER_LIST_BOX',
    Website = 'WEBSITE',
    WholeNumber = 'WHOLE_NUMBER',
    Year = 'YEAR',
    YesNo = 'YES_NO'
}
export enum CustomFieldMetaDataRecordTypeEnum {
    Contact = 'CONTACT',
    ReferralPartner = 'REFERRAL_PARTNER',
    Opportunity = 'OPPORTUNITY',
    TaskNoteAppointment = 'TASK_NOTE_APPOINTMENT',
    Company = 'COMPANY',
    Order = 'ORDER',
    Subscription = 'SUBSCRIPTION'
}

