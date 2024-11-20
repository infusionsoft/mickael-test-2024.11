"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleEmail = void 0;
var ApplicationConfigurationModuleEmail = (function () {
    function ApplicationConfigurationModuleEmail() {
    }
    ApplicationConfigurationModuleEmail.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleEmail.attributeTypeMap;
    };
    ApplicationConfigurationModuleEmail.discriminator = undefined;
    ApplicationConfigurationModuleEmail.mapping = undefined;
    ApplicationConfigurationModuleEmail.attributeTypeMap = [
        {
            "name": "appendContactKeyToLinks",
            "baseName": "append_contact_key_to_links",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "defaultOptInLink",
            "baseName": "default_opt_in_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultOptOutLink",
            "baseName": "default_opt_out_link",
            "type": "string",
            "format": ""
        },
        {
            "name": "hideEmailsToAndFromDomains",
            "baseName": "hide_emails_to_and_from_domains",
            "type": "string",
            "format": ""
        },
        {
            "name": "whitelistedDomains",
            "baseName": "whitelisted_domains",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleEmail;
}());
exports.ApplicationConfigurationModuleEmail = ApplicationConfigurationModuleEmail;
//# sourceMappingURL=ApplicationConfigurationModuleEmail.js.map