"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFieldRequestFieldTypeEnum = exports.CreateCustomFieldRequest = void 0;
var CreateCustomFieldRequest = (function () {
    function CreateCustomFieldRequest() {
    }
    CreateCustomFieldRequest.getAttributeTypeMap = function () {
        return CreateCustomFieldRequest.attributeTypeMap;
    };
    CreateCustomFieldRequest.discriminator = undefined;
    CreateCustomFieldRequest.mapping = undefined;
    CreateCustomFieldRequest.attributeTypeMap = [
        {
            "name": "fieldType",
            "baseName": "field_type",
            "type": "CreateCustomFieldRequestFieldTypeEnum",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "group_id",
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
            "type": "Array<CreateCustomFieldOptionRequest>",
            "format": ""
        },
        {
            "name": "userGroupId",
            "baseName": "user_group_id",
            "type": "string",
            "format": ""
        }
    ];
    return CreateCustomFieldRequest;
}());
exports.CreateCustomFieldRequest = CreateCustomFieldRequest;
var CreateCustomFieldRequestFieldTypeEnum;
(function (CreateCustomFieldRequestFieldTypeEnum) {
    CreateCustomFieldRequestFieldTypeEnum["Currency"] = "CURRENCY";
    CreateCustomFieldRequestFieldTypeEnum["Date"] = "DATE";
    CreateCustomFieldRequestFieldTypeEnum["DateTime"] = "DATE_TIME";
    CreateCustomFieldRequestFieldTypeEnum["DayOfWeek"] = "DAY_OF_WEEK";
    CreateCustomFieldRequestFieldTypeEnum["DecimalNumber"] = "DECIMAL_NUMBER";
    CreateCustomFieldRequestFieldTypeEnum["Drilldown"] = "DRILLDOWN";
    CreateCustomFieldRequestFieldTypeEnum["Dropdown"] = "DROPDOWN";
    CreateCustomFieldRequestFieldTypeEnum["Email"] = "EMAIL";
    CreateCustomFieldRequestFieldTypeEnum["ListBox"] = "LIST_BOX";
    CreateCustomFieldRequestFieldTypeEnum["Month"] = "MONTH";
    CreateCustomFieldRequestFieldTypeEnum["Name"] = "NAME";
    CreateCustomFieldRequestFieldTypeEnum["Percent"] = "PERCENT";
    CreateCustomFieldRequestFieldTypeEnum["PhoneNumber"] = "PHONE_NUMBER";
    CreateCustomFieldRequestFieldTypeEnum["Radio"] = "RADIO";
    CreateCustomFieldRequestFieldTypeEnum["SocialSecurityNumber"] = "SOCIAL_SECURITY_NUMBER";
    CreateCustomFieldRequestFieldTypeEnum["State"] = "STATE";
    CreateCustomFieldRequestFieldTypeEnum["Text"] = "TEXT";
    CreateCustomFieldRequestFieldTypeEnum["TextArea"] = "TEXT_AREA";
    CreateCustomFieldRequestFieldTypeEnum["User"] = "USER";
    CreateCustomFieldRequestFieldTypeEnum["UserListBox"] = "USER_LIST_BOX";
    CreateCustomFieldRequestFieldTypeEnum["Website"] = "WEBSITE";
    CreateCustomFieldRequestFieldTypeEnum["WholeNumber"] = "WHOLE_NUMBER";
    CreateCustomFieldRequestFieldTypeEnum["Year"] = "YEAR";
    CreateCustomFieldRequestFieldTypeEnum["YesNo"] = "YES_NO";
})(CreateCustomFieldRequestFieldTypeEnum = exports.CreateCustomFieldRequestFieldTypeEnum || (exports.CreateCustomFieldRequestFieldTypeEnum = {}));
//# sourceMappingURL=CreateCustomFieldRequest.js.map