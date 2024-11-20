"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusEnum = exports.User = void 0;
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.mapping = undefined;
    User.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "emailAddresses",
            "baseName": "email_addresses",
            "type": "Array<EmailAddress>",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "faxNumbers",
            "baseName": "fax_numbers",
            "type": "Array<FaxNumber>",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "globalUserId",
            "baseName": "global_user_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "keapId",
            "baseName": "keap_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>",
            "format": ""
        },
        {
            "name": "socialAccounts",
            "baseName": "social_accounts",
            "type": "Array<SocialAccount>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UserStatusEnum",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedBy",
            "baseName": "updated_by",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return User;
}());
exports.User = User;
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Active"] = "Active";
    UserStatusEnum["Invited"] = "Invited";
    UserStatusEnum["Inactive"] = "Inactive";
    UserStatusEnum["NotAUser"] = "NotAUser";
})(UserStatusEnum = exports.UserStatusEnum || (exports.UserStatusEnum = {}));
//# sourceMappingURL=User.js.map