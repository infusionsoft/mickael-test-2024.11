"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSourceTypeEnum = exports.Contact = void 0;
var Contact = (function () {
    function Contact() {
    }
    Contact.getAttributeTypeMap = function () {
        return Contact.attributeTypeMap;
    };
    Contact.discriminator = undefined;
    Contact.mapping = undefined;
    Contact.attributeTypeMap = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<Address>",
            "format": ""
        },
        {
            "name": "anniversaryDate",
            "baseName": "anniversary_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthDate",
            "baseName": "birth_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "BasicCompany",
            "format": ""
        },
        {
            "name": "contactType",
            "baseName": "contact_type",
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
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValue>",
            "format": ""
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobTitle",
            "baseName": "job_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadsourceId",
            "baseName": "leadsource_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "Origin",
            "format": ""
        },
        {
            "name": "ownerId",
            "baseName": "owner_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumbers",
            "baseName": "phone_numbers",
            "type": "Array<PhoneNumber>",
            "format": ""
        },
        {
            "name": "preferredLocale",
            "baseName": "preferred_locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredName",
            "baseName": "preferred_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralCode",
            "baseName": "referral_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "scoreValue",
            "baseName": "score_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "socialAccounts",
            "baseName": "social_accounts",
            "type": "Array<SocialAccount>",
            "format": ""
        },
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "ContactSourceTypeEnum",
            "format": ""
        },
        {
            "name": "spouseName",
            "baseName": "spouse_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "suffix",
            "baseName": "suffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagIds",
            "baseName": "tag_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
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
            "name": "utmParameters",
            "baseName": "utm_parameters",
            "type": "Array<ContactUtmResponse>",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return Contact;
}());
exports.Contact = Contact;
var ContactSourceTypeEnum;
(function (ContactSourceTypeEnum) {
    ContactSourceTypeEnum["SourceTypeUnspecified"] = "SOURCE_TYPE_UNSPECIFIED";
    ContactSourceTypeEnum["Api"] = "API";
    ContactSourceTypeEnum["Appointment"] = "APPOINTMENT";
    ContactSourceTypeEnum["FormApiHosted"] = "FORM_API_HOSTED";
    ContactSourceTypeEnum["FormApiInternal"] = "FORM_API_INTERNAL";
    ContactSourceTypeEnum["Import"] = "IMPORT";
    ContactSourceTypeEnum["InternalForm"] = "INTERNAL_FORM";
    ContactSourceTypeEnum["LandingPage"] = "LANDING_PAGE";
    ContactSourceTypeEnum["Manual"] = "MANUAL";
    ContactSourceTypeEnum["Other"] = "OTHER";
    ContactSourceTypeEnum["Unknown"] = "UNKNOWN";
    ContactSourceTypeEnum["Webform"] = "WEBFORM";
})(ContactSourceTypeEnum = exports.ContactSourceTypeEnum || (exports.ContactSourceTypeEnum = {}));
//# sourceMappingURL=Contact.js.map