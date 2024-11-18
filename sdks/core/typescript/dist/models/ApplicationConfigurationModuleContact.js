"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationConfigurationModuleContact = void 0;
var ApplicationConfigurationModuleContact = (function () {
    function ApplicationConfigurationModuleContact() {
    }
    ApplicationConfigurationModuleContact.getAttributeTypeMap = function () {
        return ApplicationConfigurationModuleContact.attributeTypeMap;
    };
    ApplicationConfigurationModuleContact.discriminator = undefined;
    ApplicationConfigurationModuleContact.mapping = undefined;
    ApplicationConfigurationModuleContact.attributeTypeMap = [
        {
            "name": "addressLabels",
            "baseName": "address_labels",
            "type": "ApplicationConfigurationModuleContactAddressLabels",
            "format": ""
        },
        {
            "name": "contactTypes",
            "baseName": "contact_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultNewContactForm",
            "baseName": "default_new_contact_form",
            "type": "string",
            "format": ""
        },
        {
            "name": "disableContactEditInClientLogin",
            "baseName": "disable_contact_edit_in_client_login",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "faxTypes",
            "baseName": "fax_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneTypes",
            "baseName": "phone_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "suffixTypes",
            "baseName": "suffix_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleTypes",
            "baseName": "title_types",
            "type": "string",
            "format": ""
        }
    ];
    return ApplicationConfigurationModuleContact;
}());
exports.ApplicationConfigurationModuleContact = ApplicationConfigurationModuleContact;
//# sourceMappingURL=ApplicationConfigurationModuleContact.js.map