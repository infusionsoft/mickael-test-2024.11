"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSendRequest = void 0;
var EmailSendRequest = (function () {
    function EmailSendRequest() {
    }
    EmailSendRequest.getAttributeTypeMap = function () {
        return EmailSendRequest.attributeTypeMap;
    };
    EmailSendRequest.discriminator = undefined;
    EmailSendRequest.mapping = undefined;
    EmailSendRequest.attributeTypeMap = [
        {
            "name": "addressField",
            "baseName": "address_field",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<EmailSendRequestAttachment>",
            "format": ""
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "htmlContent",
            "baseName": "html_content",
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
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }
    ];
    return EmailSendRequest;
}());
exports.EmailSendRequest = EmailSendRequest;
//# sourceMappingURL=EmailSendRequest.js.map