"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatchContactRequestSourceTypeEnum = exports.CreatePatchContactRequest = void 0;
var CreatePatchContactRequest = (function () {
    function CreatePatchContactRequest() {
    }
    CreatePatchContactRequest.getAttributeTypeMap = function () {
        return CreatePatchContactRequest.attributeTypeMap;
    };
    CreatePatchContactRequest.discriminator = undefined;
    CreatePatchContactRequest.mapping = undefined;
    CreatePatchContactRequest.attributeTypeMap = [
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
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomFieldValue>",
            "format": ""
        },
        {
            "name": "emailAddresses",
            "baseName": "email_addresses",
            "type": "Array<EmailAddressRequest>",
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
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "OriginRequest",
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
            "name": "socialAccounts",
            "baseName": "social_accounts",
            "type": "Array<SocialAccount>",
            "format": ""
        },
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "CreatePatchContactRequestSourceTypeEnum",
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
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmParameters",
            "baseName": "utm_parameters",
            "type": "CreateContactUtmPropertiesRequest",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }
    ];
    return CreatePatchContactRequest;
}());
exports.CreatePatchContactRequest = CreatePatchContactRequest;
var CreatePatchContactRequestSourceTypeEnum;
(function (CreatePatchContactRequestSourceTypeEnum) {
    CreatePatchContactRequestSourceTypeEnum["SourceTypeUnspecified"] = "SOURCE_TYPE_UNSPECIFIED";
    CreatePatchContactRequestSourceTypeEnum["Api"] = "API";
    CreatePatchContactRequestSourceTypeEnum["Appointment"] = "APPOINTMENT";
    CreatePatchContactRequestSourceTypeEnum["FormApiHosted"] = "FORM_API_HOSTED";
    CreatePatchContactRequestSourceTypeEnum["FormApiInternal"] = "FORM_API_INTERNAL";
    CreatePatchContactRequestSourceTypeEnum["Import"] = "IMPORT";
    CreatePatchContactRequestSourceTypeEnum["InternalForm"] = "INTERNAL_FORM";
    CreatePatchContactRequestSourceTypeEnum["LandingPage"] = "LANDING_PAGE";
    CreatePatchContactRequestSourceTypeEnum["Manual"] = "MANUAL";
    CreatePatchContactRequestSourceTypeEnum["Other"] = "OTHER";
    CreatePatchContactRequestSourceTypeEnum["Unknown"] = "UNKNOWN";
    CreatePatchContactRequestSourceTypeEnum["Webform"] = "WEBFORM";
})(CreatePatchContactRequestSourceTypeEnum = exports.CreatePatchContactRequestSourceTypeEnum || (exports.CreatePatchContactRequestSourceTypeEnum = {}));
//# sourceMappingURL=CreatePatchContactRequest.js.map