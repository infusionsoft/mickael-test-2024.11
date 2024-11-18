"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailSentRequestOriginalProviderEnum = exports.CreateEmailSentRequest = void 0;
var CreateEmailSentRequest = (function () {
    function CreateEmailSentRequest() {
    }
    CreateEmailSentRequest.getAttributeTypeMap = function () {
        return CreateEmailSentRequest.attributeTypeMap;
    };
    CreateEmailSentRequest.discriminator = undefined;
    CreateEmailSentRequest.mapping = undefined;
    CreateEmailSentRequest.attributeTypeMap = [
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
            "name": "openedTime",
            "baseName": "opened_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalProvider",
            "baseName": "original_provider",
            "type": "CreateEmailSentRequestOriginalProviderEnum",
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
    return CreateEmailSentRequest;
}());
exports.CreateEmailSentRequest = CreateEmailSentRequest;
var CreateEmailSentRequestOriginalProviderEnum;
(function (CreateEmailSentRequestOriginalProviderEnum) {
    CreateEmailSentRequestOriginalProviderEnum["Unknown"] = "UNKNOWN";
    CreateEmailSentRequestOriginalProviderEnum["Infusionsoft"] = "INFUSIONSOFT";
    CreateEmailSentRequestOriginalProviderEnum["Microsoft"] = "MICROSOFT";
    CreateEmailSentRequestOriginalProviderEnum["Google"] = "GOOGLE";
})(CreateEmailSentRequestOriginalProviderEnum = exports.CreateEmailSentRequestOriginalProviderEnum || (exports.CreateEmailSentRequestOriginalProviderEnum = {}));
//# sourceMappingURL=CreateEmailSentRequest.js.map