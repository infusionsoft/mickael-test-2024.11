"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldMetaDataRecordTypeEnum = exports.CustomFieldMetaDataFieldTypeEnum = exports.CustomFieldMetaData = void 0;
var CustomFieldMetaData = (function () {
    function CustomFieldMetaData() {
    }
    CustomFieldMetaData.getAttributeTypeMap = function () {
        return CustomFieldMetaData.attributeTypeMap;
    };
    CustomFieldMetaData.discriminator = undefined;
    CustomFieldMetaData.mapping = undefined;
    CustomFieldMetaData.attributeTypeMap = [
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
        }
    ];
    return CustomFieldMetaData;
}());
exports.CustomFieldMetaData = CustomFieldMetaData;
var CustomFieldMetaDataFieldTypeEnum;
(function (CustomFieldMetaDataFieldTypeEnum) {
    CustomFieldMetaDataFieldTypeEnum["Currency"] = "CURRENCY";
    CustomFieldMetaDataFieldTypeEnum["Date"] = "DATE";
    CustomFieldMetaDataFieldTypeEnum["DateTime"] = "DATE_TIME";
    CustomFieldMetaDataFieldTypeEnum["DayOfWeek"] = "DAY_OF_WEEK";
    CustomFieldMetaDataFieldTypeEnum["DecimalNumber"] = "DECIMAL_NUMBER";
    CustomFieldMetaDataFieldTypeEnum["Drilldown"] = "DRILLDOWN";
    CustomFieldMetaDataFieldTypeEnum["Dropdown"] = "DROPDOWN";
    CustomFieldMetaDataFieldTypeEnum["Email"] = "EMAIL";
    CustomFieldMetaDataFieldTypeEnum["ListBox"] = "LIST_BOX";
    CustomFieldMetaDataFieldTypeEnum["Month"] = "MONTH";
    CustomFieldMetaDataFieldTypeEnum["Name"] = "NAME";
    CustomFieldMetaDataFieldTypeEnum["Percent"] = "PERCENT";
    CustomFieldMetaDataFieldTypeEnum["PhoneNumber"] = "PHONE_NUMBER";
    CustomFieldMetaDataFieldTypeEnum["Radio"] = "RADIO";
    CustomFieldMetaDataFieldTypeEnum["SocialSecurityNumber"] = "SOCIAL_SECURITY_NUMBER";
    CustomFieldMetaDataFieldTypeEnum["State"] = "STATE";
    CustomFieldMetaDataFieldTypeEnum["Text"] = "TEXT";
    CustomFieldMetaDataFieldTypeEnum["TextArea"] = "TEXT_AREA";
    CustomFieldMetaDataFieldTypeEnum["User"] = "USER";
    CustomFieldMetaDataFieldTypeEnum["UserListBox"] = "USER_LIST_BOX";
    CustomFieldMetaDataFieldTypeEnum["Website"] = "WEBSITE";
    CustomFieldMetaDataFieldTypeEnum["WholeNumber"] = "WHOLE_NUMBER";
    CustomFieldMetaDataFieldTypeEnum["Year"] = "YEAR";
    CustomFieldMetaDataFieldTypeEnum["YesNo"] = "YES_NO";
})(CustomFieldMetaDataFieldTypeEnum = exports.CustomFieldMetaDataFieldTypeEnum || (exports.CustomFieldMetaDataFieldTypeEnum = {}));
var CustomFieldMetaDataRecordTypeEnum;
(function (CustomFieldMetaDataRecordTypeEnum) {
    CustomFieldMetaDataRecordTypeEnum["Contact"] = "CONTACT";
    CustomFieldMetaDataRecordTypeEnum["ReferralPartner"] = "REFERRAL_PARTNER";
    CustomFieldMetaDataRecordTypeEnum["Opportunity"] = "OPPORTUNITY";
    CustomFieldMetaDataRecordTypeEnum["TaskNoteAppointment"] = "TASK_NOTE_APPOINTMENT";
    CustomFieldMetaDataRecordTypeEnum["Company"] = "COMPANY";
    CustomFieldMetaDataRecordTypeEnum["Order"] = "ORDER";
    CustomFieldMetaDataRecordTypeEnum["Subscription"] = "SUBSCRIPTION";
})(CustomFieldMetaDataRecordTypeEnum = exports.CustomFieldMetaDataRecordTypeEnum || (exports.CustomFieldMetaDataRecordTypeEnum = {}));
//# sourceMappingURL=CustomFieldMetaData.js.map