import { CreateCustomFieldOptionRequest } from '../models/CreateCustomFieldOptionRequest';
export declare class CreateCustomFieldRequest {
    'fieldType': CreateCustomFieldRequestFieldTypeEnum;
    'groupId'?: string;
    'label': string;
    'options'?: Array<CreateCustomFieldOptionRequest>;
    'userGroupId'?: string;
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
export declare enum CreateCustomFieldRequestFieldTypeEnum {
    Currency = "CURRENCY",
    Date = "DATE",
    DateTime = "DATE_TIME",
    DayOfWeek = "DAY_OF_WEEK",
    DecimalNumber = "DECIMAL_NUMBER",
    Drilldown = "DRILLDOWN",
    Dropdown = "DROPDOWN",
    Email = "EMAIL",
    ListBox = "LIST_BOX",
    Month = "MONTH",
    Name = "NAME",
    Percent = "PERCENT",
    PhoneNumber = "PHONE_NUMBER",
    Radio = "RADIO",
    SocialSecurityNumber = "SOCIAL_SECURITY_NUMBER",
    State = "STATE",
    Text = "TEXT",
    TextArea = "TEXT_AREA",
    User = "USER",
    UserListBox = "USER_LIST_BOX",
    Website = "WEBSITE",
    WholeNumber = "WHOLE_NUMBER",
    Year = "YEAR",
    YesNo = "YES_NO"
}
