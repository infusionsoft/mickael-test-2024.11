"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSentCreateError = void 0;
var EmailSentCreateError = (function () {
    function EmailSentCreateError() {
    }
    EmailSentCreateError.getAttributeTypeMap = function () {
        return EmailSentCreateError.attributeTypeMap;
    };
    EmailSentCreateError.discriminator = undefined;
    EmailSentCreateError.mapping = undefined;
    EmailSentCreateError.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "CreateEmailSentRequest",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        }
    ];
    return EmailSentCreateError;
}());
exports.EmailSentCreateError = EmailSentCreateError;
//# sourceMappingURL=EmailSentCreateError.js.map