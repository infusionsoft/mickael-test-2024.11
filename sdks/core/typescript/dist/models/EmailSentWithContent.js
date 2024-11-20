"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSentWithContentOriginalProviderEnum = exports.EmailSentWithContent = void 0;
var EmailSentWithContent = (function () {
    function EmailSentWithContent() {
    }
    EmailSentWithContent.getAttributeTypeMap = function () {
        return EmailSentWithContent.attributeTypeMap;
    };
    EmailSentWithContent.discriminator = undefined;
    EmailSentWithContent.mapping = undefined;
    EmailSentWithContent.attributeTypeMap = [
        {
            "name": "clickedTime",
            "baseName": "clicked_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "string",
            "format": ""
        },
        {
            "name": "htmlContent",
            "baseName": "html_content",
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
            "name": "openedTime",
            "baseName": "opened_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalProvider",
            "baseName": "original_provider",
            "type": "EmailSentWithContentOriginalProviderEnum",
            "format": ""
        },
        {
            "name": "originalProviderId",
            "baseName": "original_provider_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "plainContent",
            "baseName": "plain_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "providerSourceId",
            "baseName": "provider_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "receivedTime",
            "baseName": "received_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentFromAddress",
            "baseName": "sent_from_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentFromReplyAddress",
            "baseName": "sent_from_reply_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentTime",
            "baseName": "sent_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentToAddress",
            "baseName": "sent_to_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "sentToBccAddressList",
            "baseName": "sent_to_bcc_address_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sentToCcAddressList",
            "baseName": "sent_to_cc_address_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }
    ];
    return EmailSentWithContent;
}());
exports.EmailSentWithContent = EmailSentWithContent;
var EmailSentWithContentOriginalProviderEnum;
(function (EmailSentWithContentOriginalProviderEnum) {
    EmailSentWithContentOriginalProviderEnum["Unknown"] = "UNKNOWN";
    EmailSentWithContentOriginalProviderEnum["Infusionsoft"] = "INFUSIONSOFT";
    EmailSentWithContentOriginalProviderEnum["Microsoft"] = "MICROSOFT";
    EmailSentWithContentOriginalProviderEnum["Google"] = "GOOGLE";
})(EmailSentWithContentOriginalProviderEnum = exports.EmailSentWithContentOriginalProviderEnum || (exports.EmailSentWithContentOriginalProviderEnum = {}));
//# sourceMappingURL=EmailSentWithContent.js.map