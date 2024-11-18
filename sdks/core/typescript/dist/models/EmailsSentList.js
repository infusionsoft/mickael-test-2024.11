"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsSentList = void 0;
var EmailsSentList = (function () {
    function EmailsSentList() {
    }
    EmailsSentList.getAttributeTypeMap = function () {
        return EmailsSentList.attributeTypeMap;
    };
    EmailsSentList.discriminator = undefined;
    EmailsSentList.mapping = undefined;
    EmailsSentList.attributeTypeMap = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<EmailSentWithContent>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<EmailSentCreateError>",
            "format": ""
        }
    ];
    return EmailsSentList;
}());
exports.EmailsSentList = EmailsSentList;
//# sourceMappingURL=EmailsSentList.js.map